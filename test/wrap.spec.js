/**
 * test/wrap.spec.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license 2015-16 (C) Ricepo LLC. All Rights Reserved.
 */
const test         = require('ava');
const _            = require('lodash');

const OhShit       = require('../src');



test(t => {

  const f = OhShit.wrap(500, { cause: OhShit(404) });

  t.throws(() => f(OhShit(404)), 'Internal Server Error');

});
