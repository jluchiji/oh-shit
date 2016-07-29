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
  t.is(err.code, 'not_specified');

});


test('null code', t => {

  const err = OhShit();

  t.is(err.code, 'not_specified');
  t.is(err.message, 'Internal Server Error');

});
