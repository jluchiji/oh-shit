## OhShit!

> Yet another HTTP error library

OhShit was designed with services like [Sentry](http://getsentry.com) and
[Seneca](https://github.com/senecajs/seneca) in mind, where simply throwing
a plain `Error` does not provide enough information. OnShit! also provides
developers the ability to choose which HTTP error codes to return with the
response.

OhShit errors can be wrapped in multiple layers, so that sensitive error
information can be hidden from the public. Meanwhile, a helpful causation
chain mechanism allows precise capture of exactly what went wrong.

## Getting Started
```sh
$ npm install oh-shit --save
```
```js
const OhShit       = require('oh-shit');

throw OhShit();
// 500 - Internal Server Error
```

You can also specify HTTP error codes
```js
throw OhShit(404);
// 404 - Not Found
```

You can define custom codes
```js
OhShit.load({
  'something_bad': { status: 400, message: 'Kaboom!' }
});

throw OhShit('something_bad');
// 400 - Kaboom!
```

You can also add more information
```js
throw OhShit('something_bad', {
  status: 404,
  message: 'Oops!',
  details: 'here',
  cause: new Error('original error')
});

// 404 - Oops!
// err.cause -> [Error: original error]
// err.details -> { details: 'here' }
```

When you need to send an error response, you can do this
```js
throw OhShit('auth-failed', {
  cause: OhShit('user-not-found')
});
```
```js
function(err, req, res, next) {
  res
    .status(err.status)
    .send(err.summary());
}
```

Meanwhile, you can access the entire causation chain by doing this
```js
const data = err.summary(true);

/* Now you can send this off to Sentry or write to logs */
```


## License

[WTFPL](http://www.wtfpl.net)
