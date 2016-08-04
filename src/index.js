/**
 * index.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */
const HttpErrors   = require('./data/http-errors');
const OhShitError  = require('./error');

module.exports     = OhShit;



/**
 * Factory function
 */
function OhShit(code, opts) {
  return new OhShitError(code, opts);
}



/**
 * Export various utilities
 */
OhShit.Error = OhShitError;
OhShit.load = OhShitError.load;
OhShit.wrap = OhShitError.wrap;
OhShit.inflate = OhShitError.inflate;



/**
 * Load the predefined config data
 */
OhShitError.load(HttpErrors);
