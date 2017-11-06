/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signature_service_js__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__signature_service_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signature_service_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_service_js__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__details_service_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_service_js__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__client_service_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_service_js__ = __webpack_require__(9);
/* unused harmony reexport mediaReplaceService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notes_service_js__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__notes_service_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__social_service_js__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__social_service_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__debt_service_js__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_6__debt_service_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__notes_service_js__["b"]; });
/* unused harmony reexport mediaDeleteService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_6__debt_service_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__social_service_js__["b"]; });
/* unused harmony reexport mediaPostService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__notes_service_js__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__client_service_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_6__debt_service_js__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__adress_service_js__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_7__adress_service_js__["a"]; });


















/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__birthday_status_js__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__birthday_status_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__last_appoinment_js__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__last_appoinment_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_dates_js__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__get_dates_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__get_dates_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getOrientation_js__ = __webpack_require__(43);
/* unused harmony reexport getOrientation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__decodeBase64_js__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__decodeBase64_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__format_date_js__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__format_date_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Select_Select_jsx__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__Select_Select_jsx__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Swiper_Swiper_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Swiper_Swiper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Swiper_Swiper_js__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__Swiper_Swiper_js___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_Modal_jsx__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__Modal_Modal_jsx__["a"]; });










/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var mainRequestService = function mainRequestService(url, options) {
  return fetch(url, options).then(function (r) {
    if (r.status === 503) setTimeout(function () {
      mainRequestService(url, options);
    }, r.headers.get('Retry-After') * 1000);
    return r;
  });
};
/* harmony default export */ __webpack_exports__["a"] = (mainRequestService);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(66)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(65)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return postService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return replaceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_service__ = __webpack_require__(2);


var mainUrl = config.urls.main + config.urls.dept.replace('{client_id}', config.data.id);

var postService = function postService(body) {
  var options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body: body
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(mainUrl, options);
};

var replaceService = function replaceService(body, id) {
  var url = mainUrl + '/' + id;
  var options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT',
    body: body
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(url, options);
};

var deleteService = function deleteService(id) {
  var url = mainUrl + '/' + id;
  var options = {
    mode: 'cors',
    method: 'DELETE'
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(url, options);
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export postService */
/* unused harmony export replaceService */
/* unused harmony export deleteService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_service__ = __webpack_require__(2);


var mainUrl = config.urls.main + config.urls.media_url.replace('{client_id}', config.data.id);

var postService = function postService(body) {
  var options = {
    mode: 'cors',
    method: 'POST',
    body: body
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(mainUrl, options);
};

var replaceService = function replaceService(body, id) {
  var url = mainUrl + '/' + id;
  var options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PATCH',
    body: body
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(url, options);
};

var deleteService = function deleteService(id) {
  var url = mainUrl + '/' + id;
  var options = {
    mode: 'cors',
    method: 'DELETE'
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(url, options);
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return postService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return replaceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_service__ = __webpack_require__(2);


var mainUrl = config.urls.main + config.urls.notes.replace('{client_id}', config.data.id);

var postService = function postService(body) {
  var options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body: body
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(mainUrl, options);
};

var replaceService = function replaceService(body, id) {
  var url = mainUrl + '/' + id;
  var options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PATCH',
    body: body
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(url, options);
};

var deleteService = function deleteService(id) {
  var url = mainUrl + '/' + id;
  var options = {
    mode: 'cors',
    method: 'DELETE'
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(url, options);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(4);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return replaceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_service__ = __webpack_require__(2);


var replaceService = function replaceService(body) {
  var url = config.urls.main + config.urls.clients.replace('{client_id}', config.data.id);
  var options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PATCH',
    body: body
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(url, options);
};

var getService = function getService(q) {
  var url = config.urls.main + config.urls.add_client_url.replace('{query}', q);
  var options = {
    mode: 'cors',
    method: 'GET'
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(url, options);
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return replaceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_service__ = __webpack_require__(2);


var mainUrl = config.urls.main + config.urls.signature.replace('{client_id}', config.data.id);

var replaceService = function replaceService(body) {
  var options = {
    mode: 'cors',
    method: 'POST',
    body: body
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(mainUrl, options);
};

var deleteService = function deleteService() {
  var options = {
    mode: 'cors',
    method: 'DELETE'
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(mainUrl, options);
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_service__ = __webpack_require__(2);


var mainUrl = config.urls.main + config.urls.social.replace('{client_id}', config.data.id);

var postService = function postService(body) {
  var options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body: body
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(mainUrl, options);
};

var deleteService = function deleteService(id) {
  var url = mainUrl + '/' + id;
  var options = {
    mode: 'cors',
    method: 'DELETE'
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(url, options);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(5);
  var warning = __webpack_require__(11);
  var ReactPropTypesSecret = __webpack_require__(12);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__social_network_social_network_jsx__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signature_signature_jsx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details_jsx__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_events_jsx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topnav_topnav_jsx__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__source_source_jsx__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adress_adress_jsx__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__email_email_jsx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notes_notes_jsx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__debts_debts_jsx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__phone_phone_jsx__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__line_line_jsx__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__hero_hero_jsx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_styl__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__home_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// import Groups from '../groups/groups.jsx'


// import Media from '../media/media.jsx'







var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      if (config.data.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'home' },
        React.createElement(__WEBPACK_IMPORTED_MODULE_4__topnav_topnav_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_12__hero_hero_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_3__events_events_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_11__line_line_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_10__phone_phone_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_7__email_email_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_6__adress_adress_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_11__line_line_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_9__debts_debts_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_11__line_line_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_8__notes_notes_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_11__line_line_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_11__line_line_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_5__source_source_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_0__social_network_social_network_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_11__line_line_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_11__line_line_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_2__details_details_jsx__["a" /* default */], null),
        React.createElement(__WEBPACK_IMPORTED_MODULE_1__signature_signature_jsx__["a" /* default */], null),
        React.createElement('div', { className: 'test' })
      );
    }
  }]);

  return Home;
}(React.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Home);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422833
      var cssReload = require("../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_services__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adress_styl__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adress_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__adress_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var timeout = void 0;

var Adress = function (_React$Component) {
  _inherits(Adress, _React$Component);

  function Adress() {
    _classCallCheck(this, Adress);

    var _this = _possibleConstructorReturn(this, (Adress.__proto__ || Object.getPrototypeOf(Adress)).call(this));

    _this.submit = function () {
      var body = config.urls.address + '=' + _this.state.adress;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["b" /* clientReplaceService */])(body).then(function (r) {
        if (r.status === 204) {
          config.data.adress = _this.state.adress;
          _this.setState({ adressEdit: !_this.state.adressEdit, isViewAdress: false, adress: '' });
        }
      });
    };

    _this.changeInput = function (e) {
      clearTimeout(timeout);
      _this.setState({ adress: e });
      if (e.length > 0) {
        timeout = setTimeout(function () {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["n" /* adressGetService */])(e).then(function (r) {
            return r.json().then(function (r) {
              return _this.setState({ isViewAdress: true, adress_list: r.results });
            });
          });
        }, config.data.timeout);
      } else _this.setState({ isViewAdress: false });
    };

    _this.state = {
      adressEdit: false,
      isViewAdress: false,
      adress_list: [],
      adress: ''
    };
    return _this;
  }

  _createClass(Adress, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { id: 'adress' },
        React.createElement(
          'div',
          { className: config.data.adress ? this.state.adressEdit ? 'hidden' : 'adress' : 'hidden' },
          React.createElement(
            'div',
            { className: 'google-map ' + (config.isRtL ? 'right' : 'left') },
            React.createElement(
              'a',
              { href: 'waze://?ll=' + config.data.intent_x + ', ' + config.data.intent_y + '&navigate=yes' },
              React.createElement('img', { src: config.urls.main + '/customers-details/clients/' + config.data.id + '/map' })
            )
          ),
          React.createElement(
            'div',
            { className: 'data-wrap' },
            React.createElement(
              'div',
              { className: 'adress-label-wrap' },
              React.createElement(
                'div',
                { className: 'adress-label ' + (config.isRtL ? 'left' : 'right') },
                config.translations.adress
              )
            ),
            React.createElement(
              'div',
              { className: 'address ' + (config.isRtL ? 'left' : 'right') },
              React.createElement(
                'a',
                { href: 'waze://?ll=' + config.data.intent_x + ', ' + config.data.intent_y + '&navigate=yes' },
                React.createElement('img', { src: config.urls.media + 'waze.png' })
              ),
              React.createElement(
                'h1',
                { className: config.isRtL ? 'left' : 'right',
                  onClick: function onClick() {
                    _this2.setState({ adressEdit: !_this2.state.adressEdit, adress: config.data.adress });
                  } },
                config.data.adress
              )
            )
          )
        ),
        React.createElement(
          'div',
          { onClick: function onClick() {
              _this2.setState({ adressEdit: !_this2.state.adressEdit });
            },
            className: config.data.adress || this.state.adressEdit ? 'hidden' : 'add-adress' },
          React.createElement('img', { className: config.isRtL ? 'left' : 'right', src: config.urls.media + 'add.svg' }),
          React.createElement(
            'h1',
            { className: config.isRtL ? 'left' : 'right' },
            config.translations.add_adress
          )
        ),
        React.createElement(
          'div',
          { className: this.state.adressEdit ? 'adress-edit' : 'hidden' },
          React.createElement(
            'div',
            { className: 'edit' },
            React.createElement('input', { className: 'edit-input', type: 'text', value: this.state.adress,
              onChange: function onChange(e) {
                _this2.changeInput(e.target.value);
              } }),
            React.createElement(
              'div',
              { className: this.state.isViewAdress ? 'adress-list-wrap' : 'hidden' },
              this.state.adress_list.map(function (i, k) {
                return React.createElement(
                  'div',
                  { key: k, onClick: function onClick() {
                      _this2.setState({ adress: i.formatted_address, isViewAdress: false });
                    } },
                  i.formatted_address
                );
              })
            ),
            React.createElement(
              'h1',
              { className: 'edit-label' },
              config.translations.adress
            )
          ),
          React.createElement(
            'div',
            { className: 'button' },
            React.createElement(
              'button',
              { onClick: this.submit },
              config.translations.save
            )
          )
        )
      );
    }
  }]);

  return Adress;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Adress);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__birthday_styl__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__birthday_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__birthday_styl__);


