/**
 * index.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */
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
function OhShit(code, {
  message,
  status = 500,
  data = { },
  flags = { },
  error = null
} = { }) {


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
   * Retrieve the error code information, or set our defaults
   */
  if (codes[code]) {
    const predef = codes[code];

    status = predef.status;
    message = predef.message;
    flags = Object.assign({ }, predef.flags, flags);

  } else {

    const http = HttpErrors[status];

    message = code || (http && http.message) || 'Unknown Error';
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
