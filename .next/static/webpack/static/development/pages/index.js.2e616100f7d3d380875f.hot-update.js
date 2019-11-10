webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("header", {
    "class": "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    href: "",
    "class": "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "CSS Nav"), __jsx("input", {
    "class": "menu-btn",
    type: "checkbox",
    id: "menu-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("label", {
    "class": "menu-icon",
    "for": "menu-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("span", {
    "class": "navicon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("ul", {
    "class": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    href: "#work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Our Work")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "About")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    href: "#careers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Contact")))), __jsx("stlye", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\n    .header {\n  background-color: green;\n  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);\n  position: fixed;\n  width: 100%;\n  z-index: 3;\n}\n\n.header ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow: hidden;\n  background-color: #fff;\n}\n\n.header li a {\n  display: block;\n  padding: 20px 20px;\n  border-right: 1px solid #f4f4f4;\n  text-decoration: none;\n}\n\n.header li a:hover,\n.header .menu-btn:hover {\n  background-color: #f4f4f4;\n}\n\n.header .logo {\n  display: block;\n  float: left;\n  font-size: 2em;\n  padding: 10px 20px;\n  text-decoration: none;\n}\n\n/* menu */\n\n.header .menu {\n  clear: both;\n  max-height: 0;\n  transition: max-height .2s ease-out;\n}\n\n/* menu icon */\n\n.header .menu-icon {\n  cursor: pointer;\n  display: inline-block;\n  float: right;\n  padding: 28px 20px;\n  position: relative;\n  user-select: none;\n}\n\n.header .menu-icon .navicon {\n  background: #333;\n  display: block;\n  height: 2px;\n  position: relative;\n  transition: background .2s ease-out;\n  width: 18px;\n}\n\n.header .menu-icon .navicon:before,\n.header .menu-icon .navicon:after {\n  background: #333;\n  content: '';\n  display: block;\n  height: 100%;\n  position: absolute;\n  transition: all .2s ease-out;\n  width: 100%;\n}\n\n.header .menu-icon .navicon:before {\n  top: 5px;\n}\n\n.header .menu-icon .navicon:after {\n  top: -5px;\n}\n\n/* menu btn */\n\n.header .menu-btn {\n  display: none;\n}\n\n.header .menu-btn:checked ~ .menu {\n  max-height: 240px;\n}\n\n.header .menu-btn:checked ~ .menu-icon .navicon {\n  background: transparent;\n}\n\n.header .menu-btn:checked ~ .menu-icon .navicon:before {\n  transform: rotate(-45deg);\n}\n\n.header .menu-btn:checked ~ .menu-icon .navicon:after {\n  transform: rotate(45deg);\n}\n\n.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,\n.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {\n  top: 0;\n}\n\n/* 48em = 768px */\n\n@media (min-width: 48em) {\n  .header li {\n    float: left;\n  }\n  .header li a {\n    padding: 20px 30px;\n  }\n  .header .menu {\n    clear: none;\n    float: right;\n    max-height: none;\n  }\n  .header .menu-icon {\n    display: none;\n  }\n}\n    \n    "));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.2e616100f7d3d380875f.hot-update.js.map