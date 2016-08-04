/**
 * test/to-string.spec.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license 2015-16 (C) Ricepo LLC. All Rights Reserved.
 */
const test         = require('ava');
const _            = require('lodash');

const OhShit       = require('../src');



test(t => {

  const e = OhShit(500, { cause: OhShit(404) });
  const s = e.toString();

  t.is(s, '[OhShitError: InternalServerError]');

});


test('all = true', t => {

  const e = OhShit(500, { cause: OhShit(404) });
  const s = e.toString(true);

  t.is(s, '[OhShitError: InternalServerError ← NotFoundError]');

});


test('long chain', t => {

  const e = OhShit(500, {
    cause: OhShit(404, {
      cause: OhShit(400, {
        cause: OhShit(403)
      })
    })
  });
  const s = e.toString(true);

  t.is(s, '[OhShitError: InternalServerError ← NotFoundError ← BadRequestError ...]');

});