var Birthday = function Birthday() {
  return React.createElement(
    'div',
    { id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["i" /* birthdaysStatus */])(config.data.birthdate) === undefined ? 'birthday-wrap-disabled' : 'birthday-wrap',
      className: config.isRtL ? 'birthday-wrap-right' : 'birthday-wrap-left' },
    React.createElement(
      'h1',
      null,
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["i" /* birthdaysStatus */])(config.data.birthdate)
    )
  );
};
/* harmony default export */ __webpack_exports__["a"] = (Birthday);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_services__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_project_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__debts_styl__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__debts_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__debts_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Debts = function (_React$Component) {
  _inherits(Debts, _React$Component);

  function Debts() {
    _classCallCheck(this, Debts);

    var _this = _possibleConstructorReturn(this, (Debts.__proto__ || Object.getPrototypeOf(Debts)).call(this));

    _this.submit = function () {
      config.data.debts ? '' : config.data.debts = [];
      var body = 'sum=' + parseInt(_this.state.debt) + '&desc=' + _this.state.description;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["k" /* debtPostService */])(body).then(function (r) {
        if (r.status === 201) {
          config.data.debts.unshift({
            sum: _this.state.debt,
            desc: _this.state.description,
            date: moment().format('YYYY-MM-DD HH:mm')
          });
          r.json().then(function (id) {
            config.data.debts[0].id = id;
          });
          _this.setState({ debtEdit: !_this.state.debtEdit, description: '', debt: '0' });
        }
      });
    };

    _this.update = function () {
      var body = 'sum=' + parseInt(_this.state.debt) + '&desc=' + _this.state.description;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["l" /* debtReplaceService */])(body, _this.state.debt_id).then(function (r) {
        if (r.status === 204) {
          config.data.debts[_this.state.key].sum = _this.state.debt;
          config.data.debts[_this.state.key].desc = _this.state.description;
          config.data.debts[_this.state.key].date = moment().format('YYYY-MM-DD HH:mm');
          _this.setState({ debtReplace: !_this.state.debtReplace, debtEdit: !_this.state.debtEdit, description: '', debt: '0', debt_id: 0 });
        }
      });
    };

    _this.delete = function (id, k) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["m" /* debtDeleteService */])(id).then(function (r) {
        if (r.status === 204) {
          config.data.debts.splice(k, 1);
          _this.forceUpdate();
        }
      });
    };

    _this.replace = function (i, key) {
      _this.setState({
        debtReplace: !_this.state.debtReplace,
        debtEdit: !_this.state.debtEdit,
        description: i.desc,
        debt: i.sum,
        debt_id: i.id,
        key: key
      });
    };

    _this.price = function () {
      var sum = 0;
      config.data.debts.forEach(function (i) {
        sum += i.sum;
      });
      return sum === 0 || isNaN(sum) ? 0 : sum;
    };

    _this.state = {
      debtReplace: false,
      description: '',
      debtEdit: false,
      total_debt: 0,
      debt: '0'
    };
    return _this;
  }

  _createClass(Debts, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { id: 'debt' },
        React.createElement(
          'div',
          { className: config.data.debts && config.data.debts.length > 0 ? 'label-wrap' : 'hidden' },
          React.createElement(
            'div',
            { className: 'debt-label ' + (config.isRtL ? 'left' : 'right') },
            React.createElement(
              'span',
              null,
              config.translations.debt
            ),
            React.createElement(
              'span',
              null,
              ':'
            ),
            React.createElement(
              'span',
              { className: 'count-debt' },
              this.price()
            )
          )
        ),
        config.data.debts.map(function (i, k) {
          return React.createElement(
            'div',
            { key: k, className: _this2.state.debtReplace ? 'hidden' : 'debt-list' },
            React.createElement(
              'div',
              { className: 'debt-list-delete-wrap' },
              React.createElement('img', { className: 'debt-list-delete', src: config.urls.media + 'add.svg', onClick: function onClick() {
                  _this2.delete(i.id, k);
                } })
            ),
            React.createElement(
              'div',
              { className: 'debt-list-data-wrap', onClick: function onClick() {
                  _this2.replace(i, k);
                } },
              React.createElement(
                'h1',
                { className: 'debt-list-name' },
                i.sum,
                ' ',
                config.data.currency
              ),
              React.createElement(
                'h1',
                { className: 'debt-list-desc' },
                i.desc
              ),
              React.createElement(
                'p',
                { className: 'debt-list-date' },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_project_components__["f" /* formatDate */])(i.date)
              )
            )
          );
        }),
        React.createElement(
          'div',
          { onClick: function onClick() {
              _this2.setState({ debtEdit: !_this2.state.debtEdit });
            }, className: this.state.debtEdit ? 'hidden' : 'debt-default' },
          React.createElement('img', { className: config.isRtL ? 'left' : 'right', src: config.urls.media + 'add.svg' }),
          React.createElement(
            'h1',
            { className: config.isRtL ? 'left' : 'right' },
            config.translations.add_debt
          )
        ),
        React.createElement(
          'div',
          { className: this.state.debtEdit ? 'debt-active' : 'hidden' },
          React.createElement(
            'div',
            { className: 'edit' },
            React.createElement(
              'div',
              { className: 'description' },
              React.createElement('input', { className: 'description-input', type: 'text', value: this.state.description,
                onChange: function onChange(e) {
                  _this2.setState({ description: e.target.value });
                } }),
              React.createElement(
                'h1',
                { className: 'description-label' },
                config.translations.description_debt
              )
            ),
            React.createElement(
              'div',
              { className: 'count' },
              React.createElement(
                'button',
                { onClick: this.state.debtReplace ? this.update : this.submit },
                config.translations.save
              ),
              React.createElement(
                'div',
                { className: 'ink', onClick: function onClick() {
                    return _this2.setState({ debt: parseInt(_this2.state.debt) + config.data.debt_step });
                  } },
                React.createElement(
                  'span',
                  null,
                  '+'
                )
              ),
              React.createElement('input', { className: 'count-input', type: 'number',
                value: this.state.debt, onChange: function onChange(e) {
                  _this2.setState({ debt: +e.target.value });
                },
                onFocus: function onFocus(e) {
                  toString(e.target.value);if (e.target.value === '0') e.target.value = '';
                },
                onBlur: function onBlur(e) {
                  toString(e.target.value);if (e.target.value === '') e.target.value = '0';
                } }),
              React.createElement(
                'div',
                { className: 'ink', onClick: function onClick() {
                    var debt = parseInt(_this2.state.debt) - config.data.debt_step;
                    if (debt < 0) debt = 0;
                    _this2.setState({ debt: debt });
                  } },
                React.createElement(
                  'span',
                  { className: 'minus' },
                  '-'
                )
              ),
              React.createElement(
                'h1',
                { className: config.isRtL ? 'left' : 'right' },
                config.translations.amount
              )
            )
          )
        )
      );
    }
  }]);

  return Debts;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Debts);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_services__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_styl__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__details_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Details = function (_React$Component) {
  _inherits(Details, _React$Component);

  function Details() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Details);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Details.__proto__ || Object.getPrototypeOf(Details)).call.apply(_ref, [this].concat(args))), _this), _this.submit = function () {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["d" /* detailsReplaceService */])().then(function (r) {
        if (r.status === 204) {
          config.data.details_link_active = true;
          _this.forceUpdate();
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Details, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'details' },
        React.createElement(
          'div',
          { className: 'details-wrap' },
          React.createElement(
            'div',
            { className: 'details-label ' + (config.isRtL ? 'left' : 'right') },
            config.translations.completion
          )
        ),
        React.createElement(
          'div',
          { className: 'data-wrap' },
          React.createElement(
            'button',
            { className: 'details-button ' + (config.isRtL ? 'left' : 'right'), disabled: config.data.details_link_active,
              onClick: this.submit },
            config.data.details_link_active ? config.translations.sent : config.translations.send
          ),
          React.createElement('img', { className: config.data.details_link_active ? '' : 'hidden', src: config.urls.media + 'ok.png' }),
          React.createElement(
            'h1',
            { className: config.isRtL ? 'right' : 'left' },
            config.translations.request_to_detail
          )
        )
      );
    }
  }]);

  return Details;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Details);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_services__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_styl__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__email_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Email = function (_React$Component) {
  _inherits(Email, _React$Component);

  function Email() {
    _classCallCheck(this, Email);

    var _this = _possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).call(this));

    _this.submit = function () {
      var body = config.urls.email + '=' + _this.state.email;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["b" /* clientReplaceService */])(body).then(function (r) {
        if (r.status === 204) {
          config.data.email = _this.state.email;
          _this.setState({ emailEdit: !_this.state.emailEdit, email: '' });
        }
      });
    };

    _this.state = {
      emailEdit: false,
      email: ''
    };
    return _this;
  }

  _createClass(Email, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { id: 'email' },
        React.createElement(
          'div',
          { className: config.data.email ? this.state.emailEdit ? 'hidden' : 'email' : 'hidden' },
          React.createElement(
            'div',
            { className: 'link-wrap' },
            React.createElement(
              'a',
              { href: 'mailto:' + config.data.email },
              React.createElement('img', { src: config.urls.media + 'mail.svg' })
            )
          ),
          React.createElement(
            'div',
            { className: 'data-wrap' },
            React.createElement(
              'div',
              { className: 'label-wrap' },
              React.createElement(
                'div',
                { className: 'email-label ' + (config.isRtL ? 'left' : 'right') },
                config.translations.email
              )
            ),
            React.createElement(
              'h1',
              { className: config.isRtL ? 'left' : 'right',
                onClick: function onClick() {
                  _this2.setState({ emailEdit: !_this2.state.emailEdit, email: config.data.email });
                } },
              config.data.email
            )
          )
        ),
        React.createElement(
          'div',
          { onClick: function onClick() {
              _this2.setState({ emailEdit: !_this2.state.emailEdit });
            },
            className: config.data.email || this.state.emailEdit ? 'hidden' : 'add-email' },
          React.createElement('img', { className: config.isRtL ? 'left' : 'right', src: config.urls.media + 'add.svg' }),
          React.createElement(
            'h1',
            { className: config.isRtL ? 'left' : 'right' },
            config.translations.add_email
          )
        ),
        React.createElement(
          'div',
          { className: this.state.emailEdit ? 'email-edit' : 'hidden' },
          React.createElement(
            'div',
            { className: 'edit' },
            React.createElement('input', { className: 'edit-input', type: 'email', value: this.state.email,
              onChange: function onChange(event) {
                _this2.setState({ email: event.target.value });
              } }),
            React.createElement(
              'h1',
              { className: 'edit-label' },
              config.translations.email
            )
          ),
          React.createElement(
            'div',
            { className: 'button' },
            React.createElement(
              'button',
              { onClick: this.submit },
              config.translations.save
            )
          )
        )
      );
    }
  }]);

  return Email;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Email);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_styl__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__events_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Events = function (_React$Component) {
  _inherits(Events, _React$Component);

  function Events() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Events);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Events.__proto__ || Object.getPrototypeOf(Events)).call.apply(_ref, [this].concat(args))), _this), _this.initialSlide = function () {
      var slide = void 0;
      config.data.recent_appoinments.every(function (i, k) {
        if (moment() < moment(i.date)) {
          slide = k;return false;
        } else {
          return true;
        }
      });
      return slide;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Events, [{
    key: 'price',
    value: function price(i) {
      var sum = 0;
      if (i.procedures.length > 1) {
        for (var c = 0; c < i.procedures.length; c++) {
          sum += i.procedures[c].price;
        }
      } else {
        sum = i.procedures[0].price;
      }
      return sum;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      config.data.recent_appoinments.sort(function (a, b) {
        return moment(a.date) - moment(b.date);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { id: 'events' },
        React.createElement(
          'div',
          { className: 'events' },
          React.createElement(
            'a',
            { href: config.urls.main + config.urls.appointment + '?client_id=' + config.data.id },
            React.createElement('img', { className: 'clock', src: config.urls.media + 'clock.png' })
          ),
          React.createElement(
            'h1',
            { className: 'label ' + (config.isRtL ? 'left' : 'right') },
            config.translations.close_visits
          ),
          React.createElement(
            'div',
            { id: 'swiper-wrap-notes' },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_0_project_components__["g" /* Swiper */],
              { pagination: '.swiper-pagination', slidesPerView: 'auto', paginationClickable: true, initialSlide: this.initialSlide() },
              React.createElement(
                'div',
                null,
                React.createElement(
                  'div',
                  { className: 'note start-note' },
                  config.translations.all_visits
                )
              ),
              config.data.recent_appoinments.map(function (i, k) {
                return React.createElement(
                  'div',
                  { key: k },
                  React.createElement(
                    'div',
                    { className: 'note' },
                    React.createElement(
                      'h1',
                      { className: 'date' },
                      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["h" /* lastAppoinment */])(i.date)
                    ),
                    React.createElement(
                      'h1',
                      { className: 'procedure' },
                      i.procedures.length > 1 ? i.procedures.length + ' ' + config.translations.procedures : i.procedures[0].name
                    ),
                    React.createElement(
                      'h1',
                      { className: 'price' },
                      _this2.price(i),
                      ' ',
                      config.data.currency
                    )
                  )
                );
              }),
              React.createElement(
                'div',
                null,
                React.createElement(
                  'div',
                  { className: 'note end-note' },
                  React.createElement(
                    'h1',
                    { className: 'date' },
                    React.createElement(
                      'span',
                      { className: 'orange' },
                      'before'
                    ),
                    ' week'
                  ),
                  React.createElement(
                    'h1',
                    { className: 'procedure' },
                    'Laser hair removal'
                  ),
                  React.createElement(
                    'h1',
                    { className: 'price' },
                    '450 ',
                    config.data.currency
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Events;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Events);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_services__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__birthday_birthday_jsx__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_styl__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__hero_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Hero = function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero() {
    _classCallCheck(this, Hero);

    var _this = _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this));

    _this.handleStar = function () {
      var body = config.urls.isFavorite + '=' + !config.data.isFavorite;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["b" /* clientReplaceService */])(body).then(function (r) {
        if (r.status === 204) {
          config.data.isFavorite = !config.data.isFavorite;
          if (config.data.isFavorite) _this.setState({ succes: true }, function () {
            setTimeout(function () {
              _this.setState({ succes: false });
            }, 1200);
          });
          _this.forceUpdate();
        }
      });
    };

    _this.handleStatus = function (e) {
      e.preventDefault();
      _this.setState({ isInputDisabled: true });
      if (!_this.state.isInputDisabled) {
        _this.setState({ status: '' });
        _this.refs.autofocus.focus();
      } else {
        var body = config.urls.status + '=' + _this.state.status;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["b" /* clientReplaceService */])(body).then(function (r) {
          if (r.status === 204) {
            config.data.status = _this.state.status;
            _this.setState({ isInputDisabled: false });
            _this.refs.autofocus.blur();
          }
        });
      }
    };

    _this.state = {
      status: config.data.status ? config.data.status : config.translations.placeholder,
      imageUrl: config.urls.media + config.data.id,
      isInputDisabled: false,
      succes: false
    };
    return _this;
  }

  _createClass(Hero, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { id: 'hero' },
        React.createElement(
          'div',
          { onClick: this.handleStar, className: 'star-wrap ' + (config.isRtL ? 'star-wrap-right' : 'star-wrap-left') },
          React.createElement(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '-1 -1 52 50' },
            React.createElement(
              'g',
              { id: 'Layer_2', 'data-name': 'Layer 2' },
              React.createElement(
                'g',
                { id: 'Layer_1-2', 'data-name': 'Layer 1' },
                React.createElement(
                  'g',
                  null,
                  React.createElement('path', {
                    className: config.data.isFavorite ? 'star star-active' : 'star',
                    d: 'M26.79,1.56,31.06,14.7a2.26,2.26,0,0,0,2.15,1.56H 47a2.26,2.26,0,0,1,1.33,4.09L37.17,28.46A2.26,2.26,0, 0,0,36.35,31l4.27,13.14a2.26,2.26,0,0,1-3.48,2.53L26, 38.53a2.26,2.26,0,0,0-2.66,0L12.14,46.65a2.26,2.26,0, 0,1-3.48-2.53L12.93,31a2.26,2.26,0,0,0-.82-2.53L.94, 20.34a2.26,2.26,0,0,1,1.33-4.09H16.08a2.26,2.26,0,0, 0,2.15-1.56L22.49,1.56A2.26,2.26,0,0,1,26.79,1.56Z' })
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'toast ' + (this.state.succes ? 'toast-visible' : '') },
          React.createElement(
            'h1',
            null,
            config.translations.added_to_favorites
          )
        ),
        React.createElement(__WEBPACK_IMPORTED_MODULE_1__birthday_birthday_jsx__["a" /* default */], null),
        React.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              _this2.handleStatus(e);_this2.setState({ status: _this2.state.statusRem });
            } },
          React.createElement(
            'div',
            { className: 'input-group' },
            React.createElement(
              'div',
              { className: 'input-wrap' },
              React.createElement('input', { className: 'form-control ' + (config.data.status ? 'form-control-disabled' : ''), type: 'text', ref: 'autofocus', value: this.state.status,
                onBlur: function onBlur() {
                  _this2.setState({ isInputDisabled: false, status: config.data.status ? config.data.status : config.translations.placeholder });
                },
                onChange: function onChange(e) {
                  _this2.setState({ status: e.target.value, statusRem: e.target.value });
                } })
            ),
            React.createElement(
              'span',
              { onClick: this.state.isInputDisabled ? function () {} : this.handleStatus, className: this.state.isInputDisabled ? 'hidden' : 'input-group-addon' },
              React.createElement('img', { className: this.state.isInputDisabled ? 'input-group-addon-hidden' : '', src: config.urls.media + 'pencil.svg' })
            )
          )
        ),
        React.createElement('img', { className: 'client-img', src: this.state.imageUrl + '.jpg', alt: 'user-img', onError: function onError() {
            _this2.setState({ imageUrl: config.urls.media + 'default' });
          } })
      );
    }
  }]);

  return Hero;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Hero);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__line_styl__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__line_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__line_styl__);

