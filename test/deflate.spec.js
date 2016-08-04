/**
 * test/deflate.spec.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license WTFPL
 */
const test         = require('ava');

const OhShit       = require('../src');


test(t => {

  const e = OhShit(500, { cause: OhShit(404) });
  const s = e.deflate();

  t.true(s.ohshit);
  t.true(s.serialized);
  t.is(s.stack, e.stack);

  t.true(s.cause.ohshit);
  t.true(s.cause.serialized);
  t.is(s.cause.message, 'Not Found');

});


test('Error cause', t => {

  const e = OhShit(500, { cause: new Error('Horrible Error') });
  const s = e.deflate();

  t.false(s.cause instanceof Error);
  t.is(s.cause.message, 'Horrible Error');

});


test('other cause', t => {

  const e = OhShit(500, { cause: { foo: 'bar' } });
  const s = e.deflate();

  t.is(s.cause.foo, 'bar');

});
