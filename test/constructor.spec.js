/**
 * test/constructor.spec.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license WTFPL
 */
const test         = require('ava');

const OhShit       = require('../src');


test(t => {

  const e = OhShit();

  t.true(e instanceof Error);
  t.true(e instanceof OhShit.Error);

  t.is(e.status, 500);
  t.is(e.name, 'InternalServerError');
  t.is(e.message, 'Internal Server Error');

});


test('predefined', t => {

  const e = OhShit(404);

  t.is(e.status, 404);
  t.is(e.name, 'NotFoundError');
  t.is(e.message, 'Not Found');

});


test('name in opts', t => {

  const e = OhShit(404, { name: 'HorribleError' });

  t.is(e.name, 'HorribleError');
  t.is(e.message, 'Not Found');

});


test('unwrap cause', t => {

  const cause = {
    orig: { orig: { orig: new Error('test') } }
  };
  const e = OhShit(404, { cause });

  t.true(e.cause instanceof Error);
  t.is(e.cause.message, 'test');

});


test('manual override', t => {

  const e = OhShit(404, {
    message: 'Crash and burn',
    status: 503
  });

  t.is(e.name, 'CrashAndBurnError');
  t.is(e.message, 'Crash and burn');
  t.is(e.status, 503);

});
