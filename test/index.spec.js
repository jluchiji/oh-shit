/**
 * test/index.spec.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */
const test         = require('ava');

const OhShit       = require('../src');


test('w/out new', t => {

  const err = OhShit(500);

  t.true(err instanceof Error);
  t.true(err.ohshit);

});


test('w/ new', t => {

  const err = new OhShit(500);

  t.true(err instanceof Error);
  t.true(err.ohshit);

});


test('unknown code', t => {

  const err = OhShit('Shit Happened!');

  t.is(err.status, 500);
  t.is(err.message, 'Shit Happened!');
  t.is(err.code, 'unknown_error');

});


test('null code', t => {

  const err = OhShit();

  t.is(err.code, 'unknown_error');
  t.is(err.message, 'Internal Server Error');

});


test('unknown status', t => {

  const err = OhShit(null, { status: 999 });

  t.is(err.code, 'unknown_error');
  t.is(err.message, 'Unknown Error');

});


test('data shorthand', t => {

  const err = new OhShit(500, { foo: 'bar' }, null);

  t.is(err.data.foo, 'bar');

});


test('error wrapping', t => {

  const err = OhShit(500, {
    error: OhShit(404, { message: 'foobar' })
  });

  t.is(err.status, 500);
  t.is(err.message, 'foobar');

});


test('sensitive error wrapping', t => {

  const err = OhShit(500, {
    error: OhShit(404, { message: 'foobar' }, { flags: { sensitive: true } })
  });

  t.is(err.status, 500);
  t.is(err.message, 'Internal Server Error');

});