var Line = function Line() {
  return React.createElement('div', { id: 'line' });
};
/* harmony default export */ __webpack_exports__["a"] = (Line);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_services__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_project_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_styl__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__notes_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Notes = function (_React$Component) {
  _inherits(Notes, _React$Component);

  function Notes() {
    _classCallCheck(this, Notes);

    var _this = _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).call(this));

    _this.submit = function () {
      config.data.notes ? '' : config.data.notes = [];
      var reminder = _this.reminder();
      var body = 'text=' + _this.state.description;
      if (reminder) body = 'text=' + _this.state.description + '&reminder_date=' + reminder;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["h" /* notesPostService */])(body).then(function (r) {
        if (r.status === 201) {
          config.data.notes.unshift({
            text: _this.state.description,
            date: moment().format('YYYY-MM-DD HH:mm')
          });
          if (reminder) config.data.notes[0].reminder_date = reminder;
          r.json().then(function (id) {
            config.data.notes[0].id = id;
          });
          _this.setState({ isEditNotes: !_this.state.isEditNotes, isReminderEdit: false, description: '', time: '0' });
        }
      });
    };

    _this.update = function () {
      var reminder = _this.reminder();
      var body = 'text=' + _this.state.description;
      if (reminder) body = 'text=' + _this.state.description + '&reminder_date=' + reminder;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["i" /* notesReplaceService */])(body, _this.state.note_id).then(function (r) {
        if (r.status === 204) {
          config.data.notes[_this.state.key].text = _this.state.description;
          config.data.notes[_this.state.key].date = moment().format('YYYY-MM-DD HH:mm');
          if (reminder) {
            config.data.notes[_this.state.key].reminder_date = reminder;
          } else delete config.data.notes[_this.state.key].reminder_date;
          _this.setState({
            noteReplace: !_this.state.noteReplace,
            isEditNotes: !_this.state.isEditNotes,
            isReminderEdit: false,
            description: '',
            note_id: 0,
            time: '0'
          });
        }
      });
    };

    _this.delete = function (id, k) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["j" /* notesDeleteService */])(id).then(function (r) {
        if (r.status === 204) {
          config.data.notes.splice(k, 1);
          _this.forceUpdate();
        }
      });
    };

    _this.replace = function (i, key) {
      _this.setState({
        noteReplace: !_this.state.noteReplace,
        isEditNotes: !_this.state.isEditNotes,
        isReminderEdit: i.reminder_date,
        description: i.text,
        note_id: i.id,
        key: key
      });
    };

    _this.reminder = function () {
      return _this.state.time !== '0' && _this.state.time !== 0 ? moment().add(_this.state.time, _this.state.selectedValue).format('YYYY-MM-DD HH:mm') : undefined;
    };

    _this.state = {
      selectedValue: config.translations.notes_list[0].value,
      selectedLabel: config.translations.notes_list[0].label,
      isReminderEdit: false,
      noteReplace: false,
      isEditNotes: false,
      description: '',
      note_id: 0,
      time: '0',
      key: 0
    };
    return _this;
  }

  _createClass(Notes, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { id: 'notes' },
        React.createElement(
          'div',
          { className: config.data.notes && config.data.notes.length > 0 ? 'label-wrap' : 'hidden' },
          React.createElement(
            'div',
            { className: 'add-label ' + (config.isRtL ? 'left' : 'right') },
            config.translations.notes
          )
        ),
        config.data.notes.map(function (i, k) {
          return React.createElement(
            'div',
            { key: k, className: _this2.state.noteReplace ? 'hidden' : 'notes-list ' + (i.reminder_date ? 'pd5' : 'pd17') },
            React.createElement(
              'div',
              { className: 'notes-list-delete-wrap' },
              React.createElement('img', { className: 'notes-list-delete', src: config.urls.media + 'add.svg', onClick: function onClick() {
                  _this2.delete(i.id, k);
                } })
            ),
            React.createElement(
              'div',
              { className: 'notes-list-data-wrap', onClick: function onClick() {
                  _this2.replace(i, k);
                } },
              React.createElement(
                'div',
                { className: i.reminder_date ? 'notes-list-reminder' : 'hidden' },
                React.createElement('img', { src: config.urls.media + 'bell.svg' })
              ),
              React.createElement(
                'h1',
                { className: 'notes-list-desc ' + (i.reminder_date ? 'rem_true' : 'rem_false') },
                i.text
              ),
              React.createElement(
                'p',
                { className: 'notes-list-date' },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_project_components__["f" /* formatDate */])(i.date)
              )
            )
          );
        }),
        React.createElement(
          'div',
          { className: this.state.isEditNotes ? 'edit-note' : 'hidden' },
          React.createElement(
            'div',
            { className: 'description' },
            React.createElement('input', { className: 'description-input', type: 'text', value: this.state.description, onChange: function onChange(e) {
                _this2.setState({ description: e.target.value });
              } }),
            React.createElement(
              'h1',
              { className: 'description-label' },
              config.translations.description_notes
            )
          ),
          React.createElement(
            'div',
            { className: 'reminder ' + (this.state.isReminderEdit ? 'h150' : 'h55') },
            React.createElement(
              'div',
              { className: 'button-wrap ' + (config.isRtL ? 'left' : 'right') },
              React.createElement(
                'button',
                { onClick: this.state.noteReplace ? this.update : this.submit },
                config.translations.save
              )
            ),
            React.createElement(
              'div',
              { className: 'reminder-text ' + (config.isRtL ? 'left' : 'right'), onClick: function onClick() {
                  _this2.setState({ isReminderEdit: !_this2.state.isReminderEdit });
                } },
              React.createElement(
                'div',
                { className: 'img-wrap ' + (config.isRtL ? 'left' : 'right') },
                React.createElement('img', { src: config.urls.media + 'bell.svg' })
              ),
              React.createElement(
                'h1',
                { className: config.isRtL ? 'left' : 'right' },
                config.translations.reminder
              )
            ),
            React.createElement(
              'div',
              { className: this.state.isReminderEdit ? 'reminder-time ' + (config.isRtL ? 'left' : 'right') : 'hidden' },
              React.createElement(
                'div',
                { className: 'select-wrap' },
                React.createElement(__WEBPACK_IMPORTED_MODULE_1_project_components__["e" /* Select */], { value: this.state.selectedLabel, options: config.translations.notes_list,
                  onChange: function onChange(e) {
                    return _this2.setState({ selectedValue: e.value, selectedLabel: e.label });
                  } })
              ),
              React.createElement(
                'div',
                { className: 'input-wrap ' + (config.isRtL ? 'left' : 'right') },
                React.createElement(
                  'div',
                  { className: 'ink', onClick: function onClick() {
                      return _this2.setState({ time: parseInt(_this2.state.time) + 1 });
                    } },
                  React.createElement(
                    'span',
                    null,
                    '+'
                  )
                ),
                React.createElement('input', { className: 'count-input', type: 'number', value: this.state.time,
                  onFocus: function onFocus(e) {
                    toString(e.target.value);if (e.target.value === '0') e.target.value = '';
                  },
                  onBlur: function onBlur(e) {
                    toString(e.target.value);if (e.target.value === '') e.target.value = '0';
                  },
                  onChange: function onChange(e) {
                    _this2.setState({ time: +e.target.value });
                  } }),
                React.createElement(
                  'div',
                  { className: 'ink', onClick: function onClick() {
                      if (parseInt(_this2.state.time) > 0) _this2.setState({ time: parseInt(_this2.state.time) - 1 });
                    } },
                  React.createElement(
                    'span',
                    { className: 'minus' },
                    '-'
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { onClick: function onClick() {
              _this2.setState({ isEditNotes: !_this2.state.isEditNotes });
            },
            className: this.state.isEditNotes ? 'hidden' : 'add-wrap' },
          React.createElement('img', { className: config.isRtL ? 'left' : 'right', src: config.urls.media + 'add.svg' }),
          React.createElement(
            'h1',
            { className: config.isRtL ? 'left' : 'right' },
            config.translations.add_note
          )
        )
      );
    }
  }]);

  return Notes;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Notes);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_services__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phone_styl__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phone_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__phone_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Phone = function (_React$Component) {
  _inherits(Phone, _React$Component);

  function Phone() {
    _classCallCheck(this, Phone);

    var _this = _possibleConstructorReturn(this, (Phone.__proto__ || Object.getPrototypeOf(Phone)).call(this));

    _this.submit = function () {
      var body = config.urls.phone + '=' + _this.state.phone;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["b" /* clientReplaceService */])(body).then(function (r) {
        if (r.status === 204) {
          config.data.phone = _this.state.phone;
          _this.setState({ phoneEdit: !_this.state.phoneEdit, phone: '' });
        }
      });
    };

    _this.state = {
      phoneEdit: false,
      phone: ''
    };
    return _this;
  }

  _createClass(Phone, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { id: 'phone' },
        React.createElement(
          'div',
          { className: config.data.phone ? this.state.phoneEdit ? 'hidden' : 'phone-img' : 'hidden' },
          React.createElement(
            'div',
            { className: 'img-wrap' },
            React.createElement(
              'a',
              { href: 'tel:' + config.data.phone },
              React.createElement('img', { src: config.urls.media + 'call.svg' })
            )
          ),
          React.createElement(
            'div',
            { className: 'img-wrap' },
            React.createElement(
              'a',
              { href: 'sms:' + config.data.phone },
              React.createElement('img', { src: config.urls.media + 'send-sms.svg' })
            )
          )
        ),
        React.createElement(
          'div',
          { className: config.data.phone ? this.state.phoneEdit ? 'hidden' : 'phone-labels' : 'hidden' },
          React.createElement(
            'div',
            { className: 'label-wrap' },
            React.createElement(
              'div',
              { className: 'call-label ' + (config.isRtL ? 'left' : 'right') },
              config.translations.mobile
            )
          ),
          React.createElement(
            'div',
            { className: 'phone-wrap', onClick: function onClick() {
                _this2.setState({ phoneEdit: !_this2.state.phoneEdit, phone: config.data.phone });
              } },
            React.createElement(
              'h1',
              null,
              config.data.phone
            )
          )
        ),
        React.createElement(
          'div',
          { onClick: function onClick() {
              _this2.setState({ phoneEdit: !_this2.state.phoneEdit });
            }, className: config.data.phone || this.state.phoneEdit ? 'hidden' : 'add-phone' },
          React.createElement('img', { className: config.isRtL ? 'left' : 'right', src: config.urls.media + 'add.svg' }),
          React.createElement(
            'h1',
            { className: config.isRtL ? 'left' : 'right' },
            config.translations.add_phone
          )
        ),
        React.createElement(
          'div',
          { className: this.state.phoneEdit ? 'phone-edit' : 'hidden' },
          React.createElement(
            'div',
            { className: 'edit' },
            React.createElement('input', { className: 'edit-input', type: 'tel', value: this.state.phone, onChange: function onChange(e) {
                _this2.setState({ phone: e.target.value });
              } }),
            React.createElement(
              'h1',
              { className: 'edit-label' },
              config.translations.mobile
            )
          ),
          React.createElement(
            'div',
            { className: 'button' },
            React.createElement(
              'button',
              { onClick: this.submit },
              config.translations.save
            )
          )
        )
      );
    }
  }]);

  return Phone;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Phone);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_services__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_project_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signature_modal_styl__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signature_modal_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__signature_modal_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var SignatureModal = function (_React$Component) {
  _inherits(SignatureModal, _React$Component);

  function SignatureModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SignatureModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SignatureModal.__proto__ || Object.getPrototypeOf(SignatureModal)).call.apply(_ref, [this].concat(args))), _this), _this.init = function () {
      var canvas = _this.refs.canvas;
      var ctx = canvas.getContext('2d');
      var flag = false;
      var prevX = 0;
      var currX = 0;
      var prevY = 0;
      var currY = 0;
      var dot = false;
      var findxy = function findxy(res, e) {
        var draw = function draw() {
          ctx.beginPath();
          ctx.moveTo(prevX - 40, prevY - 40);
          ctx.lineTo(currX - 40, currY - 40);
          ctx.strokeStyle = 'black';
          ctx.lineWidth = 3;
          ctx.stroke();
          ctx.closePath();
        };
        if (res === 'down') {
          prevX = currX;
          prevY = currY;
          currX = e.targetTouches[0].clientX - canvas.offsetLeft;
          currY = e.targetTouches[0].clientY - canvas.offsetTop;
          e.preventDefault();
          flag = true;
          dot = true;
          if (dot) {
            ctx.beginPath();
            ctx.fillStyle = 'black';
            ctx.fillRect(currX - 40, currY - 40, 3, 3);
            ctx.closePath();
            dot = false;
          }
        }
        if (res === 'up' || res === 'out') flag = false;
        if (res === 'move') {
          if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.targetTouches[0].clientX - canvas.offsetLeft;
            currY = e.targetTouches[0].clientY - canvas.offsetTop;
            e.preventDefault();
            draw();
          }
        }
      };
      canvas.addEventListener('touchstart', function (e) {
        findxy('down', e);
      }, false);
      canvas.addEventListener('touchmove', function (e) {
        findxy('move', e);
      }, false);
      canvas.addEventListener('touchend', function (e) {
        findxy('up', e);
      }, false);
    }, _this.clear = function () {
      var canvas = _this.refs.canvas;
      var ctx = _this.refs.canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, _this.save = function () {
      var body = new FormData();
      var canvas = _this.refs.canvas;
      var dataURL = canvas.toDataURL();
      body.append('sign', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_project_components__["a" /* dataURLtoFile */])(dataURL, 'signature.png'));
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["c" /* signatureReplaceService */])(body).then(function (r) {
        if (r.status === 204) {
          config.data.signature = dataURL;
          if (_this.props.isAds) _this.props.handleAds();
          _this.props.handleEditSignature();
        }
      });
    }, _this.componentDidUpdate = function () {
      return _this.props.isEditSignature && _this.init();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SignatureModal, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        __WEBPACK_IMPORTED_MODULE_1_project_components__["b" /* Modal */],
        { show: this.props.isEditSignature, dialogClassName: 'signature-modal-dialog', onHide: this.props.handleEditSignature },
        React.createElement(
          'div',
          { className: 'signature-modal-header' },
          React.createElement('img', { onClick: this.props.handleEditSignature, className: 'close-button ' + (config.isRtL ? 'left' : 'right'), src: config.urls.media + 'add.svg' })
        ),
        React.createElement(
          'div',
          { className: 'signature-modal-body' },
          React.createElement('canvas', { ref: 'canvas', width: 336, height: 200 })
        ),
        React.createElement(
          'div',
          { className: 'signature-modal-footer' },
          React.createElement(
            'button',
            { className: config.isRtL ? 'radiusRight' : 'radiusLeft', onClick: this.save },
            config.translations.save_signature
          ),
          React.createElement(
            'button',
            { className: config.isRtL ? 'radiusLeft' : 'radiusRight', onClick: this.clear },
            config.translations.clear
          )
        )
      );
    }
  }]);

  return SignatureModal;
}(React.Component);

