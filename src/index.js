/**
 * index.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */
/* eslint prefer-const: 1 */
const Util         = require('util');
const HttpErrors   = require('./http-errors');

module.exports     = OhShit;


/**
 * Global map of error codes to predefined configurations
 */
const codes = { };


/**
 * The error generator
 */
function OhShit(code, data, opts) {


  /**
   * data is optional
   */
  if (typeof opts === 'undefined') {
    opts = data || { };
    data = opts.data || { };
  }


  /**
   * opts defaults
   */
  opts = opts || { };


  /**
   * Allow errors as opts
   */
  if (opts instanceof Error) {
    opts = { wrap: opts };
  }


  /**
   * Destructure opts
   */
  let {
    message,
    status = 500,
    flags = { },
    wrap = null
  } = opts;
  const error = wrap || opts.error || null;


  /**
   * Allow direct calls without new keyword
   */
  if (!(this instanceof OhShit)) {
    return new OhShit(code, data, opts);
  }


  /**
   * Always set the ohshit flag to true for easier detection
   */
  this.ohshit = true;


  /**
   * Retrieve the error code information, or set our defaults
   */
  if (codes[code]) {
    const predef = codes[code];

    status = predef.status;
    message = message || predef.message;
    flags = Object.assign({ }, predef.flags, flags);

  } else {

    const http = HttpErrors[status];

    message = message || code || (http && http.message) || 'Unknown Error';
    code = 'unknown_error';
  }


  /**
   * Attach flags to the created error
   */
  Object.assign(this, flags);
  this.status = status;
  this.message = message;
  this.data = data;
  this.code = code;
  this.wrapped = error;

}
Util.inherits(OhShit, Error);


/**
 * Function to unwrap errors
 * Since error instances may be serialized, we make this a static method
 */
OhShit.unwrap = function(err) {
  const data = { };

  let current = err;
  while (current.wrapped) {
    Object.assign(data, current.data);
    current = current.wrapped;
  }

  /* Keep original error status */
  current.status = err.status;
  current.data = data;
  current.data.parent = err;

  return current;
};



/**
 * Error map loader
 */
OhShit.load = function(map) {
  Object.assign(codes, map);
};


/**
 * Load predefined HTTP errors
 */
OhShit.load(HttpErrors);
