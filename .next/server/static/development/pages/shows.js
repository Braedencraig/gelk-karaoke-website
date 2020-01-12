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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/GelkLogo.png":
/*!*****************************!*\
  !*** ./assets/GelkLogo.png ***!
  \*****************************/
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
      className: "jsx-3664520580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("a", {
      onClick: this.scrollToTop,
      className: "jsx-3664520580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3664520580" + " " + 'flexContainer',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3664520580" + " " + 'flexOne',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-3664520580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Copyright 2020 | All Rights Reserved")), __jsx("div", {
      className: "jsx-3664520580" + " " + 'flexTwo',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("a", {
      href: "https://twitter.com/goodenoughkband",
      className: "jsx-3664520580",
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
      className: "jsx-3664520580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("path", {
      d: "M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z",
      className: "jsx-3664520580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }))), __jsx("a", {
      href: "https://www.facebook.com/groups/GoodEnoughLIVEKARAOKE/",
      className: "jsx-3664520580",
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
      className: "jsx-3664520580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("path", {
      d: "M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z",
      className: "jsx-3664520580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }))), __jsx("a", {
      href: "https://www.instagram.com/goodenoughlivekaraoke/",
      className: "jsx-3664520580",
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
      className: "jsx-3664520580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, ' ', __jsx("path", {
      d: "M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z",
      className: "jsx-3664520580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3664520580",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');p.jsx-3664520580{color:#f1f1f1;margin:0 auto;font-family:Roboto,sans-serif;}svg.jsx-3664520580{fill:#f1f1f1;-webkit-transition:0.4s all;transition:0.4s all;}svg.jsx-3664520580:hover{opacity:0.6;}.flexContainer.jsx-3664520580{max-width:1400px;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:5px 2%;}.flexOne.jsx-3664520580{margin-top:8px;}.flexTwo.jsx-3664520580 a.jsx-3664520580{margin:0px 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVvQixBQUVzRyxBQUczRSxBQU1ELEFBS0QsQUFJSyxBQVFGLEFBSUMsWUFmbEIsQ0FMc0IsQ0FOTixDQXVCaEIsQ0FJQSxDQVpnQixXQWRpQixHQWVsQiwyQkFkZixHQUtBLDRDQVVnQyxtSEFDZixlQUNqQiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQWJzb2x1dGUgfSBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIFNjcm9sbCBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IHtcbiAgTGluayxcbiAgRWxlbWVudCxcbiAgRXZlbnRzLFxuICBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCxcbiAgc2Nyb2xsU3B5LFxuICBzY3JvbGxlcixcbn0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcblxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XG4gIGNvbG9yOiAncmdiYSg0NCwxMTMsMjQ2LC45OCkhaW1wb3J0YW50JyxcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxufTtcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgIHNjcm9sbC5zY3JvbGxUb1RvcCgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17Zm9vdGVyU3R5bGV9PlxuICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNjcm9sbFRvVG9wfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleENvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleE9uZSc+XG4gICAgICAgICAgICAgIDxwPkNvcHlyaWdodCAyMDIwIHwgQWxsIFJpZ2h0cyBSZXNlcnZlZDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhUd28nPlxuICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL2dvb2Rlbm91Z2hrYmFuZCc+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgNTYuNjkzIDU2LjY5MydcbiAgICAgICAgICAgICAgICAgIGhlaWdodD0nNTYuNjkzcHgnXG4gICAgICAgICAgICAgICAgICBpZD0nTGF5ZXJfMSdcbiAgICAgICAgICAgICAgICAgIHZlcnNpb249JzEuMSdcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1Ni42OTMgNTYuNjkzJ1xuICAgICAgICAgICAgICAgICAgd2lkdGg9JzI1cHgnXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9JzI1cHgnXG4gICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUyLjgzNywxNS4wNjVjLTEuODExLDAuODA1LTMuNzYsMS4zNDgtNS44MDUsMS41OTFjMi4wODgtMS4yNSwzLjY4OS0zLjIzLDQuNDQ0LTUuNTkyYy0xLjk1MywxLjE1OS00LjExNSwyLTYuNDE4LDIuNDU0ICBjLTEuODQzLTEuOTY0LTQuNDctMy4xOTItNy4zNzctMy4xOTJjLTUuNTgxLDAtMTAuMTA2LDQuNTI1LTEwLjEwNiwxMC4xMDdjMCwwLjc5MSwwLjA4OSwxLjU2MiwwLjI2MiwyLjMwMyAgYy04LjQtMC40MjItMTUuODQ4LTQuNDQ1LTIwLjgzMy0xMC41NmMtMC44NywxLjQ5Mi0xLjM2OCwzLjIyOC0xLjM2OCw1LjA4MmMwLDMuNTA2LDEuNzg0LDYuNiw0LjQ5Niw4LjQxMiAgYy0xLjY1Ni0wLjA1My0zLjIxNS0wLjUwOC00LjU3OC0xLjI2NWMtMC4wMDEsMC4wNDItMC4wMDEsMC4wODUtMC4wMDEsMC4xMjhjMCw0Ljg5NiwzLjQ4NCw4Ljk4LDguMTA4LDkuOTEgIGMtMC44NDgsMC4yMy0xLjc0MSwwLjM1NC0yLjY2MywwLjM1NGMtMC42NTIsMC0xLjI4NS0wLjA2My0xLjkwMi0wLjE4MmMxLjI4Nyw0LjAxNSw1LjAxOSw2LjkzOCw5LjQ0MSw3LjAxOSAgYy0zLjQ1OSwyLjcxMS03LjgxNiw0LjMyNy0xMi41NTIsNC4zMjdjLTAuODE1LDAtMS42Mi0wLjA0OC0yLjQxMS0wLjE0MmM0LjQ3NCwyLjg2OSw5Ljc4Niw0LjU0MSwxNS40OTMsNC41NDEgIGMxOC41OTEsMCwyOC43NTYtMTUuNCwyOC43NTYtMjguNzU2YzAtMC40MzgtMC4wMDktMC44NzUtMC4wMjgtMS4zMDlDNDkuNzY5LDE4Ljg3Myw1MS40ODMsMTcuMDkyLDUyLjgzNywxNS4wNjV6JyAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvR29vZEVub3VnaExJVkVLQVJBT0tFLyc+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgNTYuNjkzIDU2LjY5MydcbiAgICAgICAgICAgICAgICAgIGhlaWdodD0nNTYuNjkzcHgnXG4gICAgICAgICAgICAgICAgICBpZD0nTGF5ZXJfMSdcbiAgICAgICAgICAgICAgICAgIHZlcnNpb249JzEuMSdcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1Ni42OTMgNTYuNjkzJ1xuICAgICAgICAgICAgICAgICAgd2lkdGg9JzI1cHgnXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9JzI1cHgnXG4gICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTQwLjQzLDIxLjczOWgtNy42NDV2LTUuMDE0YzAtMS44ODMsMS4yNDgtMi4zMjIsMi4xMjctMi4zMjJjMC44NzcsMCw1LjM5NSwwLDUuMzk1LDBWNi4xMjVsLTcuNDMtMC4wMjkgIGMtOC4yNDgsMC0xMC4xMjUsNi4xNzQtMTAuMTI1LDEwLjEyNXY1LjUxOGgtNC43N3Y4LjUzaDQuNzdjMCwxMC45NDcsMCwyNC4xMzcsMCwyNC4xMzdoMTAuMDMzYzAsMCwwLTEzLjMyLDAtMjQuMTM3aDYuNzcgIEw0MC40MywyMS43Mzl6JyAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZ29vZGVub3VnaGxpdmVrYXJhb2tlLyc+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICAgICAgZmlsbD0nIzAwMDAwMCdcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1MCA1MCdcbiAgICAgICAgICAgICAgICAgIHdpZHRoPScyNXB4J1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0PScyNXB4J1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNIDE2IDMgQyA4LjgzIDMgMyA4LjgzIDMgMTYgTCAzIDM0IEMgMyA0MS4xNyA4LjgzIDQ3IDE2IDQ3IEwgMzQgNDcgQyA0MS4xNyA0NyA0NyA0MS4xNyA0NyAzNCBMIDQ3IDE2IEMgNDcgOC44MyA0MS4xNyAzIDM0IDMgTCAxNiAzIHogTSAzNyAxMSBDIDM4LjEgMTEgMzkgMTEuOSAzOSAxMyBDIDM5IDE0LjEgMzguMSAxNSAzNyAxNSBDIDM1LjkgMTUgMzUgMTQuMSAzNSAxMyBDIDM1IDExLjkgMzUuOSAxMSAzNyAxMSB6IE0gMjUgMTQgQyAzMS4wNyAxNCAzNiAxOC45MyAzNiAyNSBDIDM2IDMxLjA3IDMxLjA3IDM2IDI1IDM2IEMgMTguOTMgMzYgMTQgMzEuMDcgMTQgMjUgQyAxNCAxOC45MyAxOC45MyAxNCAyNSAxNCB6IE0gMjUgMTYgQyAyMC4wNCAxNiAxNiAyMC4wNCAxNiAyNSBDIDE2IDI5Ljk2IDIwLjA0IDM0IDI1IDM0IEMgMjkuOTYgMzQgMzQgMjkuOTYgMzQgMjUgQyAzNCAyMC4wNCAyOS45NiAxNiAyNSAxNiB6JyAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG98Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6ICNmMWYxZjE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdmc6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mbGV4Q29udGFpbmVyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mbGV4T25lIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmxleFR3byBhIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/Footer.js */"));
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
  // margin: -9,
  background: 'rgba(44,113,246,.98)!important',
  backgroundColor: 'rgba(44,113,246,.98)!important',
  backgroundSize: 'cover',
  margin: 0
};

const Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  className: "jsx-826007456",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-826007456",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "826007456",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');body{background:rgba(44,113,246,0.98) !important;box-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9NeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnVCLEFBR29HLEFBQzVDLDRDQUN6QixzQkFDYixTQUNDLFVBQ1oiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9jb21wb25lbnRzL015TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcbiAgLy8gbWFyZ2luOiAtOSxcbiAgYmFja2dyb3VuZDogJ3JnYmEoNDQsMTEzLDI0NiwuOTgpIWltcG9ydGFudCcsXG4gIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNDQsMTEzLDI0NiwuOTgpIWltcG9ydGFudCcsXG4gIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICBtYXJnaW46IDAsXG59O1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b3xSb2JvdG8rQ29uZGVuc2VkJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ0LCAxMTMsIDI0NiwgMC45OCkgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgICA8VGVzdEhlYWRlciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/MyLayout.js */"), __jsx("div", {
  style: layoutStyle,
  className: "jsx-826007456",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx(_components_TestHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), props.children, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
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
/* harmony import */ var _assets_GelkLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/GelkLogo.png */ "./assets/GelkLogo.png");
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/NeonLogo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const NeonLogo = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
  className: "jsx-4052482246" + " " + 'wrapper',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-4052482246" + " " + 'logoNeon',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("img", {
  src: _assets_GelkLogo_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: "Good Enough Live Karaoke's Logo",
  className: "jsx-4052482246",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4052482246",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');@import url('https://fonts.googleapis.com/css?family=Bungee+Shade&display=swap');.logoNeon.jsx-4052482246{text-align:center;width:65%;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:150px;left:0;right:0;bottom:150px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.logoNeon.jsx-4052482246 b.jsx-4052482246{font:400 13vh 'Bungee Shade';color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444,0 0 0.5em #ff4444, 0 0 0.1em #ff4444,0 10px 3px #000;}.logoNeon.jsx-4052482246 b.jsx-4052482246 span.jsx-4052482246{-webkit-animation:blink-jsx-4052482246 linear infinite 2s;animation:blink-jsx-4052482246 linear infinite 2s;}.logoNeon.jsx-4052482246 b.jsx-4052482246 span.jsx-4052482246:nth-of-type(2){-webkit-animation:blink-jsx-4052482246 linear infinite 3s;animation:blink-jsx-4052482246 linear infinite 3s;}@-webkit-keyframes blink-jsx-4052482246{78%{color:inherit;text-shadow:inherit;}79%{color:#333;}80%{text-shadow:none;}81%{color:inherit;text-shadow:inherit;}82%{color:#333;text-shadow:none;}83%{color:inherit;text-shadow:inherit;}92%{color:#333;text-shadow:none;}92.5%{color:inherit;text-shadow:inherit;}}@keyframes blink-jsx-4052482246{78%{color:inherit;text-shadow:inherit;}79%{color:#333;}80%{text-shadow:none;}81%{color:inherit;text-shadow:inherit;}82%{color:#333;text-shadow:none;}83%{color:inherit;text-shadow:inherit;}92%{color:#333;text-shadow:none;}92.5%{color:inherit;text-shadow:inherit;}}.wrapper.jsx-4052482246{margin:0 auto;max-width:960px;padding:0 2%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9OZW9uTG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IsQUFFaUYsQUFDTSxBQUc1RCxBQWNXLEFBTU0sQUFHQSxBQUluQixBQUlILEFBR00sQUFHSCxBQUlILEFBSUcsQUFJSCxBQUlHLEFBTUYsV0EzQmQsQUFVbUIsQUFRQSxHQXRCRyxBQVVBLEFBUUEsQUFRQSxBQU1OLEdBekJoQixDQWxDVSxVQUNFLEFBeUNaLEFBUUEsQ0FwQ1csQ0E4Q0UsSUFoQ2IsQUFVQSxBQVFBLEFBUUEsTUFwRGEsQUFjdUIsR0E2Q3RDLGlFQXpDQSxBQUdBLE1BcEJxQiw2QkFjckIsZ0VBYm9CLGtCQUNSLFVBQ0gsT0FDQyxRQUNLLGFBRUkscUZBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9OZW9uTG9nby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbWcgZnJvbSAnLi4vYXNzZXRzL0dlbGtMb2dvLnBuZyc7XG5cbmNvbnN0IE5lb25Mb2dvID0gKCkgPT4gKFxuICA8PlxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvTmVvbic+XG4gICAgICAgIHsvKiA8Yj5cbiAgICAgICAgICBHb29kIDxzcGFuPkVub3VnaCA8L3NwYW4+TGk8c3Bhbj52ZTwvc3Bhbj4gS2FyYW9rZVxuICAgICAgICA8L2I+ICovfVxuICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJHb29kIEVub3VnaCBMaXZlIEthcmFva2UncyBMb2dvXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CdW5nZWUrU2hhZGUmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgIC5sb2dvTmVvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTUwcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDE1MHB4O1xuXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuICAgICAgLmxvZ29OZW9uIGIge1xuICAgICAgICBmb250OiA0MDAgMTN2aCAnQnVuZ2VlIFNoYWRlJztcbiAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICNmZjQ0NDQsIDAgMCAwLjVlbSAjZmY0NDQ0LFxuICAgICAgICAgIDAgMCAwLjFlbSAjZmY0NDQ0LCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICB9XG4gICAgICAubG9nb05lb24gYiBzcGFuIHtcbiAgICAgICAgYW5pbWF0aW9uOiBibGluayBsaW5lYXIgaW5maW5pdGUgMnM7XG4gICAgICB9XG4gICAgICAubG9nb05lb24gYiBzcGFuOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgYW5pbWF0aW9uOiBibGluayBsaW5lYXIgaW5maW5pdGUgM3M7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAgICAgNzglIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICA3OSUge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIDgwJSB7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgODElIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICA4MiUge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIDgzJSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgOTIlIHtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICA5Mi41JSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmVvbkxvZ287XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/NeonLogo.js */"));

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
    className: "jsx-1223823081" + " " + (classes || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("nav", {
    className: "jsx-1223823081" + " " + 'wrapper stroke',
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
    className: "jsx-1223823081" + " " + 'singMan',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("g", {
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
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
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M33.2001953,90.6738281c0.1665039-0.1660156,0.25-0.3671875,0.25-0.5996094  c0-0.2675781-0.0834961-0.4824219-0.25-0.6503906c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2001953,0-0.3833008,0.0839844-0.550293,0.25c-0.1665039,0.1679688-0.25,0.3828125-0.25,0.6503906  c0,0.2324219,0.0834961,0.4335938,0.25,0.5996094c0.1669922,0.1679688,0.3500977,0.25,0.550293,0.25  C32.8334961,90.9238281,33.0332031,90.8417969,33.2001953,90.6738281z M33.3500977,84.7246094  c-0.2333984-0.1679688-0.4501953-0.25-0.6499023-0.25c-0.1669922,0-0.3666992,0.0820313-0.6000977,0.25  c-0.1665039,0.2324219-0.25,0.4492188-0.25,0.6503906c0,0.1992188,0.0834961,0.3828125,0.25,0.5488281  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25c0.2666016,0,0.4833984-0.0820313,0.6499023-0.25  c0.1665039-0.1660156,0.25-0.3496094,0.25-0.5488281C33.6000977,85.1738281,33.5166016,84.9570313,33.3500977,84.7246094z   M33.7001953,80.6738281c0-0.2324219-0.0834961-0.4335938-0.25-0.5996094c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2666016,0-0.4833984,0.0839844-0.6499023,0.25c-0.1669922,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2011719,0.0830078,0.3828125,0.25,0.5507813c0.1665039,0.1660156,0.3833008,0.25,0.6499023,0.25  c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25C33.6166992,81.0566406,33.7001953,80.875,33.7001953,80.6738281z   M33.7998047,75.875c0-0.2011719-0.0830078-0.3847656-0.25-0.5507813c-0.1665039-0.1660156-0.3662109-0.25-0.5996094-0.25  c-0.2666016,0-0.4667969,0.0839844-0.6000977,0.25c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5507813  c0,0.265625,0.0834961,0.4824219,0.25,0.6484375c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25  c0.1665039,0,0.3662109-0.0820313,0.5996094-0.25C33.7167969,76.2910156,33.7998047,76.0742188,33.7998047,75.875z   M33.7001953,70.625c-0.1337891-0.1679688-0.3334961-0.25-0.6000977-0.25c-0.2333984,0-0.4165039,0.0820313-0.550293,0.25  c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5488281c0,0.2675781,0.0834961,0.484375,0.25,0.6503906  c0.1669922,0.1660156,0.3500977,0.25,0.550293,0.25c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25  c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906C33.9501953,70.9414063,33.8666992,70.7578125,33.7001953,70.625z   M59.2998047,48.0234375c-0.0664063,0.234375-0.0498047,0.4511719,0.050293,0.6503906L59.5,48.9746094  c0.2001953,0.2988281,0.4833984,0.4492188,0.8500977,0.4492188L60.7001953,49.375  c0.199707-0.1015625,0.3496094-0.2675781,0.449707-0.5c0.0668945-0.234375,0.050293-0.4511719-0.0498047-0.6503906  l-0.1499023-0.3007813c-0.2666016-0.5-0.6503906-0.6328125-1.1503906-0.4003906  C59.5332031,47.625,59.3666992,47.7910156,59.2998047,48.0234375z M55.2001953,38.4746094  c-0.5,0.2988281-0.6337891,0.6835938-0.4003906,1.1503906l3.3500977,6.5996094c0.1665039,0.3320313,0.4335938,0.5,0.800293,0.5  L59.2998047,46.625c0.5336914-0.2675781,0.6835938-0.6503906,0.4501953-1.1503906L56.3500977,38.875  C56.0834961,38.375,55.7001953,38.2402344,55.2001953,38.4746094z M69.7001953,22.2246094  c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094  c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25  c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906  c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25C69.25,22.4746094,69.4667969,22.390625,69.7001953,22.2246094z   M20.6499023,28.7734375l1.550293,1.75c0.5332031,0.4335938,1.2832031,0.8007813,2.25,1.1015625l-8.5,10.0488281  l-2.1000977-1.4492188L20.6499023,28.7734375z M22.75,24.0234375c0.6333008-0.7324219,1.5-1.1660156,2.6000977-1.2988281  c1.0664063-0.0996094,1.9663086,0.1503906,2.699707,0.75c0.800293,0.6328125,1.25,1.4667969,1.3500977,2.5  s-0.1665039,1.9335938-0.7998047,2.6992188c-0.6665039,0.8339844-1.5,1.3007813-2.5,1.4003906L25.2998047,30.125  c-0.7998047-0.1015625-1.4663086-0.4179688-2-0.9511719c-0.3330078-0.265625-0.6162109-0.6171875-0.8496094-1.0488281  l-0.050293-0.0507813c-0.1665039-0.3671875-0.2832031-0.8164063-0.3500977-1.3496094  C21.9501953,25.6582031,22.1835938,24.7578125,22.75,24.0234375z M44.1499023,11.375  c-0.4331055-0.3339844-0.8334961-0.2832031-1.199707,0.1484375c-0.3334961,0.4335938-0.2836914,0.8339844,0.1499023,1.2011719  l0.3500977,0.3496094c0.4663086,0.4003906,0.8496094,0.9160156,1.1499023,1.5507813  c0.1665039,0.3320313,0.4331055,0.5,0.7998047,0.5l0.3999023-0.1015625c0.2001953-0.0996094,0.3500977-0.265625,0.4501953-0.5  c0.0664063-0.2324219,0.0498047-0.4492188-0.0498047-0.6484375c-0.4667969-0.8007813-0.9667969-1.4667969-1.5-2  C44.5332031,11.6738281,44.3500977,11.5078125,44.1499023,11.375z M34.2001953,9.2246094  c1.4663086-0.9003906,3.1333008-1.3496094,5-1.3496094c2.6333008,0,4.8833008,0.9160156,6.75,2.75  C47.8164063,12.5566406,48.75,14.8066406,48.75,17.375c0,0.765625-0.0834961,1.5488281-0.25,2.3496094  c-0.4335938,1.6992188-1.2832031,3.1992188-2.5498047,4.5c-1.8666992,1.8320313-4.1166992,2.75-6.75,2.75  c-2.6669922,0-4.9169922-0.9335938-6.75-2.8007813c-1.8666992-1.8320313-2.800293-4.0996094-2.800293-6.7988281  c0-2.6015625,0.9335938-4.8515625,2.800293-6.75C33.0166016,10.0234375,33.6000977,9.5566406,34.2001953,9.2246094z   M41.0498047,9.875l-0.699707-0.1015625c-0.2333984,0-0.4335938,0.0839844-0.6000977,0.25  C39.5834961,10.1914063,39.5,10.390625,39.5,10.625c0,0.2324219,0.0834961,0.4492188,0.25,0.6484375  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25h0.25l0.25,0.0507813c0.3999023,0,0.6665039-0.2167969,0.7998047-0.6503906  c0.0668945-0.2324219,0.0336914-0.4492188-0.1000977-0.6503906C41.4501953,10.0742188,41.2832031,9.9414063,41.0498047,9.875z   M83.3500977,11.2246094L86,18.375L55.1499023,33.2734375C55.25,33.4414063,55.3500977,33.640625,55.4501953,33.875  l30.699707,58.1484375h-7.6000977l-19.449707-32l-22.050293,12.4511719  c-0.2666016,0.1660156-0.3999023,0.3828125-0.3999023,0.6503906l-1.25,19l-5.75-0.1015625l0.800293-23.1992188l18.449707-11.25  c0.3999023-0.2324219,0.5166016-0.5839844,0.3500977-1.0507813l-6.1000977-16.0488281c-0.199707-0.4003906-0.3666992-0.734375-0.5-1  L32.75,49.375L21.0498047,38.1738281l3.3500977-4.1992188L31.25,40.875c0.2001953,0.1992188,0.4165039,0.2832031,0.6499023,0.25  c0.2333984,0,0.4501953-0.1015625,0.6499023-0.3007813l9.1000977-11L83.3500977,11.2246094z M74.2001953,19.5742188  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25  c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094  c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25  c0.2001953,0,0.4169922-0.0839844,0.6503906-0.25C74.1166992,19.9902344,74.2001953,19.7734375,74.2001953,19.5742188z   M77.6000977,18.4746094c0.1665039,0,0.3666992-0.0839844,0.6000977-0.25c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.2011719-0.4335938-0.3007813-0.6000977-0.3007813  c-0.2333984,0-0.4335938,0.0996094-0.6000977,0.3007813c-0.1665039,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2675781,0.0834961,0.4824219,0.25,0.6503906C77.1665039,18.390625,77.3666992,18.4746094,77.6000977,18.4746094z   M82.3500977,16.1738281c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906c0-0.2324219-0.0834961-0.4316406-0.25-0.5996094  c-0.1665039-0.1660156-0.3666992-0.25-0.6000977-0.25c-0.2001953,0-0.3833008,0.0839844-0.5498047,0.25  c-0.1669922,0.1679688-0.25,0.3671875-0.25,0.5996094c0,0.2675781,0.0830078,0.484375,0.25,0.6503906  c0.1665039,0.1679688,0.3496094,0.25,0.5498047,0.25C81.9833984,16.4238281,82.1835938,16.3417969,82.3500977,16.1738281z",
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })))), __jsx("input", {
    type: "checkbox",
    id: "menu-toggle",
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "menu-toggle",
    className: "jsx-1223823081" + " " + 'label-toggle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("ul", {
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-1223823081",
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
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Home"))), __jsx("li", {
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shows",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Shows"))), __jsx("li", {
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Song List"))), __jsx("li", {
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Testimonials"))), __jsx("li", {
    className: "jsx-1223823081",
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
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Media"))), __jsx("li", {
    className: "jsx-1223823081",
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
    className: "jsx-1223823081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Contact")))))), __jsx("header", {
    className: "jsx-1223823081" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1223823081",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');nav ul li.jsx-1223823081{display:inline-block;}nav.jsx-1223823081 ul.jsx-1223823081 li.jsx-1223823081 a.jsx-1223823081{display:block;padding-bottom:4px;}nav.jsx-1223823081 ul.jsx-1223823081 li.jsx-1223823081 a.jsx-1223823081,nav.jsx-1223823081 ul.jsx-1223823081 li.jsx-1223823081 a.jsx-1223823081:after,nav.jsx-1223823081 ul.jsx-1223823081 li.jsx-1223823081 a.jsx-1223823081:before{-webkit-transition:all .5s;transition:all .5s;}nav.jsx-1223823081 ul.jsx-1223823081 li.jsx-1223823081 a.jsx-1223823081:hover{color:#f1f1f1;opacity:0.65;}nav.stroke.jsx-1223823081 ul.jsx-1223823081 li.jsx-1223823081 a.jsx-1223823081{position:relative;}nav.stroke.jsx-1223823081 ul.jsx-1223823081 li.jsx-1223823081 a.jsx-1223823081:after,nav.fill.jsx-1223823081 ul.jsx-1223823081 li.jsx-1223823081 a.jsx-1223823081:after{position:absolute;bottom:0;left:0;right:0;margin:auto;width:0%;content:'';color:transparent;background:#f1f1f1;height:1px;}nav.stroke.jsx-1223823081 ul.jsx-1223823081 li.jsx-1223823081 a.jsx-1223823081:hover.jsx-1223823081:after{width:100%;}.navBar.jsx-1223823081{-webkit-transition:background-color 0.2s;transition:background-color 0.2s;background:none;}.navBar.scrolled.jsx-1223823081{background:#2c71f6;}.singMan.jsx-1223823081{-webkit-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);}h1.jsx-1223823081{font-size:3em;padding:3em 0 1em 0;}.navBar.jsx-1223823081{position:fixed;right:0;left:0;padding:5px 0;z-index:3;}.logo.jsx-1223823081{background-color:#f1f1f1;border-radius:50px;display:inline-block;height:45px;margin:1em 0;width:45px;}.wrapper.jsx-1223823081{margin:0 auto;max-width:1400px;padding:0 2%;}nav.jsx-1223823081 ul.jsx-1223823081{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;list-style-type:none;width:50%;}nav.jsx-1223823081 ul.jsx-1223823081 a.jsx-1223823081{font-size:20px;font-family:'Roboto',sans-serif;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;}li.jsx-1223823081{display:inline-block;}#menu-toggle.jsx-1223823081{display:none;}.label-toggle.jsx-1223823081{display:none;}.wrapper.jsx-1223823081{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:768px){nav.jsx-1223823081 ul.jsx-1223823081 a.jsx-1223823081{color:#53354a;}ul.jsx-1223823081{background-color:#e84545;display:block;height:0;list-style-type:none;opacity:0;text-align:center;-webkit-transition:all 1s ease;transition:all 1s ease;width:100%;visibility:hidden;}li.jsx-1223823081{border-bottom:2px solid #53354a;color:#53354a;display:block;font-size:1.5em;padding:2em 0;}#menu-toggle.jsx-1223823081:checked~ul.jsx-1223823081{opacity:1;height:100vh;visibility:visible;}.label-toggle.jsx-1223823081{background:linear-gradient( to bottom, #e84545 0%, #e84545 20%, transparent 20%, transparent 40%, #e84545 40%, #e84545 60%, transparent 60%, transparent 80%, #e84545 80%, #e84545 100% );cursor:pointer;display:block;float:right;height:35px;margin-top:1em;width:35px;}.wrapper.jsx-1223823081{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9UZXN0SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGa0IsQUFHZ0csQUFNbEUsQUFHUCxBQU1LLEFBR0wsQUFNSSxBQUlBLEFBWVAsQUFJd0IsQUFJZCxBQUlLLEFBSVosQUFLQyxBQVFVLEFBU1gsQUFNRCxBQU9FLEFBUU0sQUFJUixBQUlBLEFBSU0sQUFRRCxBQUlXLEFBWU8sQUFRdEIsQUFrQlQsQUFXYSxVQTVCRCxDQXZHbkIsRUErREEsQUFJQSxDQWxHcUIsQUFTTixBQXNDTyxBQXNCSCxBQXlDZixBQXFEQSxDQS9HTSxBQThCeUIsR0FuRW5DLEFBSVcsQ0FvQlQsRUExQ0YsQUE2RkEsRUFyQ1MsQUFrRmdCLEVBM0VKLEFBc0RELEVBeEdwQixBQVVTLEdBa0NPLENBZ0JELENBd0RLLENBN0hwQixDQW9CVSxBQTJCVixLQW1FZSxHQTdGRCxBQWtIVixFQWpGUSxBQU1XLEFBVXZCLEVBakVBLEFBeUhvQixDQTVDSixDQWlDVyxNQTdGaEIsQUFpQ1gsTUF3RXNCLENBNUNDLEVBNURWLEVBc0NDLElBdURFLEtBNUZJLEFBVUEsQUF3Q1ksRUFzRFosQ0FsRUwsRUF1RFMsV0FsRnRCLEFBT0YsQUFxQmEsQUFrRVQsRUF4R2lCLENBNEVOLElBaUJjLElBdEQ3QixVQXRDYSxBQTBEYyxXQXpEM0IsNkJBNEZpQixXQUNPLEtBbEJRLEVBakJoQyxXQW9DSSxNQStCaUIsR0E3RUUsWUE4RUgsU0E3RVIsS0E4RU0sS0E3RWxCLE9BOEVrQixZQUNHLGVBQ0osV0FDYixpQkF2REoiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9jb21wb25lbnRzL1Rlc3RIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE5lb25Mb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTmVvbkxvZ28nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUZXN0SGVhZGVyID0gXyA9PiB7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ25hdkJhcicsIHtcbiAgICBzY3JvbGxlZDogc2Nyb2xsZWQsXG4gIH0pO1xuICB1c2VFZmZlY3QoXyA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gXyA9PiB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMSkge1xuICAgICAgICBzZXRTY3JvbGxlZCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNjcm9sbGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiBfID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9J3dyYXBwZXIgc3Ryb2tlJz5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICB3aWR0aD0nNjAnXG4gICAgICAgICAgICBoZWlnaHQ9JzYwJ1xuICAgICAgICAgICAgdmlld0JveD0nMCAwIDYwIDYwJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nTWFuJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1MCA1MCkgc2NhbGUoLTAuNjkgMC42OSkgcm90YXRlKDApIHRyYW5zbGF0ZSgtNTAgLTUwKSdcbiAgICAgICAgICAgIC8vIHN0eWxlPSdmaWxsOiNGRkZGRkYnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBmaWxsPScjZjFmMWYxJ1xuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPScxLjEnXG4gICAgICAgICAgICAgICAgeD0nMHB4J1xuICAgICAgICAgICAgICAgIHk9JzBweCdcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMTAwIDEwMCdcbiAgICAgICAgICAgICAgICBlbmFibGUtYmFja2dyb3VuZD0nbmV3IDAgMCAxMDAgMTAwJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgIGQ9J00zMy4yMDAxOTUzLDkwLjY3MzgyODFjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzY3MTg3NSwwLjI1LTAuNTk5NjA5NCAgYzAtMC4yNjc1NzgxLTAuMDgzNDk2MS0wLjQ4MjQyMTktMC4yNS0wLjY1MDM5MDZjLTAuMTY2OTkyMi0wLjE2NjAxNTYtMC4zNjY2OTkyLTAuMjUtMC42MDAwOTc3LTAuMjUgIGMtMC4yMDAxOTUzLDAtMC4zODMzMDA4LDAuMDgzOTg0NC0wLjU1MDI5MywwLjI1Yy0wLjE2NjUwMzksMC4xNjc5Njg4LTAuMjUsMC4zODI4MTI1LTAuMjUsMC42NTAzOTA2ICBjMCwwLjIzMjQyMTksMC4wODM0OTYxLDAuNDMzNTkzOCwwLjI1LDAuNTk5NjA5NGMwLjE2Njk5MjIsMC4xNjc5Njg4LDAuMzUwMDk3NywwLjI1LDAuNTUwMjkzLDAuMjUgIEMzMi44MzM0OTYxLDkwLjkyMzgyODEsMzMuMDMzMjAzMSw5MC44NDE3OTY5LDMzLjIwMDE5NTMsOTAuNjczODI4MXogTTMzLjM1MDA5NzcsODQuNzI0NjA5NCAgYy0wLjIzMzM5ODQtMC4xNjc5Njg4LTAuNDUwMTk1My0wLjI1LTAuNjQ5OTAyMy0wLjI1Yy0wLjE2Njk5MjIsMC0wLjM2NjY5OTIsMC4wODIwMzEzLTAuNjAwMDk3NywwLjI1ICBjLTAuMTY2NTAzOSwwLjIzMjQyMTktMC4yNSwwLjQ0OTIxODgtMC4yNSwwLjY1MDM5MDZjMCwwLjE5OTIxODgsMC4wODM0OTYxLDAuMzgyODEyNSwwLjI1LDAuNTQ4ODI4MSAgYzAuMTY2NTAzOSwwLjE2Nzk2ODgsMC4zNjY2OTkyLDAuMjUsMC42MDAwOTc3LDAuMjVjMC4yNjY2MDE2LDAsMC40ODMzOTg0LTAuMDgyMDMxMywwLjY0OTkwMjMtMC4yNSAgYzAuMTY2NTAzOS0wLjE2NjAxNTYsMC4yNS0wLjM0OTYwOTQsMC4yNS0wLjU0ODgyODFDMzMuNjAwMDk3Nyw4NS4xNzM4MjgxLDMzLjUxNjYwMTYsODQuOTU3MDMxMywzMy4zNTAwOTc3LDg0LjcyNDYwOTR6ICAgTTMzLjcwMDE5NTMsODAuNjczODI4MWMwLTAuMjMyNDIxOS0wLjA4MzQ5NjEtMC40MzM1OTM4LTAuMjUtMC41OTk2MDk0Yy0wLjE2Njk5MjItMC4xNjYwMTU2LTAuMzY2Njk5Mi0wLjI1LTAuNjAwMDk3Ny0wLjI1ICBjLTAuMjY2NjAxNiwwLTAuNDgzMzk4NCwwLjA4Mzk4NDQtMC42NDk5MDIzLDAuMjVjLTAuMTY2OTkyMiwwLjE2NjAxNTYtMC4yNSwwLjM2NzE4NzUtMC4yNSwwLjU5OTYwOTQgIGMwLDAuMjAxMTcxOSwwLjA4MzAwNzgsMC4zODI4MTI1LDAuMjUsMC41NTA3ODEzYzAuMTY2NTAzOSwwLjE2NjAxNTYsMC4zODMzMDA4LDAuMjUsMC42NDk5MDIzLDAuMjUgIGMwLjIzMzM5ODQsMCwwLjQzMzEwNTUtMC4wODM5ODQ0LDAuNjAwMDk3Ny0wLjI1QzMzLjYxNjY5OTIsODEuMDU2NjQwNiwzMy43MDAxOTUzLDgwLjg3NSwzMy43MDAxOTUzLDgwLjY3MzgyODF6ICAgTTMzLjc5OTgwNDcsNzUuODc1YzAtMC4yMDExNzE5LTAuMDgzMDA3OC0wLjM4NDc2NTYtMC4yNS0wLjU1MDc4MTNjLTAuMTY2NTAzOS0wLjE2NjAxNTYtMC4zNjYyMTA5LTAuMjUtMC41OTk2MDk0LTAuMjUgIGMtMC4yNjY2MDE2LDAtMC40NjY3OTY5LDAuMDgzOTg0NC0wLjYwMDA5NzcsMC4yNWMtMC4xNjY1MDM5LDAuMTMyODEyNS0wLjI1LDAuMzE2NDA2My0wLjI1LDAuNTUwNzgxMyAgYzAsMC4yNjU2MjUsMC4wODM0OTYxLDAuNDgyNDIxOSwwLjI1LDAuNjQ4NDM3NWMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzY2Njk5MiwwLjI1LDAuNjAwMDk3NywwLjI1ICBjMC4xNjY1MDM5LDAsMC4zNjYyMTA5LTAuMDgyMDMxMywwLjU5OTYwOTQtMC4yNUMzMy43MTY3OTY5LDc2LjI5MTAxNTYsMzMuNzk5ODA0Nyw3Ni4wNzQyMTg4LDMzLjc5OTgwNDcsNzUuODc1eiAgIE0zMy43MDAxOTUzLDcwLjYyNWMtMC4xMzM3ODkxLTAuMTY3OTY4OC0wLjMzMzQ5NjEtMC4yNS0wLjYwMDA5NzctMC4yNWMtMC4yMzMzOTg0LDAtMC40MTY1MDM5LDAuMDgyMDMxMy0wLjU1MDI5MywwLjI1ICBjLTAuMTY2NTAzOSwwLjEzMjgxMjUtMC4yNSwwLjMxNjQwNjMtMC4yNSwwLjU0ODgyODFjMCwwLjI2NzU3ODEsMC4wODM0OTYxLDAuNDg0Mzc1LDAuMjUsMC42NTAzOTA2ICBjMC4xNjY5OTIyLDAuMTY2MDE1NiwwLjM1MDA5NzcsMC4yNSwwLjU1MDI5MywwLjI1YzAuMjMzMzk4NCwwLDAuNDMzMTA1NS0wLjA4Mzk4NDQsMC42MDAwOTc3LTAuMjUgIGMwLjE2NjUwMzktMC4xNjYwMTU2LDAuMjUtMC4zODI4MTI1LDAuMjUtMC42NTAzOTA2QzMzLjk1MDE5NTMsNzAuOTQxNDA2MywzMy44NjY2OTkyLDcwLjc1NzgxMjUsMzMuNzAwMTk1Myw3MC42MjV6ICAgTTU5LjI5OTgwNDcsNDguMDIzNDM3NWMtMC4wNjY0MDYzLDAuMjM0Mzc1LTAuMDQ5ODA0NywwLjQ1MTE3MTksMC4wNTAyOTMsMC42NTAzOTA2TDU5LjUsNDguOTc0NjA5NCAgYzAuMjAwMTk1MywwLjI5ODgyODEsMC40ODMzOTg0LDAuNDQ5MjE4OCwwLjg1MDA5NzcsMC40NDkyMTg4TDYwLjcwMDE5NTMsNDkuMzc1ICBjMC4xOTk3MDctMC4xMDE1NjI1LDAuMzQ5NjA5NC0wLjI2NzU3ODEsMC40NDk3MDctMC41YzAuMDY2ODk0NS0wLjIzNDM3NSwwLjA1MDI5My0wLjQ1MTE3MTktMC4wNDk4MDQ3LTAuNjUwMzkwNiAgbC0wLjE0OTkwMjMtMC4zMDA3ODEzYy0wLjI2NjYwMTYtMC41LTAuNjUwMzkwNi0wLjYzMjgxMjUtMS4xNTAzOTA2LTAuNDAwMzkwNiAgQzU5LjUzMzIwMzEsNDcuNjI1LDU5LjM2NjY5OTIsNDcuNzkxMDE1Niw1OS4yOTk4MDQ3LDQ4LjAyMzQzNzV6IE01NS4yMDAxOTUzLDM4LjQ3NDYwOTQgIGMtMC41LDAuMjk4ODI4MS0wLjYzMzc4OTEsMC42ODM1OTM4LTAuNDAwMzkwNiwxLjE1MDM5MDZsMy4zNTAwOTc3LDYuNTk5NjA5NGMwLjE2NjUwMzksMC4zMzIwMzEzLDAuNDMzNTkzOCwwLjUsMC44MDAyOTMsMC41ICBMNTkuMjk5ODA0Nyw0Ni42MjVjMC41MzM2OTE0LTAuMjY3NTc4MSwwLjY4MzU5MzgtMC42NTAzOTA2LDAuNDUwMTk1My0xLjE1MDM5MDZMNTYuMzUwMDk3NywzOC44NzUgIEM1Ni4wODM0OTYxLDM4LjM3NSw1NS43MDAxOTUzLDM4LjI0MDIzNDQsNTUuMjAwMTk1MywzOC40NzQ2MDk0eiBNNjkuNzAwMTk1MywyMi4yMjQ2MDk0ICBjMC4xNjY1MDM5LTAuMjM0Mzc1LDAuMjUtMC40NTExNzE5LDAuMjUtMC42NTAzOTA2YzAtMC4xNjYwMTU2LTAuMDgzNDk2MS0wLjM2NzE4NzUtMC4yNS0wLjU5OTYwOTQgIGMtMC4yMzMzOTg0LTAuMTY3OTY4OC0wLjQ1MDE5NTMtMC4yNS0wLjY1MDM5MDYtMC4yNWMtMC4xNjY1MDM5LDAtMC4zNjYyMTA5LDAuMDgyMDMxMy0wLjU5OTYwOTQsMC4yNSAgYy0wLjE2Njk5MjIsMC4yMzI0MjE5LTAuMjUsMC40MzM1OTM4LTAuMjUsMC41OTk2MDk0YzAsMC4xOTkyMTg4LDAuMDgzMDA3OCwwLjQxNjAxNTYsMC4yNSwwLjY1MDM5MDYgIGMwLjIzMzM5ODQsMC4xNjYwMTU2LDAuNDMzMTA1NSwwLjI1LDAuNTk5NjA5NCwwLjI1QzY5LjI1LDIyLjQ3NDYwOTQsNjkuNDY2Nzk2OSwyMi4zOTA2MjUsNjkuNzAwMTk1MywyMi4yMjQ2MDk0eiAgIE0yMC42NDk5MDIzLDI4Ljc3MzQzNzVsMS41NTAyOTMsMS43NWMwLjUzMzIwMzEsMC40MzM1OTM4LDEuMjgzMjAzMSwwLjgwMDc4MTMsMi4yNSwxLjEwMTU2MjVsLTguNSwxMC4wNDg4MjgxICBsLTIuMTAwMDk3Ny0xLjQ0OTIxODhMMjAuNjQ5OTAyMywyOC43NzM0Mzc1eiBNMjIuNzUsMjQuMDIzNDM3NWMwLjYzMzMwMDgtMC43MzI0MjE5LDEuNS0xLjE2NjAxNTYsMi42MDAwOTc3LTEuMjk4ODI4MSAgYzEuMDY2NDA2My0wLjA5OTYwOTQsMS45NjYzMDg2LDAuMTUwMzkwNiwyLjY5OTcwNywwLjc1YzAuODAwMjkzLDAuNjMyODEyNSwxLjI1LDEuNDY2Nzk2OSwxLjM1MDA5NzcsMi41ICBzLTAuMTY2NTAzOSwxLjkzMzU5MzgtMC43OTk4MDQ3LDIuNjk5MjE4OGMtMC42NjY1MDM5LDAuODMzOTg0NC0xLjUsMS4zMDA3ODEzLTIuNSwxLjQwMDM5MDZMMjUuMjk5ODA0NywzMC4xMjUgIGMtMC43OTk4MDQ3LTAuMTAxNTYyNS0xLjQ2NjMwODYtMC40MTc5Njg4LTItMC45NTExNzE5Yy0wLjMzMzAwNzgtMC4yNjU2MjUtMC42MTYyMTA5LTAuNjE3MTg3NS0wLjg0OTYwOTQtMS4wNDg4MjgxICBsLTAuMDUwMjkzLTAuMDUwNzgxM2MtMC4xNjY1MDM5LTAuMzY3MTg3NS0wLjI4MzIwMzEtMC44MTY0MDYzLTAuMzUwMDk3Ny0xLjM0OTYwOTQgIEMyMS45NTAxOTUzLDI1LjY1ODIwMzEsMjIuMTgzNTkzOCwyNC43NTc4MTI1LDIyLjc1LDI0LjAyMzQzNzV6IE00NC4xNDk5MDIzLDExLjM3NSAgYy0wLjQzMzEwNTUtMC4zMzM5ODQ0LTAuODMzNDk2MS0wLjI4MzIwMzEtMS4xOTk3MDcsMC4xNDg0Mzc1Yy0wLjMzMzQ5NjEsMC40MzM1OTM4LTAuMjgzNjkxNCwwLjgzMzk4NDQsMC4xNDk5MDIzLDEuMjAxMTcxOSAgbDAuMzUwMDk3NywwLjM0OTYwOTRjMC40NjYzMDg2LDAuNDAwMzkwNiwwLjg0OTYwOTQsMC45MTYwMTU2LDEuMTQ5OTAyMywxLjU1MDc4MTMgIGMwLjE2NjUwMzksMC4zMzIwMzEzLDAuNDMzMTA1NSwwLjUsMC43OTk4MDQ3LDAuNWwwLjM5OTkwMjMtMC4xMDE1NjI1YzAuMjAwMTk1My0wLjA5OTYwOTQsMC4zNTAwOTc3LTAuMjY1NjI1LDAuNDUwMTk1My0wLjUgIGMwLjA2NjQwNjMtMC4yMzI0MjE5LDAuMDQ5ODA0Ny0wLjQ0OTIxODgtMC4wNDk4MDQ3LTAuNjQ4NDM3NWMtMC40NjY3OTY5LTAuODAwNzgxMy0wLjk2Njc5NjktMS40NjY3OTY5LTEuNS0yICBDNDQuNTMzMjAzMSwxMS42NzM4MjgxLDQ0LjM1MDA5NzcsMTEuNTA3ODEyNSw0NC4xNDk5MDIzLDExLjM3NXogTTM0LjIwMDE5NTMsOS4yMjQ2MDk0ICBjMS40NjYzMDg2LTAuOTAwMzkwNiwzLjEzMzMwMDgtMS4zNDk2MDk0LDUtMS4zNDk2MDk0YzIuNjMzMzAwOCwwLDQuODgzMzAwOCwwLjkxNjAxNTYsNi43NSwyLjc1ICBDNDcuODE2NDA2MywxMi41NTY2NDA2LDQ4Ljc1LDE0LjgwNjY0MDYsNDguNzUsMTcuMzc1YzAsMC43NjU2MjUtMC4wODM0OTYxLDEuNTQ4ODI4MS0wLjI1LDIuMzQ5NjA5NCAgYy0wLjQzMzU5MzgsMS42OTkyMTg4LTEuMjgzMjAzMSwzLjE5OTIxODgtMi41NDk4MDQ3LDQuNWMtMS44NjY2OTkyLDEuODMyMDMxMy00LjExNjY5OTIsMi43NS02Ljc1LDIuNzUgIGMtMi42NjY5OTIyLDAtNC45MTY5OTIyLTAuOTMzNTkzOC02Ljc1LTIuODAwNzgxM2MtMS44NjY2OTkyLTEuODMyMDMxMy0yLjgwMDI5My00LjA5OTYwOTQtMi44MDAyOTMtNi43OTg4MjgxICBjMC0yLjYwMTU2MjUsMC45MzM1OTM4LTQuODUxNTYyNSwyLjgwMDI5My02Ljc1QzMzLjAxNjYwMTYsMTAuMDIzNDM3NSwzMy42MDAwOTc3LDkuNTU2NjQwNiwzNC4yMDAxOTUzLDkuMjI0NjA5NHogICBNNDEuMDQ5ODA0Nyw5Ljg3NWwtMC42OTk3MDctMC4xMDE1NjI1Yy0wLjIzMzM5ODQsMC0wLjQzMzU5MzgsMC4wODM5ODQ0LTAuNjAwMDk3NywwLjI1ICBDMzkuNTgzNDk2MSwxMC4xOTE0MDYzLDM5LjUsMTAuMzkwNjI1LDM5LjUsMTAuNjI1YzAsMC4yMzI0MjE5LDAuMDgzNDk2MSwwLjQ0OTIxODgsMC4yNSwwLjY0ODQzNzUgIGMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzY2Njk5MiwwLjI1LDAuNjAwMDk3NywwLjI1aDAuMjVsMC4yNSwwLjA1MDc4MTNjMC4zOTk5MDIzLDAsMC42NjY1MDM5LTAuMjE2Nzk2OSwwLjc5OTgwNDctMC42NTAzOTA2ICBjMC4wNjY4OTQ1LTAuMjMyNDIxOSwwLjAzMzY5MTQtMC40NDkyMTg4LTAuMTAwMDk3Ny0wLjY1MDM5MDZDNDEuNDUwMTk1MywxMC4wNzQyMTg4LDQxLjI4MzIwMzEsOS45NDE0MDYzLDQxLjA0OTgwNDcsOS44NzV6ICAgTTgzLjM1MDA5NzcsMTEuMjI0NjA5NEw4NiwxOC4zNzVMNTUuMTQ5OTAyMywzMy4yNzM0Mzc1QzU1LjI1LDMzLjQ0MTQwNjMsNTUuMzUwMDk3NywzMy42NDA2MjUsNTUuNDUwMTk1MywzMy44NzUgIGwzMC42OTk3MDcsNTguMTQ4NDM3NWgtNy42MDAwOTc3bC0xOS40NDk3MDctMzJsLTIyLjA1MDI5MywxMi40NTExNzE5ICBjLTAuMjY2NjAxNiwwLjE2NjAxNTYtMC4zOTk5MDIzLDAuMzgyODEyNS0wLjM5OTkwMjMsMC42NTAzOTA2bC0xLjI1LDE5bC01Ljc1LTAuMTAxNTYyNWwwLjgwMDI5My0yMy4xOTkyMTg4bDE4LjQ0OTcwNy0xMS4yNSAgYzAuMzk5OTAyMy0wLjIzMjQyMTksMC41MTY2MDE2LTAuNTgzOTg0NCwwLjM1MDA5NzctMS4wNTA3ODEzbC02LjEwMDA5NzctMTYuMDQ4ODI4MWMtMC4xOTk3MDctMC40MDAzOTA2LTAuMzY2Njk5Mi0wLjczNDM3NS0wLjUtMSAgTDMyLjc1LDQ5LjM3NUwyMS4wNDk4MDQ3LDM4LjE3MzgyODFsMy4zNTAwOTc3LTQuMTk5MjE4OEwzMS4yNSw0MC44NzVjMC4yMDAxOTUzLDAuMTk5MjE4OCwwLjQxNjUwMzksMC4yODMyMDMxLDAuNjQ5OTAyMywwLjI1ICBjMC4yMzMzOTg0LDAsMC40NTAxOTUzLTAuMTAxNTYyNSwwLjY0OTkwMjMtMC4zMDA3ODEzbDkuMTAwMDk3Ny0xMUw4My4zNTAwOTc3LDExLjIyNDYwOTR6IE03NC4yMDAxOTUzLDE5LjU3NDIxODggIGMwLTAuMTY2MDE1Ni0wLjA4MzQ5NjEtMC4zNjcxODc1LTAuMjUtMC41OTk2MDk0Yy0wLjIzMzM5ODQtMC4xNjc5Njg4LTAuNDUwMTk1My0wLjI1LTAuNjUwMzkwNi0wLjI1ICBjLTAuMTY2NTAzOSwwLTAuMzY2MjEwOSwwLjA4MjAzMTMtMC41OTk2MDk0LDAuMjVjLTAuMTY2OTkyMiwwLjIzMjQyMTktMC4yNSwwLjQzMzU5MzgtMC4yNSwwLjU5OTYwOTQgIGMwLDAuMTk5MjE4OCwwLjA4MzAwNzgsMC40MTYwMTU2LDAuMjUsMC42NTAzOTA2YzAuMjMzMzk4NCwwLjE2NjAxNTYsMC40MzMxMDU1LDAuMjUsMC41OTk2MDk0LDAuMjUgIGMwLjIwMDE5NTMsMCwwLjQxNjk5MjItMC4wODM5ODQ0LDAuNjUwMzkwNi0wLjI1Qzc0LjExNjY5OTIsMTkuOTkwMjM0NCw3NC4yMDAxOTUzLDE5Ljc3MzQzNzUsNzQuMjAwMTk1MywxOS41NzQyMTg4eiAgIE03Ny42MDAwOTc3LDE4LjQ3NDYwOTRjMC4xNjY1MDM5LDAsMC4zNjY2OTkyLTAuMDgzOTg0NCwwLjYwMDA5NzctMC4yNWMwLjE2NjUwMzktMC4yMzQzNzUsMC4yNS0wLjQ1MTE3MTksMC4yNS0wLjY1MDM5MDYgIGMwLTAuMTY2MDE1Ni0wLjA4MzQ5NjEtMC4zNjcxODc1LTAuMjUtMC41OTk2MDk0Yy0wLjIzMzM5ODQtMC4yMDExNzE5LTAuNDMzNTkzOC0wLjMwMDc4MTMtMC42MDAwOTc3LTAuMzAwNzgxMyAgYy0wLjIzMzM5ODQsMC0wLjQzMzU5MzgsMC4wOTk2MDk0LTAuNjAwMDk3NywwLjMwMDc4MTNjLTAuMTY2NTAzOSwwLjE2NjAxNTYtMC4yNSwwLjM2NzE4NzUtMC4yNSwwLjU5OTYwOTQgIGMwLDAuMjY3NTc4MSwwLjA4MzQ5NjEsMC40ODI0MjE5LDAuMjUsMC42NTAzOTA2Qzc3LjE2NjUwMzksMTguMzkwNjI1LDc3LjM2NjY5OTIsMTguNDc0NjA5NCw3Ny42MDAwOTc3LDE4LjQ3NDYwOTR6ICAgTTgyLjM1MDA5NzcsMTYuMTczODI4MWMwLjE2NjUwMzktMC4xNjYwMTU2LDAuMjUtMC4zODI4MTI1LDAuMjUtMC42NTAzOTA2YzAtMC4yMzI0MjE5LTAuMDgzNDk2MS0wLjQzMTY0MDYtMC4yNS0wLjU5OTYwOTQgIGMtMC4xNjY1MDM5LTAuMTY2MDE1Ni0wLjM2NjY5OTItMC4yNS0wLjYwMDA5NzctMC4yNWMtMC4yMDAxOTUzLDAtMC4zODMzMDA4LDAuMDgzOTg0NC0wLjU0OTgwNDcsMC4yNSAgYy0wLjE2Njk5MjIsMC4xNjc5Njg4LTAuMjUsMC4zNjcxODc1LTAuMjUsMC41OTk2MDk0YzAsMC4yNjc1NzgxLDAuMDgzMDA3OCwwLjQ4NDM3NSwwLjI1LDAuNjUwMzkwNiAgYzAuMTY2NTAzOSwwLjE2Nzk2ODgsMC4zNDk2MDk0LDAuMjUsMC41NDk4MDQ3LDAuMjVDODEuOTgzMzk4NCwxNi40MjM4MjgxLDgyLjE4MzU5MzgsMTYuMzQxNzk2OSw4Mi4zNTAwOTc3LDE2LjE3MzgyODF6J1xuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgaWQ9J21lbnUtdG9nZ2xlJyAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdtZW51LXRvZ2dsZScgY2xhc3NOYW1lPSdsYWJlbC10b2dnbGUnPjwvbGFiZWw+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvc2hvd3MnPlxuICAgICAgICAgICAgICAgIDxhPlNob3dzPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvbGlzdCc+XG4gICAgICAgICAgICAgICAgPGE+U29uZyBMaXN0PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPlxuICAgICAgICAgICAgICAgIDxhPlRlc3RpbW9uaWFsczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL21lZGlhJz5cbiAgICAgICAgICAgICAgICA8YT5NZWRpYTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnPlxuICAgICAgICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSd3cmFwcGVyJz48L2hlYWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgIFxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvfFJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwJyk7XG5cblxuXG5cbiAgICAgIG5hdiB1bCBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIG5hdiB1bCBsaSBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgICBuYXYgdWwgbGkgYSxcbiAgICAgIG5hdiB1bCBsaSBhOmFmdGVyLFxuICAgICAgbmF2IHVsIGxpIGE6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgIH1cbiAgICAgIG5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgICB9XG5cbiAgICAgICAgICAvKiBzdHJva2UgKi9cbiAgICAgIG5hdi5zdHJva2UgdWwgbGkgYSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIG5hdi5zdHJva2UgdWwgbGkgYTphZnRlcixcbiAgICAgIG5hdi5maWxsIHVsIGxpIGE6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIH1cbiAgICAgIG5hdi5zdHJva2UgdWwgbGkgYTpob3ZlcjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgLm5hdkJhciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdkJhci5zY3JvbGxlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzJjNzFmNjtcbiAgICAgICAgfVxuXG4gICAgICAuc2luZ01hbiB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgfVxuICAgIFxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgcGFkZGluZzogM2VtIDAgMWVtIDA7XG4gICAgICB9XG5cbiAgICAgIC5uYXZCYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgIH1cblxuICAgICAgLmxvZ28ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICB9XG5cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDIlO1xuICAgICAgfVxuXG4gICAgICBuYXYgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cblxuICAgICAgbmF2IHVsIGEge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjbWVudS10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubGFiZWwtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgIFxuICAgICAgICAgIG5hdiB1bCBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTMzNTRhOyBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg0NTQ1O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUzMzU0YTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTMzNTRhO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgcGFkZGluZzogMmVtIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI21lbnUtdG9nZ2xlOmNoZWNrZWQgfiB1bCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxhYmVsLXRvZ2dsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgICAgICAgI2U4NDU0NSAwJSxcbiAgICAgICAgICAgICAgI2U4NDU0NSAyMCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDIwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNDAlLFxuICAgICAgICAgICAgICAjZTg0NTQ1IDQwJSxcbiAgICAgICAgICAgICAgI2U4NDU0NSA2MCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDYwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgODAlLFxuICAgICAgICAgICAgICAjZTg0NTQ1IDgwJSxcbiAgICAgICAgICAgICAgI2U4NDU0NSAxMDAlXG4gICAgICAgICAgICApOyBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js */"));
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

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

