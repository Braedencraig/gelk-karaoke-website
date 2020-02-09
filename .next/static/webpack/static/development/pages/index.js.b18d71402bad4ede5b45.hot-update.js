webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Gallery.js":
/*!*******************************!*\
  !*** ./components/Gallery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-masonry-component */ "./node_modules/react-masonry-component/lib/index.js");
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/Gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6__["createElement"];



var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");

var masonryOptions = {
  transitionDuration: 0
};
var style = {
  backgroundColor: 'rgb(25,3,22)',
  padding: '25px 0px'
};
var imagesLoadedOptions = {
  background: '.my-bg-image-el'
};

var Gallery =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Gallery, _React$Component);

  function Gallery(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Gallery);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Gallery).call(this, props));
    _this.state = {
      media: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Gallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = contentful.createClient({
        space: 'sqmp3jmwaedr',
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      });
      client.getEntries({
        limit: 1,
        content_type: 'picsAndVideos'
      }).then(function (response) {
        _this2.setState({
          media: response.items
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var childElements = this.state.media.map(function (pictures, i) {
        if (pictures.fields.pictures) {
          return pictures.fields.pictures.map(function (pictures, i) {
            return __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, __jsx("div", {
              className: "jsx-2707351916" + " " + 'image-element-class',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            }, __jsx("img", {
              src: pictures.fields.file.url,
              className: "jsx-2707351916",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
              id: "2707351916",
              __self: this
            }, ".image-element-class.jsx-2707351916{width:calc(33.3% - 40px);min-width:calc(33.3% - 40px);background:rgb(25,3,22);padding:20px;}img.jsx-2707351916{width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9HYWxsZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDMEIsQUFHNEMsQUFNZCxXQUNDLFlBQ2QsRUFQK0IsNkJBQ0gsd0JBQ2IsYUFDZiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvR2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5cbmNvbnN0IG1hc29ucnlPcHRpb25zID0ge1xuICB0cmFuc2l0aW9uRHVyYXRpb246IDAsXG59O1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI1LDMsMjIpJyxcbiAgcGFkZGluZzogJzI1cHggMHB4Jyxcbn07XG5cbmNvbnN0IGltYWdlc0xvYWRlZE9wdGlvbnMgPSB7IGJhY2tncm91bmQ6ICcubXktYmctaW1hZ2UtZWwnIH07XG5cbmNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVkaWE6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuXG4gICAgY2xpZW50XG4gICAgICAuZ2V0RW50cmllcyh7IGxpbWl0OiAxLCBjb250ZW50X3R5cGU6ICdwaWNzQW5kVmlkZW9zJyB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZWRpYTogcmVzcG9uc2UuaXRlbXMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuc3RhdGUubWVkaWEubWFwKChwaWN0dXJlcywgaSkgPT4ge1xuICAgICAgaWYgKHBpY3R1cmVzLmZpZWxkcy5waWN0dXJlcykge1xuICAgICAgICByZXR1cm4gcGljdHVyZXMuZmllbGRzLnBpY3R1cmVzLm1hcCgocGljdHVyZXMsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlLWVsZW1lbnQtY2xhc3MnPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN0dXJlcy5maWVsZHMuZmlsZS51cmx9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmltYWdlLWVsZW1lbnQtY2xhc3Mge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzMuMyUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogY2FsYygzMy4zJSAtIDQwcHgpO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1LCAzLCAyMik7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8TWFzb25yeVxuICAgICAgICAgIGNsYXNzTmFtZT17J215LWdhbGxlcnktY2xhc3MnfSAvLyBkZWZhdWx0ICcnXG4gICAgICAgICAgZWxlbWVudFR5cGU9eydkaXYnfSAvLyBkZWZhdWx0ICdkaXYnXG4gICAgICAgICAgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9IC8vIGRlZmF1bHQge31cbiAgICAgICAgICBkaXNhYmxlSW1hZ2VzTG9hZGVkPXtmYWxzZX0gLy8gZGVmYXVsdCBmYWxzZVxuICAgICAgICAgIHVwZGF0ZU9uRWFjaEltYWdlTG9hZD17ZmFsc2V9IC8vIGRlZmF1bHQgZmFsc2UgYW5kIHdvcmtzIG9ubHkgaWYgZGlzYWJsZUltYWdlc0xvYWRlZCBpcyBmYWxzZVxuICAgICAgICAgIGltYWdlc0xvYWRlZE9wdGlvbnM9e2ltYWdlc0xvYWRlZE9wdGlvbnN9IC8vIGRlZmF1bHQge31cbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRFbGVtZW50c31cbiAgICAgICAgPC9NYXNvbnJ5PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/Gallery.js */"));
          });
        }
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, __jsx(react_masonry_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: 'my-gallery-class' // default ''
        ,
        elementType: 'div' // default 'div'
        ,
        options: masonryOptions // default {}
        ,
        disableImagesLoaded: false // default false
        ,
        updateOnEachImageLoad: false // default false and works only if disableImagesLoaded is false
        ,
        imagesLoadedOptions: imagesLoadedOptions // default {}
        ,
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, childElements));
    }
  }]);

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ })

})
//# sourceMappingURL=index.js.b18d71402bad4ede5b45.hot-update.js.map