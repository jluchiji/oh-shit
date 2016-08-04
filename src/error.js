/**
 * error.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license WTFPL
 */
/* eslint no-cond-assign: 0 */
const _            = require('lodash');


/**
 * Basic error fields
 */
const fields = [
  'name',
  'code',
  'status',
  'message',
  'details'
];



/**
 * OhShit error class
 */
class OhShitError extends Error {



  /**
   * Creates a new OhShitError instance
   *
   * @param  {String} code Error code
   * @param  {Object} opts Additional options and data
   * @return {Object}      OhShitError instance
   */
  constructor(code = 500, opts = { }) {
    const { name, message, status } = opts;


    /* Retrieve the predefined error config */
    const predef = OhShitError.dictionary[code];


    /* Retrieve the predefined error information */
    const meta = _.defaults({
      name,
      message,
      status
    }, predef, {
      message: code,
      status: 500
    });


    /* Generate the default name */
    if (!meta.name) {
      const prefix = _
        .chain(meta.message)
        .camelCase()
        .upperFirst()
        .replace(/error$/i, '')
        .value();
      meta.name = `${prefix}Error`;
    }


    /* Initialize superclass */
    super(meta.message);


    /* Set basic flags and error code */
    this.ohshit = true;
    this.code = code;


    /* Unwrap and set the cause */
    let cause = opts.cause;
    while (cause && cause.orig) {
      cause = cause.orig;
    }
    this.cause = cause;


    /* Set other elements */
    Object.assign(this, meta);


    /* The rest of opts go into err.details */
    this.details = _.omit(opts, ...fields, 'cause');

  }



  /**
   * Serializes the error into a plain JSON object
   *
   * @return {Object} Plain JSON representation of the OhShitError
   */
  deflate() {
    const result = {
      ohshit: true,
      serialized: true
    };

    /* Serialize the basic flags */
    result.name = this.name;
    result.code = this.code;
    result.status = this.status;
    result.details = this.details;
    result.message = this.message;

    /* Serialize the stack trace */
    result.stack = this.stack;

    /* Serialize all wrapped errors */
    if (this.cause && this.cause.ohshit && !this.cause.serialized) {
      result.cause = this.cause.deflate();
    } else if (this.cause instanceof Error) {
      result.cause = _.pick(this.cause, Object.getOwnPropertyNames(this.cause));
    } else {
      result.cause = this.cause;
    }

    return result;
  }



  /**
   * Generates a summary of the error
   *
   * @param  {Boolean} [public=false] Specifies whether to include wrapped errors
   * @return {Object}                 Plain JSON object summary of the error
   */
  summary(all = false) {
    const summary = _.pick(this, ...fields);

    /* If all = true, we also include private information */
    if (all) {
      summary.stack = this.stack;

      /* Create the wrapping path of errors */
      const chain = [ ];
      let error = this;
      do { chain.push(error); } while ((error = error.cause));

      /* Error name should be first 3 errors */
      summary.name = _(chain)
        .take(3)
        .map('name')
        .join(' ← ');
      if (chain.length > 3) { summary.name = `${summary.name} ...`; }

      /* Include causes path */
      summary.causes = _.map(chain, i => _.pick(i, ...fields, 'stack'));
    }

    return summary;
  }



  /**
   * Generates a string representation of the error
   *
   * @param  {Boolean} all If true, generates full name with causation chain
   * @return {String}      String representation of the error
   */
  toString(all = false) {
    return `[OhShitError: ${this.summary(all).name}]`;
  }



  /**
   * @static
   * Loads a hash of predefined error configurations
   */
  static load(map) {
    Object.assign(OhShitError.dictionary, map);
  }



  /**
   * @static
   * Deserializes the serialized representation of OhShitError
   */
  static inflate(data) {

    /* Return null if data is falsy */
    if (!data) { return null; }


    /* Construct the code and opts object */
    const code = data.code;
    const opts = {
      name: data.name,
      status: data.status,
      message: data.message,
      cause: OhShitError.inflate(data.cause)
    };


    /* Construct the new OhShitError object */
    const error = new OhShitError(code, opts);


    /* Overwrite the stack trace */
    error.stack = data.stack;
    error.details = data.details;


    return error;
  }



  /**
   * @static
   * Wraps a given error into a given OhShit error, and rethrows it
   */
  static wrap(code, opts) {
    return (err) => {

      /* Create the wrapped error */
      const _opts = _.assign({ cause: err }, opts);
      const shit = new OhShitError(code, _opts);

      throw shit;
    };
  }


}


/**
 * Predefined code dictionary
 */
OhShitError.dictionary = { };


module.exports = OhShitError;