SignatureModal.propTypes = {
  handleEditSignature: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  isEditSignature: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired,
  handleAds: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  isAds: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (SignatureModal);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_services__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signature_modal_signature_modal_jsx__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toggle_switch__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toggle_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toggle_switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signature_styl__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signature_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__signature_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Signature = function (_React$Component) {
  _inherits(Signature, _React$Component);

  function Signature() {
    _classCallCheck(this, Signature);

    var _this = _possibleConstructorReturn(this, (Signature.__proto__ || Object.getPrototypeOf(Signature)).call(this));

    _this.delete = function () {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["a" /* signatureDeleteService */])().then(function (r) {
        if (r.status === 204) {
          if (config.data.permit_ads) _this.handleAds();
          delete config.data.signature;
          _this.forceUpdate();
        }
      });
    };

    _this.handleAds = function () {
      if (config.data.signature) {
        var body = config.urls.permit_ads + '=' + !config.data.permit_ads;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["b" /* clientReplaceService */])(body).then(function (r) {
          if (r.status === 204) {
            config.data.permit_ads = !config.data.permit_ads;
            _this.forceUpdate();
          }
        });
      } else _this.handleEditSignature(true);
    };

    _this.handleEditSignature = function (isAds) {
      _this.setState({ isEditSignature: !_this.state.isEditSignature, isAds: false });
      if (isAds === true) _this.setState({ isAds: true });
    };

    _this.state = {
      isEditSignature: false,
      signatureUrl: '',
      isAds: false
    };
    return _this;
  }

  _createClass(Signature, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'signature' },
        React.createElement(__WEBPACK_IMPORTED_MODULE_1__signature_modal_signature_modal_jsx__["a" /* default */], { isEditSignature: this.state.isEditSignature, handleEditSignature: this.handleEditSignature, isAds: this.state.isAds, handleAds: this.handleAds }),
        React.createElement(
          'div',
          { className: 'checkbox-wrap' },
          React.createElement(
            'div',
            { className: 'text' },
            React.createElement(
              'h1',
              { className: 'text-h1' },
              config.data.permit_ads ? config.translations.permitted : config.translations.not_permitted
            )
          ),
          React.createElement(
            'div',
            { className: 'switch' },
            React.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toggle_switch___default.a, { on: config.data.permit_ads, onClick: this.handleAds, className: config.isRtL ? 'switchleft' : 'switchright' })
          )
        ),
        React.createElement(
          'div',
          { className: config.data.signature ? 'autograph-wrap' : 'hidden' },
          React.createElement(
            'div',
            { className: 'autograph ' + (config.isRtL ? 'right' : 'left') },
            React.createElement('img', { src: config.data.signature })
          ),
          React.createElement(
            'div',
            { className: 'label' },
            React.createElement(
              'h1',
              null,
              config.translations.signature_added
            ),
            React.createElement(
              'button',
              { onClick: this.delete },
              config.translations.btn_delete
            ),
            React.createElement(
              'button',
              { onClick: this.handleEditSignature },
              config.translations.btn_replace
            )
          )
        ),
        React.createElement(
          'div',
          { className: config.data.signature ? 'hidden' : 'add-signature-wrap', onClick: this.handleEditSignature },
          React.createElement(
            'div',
            { className: 'text-wrap' },
            React.createElement(
              'h1',
              null,
              config.translations.add_signature
            )
          ),
          React.createElement(
            'div',
            { className: 'img-wrap' },
            React.createElement('img', { src: config.urls.media + 'pencil.svg' })
          )
        )
      );
    }
  }]);

  return Signature;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Signature);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_services__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_project_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_network_styl__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_network_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__social_network_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SocialNetwork = function (_React$Component) {
  _inherits(SocialNetwork, _React$Component);

  function SocialNetwork() {
    _classCallCheck(this, SocialNetwork);

    var _this = _possibleConstructorReturn(this, (SocialNetwork.__proto__ || Object.getPrototypeOf(SocialNetwork)).call(this));

    _this.submit = function () {
      config.data.soc_media ? '' : config.data.soc_media = [];
      var body = 'type=' + _this.state.selectedValue + '&url=' + _this.state.inputValue;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["e" /* socialPostService */])(body).then(function (r) {
        if (r.status === 201) {
          config.data.soc_media.push({
            type: _this.state.selectedValue,
            url: _this.state.inputValue
          });
          r.json().then(function (id) {
            config.data.soc_media[config.data.soc_media.length - 1].id = id;
          });
          _this.setState({ isEditSocial: !_this.state.isEditSocial, selectedValue: 'facebook', inputValue: '' });
        }
      });
    };

    _this.delete = function (id, k) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["f" /* socialDeleteService */])(id).then(function (r) {
        if (r.status === 204) {
          config.data.soc_media.splice(k, 1);
          _this.setState({ inputValue: '' });
        }
      });
    };

    _this.state = {
      selectedValue: config.translations.social_list[0].value,
      selectedLabel: config.translations.social_list[0].label,
      isEditSocial: false,
      inputValue: ''
    };
    return _this;
  }

  _createClass(SocialNetwork, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { id: 'social-network' },
        React.createElement(
          'h1',
          { className: config.data.soc_media && config.data.soc_media.length > 0 ? 'soc-media-label' : 'hidden' },
          config.translations.social_net
        ),
        React.createElement(
          'div',
          { className: config.data.soc_media && config.data.soc_media.length > 0 ? 'social-network-list' : 'hidden' },
          config.data.soc_media.map(function (i, k) {
            return React.createElement(
              'div',
              { key: k, className: 'social-item-wrap' },
              React.createElement(
                'div',
                { className: 'delete-wrap' },
                React.createElement('img', { className: 'delete', src: config.urls.media + 'add.svg', onClick: function onClick() {
                    _this2.delete(i.id, k);
                  } })
              ),
              React.createElement(
                'div',
                { className: 'img-wrap' },
                React.createElement('img', { src: config.urls.soc_net + '/' + i.type + '.png' })
              ),
              React.createElement(
                'div',
                { className: 'url-wrap', onClick: function onClick() {
                    _this2.setState({ isEditSocial: true, selectedValue: i.type });
                  } },
                React.createElement(
                  'h1',
                  null,
                  i.url
                )
              )
            );
          })
        ),
        React.createElement(
          'div',
          { className: this.state.isEditSocial ? 'add-select-wrap' : 'hidden' },
          React.createElement(
            'div',
            { className: 'item-wrap' },
            React.createElement(
              'div',
              { className: 'select-wrap' },
              React.createElement(__WEBPACK_IMPORTED_MODULE_1_project_components__["e" /* Select */], { onChange: function onChange(e) {
                  return _this2.setState({ selectedValue: e.value, selectedLabel: e.label });
                },
                value: this.state.selectedLabel, options: config.translations.social_list })
            ),
            React.createElement(
              'div',
              { className: 'img-wrap' },
              React.createElement('img', { src: config.urls.soc_net + '/' + this.state.selectedValue + '.png' })
            ),
            React.createElement(
              'div',
              { className: 'input-wrap' },
              React.createElement('input', { type: 'text', value: this.state.inputValue, onChange: function onChange(e) {
                  _this2.setState({ inputValue: e.target.value });
                }, placeholder: config.translations.url })
            )
          ),
          React.createElement(
            'div',
            { className: 'button-wrap' },
            React.createElement(
              'button',
              { onClick: this.submit },
              config.translations.save
            )
          )
        ),
        React.createElement(
          'div',
          { className: this.state.isEditSocial ? 'hidden' : 'add-source-wrap' },
          React.createElement('img', { className: config.isRtL ? 'left' : 'right', src: config.urls.media + 'add.svg', onClick: function onClick() {
              _this2.setState({ isEditSocial: !_this2.state.isEditSocial });
            } }),
          React.createElement(
            'h1',
            { className: config.isRtL ? 'left' : 'right' },
            config.translations.add_social_net
          )
        )
      );
    }
  }]);

  return SocialNetwork;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (SocialNetwork);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_services__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_project_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_styl__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__source_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var timeout = void 0;

