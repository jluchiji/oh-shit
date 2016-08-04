/**
 * test/deflate.spec.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license 2015-16 (C) Ricepo LLC. All Rights Reserved.
 */
const test         = require('ava');
const _            = require('lodash');

const OhShit       = require('../src');


test(t => {

  const e = OhShit(500, { cause: OhShit(404) });
  const s = e.summary();

  t.deepEqual(s, {
    name: 'InternalServerError',
    code: 500,
    status: 500,
    message: 'Internal Server Error',
    details: { }
  });

});


test('all = true', t => {

  const e = OhShit(500, { cause: OhShit(404) });
  const s = e.summary(true);

  t.is(s.name, 'InternalServerError ← NotFoundError');
  t.is(s.stack, e.stack);
  t.is(s.causes.length, 1);
  t.is(s.causes[0].status, 404);
  t.is(s.causes[0].stack, e.cause.stack);

});


test('long chain', t => {

  const e = OhShit(500, {
    cause: OhShit(404, {
      cause: OhShit(400, {
        cause: OhShit(403)
      })
    })
  });
  const s = e.summary(true);

  t.is(s.name, 'InternalServerError ← NotFoundError ← BadRequestError ...');
  t.is(s.causes.length, 3);

  const n = _.map(s.causes, 'status');

  t.deepEqual(n, [ 404, 400, 403 ]);

});
