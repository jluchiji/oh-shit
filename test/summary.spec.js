/**
 * test/deflate.spec.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license WTFPL
 */
const test         = require('ava');
const _            = require('lodash');

const OhShit       = require('../src');


test(t => {

  const e = OhShit(500, { cause: OhShit(404) });
  const s = e.summary();

  t.deepEqual(s, {
    name: 'InternalServerError',
    code: 'internal-server-error',
    status: 500,
    message: 'Internal Server Error',
    details: { }
  });

});


test('all = true', t => {

  const e = OhShit(500, { cause: OhShit(404) });
  const s = e.summary(true);

  t.is(s.message, 'Internal Server Error ← Not Found');
  t.is(s.stack, e.stack);
  t.is(s.causes.length, 2);
  t.is(s.causes[1].status, 404);
  t.is(s.causes[1].stack, e.cause.stack);

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

  t.is(s.message, 'Internal Server Error ← Not Found ← Bad Request ...');
  t.is(s.causes.length, 4);

  const n = _.map(s.causes, 'status');

  t.deepEqual(n, [ 500, 404, 400, 403 ]);

});