var Source = function (_React$Component) {
  _inherits(Source, _React$Component);

  function Source() {
    _classCallCheck(this, Source);

    var _this = _possibleConstructorReturn(this, (Source.__proto__ || Object.getPrototypeOf(Source)).call(this));

    _this.submit = function () {
      var body = config.urls.source + '=' + _this.state.selectedValue;
      if (_this.state.userId) body = config.urls.source + '=' + _this.state.selectedValue + '&' + config.urls.recommended_by + '=' + _this.state.userId;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["b" /* clientReplaceService */])(body).then(function (r) {
        if (r.status === 204) {
          config.data.source = _this.state.selectedValue;
          _this.forceUpdate();
        }
      });
    };

    _this.changeSelect = function (e) {
      _this.setState({ selectedLabel: e.label, selectedValue: e.value, userId: null });
      e.value === 'recommendation' ? _this.setState({ isRecomendation: true }) : _this.setState({ isRecomendation: false });
    };

    _this.changeInput = function (e) {
      clearTimeout(timeout);
      _this.setState({ inputValue: e });
      if (e.length > 0) {
        timeout = setTimeout(function () {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_services__["g" /* clientGetService */])(e).then(function (r) {
            return r.json().then(function (r) {
              return _this.setState({ isViewClients: true, clients: r });
            });
          });
        }, config.data.timeout);
      } else _this.setState({ isViewClients: false });
    };

    _this.state = {
      selectedLabel: config.data.source,
      selectedValue: config.data.source,
      isRecomendation: false,
      isViewClients: false,
      isOpenSource: false,
      inputValue: '',
      userId: null,
      clients: []
    };
    return _this;
  }

  _createClass(Source, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { id: 'source' },
        React.createElement(
          'div',
          { className: this.state.isOpenSource ? 'hidden' : config.data.source ? 'hidden' : 'add-source-wrap' },
          React.createElement('img', { className: config.isRtL ? 'left' : 'right', src: config.urls.media + 'add.svg', onClick: function onClick() {
              _this2.setState({ isOpenSource: !_this2.state.isOpenSource });
            } }),
          React.createElement(
            'h1',
            { className: config.isRtL ? 'left' : 'right' },
            config.translations.add_traffic_source
          )
        ),
        React.createElement(
          'div',
          { className: this.state.isOpenSource ? 'add-select-wrap ' + (this.state.isRecomendation ? 'h125' : 'h85') : config.data.source ? 'add-select-wrap ' + (this.state.isRecomendation ? 'h125' : 'h85') : 'hidden' },
          React.createElement(
            'h1',
            null,
            config.translations.traffic_source
          ),
          React.createElement(
            'div',
            { className: 'button-wrap' },
            React.createElement(
              'button',
              { onClick: this.submit },
              config.translations.save
            )
          ),
          React.createElement(
            'div',
            { className: 'select-wrap' },
            React.createElement(__WEBPACK_IMPORTED_MODULE_1_project_components__["e" /* Select */], { value: this.state.selectedLabel, onChange: function onChange(e) {
                return _this2.changeSelect(e);
              },
              options: config.translations.source_list })
          ),
          React.createElement(
            'div',
            { className: this.state.isRecomendation ? 'input-wrap' : 'hidden' },
            React.createElement(
              'div',
              { className: 'label' },
              config.translations.recommended_by
            ),
            React.createElement('input', { type: 'text', value: this.state.inputValue, onChange: function onChange(e) {
                _this2.changeInput(e.target.value);
              }, placeholder: config.translations.customer_pl }),
            React.createElement(
              'div',
              { className: this.state.isViewClients ? 'clients-list-wrap ' + (config.isRTL ? 'clients-list-wrap-left' : 'clients-list-wrap-right') : 'hidden' },
              this.state.clients.map(function (i, k) {
                return React.createElement(
                  'div',
                  { key: k, onClick: function onClick() {
                      _this2.setState({ inputValue: i.name, userId: i.id, isViewClients: false });
                    } },
                  i.name
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Source;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Source);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topnav_styl__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topnav_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__topnav_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Topnav = function (_React$Component) {
  _inherits(Topnav, _React$Component);

  function Topnav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Topnav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Topnav.__proto__ || Object.getPrototypeOf(Topnav)).call.apply(_ref, [this].concat(args))), _this), _this.age = function (d) {
      return Math.floor(moment.duration(moment() - moment(d)).asYears());
    }, _this.countAppointment = function () {
      var c = 0;
      config.data.recent_appoinments && config.data.recent_appoinments[0] && config.data.recent_appoinments.forEach(function (i) {
        return i.procedures.forEach(function () {
          return c++;
        });
      });
      return c;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Topnav, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'topnav' },
        React.createElement(
          'div',
          { className: 'header' },
          React.createElement(
            'div',
            { className: 'arrow-wrap', onClick: function onClick() {
                window.history.go(-1);
              } },
            React.createElement('img', { className: 'arrow-back', src: config.urls.media + 'arrow-back.svg' })
          ),
          React.createElement(
            'div',
            { className: 'client-name' },
            React.createElement('div', { className: 'icon-online' }),
            React.createElement(
              'h1',
              null,
              config.data.name
            ),
            React.createElement(
              'h1',
              null,
              '(',
              this.age(config.data.birthdate),
              ')'
            )
          ),
          React.createElement(
            'div',
            { className: 'edit-wrap' },
            React.createElement(
              'button',
              { className: 'edit' },
              config.translations.edit
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'buttons' },
          React.createElement(
            'div',
            { className: 'customers-wrap' },
            React.createElement(
              'button',
              null,
              config.translations.customer
            )
          ),
          React.createElement(
            'div',
            { className: 'appointments-wrap' },
            React.createElement(
              'button',
              null,
              this.countAppointment(),
              ' - ',
              config.translations.appointment
            )
          )
        )
      );
    }
  }]);

  return Topnav;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Topnav);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_jsx__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_styl__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_styl__);



