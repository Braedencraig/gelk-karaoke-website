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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
  color: 'white',
  background: 'black'
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
      className: "jsx-1247276444",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("a", {
      onClick: this.scrollToTop,
      className: "jsx-1247276444",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-1247276444",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Scroll back to top")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1247276444",
      __self: this
    }, "p.jsx-1247276444{color:white;margin:0 auto;width:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NvQixBQUd5QixZQUNFLGNBQ0YsWUFDZCIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQWJzb2x1dGUgfSBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIFNjcm9sbCBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IHtcbiAgTGluayxcbiAgRWxlbWVudCxcbiAgRXZlbnRzLFxuICBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCxcbiAgc2Nyb2xsU3B5LFxuICBzY3JvbGxlcixcbn0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcblxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XG4gIGNvbG9yOiAnd2hpdGUnLFxuICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxufTtcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgIHNjcm9sbC5zY3JvbGxUb1RvcCgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17Zm9vdGVyU3R5bGV9PlxuICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNjcm9sbFRvVG9wfT5cbiAgICAgICAgICA8cD5TY3JvbGwgYmFjayB0byB0b3A8L3A+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/Footer.js */"));
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
  margin: -9,
  background: 'black',
  height: '150vh',
  background: '#000 url(https://i.etsystatic.com/9125312/r/il/fc23d1/563516299/il_570xN.563516299_hy4m.jpg)  center no-repeat',
  backgroundSize: 'cover',
  margin: 0
};

const Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  className: "jsx-1530463628",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-1530463628",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1530463628",
  __self: undefined
}, "body{background:#000;box-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9NeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnVCLEFBR3lCLGdCQUNNLHNCQUNiLFNBQ0MsVUFDWiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBUZXN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEhlYWRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNvbnN0IGxheW91dFN0eWxlID0ge1xuICBtYXJnaW46IC05LFxuICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICBoZWlnaHQ6ICcxNTB2aCcsXG4gIGJhY2tncm91bmQ6XG4gICAgJyMwMDAgdXJsKGh0dHBzOi8vaS5ldHN5c3RhdGljLmNvbS85MTI1MzEyL3IvaWwvZmMyM2QxLzU2MzUxNjI5OS9pbF81NzB4Ti41NjM1MTYyOTlfaHk0bS5qcGcpICBjZW50ZXIgbm8tcmVwZWF0JyxcbiAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gIG1hcmdpbjogMCxcbn07XG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcbiAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICAgICAgPFRlc3RIZWFkZXIgLz5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/MyLayout.js */"), __jsx("div", {
  style: layoutStyle,
  className: "jsx-1530463628",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx(_components_TestHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), props.children, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
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
  className: "jsx-1208584401" + " " + 'wrapper',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1208584401" + " " + 'logoNeon',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("b", {
  className: "jsx-1208584401",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Good ", __jsx("span", {
  className: "jsx-1208584401",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Enough "), "Li", __jsx("span", {
  className: "jsx-1208584401",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "ve"), " Karaoke"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1208584401",
  __self: undefined
}, "@import url(//fonts.googleapis.com/css?family=Vibur);@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');.logoNeon.jsx-1208584401{text-align:center;width:65%;height:250px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:150px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.logoNeon.jsx-1208584401 b.jsx-1208584401{font:400 19vh 'Monoton';color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444,0 0 0.5em #ff4444, 0 0 0.1em #ff4444,0 10px 3px #000;}.logoNeon.jsx-1208584401 b.jsx-1208584401 span.jsx-1208584401{-webkit-animation:blink-jsx-1208584401 linear infinite 2s;animation:blink-jsx-1208584401 linear infinite 2s;}.logoNeon.jsx-1208584401 b.jsx-1208584401 span.jsx-1208584401:nth-of-type(2){-webkit-animation:blink-jsx-1208584401 linear infinite 3s;animation:blink-jsx-1208584401 linear infinite 3s;}@-webkit-keyframes blink-jsx-1208584401{78%{color:inherit;text-shadow:inherit;}79%{color:#333;}80%{text-shadow:none;}81%{color:inherit;text-shadow:inherit;}82%{color:#333;text-shadow:none;}83%{color:inherit;text-shadow:inherit;}92%{color:#333;text-shadow:none;}92.5%{color:inherit;text-shadow:inherit;}}@keyframes blink-jsx-1208584401{78%{color:inherit;text-shadow:inherit;}79%{color:#333;}80%{text-shadow:none;}81%{color:inherit;text-shadow:inherit;}82%{color:#333;text-shadow:none;}83%{color:inherit;text-shadow:inherit;}92%{color:#333;text-shadow:none;}92.5%{color:inherit;text-shadow:inherit;}}.wrapper.jsx-1208584401{margin:0 auto;max-width:960px;padding:0 2%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9OZW9uTG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTZ0IsQUFFMkQsQUFDc0IsQUFDQyxBQUd2RCxBQVlNLEFBTVcsQUFHQSxBQUluQixBQUlILEFBR00sQUFHSCxBQUlILEFBSUcsQUFJSCxBQUlHLEFBTUYsV0EzQmQsQUFVbUIsQUFRQSxHQXRCRyxBQVVBLEFBUUEsQUFRQSxBQU1OLEdBekJoQixDQWhDVSxNQVlDLElBWEUsQUF1Q2IsQUFRQSxFQVVhLElBaENiLEFBVUEsQUFRQSxBQVFBLENBdENvQyxNQVp4QixFQXlEZCxVQXhEb0Isa0JBQ1osTUFDQyxPQUNDLFFBQ0ssYUFDSSxHQVVuQixBQUdBLDhCQU5BLG9EQU5BIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9OZW9uTG9nby5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5lb25Mb2dvID0gKCkgPT4gKFxuICA8PlxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvTmVvbic+XG4gICAgICAgIDxiPlxuICAgICAgICAgIEdvb2QgPHNwYW4+RW5vdWdoIDwvc3Bhbj5MaTxzcGFuPnZlPC9zcGFuPiBLYXJhb2tlXG4gICAgICAgIDwvYj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1WaWJ1cik7XG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9ub3RvbiZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgLmxvZ29OZW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAxNTBweDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG4gICAgICAubG9nb05lb24gYiB7XG4gICAgICAgIGZvbnQ6IDQwMCAxOXZoICdNb25vdG9uJztcbiAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICNmZjQ0NDQsIDAgMCAwLjVlbSAjZmY0NDQ0LFxuICAgICAgICAgIDAgMCAwLjFlbSAjZmY0NDQ0LCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICB9XG4gICAgICAubG9nb05lb24gYiBzcGFuIHtcbiAgICAgICAgYW5pbWF0aW9uOiBibGluayBsaW5lYXIgaW5maW5pdGUgMnM7XG4gICAgICB9XG4gICAgICAubG9nb05lb24gYiBzcGFuOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgYW5pbWF0aW9uOiBibGluayBsaW5lYXIgaW5maW5pdGUgM3M7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAgICAgNzglIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICA3OSUge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIDgwJSB7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgODElIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICA4MiUge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIDgzJSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgOTIlIHtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICA5Mi41JSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmVvbkxvZ287XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/NeonLogo.js */"));

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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const TestHeader = _ => {
  const {
    0: scrolled,
    1: setScrolled
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('navBar', {
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
    className: "jsx-1087405890" + " " + (classes || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("nav", {
    className: "jsx-1087405890" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    className: "jsx-1087405890" + " " + 'singMan',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("g", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("svg", {
    fill: "#FFFFFF",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    "enable-background": "new 0 0 100 100",
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M33.2001953,90.6738281c0.1665039-0.1660156,0.25-0.3671875,0.25-0.5996094  c0-0.2675781-0.0834961-0.4824219-0.25-0.6503906c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2001953,0-0.3833008,0.0839844-0.550293,0.25c-0.1665039,0.1679688-0.25,0.3828125-0.25,0.6503906  c0,0.2324219,0.0834961,0.4335938,0.25,0.5996094c0.1669922,0.1679688,0.3500977,0.25,0.550293,0.25  C32.8334961,90.9238281,33.0332031,90.8417969,33.2001953,90.6738281z M33.3500977,84.7246094  c-0.2333984-0.1679688-0.4501953-0.25-0.6499023-0.25c-0.1669922,0-0.3666992,0.0820313-0.6000977,0.25  c-0.1665039,0.2324219-0.25,0.4492188-0.25,0.6503906c0,0.1992188,0.0834961,0.3828125,0.25,0.5488281  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25c0.2666016,0,0.4833984-0.0820313,0.6499023-0.25  c0.1665039-0.1660156,0.25-0.3496094,0.25-0.5488281C33.6000977,85.1738281,33.5166016,84.9570313,33.3500977,84.7246094z   M33.7001953,80.6738281c0-0.2324219-0.0834961-0.4335938-0.25-0.5996094c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2666016,0-0.4833984,0.0839844-0.6499023,0.25c-0.1669922,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2011719,0.0830078,0.3828125,0.25,0.5507813c0.1665039,0.1660156,0.3833008,0.25,0.6499023,0.25  c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25C33.6166992,81.0566406,33.7001953,80.875,33.7001953,80.6738281z   M33.7998047,75.875c0-0.2011719-0.0830078-0.3847656-0.25-0.5507813c-0.1665039-0.1660156-0.3662109-0.25-0.5996094-0.25  c-0.2666016,0-0.4667969,0.0839844-0.6000977,0.25c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5507813  c0,0.265625,0.0834961,0.4824219,0.25,0.6484375c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25  c0.1665039,0,0.3662109-0.0820313,0.5996094-0.25C33.7167969,76.2910156,33.7998047,76.0742188,33.7998047,75.875z   M33.7001953,70.625c-0.1337891-0.1679688-0.3334961-0.25-0.6000977-0.25c-0.2333984,0-0.4165039,0.0820313-0.550293,0.25  c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5488281c0,0.2675781,0.0834961,0.484375,0.25,0.6503906  c0.1669922,0.1660156,0.3500977,0.25,0.550293,0.25c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25  c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906C33.9501953,70.9414063,33.8666992,70.7578125,33.7001953,70.625z   M59.2998047,48.0234375c-0.0664063,0.234375-0.0498047,0.4511719,0.050293,0.6503906L59.5,48.9746094  c0.2001953,0.2988281,0.4833984,0.4492188,0.8500977,0.4492188L60.7001953,49.375  c0.199707-0.1015625,0.3496094-0.2675781,0.449707-0.5c0.0668945-0.234375,0.050293-0.4511719-0.0498047-0.6503906  l-0.1499023-0.3007813c-0.2666016-0.5-0.6503906-0.6328125-1.1503906-0.4003906  C59.5332031,47.625,59.3666992,47.7910156,59.2998047,48.0234375z M55.2001953,38.4746094  c-0.5,0.2988281-0.6337891,0.6835938-0.4003906,1.1503906l3.3500977,6.5996094c0.1665039,0.3320313,0.4335938,0.5,0.800293,0.5  L59.2998047,46.625c0.5336914-0.2675781,0.6835938-0.6503906,0.4501953-1.1503906L56.3500977,38.875  C56.0834961,38.375,55.7001953,38.2402344,55.2001953,38.4746094z M69.7001953,22.2246094  c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094  c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25  c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906  c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25C69.25,22.4746094,69.4667969,22.390625,69.7001953,22.2246094z   M20.6499023,28.7734375l1.550293,1.75c0.5332031,0.4335938,1.2832031,0.8007813,2.25,1.1015625l-8.5,10.0488281  l-2.1000977-1.4492188L20.6499023,28.7734375z M22.75,24.0234375c0.6333008-0.7324219,1.5-1.1660156,2.6000977-1.2988281  c1.0664063-0.0996094,1.9663086,0.1503906,2.699707,0.75c0.800293,0.6328125,1.25,1.4667969,1.3500977,2.5  s-0.1665039,1.9335938-0.7998047,2.6992188c-0.6665039,0.8339844-1.5,1.3007813-2.5,1.4003906L25.2998047,30.125  c-0.7998047-0.1015625-1.4663086-0.4179688-2-0.9511719c-0.3330078-0.265625-0.6162109-0.6171875-0.8496094-1.0488281  l-0.050293-0.0507813c-0.1665039-0.3671875-0.2832031-0.8164063-0.3500977-1.3496094  C21.9501953,25.6582031,22.1835938,24.7578125,22.75,24.0234375z M44.1499023,11.375  c-0.4331055-0.3339844-0.8334961-0.2832031-1.199707,0.1484375c-0.3334961,0.4335938-0.2836914,0.8339844,0.1499023,1.2011719  l0.3500977,0.3496094c0.4663086,0.4003906,0.8496094,0.9160156,1.1499023,1.5507813  c0.1665039,0.3320313,0.4331055,0.5,0.7998047,0.5l0.3999023-0.1015625c0.2001953-0.0996094,0.3500977-0.265625,0.4501953-0.5  c0.0664063-0.2324219,0.0498047-0.4492188-0.0498047-0.6484375c-0.4667969-0.8007813-0.9667969-1.4667969-1.5-2  C44.5332031,11.6738281,44.3500977,11.5078125,44.1499023,11.375z M34.2001953,9.2246094  c1.4663086-0.9003906,3.1333008-1.3496094,5-1.3496094c2.6333008,0,4.8833008,0.9160156,6.75,2.75  C47.8164063,12.5566406,48.75,14.8066406,48.75,17.375c0,0.765625-0.0834961,1.5488281-0.25,2.3496094  c-0.4335938,1.6992188-1.2832031,3.1992188-2.5498047,4.5c-1.8666992,1.8320313-4.1166992,2.75-6.75,2.75  c-2.6669922,0-4.9169922-0.9335938-6.75-2.8007813c-1.8666992-1.8320313-2.800293-4.0996094-2.800293-6.7988281  c0-2.6015625,0.9335938-4.8515625,2.800293-6.75C33.0166016,10.0234375,33.6000977,9.5566406,34.2001953,9.2246094z   M41.0498047,9.875l-0.699707-0.1015625c-0.2333984,0-0.4335938,0.0839844-0.6000977,0.25  C39.5834961,10.1914063,39.5,10.390625,39.5,10.625c0,0.2324219,0.0834961,0.4492188,0.25,0.6484375  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25h0.25l0.25,0.0507813c0.3999023,0,0.6665039-0.2167969,0.7998047-0.6503906  c0.0668945-0.2324219,0.0336914-0.4492188-0.1000977-0.6503906C41.4501953,10.0742188,41.2832031,9.9414063,41.0498047,9.875z   M83.3500977,11.2246094L86,18.375L55.1499023,33.2734375C55.25,33.4414063,55.3500977,33.640625,55.4501953,33.875  l30.699707,58.1484375h-7.6000977l-19.449707-32l-22.050293,12.4511719  c-0.2666016,0.1660156-0.3999023,0.3828125-0.3999023,0.6503906l-1.25,19l-5.75-0.1015625l0.800293-23.1992188l18.449707-11.25  c0.3999023-0.2324219,0.5166016-0.5839844,0.3500977-1.0507813l-6.1000977-16.0488281c-0.199707-0.4003906-0.3666992-0.734375-0.5-1  L32.75,49.375L21.0498047,38.1738281l3.3500977-4.1992188L31.25,40.875c0.2001953,0.1992188,0.4165039,0.2832031,0.6499023,0.25  c0.2333984,0,0.4501953-0.1015625,0.6499023-0.3007813l9.1000977-11L83.3500977,11.2246094z M74.2001953,19.5742188  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25  c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094  c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25  c0.2001953,0,0.4169922-0.0839844,0.6503906-0.25C74.1166992,19.9902344,74.2001953,19.7734375,74.2001953,19.5742188z   M77.6000977,18.4746094c0.1665039,0,0.3666992-0.0839844,0.6000977-0.25c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.2011719-0.4335938-0.3007813-0.6000977-0.3007813  c-0.2333984,0-0.4335938,0.0996094-0.6000977,0.3007813c-0.1665039,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2675781,0.0834961,0.4824219,0.25,0.6503906C77.1665039,18.390625,77.3666992,18.4746094,77.6000977,18.4746094z   M82.3500977,16.1738281c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906c0-0.2324219-0.0834961-0.4316406-0.25-0.5996094  c-0.1665039-0.1660156-0.3666992-0.25-0.6000977-0.25c-0.2001953,0-0.3833008,0.0839844-0.5498047,0.25  c-0.1669922,0.1679688-0.25,0.3671875-0.25,0.5996094c0,0.2675781,0.0830078,0.484375,0.25,0.6503906  c0.1665039,0.1679688,0.3496094,0.25,0.5498047,0.25C81.9833984,16.4238281,82.1835938,16.3417969,82.3500977,16.1738281z",
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })))), __jsx("input", {
    type: "checkbox",
    id: "menu-toggle",
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "menu-toggle",
    className: "jsx-1087405890" + " " + 'label-toggle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("ul", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Home"))), __jsx("li", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "About"))), __jsx("li", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shows",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Shows"))), __jsx("li", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Song List"))), __jsx("li", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Media"))), __jsx("li", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-1087405890",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Contact")))))), __jsx("header", {
    className: "jsx-1087405890" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1087405890",
    __self: undefined
  }, "@import url(//fonts.googleapis.com/css?family=Vibur);@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');.navBar.jsx-1087405890{-webkit-transition:background-color 0.2s;transition:background-color 0.2s;}.navBar.scrolled.jsx-1087405890{background-color:rgba(0,0,0,0.9);}.singMan.jsx-1087405890{-webkit-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);}h1.jsx-1087405890{font-size:3em;padding:3em 0 1em 0;}.navBar.jsx-1087405890{position:fixed;right:0;left:0;}.logo.jsx-1087405890{background-color:white;border-radius:50px;display:inline-block;height:45px;margin:1em 0;width:45px;}.logo.jsx-1087405890:hover{background-color:#fee;box-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444,0 0 0.5em #ff4444, 0 0 0.1em #ff4444,0 10px 3px #000;}.wrapper.jsx-1087405890{margin:0 auto;max-width:960px;padding:0 2%;}nav.jsx-1087405890 ul.jsx-1087405890{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;list-style-type:none;width:50%;}nav.jsx-1087405890 ul.jsx-1087405890 a.jsx-1087405890{font-family:'Oswald';color:white;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;}nav.jsx-1087405890 ul.jsx-1087405890 a.jsx-1087405890:hover{color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444,0 0 0.5em #ff4444, 0 0 0.1em #ff4444,0 10px 3px #000;}li.jsx-1087405890{display:inline-block;}#menu-toggle.jsx-1087405890{display:none;}.label-toggle.jsx-1087405890{display:none;}.wrapper.jsx-1087405890{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:768px){nav.jsx-1087405890 ul.jsx-1087405890 a.jsx-1087405890{color:#53354a;}ul.jsx-1087405890{background-color:#e84545;display:block;height:0;list-style-type:none;opacity:0;text-align:center;-webkit-transition:all 1s ease;transition:all 1s ease;width:100%;visibility:hidden;}li.jsx-1087405890{border-bottom:2px solid #53354a;color:#53354a;display:block;font-size:1.5em;padding:2em 0;}#menu-toggle.jsx-1087405890:checked~ul.jsx-1087405890{opacity:1;height:100vh;visibility:visible;}.label-toggle.jsx-1087405890{background:linear-gradient( to bottom, #e84545 0%, #e84545 20%, transparent 20%, transparent 40%, #e84545 40%, #e84545 60%, transparent 60%, transparent 80%, #e84545 80%, #e84545 100% );cursor:pointer;display:block;float:right;height:35px;margin-top:1em;width:35px;}.wrapper.jsx-1087405890{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9UZXN0SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGa0IsQUFHeUQsQUFDc0IsQUFDQyxBQUdwQyxBQUdHLEFBSVosQUFJWixBQUtDLEFBTVEsQUFTRCxBQU1SLEFBTUQsQUFPUSxBQU9YLEFBTVcsQUFJUixBQUlBLEFBSU0sQUFRRCxBQUlXLEFBWU8sQUFRdEIsQUFrQlQsQUFXYSxVQTVCRCxDQWpEbUIsRUFTdEMsQUFJQSxDQTVEc0IsQUEwQkosQUE4Q2QsQUFxREEsQ0F4SE0sTUFrQ0ksQUFhZCxDQS9Cc0MsQ0FmN0IsQUFLWSxBQXNGSSxFQXJCTCxLQXJFcEIsQUFvQmUsRUE2REssQ0FoR2xCLEFBZ0RxQixDQXZDdkIsS0E0RWUsR0FqRVEsQUFzRm5CLENBdEVKLEdBNkRvQixFQVhPLFlBWUwsR0E3RVIsTUFrRUUsS0ExRmQsQUEyQzhCLENBbEJqQixDQTZFSyxHQVhJLElBdkNHLEtBMUJkLEVBbkJiLEFBZ0dJLEdBNUJXLElBaUJjLEVBakU3QixlQWdDQSxVQTFCQSxpQkFvQkEsVUF3Q2lCLFdBQ08sS0FsQlEsYUFtQjVCLE1BK0JpQixHQWxGRSxZQW1GSCxTQWxGUixLQW1GTSxLQWxGbEIsT0FtRmtCLFlBQ0csZUFDSixXQUNiLGlCQXZESiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvVGVzdEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTmVvbkxvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9OZW9uTG9nbyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRlc3RIZWFkZXIgPSBfID0+IHtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnbmF2QmFyJywge1xuICAgIHNjcm9sbGVkOiBzY3JvbGxlZCxcbiAgfSk7XG4gIHVzZUVmZmVjdChfID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSBfID0+IHtcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAxKSB7XG4gICAgICAgIHNldFNjcm9sbGVkKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2Nyb2xsZWQoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuIF8gPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgd2lkdGg9JzYwJ1xuICAgICAgICAgICAgaGVpZ2h0PSc2MCdcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA2MCA2MCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ01hbidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgLy8gdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTAgNTApIHNjYWxlKC0wLjY5IDAuNjkpIHJvdGF0ZSgwKSB0cmFuc2xhdGUoLTUwIC01MCknXG4gICAgICAgICAgICAvLyBzdHlsZT0nZmlsbDojRkZGRkZGJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgZmlsbD0nI0ZGRkZGRidcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgdmVyc2lvbj0nMS4xJ1xuICAgICAgICAgICAgICAgIHg9JzBweCdcbiAgICAgICAgICAgICAgICB5PScwcHgnXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDEwMCAxMDAnXG4gICAgICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgMTAwIDEwMCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICBkPSdNMzMuMjAwMTk1Myw5MC42NzM4MjgxYzAuMTY2NTAzOS0wLjE2NjAxNTYsMC4yNS0wLjM2NzE4NzUsMC4yNS0wLjU5OTYwOTQgIGMwLTAuMjY3NTc4MS0wLjA4MzQ5NjEtMC40ODI0MjE5LTAuMjUtMC42NTAzOTA2Yy0wLjE2Njk5MjItMC4xNjYwMTU2LTAuMzY2Njk5Mi0wLjI1LTAuNjAwMDk3Ny0wLjI1ICBjLTAuMjAwMTk1MywwLTAuMzgzMzAwOCwwLjA4Mzk4NDQtMC41NTAyOTMsMC4yNWMtMC4xNjY1MDM5LDAuMTY3OTY4OC0wLjI1LDAuMzgyODEyNS0wLjI1LDAuNjUwMzkwNiAgYzAsMC4yMzI0MjE5LDAuMDgzNDk2MSwwLjQzMzU5MzgsMC4yNSwwLjU5OTYwOTRjMC4xNjY5OTIyLDAuMTY3OTY4OCwwLjM1MDA5NzcsMC4yNSwwLjU1MDI5MywwLjI1ICBDMzIuODMzNDk2MSw5MC45MjM4MjgxLDMzLjAzMzIwMzEsOTAuODQxNzk2OSwzMy4yMDAxOTUzLDkwLjY3MzgyODF6IE0zMy4zNTAwOTc3LDg0LjcyNDYwOTQgIGMtMC4yMzMzOTg0LTAuMTY3OTY4OC0wLjQ1MDE5NTMtMC4yNS0wLjY0OTkwMjMtMC4yNWMtMC4xNjY5OTIyLDAtMC4zNjY2OTkyLDAuMDgyMDMxMy0wLjYwMDA5NzcsMC4yNSAgYy0wLjE2NjUwMzksMC4yMzI0MjE5LTAuMjUsMC40NDkyMTg4LTAuMjUsMC42NTAzOTA2YzAsMC4xOTkyMTg4LDAuMDgzNDk2MSwwLjM4MjgxMjUsMC4yNSwwLjU0ODgyODEgIGMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzY2Njk5MiwwLjI1LDAuNjAwMDk3NywwLjI1YzAuMjY2NjAxNiwwLDAuNDgzMzk4NC0wLjA4MjAzMTMsMC42NDk5MDIzLTAuMjUgIGMwLjE2NjUwMzktMC4xNjYwMTU2LDAuMjUtMC4zNDk2MDk0LDAuMjUtMC41NDg4MjgxQzMzLjYwMDA5NzcsODUuMTczODI4MSwzMy41MTY2MDE2LDg0Ljk1NzAzMTMsMzMuMzUwMDk3Nyw4NC43MjQ2MDk0eiAgIE0zMy43MDAxOTUzLDgwLjY3MzgyODFjMC0wLjIzMjQyMTktMC4wODM0OTYxLTAuNDMzNTkzOC0wLjI1LTAuNTk5NjA5NGMtMC4xNjY5OTIyLTAuMTY2MDE1Ni0wLjM2NjY5OTItMC4yNS0wLjYwMDA5NzctMC4yNSAgYy0wLjI2NjYwMTYsMC0wLjQ4MzM5ODQsMC4wODM5ODQ0LTAuNjQ5OTAyMywwLjI1Yy0wLjE2Njk5MjIsMC4xNjYwMTU2LTAuMjUsMC4zNjcxODc1LTAuMjUsMC41OTk2MDk0ICBjMCwwLjIwMTE3MTksMC4wODMwMDc4LDAuMzgyODEyNSwwLjI1LDAuNTUwNzgxM2MwLjE2NjUwMzksMC4xNjYwMTU2LDAuMzgzMzAwOCwwLjI1LDAuNjQ5OTAyMywwLjI1ICBjMC4yMzMzOTg0LDAsMC40MzMxMDU1LTAuMDgzOTg0NCwwLjYwMDA5NzctMC4yNUMzMy42MTY2OTkyLDgxLjA1NjY0MDYsMzMuNzAwMTk1Myw4MC44NzUsMzMuNzAwMTk1Myw4MC42NzM4MjgxeiAgIE0zMy43OTk4MDQ3LDc1Ljg3NWMwLTAuMjAxMTcxOS0wLjA4MzAwNzgtMC4zODQ3NjU2LTAuMjUtMC41NTA3ODEzYy0wLjE2NjUwMzktMC4xNjYwMTU2LTAuMzY2MjEwOS0wLjI1LTAuNTk5NjA5NC0wLjI1ICBjLTAuMjY2NjAxNiwwLTAuNDY2Nzk2OSwwLjA4Mzk4NDQtMC42MDAwOTc3LDAuMjVjLTAuMTY2NTAzOSwwLjEzMjgxMjUtMC4yNSwwLjMxNjQwNjMtMC4yNSwwLjU1MDc4MTMgIGMwLDAuMjY1NjI1LDAuMDgzNDk2MSwwLjQ4MjQyMTksMC4yNSwwLjY0ODQzNzVjMC4xNjY1MDM5LDAuMTY3OTY4OCwwLjM2NjY5OTIsMC4yNSwwLjYwMDA5NzcsMC4yNSAgYzAuMTY2NTAzOSwwLDAuMzY2MjEwOS0wLjA4MjAzMTMsMC41OTk2MDk0LTAuMjVDMzMuNzE2Nzk2OSw3Ni4yOTEwMTU2LDMzLjc5OTgwNDcsNzYuMDc0MjE4OCwzMy43OTk4MDQ3LDc1Ljg3NXogICBNMzMuNzAwMTk1Myw3MC42MjVjLTAuMTMzNzg5MS0wLjE2Nzk2ODgtMC4zMzM0OTYxLTAuMjUtMC42MDAwOTc3LTAuMjVjLTAuMjMzMzk4NCwwLTAuNDE2NTAzOSwwLjA4MjAzMTMtMC41NTAyOTMsMC4yNSAgYy0wLjE2NjUwMzksMC4xMzI4MTI1LTAuMjUsMC4zMTY0MDYzLTAuMjUsMC41NDg4MjgxYzAsMC4yNjc1NzgxLDAuMDgzNDk2MSwwLjQ4NDM3NSwwLjI1LDAuNjUwMzkwNiAgYzAuMTY2OTkyMiwwLjE2NjAxNTYsMC4zNTAwOTc3LDAuMjUsMC41NTAyOTMsMC4yNWMwLjIzMzM5ODQsMCwwLjQzMzEwNTUtMC4wODM5ODQ0LDAuNjAwMDk3Ny0wLjI1ICBjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzgyODEyNSwwLjI1LTAuNjUwMzkwNkMzMy45NTAxOTUzLDcwLjk0MTQwNjMsMzMuODY2Njk5Miw3MC43NTc4MTI1LDMzLjcwMDE5NTMsNzAuNjI1eiAgIE01OS4yOTk4MDQ3LDQ4LjAyMzQzNzVjLTAuMDY2NDA2MywwLjIzNDM3NS0wLjA0OTgwNDcsMC40NTExNzE5LDAuMDUwMjkzLDAuNjUwMzkwNkw1OS41LDQ4Ljk3NDYwOTQgIGMwLjIwMDE5NTMsMC4yOTg4MjgxLDAuNDgzMzk4NCwwLjQ0OTIxODgsMC44NTAwOTc3LDAuNDQ5MjE4OEw2MC43MDAxOTUzLDQ5LjM3NSAgYzAuMTk5NzA3LTAuMTAxNTYyNSwwLjM0OTYwOTQtMC4yNjc1NzgxLDAuNDQ5NzA3LTAuNWMwLjA2Njg5NDUtMC4yMzQzNzUsMC4wNTAyOTMtMC40NTExNzE5LTAuMDQ5ODA0Ny0wLjY1MDM5MDYgIGwtMC4xNDk5MDIzLTAuMzAwNzgxM2MtMC4yNjY2MDE2LTAuNS0wLjY1MDM5MDYtMC42MzI4MTI1LTEuMTUwMzkwNi0wLjQwMDM5MDYgIEM1OS41MzMyMDMxLDQ3LjYyNSw1OS4zNjY2OTkyLDQ3Ljc5MTAxNTYsNTkuMjk5ODA0Nyw0OC4wMjM0Mzc1eiBNNTUuMjAwMTk1MywzOC40NzQ2MDk0ICBjLTAuNSwwLjI5ODgyODEtMC42MzM3ODkxLDAuNjgzNTkzOC0wLjQwMDM5MDYsMS4xNTAzOTA2bDMuMzUwMDk3Nyw2LjU5OTYwOTRjMC4xNjY1MDM5LDAuMzMyMDMxMywwLjQzMzU5MzgsMC41LDAuODAwMjkzLDAuNSAgTDU5LjI5OTgwNDcsNDYuNjI1YzAuNTMzNjkxNC0wLjI2NzU3ODEsMC42ODM1OTM4LTAuNjUwMzkwNiwwLjQ1MDE5NTMtMS4xNTAzOTA2TDU2LjM1MDA5NzcsMzguODc1ICBDNTYuMDgzNDk2MSwzOC4zNzUsNTUuNzAwMTk1MywzOC4yNDAyMzQ0LDU1LjIwMDE5NTMsMzguNDc0NjA5NHogTTY5LjcwMDE5NTMsMjIuMjI0NjA5NCAgYzAuMTY2NTAzOS0wLjIzNDM3NSwwLjI1LTAuNDUxMTcxOSwwLjI1LTAuNjUwMzkwNmMwLTAuMTY2MDE1Ni0wLjA4MzQ5NjEtMC4zNjcxODc1LTAuMjUtMC41OTk2MDk0ICBjLTAuMjMzMzk4NC0wLjE2Nzk2ODgtMC40NTAxOTUzLTAuMjUtMC42NTAzOTA2LTAuMjVjLTAuMTY2NTAzOSwwLTAuMzY2MjEwOSwwLjA4MjAzMTMtMC41OTk2MDk0LDAuMjUgIGMtMC4xNjY5OTIyLDAuMjMyNDIxOS0wLjI1LDAuNDMzNTkzOC0wLjI1LDAuNTk5NjA5NGMwLDAuMTk5MjE4OCwwLjA4MzAwNzgsMC40MTYwMTU2LDAuMjUsMC42NTAzOTA2ICBjMC4yMzMzOTg0LDAuMTY2MDE1NiwwLjQzMzEwNTUsMC4yNSwwLjU5OTYwOTQsMC4yNUM2OS4yNSwyMi40NzQ2MDk0LDY5LjQ2Njc5NjksMjIuMzkwNjI1LDY5LjcwMDE5NTMsMjIuMjI0NjA5NHogICBNMjAuNjQ5OTAyMywyOC43NzM0Mzc1bDEuNTUwMjkzLDEuNzVjMC41MzMyMDMxLDAuNDMzNTkzOCwxLjI4MzIwMzEsMC44MDA3ODEzLDIuMjUsMS4xMDE1NjI1bC04LjUsMTAuMDQ4ODI4MSAgbC0yLjEwMDA5NzctMS40NDkyMTg4TDIwLjY0OTkwMjMsMjguNzczNDM3NXogTTIyLjc1LDI0LjAyMzQzNzVjMC42MzMzMDA4LTAuNzMyNDIxOSwxLjUtMS4xNjYwMTU2LDIuNjAwMDk3Ny0xLjI5ODgyODEgIGMxLjA2NjQwNjMtMC4wOTk2MDk0LDEuOTY2MzA4NiwwLjE1MDM5MDYsMi42OTk3MDcsMC43NWMwLjgwMDI5MywwLjYzMjgxMjUsMS4yNSwxLjQ2Njc5NjksMS4zNTAwOTc3LDIuNSAgcy0wLjE2NjUwMzksMS45MzM1OTM4LTAuNzk5ODA0NywyLjY5OTIxODhjLTAuNjY2NTAzOSwwLjgzMzk4NDQtMS41LDEuMzAwNzgxMy0yLjUsMS40MDAzOTA2TDI1LjI5OTgwNDcsMzAuMTI1ICBjLTAuNzk5ODA0Ny0wLjEwMTU2MjUtMS40NjYzMDg2LTAuNDE3OTY4OC0yLTAuOTUxMTcxOWMtMC4zMzMwMDc4LTAuMjY1NjI1LTAuNjE2MjEwOS0wLjYxNzE4NzUtMC44NDk2MDk0LTEuMDQ4ODI4MSAgbC0wLjA1MDI5My0wLjA1MDc4MTNjLTAuMTY2NTAzOS0wLjM2NzE4NzUtMC4yODMyMDMxLTAuODE2NDA2My0wLjM1MDA5NzctMS4zNDk2MDk0ICBDMjEuOTUwMTk1MywyNS42NTgyMDMxLDIyLjE4MzU5MzgsMjQuNzU3ODEyNSwyMi43NSwyNC4wMjM0Mzc1eiBNNDQuMTQ5OTAyMywxMS4zNzUgIGMtMC40MzMxMDU1LTAuMzMzOTg0NC0wLjgzMzQ5NjEtMC4yODMyMDMxLTEuMTk5NzA3LDAuMTQ4NDM3NWMtMC4zMzM0OTYxLDAuNDMzNTkzOC0wLjI4MzY5MTQsMC44MzM5ODQ0LDAuMTQ5OTAyMywxLjIwMTE3MTkgIGwwLjM1MDA5NzcsMC4zNDk2MDk0YzAuNDY2MzA4NiwwLjQwMDM5MDYsMC44NDk2MDk0LDAuOTE2MDE1NiwxLjE0OTkwMjMsMS41NTA3ODEzICBjMC4xNjY1MDM5LDAuMzMyMDMxMywwLjQzMzEwNTUsMC41LDAuNzk5ODA0NywwLjVsMC4zOTk5MDIzLTAuMTAxNTYyNWMwLjIwMDE5NTMtMC4wOTk2MDk0LDAuMzUwMDk3Ny0wLjI2NTYyNSwwLjQ1MDE5NTMtMC41ICBjMC4wNjY0MDYzLTAuMjMyNDIxOSwwLjA0OTgwNDctMC40NDkyMTg4LTAuMDQ5ODA0Ny0wLjY0ODQzNzVjLTAuNDY2Nzk2OS0wLjgwMDc4MTMtMC45NjY3OTY5LTEuNDY2Nzk2OS0xLjUtMiAgQzQ0LjUzMzIwMzEsMTEuNjczODI4MSw0NC4zNTAwOTc3LDExLjUwNzgxMjUsNDQuMTQ5OTAyMywxMS4zNzV6IE0zNC4yMDAxOTUzLDkuMjI0NjA5NCAgYzEuNDY2MzA4Ni0wLjkwMDM5MDYsMy4xMzMzMDA4LTEuMzQ5NjA5NCw1LTEuMzQ5NjA5NGMyLjYzMzMwMDgsMCw0Ljg4MzMwMDgsMC45MTYwMTU2LDYuNzUsMi43NSAgQzQ3LjgxNjQwNjMsMTIuNTU2NjQwNiw0OC43NSwxNC44MDY2NDA2LDQ4Ljc1LDE3LjM3NWMwLDAuNzY1NjI1LTAuMDgzNDk2MSwxLjU0ODgyODEtMC4yNSwyLjM0OTYwOTQgIGMtMC40MzM1OTM4LDEuNjk5MjE4OC0xLjI4MzIwMzEsMy4xOTkyMTg4LTIuNTQ5ODA0Nyw0LjVjLTEuODY2Njk5MiwxLjgzMjAzMTMtNC4xMTY2OTkyLDIuNzUtNi43NSwyLjc1ICBjLTIuNjY2OTkyMiwwLTQuOTE2OTkyMi0wLjkzMzU5MzgtNi43NS0yLjgwMDc4MTNjLTEuODY2Njk5Mi0xLjgzMjAzMTMtMi44MDAyOTMtNC4wOTk2MDk0LTIuODAwMjkzLTYuNzk4ODI4MSAgYzAtMi42MDE1NjI1LDAuOTMzNTkzOC00Ljg1MTU2MjUsMi44MDAyOTMtNi43NUMzMy4wMTY2MDE2LDEwLjAyMzQzNzUsMzMuNjAwMDk3Nyw5LjU1NjY0MDYsMzQuMjAwMTk1Myw5LjIyNDYwOTR6ICAgTTQxLjA0OTgwNDcsOS44NzVsLTAuNjk5NzA3LTAuMTAxNTYyNWMtMC4yMzMzOTg0LDAtMC40MzM1OTM4LDAuMDgzOTg0NC0wLjYwMDA5NzcsMC4yNSAgQzM5LjU4MzQ5NjEsMTAuMTkxNDA2MywzOS41LDEwLjM5MDYyNSwzOS41LDEwLjYyNWMwLDAuMjMyNDIxOSwwLjA4MzQ5NjEsMC40NDkyMTg4LDAuMjUsMC42NDg0Mzc1ICBjMC4xNjY1MDM5LDAuMTY3OTY4OCwwLjM2NjY5OTIsMC4yNSwwLjYwMDA5NzcsMC4yNWgwLjI1bDAuMjUsMC4wNTA3ODEzYzAuMzk5OTAyMywwLDAuNjY2NTAzOS0wLjIxNjc5NjksMC43OTk4MDQ3LTAuNjUwMzkwNiAgYzAuMDY2ODk0NS0wLjIzMjQyMTksMC4wMzM2OTE0LTAuNDQ5MjE4OC0wLjEwMDA5NzctMC42NTAzOTA2QzQxLjQ1MDE5NTMsMTAuMDc0MjE4OCw0MS4yODMyMDMxLDkuOTQxNDA2Myw0MS4wNDk4MDQ3LDkuODc1eiAgIE04My4zNTAwOTc3LDExLjIyNDYwOTRMODYsMTguMzc1TDU1LjE0OTkwMjMsMzMuMjczNDM3NUM1NS4yNSwzMy40NDE0MDYzLDU1LjM1MDA5NzcsMzMuNjQwNjI1LDU1LjQ1MDE5NTMsMzMuODc1ICBsMzAuNjk5NzA3LDU4LjE0ODQzNzVoLTcuNjAwMDk3N2wtMTkuNDQ5NzA3LTMybC0yMi4wNTAyOTMsMTIuNDUxMTcxOSAgYy0wLjI2NjYwMTYsMC4xNjYwMTU2LTAuMzk5OTAyMywwLjM4MjgxMjUtMC4zOTk5MDIzLDAuNjUwMzkwNmwtMS4yNSwxOWwtNS43NS0wLjEwMTU2MjVsMC44MDAyOTMtMjMuMTk5MjE4OGwxOC40NDk3MDctMTEuMjUgIGMwLjM5OTkwMjMtMC4yMzI0MjE5LDAuNTE2NjAxNi0wLjU4Mzk4NDQsMC4zNTAwOTc3LTEuMDUwNzgxM2wtNi4xMDAwOTc3LTE2LjA0ODgyODFjLTAuMTk5NzA3LTAuNDAwMzkwNi0wLjM2NjY5OTItMC43MzQzNzUtMC41LTEgIEwzMi43NSw0OS4zNzVMMjEuMDQ5ODA0NywzOC4xNzM4MjgxbDMuMzUwMDk3Ny00LjE5OTIxODhMMzEuMjUsNDAuODc1YzAuMjAwMTk1MywwLjE5OTIxODgsMC40MTY1MDM5LDAuMjgzMjAzMSwwLjY0OTkwMjMsMC4yNSAgYzAuMjMzMzk4NCwwLDAuNDUwMTk1My0wLjEwMTU2MjUsMC42NDk5MDIzLTAuMzAwNzgxM2w5LjEwMDA5NzctMTFMODMuMzUwMDk3NywxMS4yMjQ2MDk0eiBNNzQuMjAwMTk1MywxOS41NzQyMTg4ICBjMC0wLjE2NjAxNTYtMC4wODM0OTYxLTAuMzY3MTg3NS0wLjI1LTAuNTk5NjA5NGMtMC4yMzMzOTg0LTAuMTY3OTY4OC0wLjQ1MDE5NTMtMC4yNS0wLjY1MDM5MDYtMC4yNSAgYy0wLjE2NjUwMzksMC0wLjM2NjIxMDksMC4wODIwMzEzLTAuNTk5NjA5NCwwLjI1Yy0wLjE2Njk5MjIsMC4yMzI0MjE5LTAuMjUsMC40MzM1OTM4LTAuMjUsMC41OTk2MDk0ICBjMCwwLjE5OTIxODgsMC4wODMwMDc4LDAuNDE2MDE1NiwwLjI1LDAuNjUwMzkwNmMwLjIzMzM5ODQsMC4xNjYwMTU2LDAuNDMzMTA1NSwwLjI1LDAuNTk5NjA5NCwwLjI1ICBjMC4yMDAxOTUzLDAsMC40MTY5OTIyLTAuMDgzOTg0NCwwLjY1MDM5MDYtMC4yNUM3NC4xMTY2OTkyLDE5Ljk5MDIzNDQsNzQuMjAwMTk1MywxOS43NzM0Mzc1LDc0LjIwMDE5NTMsMTkuNTc0MjE4OHogICBNNzcuNjAwMDk3NywxOC40NzQ2MDk0YzAuMTY2NTAzOSwwLDAuMzY2Njk5Mi0wLjA4Mzk4NDQsMC42MDAwOTc3LTAuMjVjMC4xNjY1MDM5LTAuMjM0Mzc1LDAuMjUtMC40NTExNzE5LDAuMjUtMC42NTAzOTA2ICBjMC0wLjE2NjAxNTYtMC4wODM0OTYxLTAuMzY3MTg3NS0wLjI1LTAuNTk5NjA5NGMtMC4yMzMzOTg0LTAuMjAxMTcxOS0wLjQzMzU5MzgtMC4zMDA3ODEzLTAuNjAwMDk3Ny0wLjMwMDc4MTMgIGMtMC4yMzMzOTg0LDAtMC40MzM1OTM4LDAuMDk5NjA5NC0wLjYwMDA5NzcsMC4zMDA3ODEzYy0wLjE2NjUwMzksMC4xNjYwMTU2LTAuMjUsMC4zNjcxODc1LTAuMjUsMC41OTk2MDk0ICBjMCwwLjI2NzU3ODEsMC4wODM0OTYxLDAuNDgyNDIxOSwwLjI1LDAuNjUwMzkwNkM3Ny4xNjY1MDM5LDE4LjM5MDYyNSw3Ny4zNjY2OTkyLDE4LjQ3NDYwOTQsNzcuNjAwMDk3NywxOC40NzQ2MDk0eiAgIE04Mi4zNTAwOTc3LDE2LjE3MzgyODFjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzgyODEyNSwwLjI1LTAuNjUwMzkwNmMwLTAuMjMyNDIxOS0wLjA4MzQ5NjEtMC40MzE2NDA2LTAuMjUtMC41OTk2MDk0ICBjLTAuMTY2NTAzOS0wLjE2NjAxNTYtMC4zNjY2OTkyLTAuMjUtMC42MDAwOTc3LTAuMjVjLTAuMjAwMTk1MywwLTAuMzgzMzAwOCwwLjA4Mzk4NDQtMC41NDk4MDQ3LDAuMjUgIGMtMC4xNjY5OTIyLDAuMTY3OTY4OC0wLjI1LDAuMzY3MTg3NS0wLjI1LDAuNTk5NjA5NGMwLDAuMjY3NTc4MSwwLjA4MzAwNzgsMC40ODQzNzUsMC4yNSwwLjY1MDM5MDYgIGMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzQ5NjA5NCwwLjI1LDAuNTQ5ODA0NywwLjI1QzgxLjk4MzM5ODQsMTYuNDIzODI4MSw4Mi4xODM1OTM4LDE2LjM0MTc5NjksODIuMzUwMDk3NywxNi4xNzM4MjgxeidcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGlkPSdtZW51LXRvZ2dsZScgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbWVudS10b2dnbGUnIGNsYXNzTmFtZT0nbGFiZWwtdG9nZ2xlJz48L2xhYmVsPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz5cbiAgICAgICAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Nob3dzJz5cbiAgICAgICAgICAgICAgICA8YT5TaG93czwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xpc3QnPlxuICAgICAgICAgICAgICAgIDxhPlNvbmcgTGlzdDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL21lZGlhJz5cbiAgICAgICAgICAgICAgICA8YT5NZWRpYTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnPlxuICAgICAgICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSd3cmFwcGVyJz48L2hlYWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgIFxuICAgIEBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1WaWJ1cik7XG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQmZGlzcGxheT1zd2FwJyk7XG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb25vdG9uJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgLm5hdkJhciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZCYXIuc2Nyb2xsZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICAgICAgfVxuXG4gICAgICAuc2luZ01hbiB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgfVxuICAgIFxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgcGFkZGluZzogM2VtIDAgMWVtIDA7XG4gICAgICB9XG5cbiAgICAgIC5uYXZCYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAubG9nbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2dvOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjZmY0NDQ0LCAwIDAgMC41ZW0gI2ZmNDQ0NCxcbiAgICAgICAgICAwIDAgMC4xZW0gI2ZmNDQ0NCwgMCAxMHB4IDNweCAjMDAwO1xuICAgICAgfVxuXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDIlO1xuICAgICAgfVxuXG4gICAgICBuYXYgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cblxuICAgICAgbmF2IHVsIGEge1xuICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCc7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICBuYXYgdWwgYTpob3ZlciB7XG4gICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICNmZjQ0NDQsIDAgMCAwLjVlbSAjZmY0NDQ0LFxuICAgICAgICAgIDAgMCAwLjFlbSAjZmY0NDQ0LCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICB9XG4gICAgICAgICAgXG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgI21lbnUtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmxhYmVsLXRvZ2dsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICBcbiAgICAgICAgICBuYXYgdWwgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzUzMzU0YTsgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4NDU0NTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1MzM1NGE7XG4gICAgICAgICAgICBjb2xvcjogIzUzMzU0YTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJlbSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNtZW51LXRvZ2dsZTpjaGVja2VkIH4gdWwge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sYWJlbC10b2dnbGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICB0byBib3R0b20sXG4gICAgICAgICAgICAgICNlODQ1NDUgMCUsXG4gICAgICAgICAgICAgICNlODQ1NDUgMjAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAyMCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDQwJSxcbiAgICAgICAgICAgICAgI2U4NDU0NSA0MCUsXG4gICAgICAgICAgICAgICNlODQ1NDUgNjAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA2MCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDgwJSxcbiAgICAgICAgICAgICAgI2U4NDU0NSA4MCUsXG4gICAgICAgICAgICAgICNlODQ1NDUgMTAwJVxuICAgICAgICAgICAgKTsgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0SGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js */"));
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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
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
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const contentful = __webpack_require__(/*! contentful */ "contentful");


class About extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: []
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
      content_type: 'about'
    }).then(response => {
      this.setState({
        about: response.items
      });
      console.log(response.items);
    });
  }

  render() {
    const about = this.state.about.map((about, i) => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        className: "jsx-765191321" + " " + 'image',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("img", {
        src: about.fields.founder.fields.file.url,
        alt: "An image of the founder of Good Enough Live Karaoke, Mr. Tim McCready",
        className: "jsx-765191321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), __jsx("div", {
        key: i,
        className: "jsx-765191321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-765191321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, about.fields.aboutText.content[0].content[0].value), __jsx("p", {
        className: "jsx-765191321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, about.fields.aboutText.content[1].content[0].value), __jsx("p", {
        className: "jsx-765191321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, about.fields.aboutText.content[2].content[0].value), __jsx("h3", {
        className: "jsx-765191321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, about.fields.aboutText.content[3].content[0].value), __jsx("p", {
        className: "jsx-765191321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, about.fields.aboutText.content[4].content[0].value), __jsx("p", {
        className: "jsx-765191321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, about.fields.aboutText.content[5].content[0].value), __jsx("p", {
        className: "jsx-765191321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, about.fields.aboutText.content[6].content[0].value)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "765191321",
        __self: this
      }, "p.jsx-765191321,h3.jsx-765191321{color:white;font-family:Oswald;font-size:20px;}p.jsx-765191321{width:80%;margin:3% auto;}h3.jsx-765191321{width:80%;margin:0 auto;text-align:center;}img.jsx-765191321{width:100%;height:auto;}.image.jsx-765191321{width:50%;margin:5% auto;-moz-box-shadow:inset 0 0 10px #000000;-webkit-box-shadow:inset 0 0 10px #000000;box-shadow:inset 0 0 10px #000000;border:15px solid #000;border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RzQixBQUkyQixBQU1GLEFBS0EsQUFLQyxBQUtELFVBZEssQUFLRCxBQVVDLENBTEgsQ0FoQk8sV0FpQnJCLENBTG9CLENBTHBCLEFBZXlDLE1BckJ4QixXQVlqQixJQVhBLGtCQXFCNEMsMENBQ1Isa0NBQ1gsdUJBQ0osbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcbmltcG9ydCBUZXN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEhlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFib3V0OiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgLy8gVGhpcyBpcyB0aGUgc3BhY2UgSUQuIEEgc3BhY2UgaXMgbGlrZSBhIHByb2plY3QgZm9sZGVyIGluIENvbnRlbnRmdWwgdGVybXNcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGFjY2VzcyB0b2tlbiBmb3IgdGhpcyBzcGFjZS4gTm9ybWFsbHkgeW91IGdldCBib3RoIElEIGFuZCB0aGUgdG9rZW4gaW4gdGhlIENvbnRlbnRmdWwgd2ViIGFwcFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcbiAgICAvLyBjb250ZW50IHR5cGUgcmVsYXRlcyB0byB0aGUgY29udGVudCB0eXBlIG5hbWUgaW4gY29udGVudGZ1bFxuICAgIC8vIGZpZ3VyZWQgaXQgb3V0dHR0XG4gICAgLy8gJ3Bvc3QnIGluc3RlYWQgb2Ygc29uZ0xpc3QsIHBvc3QgaXMgbGlua2VkIHRvIGF1dGhvciBzbyB3aGVuIHBvc3QgcmVzcG9uc2UgeW91IGdldCBhdXRob3Igb2JqZWN0IGFzIHdlbGxcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ2Fib3V0JyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhYm91dDogcmVzcG9uc2UuaXRlbXMsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLml0ZW1zKTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWJvdXQgPSB0aGlzLnN0YXRlLmFib3V0Lm1hcCgoYWJvdXQsIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlJz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXthYm91dC5maWVsZHMuZm91bmRlci5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgIGFsdD0nQW4gaW1hZ2Ugb2YgdGhlIGZvdW5kZXIgb2YgR29vZCBFbm91Z2ggTGl2ZSBLYXJhb2tlLCBNci4gVGltIE1jQ3JlYWR5J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICA8cD57YWJvdXQuZmllbGRzLmFib3V0VGV4dC5jb250ZW50WzBdLmNvbnRlbnRbMF0udmFsdWV9PC9wPlxuICAgICAgICAgICAgPHA+e2Fib3V0LmZpZWxkcy5hYm91dFRleHQuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDxwPnthYm91dC5maWVsZHMuYWJvdXRUZXh0LmNvbnRlbnRbMl0uY29udGVudFswXS52YWx1ZX08L3A+XG4gICAgICAgICAgICA8aDM+e2Fib3V0LmZpZWxkcy5hYm91dFRleHQuY29udGVudFszXS5jb250ZW50WzBdLnZhbHVlfTwvaDM+XG4gICAgICAgICAgICA8cD57YWJvdXQuZmllbGRzLmFib3V0VGV4dC5jb250ZW50WzRdLmNvbnRlbnRbMF0udmFsdWV9PC9wPlxuICAgICAgICAgICAgPHA+e2Fib3V0LmZpZWxkcy5hYm91dFRleHQuY29udGVudFs1XS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDxwPnthYm91dC5maWVsZHMuYWJvdXRUZXh0LmNvbnRlbnRbNl0uY29udGVudFswXS52YWx1ZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogT3N3YWxkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDMlIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMTVweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0TmVvbic+QUJPVVQ8L2gxPlxuICAgICAgICAgIHthYm91dH1cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4IDAgMDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3Z3O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmlidXI7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICNmZjQ0NDQsXG4gICAgICAgICAgICAgICAgMCAwIDAuNWVtICNmZjQ0NDQsIDAgMCAwLjFlbSAjZmY0NDQ0LCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/about.js */"));
    });
    return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2863250119" + " " + 'wrapper',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-2863250119" + " " + 'contactNeon',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "ABOUT"), about, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2863250119",
      __self: this
    }, "h1.jsx-2863250119{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:vibur;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444, 0 0 0.5em #ff4444,0 0 0.1em #ff4444,0 10px 3px #000;}.wrapper.jsx-2863250119{margin-top:20vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEZzQixBQUdrQyxBQWNILGdCQUNsQixHQWRvQixrQkFDQyw2RkFDTCxjQUNBLGNBQ0ksa0JBQ0YsZ0JBQ0Usa0JBQ1AsV0FFNEMsdUdBQ3pEIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcbmltcG9ydCBUZXN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEhlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFib3V0OiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgLy8gVGhpcyBpcyB0aGUgc3BhY2UgSUQuIEEgc3BhY2UgaXMgbGlrZSBhIHByb2plY3QgZm9sZGVyIGluIENvbnRlbnRmdWwgdGVybXNcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGFjY2VzcyB0b2tlbiBmb3IgdGhpcyBzcGFjZS4gTm9ybWFsbHkgeW91IGdldCBib3RoIElEIGFuZCB0aGUgdG9rZW4gaW4gdGhlIENvbnRlbnRmdWwgd2ViIGFwcFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcbiAgICAvLyBjb250ZW50IHR5cGUgcmVsYXRlcyB0byB0aGUgY29udGVudCB0eXBlIG5hbWUgaW4gY29udGVudGZ1bFxuICAgIC8vIGZpZ3VyZWQgaXQgb3V0dHR0XG4gICAgLy8gJ3Bvc3QnIGluc3RlYWQgb2Ygc29uZ0xpc3QsIHBvc3QgaXMgbGlua2VkIHRvIGF1dGhvciBzbyB3aGVuIHBvc3QgcmVzcG9uc2UgeW91IGdldCBhdXRob3Igb2JqZWN0IGFzIHdlbGxcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ2Fib3V0JyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhYm91dDogcmVzcG9uc2UuaXRlbXMsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLml0ZW1zKTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWJvdXQgPSB0aGlzLnN0YXRlLmFib3V0Lm1hcCgoYWJvdXQsIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlJz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXthYm91dC5maWVsZHMuZm91bmRlci5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgIGFsdD0nQW4gaW1hZ2Ugb2YgdGhlIGZvdW5kZXIgb2YgR29vZCBFbm91Z2ggTGl2ZSBLYXJhb2tlLCBNci4gVGltIE1jQ3JlYWR5J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICA8cD57YWJvdXQuZmllbGRzLmFib3V0VGV4dC5jb250ZW50WzBdLmNvbnRlbnRbMF0udmFsdWV9PC9wPlxuICAgICAgICAgICAgPHA+e2Fib3V0LmZpZWxkcy5hYm91dFRleHQuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDxwPnthYm91dC5maWVsZHMuYWJvdXRUZXh0LmNvbnRlbnRbMl0uY29udGVudFswXS52YWx1ZX08L3A+XG4gICAgICAgICAgICA8aDM+e2Fib3V0LmZpZWxkcy5hYm91dFRleHQuY29udGVudFszXS5jb250ZW50WzBdLnZhbHVlfTwvaDM+XG4gICAgICAgICAgICA8cD57YWJvdXQuZmllbGRzLmFib3V0VGV4dC5jb250ZW50WzRdLmNvbnRlbnRbMF0udmFsdWV9PC9wPlxuICAgICAgICAgICAgPHA+e2Fib3V0LmZpZWxkcy5hYm91dFRleHQuY29udGVudFs1XS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDxwPnthYm91dC5maWVsZHMuYWJvdXRUZXh0LmNvbnRlbnRbNl0uY29udGVudFswXS52YWx1ZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogT3N3YWxkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDMlIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMTVweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0TmVvbic+QUJPVVQ8L2gxPlxuICAgICAgICAgIHthYm91dH1cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4IDAgMDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3Z3O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmlidXI7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICNmZjQ0NDQsXG4gICAgICAgICAgICAgICAgMCAwIDAuNWVtICNmZjQ0NDQsIDAgMCAwLjFlbSAjZmY0NDQ0LCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/about.js */")));
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/braedencraig/Desktop/GELK-SITE/pages/about.js */"./pages/about.js");


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
//# sourceMappingURL=about.js.map