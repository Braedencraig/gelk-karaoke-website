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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/contact.png":
/*!****************************!*\
  !*** ./assets/contact.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./assets/home.png":
/*!*************************!*\
  !*** ./assets/home.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABICAYAAAAeRWCqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABH1JREFUeNrsXItt2zAQZYIOwA2qTmBlgqgTVBvEncDqBFEmsDuBkwnqTmBlAqsT2J7AzgSuBJwAQRDFuyNpye094GAnoWjy3n0pK0oJBAKBQCAQCAQCgUAgEAgEAoFAILgO0kr2lVxATpVsK/lVSV5JIiqaBvIWSSbRoiY8PjGuiUHJba94reTAmKcQCvwSNa/kG4S0PjxV8mWC+6sNat1ad20YZSVv8EoxqtowP8N7BdcfwUjPU9jsHBHGLh0Py4njQ+ZK0+fvYG82gnaWfdT5Nwq9kXvEmIhgvVNDbPnbGogwrX1tmaPZ93wKRBUelMJFbSQZVItN1ZgRjGeGXPfS4I2xuiEkyNCXE0NfZrHSpeX6NcKL98i1XwzedGHsfTSP4gCTqPXA77cWIpvcuR+wek3MHUmPR3GKlwzWfwIS9/DzkjknuzzHgFsFNSTFxPEPPe0BNWxFPS0IFeseMiKQBEisdfOzkhVFT/eevENB6eqKZ4aCmxJceSSKa/kpcr3P4Glzn0SdGRvl5sLM4dqEUUiYxj8yCx8fBnbVHMXxwIXjfAtHxUUD+QpTGUcORuaNqDIAUVHnfeo4X8pRQE+oTNQEgSUq9BFJ6mme2DEM61snKnTV9+Tpc7Vj8x0z89NkiDoQTyZKpif48ijufNGte9TRoYH1kkyJHjVjXr8YgQOUUftueBPG2CjA5rWjR4YiJOamCSxRB+S4baD+4wVK4BiaRX1FL/WBByBKQ+H0CK+FCuAplwBSw3b4mvVY/UmZD0ejQGu17cOko92Uqz5f4ab25FVPCNkEPCEZuwK+SujzjQ2xuDmr6d1DSiAlvLfWuLo1omxKfWck7CmW10lnXSU1P40d+mxFATXZnpEN6wES/M2AQtQY4c8U32cuPQnsBTP2FeSfI+oMXrCyJPwQIbMglOZYo3uZSoER4g7v15bC0gDzm26xU46tjkgyD4gqkhOey5AedUYqkeoZJbHUTgcKD2zFVyKUTCXAtI86utyBPLQMORhRf4hhCUvsx8Df+0h5HCjltUej+x0gnJWKeW8vRNWnGYndhEVH+dpAHjUfFp7GcPMp+b6X79CH6Y0ouaUOfTsgp2kc9YD1J572USh/N0sTWHOtl+bLpO3HkLwXEyXRoxqlaMS8Q+Miy4bOxBK67OS1xEPYs+HkmtNDhL4ZgdwZM3S5hL0S6VGctqVgeNtooY9S+TVj3xyIovY6H5b8eFD+S/2rNrzYxUeMdRTMk48N47rCQtRGTRAhQl/UyQFYfL+CN3UjQ2Hox/4Loly8ilIU/GD2JOUA2a+OHuXi3V5Rl5SUpw9zFeZxl/lAgzx03Z6xZ9ujO3nHQCmP+mzHJiprVTVUohQQsetR8tLirVqZb9NzFUM1Gg3kYQhbjk3U0pEo15OAtfL3wNnewUNjIDKHNbX/10aqAgJL1LoVCoYs/BRwrc1xUw6SKd7XyOY9e9gr3PO93nDHKBLmiKOXsqMw0/fZSnVbiNR43x8RCAQCgUAgEAgEAoFAIBAIBAKBQCC4RfwVYAAqRBAVF6ge1AAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./assets/media.png":
/*!**************************!*\
  !*** ./assets/media.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAABICAYAAADF/sqIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABNdJREFUeNrsXO1x2zAMpX35X21QZgLLE0SZwM4G6QbOBHYmUDKB0wnsTGB7AisTRBtYmaC17qCrwkomQIKS0uLd4S5xLJLCA0CAH1FKIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBILAGDk+tzjLrPb761m2Z8kJbURnic+SGJ/n0FYh9IRHScKvFjme5R7RRnqhjVJOQLQgMBILEaW8XyAjRTxfykZUHR4rJBlHolebsmMY6xra2cF42vpZIyOKL2Iw9LqO0j6j0JpAiDnI+w7JpPRVjyhzx75WINpxennvyKA+4UhQzsJ4duNIpgZF7QxJQQGRRwRpknVLmzZPqyRp+f7OQWdBQVFKajx7ciBTEwhIPD3TnCYiC5EnYlTBOMJpSMlP20u5PkslZQMkJJ5k2kK9jRgfR3CaQ8fE72uP7yfEZw+OfZZz3pLReNMWr6QqPCL2G5zMiQeZN44KnTg8EzMuOiwalGtLkvKWMYV8ZzKZsaNina2NaNF1ZMwZPAXPnlEtHiqZkQeRQ4E2yobCYkRPQyczcvSS5B8gUxnz8EuL55ef3TKFziQkmT6rFLOeCNgH8s7SM6dA3ONZHuD3aS0DXzMmj+xYeNRrLs+tCIV227ruTvmXJ9j14gjGfGopT6h9pVSCrgjf/e6xHtk13gK1OwfSigZDX16YhnQXehsPmJQ94u8jkDtIOnIjk80CEWou0aUNROZDJlOrYeFQ+3kL89Y1yBY+/7C0cQdzHoX0G2Ryl3suApATzq9M5p5QsLdhC/PcFIjFLDR0mZmTvBM7Zw6xtFjWxlWo5mMrVGILZd9607V5M0EuWriufiWUjPyK4PJDgxniZg01Xu7g7S/Kvq8YI5T8wfCOpNp0zOzuU/W1DmI1edZrgOTENbLpEGR+Q34vQyQTGSQdXcDFsDBhLWJqh9VoOD0TmxE+E5Xq4+lZICOh1NxRgOjhnc1yeQHVYt8CEhc5Gq5GkJoz1ecxN5kY6zggSM0ckpJLNeIIkp5bx9DdpKgZ4V01gkwMnjiSoBCe+RZ4HjH724MUDH1GqocTchZDZA2z2IwqI1j0UIE9lZcx6KJubMUFT9bYeZeTTExY2TIqflYLlQv1eYcEO89Mah5Z7ojMCQRwZdEF6Dj3nTc5w2xuIXVLfEGb4spwWG43VafC6+FojvSSGJ6lHH7GXGqikDmH/hPfUHvFRGSG8NBXx/Z8U/4PS9ShHjrGlFbcW3CTLj2zQFjlXn19bHt6j07D7MHiVZwlSaj6F9POQ0+LFagkaBxIYRmjV/oaAZdi7whjKfrwTi4yTYX9NMgw55mbDsnkwA8Pg8Rkviz7qGMmZeYNKxrVkY5rBkKeegyt5U7QS8BokIGx2PCdyzKbrq3ZLslcgu3UXNpimdjTdmZt7HoSL3J4j5T4vjuFu+lmva+KLU3K+WLZUotljhZPTf/3IBqI1Q3hOoMSyCcSlH08IsPqcy3520P/hUN0w4w3UczQ6s8t4er6uMuuwFw13208KrebyzZgr+8lKgxsdzlj5BgHjUR1c32hbZo4QVjUHbxrtYi/qYXdishE4S4TC9Tf1+83gSKAT8S7dCNghakzR/8JmdX0kKnL22V9j7HKBXKQTMk/txIIBAKBQCAQCAQCgUAgEAgEAoGgG/wWYAAW3srroCoocAAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./assets/shows.png":
/*!**************************!*\
  !*** ./assets/shows.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./assets/testimonials.png":
/*!*********************************!*\
  !*** ./assets/testimonials.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const footerStyle = {
  color: 'rgba(44,113,246,.98)!important',
  background: 'none'
};

class Footer extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollToTop", () => {
      react_scroll__WEBPACK_IMPORTED_MODULE_4__["animateScroll"].scrollToTop();
    });
  }

  render() {
    return __jsx("div", {
      style: footerStyle,
      className: "jsx-2286894031",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("a", {
      onClick: this.scrollToTop,
      className: "jsx-2286894031",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2286894031" + " " + 'flexContainer',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2286894031" + " " + 'flexOne',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-2286894031",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Copyright 2020 | All Rights Reserved")), __jsx("div", {
      className: "jsx-2286894031" + " " + 'flexTwo',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("a", {
      href: "https://twitter.com/goodenoughkband",
      className: "jsx-2286894031",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("svg", {
      "enable-background": "new 0 0 56.693 56.693",
      height: "56.693px",
      id: "Layer_1",
      version: "1.1",
      viewBox: "0 0 56.693 56.693",
      width: "25px",
      height: "25px",
      xmlns: "http://www.w3.org/2000/svg",
      className: "jsx-2286894031",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("path", {
      d: "M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z",
      className: "jsx-2286894031",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }))), __jsx("a", {
      href: "https://www.facebook.com/groups/GoodEnoughLIVEKARAOKE/",
      className: "jsx-2286894031",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("svg", {
      "enable-background": "new 0 0 56.693 56.693",
      height: "56.693px",
      id: "Layer_1",
      version: "1.1",
      viewBox: "0 0 56.693 56.693",
      width: "25px",
      height: "25px",
      xmlns: "http://www.w3.org/2000/svg",
      className: "jsx-2286894031",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("path", {
      d: "M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z",
      className: "jsx-2286894031",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }))), __jsx("a", {
      href: "https://www.instagram.com/goodenoughlivekaraoke/",
      className: "jsx-2286894031",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000",
      viewBox: "0 0 50 50",
      width: "25px",
      height: "25px",
      className: "jsx-2286894031",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, ' ', __jsx("path", {
      d: "M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z",
      className: "jsx-2286894031",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2286894031",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');p.jsx-2286894031{color:#f1f1f1;margin:0 auto;font-family:Roboto,sans-serif;}svg.jsx-2286894031{fill:#f1f1f1;-webkit-transition:0.4s all;transition:0.4s all;}svg.jsx-2286894031:hover{opacity:0.6;}.flexContainer.jsx-2286894031{max-width:1400px;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:5px 5%;}.flexOne.jsx-2286894031{margin-top:8px;}.flexTwo.jsx-2286894031 a.jsx-2286894031{margin:0px 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVvQixBQUVzRyxBQUczRSxBQU1ELEFBS0QsQUFJSyxBQVFGLEFBSUMsWUFmbEIsQ0FMc0IsQ0FOTixDQXVCaEIsQ0FJQSxDQVpnQixXQWRpQixHQWVsQiwyQkFkZixHQUtBLDRDQVVnQyxtSEFDZixlQUNqQiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQWJzb2x1dGUgfSBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIFNjcm9sbCBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IHtcbiAgTGluayxcbiAgRWxlbWVudCxcbiAgRXZlbnRzLFxuICBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCxcbiAgc2Nyb2xsU3B5LFxuICBzY3JvbGxlcixcbn0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcblxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XG4gIGNvbG9yOiAncmdiYSg0NCwxMTMsMjQ2LC45OCkhaW1wb3J0YW50JyxcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxufTtcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgIHNjcm9sbC5zY3JvbGxUb1RvcCgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17Zm9vdGVyU3R5bGV9PlxuICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNjcm9sbFRvVG9wfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleENvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleE9uZSc+XG4gICAgICAgICAgICAgIDxwPkNvcHlyaWdodCAyMDIwIHwgQWxsIFJpZ2h0cyBSZXNlcnZlZDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhUd28nPlxuICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL2dvb2Rlbm91Z2hrYmFuZCc+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgNTYuNjkzIDU2LjY5MydcbiAgICAgICAgICAgICAgICAgIGhlaWdodD0nNTYuNjkzcHgnXG4gICAgICAgICAgICAgICAgICBpZD0nTGF5ZXJfMSdcbiAgICAgICAgICAgICAgICAgIHZlcnNpb249JzEuMSdcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1Ni42OTMgNTYuNjkzJ1xuICAgICAgICAgICAgICAgICAgd2lkdGg9JzI1cHgnXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9JzI1cHgnXG4gICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUyLjgzNywxNS4wNjVjLTEuODExLDAuODA1LTMuNzYsMS4zNDgtNS44MDUsMS41OTFjMi4wODgtMS4yNSwzLjY4OS0zLjIzLDQuNDQ0LTUuNTkyYy0xLjk1MywxLjE1OS00LjExNSwyLTYuNDE4LDIuNDU0ICBjLTEuODQzLTEuOTY0LTQuNDctMy4xOTItNy4zNzctMy4xOTJjLTUuNTgxLDAtMTAuMTA2LDQuNTI1LTEwLjEwNiwxMC4xMDdjMCwwLjc5MSwwLjA4OSwxLjU2MiwwLjI2MiwyLjMwMyAgYy04LjQtMC40MjItMTUuODQ4LTQuNDQ1LTIwLjgzMy0xMC41NmMtMC44NywxLjQ5Mi0xLjM2OCwzLjIyOC0xLjM2OCw1LjA4MmMwLDMuNTA2LDEuNzg0LDYuNiw0LjQ5Niw4LjQxMiAgYy0xLjY1Ni0wLjA1My0zLjIxNS0wLjUwOC00LjU3OC0xLjI2NWMtMC4wMDEsMC4wNDItMC4wMDEsMC4wODUtMC4wMDEsMC4xMjhjMCw0Ljg5NiwzLjQ4NCw4Ljk4LDguMTA4LDkuOTEgIGMtMC44NDgsMC4yMy0xLjc0MSwwLjM1NC0yLjY2MywwLjM1NGMtMC42NTIsMC0xLjI4NS0wLjA2My0xLjkwMi0wLjE4MmMxLjI4Nyw0LjAxNSw1LjAxOSw2LjkzOCw5LjQ0MSw3LjAxOSAgYy0zLjQ1OSwyLjcxMS03LjgxNiw0LjMyNy0xMi41NTIsNC4zMjdjLTAuODE1LDAtMS42Mi0wLjA0OC0yLjQxMS0wLjE0MmM0LjQ3NCwyLjg2OSw5Ljc4Niw0LjU0MSwxNS40OTMsNC41NDEgIGMxOC41OTEsMCwyOC43NTYtMTUuNCwyOC43NTYtMjguNzU2YzAtMC40MzgtMC4wMDktMC44NzUtMC4wMjgtMS4zMDlDNDkuNzY5LDE4Ljg3Myw1MS40ODMsMTcuMDkyLDUyLjgzNywxNS4wNjV6JyAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvR29vZEVub3VnaExJVkVLQVJBT0tFLyc+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgNTYuNjkzIDU2LjY5MydcbiAgICAgICAgICAgICAgICAgIGhlaWdodD0nNTYuNjkzcHgnXG4gICAgICAgICAgICAgICAgICBpZD0nTGF5ZXJfMSdcbiAgICAgICAgICAgICAgICAgIHZlcnNpb249JzEuMSdcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1Ni42OTMgNTYuNjkzJ1xuICAgICAgICAgICAgICAgICAgd2lkdGg9JzI1cHgnXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9JzI1cHgnXG4gICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTQwLjQzLDIxLjczOWgtNy42NDV2LTUuMDE0YzAtMS44ODMsMS4yNDgtMi4zMjIsMi4xMjctMi4zMjJjMC44NzcsMCw1LjM5NSwwLDUuMzk1LDBWNi4xMjVsLTcuNDMtMC4wMjkgIGMtOC4yNDgsMC0xMC4xMjUsNi4xNzQtMTAuMTI1LDEwLjEyNXY1LjUxOGgtNC43N3Y4LjUzaDQuNzdjMCwxMC45NDcsMCwyNC4xMzcsMCwyNC4xMzdoMTAuMDMzYzAsMCwwLTEzLjMyLDAtMjQuMTM3aDYuNzcgIEw0MC40MywyMS43Mzl6JyAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZ29vZGVub3VnaGxpdmVrYXJhb2tlLyc+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICAgICAgZmlsbD0nIzAwMDAwMCdcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1MCA1MCdcbiAgICAgICAgICAgICAgICAgIHdpZHRoPScyNXB4J1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0PScyNXB4J1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNIDE2IDMgQyA4LjgzIDMgMyA4LjgzIDMgMTYgTCAzIDM0IEMgMyA0MS4xNyA4LjgzIDQ3IDE2IDQ3IEwgMzQgNDcgQyA0MS4xNyA0NyA0NyA0MS4xNyA0NyAzNCBMIDQ3IDE2IEMgNDcgOC44MyA0MS4xNyAzIDM0IDMgTCAxNiAzIHogTSAzNyAxMSBDIDM4LjEgMTEgMzkgMTEuOSAzOSAxMyBDIDM5IDE0LjEgMzguMSAxNSAzNyAxNSBDIDM1LjkgMTUgMzUgMTQuMSAzNSAxMyBDIDM1IDExLjkgMzUuOSAxMSAzNyAxMSB6IE0gMjUgMTQgQyAzMS4wNyAxNCAzNiAxOC45MyAzNiAyNSBDIDM2IDMxLjA3IDMxLjA3IDM2IDI1IDM2IEMgMTguOTMgMzYgMTQgMzEuMDcgMTQgMjUgQyAxNCAxOC45MyAxOC45MyAxNCAyNSAxNCB6IE0gMjUgMTYgQyAyMC4wNCAxNiAxNiAyMC4wNCAxNiAyNSBDIDE2IDI5Ljk2IDIwLjA0IDM0IDI1IDM0IEMgMjkuOTYgMzQgMzQgMjkuOTYgMzQgMjUgQyAzNCAyMC4wNCAyOS45NiAxNiAyNSAxNiB6JyAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG98Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6ICNmMWYxZjE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdmc6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mbGV4Q29udGFpbmVyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDUlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mbGV4T25lIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmxleFR3byBhIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/Footer.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const linkStyle = {
  marginRight: 15
};

const Header = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "About")));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/MyLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const layoutStyle = {
  background: 'rgba(44,113,246,.98)!important',
  backgroundColor: 'rgba(44,113,246,.98)!important',
  backgroundSize: 'cover',
  margin: 0
};

const Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  className: "jsx-826007456",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-826007456",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "826007456",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');body{background:rgba(44,113,246,0.98) !important;box-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9NeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnVCLEFBR29HLEFBQzVDLDRDQUN6QixzQkFDYixTQUNDLFVBQ1oiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9jb21wb25lbnRzL015TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcbiAgYmFja2dyb3VuZDogJ3JnYmEoNDQsMTEzLDI0NiwuOTgpIWltcG9ydGFudCcsXG4gIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNDQsMTEzLDI0NiwuOTgpIWltcG9ydGFudCcsXG4gIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICBtYXJnaW46IDAsXG59O1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b3xSb2JvdG8rQ29uZGVuc2VkJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ0LCAxMTMsIDI0NiwgMC45OCkgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgICA8VGVzdEhlYWRlciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/MyLayout.js */"), __jsx("div", {
  style: layoutStyle,
  className: "jsx-826007456",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx(_components_TestHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), props.children, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/TestHeader.js":