ReactDOM.render(React.createElement('div', null), document.getElementById('root'));

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal_styl__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Modal_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

    _this.init = function () {
      if (_this.props.show && !_this.state.animation) {
        setTimeout(function () {
          return _this.setState({ animation: true, flag: true });
        }, 1);
      } else if (!_this.props.show && _this.state.animation) {
        setTimeout(function () {
          return _this.setState({ animation: false });
        }, 1);
        setTimeout(function () {
          return _this.setState({ flag: false });
        }, 200);
      }
    };

    _this.componentDidUpdate = function () {
      return _this.init();
    };

    _this.componentDidMount = function () {
      return _this.init();
    };

    _this.state = {
      animation: false,
      flag: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('div', { id: this.props.show ? 'modal-background' : this.state.flag ? 'modal-background' : 'hidden',
          className: this.state.animation ? 'fade-background' : '', onClick: this.props.onHide }),
        React.createElement(
          'div',
          { id: this.props.show ? 'modal-wrapper' : this.state.flag ? 'modal-wrapper' : 'hidden' },
          React.createElement(
            'div',
            { id: 'modal-content', className: this.state.animation ? 'fade-content' : '', onClick: function onClick(e) {
                return e.stopPropagation();
              } },
            this.props.children
          )
        )
      );
    }
  }]);

  return Modal;
}(React.Component);

Modal.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any,
  onHide: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  show: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Select_styl__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Select_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Select_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this));

    _this.selectVal = function (i) {
      _this.props.onChange && _this.props.onChange(i);
      _this.setState({ isVisibleList: false });
    };

    _this.state = {
      isVisibleList: false
    };
    return _this;
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { id: 'select-main', ref: 'active', tabIndex: '1', onBlur: function onBlur() {
            return _this2.setState({ isVisibleList: false });
          } },
        React.createElement(
          'div',
          { className: 'active', onClick: function onClick() {
              return _this2.setState({ isVisibleList: true }, function () {
                return _this2.refs.active.focus();
              });
            } },
          this.props.value && this.props.value,
          React.createElement('img', { className: 'icon ' + (this.state.isVisibleList && 'icon-active'),
            src: config.urls.media + 'select-icon.png' })
        ),
        React.createElement(
          'div',
          { className: this.state.isVisibleList ? 'options' : 'hidden' },
          this.props.options && this.props.options.map(function (i) {
            return React.createElement(
              'div',
              { onClick: function onClick() {
                  return _this2.selectVal(i);
                } },
              i.label
            );
          })
        )
      );
    }
  }]);

  return Select;
}(React.Component);

Select.propTypes = {
  onChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  value: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  options: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arr
};

/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = React;

var _react2 = _interopRequireDefault(_react);

var _reactDom = ReactDOM;

var _reactDom2 = _interopRequireDefault(_reactDom);

var _swiper = Swiper;

var _swiper2 = _interopRequireDefault(_swiper);

var _objectAssign = __webpack_require__(6);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _propTypes = PropTypes;

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReactIdSwiper = function (_React$Component) {
  _inherits(ReactIdSwiper, _React$Component);

  function ReactIdSwiper(props) {
    _classCallCheck(this, ReactIdSwiper);

    var _this = _possibleConstructorReturn(this, (ReactIdSwiper.__proto__ || Object.getPrototypeOf(ReactIdSwiper)).call(this, props));

    _this.renderContent = _this.renderContent.bind(_this);
    return _this;
  }

  _createClass(ReactIdSwiper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.swiper = (0, _swiper2.default)(_reactDom2.default.findDOMNode(this), (0, _objectAssign2.default)({}, this.props));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
        this.swiper.destroy(true, true);
        this.swiper = (0, _swiper2.default)(_reactDom2.default.findDOMNode(this), (0, _objectAssign2.default)({}, nextProps));
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.children !== this.props.children;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
        this.swiper.destroy(true, true);
        this.swiper = (0, _swiper2.default)(_reactDom2.default.findDOMNode(this), (0, _objectAssign2.default)({}, this.props));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof this.swiper !== 'undefined') this.swiper.destroy(true, true);
      delete this.swiper;
    }
  }, {
    key: 'validateClass',
    value: function validateClass(className) {
      if (typeof className !== 'string') return '';
      return className.replace(/\.|#/g, ' ').trim();
    }
  }, {
    key: 'renderScrollBar',
    value: function renderScrollBar() {
      if (!this.props.scrollbar) return false;
      var scrollbarCustomizedClass = this.validateClass(this.props.scrollbarCustomizedClass);
      var scrollbarClass = this.validateClass(this.props.scrollbar);

      return _react2.default.createElement('div', { className: [scrollbarClass, scrollbarCustomizedClass].join(' ') });
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      if (!this.props.pagination) return false;
      var paginationCustomizedClass = this.validateClass(this.props.paginationCustomizedClass);
      var paginationClass = this.validateClass(this.props.pagination);

      return _react2.default.createElement('div', { className: [paginationClass, paginationCustomizedClass].join(' ') });
    }
  }, {
    key: 'renderNextButton',
    value: function renderNextButton() {
      if (!this.props.nextButton) return false;
      var nextButtonCustomizedClass = this.validateClass(this.props.nextButtonCustomizedClass);
      var nextButtonClass = this.validateClass(this.props.nextButton);

      return _react2.default.createElement('div', { className: [nextButtonClass, nextButtonCustomizedClass].join(' ') });
    }
  }, {
    key: 'renderPrevButton',
    value: function renderPrevButton() {
      if (!this.props.prevButton) return false;
      var prevButtonCustomizedClass = this.validateClass(this.props.prevButtonCustomizedClass);
      var prevButtonClass = this.validateClass(this.props.prevButton);

      return _react2.default.createElement('div', { className: [prevButtonClass, prevButtonCustomizedClass].join(' ') });
    }
  }, {
    key: 'renderContent',
    value: function renderContent(e) {
      var _props = this.props,
          slideClass = _props.slideClass,
          noSwiping = _props.noSwiping;

      var noSwipingClass = noSwiping ? 'swiper-no-swiping' : '';

      return _react2.default.cloneElement(e, { className: [slideClass, e.props.className, noSwipingClass].join(' ') });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          containerClass = _props2.containerClass,
          wrapperClass = _props2.wrapperClass,
          children = _props2.children;

      return _react2.default.createElement('div', { className: containerClass }, _react2.default.createElement('div', { className: wrapperClass }, _react2.default.Children.map(children, this.renderContent)), this.renderPagination(), this.renderScrollBar(), this.renderNextButton(), this.renderPrevButton());
    }
  }]);

  return ReactIdSwiper;
}(_react2.default.Component);

ReactIdSwiper.defaultProps = {
  containerClass: 'swiper-container',
  wrapperClass: 'swiper-wrapper',
  slideClass: 'swiper-slide'
};
ReactIdSwiper.propTypes = {
  containerClass: _propTypes2.default.string,
  wrapperClass: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.element]),
  rebuildOnUpdate: _propTypes2.default.bool,
  initialSlide: _propTypes2.default.number,
  direction: _propTypes2.default.string,
  speed: _propTypes2.default.number,
  setWrapperSize: _propTypes2.default.bool,
  virtualTranslate: _propTypes2.default.bool,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  autoHeight: _propTypes2.default.bool,
  roundLengths: _propTypes2.default.bool,
  nested: _propTypes2.default.bool,
  autoplay: _propTypes2.default.number,
  autoplayStopOnLast: _propTypes2.default.bool,
  autoplayDisableOnInteraction: _propTypes2.default.bool,
  watchSlidesProgress: _propTypes2.default.bool,
  watchSlidesVisibility: _propTypes2.default.bool,
  freeMode: _propTypes2.default.bool,
  freeModeMomentum: _propTypes2.default.bool,
  freeModeMomentumRatio: _propTypes2.default.number,
  freeModeMomentumBounce: _propTypes2.default.bool,
  freeModeMomentumBounceRatio: _propTypes2.default.number,
  freeModeMinimumVelocity: _propTypes2.default.number,
  freeModeSticky: _propTypes2.default.bool,
  effect: _propTypes2.default.string,
  fade: _propTypes2.default.object,
  cube: _propTypes2.default.object,
  coverflow: _propTypes2.default.object,
  flip: _propTypes2.default.object,
  parallax: _propTypes2.default.bool,
  spaceBetween: _propTypes2.default.number,
  slidesPerColumn: _propTypes2.default.number,
  slidesPerColumnFill: _propTypes2.default.string,
  slidesPerGroup: _propTypes2.default.number,
  centeredSlides: _propTypes2.default.bool,
  slidesOffsetBefore: _propTypes2.default.number,
  slidesOffsetAfter: _propTypes2.default.number,
  grabCursor: _propTypes2.default.bool,
  touchEventsTarget: _propTypes2.default.string,
  touchRatio: _propTypes2.default.number,
  touchAngle: _propTypes2.default.number,
  simulateTouch: _propTypes2.default.bool,
  shortSwipes: _propTypes2.default.bool,
  longSwipes: _propTypes2.default.bool,
  longSwipesRatio: _propTypes2.default.number,
  longSwipesMs: _propTypes2.default.number,
  followFinger: _propTypes2.default.bool,
  onlyExternal: _propTypes2.default.bool,
  threshold: _propTypes2.default.number,
  touchMoveStopPropagation: _propTypes2.default.bool,
  iOSEdgeSwipeDetection: _propTypes2.default.bool,
  iOSEdgeSwipeThreshold: _propTypes2.default.number,
  resistance: _propTypes2.default.bool,
  resistanceRatio: _propTypes2.default.number,
  preventClicks: _propTypes2.default.bool,
  preventClicksPropagation: _propTypes2.default.bool,
  slideToClickedSlide: _propTypes2.default.bool,
  allowSwipeToPrev: _propTypes2.default.bool,
  allowSwipeToNext: _propTypes2.default.bool,
  noSwiping: _propTypes2.default.bool,
  noSwipingClass: _propTypes2.default.string,
  uniqueNavElements: _propTypes2.default.bool,
  pagination: _propTypes2.default.string,
  paginationType: _propTypes2.default.string,
  paginationHide: _propTypes2.default.bool,
  paginationClickable: _propTypes2.default.bool,
  paginationElement: _propTypes2.default.string,
  paginationBulletRender: _propTypes2.default.func,
  paginationFractionRender: _propTypes2.default.func,
  paginationProgressRender: _propTypes2.default.func,
  paginationCustomRender: _propTypes2.default.func,
  scrollbar: _propTypes2.default.string,
  scrollbarHide: _propTypes2.default.bool,
  scrollbarDraggable: _propTypes2.default.bool,
  scrollbarSnapOnRelease: _propTypes2.default.bool,
  prevButton: _propTypes2.default.string,
  nextButton: _propTypes2.default.string,
  a11y: _propTypes2.default.bool,
  prevSlideMessage: _propTypes2.default.string,
  nextSlideMessage: _propTypes2.default.string,
  firstSlideMessage: _propTypes2.default.string,
  lastSlideMessage: _propTypes2.default.string,
  paginationBulletMessage: _propTypes2.default.string,
  keyboardControl: _propTypes2.default.bool,
  mousewheelControl: _propTypes2.default.bool,
  mousewheelForceToAxis: _propTypes2.default.bool,
  mousewheelReleaseOnEdges: _propTypes2.default.bool,
  mousewheelInvert: _propTypes2.default.bool,
  mousewheelSensitivity: _propTypes2.default.number,
  hashnav: _propTypes2.default.bool,
  preloadImages: _propTypes2.default.bool,
  updateOnImagesReady: _propTypes2.default.bool,
  lazyLoading: _propTypes2.default.bool,
  lazyLoadingInPrevNext: _propTypes2.default.bool,
  lazyLoadingInPrevNextAmount: _propTypes2.default.number,
  lazyLoadingOnTransitionStart: _propTypes2.default.bool,
  loop: _propTypes2.default.bool,
  loopAdditionalSlides: _propTypes2.default.number,
  loopedSlides: _propTypes2.default.number,
  controlInverse: _propTypes2.default.bool,
  controlBy: _propTypes2.default.string,
  observer: _propTypes2.default.bool,
  observeParents: _propTypes2.default.bool,
  breakpoints: _propTypes2.default.object,
  runCallbacksOnInit: _propTypes2.default.bool,
  onInit: _propTypes2.default.func,
  onSlideChangeStart: _propTypes2.default.func,
  onSlideChangeEnd: _propTypes2.default.func,
  onSlideNextStart: _propTypes2.default.func,
  onSlideNextEnd: _propTypes2.default.func,
  onSlidePrevStart: _propTypes2.default.func,
  onSlidePrevEnd: _propTypes2.default.func,
  onTransitionStart: _propTypes2.default.func,
  onTransitionEnd: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  onTouchMove: _propTypes2.default.func,
  onTouchMoveOpposite: _propTypes2.default.func,
  onSliderMove: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onTap: _propTypes2.default.func,
  onDoubleTap: _propTypes2.default.func,
  onImagesReady: _propTypes2.default.func,
  onProgress: _propTypes2.default.func,
  onReachBeginning: _propTypes2.default.func,
  onReachEnd: _propTypes2.default.func,
  onDestroy: _propTypes2.default.func,
  onSetTranslate: _propTypes2.default.func,
  onSetTransition: _propTypes2.default.func,
  onAutoplay: _propTypes2.default.func,
  onAutoplayStart: _propTypes2.default.func,
  onAutoplayStop: _propTypes2.default.func,
  onLazyImageLoad: _propTypes2.default.func,
  onLazyImageReady: _propTypes2.default.func,
  onPaginationRendered: _propTypes2.default.func,
  slideClass: _propTypes2.default.string,
  slideActiveClass: _propTypes2.default.string,
  slideVisibleClass: _propTypes2.default.string,
  slideDuplicateClass: _propTypes2.default.string,
  slideNextClass: _propTypes2.default.string,
  slidePrevClass: _propTypes2.default.string,
  bulletClass: _propTypes2.default.string,
  bulletActiveClass: _propTypes2.default.string,
  paginationHiddenClass: _propTypes2.default.string,
  paginationCurrentClass: _propTypes2.default.string,
  paginationTotalClass: _propTypes2.default.string,
  paginationProgressbarClass: _propTypes2.default.string,
  buttonDisabledClass: _propTypes2.default.string,
  prevButtonCustomizedClass: _propTypes2.default.string,
  nextButtonCustomizedClass: _propTypes2.default.string,
  paginationCustomizedClass: _propTypes2.default.string,
  scrollbarCustomizedClass: _propTypes2.default.string
};
exports.default = ReactIdSwiper;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_components__ = __webpack_require__(1);

