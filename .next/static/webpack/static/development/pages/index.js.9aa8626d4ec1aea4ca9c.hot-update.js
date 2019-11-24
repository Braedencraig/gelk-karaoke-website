webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");


var _layoutStyle,
    _this = undefined,
    _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/MyLayout.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var layoutStyle = (_layoutStyle = {
  margin: -9,
  background: 'black',
  height: '150vh'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_layoutStyle, "background", '#000 url(//images.weserv.nl/?url=i.imgur.com/6QJjYMe.jpg)  center no-repeat'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_layoutStyle, "backgroundSize", 'cover'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_layoutStyle, "margin", 0), _layoutStyle);
var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'sqmp3jmwaedr',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
}); // content type relates to the content type name in contentful
// figured it outttt
// 'post' instead of songList, post is linked to author so when post response you get author object as well

client.getEntries({
  content_type: 'about'
}).then(function (response) {
  _this.setState({
    about: response.items
  });

  console.log(response.items);
});

var Layout = function Layout(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-1530463628",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-1530463628",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1530463628",
    __self: this
  }, "body{background:#000;box-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9NeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3VCLEFBR3lCLGdCQUNNLHNCQUNiLFNBQ0MsVUFDWiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBUZXN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEhlYWRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNvbnN0IGxheW91dFN0eWxlID0ge1xuICBtYXJnaW46IC05LFxuICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICBoZWlnaHQ6ICcxNTB2aCcsXG4gIGJhY2tncm91bmQ6XG4gICAgJyMwMDAgdXJsKC8vaW1hZ2VzLndlc2Vydi5ubC8/dXJsPWkuaW1ndXIuY29tLzZRSmpZTWUuanBnKSAgY2VudGVyIG5vLXJlcGVhdCcsXG4gIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICBtYXJnaW46IDAsXG59O1xuXG5jb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gIC8vIFRoaXMgaXMgdGhlIHNwYWNlIElELiBBIHNwYWNlIGlzIGxpa2UgYSBwcm9qZWN0IGZvbGRlciBpbiBDb250ZW50ZnVsIHRlcm1zXG4gIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgLy8gVGhpcyBpcyB0aGUgYWNjZXNzIHRva2VuIGZvciB0aGlzIHNwYWNlLiBOb3JtYWxseSB5b3UgZ2V0IGJvdGggSUQgYW5kIHRoZSB0b2tlbiBpbiB0aGUgQ29udGVudGZ1bCB3ZWIgYXBwXG4gIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG59KTtcbi8vIGNvbnRlbnQgdHlwZSByZWxhdGVzIHRvIHRoZSBjb250ZW50IHR5cGUgbmFtZSBpbiBjb250ZW50ZnVsXG4vLyBmaWd1cmVkIGl0IG91dHR0dFxuLy8gJ3Bvc3QnIGluc3RlYWQgb2Ygc29uZ0xpc3QsIHBvc3QgaXMgbGlua2VkIHRvIGF1dGhvciBzbyB3aGVuIHBvc3QgcmVzcG9uc2UgeW91IGdldCBhdXRob3Igb2JqZWN0IGFzIHdlbGxcbmNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAnYWJvdXQnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICB0aGlzLnNldFN0YXRlKHtcbiAgICBhYm91dDogcmVzcG9uc2UuaXRlbXMsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhyZXNwb25zZS5pdGVtcyk7XG59KTtcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8PlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgICA8VGVzdEhlYWRlciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/MyLayout.js */"), __jsx("div", {
    style: layoutStyle,
    className: "jsx-1530463628",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_TestHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), props.children, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.9aa8626d4ec1aea4ca9c.hot-update.js.map