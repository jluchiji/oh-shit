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
  400: { status: 400, message: 'Bad Request' },
  401: { status: 401, message: 'Unauthorized' },
  402: { status: 402, message: 'Payment Required' },
  403: { status: 403, message: 'Forbidden' },
  404: { status: 404, message: 'Not Found' },
  405: { status: 405, message: 'Method Not Allowed' },
  406: { status: 406, message: 'Not Acceptable' },
  407: { status: 407, message: 'Proxy Authentication Required' },
  408: { status: 408, message: 'Request Timeout' },
  409: { status: 409, message: 'Conflict' },
  410: { status: 410, message: 'Gone' },
  411: { status: 411, message: 'Length Required' },
  412: { status: 412, message: 'Precondition Failed' },
  413: { status: 413, message: 'Request Entity Too Large' },
  414: { status: 414, message: 'Request-URI Too Long' },
  415: { status: 415, message: 'Unsupported Media Type' },
  416: { status: 416, message: 'Requested Range Not Satisfiable' },
  417: { status: 417, message: 'Expectation Failed' },
  426: { status: 426, message: 'Upgrade Required' },


  /**
   * RFC 2324 :-P - http://tools.ietf.org/html/rfc2324
   */
  418: { status: 418, message: "I'm A Teapot" },


  /**
   * RFC 4918 - https://tools.ietf.org/html/rfc4918#page-78
   */
  422: { status: 422, message: 'Unprocessable Entity' },
  423: { status: 423, message: 'Locked' },
  424: { status: 424, message: 'Failed Dependency' },


  /**
   * RFC 6585 - http://tools.ietf.org/html/rfc6585
   */
  428: { status: 428, message: 'Precondition Required' },
  429: { status: 429, message: 'Too Many Requests' },
  431: { status: 431, message: 'Header Fields Too Large' },


  /**
   * Draft - http://tools.ietf.org/html/draft-tbray-http-legally-restricted-status-05
   */
  451: { status: 451, message: 'Unavailable For Legal Reasons' },


  /**
   * RFC 7231 - http://tools.ietf.org/html/rfc7231#page-47
   */
  500: { status: 500, message: 'Internal Server Error' },
  501: { status: 501, message: 'Not Implemented' },
  502: { status: 502, message: 'Bad Gateway' },
  503: { status: 503, message: 'Service Unavailable' },
  504: { status: 504, message: 'Gateway Timeout' },
  505: { status: 505, message: 'HTTP Version Not Supported' },


  /**
   * RFC 2295 - https://tools.ietf.org/html/rfc2295#page-25
   */
  506: { status: 506, message: 'Variant Also Negotiates' },


  /**
   * RFC 4918 - https://tools.ietf.org/html/rfc4918#page-78
   */
  507: { status: 507, message: 'Insufficient Storage' },


  /**
   * RFC 5842 - https://tools.ietf.org/html/rfc5842#page-31
   */
  508: { status: 508, message: 'Loop Detected' },


  /**
   * RFC 2774 - https://tools.ietf.org/html/rfc2774#page-11
   */
  510: { status: 510, message: 'Not Extended' },


  /**
   * RFC 6585 - http://tools.ietf.org/html/rfc6585
   */
  511: { status: 511, message: 'Network Authentication Required' }


};