var getBirthdaysStatus = function getBirthdaysStatus(d) {
  var t = moment();
  var dl = void 0;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'month') === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'month')) {
    dl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'date') - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'date');
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'month') + 1 === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'month')) {
    dl = -1 * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["d" /* getEO */])(d) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'date') + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'date'));
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'month') - 1 === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'month')) {
    dl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["d" /* getEO */])(t) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'date') + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'date');
  }

  if (config.translations.dates.days[dl]) {
    return config.translations.dates.days[dl];
  } else if (dl < 31 && dl > 1) {
    return 'In ' + dl + ' days';
  } else if (dl > -8 && dl < -1) {
    return -1 * dl + ' days ago';
  }
};
/* harmony default export */ __webpack_exports__["a"] = (getBirthdaysStatus);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var decode = function decode(dataurl, filename) {
  var arr = dataurl.split(',');
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};
/* harmony default export */ __webpack_exports__["a"] = (decode);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var viewDate = function viewDate(d) {
  return moment(d).hours() + ':' + moment(d).format('mm') + ' | ' + moment(d).date() + ' ' + config.translations.dates.months[moment(d).month()];
};
/* harmony default export */ __webpack_exports__["a"] = (viewDate);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEndOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getD; });
var getEndOf = function getEndOf(d) {
  return moment(d).endOf('month').get('date');
};
var getD = function getD(d, u) {
  return moment(d).get(u);
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Or = function Or(file, callback) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var view = new DataView(e.target.result);
    var length = view.byteLength;
    var offset = 2;
    if (view.getUint16(0, false) !== 0xFFD8) return callback(-2);
    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;
      if (marker === 0xFFE1) {
        if (view.getUint32(offset += 2, false) !== 0x45786966) return callback(-1);
        var little = view.getUint16(offset += 6, false) === 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;
        for (var i = 0; i < tags; i++) {
          if (view.getUint16(offset + i * 12, little) === 0x0112) {
            return callback(view.getUint16(offset + i * 12 + 8, little));
          }
        }
      } else if ((marker & 0xFF00) !== 0xFF00) break;else offset += view.getUint16(offset, false);
    }
    return callback(-1);
  };
  reader.readAsArrayBuffer(file);
};
/* unused harmony default export */ var _unused_webpack_default_export = (Or);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_project_components__ = __webpack_require__(1);

var getla = function getla(d) {
  var format = function format(d) {
    return ' ' + moment(d).format('HH:mm');
  };
  var la = void 0;
  var ml = void 0;
  var dl = void 0;
  var t = moment();
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'year') === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'year')) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'month') === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'month')) {
      dl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'date') - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'date');
    } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'month') + 1 === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'month')) {
      dl = -1 * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["d" /* getEO */])(d) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'date') + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'date'));
    } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'month') - 1 === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'month')) {
      dl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["d" /* getEO */])(t) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'date') + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'date');
    }
    if (dl < 32 || dl > -32) {
      if (config.translations.dates.days[dl]) {
        la = config.translations.dates.days[dl] + format(d);
      } else if (dl < 8 && dl > 1) {
        la = config.translations.dates.weekdays[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'day')] + format(d);
      } else if (dl > -8 && dl < -1) {
        la = 'Last ' + config.translations.dates.weekdays[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'day')] + format(d);
      } else if (dl < 15 && dl > 7) {
        la = 'In ' + dl + ' days';
      } else if (dl > -15 && dl < -7) {
        la = dl * -1 + ' days ago';
      } else if (dl < 32 && dl > 14) {
        if (dl > 14 && dl < 21) {
          la = 'In 2 weeks';
        } else if (dl > 20 && dl < 28) {
          la = 'In 3 weeks';
        } else if (dl > 27 && dl < 32) {
          la = 'In 4 weeks';
        }
      } else if (dl > -32 && dl < -14) {
        if (dl < -14 && dl > -21) {
          la = '2 weeks ago';
        } else if (dl < -20 && dl > -28) {
          la = '3 weeks ago';
        } else if (dl < -27 && dl > -32) {
          la = '4 weeks ago';
        }
      }
    }
    if (dl > 31 || dl < -31 || dl === undefined) {
      ml = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'month') - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'month');
    }
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'year') + 1 === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'year')) {
    ml = -1 * (12 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'month') + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'month'));
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'year') - 1 === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'year')) {
    ml = 12 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'month') + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'month');
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'year') > __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'year')) {
    la = 'In ' + Math.floor(moment.duration(moment(d) - t).asYears()) + ' years';
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(d, 'year') < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_project_components__["c" /* get */])(t, 'year')) {
    la = Math.floor(moment.duration(t - moment(d)).asYears()) + ' years ago';
  }
  if (ml > 0 && ml < 12) {
    la = 'In ' + ml + ' month';
  } else if (ml < 0 && ml > -12) {
    la = -1 * ml + ' month ago';
  } else if (ml > 11) {
    la = 'Next year';
  } else if (ml < -11) {
    la = 'last year';
  }
  return la;
};
/* harmony default export */ __webpack_exports__["a"] = (getla);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_service__ = __webpack_require__(2);


var getService = function getService(q) {
  var url = config.urls.adress.replace('{query}', q).replace('{language}', config.translations.language);
  var options = {
    mode: 'cors',
    method: 'GET'
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(url, options);
};

/* harmony default export */ __webpack_exports__["a"] = (getService);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return replaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_service__ = __webpack_require__(2);


var replaceService = function replaceService() {
  var url = config.urls.main + config.urls.fill.replace('{client_id}', config.data.id);
  var options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT'
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* default */])(url, options);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422898
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422887
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422893
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422905
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422896
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422903
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422885
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422884
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422889
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422894
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422891
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422909
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422907
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422911
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422899
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422901
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422869
      var cssReload = require("../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509970422880
      var cssReload = require("../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var ReactPropTypesSecret = __webpack_require__(12);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var warning = __webpack_require__(11);
var assign = __webpack_require__(6);

var ReactPropTypesSecret = __webpack_require__(12);
var checkPropTypes = __webpack_require__(17);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(70);

var _react2 = _interopRequireDefault(_react);

var Switch = (function (_Component) {
  _inherits(Switch, _Component);

  _createClass(Switch, null, [{
    key: 'propTypes',
    value: {
      on: _propTypes2['default'].bool,
      onClick: _propTypes2['default'].func,
      enabled: _propTypes2['default'].bool,
      className: _propTypes2['default'].string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      on: false,
      onClick: function onClick() {},
      enabled: true,
      className: ''
    },
    enumerable: true
  }]);

  function Switch(props) {
    var _this = this;

    _classCallCheck(this, Switch);

    _get(Object.getPrototypeOf(Switch.prototype), 'constructor', this).call(this, props);

    this.handleClick = function (e) {
      e.preventDefault();
      if (_this.props.enabled) {
        _this.props.onClick();
        _this.setState({ on: !_this.state.on });
      }
    };

    this.state = { on: this.props.on };
  }

  _createClass(Switch, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ on: nextProps.on });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = ['switch', this.props.className, this.state.on ? 'on ' : '', this.props.enabled ? '' : 'disabled '].join(' ');
      return _react2['default'].createElement(
        'div',
        { className: className, onClick: this.handleClick },
        _react2['default'].createElement('div', { className: 'switch-toggle', children: this.props.children })
      );
    }
  }]);

  return Switch;
})(_react.Component);

