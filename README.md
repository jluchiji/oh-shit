## OhShit!

> Yet another HTTP error library

OhShit was designed with services like [Sentry](http://getsentry.com) in mind, where simply throwing
a plain `Error` does not provide enough information. OnShit! also provides developers the ability
to choose which HTTP error codes to return with the response.

Also, it is possible to control the exact response via flags. For example, if an error is marked
`sensitive` then it would be a bad idea to divulge details to the client, right?

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
  data: { details: 'here' },
  error: new Error('original error')
});

// 404 - Oops!
// err.original -> [Error: original error]
// err.data -> { details: 'here' }
```


## License

[WTFPL](http://www.wtfpl.net)
