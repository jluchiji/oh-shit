/**
 * test/deflate.spec.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license WTFPL
 */
const test         = require('ava');

const OhShit       = require('../src');


test(t => {

  const d = { ohshit: true,
    serialized: true,
    name: 'InternalServerError',
    code: 500,
    status: 500,
    details: {},
    message: 'Internal Server Error',
    stack: 'InternalServerError: Internal Server Error\n    at OhShitError (/Users/denis/Projects/personal/oh-shit/lib/error.js:57:10)\n    at OhShit (/Users/denis/Projects/personal/oh-shit/lib/index.js:16:10)\n    at repl:2:11\n    at REPLServer.defaultEval (repl.js:262:27)\n    at bound (domain.js:287:14)\n    at REPLServer.runBound [as eval] (domain.js:300:12)\n    at REPLServer.<anonymous> (repl.js:431:12)\n    at emitOne (events.js:82:20)\n    at REPLServer.emit (events.js:169:7)\n    at REPLServer.Interface._onLine (readline.js:211:10)',
    cause:
     { ohshit: true,
       serialized: true,
       name: 'NotFoundError',
       code: 404,
       status: 404,
       details: {},
       message: 'Not Found',
       stack: 'NotFoundError: Not Found\n    at OhShitError (/Users/denis/Projects/personal/oh-shit/lib/error.js:57:10)\n    at OhShit (/Users/denis/Projects/personal/oh-shit/lib/index.js:16:10)\n    at repl:2:32\n    at REPLServer.defaultEval (repl.js:262:27)\n    at bound (domain.js:287:14)\n    at REPLServer.runBound [as eval] (domain.js:300:12)\n    at REPLServer.<anonymous> (repl.js:431:12)\n    at emitOne (events.js:82:20)\n    at REPLServer.emit (events.js:169:7)\n    at REPLServer.Interface._onLine (readline.js:211:10)',
       cause: undefined
     }
   };
   const e = OhShit.inflate(d);


   t.true(e instanceof OhShit.Error);
   t.true(e.cause instanceof OhShit.Error);
   t.is(e.name, 'InternalServerError');
   t.is(e.cause.name, 'NotFoundError');

});


test('uninflatable cause', t => {

  const d = { ohshit: true,
    serialized: true,
    name: 'InternalServerError',
    code: 500,
    status: 500,
    details: {},
    message: 'Internal Server Error',
    stack: 'InternalServerError: Internal Server Error\n    at OhShitError (/Users/denis/Projects/personal/oh-shit/lib/error.js:57:10)\n    at OhShit (/Users/denis/Projects/personal/oh-shit/lib/index.js:16:10)\n    at repl:2:11\n    at REPLServer.defaultEval (repl.js:262:27)\n    at bound (domain.js:287:14)\n    at REPLServer.runBound [as eval] (domain.js:300:12)\n    at REPLServer.<anonymous> (repl.js:431:12)\n    at emitOne (events.js:82:20)\n    at REPLServer.emit (events.js:169:7)\n    at REPLServer.Interface._onLine (readline.js:211:10)',
    cause:
     {
       name: 'NotFoundError',
       code: 404,
       status: 404,
       details: {},
       message: 'Not Found',
       stack: 'NotFoundError: Not Found\n    at OhShitError (/Users/denis/Projects/personal/oh-shit/lib/error.js:57:10)\n    at OhShit (/Users/denis/Projects/personal/oh-shit/lib/index.js:16:10)\n    at repl:2:32\n    at REPLServer.defaultEval (repl.js:262:27)\n    at bound (domain.js:287:14)\n    at REPLServer.runBound [as eval] (domain.js:300:12)\n    at REPLServer.<anonymous> (repl.js:431:12)\n    at emitOne (events.js:82:20)\n    at REPLServer.emit (events.js:169:7)\n    at REPLServer.Interface._onLine (readline.js:211:10)',
       cause: null,
       extra: 'property'
     }
   };
   const e = OhShit.inflate(d);


   t.true(e instanceof OhShit.Error);
   t.true(e.cause instanceof OhShit.Error);
   t.is(e.name, 'InternalServerError');
   t.is(e.cause.name, 'NotFoundError');
   t.is(e.cause.details.extra, 'property');

});