exports['default'] = Switch;
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.0.0
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
(function() {

'use strict';

var objectAssign$1 = __webpack_require__(6);
var require$$0 = __webpack_require__(11);
var emptyObject = __webpack_require__(16);
var invariant = __webpack_require__(5);
var emptyFunction = __webpack_require__(4);
var checkPropTypes = __webpack_require__(17);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule reactProdInvariant
 * 
 */

{
  var warning = require$$0;
}

function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass');
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule lowPriorityWarning
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning_1 = lowPriorityWarning;

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(ReactComponent.prototype, methodName, {
      get: function () {
        lowPriorityWarning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
var pureComponentPrototype = ReactPureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
objectAssign$1(pureComponentPrototype, ReactComponent.prototype);
pureComponentPrototype.isPureReactComponent = true;

function ReactAsyncComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

var asyncComponentPrototype = ReactAsyncComponent.prototype = new ComponentDummy();
asyncComponentPrototype.constructor = ReactAsyncComponent;
// Avoid an extra prototype jump for these methods.
objectAssign$1(asyncComponentPrototype, ReactComponent.prototype);
asyncComponentPrototype.unstable_isAsyncReactComponent = true;
asyncComponentPrototype.render = function () {
  return this.props.children;
};

var ReactBaseClasses = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent,
  AsyncComponent: ReactAsyncComponent
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactCurrentOwner
 * 
 */

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactCurrentOwner_1 = ReactCurrentOwner;

var hasOwnProperty = Object.prototype.hasOwnProperty;

{
  var warning$2 = require$$0;
}

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE$1 = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning$2(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning$2(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE$1,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/react-api.html#createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE$1) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/react-api.html#createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/react-api.html#cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = objectAssign$1({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner_1.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE$1;
};

var ReactElement_1 = ReactElement;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactDebugCurrentFrame
 * 
 */

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var ReactDebugCurrentFrame_1 = ReactDebugCurrentFrame;

{
  var warning$1 = require$$0;

  var _require = ReactDebugCurrentFrame_1,
      getStackAddendum = _require.getStackAddendum;
}

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = ITERATOR_SYMBOL && children[ITERATOR_SYMBOL] || children[FAUX_ITERATOR_SYMBOL];
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          warning$1(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getStackAddendum());
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement_1.isValidElement(mappedChild)) {
      mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  count: countChildren,
  toArray: toArray
};

var ReactChildren_1 = ReactChildren;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactVersion
 */

var ReactVersion = '16.0.0';

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement_1.isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

var onlyChild_1 = onlyChild;

/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @providesModule describeComponentFrame
 */

var describeComponentFrame$1 = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule getComponentName
 * 
 */

function getComponentName$1(instanceOrFiber) {
  if (typeof instanceOrFiber.getName === 'function') {
    // Stack reconciler
    var instance = instanceOrFiber;
    return instance.getName();
  }
  if (typeof instanceOrFiber.tag === 'number') {
    // Fiber reconciler
    var fiber = instanceOrFiber;
    var type = fiber.type;

    if (typeof type === 'string') {
      return type;
    }
    if (typeof type === 'function') {
      return type.displayName || type.name;
    }
  }
  return null;
}

var getComponentName_1 = getComponentName$1;

{
  var checkPropTypes$1 = checkPropTypes;
  var lowPriorityWarning$1 = lowPriorityWarning_1;
  var ReactDebugCurrentFrame$1 = ReactDebugCurrentFrame_1;
  var warning$3 = require$$0;
  var describeComponentFrame = describeComponentFrame$1;
  var getComponentName = getComponentName_1;

  var currentlyValidatingElement = null;

  var getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  var getStackAddendum$1 = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame$1.getStackAddendum() || '';
    return stack;
  };
}

var ITERATOR_SYMBOL$1 = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL$1 = '@@iterator'; // Before Symbol spec.

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner_1.current) {
    var name = getComponentName(ReactCurrentOwner_1.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning$3(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum$1());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement_1.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement_1.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = ITERATOR_SYMBOL$1 && node[ITERATOR_SYMBOL$1] || node[FAUX_ITERATOR_SYMBOL$1];
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement_1.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;

  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes$1(propTypes, element.props, 'prop', name, getStackAddendum$1);
    currentlyValidatingElement = null;
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning$3(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}

var ReactElementValidator$1 = {
  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      var info = '';
      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(props);
      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      info += ReactDebugCurrentFrame$1.getStackAddendum() || '';

      warning$3(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
    }

    var element = ReactElement_1.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator$1.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    {
      Object.defineProperty(validatedFactory, 'type', {
        enumerable: false,
        get: function () {
          lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
          Object.defineProperty(this, 'type', {
            value: type
          });
          return type;
        }
      });
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement_1.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }
};

var ReactElementValidator_1 = ReactElementValidator$1;

{
  var warning$4 = require$$0;
}

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(Object.prototype.hasOwnProperty)
  // Strip regex characters so we can use it for regex
  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  // Remove hasOwnProperty from the template to make it generic
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function getDisplayName$1(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName = void 0;

  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  warning$4(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id);
  return describeComponentFrame$1(name || '', element && element._source, ownerName || '');
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? invariant(false, 'Item must have been set') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : void 0;
      !nextChild.isMounted ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? invariant(false, 'Item must have been set') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function () {
    var info = '';
    var currentOwner = ReactCurrentOwner_1.current;
    if (currentOwner) {
      !(typeof currentOwner.tag !== 'number') ? invariant(false, 'Fiber owners should not show up in Stack stack traces.') : void 0;
      if (typeof currentOwner._debugID === 'number') {
        info += ReactComponentTreeHook.getStackAddendumByID(currentOwner._debugID);
      }
    }
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName$1(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs
};

var ReactComponentTreeHook_1 = ReactComponentTreeHook;

var createElement = ReactElement_1.createElement;
var createFactory = ReactElement_1.createFactory;
var cloneElement = ReactElement_1.cloneElement;

{
  var ReactElementValidator = ReactElementValidator_1;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var React = {
  Children: {
    map: ReactChildren_1.map,
    forEach: ReactChildren_1.forEach,
    count: ReactChildren_1.count,
    toArray: ReactChildren_1.toArray,
    only: onlyChild_1
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,
  unstable_AsyncComponent: ReactBaseClasses.AsyncComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement_1.isValidElement,

  createFactory: createFactory,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner_1,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: objectAssign$1
  }
};

{
  objectAssign$1(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactComponentTreeHook: ReactComponentTreeHook_1,
    ReactDebugCurrentFrame: ReactDebugCurrentFrame_1
  });
}

var ReactEntry = React;

module.exports = ReactEntry;

})();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 React v16.0.0
 react.production.min.js

 Copyright (c) 2013-present, Facebook, Inc.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var f=__webpack_require__(6),p=__webpack_require__(16);__webpack_require__(5);var r=__webpack_require__(4);
function t(a){for(var b=arguments.length-1,d="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,e=0;e<b;e++)d+="\x26args[]\x3d"+encodeURIComponent(arguments[e+1]);b=Error(d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
var u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function v(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}v.prototype.isReactComponent={};v.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?t("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};v.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function w(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}function x(){}x.prototype=v.prototype;var y=w.prototype=new x;y.constructor=w;f(y,v.prototype);y.isPureReactComponent=!0;function z(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}var A=z.prototype=new x;A.constructor=z;f(A,v.prototype);A.unstable_isAsyncReactComponent=!0;A.render=function(){return this.props.children};
var B={Component:v,PureComponent:w,AsyncComponent:z},C={current:null},D=Object.prototype.hasOwnProperty,E="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,F={key:!0,ref:!0,__self:!0,__source:!0};function G(a,b,d,e,c,g,k){return{$$typeof:E,type:a,key:b,ref:d,props:k,_owner:g}}
G.createElement=function(a,b,d){var e,c={},g=null,k=null,m=null,q=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),m=void 0===b.__self?null:b.__self,q=void 0===b.__source?null:b.__source,b)D.call(b,e)&&!F.hasOwnProperty(e)&&(c[e]=b[e]);var l=arguments.length-2;if(1===l)c.children=d;else if(1<l){for(var h=Array(l),n=0;n<l;n++)h[n]=arguments[n+2];c.children=h}if(a&&a.defaultProps)for(e in l=a.defaultProps,l)void 0===c[e]&&(c[e]=l[e]);return G(a,g,k,m,q,C.current,c)};
G.createFactory=function(a){var b=G.createElement.bind(null,a);b.type=a;return b};G.cloneAndReplaceKey=function(a,b){return G(a.type,b,a.ref,a._self,a._source,a._owner,a.props)};
G.cloneElement=function(a,b,d){var e=f({},a.props),c=a.key,g=a.ref,k=a._self,m=a._source,q=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,q=C.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(h in b)D.call(b,h)&&!F.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==l?l[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=d;else if(1<h){l=Array(h);for(var n=0;n<h;n++)l[n]=arguments[n+2];e.children=l}return G(a.type,c,g,k,m,q,e)};
G.isValidElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===E};var H="function"===typeof Symbol&&Symbol.iterator,I="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var J=/\/+/g,K=[];
function L(a,b,d,e){if(K.length){var c=K.pop();c.result=a;c.keyPrefix=b;c.func=d;c.context=e;c.count=0;return c}return{result:a,keyPrefix:b,func:d,context:e,count:0}}function M(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>K.length&&K.push(a)}
function N(a,b,d,e){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;if(null===a||"string"===c||"number"===c||"object"===c&&a.$$typeof===I)return d(e,a,""===b?"."+O(a,0):b),1;var g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){c=a[k];var m=b+O(c,k);g+=N(c,m,d,e)}else if(m=H&&a[H]||a["@@iterator"],"function"===typeof m)for(a=m.call(a),k=0;!(c=a.next()).done;)c=c.value,m=b+O(c,k++),g+=N(c,m,d,e);else"object"===c&&(d=""+a,t("31","[object Object]"===d?"object with keys {"+
Object.keys(a).join(", ")+"}":d,""));return g}function O(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function P(a,b){a.func.call(a.context,b,a.count++)}function Q(a,b,d){var e=a.result,c=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?R(a,e,d,r.thatReturnsArgument):null!=a&&(G.isValidElement(a)&&(a=G.cloneAndReplaceKey(a,c+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(J,"$\x26/")+"/")+d)),e.push(a))}
function R(a,b,d,e,c){var g="";null!=d&&(g=(""+d).replace(J,"$\x26/")+"/");b=L(b,g,e,c);null==a||N(a,"",Q,b);M(b)}var S={forEach:function(a,b,d){if(null==a)return a;b=L(null,null,b,d);null==a||N(a,"",P,b);M(b)},map:function(a,b,d){if(null==a)return a;var e=[];R(a,e,null,b,d);return e},count:function(a){return null==a?0:N(a,"",r.thatReturnsNull,null)},toArray:function(a){var b=[];R(a,b,null,r.thatReturnsArgument);return b}};
module.exports={Children:{map:S.map,forEach:S.forEach,count:S.count,toArray:S.toArray,only:function(a){G.isValidElement(a)?void 0:t("143");return a}},Component:B.Component,PureComponent:B.PureComponent,unstable_AsyncComponent:B.AsyncComponent,createElement:G.createElement,cloneElement:G.cloneElement,isValidElement:G.isValidElement,createFactory:G.createFactory,version:"16.0.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:f}};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(69);
} else {
  module.exports = __webpack_require__(68);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map