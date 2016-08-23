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
    code: 'bad-request',
    name: 'BadRequestError',
    message: 'Bad Request'
  },
  401: {
    status: 401,
    code: 'unauthorized',
    name: 'UnauthorizedError',
    message: 'Unauthorized'
  },
  402: {
    status: 402,
    code: 'payment-required',
    name: 'PaymentRequiredError',
    message: 'Payment Required'
  },
  403: {
    status: 403,
    code: 'forbidden',
    name: 'ForbiddenError',
    message: 'Forbidden'
  },
  404: {
    status: 404,
    code: 'not-found',
    name: 'NotFoundError',
    message: 'Not Found'
  },
  405: {
    status: 405,
    code: 'method-not-allowed',
    name: 'MethodNotAllowedError',
    message: 'Method Not Allowed'
  },
  406: {
    status: 406,
    code: 'not-acceptable',
    name: 'NotAcceptableError',
    message: 'Not Acceptable'
  },
  407: {
    status: 407,
    code: 'proxy-authentication-required',
    name: 'ProxyAuthenticationRequiredError',
    message: 'Proxy Authentication Required'
  },
  408: {
    status: 408,
    code: 'request-timeout',
    name: 'RequestTimeoutError',
    message: 'Request Timeout'
  },
  409: {
    status: 409,
    code: 'conflict',
    name: 'ConflictError',
    message: 'Conflict'
  },
  410: {
    status: 410,
    code: 'gone',
    name: 'GoneError',
    message: 'Gone'
  },
  411: {
    status: 411,
    code: 'length-required',
    name: 'LengthRequiredError',
    message: 'Length Required'
  },
  412: {
    status: 412,
    code: 'precondition-failed',
    name: 'PreconditionFailedError',
    message: 'Precondition Failed'
  },
  413: {
    status: 413,
    code: 'request-entity-too-large',
    name: 'RequestEntityTooLargeError',
    message: 'Request Entity Too Large'
  },
  414: {
    status: 414,
    code: 'request-uri-too-long',
    name: 'RequestUriTooLongError',
    message: 'Request-URI Too Long'
  },
  415: {
    status: 415,
    code: 'unsupported-media-type',
    name: 'UnsupportedMediaTypeError',
    message: 'Unsupported Media Type'
  },
  416: {
    status: 416,
    code: 'requested-range-not-satisfiable',
    name: 'RequestedRangeNotSatisfiableError',
    message: 'Requested Range Not Satisfiable'
  },
  417: {
    status: 417,
    code: 'expectation-failed',
    name: 'ExpectationFailedError',
    message: 'Expectation Failed'
  },
  426: {
    status: 426,
    code: 'upgrade-required',
    name: 'UpgradeRequiredError',
    message: 'Upgrade Required'
  },


    /**
     * RFC 2324 :-P - http://tools.ietf.org/html/rfc2324
     */
  418: {
    status: 418,
    code: 'i-am-a-teapot',
    name: 'TeapotError',
    message: "I'm A Teapot"
  },


    /**
     * RFC 4918 - https://tools.ietf.org/html/rfc4918#page-78
     */
  422: {
    status: 422,
    code: 'unprocessable-entity',
    name: 'UnprocessableEntityError',
    message: 'Unprocessable Entity'
  },
  423: {
    status: 423,
    code: 'locked',
    name: 'LockedError',
    message: 'Locked'
  },
  424: {
    status: 424,
    code: 'failed-dependency',
    name: 'FailedDependencyError',
    message: 'Failed Dependency'
  },


    /**
     * RFC 6585 - http://tools.ietf.org/html/rfc6585
     */
  428: {
    status: 428,
    code: 'precondition-required',
    name: 'PreconditionRequiredError',
    message: 'Precondition Required'
  },
  429: {
    status: 429,
    code: 'too-many-requests',
    name: 'TooManyRequestsError',
    message: 'Too Many Requests'
  },
  431: {
    status: 431,
    code: 'header-fields-too-large',
    name: 'HeaderFieldsTooLargeError',
    message: 'Header Fields Too Large'
  },


    /**
     * Draft - http://tools.ietf.org/html/draft-tbray-http-legally-restricted-status-05
     */
  451: {
    status: 451,
    code: 'unavailable-for-legal-reasons',
    name: 'UnavailableForLegalReasonsError',
    message: 'Unavailable For Legal Reasons'
  },


    /**
     * RFC 7231 - http://tools.ietf.org/html/rfc7231#page-47
     */
  500: {
    status: 500,
    code: 'internal-server-error',
    name: 'InternalServerError',
    message: 'Internal Server Error'
  },
  501: {
    status: 501,
    code: 'not-implemented',
    name: 'NotImplementedError',
    message: 'Not Implemented'
  },
  502: {
    status: 502,
    code: 'bad-gateway',
    name: 'BadGatewayError',
    message: 'Bad Gateway'
  },
  503: {
    status: 503,
    code: 'service-unavailable',
    name: 'ServiceUnavailableError',
    message: 'Service Unavailable'
  },
  504: {
    status: 504,
    code: 'gateway-timeout',
    name: 'GatewayTimeoutError',
    message: 'Gateway Timeout'
  },
  505: {
    status: 505,
    code: 'http-version-not-supported',
    name: 'HttpVersionNotSupportedError',
    message: 'HTTP Version Not Supported'
  },


    /**
     * RFC 2295 - https://tools.ietf.org/html/rfc2295#page-25
     */
  506: {
    status: 506,
    code: 'variant-also-negotiates',
    name: 'VariantAlsoNegotiatesError',
    message: 'Variant Also Negotiates'
  },


    /**
     * RFC 4918 - https://tools.ietf.org/html/rfc4918#page-78
     */
  507: {
    status: 507,
    code: 'insufficient-storage',
    name: 'InsufficientStorageError',
    message: 'Insufficient Storage'
  },


    /**
     * RFC 5842 - https://tools.ietf.org/html/rfc5842#page-31
     */
  508: {
    status: 508,
    code: 'loop-detected',
    name: 'LoopDetectedError',
    message: 'Loop Detected'
  },


    /**
     * RFC 2774 - https://tools.ietf.org/html/rfc2774#page-11
     */
  510: {
    status: 510,
    code: 'not-extended',
    name: 'NotExtendedError',
    message: 'Not Extended'
  },


    /**
     * RFC 6585 - http://tools.ietf.org/html/rfc6585
     */
  511: {
    status: 511,
    code: 'network-authentication-required',
    name: 'NetworkAuthenticationRequiredError',
    message: 'Network Authentication Required'
  }


};
