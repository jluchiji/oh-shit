/**
 * http-errors.js
 *
 * @author  Bob Holt <bobholt@gmail.com>
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license WTFPL
 */
module.exports = {

    /**
     * RFC 7231 - http://tools.ietf.org/html/rfc7231#page-47
     */
  400: {
    status: 400,
    name: 'Bad Request',
    message: 'Bad Request'
  },
  401: {
    status: 401,
    name: 'Unauthorized',
    message: 'Unauthorized'
  },
  402: {
    status: 402,
    name: 'Payment Required',
    message: 'Payment Required'
  },
  403: {
    status: 403,
    name: 'Forbidden',
    message: 'Forbidden'
  },
  404: {
    status: 404,
    name: 'Not Found',
    message: 'Not Found'
  },
  405: {
    status: 405,
    name: 'Method Not Allowed',
    message: 'Method Not Allowed'
  },
  406: {
    status: 406,
    name: 'Not Acceptable',
    message: 'Not Acceptable'
  },
  407: {
    status: 407,
    name: 'Proxy Authentication Required',
    message: 'Proxy Authentication Required'
  },
  408: {
    status: 408,
    name: 'Request Timeout',
    message: 'Request Timeout'
  },
  409: {
    status: 409,
    name: 'Conflict',
    message: 'Conflict'
  },
  410: {
    status: 410,
    name: 'Gone',
    message: 'Gone'
  },
  411: {
    status: 411,
    name: 'Length Required',
    message: 'Length Required'
  },
  412: {
    status: 412,
    name: 'Precondition Failed',
    message: 'Precondition Failed'
  },
  413: {
    status: 413,
    name: 'Request Entity Too Large',
    message: 'Request Entity Too Large'
  },
  414: {
    status: 414,
    name: 'Request-URI Too Long',
    message: 'Request-URI Too Long'
  },
  415: {
    status: 415,
    name: 'Unsupported Media Type',
    message: 'Unsupported Media Type'
  },
  416: {
    status: 416,
    name: 'Requested Range Not Satisfiable',
    message: 'Requested Range Not Satisfiable'
  },
  417: {
    status: 417,
    name: 'Expectation Failed',
    message: 'Expectation Failed'
  },
  426: {
    status: 426,
    name: 'Upgrade Required',
    message: 'Upgrade Required'
  },


    /**
     * RFC 2324 :-P - http://tools.ietf.org/html/rfc2324
     */
  418: {
    status: 418,
    name: 'I am A Teapot',
    message: "I'm A Teapot"
  },


    /**
     * RFC 4918 - https://tools.ietf.org/html/rfc4918#page-78
     */
  422: {
    status: 422,
    name: 'Unprocessable Entity',
    message: 'Unprocessable Entity'
  },
  423: {
    status: 423,
    name: 'Locked',
    message: 'Locked'
  },
  424: {
    status: 424,
    name: 'Failed Dependency',
    message: 'Failed Dependency'
  },


    /**
     * RFC 6585 - http://tools.ietf.org/html/rfc6585
     */
  428: {
    status: 428,
    name: 'Precondition Required',
    message: 'Precondition Required'
  },
  429: {
    status: 429,
    name: 'Too Many Requests',
    message: 'Too Many Requests'
  },
  431: {
    status: 431,
    name: 'Header Fields Too Large',
    message: 'Header Fields Too Large'
  },


    /**
     * Draft - http://tools.ietf.org/html/draft-tbray-http-legally-restricted-status-05
     */
  451: {
    status: 451,
    name: 'Unavailable For Legal Reasons',
    message: 'Unavailable For Legal Reasons'
  },


    /**
     * RFC 7231 - http://tools.ietf.org/html/rfc7231#page-47
     */
  500: {
    status: 500,
    name: 'Internal Server Error',
    message: 'Internal Server Error'
  },
  501: {
    status: 501,
    name: 'Not Implemented',
    message: 'Not Implemented'
  },
  502: {
    status: 502,
    name: 'Bad Gateway',
    message: 'Bad Gateway'
  },
  503: {
    status: 503,
    name: 'Service Unavailable',
    message: 'Service Unavailable'
  },
  504: {
    status: 504,
    name: 'Gateway Timeout',
    message: 'Gateway Timeout'
  },
  505: {
    status: 505,
    name: 'HTTP Version Not Supported',
    message: 'HTTP Version Not Supported'
  },


    /**
     * RFC 2295 - https://tools.ietf.org/html/rfc2295#page-25
     */
  506: {
    status: 506,
    name: 'Variant Also Negotiates',
    message: 'Variant Also Negotiates'
  },


    /**
     * RFC 4918 - https://tools.ietf.org/html/rfc4918#page-78
     */
  507: {
    status: 507,
    name: 'Insufficient Storage',
    message: 'Insufficient Storage'
  },


    /**
     * RFC 5842 - https://tools.ietf.org/html/rfc5842#page-31
     */
  508: {
    status: 508,
    name: 'Loop Detected',
    message: 'Loop Detected'
  },


    /**
     * RFC 2774 - https://tools.ietf.org/html/rfc2774#page-11
     */
  510: {
    status: 510,
    name: 'Not Extended',
    message: 'Not Extended'
  },


    /**
     * RFC 6585 - http://tools.ietf.org/html/rfc6585
     */
  511: {
    status: 511,
    name: 'Network Authentication Required',
    message: 'Network Authentication Required'
  }


};