/***/ "./pages/shows.js":
/*!************************!*\
  !*** ./pages/shows.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shows; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/shows.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


const contentful = __webpack_require__(/*! contentful */ "contentful");



class Shows extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    };
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: 'sqmp3jmwaedr',
      accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
    });
    client.getEntries({
      content_type: 'upcomingShows'
    }).then(response => {
      this.setState({
        shows: response.items
      });
    });
  }

  render() {
    const shows = this.state.shows.map((shows, i) => {
      if (shows.fields.showOne) {
        const actualShows = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(shows.fields);

        return actualShows.map((show, i) => {
          const link = show.content[0].content[1].data.uri;
          return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("p", {
            className: "jsx-3291391952",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, __jsx("a", {
            target: "_blank",
            href: link,
            className: "jsx-3291391952",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, show.content[1].content[0].value)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
            id: "3291391952",
            __self: this
          }, "a.jsx-3291391952{-webkit-text-decoration:none;text-decoration:none;color:#f1f1f1;-webkit-transition:all 0.4s;transition:all 0.4s;}p.jsx-3291391952{text-align:left;}a.jsx-3291391952:hover{opacity:0.65;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvc2hvd3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUMwQixBQUd3QyxBQUtMLEFBSUgsYUFDZixHQUpBLGtDQUxnQixjQUNNLGdEQUN0QiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL3BhZ2VzL3Nob3dzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd3M6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAndXBjb21pbmdTaG93cycgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd3M6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNob3dzID0gdGhpcy5zdGF0ZS5zaG93cy5tYXAoKHNob3dzLCBpKSA9PiB7XG4gICAgICBpZiAoc2hvd3MuZmllbGRzLnNob3dPbmUpIHtcbiAgICAgICAgY29uc3QgYWN0dWFsU2hvd3MgPSBPYmplY3QudmFsdWVzKHNob3dzLmZpZWxkcyk7XG4gICAgICAgIHJldHVybiBhY3R1YWxTaG93cy5tYXAoKHNob3csIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBsaW5rID0gc2hvdy5jb250ZW50WzBdLmNvbnRlbnRbMV0uZGF0YS51cmk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPXtsaW5rfT5cbiAgICAgICAgICAgICAgICAgIHtzaG93LmNvbnRlbnRbMV0uY29udGVudFswXS52YWx1ZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42NTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0V3JhcHBlcic+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY29udGFjdE5lb24nPlVQQ09NSU5HIFNIT1dTPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2hvd3MnPntzaG93c308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjZmY0NDQ0LFxuICAgICAgICAgICAgICAwIDAgMC41ZW0gI2ZmNDQ0NCwgMCAwIDAuMWVtICNmZjQ0NDQsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFjdE5lb24ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdFdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2hvd3Mge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU1dmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/shows.js */"));
        });
      }
    });
    return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1289621053" + " " + 'listWrapper',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1289621053" + " " + 'contactNeon',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "UPCOMING SHOWS"), __jsx("div", {
      className: "jsx-1289621053" + " " + 'shows',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, shows)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1289621053",
      __self: this
    }, "h1.jsx-1289621053{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:'Roboto',sans-serif;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444, 0 0 0.5em #ff4444,0 0 0.1em #ff4444,0 10px 3px #000;}.contactNeon.jsx-1289621053{margin-bottom:70px;}.listWrapper.jsx-1289621053{margin-top:25vh;}.shows.jsx-1289621053{font-family:'Roboto',sans-serif;width:600px;margin:0 auto;text-align:center;font-size:26px;color:#f1f1f1;min-height:55vh;}p.jsx-1289621053{color:#f1f1f1;font-size:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-1289621053:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvc2hvd3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RvQixBQUdnQyxBQWNBLEFBSUgsQUFJaUIsQUFVbkIsQUFPWSxjQU5YLEVBZGpCLEdBbEJvQixBQWNwQixVQW1CZSxHQVhELEtBckJPLE9Bc0JMLGNBQ0ksRUFlcEIsZ0JBZGlCLGVBQ0QsWUFRUyxFQVBQLGdCQUNsQixTQTFCZ0IsY0FDQSxjQUNtQixnQ0FDakIsWUE4QmxCLElBN0JvQixrQkFDUCxXQUU0Qyx1R0FDekQiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9zaG93cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IFRlc3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0SGVhZGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ3VwY29taW5nU2hvd3MnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dzOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzaG93cyA9IHRoaXMuc3RhdGUuc2hvd3MubWFwKChzaG93cywgaSkgPT4ge1xuICAgICAgaWYgKHNob3dzLmZpZWxkcy5zaG93T25lKSB7XG4gICAgICAgIGNvbnN0IGFjdHVhbFNob3dzID0gT2JqZWN0LnZhbHVlcyhzaG93cy5maWVsZHMpO1xuICAgICAgICByZXR1cm4gYWN0dWFsU2hvd3MubWFwKChzaG93LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGluayA9IHNob3cuY29udGVudFswXS5jb250ZW50WzFdLmRhdGEudXJpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj17bGlua30+XG4gICAgICAgICAgICAgICAgICB7c2hvdy5jb250ZW50WzFdLmNvbnRlbnRbMF0udmFsdWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdFdyYXBwZXInPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NvbnRhY3ROZW9uJz5VUENPTUlORyBTSE9XUzwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Nob3dzJz57c2hvd3N9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4IDAgMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogN3Z3O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmVlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gI2ZmNDQ0NCxcbiAgICAgICAgICAgICAgMCAwIDAuNWVtICNmZjQ0NDQsIDAgMCAwLjFlbSAjZmY0NDQ0LCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhY3ROZW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3RXcmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1dmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNob3dzIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1NXZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/shows.js */"));
  }

}

/***/ }),

/***/ 7:
/*!******************************!*\
  !*** multi ./pages/shows.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/braedencraig/Desktop/GELK-SITE/pages/shows.js */"./pages/shows.js");


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

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

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
//# sourceMappingURL=shows.js.map