/*!**********************************!*\
  !*** ./components/TestHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_home_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/home.png */ "./assets/home.png");
/* harmony import */ var _assets_shows_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/shows.png */ "./assets/shows.png");
/* harmony import */ var _assets_testimonials_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/testimonials.png */ "./assets/testimonials.png");
/* harmony import */ var _assets_media_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/media.png */ "./assets/media.png");
/* harmony import */ var _assets_contact_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/contact.png */ "./assets/contact.png");
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const TestHeader = _ => {
  const {
    0: scrolled,
    1: setScrolled
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('navBar', {
    scrolled: scrolled
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(_ => {
    const handleScroll = _ => {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return _ => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
    className: "jsx-2389273561" + " " + (classes || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("nav", {
    className: "jsx-2389273561" + " " + 'wrapper stroke',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    className: "jsx-2389273561" + " " + 'singMan',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("g", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("svg", {
    fill: "#f1f1f1",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    "enable-background": "new 0 0 100 100",
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M33.2001953,90.6738281c0.1665039-0.1660156,0.25-0.3671875,0.25-0.5996094  c0-0.2675781-0.0834961-0.4824219-0.25-0.6503906c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2001953,0-0.3833008,0.0839844-0.550293,0.25c-0.1665039,0.1679688-0.25,0.3828125-0.25,0.6503906  c0,0.2324219,0.0834961,0.4335938,0.25,0.5996094c0.1669922,0.1679688,0.3500977,0.25,0.550293,0.25  C32.8334961,90.9238281,33.0332031,90.8417969,33.2001953,90.6738281z M33.3500977,84.7246094  c-0.2333984-0.1679688-0.4501953-0.25-0.6499023-0.25c-0.1669922,0-0.3666992,0.0820313-0.6000977,0.25  c-0.1665039,0.2324219-0.25,0.4492188-0.25,0.6503906c0,0.1992188,0.0834961,0.3828125,0.25,0.5488281  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25c0.2666016,0,0.4833984-0.0820313,0.6499023-0.25  c0.1665039-0.1660156,0.25-0.3496094,0.25-0.5488281C33.6000977,85.1738281,33.5166016,84.9570313,33.3500977,84.7246094z   M33.7001953,80.6738281c0-0.2324219-0.0834961-0.4335938-0.25-0.5996094c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2666016,0-0.4833984,0.0839844-0.6499023,0.25c-0.1669922,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2011719,0.0830078,0.3828125,0.25,0.5507813c0.1665039,0.1660156,0.3833008,0.25,0.6499023,0.25  c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25C33.6166992,81.0566406,33.7001953,80.875,33.7001953,80.6738281z   M33.7998047,75.875c0-0.2011719-0.0830078-0.3847656-0.25-0.5507813c-0.1665039-0.1660156-0.3662109-0.25-0.5996094-0.25  c-0.2666016,0-0.4667969,0.0839844-0.6000977,0.25c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5507813  c0,0.265625,0.0834961,0.4824219,0.25,0.6484375c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25  c0.1665039,0,0.3662109-0.0820313,0.5996094-0.25C33.7167969,76.2910156,33.7998047,76.0742188,33.7998047,75.875z   M33.7001953,70.625c-0.1337891-0.1679688-0.3334961-0.25-0.6000977-0.25c-0.2333984,0-0.4165039,0.0820313-0.550293,0.25  c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5488281c0,0.2675781,0.0834961,0.484375,0.25,0.6503906  c0.1669922,0.1660156,0.3500977,0.25,0.550293,0.25c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25  c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906C33.9501953,70.9414063,33.8666992,70.7578125,33.7001953,70.625z   M59.2998047,48.0234375c-0.0664063,0.234375-0.0498047,0.4511719,0.050293,0.6503906L59.5,48.9746094  c0.2001953,0.2988281,0.4833984,0.4492188,0.8500977,0.4492188L60.7001953,49.375  c0.199707-0.1015625,0.3496094-0.2675781,0.449707-0.5c0.0668945-0.234375,0.050293-0.4511719-0.0498047-0.6503906  l-0.1499023-0.3007813c-0.2666016-0.5-0.6503906-0.6328125-1.1503906-0.4003906  C59.5332031,47.625,59.3666992,47.7910156,59.2998047,48.0234375z M55.2001953,38.4746094  c-0.5,0.2988281-0.6337891,0.6835938-0.4003906,1.1503906l3.3500977,6.5996094c0.1665039,0.3320313,0.4335938,0.5,0.800293,0.5  L59.2998047,46.625c0.5336914-0.2675781,0.6835938-0.6503906,0.4501953-1.1503906L56.3500977,38.875  C56.0834961,38.375,55.7001953,38.2402344,55.2001953,38.4746094z M69.7001953,22.2246094  c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094  c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25  c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906  c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25C69.25,22.4746094,69.4667969,22.390625,69.7001953,22.2246094z   M20.6499023,28.7734375l1.550293,1.75c0.5332031,0.4335938,1.2832031,0.8007813,2.25,1.1015625l-8.5,10.0488281  l-2.1000977-1.4492188L20.6499023,28.7734375z M22.75,24.0234375c0.6333008-0.7324219,1.5-1.1660156,2.6000977-1.2988281  c1.0664063-0.0996094,1.9663086,0.1503906,2.699707,0.75c0.800293,0.6328125,1.25,1.4667969,1.3500977,2.5  s-0.1665039,1.9335938-0.7998047,2.6992188c-0.6665039,0.8339844-1.5,1.3007813-2.5,1.4003906L25.2998047,30.125  c-0.7998047-0.1015625-1.4663086-0.4179688-2-0.9511719c-0.3330078-0.265625-0.6162109-0.6171875-0.8496094-1.0488281  l-0.050293-0.0507813c-0.1665039-0.3671875-0.2832031-0.8164063-0.3500977-1.3496094  C21.9501953,25.6582031,22.1835938,24.7578125,22.75,24.0234375z M44.1499023,11.375  c-0.4331055-0.3339844-0.8334961-0.2832031-1.199707,0.1484375c-0.3334961,0.4335938-0.2836914,0.8339844,0.1499023,1.2011719  l0.3500977,0.3496094c0.4663086,0.4003906,0.8496094,0.9160156,1.1499023,1.5507813  c0.1665039,0.3320313,0.4331055,0.5,0.7998047,0.5l0.3999023-0.1015625c0.2001953-0.0996094,0.3500977-0.265625,0.4501953-0.5  c0.0664063-0.2324219,0.0498047-0.4492188-0.0498047-0.6484375c-0.4667969-0.8007813-0.9667969-1.4667969-1.5-2  C44.5332031,11.6738281,44.3500977,11.5078125,44.1499023,11.375z M34.2001953,9.2246094  c1.4663086-0.9003906,3.1333008-1.3496094,5-1.3496094c2.6333008,0,4.8833008,0.9160156,6.75,2.75  C47.8164063,12.5566406,48.75,14.8066406,48.75,17.375c0,0.765625-0.0834961,1.5488281-0.25,2.3496094  c-0.4335938,1.6992188-1.2832031,3.1992188-2.5498047,4.5c-1.8666992,1.8320313-4.1166992,2.75-6.75,2.75  c-2.6669922,0-4.9169922-0.9335938-6.75-2.8007813c-1.8666992-1.8320313-2.800293-4.0996094-2.800293-6.7988281  c0-2.6015625,0.9335938-4.8515625,2.800293-6.75C33.0166016,10.0234375,33.6000977,9.5566406,34.2001953,9.2246094z   M41.0498047,9.875l-0.699707-0.1015625c-0.2333984,0-0.4335938,0.0839844-0.6000977,0.25  C39.5834961,10.1914063,39.5,10.390625,39.5,10.625c0,0.2324219,0.0834961,0.4492188,0.25,0.6484375  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25h0.25l0.25,0.0507813c0.3999023,0,0.6665039-0.2167969,0.7998047-0.6503906  c0.0668945-0.2324219,0.0336914-0.4492188-0.1000977-0.6503906C41.4501953,10.0742188,41.2832031,9.9414063,41.0498047,9.875z   M83.3500977,11.2246094L86,18.375L55.1499023,33.2734375C55.25,33.4414063,55.3500977,33.640625,55.4501953,33.875  l30.699707,58.1484375h-7.6000977l-19.449707-32l-22.050293,12.4511719  c-0.2666016,0.1660156-0.3999023,0.3828125-0.3999023,0.6503906l-1.25,19l-5.75-0.1015625l0.800293-23.1992188l18.449707-11.25  c0.3999023-0.2324219,0.5166016-0.5839844,0.3500977-1.0507813l-6.1000977-16.0488281c-0.199707-0.4003906-0.3666992-0.734375-0.5-1  L32.75,49.375L21.0498047,38.1738281l3.3500977-4.1992188L31.25,40.875c0.2001953,0.1992188,0.4165039,0.2832031,0.6499023,0.25  c0.2333984,0,0.4501953-0.1015625,0.6499023-0.3007813l9.1000977-11L83.3500977,11.2246094z M74.2001953,19.5742188  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25  c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094  c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25  c0.2001953,0,0.4169922-0.0839844,0.6503906-0.25C74.1166992,19.9902344,74.2001953,19.7734375,74.2001953,19.5742188z   M77.6000977,18.4746094c0.1665039,0,0.3666992-0.0839844,0.6000977-0.25c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.2011719-0.4335938-0.3007813-0.6000977-0.3007813  c-0.2333984,0-0.4335938,0.0996094-0.6000977,0.3007813c-0.1665039,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2675781,0.0834961,0.4824219,0.25,0.6503906C77.1665039,18.390625,77.3666992,18.4746094,77.6000977,18.4746094z   M82.3500977,16.1738281c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906c0-0.2324219-0.0834961-0.4316406-0.25-0.5996094  c-0.1665039-0.1660156-0.3666992-0.25-0.6000977-0.25c-0.2001953,0-0.3833008,0.0839844-0.5498047,0.25  c-0.1669922,0.1679688-0.25,0.3671875-0.25,0.5996094c0,0.2675781,0.0830078,0.484375,0.25,0.6503906  c0.1665039,0.1679688,0.3496094,0.25,0.5498047,0.25C81.9833984,16.4238281,82.1835938,16.3417969,82.3500977,16.1738281z",
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })))), __jsx("input", {
    type: "checkbox",
    id: "menu-toggle",
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "menu-toggle",
    className: "jsx-2389273561" + " " + 'label-toggle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("ul", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Home"))), __jsx("li", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shows",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Shows"))), __jsx("li", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Song List"))), __jsx("li", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/testimonials",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Testimonials"))), __jsx("li", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, "Media"))), __jsx("li", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2389273561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "Contact")))))), __jsx("header", {
    className: "jsx-2389273561" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2389273561",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');nav ul li.jsx-2389273561{display:inline-block;}nav.jsx-2389273561 ul.jsx-2389273561 li.jsx-2389273561 a.jsx-2389273561{display:block;padding-bottom:4px;}nav.jsx-2389273561 ul.jsx-2389273561 li.jsx-2389273561 a.jsx-2389273561,nav.jsx-2389273561 ul.jsx-2389273561 li.jsx-2389273561 a.jsx-2389273561:after,nav.jsx-2389273561 ul.jsx-2389273561 li.jsx-2389273561 a.jsx-2389273561:before{-webkit-transition:all .5s;transition:all .5s;}nav.jsx-2389273561 ul.jsx-2389273561 li.jsx-2389273561 a.jsx-2389273561:hover{color:#f1f1f1;opacity:0.65;}nav.stroke.jsx-2389273561 ul.jsx-2389273561 li.jsx-2389273561 a.jsx-2389273561{position:relative;}nav.stroke.jsx-2389273561 ul.jsx-2389273561 li.jsx-2389273561 a.jsx-2389273561:after,nav.fill.jsx-2389273561 ul.jsx-2389273561 li.jsx-2389273561 a.jsx-2389273561:after{position:absolute;bottom:0;left:0;right:0;margin:auto;width:0%;content:'';color:transparent;background:#f1f1f1;height:1px;}nav.stroke.jsx-2389273561 ul.jsx-2389273561 li.jsx-2389273561 a.jsx-2389273561:hover.jsx-2389273561:after{width:100%;}.navBar.jsx-2389273561{-webkit-transition:background-color 0.2s;transition:background-color 0.2s;background:none;}.navBar.scrolled.jsx-2389273561{background:rgba(44,113,246,0.98);}.singMan.jsx-2389273561{-webkit-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);}h1.jsx-2389273561{font-size:3em;padding:3em 0 1em 0;}.navBar.jsx-2389273561{position:fixed;right:0;left:0;padding:5px 0;z-index:3;}.logo.jsx-2389273561{background-color:#f1f1f1;border-radius:50px;display:inline-block;height:45px;margin:1em 0;width:45px;}.wrapper.jsx-2389273561{margin:0 auto;max-width:1400px;padding:0 5%;}nav.jsx-2389273561 ul.jsx-2389273561{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;list-style-type:none;width:50%;}nav.jsx-2389273561 ul.jsx-2389273561 a.jsx-2389273561{font-size:20px;font-family:'Roboto',sans-serif;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;}li.jsx-2389273561{display:inline-block;}#menu-toggle.jsx-2389273561{display:none;}.label-toggle.jsx-2389273561{display:none;}.wrapper.jsx-2389273561{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:768px){nav.jsx-2389273561 ul.jsx-2389273561 a.jsx-2389273561{color:#53354a;}ul.jsx-2389273561{background-color:#e84545;display:block;height:0;list-style-type:none;opacity:0;text-align:center;-webkit-transition:all 1s ease;transition:all 1s ease;width:100%;visibility:hidden;}li.jsx-2389273561{border-bottom:2px solid #53354a;color:#53354a;display:block;font-size:1.5em;padding:2em 0;}#menu-toggle.jsx-2389273561:checked~ul.jsx-2389273561{opacity:1;height:100vh;visibility:visible;}.label-toggle.jsx-2389273561{background:linear-gradient( to bottom, #e84545 0%, #e84545 20%, transparent 20%, transparent 40%, #e84545 40%, #e84545 60%, transparent 60%, transparent 80%, #e84545 80%, #e84545 100% );cursor:pointer;display:block;float:right;height:35px;margin-top:1em;width:35px;}.wrapper.jsx-2389273561{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9UZXN0SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ia0IsQUFHZ0csQUFHbEUsQUFHUCxBQU1LLEFBR0wsQUFNSSxBQUlBLEFBWVAsQUFJd0IsQUFJQSxBQUlULEFBSVosQUFLQyxBQVFVLEFBU1gsQUFNRCxBQU9FLEFBUU0sQUFJUixBQUlBLEFBSU0sQUFRRCxBQUlXLEFBWU8sQUFRdEIsQUFrQlQsQUFXYSxVQTVCRCxDQXZHbkIsRUErREEsQUFJQSxDQWxHcUIsQUFTTixBQXNDTyxBQXNCSCxBQXlDZixBQXFEQSxDQS9HTSxBQThCeUIsR0FuRW5DLEFBSVcsR0F0QlgsQUE2RkEsRUFyQ1MsQUFrRmdCLEVBM0VKLEFBc0RELEVBeEdwQixBQVVTLEdBa0NPLENBZ0JELENBd0RLLENBN0hwQixBQXNDRSxDQWxCUSxBQTJCVixLQW1FZSxHQTdGRCxBQWtIVixFQWpGUSxBQU1XLEFBVXZCLEVBakVBLEFBeUhvQixDQTVDSixDQWlDVyxNQTdGaEIsQUFpQ1gsTUF3RXNCLENBNUNDLEVBNURWLEVBc0NDLElBdURFLEtBNUZJLEFBVUEsQUF3Q1ksRUFzRFosQ0FsRUwsRUF1RFMsV0FsRnRCLEFBT0YsQUFxQmEsQUFrRVQsRUF4R2lCLENBNEVOLElBaUJjLElBdEQ3QixVQXRDYSxBQTBEYyxXQXpEM0IsNkJBNEZpQixXQUNPLEtBbEJRLEVBakJoQyxXQW9DSSxNQStCaUIsR0E3RUUsWUE4RUgsU0E3RVIsS0E4RU0sS0E3RWxCLE9BOEVrQixZQUNHLGVBQ0osV0FDYixpQkF2REoiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9jb21wb25lbnRzL1Rlc3RIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vYXNzZXRzL2hvbWUucG5nJztcbmltcG9ydCBTaG93cyBmcm9tICcuLi9hc3NldHMvc2hvd3MucG5nJztcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSAnLi4vYXNzZXRzL3Rlc3RpbW9uaWFscy5wbmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4uL2Fzc2V0cy9tZWRpYS5wbmcnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vYXNzZXRzL2NvbnRhY3QucG5nJztcblxuY29uc3QgVGVzdEhlYWRlciA9IF8gPT4ge1xuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCduYXZCYXInLCB7XG4gICAgc2Nyb2xsZWQ6IHNjcm9sbGVkLFxuICB9KTtcbiAgdXNlRWZmZWN0KF8gPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IF8gPT4ge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEpIHtcbiAgICAgICAgc2V0U2Nyb2xsZWQodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTY3JvbGxlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gXyA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPSd3cmFwcGVyIHN0cm9rZSc+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgd2lkdGg9JzYwJ1xuICAgICAgICAgICAgaGVpZ2h0PSc2MCdcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA2MCA2MCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ01hbidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgLy8gdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTAgNTApIHNjYWxlKC0wLjY5IDAuNjkpIHJvdGF0ZSgwKSB0cmFuc2xhdGUoLTUwIC01MCknXG4gICAgICAgICAgICAvLyBzdHlsZT0nZmlsbDojRkZGRkZGJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgZmlsbD0nI2YxZjFmMSdcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgdmVyc2lvbj0nMS4xJ1xuICAgICAgICAgICAgICAgIHg9JzBweCdcbiAgICAgICAgICAgICAgICB5PScwcHgnXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDEwMCAxMDAnXG4gICAgICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgMTAwIDEwMCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICBkPSdNMzMuMjAwMTk1Myw5MC42NzM4MjgxYzAuMTY2NTAzOS0wLjE2NjAxNTYsMC4yNS0wLjM2NzE4NzUsMC4yNS0wLjU5OTYwOTQgIGMwLTAuMjY3NTc4MS0wLjA4MzQ5NjEtMC40ODI0MjE5LTAuMjUtMC42NTAzOTA2Yy0wLjE2Njk5MjItMC4xNjYwMTU2LTAuMzY2Njk5Mi0wLjI1LTAuNjAwMDk3Ny0wLjI1ICBjLTAuMjAwMTk1MywwLTAuMzgzMzAwOCwwLjA4Mzk4NDQtMC41NTAyOTMsMC4yNWMtMC4xNjY1MDM5LDAuMTY3OTY4OC0wLjI1LDAuMzgyODEyNS0wLjI1LDAuNjUwMzkwNiAgYzAsMC4yMzI0MjE5LDAuMDgzNDk2MSwwLjQzMzU5MzgsMC4yNSwwLjU5OTYwOTRjMC4xNjY5OTIyLDAuMTY3OTY4OCwwLjM1MDA5NzcsMC4yNSwwLjU1MDI5MywwLjI1ICBDMzIuODMzNDk2MSw5MC45MjM4MjgxLDMzLjAzMzIwMzEsOTAuODQxNzk2OSwzMy4yMDAxOTUzLDkwLjY3MzgyODF6IE0zMy4zNTAwOTc3LDg0LjcyNDYwOTQgIGMtMC4yMzMzOTg0LTAuMTY3OTY4OC0wLjQ1MDE5NTMtMC4yNS0wLjY0OTkwMjMtMC4yNWMtMC4xNjY5OTIyLDAtMC4zNjY2OTkyLDAuMDgyMDMxMy0wLjYwMDA5NzcsMC4yNSAgYy0wLjE2NjUwMzksMC4yMzI0MjE5LTAuMjUsMC40NDkyMTg4LTAuMjUsMC42NTAzOTA2YzAsMC4xOTkyMTg4LDAuMDgzNDk2MSwwLjM4MjgxMjUsMC4yNSwwLjU0ODgyODEgIGMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzY2Njk5MiwwLjI1LDAuNjAwMDk3NywwLjI1YzAuMjY2NjAxNiwwLDAuNDgzMzk4NC0wLjA4MjAzMTMsMC42NDk5MDIzLTAuMjUgIGMwLjE2NjUwMzktMC4xNjYwMTU2LDAuMjUtMC4zNDk2MDk0LDAuMjUtMC41NDg4MjgxQzMzLjYwMDA5NzcsODUuMTczODI4MSwzMy41MTY2MDE2LDg0Ljk1NzAzMTMsMzMuMzUwMDk3Nyw4NC43MjQ2MDk0eiAgIE0zMy43MDAxOTUzLDgwLjY3MzgyODFjMC0wLjIzMjQyMTktMC4wODM0OTYxLTAuNDMzNTkzOC0wLjI1LTAuNTk5NjA5NGMtMC4xNjY5OTIyLTAuMTY2MDE1Ni0wLjM2NjY5OTItMC4yNS0wLjYwMDA5NzctMC4yNSAgYy0wLjI2NjYwMTYsMC0wLjQ4MzM5ODQsMC4wODM5ODQ0LTAuNjQ5OTAyMywwLjI1Yy0wLjE2Njk5MjIsMC4xNjYwMTU2LTAuMjUsMC4zNjcxODc1LTAuMjUsMC41OTk2MDk0ICBjMCwwLjIwMTE3MTksMC4wODMwMDc4LDAuMzgyODEyNSwwLjI1LDAuNTUwNzgxM2MwLjE2NjUwMzksMC4xNjYwMTU2LDAuMzgzMzAwOCwwLjI1LDAuNjQ5OTAyMywwLjI1ICBjMC4yMzMzOTg0LDAsMC40MzMxMDU1LTAuMDgzOTg0NCwwLjYwMDA5NzctMC4yNUMzMy42MTY2OTkyLDgxLjA1NjY0MDYsMzMuNzAwMTk1Myw4MC44NzUsMzMuNzAwMTk1Myw4MC42NzM4MjgxeiAgIE0zMy43OTk4MDQ3LDc1Ljg3NWMwLTAuMjAxMTcxOS0wLjA4MzAwNzgtMC4zODQ3NjU2LTAuMjUtMC41NTA3ODEzYy0wLjE2NjUwMzktMC4xNjYwMTU2LTAuMzY2MjEwOS0wLjI1LTAuNTk5NjA5NC0wLjI1ICBjLTAuMjY2NjAxNiwwLTAuNDY2Nzk2OSwwLjA4Mzk4NDQtMC42MDAwOTc3LDAuMjVjLTAuMTY2NTAzOSwwLjEzMjgxMjUtMC4yNSwwLjMxNjQwNjMtMC4yNSwwLjU1MDc4MTMgIGMwLDAuMjY1NjI1LDAuMDgzNDk2MSwwLjQ4MjQyMTksMC4yNSwwLjY0ODQzNzVjMC4xNjY1MDM5LDAuMTY3OTY4OCwwLjM2NjY5OTIsMC4yNSwwLjYwMDA5NzcsMC4yNSAgYzAuMTY2NTAzOSwwLDAuMzY2MjEwOS0wLjA4MjAzMTMsMC41OTk2MDk0LTAuMjVDMzMuNzE2Nzk2OSw3Ni4yOTEwMTU2LDMzLjc5OTgwNDcsNzYuMDc0MjE4OCwzMy43OTk4MDQ3LDc1Ljg3NXogICBNMzMuNzAwMTk1Myw3MC42MjVjLTAuMTMzNzg5MS0wLjE2Nzk2ODgtMC4zMzM0OTYxLTAuMjUtMC42MDAwOTc3LTAuMjVjLTAuMjMzMzk4NCwwLTAuNDE2NTAzOSwwLjA4MjAzMTMtMC41NTAyOTMsMC4yNSAgYy0wLjE2NjUwMzksMC4xMzI4MTI1LTAuMjUsMC4zMTY0MDYzLTAuMjUsMC41NDg4MjgxYzAsMC4yNjc1NzgxLDAuMDgzNDk2MSwwLjQ4NDM3NSwwLjI1LDAuNjUwMzkwNiAgYzAuMTY2OTkyMiwwLjE2NjAxNTYsMC4zNTAwOTc3LDAuMjUsMC41NTAyOTMsMC4yNWMwLjIzMzM5ODQsMCwwLjQzMzEwNTUtMC4wODM5ODQ0LDAuNjAwMDk3Ny0wLjI1ICBjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzgyODEyNSwwLjI1LTAuNjUwMzkwNkMzMy45NTAxOTUzLDcwLjk0MTQwNjMsMzMuODY2Njk5Miw3MC43NTc4MTI1LDMzLjcwMDE5NTMsNzAuNjI1eiAgIE01OS4yOTk4MDQ3LDQ4LjAyMzQzNzVjLTAuMDY2NDA2MywwLjIzNDM3NS0wLjA0OTgwNDcsMC40NTExNzE5LDAuMDUwMjkzLDAuNjUwMzkwNkw1OS41LDQ4Ljk3NDYwOTQgIGMwLjIwMDE5NTMsMC4yOTg4MjgxLDAuNDgzMzk4NCwwLjQ0OTIxODgsMC44NTAwOTc3LDAuNDQ5MjE4OEw2MC43MDAxOTUzLDQ5LjM3NSAgYzAuMTk5NzA3LTAuMTAxNTYyNSwwLjM0OTYwOTQtMC4yNjc1NzgxLDAuNDQ5NzA3LTAuNWMwLjA2Njg5NDUtMC4yMzQzNzUsMC4wNTAyOTMtMC40NTExNzE5LTAuMDQ5ODA0Ny0wLjY1MDM5MDYgIGwtMC4xNDk5MDIzLTAuMzAwNzgxM2MtMC4yNjY2MDE2LTAuNS0wLjY1MDM5MDYtMC42MzI4MTI1LTEuMTUwMzkwNi0wLjQwMDM5MDYgIEM1OS41MzMyMDMxLDQ3LjYyNSw1OS4zNjY2OTkyLDQ3Ljc5MTAxNTYsNTkuMjk5ODA0Nyw0OC4wMjM0Mzc1eiBNNTUuMjAwMTk1MywzOC40NzQ2MDk0ICBjLTAuNSwwLjI5ODgyODEtMC42MzM3ODkxLDAuNjgzNTkzOC0wLjQwMDM5MDYsMS4xNTAzOTA2bDMuMzUwMDk3Nyw2LjU5OTYwOTRjMC4xNjY1MDM5LDAuMzMyMDMxMywwLjQzMzU5MzgsMC41LDAuODAwMjkzLDAuNSAgTDU5LjI5OTgwNDcsNDYuNjI1YzAuNTMzNjkxNC0wLjI2NzU3ODEsMC42ODM1OTM4LTAuNjUwMzkwNiwwLjQ1MDE5NTMtMS4xNTAzOTA2TDU2LjM1MDA5NzcsMzguODc1ICBDNTYuMDgzNDk2MSwzOC4zNzUsNTUuNzAwMTk1MywzOC4yNDAyMzQ0LDU1LjIwMDE5NTMsMzguNDc0NjA5NHogTTY5LjcwMDE5NTMsMjIuMjI0NjA5NCAgYzAuMTY2NTAzOS0wLjIzNDM3NSwwLjI1LTAuNDUxMTcxOSwwLjI1LTAuNjUwMzkwNmMwLTAuMTY2MDE1Ni0wLjA4MzQ5NjEtMC4zNjcxODc1LTAuMjUtMC41OTk2MDk0ICBjLTAuMjMzMzk4NC0wLjE2Nzk2ODgtMC40NTAxOTUzLTAuMjUtMC42NTAzOTA2LTAuMjVjLTAuMTY2NTAzOSwwLTAuMzY2MjEwOSwwLjA4MjAzMTMtMC41OTk2MDk0LDAuMjUgIGMtMC4xNjY5OTIyLDAuMjMyNDIxOS0wLjI1LDAuNDMzNTkzOC0wLjI1LDAuNTk5NjA5NGMwLDAuMTk5MjE4OCwwLjA4MzAwNzgsMC40MTYwMTU2LDAuMjUsMC42NTAzOTA2ICBjMC4yMzMzOTg0LDAuMTY2MDE1NiwwLjQzMzEwNTUsMC4yNSwwLjU5OTYwOTQsMC4yNUM2OS4yNSwyMi40NzQ2MDk0LDY5LjQ2Njc5NjksMjIuMzkwNjI1LDY5LjcwMDE5NTMsMjIuMjI0NjA5NHogICBNMjAuNjQ5OTAyMywyOC43NzM0Mzc1bDEuNTUwMjkzLDEuNzVjMC41MzMyMDMxLDAuNDMzNTkzOCwxLjI4MzIwMzEsMC44MDA3ODEzLDIuMjUsMS4xMDE1NjI1bC04LjUsMTAuMDQ4ODI4MSAgbC0yLjEwMDA5NzctMS40NDkyMTg4TDIwLjY0OTkwMjMsMjguNzczNDM3NXogTTIyLjc1LDI0LjAyMzQzNzVjMC42MzMzMDA4LTAuNzMyNDIxOSwxLjUtMS4xNjYwMTU2LDIuNjAwMDk3Ny0xLjI5ODgyODEgIGMxLjA2NjQwNjMtMC4wOTk2MDk0LDEuOTY2MzA4NiwwLjE1MDM5MDYsMi42OTk3MDcsMC43NWMwLjgwMDI5MywwLjYzMjgxMjUsMS4yNSwxLjQ2Njc5NjksMS4zNTAwOTc3LDIuNSAgcy0wLjE2NjUwMzksMS45MzM1OTM4LTAuNzk5ODA0NywyLjY5OTIxODhjLTAuNjY2NTAzOSwwLjgzMzk4NDQtMS41LDEuMzAwNzgxMy0yLjUsMS40MDAzOTA2TDI1LjI5OTgwNDcsMzAuMTI1ICBjLTAuNzk5ODA0Ny0wLjEwMTU2MjUtMS40NjYzMDg2LTAuNDE3OTY4OC0yLTAuOTUxMTcxOWMtMC4zMzMwMDc4LTAuMjY1NjI1LTAuNjE2MjEwOS0wLjYxNzE4NzUtMC44NDk2MDk0LTEuMDQ4ODI4MSAgbC0wLjA1MDI5My0wLjA1MDc4MTNjLTAuMTY2NTAzOS0wLjM2NzE4NzUtMC4yODMyMDMxLTAuODE2NDA2My0wLjM1MDA5NzctMS4zNDk2MDk0ICBDMjEuOTUwMTk1MywyNS42NTgyMDMxLDIyLjE4MzU5MzgsMjQuNzU3ODEyNSwyMi43NSwyNC4wMjM0Mzc1eiBNNDQuMTQ5OTAyMywxMS4zNzUgIGMtMC40MzMxMDU1LTAuMzMzOTg0NC0wLjgzMzQ5NjEtMC4yODMyMDMxLTEuMTk5NzA3LDAuMTQ4NDM3NWMtMC4zMzM0OTYxLDAuNDMzNTkzOC0wLjI4MzY5MTQsMC44MzM5ODQ0LDAuMTQ5OTAyMywxLjIwMTE3MTkgIGwwLjM1MDA5NzcsMC4zNDk2MDk0YzAuNDY2MzA4NiwwLjQwMDM5MDYsMC44NDk2MDk0LDAuOTE2MDE1NiwxLjE0OTkwMjMsMS41NTA3ODEzICBjMC4xNjY1MDM5LDAuMzMyMDMxMywwLjQzMzEwNTUsMC41LDAuNzk5ODA0NywwLjVsMC4zOTk5MDIzLTAuMTAxNTYyNWMwLjIwMDE5NTMtMC4wOTk2MDk0LDAuMzUwMDk3Ny0wLjI2NTYyNSwwLjQ1MDE5NTMtMC41ICBjMC4wNjY0MDYzLTAuMjMyNDIxOSwwLjA0OTgwNDctMC40NDkyMTg4LTAuMDQ5ODA0Ny0wLjY0ODQzNzVjLTAuNDY2Nzk2OS0wLjgwMDc4MTMtMC45NjY3OTY5LTEuNDY2Nzk2OS0xLjUtMiAgQzQ0LjUzMzIwMzEsMTEuNjczODI4MSw0NC4zNTAwOTc3LDExLjUwNzgxMjUsNDQuMTQ5OTAyMywxMS4zNzV6IE0zNC4yMDAxOTUzLDkuMjI0NjA5NCAgYzEuNDY2MzA4Ni0wLjkwMDM5MDYsMy4xMzMzMDA4LTEuMzQ5NjA5NCw1LTEuMzQ5NjA5NGMyLjYzMzMwMDgsMCw0Ljg4MzMwMDgsMC45MTYwMTU2LDYuNzUsMi43NSAgQzQ3LjgxNjQwNjMsMTIuNTU2NjQwNiw0OC43NSwxNC44MDY2NDA2LDQ4Ljc1LDE3LjM3NWMwLDAuNzY1NjI1LTAuMDgzNDk2MSwxLjU0ODgyODEtMC4yNSwyLjM0OTYwOTQgIGMtMC40MzM1OTM4LDEuNjk5MjE4OC0xLjI4MzIwMzEsMy4xOTkyMTg4LTIuNTQ5ODA0Nyw0LjVjLTEuODY2Njk5MiwxLjgzMjAzMTMtNC4xMTY2OTkyLDIuNzUtNi43NSwyLjc1ICBjLTIuNjY2OTkyMiwwLTQuOTE2OTkyMi0wLjkzMzU5MzgtNi43NS0yLjgwMDc4MTNjLTEuODY2Njk5Mi0xLjgzMjAzMTMtMi44MDAyOTMtNC4wOTk2MDk0LTIuODAwMjkzLTYuNzk4ODI4MSAgYzAtMi42MDE1NjI1LDAuOTMzNTkzOC00Ljg1MTU2MjUsMi44MDAyOTMtNi43NUMzMy4wMTY2MDE2LDEwLjAyMzQzNzUsMzMuNjAwMDk3Nyw5LjU1NjY0MDYsMzQuMjAwMTk1Myw5LjIyNDYwOTR6ICAgTTQxLjA0OTgwNDcsOS44NzVsLTAuNjk5NzA3LTAuMTAxNTYyNWMtMC4yMzMzOTg0LDAtMC40MzM1OTM4LDAuMDgzOTg0NC0wLjYwMDA5NzcsMC4yNSAgQzM5LjU4MzQ5NjEsMTAuMTkxNDA2MywzOS41LDEwLjM5MDYyNSwzOS41LDEwLjYyNWMwLDAuMjMyNDIxOSwwLjA4MzQ5NjEsMC40NDkyMTg4LDAuMjUsMC42NDg0Mzc1ICBjMC4xNjY1MDM5LDAuMTY3OTY4OCwwLjM2NjY5OTIsMC4yNSwwLjYwMDA5NzcsMC4yNWgwLjI1bDAuMjUsMC4wNTA3ODEzYzAuMzk5OTAyMywwLDAuNjY2NTAzOS0wLjIxNjc5NjksMC43OTk4MDQ3LTAuNjUwMzkwNiAgYzAuMDY2ODk0NS0wLjIzMjQyMTksMC4wMzM2OTE0LTAuNDQ5MjE4OC0wLjEwMDA5NzctMC42NTAzOTA2QzQxLjQ1MDE5NTMsMTAuMDc0MjE4OCw0MS4yODMyMDMxLDkuOTQxNDA2Myw0MS4wNDk4MDQ3LDkuODc1eiAgIE04My4zNTAwOTc3LDExLjIyNDYwOTRMODYsMTguMzc1TDU1LjE0OTkwMjMsMzMuMjczNDM3NUM1NS4yNSwzMy40NDE0MDYzLDU1LjM1MDA5NzcsMzMuNjQwNjI1LDU1LjQ1MDE5NTMsMzMuODc1ICBsMzAuNjk5NzA3LDU4LjE0ODQzNzVoLTcuNjAwMDk3N2wtMTkuNDQ5NzA3LTMybC0yMi4wNTAyOTMsMTIuNDUxMTcxOSAgYy0wLjI2NjYwMTYsMC4xNjYwMTU2LTAuMzk5OTAyMywwLjM4MjgxMjUtMC4zOTk5MDIzLDAuNjUwMzkwNmwtMS4yNSwxOWwtNS43NS0wLjEwMTU2MjVsMC44MDAyOTMtMjMuMTk5MjE4OGwxOC40NDk3MDctMTEuMjUgIGMwLjM5OTkwMjMtMC4yMzI0MjE5LDAuNTE2NjAxNi0wLjU4Mzk4NDQsMC4zNTAwOTc3LTEuMDUwNzgxM2wtNi4xMDAwOTc3LTE2LjA0ODgyODFjLTAuMTk5NzA3LTAuNDAwMzkwNi0wLjM2NjY5OTItMC43MzQzNzUtMC41LTEgIEwzMi43NSw0OS4zNzVMMjEuMDQ5ODA0NywzOC4xNzM4MjgxbDMuMzUwMDk3Ny00LjE5OTIxODhMMzEuMjUsNDAuODc1YzAuMjAwMTk1MywwLjE5OTIxODgsMC40MTY1MDM5LDAuMjgzMjAzMSwwLjY0OTkwMjMsMC4yNSAgYzAuMjMzMzk4NCwwLDAuNDUwMTk1My0wLjEwMTU2MjUsMC42NDk5MDIzLTAuMzAwNzgxM2w5LjEwMDA5NzctMTFMODMuMzUwMDk3NywxMS4yMjQ2MDk0eiBNNzQuMjAwMTk1MywxOS41NzQyMTg4ICBjMC0wLjE2NjAxNTYtMC4wODM0OTYxLTAuMzY3MTg3NS0wLjI1LTAuNTk5NjA5NGMtMC4yMzMzOTg0LTAuMTY3OTY4OC0wLjQ1MDE5NTMtMC4yNS0wLjY1MDM5MDYtMC4yNSAgYy0wLjE2NjUwMzksMC0wLjM2NjIxMDksMC4wODIwMzEzLTAuNTk5NjA5NCwwLjI1Yy0wLjE2Njk5MjIsMC4yMzI0MjE5LTAuMjUsMC40MzM1OTM4LTAuMjUsMC41OTk2MDk0ICBjMCwwLjE5OTIxODgsMC4wODMwMDc4LDAuNDE2MDE1NiwwLjI1LDAuNjUwMzkwNmMwLjIzMzM5ODQsMC4xNjYwMTU2LDAuNDMzMTA1NSwwLjI1LDAuNTk5NjA5NCwwLjI1ICBjMC4yMDAxOTUzLDAsMC40MTY5OTIyLTAuMDgzOTg0NCwwLjY1MDM5MDYtMC4yNUM3NC4xMTY2OTkyLDE5Ljk5MDIzNDQsNzQuMjAwMTk1MywxOS43NzM0Mzc1LDc0LjIwMDE5NTMsMTkuNTc0MjE4OHogICBNNzcuNjAwMDk3NywxOC40NzQ2MDk0YzAuMTY2NTAzOSwwLDAuMzY2Njk5Mi0wLjA4Mzk4NDQsMC42MDAwOTc3LTAuMjVjMC4xNjY1MDM5LTAuMjM0Mzc1LDAuMjUtMC40NTExNzE5LDAuMjUtMC42NTAzOTA2ICBjMC0wLjE2NjAxNTYtMC4wODM0OTYxLTAuMzY3MTg3NS0wLjI1LTAuNTk5NjA5NGMtMC4yMzMzOTg0LTAuMjAxMTcxOS0wLjQzMzU5MzgtMC4zMDA3ODEzLTAuNjAwMDk3Ny0wLjMwMDc4MTMgIGMtMC4yMzMzOTg0LDAtMC40MzM1OTM4LDAuMDk5NjA5NC0wLjYwMDA5NzcsMC4zMDA3ODEzYy0wLjE2NjUwMzksMC4xNjYwMTU2LTAuMjUsMC4zNjcxODc1LTAuMjUsMC41OTk2MDk0ICBjMCwwLjI2NzU3ODEsMC4wODM0OTYxLDAuNDgyNDIxOSwwLjI1LDAuNjUwMzkwNkM3Ny4xNjY1MDM5LDE4LjM5MDYyNSw3Ny4zNjY2OTkyLDE4LjQ3NDYwOTQsNzcuNjAwMDk3NywxOC40NzQ2MDk0eiAgIE04Mi4zNTAwOTc3LDE2LjE3MzgyODFjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzgyODEyNSwwLjI1LTAuNjUwMzkwNmMwLTAuMjMyNDIxOS0wLjA4MzQ5NjEtMC40MzE2NDA2LTAuMjUtMC41OTk2MDk0ICBjLTAuMTY2NTAzOS0wLjE2NjAxNTYtMC4zNjY2OTkyLTAuMjUtMC42MDAwOTc3LTAuMjVjLTAuMjAwMTk1MywwLTAuMzgzMzAwOCwwLjA4Mzk4NDQtMC41NDk4MDQ3LDAuMjUgIGMtMC4xNjY5OTIyLDAuMTY3OTY4OC0wLjI1LDAuMzY3MTg3NS0wLjI1LDAuNTk5NjA5NGMwLDAuMjY3NTc4MSwwLjA4MzAwNzgsMC40ODQzNzUsMC4yNSwwLjY1MDM5MDYgIGMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzQ5NjA5NCwwLjI1LDAuNTQ5ODA0NywwLjI1QzgxLjk4MzM5ODQsMTYuNDIzODI4MSw4Mi4xODM1OTM4LDE2LjM0MTc5NjksODIuMzUwMDk3NywxNi4xNzM4MjgxeidcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGlkPSdtZW51LXRvZ2dsZScgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbWVudS10b2dnbGUnIGNsYXNzTmFtZT0nbGFiZWwtdG9nZ2xlJz48L2xhYmVsPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e0hvbWV9IGFsdD0nSG9tZSBuYXZpZ2F0aW9uIGJ1dHRvbicgLz4gKi99XG4gICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvc2hvd3MnPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtTaG93c30gYWx0PSdTaG93cyBuYXZpZ2F0aW9uIGJ1dHRvbicgLz4gKi99XG4gICAgICAgICAgICAgICAgICBTaG93c1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xpc3QnPlxuICAgICAgICAgICAgICAgIDxhPlNvbmcgTGlzdDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Rlc3RpbW9uaWFscyc+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7LyogPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e1Rlc3RpbW9uaWFsc31cbiAgICAgICAgICAgICAgICAgICAgYWx0PSdUZXN0aW1vbmlhbHMgbmF2aWdhdGlvbiBidXR0b24nXG4gICAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgIFRlc3RpbW9uaWFsc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL21lZGlhJz5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17TWVkaWF9IGFsdD0nTWVkaWEgbmF2aWdhdGlvbiBidXR0b24nIC8+ICovfVxuICAgICAgICAgICAgICAgICAgTWVkaWFcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0Jz5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17Q29udGFjdH0gYWx0PSdDb250YWN0IG5hdmlnYXRpb24gYnV0dG9uJyAvPiAqL31cbiAgICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSd3cmFwcGVyJz48L2hlYWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgIFxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvfFJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgIG5hdiB1bCBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIG5hdiB1bCBsaSBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgICBuYXYgdWwgbGkgYSxcbiAgICAgIG5hdiB1bCBsaSBhOmFmdGVyLFxuICAgICAgbmF2IHVsIGxpIGE6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgIH1cbiAgICAgIG5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgICB9XG5cbiAgICAgICAgICAvKiBzdHJva2UgKi9cbiAgICAgIG5hdi5zdHJva2UgdWwgbGkgYSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIG5hdi5zdHJva2UgdWwgbGkgYTphZnRlcixcbiAgICAgIG5hdi5maWxsIHVsIGxpIGE6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIH1cbiAgICAgIG5hdi5zdHJva2UgdWwgbGkgYTpob3ZlcjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgLm5hdkJhciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdkJhci5zY3JvbGxlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0NCwxMTMsMjQ2LDAuOTgpO1xuICAgICAgICB9XG5cbiAgICAgIC5zaW5nTWFuIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICB9XG4gICAgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBwYWRkaW5nOiAzZW0gMCAxZW0gMDtcbiAgICAgIH1cblxuICAgICAgLm5hdkJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgfVxuXG4gICAgICAubG9nbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBtYXJnaW46IDFlbSAwO1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICB9XG5cbiAgICAgIG5hdiB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuXG4gICAgICBuYXYgdWwgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAgfVxuICAgICAgICAgIFxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICNtZW51LXRvZ2dsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5sYWJlbC10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgXG4gICAgICAgICAgbmF2IHVsIGEge1xuICAgICAgICAgICAgY29sb3I6ICM1MzM1NGE7IFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlODQ1NDU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTMzNTRhO1xuICAgICAgICAgICAgY29sb3I6ICM1MzM1NGE7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAyZW0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjbWVudS10b2dnbGU6Y2hlY2tlZCB+IHVsIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGFiZWwtdG9nZ2xlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdG8gYm90dG9tLFxuICAgICAgICAgICAgICAjZTg0NTQ1IDAlLFxuICAgICAgICAgICAgICAjZTg0NTQ1IDIwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA0MCUsXG4gICAgICAgICAgICAgICNlODQ1NDUgNDAlLFxuICAgICAgICAgICAgICAjZTg0NTQ1IDYwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNjAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA4MCUsXG4gICAgICAgICAgICAgICNlODQ1NDUgODAlLFxuICAgICAgICAgICAgICAjZTg0NTQ1IDEwMCVcbiAgICAgICAgICAgICk7IFxuICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TestHeader);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextType = _router.RouterContext;
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.historyId !== this.historyId) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // we use a historyId to enable ignoring invalid popstates

    this.historyId = Math.random();

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options: _Object$assign({}, options, {
          historyId: this.historyId
        })
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/contact.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const contentful = __webpack_require__(/*! contentful */ "contentful");


class About extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-3533908435" + " " + 'contactNeon',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Get in touch!"), __jsx("div", {
      className: "jsx-3533908435" + " " + 'flex',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3533908435" + " " + 'flexOne',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Let GOOD ENOUGH LIVE KARAOKE make your next team-building or corporate event, wedding or birthday party a creative and invigorating experience with live band karaoke. Please let us know if you have any questions or would like a quote.", ' ', __jsx("a", {
      href: "mailto:sing@goodenoughlivekaraoke.com?Subject=Hello%20",
      target: "_top",
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "sing@goodenoughlivekaraoke.com", ' '))), __jsx("div", {
      className: "jsx-3533908435" + " " + 'flexTwo',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("section", {
      id: "contact",
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("form", {
      action: "http://www.focuspocus.io/magic/jenn.cowan@gmail.com",
      method: "post",
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("fieldset", {
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      name: "name",
      autocomplete: "off",
      required: true,
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx("label", {
      for: "name",
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Name"))), __jsx("fieldset", {
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      name: "email",
      autocomplete: "off",
      required: true,
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("label", {
      for: "email",
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "E-mail"))), __jsx("fieldset", {
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("textarea", {
      name: "message",
      id: "",
      cols: "30",
      rows: "3",
      required: true,
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), __jsx("label", {
      for: "message",
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Message"))), __jsx("button", {
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Send"), __jsx("span", {
      className: "jsx-3533908435",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Sent")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3533908435",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');.flex.jsx-3533908435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;max-width:1400px;margin:0 auto;}p.jsx-3533908435{color:#f1f1f1;font-family:'Roboto',sans-serif;font-size:26px;line-height:50px;}a.jsx-3533908435{color:#f1f1f1;-webkit-transition:0.4s all;transition:0.4s all;}a.jsx-3533908435:hover{opacity:0.65;}.contactNeon.jsx-3533908435{margin-top:25vh;}.flexOne.jsx-3533908435,.flexTwo.jsx-3533908435{width:40%;margin-top:50px;}.flexOne.jsx-3533908435{margin-left:10%;}.flexTwo.jsx-3533908435{margin-right:10%;margin-top:-1%;}h1.jsx-3533908435{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:'Roboto',sans-serif;font-weight:100;text-align:center;color:#f1f1f1;}#contact.jsx-3533908435{padding:0 20px;border-radius:2px;margin-bottom:50px;}@media only screen and (max-width:900px){h1.jsx-3533908435{font-size:12vw;}#contact.jsx-3533908435{width:70%;}}form.jsx-3533908435{padding:5%;display:grid;grid-template-column:1fr;grid-gap:1em;height:100%;width:100%;border-radius:5px;}fieldset.jsx-3533908435{height:100%;width:94.5%;position:relative;border:none;overflow:hidden;}input.jsx-3533908435{outline:none;padding:20px 5px 10px 5px;height:100%;width:100%;border:none;font:400 1em/1.2 'Roboto',sans-serif;color:#f1f1f1;background:none;}textarea.jsx-3533908435{outline:none;margin:20px 5px 10px 5px;height:76%;width:100%;border:none;resize:none;font:400 1em/1.2 'Roboto',sans-serif;color:#f1f1f1;background:none;}label.jsx-3533908435{position:absolute;font-family:'Roboto',sans-serif;color:#f1f1f1;height:100%;width:100%;bottom:0;left:0;pointer-events:none;font-size:16px;border-bottom:1px solid #f1f1f1;}label.jsx-3533908435::after{position:absolute;content:'';height:100%;width:100%;bottom:0;left:0;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);border-bottom:3px solid #f1f1f1;-webkit-transition:-webkit-transform 0.3s ease;-webkit-transition:transform 0.3s ease;transition:transform 0.3s ease;}label.jsx-3533908435>span.jsx-3533908435{position:absolute;bottom:5px;left:0;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;}input.jsx-3533908435:focus+label.jsx-3533908435{border:none;}input.jsx-3533908435:focus+label.jsx-3533908435 span.jsx-3533908435,input.jsx-3533908435:valid+label.jsx-3533908435 span.jsx-3533908435{-webkit-transform:translateY(-200%);-ms-transform:translateY(-200%);transform:translateY(-200%);font-size:0.8em;font-weight:700;color:#f1f1f1;}input.jsx-3533908435:focus+label.jsx-3533908435::after{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);color:#f1f1f1;}textarea.jsx-3533908435:focus+label.jsx-3533908435{border:none;color:#f1f1f1;}textarea.jsx-3533908435:focus+label.jsx-3533908435 span.jsx-3533908435,textarea.jsx-3533908435:valid+label.jsx-3533908435 span.jsx-3533908435{-webkit-transform:translateY(-520%);-ms-transform:translateY(-520%);transform:translateY(-520%);font-size:0.8em;font-weight:700;color:#f1f1f1;margin-bottom:20px;}textarea.jsx-3533908435:focus+label.jsx-3533908435::after{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);}button.jsx-3533908435,button.jsx-3533908435:hover{-webkit-transition:0.5s;transition:0.5s;}button.jsx-3533908435{margin-top:25px;padding:20px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;border-radius:5px;font-family:'Roboto',sans-serif;text-transform:uppercase;color:rgba(44,113,246,0.98);opacity:1;background:#f1f1f1;}button.jsx-3533908435:hover{opacity:0.65;}button.jsx-3533908435 span.jsx-3533908435:nth-child(2){display:none;}button.jsx-3533908435:focus.jsx-3533908435:nth-child(2){display:inline;}button.jsx-3533908435:focus.jsx-3533908435:nth-child(1){display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvY29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRW9CLEFBRXNHLEFBRzVFLEFBT0MsQUFPQSxBQUtELEFBSUcsQUFLTixBQUtNLEFBSUMsQUFLRSxBQWFKLEFBTUUsQUFHTCxBQUtELEFBVUMsQUFRQyxBQVdBLEFBWUssQUFZQSxBQVdBLEFBT04sQUFJZ0IsQUFNSCxBQUliLEFBS2dCLEFBT0gsQUFLVCxBQUdBLEFBV0gsQUFHQSxBQUdFLEFBR0YsVUFyS0csQUFvQ2hCLENBS2EsQ0FVRCxBQTZEZCxBQWNnQixDQXZJaEIsQUFvRTRCLEFBV0QsQUF1RjNCLEFBR0EsQUFNQSxDQTNMbUMsQUFPYixDQXlDRixBQU1sQixBQWtJRixDQXhLQSxBQVVBLEFBNkllLENBeklFLENBeUVrQixBQVl0QixBQVdBLENBM0ZPLEtBNEJPLEFBVVAsRUFuRHBCLEFBOEhBLEdBaENjLEFBV0wsQUF5Q1ksR0F6SXJCLENBa0JxQixHQStFTSxDQTVGTixDQXdEUixDQVhDLENBbUZkLENBL0NhLENBM0NDLElBekVHLEdBK0RGLEFBNkJGLENBV0csQ0F0QkgsQ0FoQ2IsQUFvRVcsRUEzQ08sTUFtQkosQ0E1RkssQUFxSFYsQ0EvR1QsQUF5RGMsQUFrQkEsRUFzQkEsSUFlZ0IsRUE1QzlCLEVBbUJjLEVBdEdELEFBeUVBLEFBa0IyQixFQXNCM0IsRUF2R2IsTUE2RndDLENBdEdyQixBQXlFQyxFQXdDVCxBQW9DSyxBQWdCaEIsT0E5QkEsRUFyQlMsQUE2QlMsQUFlQSxLQVJsQixDQXJKZ0IsQ0F5RWhCLEFBeUNzQixRQXhCTixDQXFERSxBQWVBLElBN0psQixLQXFHZ0IsQ0F3RUksQ0EzREgsRUF4QkMsR0FxREYsQUFlQSxFQXJIQSxLQTZERSxHQWFnQixFQTJEQyxDQW5GbkMsQ0FxREEsQUFlcUIsRUFySEwsT0E2RGhCLE9BNURtQyxHQXFIbkMsR0FuQ2tDLE1BVGxDLEVBMkQyQixrQkFuSVQsTUFrRmUsQ0FrREEsU0FuSWIsa0JBQ0osQ0FtSUosVUFDUyxHQW5JckIsZ0JBb0lBLDJEQXBEQSIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL3BhZ2VzL2NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcbmltcG9ydCBUZXN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEhlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0TmVvbic+R2V0IGluIHRvdWNoITwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleE9uZSc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgTGV0IEdPT0QgRU5PVUdIIExJVkUgS0FSQU9LRSBtYWtlIHlvdXIgbmV4dCB0ZWFtLWJ1aWxkaW5nIG9yXG4gICAgICAgICAgICAgIGNvcnBvcmF0ZSBldmVudCwgd2VkZGluZyBvciBiaXJ0aGRheSBwYXJ0eSBhIGNyZWF0aXZlIGFuZFxuICAgICAgICAgICAgICBpbnZpZ29yYXRpbmcgZXhwZXJpZW5jZSB3aXRoIGxpdmUgYmFuZCBrYXJhb2tlLiBQbGVhc2UgbGV0IHVzIGtub3dcbiAgICAgICAgICAgICAgaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBvciB3b3VsZCBsaWtlIGEgcXVvdGUueycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPSdtYWlsdG86c2luZ0Bnb29kZW5vdWdobGl2ZWthcmFva2UuY29tP1N1YmplY3Q9SGVsbG8lMjAnXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfdG9wJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgc2luZ0Bnb29kZW5vdWdobGl2ZWthcmFva2UuY29teycgJ31cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4VHdvJz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdjb250YWN0Jz5cbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBhY3Rpb249J2h0dHA6Ly93d3cuZm9jdXNwb2N1cy5pby9tYWdpYy9qZW5uLmNvd2FuQGdtYWlsLmNvbSdcbiAgICAgICAgICAgICAgICBtZXRob2Q9J3Bvc3QnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbmFtZScgYXV0b2NvbXBsZXRlPSdvZmYnIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSduYW1lJz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZW1haWwnIGF1dG9jb21wbGV0ZT0nb2ZmJyByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0nZW1haWwnPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FLW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J21lc3NhZ2UnXG4gICAgICAgICAgICAgICAgICAgIGlkPScnXG4gICAgICAgICAgICAgICAgICAgIGNvbHM9JzMwJ1xuICAgICAgICAgICAgICAgICAgICByb3dzPSczJ1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdtZXNzYWdlJz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TWVzc2FnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U2VuZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlNlbnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b3xSb2JvdG8rQ29uZGVuc2VkJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICAgICAgLmZsZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgYWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42NTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFjdE5lb24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmxleE9uZSxcbiAgICAgICAgICAuZmxleFR3byB7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmxleE9uZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mbGV4VHdvIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBtYXJnaW46IDAgLTVweCAwIDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDd2dztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogc2VjdGlvbiBzdHlsaW5nICovXG5cbiAgICAgICAgICAjY29udGFjdCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJ2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNjb250YWN0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLyogZm9ybSBzdHlsaW5nICovXG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbjogMWZyO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDFlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKiBmaWVsZHNldCBzdHlsaW5nICovXG4gICAgICAgICAgZmllbGRzZXQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDk0LjUlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogaW5wdXQgc3R5bGluZyAqL1xuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDVweCAxMHB4IDVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZm9udDogNDAwIDFlbS8xLjIgJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIHRleHRhcmVhIHN0eWxpbmcgKi9cbiAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDVweCAxMHB4IDVweDtcbiAgICAgICAgICAgIGhlaWdodDogNzYlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICBmb250OiA0MDAgMWVtLzEuMiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogbGFiZWwgc3R5bGluZyAqL1xuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGFiZWw6OmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGFiZWwgPiBzcGFuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIGZvcm0gYW5pbWF0aW9uICovXG4gICAgICAgICAgaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OmZvY3VzICsgbGFiZWwgc3BhbixcbiAgICAgICAgICBpbnB1dDp2YWxpZCArIGxhYmVsIHNwYW4ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OmZvY3VzICsgbGFiZWw6OmFmdGVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dGFyZWE6Zm9jdXMgKyBsYWJlbCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dGFyZWE6Zm9jdXMgKyBsYWJlbCBzcGFuLFxuICAgICAgICAgIHRleHRhcmVhOnZhbGlkICsgbGFiZWwgc3BhbiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUyMCUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRhcmVhOmZvY3VzICsgbGFiZWw6OmFmdGVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIGJ1dHRvbiBzdHlsaW5nICovXG4gICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDQ0LCAxMTMsIDI0NiwgMC45OCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246Zm9jdXM6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmZvY3VzOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/contact.js */"));
  }

}

/***/ }),

/***/ 8:
/*!********************************!*\
  !*** multi ./pages/contact.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/braedencraig/Desktop/GELK-SITE/pages/contact.js */"./pages/contact.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

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

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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
//# sourceMappingURL=contact.js.map