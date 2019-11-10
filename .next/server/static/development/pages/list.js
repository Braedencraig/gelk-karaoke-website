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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
const footerStyle = {
  height: 100,
  color: 'yellow',
  background: 'yellow',
  marginTop: '100vh'
};

const Footer = () => __jsx("div", {
  style: footerStyle,
  className: "jsx-1715396069",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-1715396069",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "ASDF ASDF ASF"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1715396069",
  __self: undefined
}, "p.jsx-1715396069{color:black;margin:0 auto;width:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdCLEFBR3FCLFlBQ0UsY0FDRixZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb290ZXJTdHlsZSA9IHtcbiAgaGVpZ2h0OiAxMDAsXG4gIGNvbG9yOiAneWVsbG93JyxcbiAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gIG1hcmdpblRvcDogJzEwMHZoJyxcbn07XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGRpdiBzdHlsZT17Zm9vdGVyU3R5bGV9PlxuICAgIDxwPkFTREYgQVNERiBBU0Y8L3A+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/Footer.js */"));

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
  margin: -9,
  background: 'black',
  height: '100vh'
};

const Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  className: "jsx-3785030638",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-3785030638",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3785030638",
  __self: undefined
}, "body{background:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9NeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQnVCLEFBR3lCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBUZXN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEhlYWRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNvbnN0IGxheW91dFN0eWxlID0ge1xuICBtYXJnaW46IC05LFxuICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG59O1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgICA8VGVzdEhlYWRlciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/MyLayout.js */"), __jsx("div", {
  style: layoutStyle,
  className: "jsx-3785030638",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx(_components_TestHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), props.children, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/NeonLogo.js":
/*!********************************!*\
  !*** ./components/NeonLogo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/NeonLogo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const NeonLogo = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
  className: "jsx-3533890028" + " " + 'wrapper',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3533890028" + " " + 'logoNeon',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("b", {
  className: "jsx-3533890028",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Good ", __jsx("span", {
  className: "jsx-3533890028",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Enough "), "Li", __jsx("span", {
  className: "jsx-3533890028",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "ve"), " Karaoke"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3533890028",
  __self: undefined
}, "@import url(//fonts.googleapis.com/css?family=Vibur);@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');.logoNeon.jsx-3533890028{text-align:center;width:65%;height:250px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.logoNeon.jsx-3533890028 b.jsx-3533890028{font:400 19vh 'Vibur';color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444,0 0 0.5em #ff4444, 0 0 0.1em #ff4444,0 10px 3px #000;}.logoNeon.jsx-3533890028 b.jsx-3533890028 span.jsx-3533890028{-webkit-animation:blink-jsx-3533890028 linear infinite 2s;animation:blink-jsx-3533890028 linear infinite 2s;}.logoNeon.jsx-3533890028 b.jsx-3533890028 span.jsx-3533890028:nth-of-type(2){-webkit-animation:blink-jsx-3533890028 linear infinite 3s;animation:blink-jsx-3533890028 linear infinite 3s;}@-webkit-keyframes blink-jsx-3533890028{78%{color:inherit;text-shadow:inherit;}79%{color:#333;}80%{text-shadow:none;}81%{color:inherit;text-shadow:inherit;}82%{color:#333;text-shadow:none;}83%{color:inherit;text-shadow:inherit;}92%{color:#333;text-shadow:none;}92.5%{color:inherit;text-shadow:inherit;}}@keyframes blink-jsx-3533890028{78%{color:inherit;text-shadow:inherit;}79%{color:#333;}80%{text-shadow:none;}81%{color:inherit;text-shadow:inherit;}82%{color:#333;text-shadow:none;}83%{color:inherit;text-shadow:inherit;}92%{color:#333;text-shadow:none;}92.5%{color:inherit;text-shadow:inherit;}}.wrapper.jsx-3533890028{margin:0 auto;max-width:960px;padding:0 2%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9OZW9uTG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTZ0IsQUFFMkQsQUFDc0IsQUFFdEQsQUFZSSxBQU1hLEFBR0EsQUFJbkIsQUFJSCxBQUdNLEFBR0gsQUFJSCxBQUlHLEFBSUgsQUFJRyxBQU1GLFdBM0JkLEFBVW1CLEFBUUEsR0F0QkcsQUFVQSxBQVFBLEFBUUEsQUFNTixHQXpCaEIsQ0FoQ1UsSUFZQyxNQVhFLEFBdUNiLEFBUUEsRUFVYSxHQTVDdUIsQ0FZcEMsQUFVQSxBQVFBLEFBUUEsT0FsRFksRUF5RGQsVUF4RG9CLGtCQUNaLE1BQ0MsT0FDQyxRQUNDLFNBQ1EsT0FVbkIsQUFHQSw0QkFOQSxrREFOQSIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvTmVvbkxvZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOZW9uTG9nbyA9ICgpID0+IChcbiAgPD5cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nb05lb24nPlxuICAgICAgICA8Yj5cbiAgICAgICAgICBHb29kIDxzcGFuPkVub3VnaCA8L3NwYW4+TGk8c3Bhbj52ZTwvc3Bhbj4gS2FyYW9rZVxuICAgICAgICA8L2I+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybCgvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VmlidXIpO1xuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQmZGlzcGxheT1zd2FwJyk7XG4gICAgICAubG9nb05lb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuICAgICAgLmxvZ29OZW9uIGIge1xuICAgICAgICBmb250OiA0MDAgMTl2aCAnVmlidXInO1xuICAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gI2ZmNDQ0NCwgMCAwIDAuNWVtICNmZjQ0NDQsXG4gICAgICAgICAgMCAwIDAuMWVtICNmZjQ0NDQsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgIH1cbiAgICAgIC5sb2dvTmVvbiBiIHNwYW4ge1xuICAgICAgICBhbmltYXRpb246IGJsaW5rIGxpbmVhciBpbmZpbml0ZSAycztcbiAgICAgIH1cbiAgICAgIC5sb2dvTmVvbiBiIHNwYW46bnRoLW9mLXR5cGUoMikge1xuICAgICAgICBhbmltYXRpb246IGJsaW5rIGxpbmVhciBpbmZpbml0ZSAzcztcbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgYmxpbmsge1xuICAgICAgICA3OCUge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtc2hhZG93OiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIDc5JSB7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgODAlIHtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICA4MSUge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtc2hhZG93OiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIDgyJSB7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgODMlIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICA5MiUge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIDkyLjUlIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDIlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOZW9uTG9nbztcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/NeonLogo.js */"));

/* harmony default export */ __webpack_exports__["default"] = (NeonLogo);

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
/* harmony import */ var _components_NeonLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NeonLogo */ "./components/NeonLogo.js");
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const TestHeader = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
  className: "jsx-1291501349" + " " + 'navBar',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("nav", {
  className: "jsx-1291501349" + " " + 'wrapper',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("svg", {
  height: "100px",
  width: "100px",
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  x: "0px",
  y: "0px",
  viewBox: "0 0 100 100",
  "enable-background": "new 0 0 100 100",
  className: "jsx-1291501349" + " " + 'logo',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("path", {
  d: "M94.503,38.963h-5.071v-2.896c0-2.417-1.961-4.377-4.378-4.377h-3.088v-2.455c0-0.792-0.643-1.437-1.436-1.437l0,0  c-0.793,0-1.438,0.645-1.438,1.437v2.455h-8.039V17.625c0-2.177,1.689-4.032,3.864-4.115c2.287-0.086,4.175,1.749,4.175,4.018v3.353  c0,0.793,0.645,1.437,1.438,1.437l0,0c0.793,0,1.436-0.644,1.436-1.437v-3.224c0-3.763-2.963-6.929-6.725-7.018  c-3.875-0.093-7.058,3.033-7.058,6.889v11.156c-1.134-0.816-2.521-1.299-4.021-1.299c-2.22,0-4.194,1.055-5.455,2.688  c-1.261-1.634-3.235-2.688-5.455-2.688c-1.499,0-2.887,0.481-4.02,1.299V17.656c0-3.763-2.964-6.929-6.726-7.019  c-3.875-0.093-7.057,3.033-7.057,6.889v14.164h-7.128c-0.673-1.358-2.07-2.297-3.688-2.297c-1.22,0-2.313,0.536-3.067,1.382  c-2.239-1.869-5.073-2.913-8.034-2.913c-6.913,0-12.537,5.624-12.537,12.537c0,6.913,5.624,12.538,12.537,12.538  c2.949,0,5.791-1.049,8.031-2.917c0.754,0.848,1.85,1.385,3.069,1.385c1.616,0,3.013-0.938,3.688-2.297h7.414  c1.75,11.103,11.384,19.62,22.971,19.62c4.324,0,8.515-1.194,12.144-3.42c0.786-0.481,0.916-1.574,0.266-2.228l0,0  c-0.465-0.464-1.188-0.554-1.747-0.21c-3.065,1.873-6.663,2.956-10.507,2.984c-11.297,0.082-20.538-9.326-20.538-20.623v-9.716  h19.233c2.176,0,4.031,1.688,4.113,3.864c0.087,2.287-1.749,4.175-4.018,4.175H44.019c-0.67,0-1.281,0.438-1.44,1.087  c-0.198,0.808,0.315,1.592,1.103,1.755c0.024,0.005,2.436,0.517,4.779,1.943c2.916,1.775,4.4,4.116,4.41,6.957  c0.003,0.769,0.607,1.433,1.374,1.464c0.821,0.034,1.497-0.621,1.497-1.436c0-1.771-0.421-3.416-1.239-4.899  c1.702-0.313,3.188-1.253,4.206-2.572c1.262,1.633,3.236,2.688,5.455,2.688c1.581,0,3.039-0.536,4.203-1.437H78.77  c-0.563,3.167-1.847,6.06-3.664,8.516c-0.414,0.562-0.354,1.339,0.14,1.83c0.007,0.007,0.015,0.015,0.021,0.021  c0.613,0.612,1.623,0.526,2.141-0.169c2.221-2.995,3.691-6.487,4.275-10.197h3.371c2.418,0,4.377-1.959,4.377-4.377v-2.896h5.072  c0.898,0,1.627,0.729,1.627,1.627V66.3c0,2.483-2.014,4.498-4.498,4.498H67.456c-4.022,0-7.41,3.169-7.506,7.19  c-0.099,4.146,3.243,7.547,7.366,7.547h1.064c0.627,2.207,2.659,3.828,5.063,3.828h7.272c0.793,0,1.437-0.644,1.437-1.437v-2.394  h2.142c0.786,0,1.472-0.604,1.495-1.391c0.023-0.813-0.627-1.479-1.436-1.479h-2.201V80.27c0-0.793-0.644-1.437-1.437-1.437h-7.272  c-2.403,0-4.438,1.622-5.063,3.827h-0.964c-2.518,0-4.643-2.059-4.602-4.574c0.043-2.443,2.043-4.421,4.498-4.421h24.313  c4.031,0,7.315-3.255,7.366-7.272h0.006V43.462C99.001,40.977,96.987,38.963,94.503,38.963z M20.524,47.074  c-1.82,1.902-4.349,2.99-6.986,2.99c-5.33,0-9.666-4.336-9.666-9.666s4.336-9.666,9.666-9.666c2.646,0,5.166,1.083,6.986,2.985  V47.074z M25.884,47.289c0,0.688-0.558,1.244-1.244,1.244s-1.244-0.559-1.244-1.244V33.508c0-0.686,0.559-1.244,1.244-1.244  c0.687,0,1.244,0.56,1.244,1.244V47.289z M35.454,46.236h-6.699V34.561h6.699V46.236z M46.364,32.646h-8.039V17.525  c0-2.217,1.803-4.021,4.02-4.021c2.217,0,4.021,1.804,4.021,4.021L46.364,32.646L46.364,32.646z M49.583,32.646  c0.626-1.407,2.036-2.394,3.672-2.394c1.638,0,3.046,0.985,3.672,2.394H49.583z M53.255,47.672c-0.376,0-0.745-0.054-1.104-0.155  c-0.422-0.38-0.875-0.745-1.368-1.089h5.373C55.423,47.192,54.396,47.672,53.255,47.672z M68.186,43.652  c0,2.217-1.805,4.02-4.021,4.02c-1.465,0-2.745-0.79-3.447-1.963c2.269-1.13,3.83-3.471,3.83-6.172c0-2.862-1.756-5.322-4.246-6.362  c0.479-1.683,2.028-2.921,3.863-2.921c2.216,0,4.021,1.804,4.021,4.021V43.652z M86.561,44.73c0,0.831-0.676,1.506-1.507,1.506  H70.551c0.324-0.799,0.506-1.67,0.506-2.584V34.56h13.997c0.831,0,1.507,0.676,1.507,1.506V44.73z M73.448,81.705h5.838v4.785  h-5.838c-1.319,0-2.394-1.073-2.394-2.393C71.057,82.777,72.129,81.705,73.448,81.705z",
  className: "jsx-1291501349",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
})), __jsx("input", {
  type: "checkbox",
  id: "menu-toggle",
  className: "jsx-1291501349",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("label", {
  htmlFor: "menu-toggle",
  className: "jsx-1291501349" + " " + 'label-toggle',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("ul", {
  className: "jsx-1291501349",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-1291501349",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1291501349",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Home"))), __jsx("li", {
  className: "jsx-1291501349",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1291501349",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "About"))), __jsx("li", {
  className: "jsx-1291501349",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1291501349",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "Song List"))), __jsx("li", {
  className: "jsx-1291501349",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1291501349",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, "Contact")))))), __jsx("header", {
  className: "jsx-1291501349" + " " + 'wrapper',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1291501349",
  __self: undefined
}, "@import url(//fonts.googleapis.com/css?family=Vibur);@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');h1.jsx-1291501349{font-size:3em;padding:3em 0 1em 0;}.navBar.jsx-1291501349{background-color:#53354a;position:fixed;right:0;left:0;}.logo.jsx-1291501349{background-color:#e84545;border-radius:50px;display:inline-block;height:45px;margin:1em 0;width:45px;}.wrapper.jsx-1291501349{margin:0 auto;max-width:960px;padding:0 2%;}nav.jsx-1291501349 ul.jsx-1291501349{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;list-style-type:none;width:50%;}nav.jsx-1291501349 ul.jsx-1291501349 a.jsx-1291501349{font-family:'Oswald';color:#e84545;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;}nav.jsx-1291501349 ul.jsx-1291501349 a.jsx-1291501349:hover{color:#903749;}li.jsx-1291501349{display:inline-block;}#menu-toggle.jsx-1291501349{display:none;}.label-toggle.jsx-1291501349{display:none;}.wrapper.jsx-1291501349{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:768px){nav.jsx-1291501349 ul.jsx-1291501349 a.jsx-1291501349{color:#53354a;}ul.jsx-1291501349{background-color:#e84545;display:block;height:0;list-style-type:none;opacity:0;text-align:center;-webkit-transition:all 1s ease;transition:all 1s ease;width:100%;visibility:hidden;}li.jsx-1291501349{border-bottom:2px solid #53354a;color:#53354a;display:block;font-size:1.5em;padding:2em 0;}#menu-toggle.jsx-1291501349:checked~ul.jsx-1291501349{opacity:1;height:100vh;visibility:visible;}.label-toggle.jsx-1291501349{background:linear-gradient( to bottom, #e84545 0%, #e84545 20%, transparent 20%, transparent 40%, #e84545 40%, #e84545 60%, transparent 60%, transparent 80%, #e84545 80%, #e84545 100% );cursor:pointer;display:block;float:right;height:35px;margin-top:1em;width:35px;}.wrapper.jsx-1291501349{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9UZXN0SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEZ0IsQUFHeUQsQUFDc0IsQUFHeEQsQUFLVyxBQU9BLEFBU1gsQUFNRCxBQU9RLEFBT1AsQUFJTyxBQUlSLEFBSUEsQUFJTSxBQVFELEFBSVcsQUFZTyxBQVF0QixBQWtCVCxBQVdhLFVBNUJELEdBeENuQixBQUlBLENBckRzQixBQXFCSixBQW9CbEIsQUF3QkksQUFxREEsT0FwRlksQUFXaEIsRUE2Q3lCLEVBckZSLEFBT0ksQUF5REQsS0EvQ0wsRUEyREssRUFoRnBCLENBa0N1QixJQW1DUixDQWhFTCxFQXFGTixDQXBFSixDQVZ1QixFQXFFSCxFQTNFWCxBQWdFa0IsT0EvRDNCLEtBMkVzQixLQXJFUixJQTBERSxLQTdDZ0IsRUF5RFosQ0FyRUwsRUEwRFMsTUFyQ0csS0FwQmQsQUFxRVQsR0E1QlcsSUFpQmMsSUF6RDdCLDBDQW9CQSxRQXNDaUIsV0FDTyxLQWxCUSxhQW1CNUIsTUErQmlCLEdBaEZFLFlBaUZILFNBaEZSLEtBaUZNLEtBaEZsQixPQWlGa0IsWUFDRyxlQUNKLFdBQ2IsaUJBdkRKIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9UZXN0SGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBOZW9uTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL05lb25Mb2dvJztcblxuY29uc3QgVGVzdEhlYWRlciA9ICgpID0+IChcbiAgPD5cbiAgICA8bmF2IGNsYXNzTmFtZT0nbmF2QmFyJz5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzTmFtZT0nbG9nbydcbiAgICAgICAgICBoZWlnaHQ9JzEwMHB4J1xuICAgICAgICAgIHdpZHRoPScxMDBweCdcbiAgICAgICAgICBmaWxsPScjMDAwMDAwJ1xuICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICB2ZXJzaW9uPScxLjEnXG4gICAgICAgICAgeD0nMHB4J1xuICAgICAgICAgIHk9JzBweCdcbiAgICAgICAgICB2aWV3Qm94PScwIDAgMTAwIDEwMCdcbiAgICAgICAgICBlbmFibGUtYmFja2dyb3VuZD0nbmV3IDAgMCAxMDAgMTAwJ1xuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggZD0nTTk0LjUwMywzOC45NjNoLTUuMDcxdi0yLjg5NmMwLTIuNDE3LTEuOTYxLTQuMzc3LTQuMzc4LTQuMzc3aC0zLjA4OHYtMi40NTVjMC0wLjc5Mi0wLjY0My0xLjQzNy0xLjQzNi0xLjQzN2wwLDAgIGMtMC43OTMsMC0xLjQzOCwwLjY0NS0xLjQzOCwxLjQzN3YyLjQ1NWgtOC4wMzlWMTcuNjI1YzAtMi4xNzcsMS42ODktNC4wMzIsMy44NjQtNC4xMTVjMi4yODctMC4wODYsNC4xNzUsMS43NDksNC4xNzUsNC4wMTh2My4zNTMgIGMwLDAuNzkzLDAuNjQ1LDEuNDM3LDEuNDM4LDEuNDM3bDAsMGMwLjc5MywwLDEuNDM2LTAuNjQ0LDEuNDM2LTEuNDM3di0zLjIyNGMwLTMuNzYzLTIuOTYzLTYuOTI5LTYuNzI1LTcuMDE4ICBjLTMuODc1LTAuMDkzLTcuMDU4LDMuMDMzLTcuMDU4LDYuODg5djExLjE1NmMtMS4xMzQtMC44MTYtMi41MjEtMS4yOTktNC4wMjEtMS4yOTljLTIuMjIsMC00LjE5NCwxLjA1NS01LjQ1NSwyLjY4OCAgYy0xLjI2MS0xLjYzNC0zLjIzNS0yLjY4OC01LjQ1NS0yLjY4OGMtMS40OTksMC0yLjg4NywwLjQ4MS00LjAyLDEuMjk5VjE3LjY1NmMwLTMuNzYzLTIuOTY0LTYuOTI5LTYuNzI2LTcuMDE5ICBjLTMuODc1LTAuMDkzLTcuMDU3LDMuMDMzLTcuMDU3LDYuODg5djE0LjE2NGgtNy4xMjhjLTAuNjczLTEuMzU4LTIuMDctMi4yOTctMy42ODgtMi4yOTdjLTEuMjIsMC0yLjMxMywwLjUzNi0zLjA2NywxLjM4MiAgYy0yLjIzOS0xLjg2OS01LjA3My0yLjkxMy04LjAzNC0yLjkxM2MtNi45MTMsMC0xMi41MzcsNS42MjQtMTIuNTM3LDEyLjUzN2MwLDYuOTEzLDUuNjI0LDEyLjUzOCwxMi41MzcsMTIuNTM4ICBjMi45NDksMCw1Ljc5MS0xLjA0OSw4LjAzMS0yLjkxN2MwLjc1NCwwLjg0OCwxLjg1LDEuMzg1LDMuMDY5LDEuMzg1YzEuNjE2LDAsMy4wMTMtMC45MzgsMy42ODgtMi4yOTdoNy40MTQgIGMxLjc1LDExLjEwMywxMS4zODQsMTkuNjIsMjIuOTcxLDE5LjYyYzQuMzI0LDAsOC41MTUtMS4xOTQsMTIuMTQ0LTMuNDJjMC43ODYtMC40ODEsMC45MTYtMS41NzQsMC4yNjYtMi4yMjhsMCwwICBjLTAuNDY1LTAuNDY0LTEuMTg4LTAuNTU0LTEuNzQ3LTAuMjFjLTMuMDY1LDEuODczLTYuNjYzLDIuOTU2LTEwLjUwNywyLjk4NGMtMTEuMjk3LDAuMDgyLTIwLjUzOC05LjMyNi0yMC41MzgtMjAuNjIzdi05LjcxNiAgaDE5LjIzM2MyLjE3NiwwLDQuMDMxLDEuNjg4LDQuMTEzLDMuODY0YzAuMDg3LDIuMjg3LTEuNzQ5LDQuMTc1LTQuMDE4LDQuMTc1SDQ0LjAxOWMtMC42NywwLTEuMjgxLDAuNDM4LTEuNDQsMS4wODcgIGMtMC4xOTgsMC44MDgsMC4zMTUsMS41OTIsMS4xMDMsMS43NTVjMC4wMjQsMC4wMDUsMi40MzYsMC41MTcsNC43NzksMS45NDNjMi45MTYsMS43NzUsNC40LDQuMTE2LDQuNDEsNi45NTcgIGMwLjAwMywwLjc2OSwwLjYwNywxLjQzMywxLjM3NCwxLjQ2NGMwLjgyMSwwLjAzNCwxLjQ5Ny0wLjYyMSwxLjQ5Ny0xLjQzNmMwLTEuNzcxLTAuNDIxLTMuNDE2LTEuMjM5LTQuODk5ICBjMS43MDItMC4zMTMsMy4xODgtMS4yNTMsNC4yMDYtMi41NzJjMS4yNjIsMS42MzMsMy4yMzYsMi42ODgsNS40NTUsMi42ODhjMS41ODEsMCwzLjAzOS0wLjUzNiw0LjIwMy0xLjQzN0g3OC43NyAgYy0wLjU2MywzLjE2Ny0xLjg0Nyw2LjA2LTMuNjY0LDguNTE2Yy0wLjQxNCwwLjU2Mi0wLjM1NCwxLjMzOSwwLjE0LDEuODNjMC4wMDcsMC4wMDcsMC4wMTUsMC4wMTUsMC4wMjEsMC4wMjEgIGMwLjYxMywwLjYxMiwxLjYyMywwLjUyNiwyLjE0MS0wLjE2OWMyLjIyMS0yLjk5NSwzLjY5MS02LjQ4Nyw0LjI3NS0xMC4xOTdoMy4zNzFjMi40MTgsMCw0LjM3Ny0xLjk1OSw0LjM3Ny00LjM3N3YtMi44OTZoNS4wNzIgIGMwLjg5OCwwLDEuNjI3LDAuNzI5LDEuNjI3LDEuNjI3VjY2LjNjMCwyLjQ4My0yLjAxNCw0LjQ5OC00LjQ5OCw0LjQ5OEg2Ny40NTZjLTQuMDIyLDAtNy40MSwzLjE2OS03LjUwNiw3LjE5ICBjLTAuMDk5LDQuMTQ2LDMuMjQzLDcuNTQ3LDcuMzY2LDcuNTQ3aDEuMDY0YzAuNjI3LDIuMjA3LDIuNjU5LDMuODI4LDUuMDYzLDMuODI4aDcuMjcyYzAuNzkzLDAsMS40MzctMC42NDQsMS40MzctMS40Mzd2LTIuMzk0ICBoMi4xNDJjMC43ODYsMCwxLjQ3Mi0wLjYwNCwxLjQ5NS0xLjM5MWMwLjAyMy0wLjgxMy0wLjYyNy0xLjQ3OS0xLjQzNi0xLjQ3OWgtMi4yMDFWODAuMjdjMC0wLjc5My0wLjY0NC0xLjQzNy0xLjQzNy0xLjQzN2gtNy4yNzIgIGMtMi40MDMsMC00LjQzOCwxLjYyMi01LjA2MywzLjgyN2gtMC45NjRjLTIuNTE4LDAtNC42NDMtMi4wNTktNC42MDItNC41NzRjMC4wNDMtMi40NDMsMi4wNDMtNC40MjEsNC40OTgtNC40MjFoMjQuMzEzICBjNC4wMzEsMCw3LjMxNS0zLjI1NSw3LjM2Ni03LjI3MmgwLjAwNlY0My40NjJDOTkuMDAxLDQwLjk3Nyw5Ni45ODcsMzguOTYzLDk0LjUwMywzOC45NjN6IE0yMC41MjQsNDcuMDc0ICBjLTEuODIsMS45MDItNC4zNDksMi45OS02Ljk4NiwyLjk5Yy01LjMzLDAtOS42NjYtNC4zMzYtOS42NjYtOS42NjZzNC4zMzYtOS42NjYsOS42NjYtOS42NjZjMi42NDYsMCw1LjE2NiwxLjA4Myw2Ljk4NiwyLjk4NSAgVjQ3LjA3NHogTTI1Ljg4NCw0Ny4yODljMCwwLjY4OC0wLjU1OCwxLjI0NC0xLjI0NCwxLjI0NHMtMS4yNDQtMC41NTktMS4yNDQtMS4yNDRWMzMuNTA4YzAtMC42ODYsMC41NTktMS4yNDQsMS4yNDQtMS4yNDQgIGMwLjY4NywwLDEuMjQ0LDAuNTYsMS4yNDQsMS4yNDRWNDcuMjg5eiBNMzUuNDU0LDQ2LjIzNmgtNi42OTlWMzQuNTYxaDYuNjk5VjQ2LjIzNnogTTQ2LjM2NCwzMi42NDZoLTguMDM5VjE3LjUyNSAgYzAtMi4yMTcsMS44MDMtNC4wMjEsNC4wMi00LjAyMWMyLjIxNywwLDQuMDIxLDEuODA0LDQuMDIxLDQuMDIxTDQ2LjM2NCwzMi42NDZMNDYuMzY0LDMyLjY0NnogTTQ5LjU4MywzMi42NDYgIGMwLjYyNi0xLjQwNywyLjAzNi0yLjM5NCwzLjY3Mi0yLjM5NGMxLjYzOCwwLDMuMDQ2LDAuOTg1LDMuNjcyLDIuMzk0SDQ5LjU4M3ogTTUzLjI1NSw0Ny42NzJjLTAuMzc2LDAtMC43NDUtMC4wNTQtMS4xMDQtMC4xNTUgIGMtMC40MjItMC4zOC0wLjg3NS0wLjc0NS0xLjM2OC0xLjA4OWg1LjM3M0M1NS40MjMsNDcuMTkyLDU0LjM5Niw0Ny42NzIsNTMuMjU1LDQ3LjY3MnogTTY4LjE4Niw0My42NTIgIGMwLDIuMjE3LTEuODA1LDQuMDItNC4wMjEsNC4wMmMtMS40NjUsMC0yLjc0NS0wLjc5LTMuNDQ3LTEuOTYzYzIuMjY5LTEuMTMsMy44My0zLjQ3MSwzLjgzLTYuMTcyYzAtMi44NjItMS43NTYtNS4zMjItNC4yNDYtNi4zNjIgIGMwLjQ3OS0xLjY4MywyLjAyOC0yLjkyMSwzLjg2My0yLjkyMWMyLjIxNiwwLDQuMDIxLDEuODA0LDQuMDIxLDQuMDIxVjQzLjY1MnogTTg2LjU2MSw0NC43M2MwLDAuODMxLTAuNjc2LDEuNTA2LTEuNTA3LDEuNTA2ICBINzAuNTUxYzAuMzI0LTAuNzk5LDAuNTA2LTEuNjcsMC41MDYtMi41ODRWMzQuNTZoMTMuOTk3YzAuODMxLDAsMS41MDcsMC42NzYsMS41MDcsMS41MDZWNDQuNzN6IE03My40NDgsODEuNzA1aDUuODM4djQuNzg1ICBoLTUuODM4Yy0xLjMxOSwwLTIuMzk0LTEuMDczLTIuMzk0LTIuMzkzQzcxLjA1Nyw4Mi43NzcsNzIuMTI5LDgxLjcwNSw3My40NDgsODEuNzA1eic+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz48L2Rpdj4gKi99XG4gICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgaWQ9J21lbnUtdG9nZ2xlJyAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbWVudS10b2dnbGUnIGNsYXNzTmFtZT0nbGFiZWwtdG9nZ2xlJz48L2xhYmVsPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPlxuICAgICAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9saXN0Jz5cbiAgICAgICAgICAgICAgPGE+U29uZyBMaXN0PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnPlxuICAgICAgICAgICAgICA8YT5Db250YWN0PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L25hdj5cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICB7LyogPGgxPkJpZyBvbCcgTG9yZW08L2gxPiAqL31cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nbG9nb05lb24nPlxuICAgICAgICA8Yj5cbiAgICAgICAgICBHb29kIDxzcGFuPkVub3VnaCA8L3NwYW4+TGk8c3Bhbj52ZTwvc3Bhbj4gS2FyYW9rZVxuICAgICAgICA8L2I+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9oZWFkZXI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgXG4gICAgQGltcG9ydCB1cmwoLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVZpYnVyKTtcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZCZkaXNwbGF5PXN3YXAnKTtcbiAgICBcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwIDFlbSAwO1xuICAgICAgfVxuXG4gICAgICAubmF2QmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzMzU0YTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgLmxvZ28ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg0NTQ1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICB9XG5cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMiU7XG4gICAgICB9XG5cbiAgICAgIG5hdiB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuXG4gICAgICBuYXYgdWwgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcbiAgICAgICAgY29sb3I6ICNlODQ1NDU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgbmF2IHVsIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzkwMzc0OTtcbiAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjbWVudS10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubGFiZWwtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgIFxuICAgICAgICAgIG5hdiB1bCBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTMzNTRhOyBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg0NTQ1O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUzMzU0YTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTMzNTRhO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgcGFkZGluZzogMmVtIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI21lbnUtdG9nZ2xlOmNoZWNrZWQgfiB1bCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxhYmVsLXRvZ2dsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgICAgICAgI2U4NDU0NSAwJSxcbiAgICAgICAgICAgICAgI2U4NDU0NSAyMCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDIwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNDAlLFxuICAgICAgICAgICAgICAjZTg0NTQ1IDQwJSxcbiAgICAgICAgICAgICAgI2U4NDU0NSA2MCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDYwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgODAlLFxuICAgICAgICAgICAgICAjZTg0NTQ1IDgwJSxcbiAgICAgICAgICAgICAgI2U4NDU0NSAxMDAlXG4gICAgICAgICAgICApOyBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0SGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js */"));

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

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/list.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const contentful = __webpack_require__(/*! contentful */ "contentful");


class List extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: 'sqmp3jmwaedr',
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
    }); // content type relates to the content type name in contentful
    // figured it outttt
    // 'post' instead of songList, post is linked to author so when post response you get author object as well

    client.getEntries({
      content_type: 'songList'
    }).then(response => {
      console.log(response);
      this.setState({
        articles: response.items
      });
    });
  }

  render() {
    const ass = this.state.articles.map((article, i) => {
      console.log(article.fields.gelkSongList); //   have alphabet up top so its searchable artist name alphabetically.
      // then have list just train below.

      return __jsx("div", {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, article.fields.gelkSongList));
    });
    return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, ass, __jsx("p", {
      className: "jsx-4248571843" + " " + 'alphabet',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"), __jsx("p", {
      className: "jsx-4248571843",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "4 Non Blondes - What's Up? Aaliyah - Are You That Somebody? ABBA - Dancing Queen AC/DC - Dirty Deeds Done Dirt Cheap AC/DC - T.N.T. AC/DC - You Shook Me All Night Long Adele - Hello Aerosmith - Crazy Aerosmith - Cryin' Aerosmith - Sweet Emotion Alanis Morissette - Hand in My Pocket Alanis Morissette - Ironic Alanis Morissette - Thank U Alanis Morissette - You Oughta Know Alannah Myles - Black Velvet Alicia Keys - Fallin\u2019 Alicia Keys - If I Ain't Got You Alvvays - Archie, Marry Me Amy Winehouse - Back to Black Amy Winehouse - Rehab Amy Winehouse - Valerie Amy Winehouse - You Know I'm No Good Animals - Don't Let Me Be Misunderstood Animals - House of the Rising Sun Arcade Fire - Rebellion (Lies) Arcade Fire - Suburbs Arctic Monkeys - I Bet You Look Good on the Dancefloor Aretha Franklin - Natural Woman (not C King Ver.) Aretha Franklin - Respect Avril Lavigne - Complicated Avril Lavigne - Sk8er Boi Backstreet Boys - Everybody (Backstreet's Back) Backstreet Boys - I Want It That Way Band - The Night They Drove Old Dixie Down Band - The Weight Beastie Boys - Fight for Your Right Beastie Boys - Sabotage Beatles - A Hard Day's Night Beatles - Come Together Beatles - Don't Let Me Down Beatles - Drive My Car Beatles - Helter Skelter Beatles - Hey Jude Beatles - Let It Be Beatles - Revolution Beck - Loser Bee Gees - To Love Somebody Ben E. King - Stand By Me Bikini Kill - Rebel Girl Bill Withers - Ain't No Sunshine Bill Withers - Use Me Billy Idol - Dancing With Myself Billy Idol - Rebel Yell Black Sabbath - Paranoid Black Sabbath - War Pigs Blackstreet - No Diggity Blind Melon - No Rain blink182 - Dammit blink182 - All The Small Things Blondie - Call Me Blondie - Heart of Glass Blue Rodeo - Lost Together Blur - Girls and Boys Blur - Song 2 Bob Dylan - Knockin\u2019 on Heaven\u2019s Door Bob Seger - Night Moves Bob Seger - Old Time Rock and Roll Bon Jovi - Livin' on a Prayer Bonnie Raitt - Something To Talk About Britney Spears - Baby One More Time Britney Spears - Toxic Bruce Springsteen - Born in the USA Bruce Springsteen - Dancing in the Dark Bruce Springsteen - Glory Days Bruce Springsteen - Hungry Heart Bryan Adams - Heaven Bryan Adams - Summer of \u201869 Buck 65 - Wicked and Weird Buck 65 - Zombie Delight Cardigans - Lovefool Carly Rae Jepsen - Call Me Maybe Carly Simon - You're So Vain Cars - Just What I Needed Carole King - It's Too Late Carole King - Natural Woman (not Aretha version) Carrie Underwood - Before He Cheats Cheap Trick - Surrender Cheap Trick - I Want You to Want Me Chris Isaak - Wicked Game Chris Stapleton - Tennessee Whiskey Clash - London Calling Clash - Should I Stay or Should I Go? Coldplay - Clocks Coldplay - Yellow Concrete Blonde - Joey Coolio - Gangsta's Paradise Cranberries - Salvation Cranberries - Zombie Creedence Clearwater Revival - Proud Mary Creedence Clearwater Revival - Who'll Stop the Rain? Cro-Mags - Hard Times Cult - She Sells Sanctuary Cure - Boys Don't Cry Cure - Friday I\u2019m In Love Cure - Just Like Heaven Cure - Lovesong Cyndi Lauper - Girls Just Wanna Have Fun Daft Punk - Get Lucky Dandy Warhols - Bohemian Like You Danzig - Mother David Bowie - Let's Dance David Bowie - Rebel Rebel David Bowie - Suffragette City David Bowie - Ziggy Stardust Depeche Mode - Enjoy the Silence Destiny's Child - Say My Name Dion - Runaround Sue Dolly Parton - Jolene Don Henley - Boys of Summer Dr. Dre ft. Eminem - Forgot About Dre Drake - Hold On We're Going Home Drake - Passionfruit Drifters - Under The Boardwalk Dusty Springfield - Son Of A Preacher Man Eagles - Hotel California Eagles - Take it Easy Elastica - Connection Elton John - Bennie and the Jets Elton John - Crocodile Rock Elton John - Rocket Man Eminem - Lose Yourself Erykah Badu - On & On Feist - My Moon My Man Fine Young Cannibals - She Drives Me Crazy Fiona Apple - Criminal Flaming Lips - She Don\u2019t Use Jelly Fleetwood Mac - Dreams Fleetwood Mac - Go Your Own Way Fleetwood Mac - Rhiannon Foo Fighters - Big Me Foo Fighters - Everlong Fountains of Wayne - Stacey\u2019s Mom Fray - How To Save A Life Fugees - Killing Me Softly GG Allin - Bite It, You Scum Gang Of Four - Damaged Goods Garth Brooks - Friends In Low Places George Michael - Careless Whisper George Michael - Faith Ginuwine - Pony Glenn Frey - The Heat is On Gloria Gaynor - I Will Survive Gnarls Barkley - Crazy Gob - I Hear You Calling Go-Go\u2019s - We Got the Beat Green Day - Basket Case Green Day - Longview Green Day - When I Come Around Guns N' Roses - Don't Cry Guns N' Roses - Knockin\u2019 on Heaven's Door Guns N' Roses - Sweet Child O' Mine Hall & Oates - Rich Girl Hanoi Rocks - Don\u2019t You Ever Leave Me Harvey Danger - Flagpole Sitta Hole - Celebrity Skin Hole - Malibu Hole - Violet Ice Cube - It Was A Good Day Iggy Pop - Lust for Life Iggy Pop - The Passenger INXS - Never Tear Us Apart James - Laid Jane's Addiction - Jane Says Jesus Jones - Right Here Right Now Jet - Are You Gonna Be My Girl? Jimmy Eat World \u2013 The Middle Joan Jett - I Love Rock 'n' Roll John Lennon - Imagine John Mellencamp - Jack & Diane Johnny Cash - Folsom Prison Blues Journey - Don't Stop Believing Joy Division - Dead Souls Joy Division - Love Will Tear Us Apart Justin Bieber - Sorry Justin Timberlake - SexyBack Katy Perry - Last Friday Night (T.G.I.F.) Katy Perry - Teenage Dream Kelly Clarkson - Since U Been Gone Kenny Rogers - The Gambler Kenny Rogers & Dolly Parton - Islands In the Stream Kid Rock & Sheryl Crow - Picture Killers - All These Things That I've Done Killers - Mr. Brightside Kingsmen - Louie Louie Kings of Leon - Sex on Fire Kings of Leon - Use Somebody Kinks - All Day And All Of The Night Kiss - I Was Made For Loving You Kiss - Rock and Roll All Nite Kiss - Strutter Kylie Minogue - Can't Get You Out Of My Head Lady Antebellum - Need You Now Lady Gaga - You and I Lady Gaga - Shallow Le Tigre - Deceptacon Led Zeppelin - Immigrant Song Led Zeppelin - Rock and Roll Led Zeppelin - Whole Lotta Love Len - Steal My Sunshine Lil Nas X - Old Town Road Lit - My Own Worst Enemy Liz Phair - F*** and Run Lizzo - Truth Hurts Lou Reed - Perfect Day Lou Reed - Walk On The Wild Side M.I.A. - Paper Planes Madonna - Holiday Madonna - Like a Virgin Madonna - Material Girl Mariah Carey - All I Want For Xmas Is You Maroon 5 - Sugar Mary J. Blige - Family Affair Mazzy Star - Fade Into You MC5 - Kick Out the Jams Melissa Etheridge - I'm the Only One Men Without Hats - Safety Dance Metallica - Enter Sandman Metric - Gimme Sympathy MGMT - Electric Feel MGMT - Kids Michael Jackson - Beat It Michael Jackson - Billie Jean Miley Cyrus - Party in the USA Miley Cyrus - We Can\u2019t Stop Miley Cyrus - Wrecking Ball Misfits - Hybrid Moments Misfits - Last Caress Misfits - Where Eagles Dare Modest Mouse - Float On Montell Jordan - This is How We Do It Mot\xF6rhead - Ace of Spades N*Sync - Bye Bye Bye Nancy Sinatra - These Boots Are Made for Walkin' Natalie Imbruglia - Torn Neil Diamond - Girl, You\u2019ll Be a Woman Soon Neil Diamond - Sweet Caroline Neil Young - Old Man Neil Young - Rockin\u2019 in the Free World New York Dolls - Personality Crisis Nick Gilder - Hot Child in the City Nine Inch Nails - Dead Souls Nirvana - All Apologies Nirvana - Breed Nirvana - Come as You Are Nirvana - In Bloom Nirvana - Molly's Lips Nirvana - Smells Like Teen Spirit Nirvana - Territorial Pissings No Doubt - Just a Girl Oasis - Champagne Supernova Oasis - Don\u2019t Look Back in Anger Oasis - Wonderwall Offspring - Come Out and Play Offspring - Self Esteem Otis Redding - Sittin\u2019 on the Dock of the Bay Outkast - Hey Ya! Outkast - Ms. Jackson Ozzy Osbourne - Crazy Train Pat Benatar - Hit Me With Your Best Shot Patti Smith - Because the Night Patti Smith - Gloria Pavement - Cut Your Hair Pearl Jam - Alive Pearl Jam - Jeremy Pearl Jam - Last Kiss Pink Floyd - Another Brick in the Wall Pink Floyd - Wish You Were Here Pixies - Gigantic Pixies - Where is My Mind PJ Harvey - Rid of Me Police - Message in a Bottle Portishead - Glory Box Prince - Kiss Prince - Little Red Corvette Prince - Purple Rain Prince - When You Were Mine Proclaimers - I'm Gonna Be (500 Miles) Pulp - Common People R.E.M. - Losing My Religion Radiohead - Creep Radiohead - Fake Plastic Trees Radiohead - High and Dry Radiohead - Karma Police Rage Against the Machine - Killing in the Name Ramones - Blitzkrieg Bop Ramones - I Wanna Be Sedated Rancid - Ruby Soho Rancid - Salvation Rancid - Time Bomb Red Hot Chili Peppers - Dani California Red Hot Chili Peppers - Give It Away Red Hot Chili Peppers - Scar Tissue Red Hot Chili Peppers - Soul to Squeeze Red Hot Chili Peppers - Under the Bridge Robyn - Dancing On My Own Rolling Stones - Beast of Burden Rolling Stones - Honky Tonk Women Rolling Stones - Jumpin' Jack Flash Runaways - Cherry Bomb Rupert Holmes - Escape (The Pi\xF1a Colada Song) Santigold - L.E.S. Artistes Serena Ryder - Stompa Sex Pistols - Anarchy in the UK Sex Pistols - God Save the Queen Shania Twain - Man! I Feel Like a Woman Shania Twain - That Don't Impress Me Much Sheryl Crow - All I Wanna Do Sheryl Crow - If It Makes You Happy Sloan - The Good in Everyone Sloan - Money City Maniacs Sloan - Underwhelmed Smashing Pumpkins - 1979 Smashing Pumpkins - Cherub Rock Smashing Pumpkins - Today Smiths - There is a Light That Never Goes Out Smiths - This Charming Man Snoop Doggy Dogg - Gin & Juice Sonic Youth - 100% Spice Girls - Wannabe Stealers Wheel - Stuck in the Middle With You Steppenwolf - Born to be Wild Stooges - I Wanna Be Your Dog Stooges - Search and Destroy Stooges - T.V. Eye Strokes - Last Nite Strokes - Reptilia Strokes - You Only Live Once Sublime - What I Got Supremes - Can\u2019t Hurry Love Survivor - Eye of the Tiger T.Rex - 20th Century Boy T.Rex - Children of the Revolution T.Rex - Get It On (Bang a Gong) Talking Heads - Psycho Killer Talking Heads - This Must Be the Place Taylor Swift - Shake It Off Taylor Swift \u2013 We Are Never Getting Back Together Temple of the Dog - Hunger Strike Temptations - My Girl Temptations - Ain\u2019t Too Proud To Beg Third Eye Blind - Semi-Charmed Life Thrush Hermit - From the Back of the Film Tina Turner - Proud Mary TLC - Waterfalls TLC - No Scrubs Tom Petty - Don\u2019t Do Me Like That Tom Petty - Free Fallin' Tom Petty - Mary Jane\u2019s Last Dance Tom Petty - You Don't Know How it Feels Tragically Hip - Ahead by a Century Tragically Hip - Bobcaygeon Tragically Hip - New Orleans is Sinking Tragically Hip - Poets U2 - With or Without You Undertones - Teenage Kicks Urge Overkill - Girl, You\u2019ll Be a Woman Soon Van Halen - Runnin\u2019 with the Devil Vanilla Ice - Ice Ice Baby Vaselines - Molly\u2019s Lips Velvet Underground - Waiting for My Man Violent Femmes - Blister In the Sun War - Lowrider Weeknd - Can't Feel My Face Weezer - El Scorcho Weezer - Hash Pipe Weezer - My Name is Jonas Weezer - Say It Ain't So Weezer - Tired of Sex Weezer - Undone the Sweater Song Weird Al Yankovic - Amish Paradise Weird Al Yankovic - Eat It Weird Al Yankovic - Like a Surgeon Weird Al Yankovic - Rye or the Kaiser Weird Al Yankovic - Smells Like Nirvana Wham! - Last Christmas Wheatus - Teenage Dirtbag White Stripes - Seven Nation Army White Stripes - Fell in Love with a Girl Whitesnake - Here I Go Again Yeah Yeah Yeahs - Gold Lion Yeah Yeah Yeahs - Maps Young MC - Bust a Move"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4248571843",
      __self: this
    }, ".alphabet.jsx-4248571843{margin-bottom:50px;margin-top:200px;}p.jsx-4248571843{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvTm9CLEFBR2dDLEFBSVAsWUFDZCxPQUptQixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFydGljbGVzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgLy8gVGhpcyBpcyB0aGUgc3BhY2UgSUQuIEEgc3BhY2UgaXMgbGlrZSBhIHByb2plY3QgZm9sZGVyIGluIENvbnRlbnRmdWwgdGVybXNcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGFjY2VzcyB0b2tlbiBmb3IgdGhpcyBzcGFjZS4gTm9ybWFsbHkgeW91IGdldCBib3RoIElEIGFuZCB0aGUgdG9rZW4gaW4gdGhlIENvbnRlbnRmdWwgd2ViIGFwcFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcbiAgICAvLyBjb250ZW50IHR5cGUgcmVsYXRlcyB0byB0aGUgY29udGVudCB0eXBlIG5hbWUgaW4gY29udGVudGZ1bFxuICAgIC8vIGZpZ3VyZWQgaXQgb3V0dHR0XG4gICAgLy8gJ3Bvc3QnIGluc3RlYWQgb2Ygc29uZ0xpc3QsIHBvc3QgaXMgbGlua2VkIHRvIGF1dGhvciBzbyB3aGVuIHBvc3QgcmVzcG9uc2UgeW91IGdldCBhdXRob3Igb2JqZWN0IGFzIHdlbGxcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ3NvbmdMaXN0JyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhcnRpY2xlczogcmVzcG9uc2UuaXRlbXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXNzID0gdGhpcy5zdGF0ZS5hcnRpY2xlcy5tYXAoKGFydGljbGUsIGkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGFydGljbGUuZmllbGRzLmdlbGtTb25nTGlzdCk7XG4gICAgICAvLyAgIGhhdmUgYWxwaGFiZXQgdXAgdG9wIHNvIGl0cyBzZWFyY2hhYmxlIGFydGlzdCBuYW1lIGFscGhhYmV0aWNhbGx5LlxuICAgICAgLy8gdGhlbiBoYXZlIGxpc3QganVzdCB0cmFpbiBiZWxvdy5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICA8cD57YXJ0aWNsZS5maWVsZHMuZ2Vsa1NvbmdMaXN0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7YXNzfVxuICAgICAgICA8cCBjbGFzc05hbWU9J2FscGhhYmV0Jz5cbiAgICAgICAgICBBIEIgQyBEIEUgRiBHIEggSSBKIEsgTCBNIE4gTyBQIFEgUiBTIFQgVSBWIFcgWCBZIFpcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA0IE5vbiBCbG9uZGVzIC0gV2hhdCdzIFVwPyBBYWxpeWFoIC0gQXJlIFlvdSBUaGF0IFNvbWVib2R5PyBBQkJBIC1cbiAgICAgICAgICBEYW5jaW5nIFF1ZWVuIEFDL0RDIC0gRGlydHkgRGVlZHMgRG9uZSBEaXJ0IENoZWFwIEFDL0RDIC0gVC5OLlQuIEFDL0RDXG4gICAgICAgICAgLSBZb3UgU2hvb2sgTWUgQWxsIE5pZ2h0IExvbmcgQWRlbGUgLSBIZWxsbyBBZXJvc21pdGggLSBDcmF6eVxuICAgICAgICAgIEFlcm9zbWl0aCAtIENyeWluJyBBZXJvc21pdGggLSBTd2VldCBFbW90aW9uIEFsYW5pcyBNb3Jpc3NldHRlIC0gSGFuZFxuICAgICAgICAgIGluIE15IFBvY2tldCBBbGFuaXMgTW9yaXNzZXR0ZSAtIElyb25pYyBBbGFuaXMgTW9yaXNzZXR0ZSAtIFRoYW5rIFVcbiAgICAgICAgICBBbGFuaXMgTW9yaXNzZXR0ZSAtIFlvdSBPdWdodGEgS25vdyBBbGFubmFoIE15bGVzIC0gQmxhY2sgVmVsdmV0XG4gICAgICAgICAgQWxpY2lhIEtleXMgLSBGYWxsaW7igJkgQWxpY2lhIEtleXMgLSBJZiBJIEFpbid0IEdvdCBZb3UgQWx2dmF5cyAtXG4gICAgICAgICAgQXJjaGllLCBNYXJyeSBNZSBBbXkgV2luZWhvdXNlIC0gQmFjayB0byBCbGFjayBBbXkgV2luZWhvdXNlIC0gUmVoYWJcbiAgICAgICAgICBBbXkgV2luZWhvdXNlIC0gVmFsZXJpZSBBbXkgV2luZWhvdXNlIC0gWW91IEtub3cgSSdtIE5vIEdvb2QgQW5pbWFscyAtXG4gICAgICAgICAgRG9uJ3QgTGV0IE1lIEJlIE1pc3VuZGVyc3Rvb2QgQW5pbWFscyAtIEhvdXNlIG9mIHRoZSBSaXNpbmcgU3VuIEFyY2FkZVxuICAgICAgICAgIEZpcmUgLSBSZWJlbGxpb24gKExpZXMpIEFyY2FkZSBGaXJlIC0gU3VidXJicyBBcmN0aWMgTW9ua2V5cyAtIEkgQmV0XG4gICAgICAgICAgWW91IExvb2sgR29vZCBvbiB0aGUgRGFuY2VmbG9vciBBcmV0aGEgRnJhbmtsaW4gLSBOYXR1cmFsIFdvbWFuIChub3QgQ1xuICAgICAgICAgIEtpbmcgVmVyLikgQXJldGhhIEZyYW5rbGluIC0gUmVzcGVjdCBBdnJpbCBMYXZpZ25lIC0gQ29tcGxpY2F0ZWQgQXZyaWxcbiAgICAgICAgICBMYXZpZ25lIC0gU2s4ZXIgQm9pIEJhY2tzdHJlZXQgQm95cyAtIEV2ZXJ5Ym9keSAoQmFja3N0cmVldCdzIEJhY2spXG4gICAgICAgICAgQmFja3N0cmVldCBCb3lzIC0gSSBXYW50IEl0IFRoYXQgV2F5IEJhbmQgLSBUaGUgTmlnaHQgVGhleSBEcm92ZSBPbGRcbiAgICAgICAgICBEaXhpZSBEb3duIEJhbmQgLSBUaGUgV2VpZ2h0IEJlYXN0aWUgQm95cyAtIEZpZ2h0IGZvciBZb3VyIFJpZ2h0XG4gICAgICAgICAgQmVhc3RpZSBCb3lzIC0gU2Fib3RhZ2UgQmVhdGxlcyAtIEEgSGFyZCBEYXkncyBOaWdodCBCZWF0bGVzIC0gQ29tZVxuICAgICAgICAgIFRvZ2V0aGVyIEJlYXRsZXMgLSBEb24ndCBMZXQgTWUgRG93biBCZWF0bGVzIC0gRHJpdmUgTXkgQ2FyIEJlYXRsZXMgLVxuICAgICAgICAgIEhlbHRlciBTa2VsdGVyIEJlYXRsZXMgLSBIZXkgSnVkZSBCZWF0bGVzIC0gTGV0IEl0IEJlIEJlYXRsZXMgLVxuICAgICAgICAgIFJldm9sdXRpb24gQmVjayAtIExvc2VyIEJlZSBHZWVzIC0gVG8gTG92ZSBTb21lYm9keSBCZW4gRS4gS2luZyAtXG4gICAgICAgICAgU3RhbmQgQnkgTWUgQmlraW5pIEtpbGwgLSBSZWJlbCBHaXJsIEJpbGwgV2l0aGVycyAtIEFpbid0IE5vIFN1bnNoaW5lXG4gICAgICAgICAgQmlsbCBXaXRoZXJzIC0gVXNlIE1lIEJpbGx5IElkb2wgLSBEYW5jaW5nIFdpdGggTXlzZWxmIEJpbGx5IElkb2wgLVxuICAgICAgICAgIFJlYmVsIFllbGwgQmxhY2sgU2FiYmF0aCAtIFBhcmFub2lkIEJsYWNrIFNhYmJhdGggLSBXYXIgUGlnc1xuICAgICAgICAgIEJsYWNrc3RyZWV0IC0gTm8gRGlnZ2l0eSBCbGluZCBNZWxvbiAtIE5vIFJhaW4gYmxpbmsxODIgLSBEYW1taXRcbiAgICAgICAgICBibGluazE4MiAtIEFsbCBUaGUgU21hbGwgVGhpbmdzIEJsb25kaWUgLSBDYWxsIE1lIEJsb25kaWUgLSBIZWFydCBvZlxuICAgICAgICAgIEdsYXNzIEJsdWUgUm9kZW8gLSBMb3N0IFRvZ2V0aGVyIEJsdXIgLSBHaXJscyBhbmQgQm95cyBCbHVyIC0gU29uZyAyXG4gICAgICAgICAgQm9iIER5bGFuIC0gS25vY2tpbuKAmSBvbiBIZWF2ZW7igJlzIERvb3IgQm9iIFNlZ2VyIC0gTmlnaHQgTW92ZXMgQm9iXG4gICAgICAgICAgU2VnZXIgLSBPbGQgVGltZSBSb2NrIGFuZCBSb2xsIEJvbiBKb3ZpIC0gTGl2aW4nIG9uIGEgUHJheWVyIEJvbm5pZVxuICAgICAgICAgIFJhaXR0IC0gU29tZXRoaW5nIFRvIFRhbGsgQWJvdXQgQnJpdG5leSBTcGVhcnMgLSBCYWJ5IE9uZSBNb3JlIFRpbWVcbiAgICAgICAgICBCcml0bmV5IFNwZWFycyAtIFRveGljIEJydWNlIFNwcmluZ3N0ZWVuIC0gQm9ybiBpbiB0aGUgVVNBIEJydWNlXG4gICAgICAgICAgU3ByaW5nc3RlZW4gLSBEYW5jaW5nIGluIHRoZSBEYXJrIEJydWNlIFNwcmluZ3N0ZWVuIC0gR2xvcnkgRGF5cyBCcnVjZVxuICAgICAgICAgIFNwcmluZ3N0ZWVuIC0gSHVuZ3J5IEhlYXJ0IEJyeWFuIEFkYW1zIC0gSGVhdmVuIEJyeWFuIEFkYW1zIC0gU3VtbWVyXG4gICAgICAgICAgb2Yg4oCYNjkgQnVjayA2NSAtIFdpY2tlZCBhbmQgV2VpcmQgQnVjayA2NSAtIFpvbWJpZSBEZWxpZ2h0IENhcmRpZ2FucyAtXG4gICAgICAgICAgTG92ZWZvb2wgQ2FybHkgUmFlIEplcHNlbiAtIENhbGwgTWUgTWF5YmUgQ2FybHkgU2ltb24gLSBZb3UncmUgU28gVmFpblxuICAgICAgICAgIENhcnMgLSBKdXN0IFdoYXQgSSBOZWVkZWQgQ2Fyb2xlIEtpbmcgLSBJdCdzIFRvbyBMYXRlIENhcm9sZSBLaW5nIC1cbiAgICAgICAgICBOYXR1cmFsIFdvbWFuIChub3QgQXJldGhhIHZlcnNpb24pIENhcnJpZSBVbmRlcndvb2QgLSBCZWZvcmUgSGUgQ2hlYXRzXG4gICAgICAgICAgQ2hlYXAgVHJpY2sgLSBTdXJyZW5kZXIgQ2hlYXAgVHJpY2sgLSBJIFdhbnQgWW91IHRvIFdhbnQgTWUgQ2hyaXNcbiAgICAgICAgICBJc2FhayAtIFdpY2tlZCBHYW1lIENocmlzIFN0YXBsZXRvbiAtIFRlbm5lc3NlZSBXaGlza2V5IENsYXNoIC0gTG9uZG9uXG4gICAgICAgICAgQ2FsbGluZyBDbGFzaCAtIFNob3VsZCBJIFN0YXkgb3IgU2hvdWxkIEkgR28/IENvbGRwbGF5IC0gQ2xvY2tzXG4gICAgICAgICAgQ29sZHBsYXkgLSBZZWxsb3cgQ29uY3JldGUgQmxvbmRlIC0gSm9leSBDb29saW8gLSBHYW5nc3RhJ3MgUGFyYWRpc2VcbiAgICAgICAgICBDcmFuYmVycmllcyAtIFNhbHZhdGlvbiBDcmFuYmVycmllcyAtIFpvbWJpZSBDcmVlZGVuY2UgQ2xlYXJ3YXRlclxuICAgICAgICAgIFJldml2YWwgLSBQcm91ZCBNYXJ5IENyZWVkZW5jZSBDbGVhcndhdGVyIFJldml2YWwgLSBXaG8nbGwgU3RvcCB0aGVcbiAgICAgICAgICBSYWluPyBDcm8tTWFncyAtIEhhcmQgVGltZXMgQ3VsdCAtIFNoZSBTZWxscyBTYW5jdHVhcnkgQ3VyZSAtIEJveXNcbiAgICAgICAgICBEb24ndCBDcnkgQ3VyZSAtIEZyaWRheSBJ4oCZbSBJbiBMb3ZlIEN1cmUgLSBKdXN0IExpa2UgSGVhdmVuIEN1cmUgLVxuICAgICAgICAgIExvdmVzb25nIEN5bmRpIExhdXBlciAtIEdpcmxzIEp1c3QgV2FubmEgSGF2ZSBGdW4gRGFmdCBQdW5rIC0gR2V0XG4gICAgICAgICAgTHVja3kgRGFuZHkgV2FyaG9scyAtIEJvaGVtaWFuIExpa2UgWW91IERhbnppZyAtIE1vdGhlciBEYXZpZCBCb3dpZSAtXG4gICAgICAgICAgTGV0J3MgRGFuY2UgRGF2aWQgQm93aWUgLSBSZWJlbCBSZWJlbCBEYXZpZCBCb3dpZSAtIFN1ZmZyYWdldHRlIENpdHlcbiAgICAgICAgICBEYXZpZCBCb3dpZSAtIFppZ2d5IFN0YXJkdXN0IERlcGVjaGUgTW9kZSAtIEVuam95IHRoZSBTaWxlbmNlXG4gICAgICAgICAgRGVzdGlueSdzIENoaWxkIC0gU2F5IE15IE5hbWUgRGlvbiAtIFJ1bmFyb3VuZCBTdWUgRG9sbHkgUGFydG9uIC1cbiAgICAgICAgICBKb2xlbmUgRG9uIEhlbmxleSAtIEJveXMgb2YgU3VtbWVyIERyLiBEcmUgZnQuIEVtaW5lbSAtIEZvcmdvdCBBYm91dFxuICAgICAgICAgIERyZSBEcmFrZSAtIEhvbGQgT24gV2UncmUgR29pbmcgSG9tZSBEcmFrZSAtIFBhc3Npb25mcnVpdCBEcmlmdGVycyAtXG4gICAgICAgICAgVW5kZXIgVGhlIEJvYXJkd2FsayBEdXN0eSBTcHJpbmdmaWVsZCAtIFNvbiBPZiBBIFByZWFjaGVyIE1hbiBFYWdsZXMgLVxuICAgICAgICAgIEhvdGVsIENhbGlmb3JuaWEgRWFnbGVzIC0gVGFrZSBpdCBFYXN5IEVsYXN0aWNhIC0gQ29ubmVjdGlvbiBFbHRvblxuICAgICAgICAgIEpvaG4gLSBCZW5uaWUgYW5kIHRoZSBKZXRzIEVsdG9uIEpvaG4gLSBDcm9jb2RpbGUgUm9jayBFbHRvbiBKb2huIC1cbiAgICAgICAgICBSb2NrZXQgTWFuIEVtaW5lbSAtIExvc2UgWW91cnNlbGYgRXJ5a2FoIEJhZHUgLSBPbiAmIE9uIEZlaXN0IC0gTXlcbiAgICAgICAgICBNb29uIE15IE1hbiBGaW5lIFlvdW5nIENhbm5pYmFscyAtIFNoZSBEcml2ZXMgTWUgQ3JhenkgRmlvbmEgQXBwbGUgLVxuICAgICAgICAgIENyaW1pbmFsIEZsYW1pbmcgTGlwcyAtIFNoZSBEb27igJl0IFVzZSBKZWxseSBGbGVldHdvb2QgTWFjIC0gRHJlYW1zXG4gICAgICAgICAgRmxlZXR3b29kIE1hYyAtIEdvIFlvdXIgT3duIFdheSBGbGVldHdvb2QgTWFjIC0gUmhpYW5ub24gRm9vIEZpZ2h0ZXJzXG4gICAgICAgICAgLSBCaWcgTWUgRm9vIEZpZ2h0ZXJzIC0gRXZlcmxvbmcgRm91bnRhaW5zIG9mIFdheW5lIC0gU3RhY2V54oCZcyBNb21cbiAgICAgICAgICBGcmF5IC0gSG93IFRvIFNhdmUgQSBMaWZlIEZ1Z2VlcyAtIEtpbGxpbmcgTWUgU29mdGx5IEdHIEFsbGluIC0gQml0ZVxuICAgICAgICAgIEl0LCBZb3UgU2N1bSBHYW5nIE9mIEZvdXIgLSBEYW1hZ2VkIEdvb2RzIEdhcnRoIEJyb29rcyAtIEZyaWVuZHMgSW5cbiAgICAgICAgICBMb3cgUGxhY2VzIEdlb3JnZSBNaWNoYWVsIC0gQ2FyZWxlc3MgV2hpc3BlciBHZW9yZ2UgTWljaGFlbCAtIEZhaXRoXG4gICAgICAgICAgR2ludXdpbmUgLSBQb255IEdsZW5uIEZyZXkgLSBUaGUgSGVhdCBpcyBPbiBHbG9yaWEgR2F5bm9yIC0gSSBXaWxsXG4gICAgICAgICAgU3Vydml2ZSBHbmFybHMgQmFya2xleSAtIENyYXp5IEdvYiAtIEkgSGVhciBZb3UgQ2FsbGluZyBHby1Hb+KAmXMgLSBXZVxuICAgICAgICAgIEdvdCB0aGUgQmVhdCBHcmVlbiBEYXkgLSBCYXNrZXQgQ2FzZSBHcmVlbiBEYXkgLSBMb25ndmlldyBHcmVlbiBEYXkgLVxuICAgICAgICAgIFdoZW4gSSBDb21lIEFyb3VuZCBHdW5zIE4nIFJvc2VzIC0gRG9uJ3QgQ3J5IEd1bnMgTicgUm9zZXMgLSBLbm9ja2lu4oCZXG4gICAgICAgICAgb24gSGVhdmVuJ3MgRG9vciBHdW5zIE4nIFJvc2VzIC0gU3dlZXQgQ2hpbGQgTycgTWluZSBIYWxsICYgT2F0ZXMgLVxuICAgICAgICAgIFJpY2ggR2lybCBIYW5vaSBSb2NrcyAtIERvbuKAmXQgWW91IEV2ZXIgTGVhdmUgTWUgSGFydmV5IERhbmdlciAtXG4gICAgICAgICAgRmxhZ3BvbGUgU2l0dGEgSG9sZSAtIENlbGVicml0eSBTa2luIEhvbGUgLSBNYWxpYnUgSG9sZSAtIFZpb2xldCBJY2VcbiAgICAgICAgICBDdWJlIC0gSXQgV2FzIEEgR29vZCBEYXkgSWdneSBQb3AgLSBMdXN0IGZvciBMaWZlIElnZ3kgUG9wIC0gVGhlXG4gICAgICAgICAgUGFzc2VuZ2VyIElOWFMgLSBOZXZlciBUZWFyIFVzIEFwYXJ0IEphbWVzIC0gTGFpZCBKYW5lJ3MgQWRkaWN0aW9uIC1cbiAgICAgICAgICBKYW5lIFNheXMgSmVzdXMgSm9uZXMgLSBSaWdodCBIZXJlIFJpZ2h0IE5vdyBKZXQgLSBBcmUgWW91IEdvbm5hIEJlIE15XG4gICAgICAgICAgR2lybD8gSmltbXkgRWF0IFdvcmxkIOKAkyBUaGUgTWlkZGxlIEpvYW4gSmV0dCAtIEkgTG92ZSBSb2NrICduJyBSb2xsXG4gICAgICAgICAgSm9obiBMZW5ub24gLSBJbWFnaW5lIEpvaG4gTWVsbGVuY2FtcCAtIEphY2sgJiBEaWFuZSBKb2hubnkgQ2FzaCAtXG4gICAgICAgICAgRm9sc29tIFByaXNvbiBCbHVlcyBKb3VybmV5IC0gRG9uJ3QgU3RvcCBCZWxpZXZpbmcgSm95IERpdmlzaW9uIC0gRGVhZFxuICAgICAgICAgIFNvdWxzIEpveSBEaXZpc2lvbiAtIExvdmUgV2lsbCBUZWFyIFVzIEFwYXJ0IEp1c3RpbiBCaWViZXIgLSBTb3JyeVxuICAgICAgICAgIEp1c3RpbiBUaW1iZXJsYWtlIC0gU2V4eUJhY2sgS2F0eSBQZXJyeSAtIExhc3QgRnJpZGF5IE5pZ2h0IChULkcuSS5GLilcbiAgICAgICAgICBLYXR5IFBlcnJ5IC0gVGVlbmFnZSBEcmVhbSBLZWxseSBDbGFya3NvbiAtIFNpbmNlIFUgQmVlbiBHb25lIEtlbm55XG4gICAgICAgICAgUm9nZXJzIC0gVGhlIEdhbWJsZXIgS2VubnkgUm9nZXJzICYgRG9sbHkgUGFydG9uIC0gSXNsYW5kcyBJbiB0aGVcbiAgICAgICAgICBTdHJlYW0gS2lkIFJvY2sgJiBTaGVyeWwgQ3JvdyAtIFBpY3R1cmUgS2lsbGVycyAtIEFsbCBUaGVzZSBUaGluZ3NcbiAgICAgICAgICBUaGF0IEkndmUgRG9uZSBLaWxsZXJzIC0gTXIuIEJyaWdodHNpZGUgS2luZ3NtZW4gLSBMb3VpZSBMb3VpZSBLaW5nc1xuICAgICAgICAgIG9mIExlb24gLSBTZXggb24gRmlyZSBLaW5ncyBvZiBMZW9uIC0gVXNlIFNvbWVib2R5IEtpbmtzIC0gQWxsIERheSBBbmRcbiAgICAgICAgICBBbGwgT2YgVGhlIE5pZ2h0IEtpc3MgLSBJIFdhcyBNYWRlIEZvciBMb3ZpbmcgWW91IEtpc3MgLSBSb2NrIGFuZCBSb2xsXG4gICAgICAgICAgQWxsIE5pdGUgS2lzcyAtIFN0cnV0dGVyIEt5bGllIE1pbm9ndWUgLSBDYW4ndCBHZXQgWW91IE91dCBPZiBNeSBIZWFkXG4gICAgICAgICAgTGFkeSBBbnRlYmVsbHVtIC0gTmVlZCBZb3UgTm93IExhZHkgR2FnYSAtIFlvdSBhbmQgSSBMYWR5IEdhZ2EgLVxuICAgICAgICAgIFNoYWxsb3cgTGUgVGlncmUgLSBEZWNlcHRhY29uIExlZCBaZXBwZWxpbiAtIEltbWlncmFudCBTb25nIExlZFxuICAgICAgICAgIFplcHBlbGluIC0gUm9jayBhbmQgUm9sbCBMZWQgWmVwcGVsaW4gLSBXaG9sZSBMb3R0YSBMb3ZlIExlbiAtIFN0ZWFsXG4gICAgICAgICAgTXkgU3Vuc2hpbmUgTGlsIE5hcyBYIC0gT2xkIFRvd24gUm9hZCBMaXQgLSBNeSBPd24gV29yc3QgRW5lbXkgTGl6XG4gICAgICAgICAgUGhhaXIgLSBGKioqIGFuZCBSdW4gTGl6em8gLSBUcnV0aCBIdXJ0cyBMb3UgUmVlZCAtIFBlcmZlY3QgRGF5IExvdVxuICAgICAgICAgIFJlZWQgLSBXYWxrIE9uIFRoZSBXaWxkIFNpZGUgTS5JLkEuIC0gUGFwZXIgUGxhbmVzIE1hZG9ubmEgLSBIb2xpZGF5XG4gICAgICAgICAgTWFkb25uYSAtIExpa2UgYSBWaXJnaW4gTWFkb25uYSAtIE1hdGVyaWFsIEdpcmwgTWFyaWFoIENhcmV5IC0gQWxsIElcbiAgICAgICAgICBXYW50IEZvciBYbWFzIElzIFlvdSBNYXJvb24gNSAtIFN1Z2FyIE1hcnkgSi4gQmxpZ2UgLSBGYW1pbHkgQWZmYWlyXG4gICAgICAgICAgTWF6enkgU3RhciAtIEZhZGUgSW50byBZb3UgTUM1IC0gS2ljayBPdXQgdGhlIEphbXMgTWVsaXNzYSBFdGhlcmlkZ2UgLVxuICAgICAgICAgIEknbSB0aGUgT25seSBPbmUgTWVuIFdpdGhvdXQgSGF0cyAtIFNhZmV0eSBEYW5jZSBNZXRhbGxpY2EgLSBFbnRlclxuICAgICAgICAgIFNhbmRtYW4gTWV0cmljIC0gR2ltbWUgU3ltcGF0aHkgTUdNVCAtIEVsZWN0cmljIEZlZWwgTUdNVCAtIEtpZHNcbiAgICAgICAgICBNaWNoYWVsIEphY2tzb24gLSBCZWF0IEl0IE1pY2hhZWwgSmFja3NvbiAtIEJpbGxpZSBKZWFuIE1pbGV5IEN5cnVzIC1cbiAgICAgICAgICBQYXJ0eSBpbiB0aGUgVVNBIE1pbGV5IEN5cnVzIC0gV2UgQ2Fu4oCZdCBTdG9wIE1pbGV5IEN5cnVzIC0gV3JlY2tpbmdcbiAgICAgICAgICBCYWxsIE1pc2ZpdHMgLSBIeWJyaWQgTW9tZW50cyBNaXNmaXRzIC0gTGFzdCBDYXJlc3MgTWlzZml0cyAtIFdoZXJlXG4gICAgICAgICAgRWFnbGVzIERhcmUgTW9kZXN0IE1vdXNlIC0gRmxvYXQgT24gTW9udGVsbCBKb3JkYW4gLSBUaGlzIGlzIEhvdyBXZSBEb1xuICAgICAgICAgIEl0IE1vdMO2cmhlYWQgLSBBY2Ugb2YgU3BhZGVzIE4qU3luYyAtIEJ5ZSBCeWUgQnllIE5hbmN5IFNpbmF0cmEgLVxuICAgICAgICAgIFRoZXNlIEJvb3RzIEFyZSBNYWRlIGZvciBXYWxraW4nIE5hdGFsaWUgSW1icnVnbGlhIC0gVG9ybiBOZWlsIERpYW1vbmRcbiAgICAgICAgICAtIEdpcmwsIFlvdeKAmWxsIEJlIGEgV29tYW4gU29vbiBOZWlsIERpYW1vbmQgLSBTd2VldCBDYXJvbGluZSBOZWlsXG4gICAgICAgICAgWW91bmcgLSBPbGQgTWFuIE5laWwgWW91bmcgLSBSb2NraW7igJkgaW4gdGhlIEZyZWUgV29ybGQgTmV3IFlvcmsgRG9sbHNcbiAgICAgICAgICAtIFBlcnNvbmFsaXR5IENyaXNpcyBOaWNrIEdpbGRlciAtIEhvdCBDaGlsZCBpbiB0aGUgQ2l0eSBOaW5lIEluY2hcbiAgICAgICAgICBOYWlscyAtIERlYWQgU291bHMgTmlydmFuYSAtIEFsbCBBcG9sb2dpZXMgTmlydmFuYSAtIEJyZWVkIE5pcnZhbmEgLVxuICAgICAgICAgIENvbWUgYXMgWW91IEFyZSBOaXJ2YW5hIC0gSW4gQmxvb20gTmlydmFuYSAtIE1vbGx5J3MgTGlwcyBOaXJ2YW5hIC1cbiAgICAgICAgICBTbWVsbHMgTGlrZSBUZWVuIFNwaXJpdCBOaXJ2YW5hIC0gVGVycml0b3JpYWwgUGlzc2luZ3MgTm8gRG91YnQgLSBKdXN0XG4gICAgICAgICAgYSBHaXJsIE9hc2lzIC0gQ2hhbXBhZ25lIFN1cGVybm92YSBPYXNpcyAtIERvbuKAmXQgTG9vayBCYWNrIGluIEFuZ2VyXG4gICAgICAgICAgT2FzaXMgLSBXb25kZXJ3YWxsIE9mZnNwcmluZyAtIENvbWUgT3V0IGFuZCBQbGF5IE9mZnNwcmluZyAtIFNlbGZcbiAgICAgICAgICBFc3RlZW0gT3RpcyBSZWRkaW5nIC0gU2l0dGlu4oCZIG9uIHRoZSBEb2NrIG9mIHRoZSBCYXkgT3V0a2FzdCAtIEhleSBZYSFcbiAgICAgICAgICBPdXRrYXN0IC0gTXMuIEphY2tzb24gT3p6eSBPc2JvdXJuZSAtIENyYXp5IFRyYWluIFBhdCBCZW5hdGFyIC0gSGl0IE1lXG4gICAgICAgICAgV2l0aCBZb3VyIEJlc3QgU2hvdCBQYXR0aSBTbWl0aCAtIEJlY2F1c2UgdGhlIE5pZ2h0IFBhdHRpIFNtaXRoIC1cbiAgICAgICAgICBHbG9yaWEgUGF2ZW1lbnQgLSBDdXQgWW91ciBIYWlyIFBlYXJsIEphbSAtIEFsaXZlIFBlYXJsIEphbSAtIEplcmVteVxuICAgICAgICAgIFBlYXJsIEphbSAtIExhc3QgS2lzcyBQaW5rIEZsb3lkIC0gQW5vdGhlciBCcmljayBpbiB0aGUgV2FsbCBQaW5rXG4gICAgICAgICAgRmxveWQgLSBXaXNoIFlvdSBXZXJlIEhlcmUgUGl4aWVzIC0gR2lnYW50aWMgUGl4aWVzIC0gV2hlcmUgaXMgTXkgTWluZFxuICAgICAgICAgIFBKIEhhcnZleSAtIFJpZCBvZiBNZSBQb2xpY2UgLSBNZXNzYWdlIGluIGEgQm90dGxlIFBvcnRpc2hlYWQgLSBHbG9yeVxuICAgICAgICAgIEJveCBQcmluY2UgLSBLaXNzIFByaW5jZSAtIExpdHRsZSBSZWQgQ29ydmV0dGUgUHJpbmNlIC0gUHVycGxlIFJhaW5cbiAgICAgICAgICBQcmluY2UgLSBXaGVuIFlvdSBXZXJlIE1pbmUgUHJvY2xhaW1lcnMgLSBJJ20gR29ubmEgQmUgKDUwMCBNaWxlcylcbiAgICAgICAgICBQdWxwIC0gQ29tbW9uIFBlb3BsZSBSLkUuTS4gLSBMb3NpbmcgTXkgUmVsaWdpb24gUmFkaW9oZWFkIC0gQ3JlZXBcbiAgICAgICAgICBSYWRpb2hlYWQgLSBGYWtlIFBsYXN0aWMgVHJlZXMgUmFkaW9oZWFkIC0gSGlnaCBhbmQgRHJ5IFJhZGlvaGVhZCAtXG4gICAgICAgICAgS2FybWEgUG9saWNlIFJhZ2UgQWdhaW5zdCB0aGUgTWFjaGluZSAtIEtpbGxpbmcgaW4gdGhlIE5hbWUgUmFtb25lcyAtXG4gICAgICAgICAgQmxpdHprcmllZyBCb3AgUmFtb25lcyAtIEkgV2FubmEgQmUgU2VkYXRlZCBSYW5jaWQgLSBSdWJ5IFNvaG8gUmFuY2lkXG4gICAgICAgICAgLSBTYWx2YXRpb24gUmFuY2lkIC0gVGltZSBCb21iIFJlZCBIb3QgQ2hpbGkgUGVwcGVycyAtIERhbmkgQ2FsaWZvcm5pYVxuICAgICAgICAgIFJlZCBIb3QgQ2hpbGkgUGVwcGVycyAtIEdpdmUgSXQgQXdheSBSZWQgSG90IENoaWxpIFBlcHBlcnMgLSBTY2FyXG4gICAgICAgICAgVGlzc3VlIFJlZCBIb3QgQ2hpbGkgUGVwcGVycyAtIFNvdWwgdG8gU3F1ZWV6ZSBSZWQgSG90IENoaWxpIFBlcHBlcnMgLVxuICAgICAgICAgIFVuZGVyIHRoZSBCcmlkZ2UgUm9ieW4gLSBEYW5jaW5nIE9uIE15IE93biBSb2xsaW5nIFN0b25lcyAtIEJlYXN0IG9mXG4gICAgICAgICAgQnVyZGVuIFJvbGxpbmcgU3RvbmVzIC0gSG9ua3kgVG9uayBXb21lbiBSb2xsaW5nIFN0b25lcyAtIEp1bXBpbicgSmFja1xuICAgICAgICAgIEZsYXNoIFJ1bmF3YXlzIC0gQ2hlcnJ5IEJvbWIgUnVwZXJ0IEhvbG1lcyAtIEVzY2FwZSAoVGhlIFBpw7FhIENvbGFkYVxuICAgICAgICAgIFNvbmcpIFNhbnRpZ29sZCAtIEwuRS5TLiBBcnRpc3RlcyBTZXJlbmEgUnlkZXIgLSBTdG9tcGEgU2V4IFBpc3RvbHMgLVxuICAgICAgICAgIEFuYXJjaHkgaW4gdGhlIFVLIFNleCBQaXN0b2xzIC0gR29kIFNhdmUgdGhlIFF1ZWVuIFNoYW5pYSBUd2FpbiAtIE1hbiFcbiAgICAgICAgICBJIEZlZWwgTGlrZSBhIFdvbWFuIFNoYW5pYSBUd2FpbiAtIFRoYXQgRG9uJ3QgSW1wcmVzcyBNZSBNdWNoIFNoZXJ5bFxuICAgICAgICAgIENyb3cgLSBBbGwgSSBXYW5uYSBEbyBTaGVyeWwgQ3JvdyAtIElmIEl0IE1ha2VzIFlvdSBIYXBweSBTbG9hbiAtIFRoZVxuICAgICAgICAgIEdvb2QgaW4gRXZlcnlvbmUgU2xvYW4gLSBNb25leSBDaXR5IE1hbmlhY3MgU2xvYW4gLSBVbmRlcndoZWxtZWRcbiAgICAgICAgICBTbWFzaGluZyBQdW1wa2lucyAtIDE5NzkgU21hc2hpbmcgUHVtcGtpbnMgLSBDaGVydWIgUm9jayBTbWFzaGluZ1xuICAgICAgICAgIFB1bXBraW5zIC0gVG9kYXkgU21pdGhzIC0gVGhlcmUgaXMgYSBMaWdodCBUaGF0IE5ldmVyIEdvZXMgT3V0IFNtaXRoc1xuICAgICAgICAgIC0gVGhpcyBDaGFybWluZyBNYW4gU25vb3AgRG9nZ3kgRG9nZyAtIEdpbiAmIEp1aWNlIFNvbmljIFlvdXRoIC0gMTAwJVxuICAgICAgICAgIFNwaWNlIEdpcmxzIC0gV2FubmFiZSBTdGVhbGVycyBXaGVlbCAtIFN0dWNrIGluIHRoZSBNaWRkbGUgV2l0aCBZb3VcbiAgICAgICAgICBTdGVwcGVud29sZiAtIEJvcm4gdG8gYmUgV2lsZCBTdG9vZ2VzIC0gSSBXYW5uYSBCZSBZb3VyIERvZyBTdG9vZ2VzIC1cbiAgICAgICAgICBTZWFyY2ggYW5kIERlc3Ryb3kgU3Rvb2dlcyAtIFQuVi4gRXllIFN0cm9rZXMgLSBMYXN0IE5pdGUgU3Ryb2tlcyAtXG4gICAgICAgICAgUmVwdGlsaWEgU3Ryb2tlcyAtIFlvdSBPbmx5IExpdmUgT25jZSBTdWJsaW1lIC0gV2hhdCBJIEdvdCBTdXByZW1lcyAtXG4gICAgICAgICAgQ2Fu4oCZdCBIdXJyeSBMb3ZlIFN1cnZpdm9yIC0gRXllIG9mIHRoZSBUaWdlciBULlJleCAtIDIwdGggQ2VudHVyeSBCb3lcbiAgICAgICAgICBULlJleCAtIENoaWxkcmVuIG9mIHRoZSBSZXZvbHV0aW9uIFQuUmV4IC0gR2V0IEl0IE9uIChCYW5nIGEgR29uZylcbiAgICAgICAgICBUYWxraW5nIEhlYWRzIC0gUHN5Y2hvIEtpbGxlciBUYWxraW5nIEhlYWRzIC0gVGhpcyBNdXN0IEJlIHRoZSBQbGFjZVxuICAgICAgICAgIFRheWxvciBTd2lmdCAtIFNoYWtlIEl0IE9mZiBUYXlsb3IgU3dpZnQg4oCTIFdlIEFyZSBOZXZlciBHZXR0aW5nIEJhY2tcbiAgICAgICAgICBUb2dldGhlciBUZW1wbGUgb2YgdGhlIERvZyAtIEh1bmdlciBTdHJpa2UgVGVtcHRhdGlvbnMgLSBNeSBHaXJsXG4gICAgICAgICAgVGVtcHRhdGlvbnMgLSBBaW7igJl0IFRvbyBQcm91ZCBUbyBCZWcgVGhpcmQgRXllIEJsaW5kIC0gU2VtaS1DaGFybWVkXG4gICAgICAgICAgTGlmZSBUaHJ1c2ggSGVybWl0IC0gRnJvbSB0aGUgQmFjayBvZiB0aGUgRmlsbSBUaW5hIFR1cm5lciAtIFByb3VkXG4gICAgICAgICAgTWFyeSBUTEMgLSBXYXRlcmZhbGxzIFRMQyAtIE5vIFNjcnVicyBUb20gUGV0dHkgLSBEb27igJl0IERvIE1lIExpa2VcbiAgICAgICAgICBUaGF0IFRvbSBQZXR0eSAtIEZyZWUgRmFsbGluJyBUb20gUGV0dHkgLSBNYXJ5IEphbmXigJlzIExhc3QgRGFuY2UgVG9tXG4gICAgICAgICAgUGV0dHkgLSBZb3UgRG9uJ3QgS25vdyBIb3cgaXQgRmVlbHMgVHJhZ2ljYWxseSBIaXAgLSBBaGVhZCBieSBhXG4gICAgICAgICAgQ2VudHVyeSBUcmFnaWNhbGx5IEhpcCAtIEJvYmNheWdlb24gVHJhZ2ljYWxseSBIaXAgLSBOZXcgT3JsZWFucyBpc1xuICAgICAgICAgIFNpbmtpbmcgVHJhZ2ljYWxseSBIaXAgLSBQb2V0cyBVMiAtIFdpdGggb3IgV2l0aG91dCBZb3UgVW5kZXJ0b25lcyAtXG4gICAgICAgICAgVGVlbmFnZSBLaWNrcyBVcmdlIE92ZXJraWxsIC0gR2lybCwgWW914oCZbGwgQmUgYSBXb21hbiBTb29uIFZhbiBIYWxlbiAtXG4gICAgICAgICAgUnVubmlu4oCZIHdpdGggdGhlIERldmlsIFZhbmlsbGEgSWNlIC0gSWNlIEljZSBCYWJ5IFZhc2VsaW5lcyAtIE1vbGx54oCZc1xuICAgICAgICAgIExpcHMgVmVsdmV0IFVuZGVyZ3JvdW5kIC0gV2FpdGluZyBmb3IgTXkgTWFuIFZpb2xlbnQgRmVtbWVzIC0gQmxpc3RlclxuICAgICAgICAgIEluIHRoZSBTdW4gV2FyIC0gTG93cmlkZXIgV2Vla25kIC0gQ2FuJ3QgRmVlbCBNeSBGYWNlIFdlZXplciAtIEVsXG4gICAgICAgICAgU2NvcmNobyBXZWV6ZXIgLSBIYXNoIFBpcGUgV2VlemVyIC0gTXkgTmFtZSBpcyBKb25hcyBXZWV6ZXIgLSBTYXkgSXRcbiAgICAgICAgICBBaW4ndCBTbyBXZWV6ZXIgLSBUaXJlZCBvZiBTZXggV2VlemVyIC0gVW5kb25lIHRoZSBTd2VhdGVyIFNvbmcgV2VpcmRcbiAgICAgICAgICBBbCBZYW5rb3ZpYyAtIEFtaXNoIFBhcmFkaXNlIFdlaXJkIEFsIFlhbmtvdmljIC0gRWF0IEl0IFdlaXJkIEFsXG4gICAgICAgICAgWWFua292aWMgLSBMaWtlIGEgU3VyZ2VvbiBXZWlyZCBBbCBZYW5rb3ZpYyAtIFJ5ZSBvciB0aGUgS2Fpc2VyIFdlaXJkXG4gICAgICAgICAgQWwgWWFua292aWMgLSBTbWVsbHMgTGlrZSBOaXJ2YW5hIFdoYW0hIC0gTGFzdCBDaHJpc3RtYXMgV2hlYXR1cyAtXG4gICAgICAgICAgVGVlbmFnZSBEaXJ0YmFnIFdoaXRlIFN0cmlwZXMgLSBTZXZlbiBOYXRpb24gQXJteSBXaGl0ZSBTdHJpcGVzIC0gRmVsbFxuICAgICAgICAgIGluIExvdmUgd2l0aCBhIEdpcmwgV2hpdGVzbmFrZSAtIEhlcmUgSSBHbyBBZ2FpbiBZZWFoIFllYWggWWVhaHMgLVxuICAgICAgICAgIEdvbGQgTGlvbiBZZWFoIFllYWggWWVhaHMgLSBNYXBzIFlvdW5nIE1DIC0gQnVzdCBhIE1vdmVcbiAgICAgICAgPC9wPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFscGhhYmV0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/list.js */"));
  }

}

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/list.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/braedencraig/Desktop/GELK-SITE/pages/list.js */"./pages/list.js");


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
//# sourceMappingURL=list.js.map