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
   * Destructure opts
   */
  let {
    message,
    status = 500,
    flags = { },
    error = null
  } = opts;


  /**
   * Allow direct calls without new keyword
   */
  if (!(this instanceof OhShit)) {
    return new OhShit(code, { status, message, data, flags, error });
  }


  /**
   * Always set the ohshit flag to true for easier detection
   */
  this.ohshit = true;


  /**
   * Copy inner error's message if:
   *  - We are wrapping an error
   *  - We don't have an explicit message set
   *  - The inner error is not sensitive
   */
  if (error && !error.sensitive && !message) {
    message = error.message;
  }


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
 * Error map loader
 */
OhShit.load = function(map) {
  Object.assign(codes, map);
};


/**
 * Load predefined HTTP errors
 */
OhShit.load(HttpErrors);
