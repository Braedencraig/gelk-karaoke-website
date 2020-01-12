module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/sing.png":
/*!*************************!*\
  !*** ./assets/sing.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_sing_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sing.png */ "./assets/sing.png");

var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Good Enough Live Karaoke"), __jsx("meta", {
      charSet: "utf-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx("link", {
      rel: "shortcut icon",
      href: _assets_sing_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), __jsx("meta", {
      property: "og:site_name",
      content: "GOOD ENOUGH LIVE KARAOKE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), __jsx("meta", {
      property: "og:title",
      content: "Good Enough Live Karaoke",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("meta", {
      property: "og:description",
      content: "Live Band Karaoke with Good Enough Live Karaoke Toronto's best live karaoke band. We play, you sing!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image",
      content: "http://www.goodenoughlivekaraoke.com/uploads/6/8/0/2/6802119/img-6190-1.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("meta", {
      property: "og:url",
      content: "http://www.goodenoughlivekaraoke.com/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx("meta", {
      name: "description",
      content: "Live Band Karaoke with Good Enough Live Karaoke Toronto's best live karaoke band. We play, you sing!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("meta", {
      name: "keywords",
      content: "Good Enough Live Karaoke, Toronto live band karaoke, live band karaoke, karaoke Toronto, cover bands Toronto, corporate events, corporate team building, wedding band,",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("meta", {
      "http-equiv": "Content-Type",
      content: "text/html; charset=utf-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map