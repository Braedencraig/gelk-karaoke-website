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
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU',
        limit: 3
      });
      client.getEntries({
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
                lineNumber: 44
              },
              __self: this
            }, __jsx("img", {
              src: pictures.fields.file.url,
              className: "jsx-2707351916",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
              id: "2707351916",
              __self: this
            }, ".image-element-class.jsx-2707351916{width:calc(33.3% - 40px);min-width:calc(33.3% - 40px);background:rgb(25,3,22);padding:20px;}img.jsx-2707351916{width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9HYWxsZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDMEIsQUFHNEMsQUFNZCxXQUNDLFlBQ2QsRUFQK0IsNkJBQ0gsd0JBQ2IsYUFDZiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvR2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5cbmNvbnN0IG1hc29ucnlPcHRpb25zID0ge1xuICB0cmFuc2l0aW9uRHVyYXRpb246IDAsXG59O1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI1LDMsMjIpJyxcbiAgcGFkZGluZzogJzI1cHggMHB4Jyxcbn07XG5cbmNvbnN0IGltYWdlc0xvYWRlZE9wdGlvbnMgPSB7IGJhY2tncm91bmQ6ICcubXktYmctaW1hZ2UtZWwnIH07XG5cbmNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVkaWE6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgICAgbGltaXQ6IDMsXG4gICAgfSk7XG5cbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ3BpY3NBbmRWaWRlb3MnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lZGlhOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLnN0YXRlLm1lZGlhLm1hcCgocGljdHVyZXMsIGkpID0+IHtcbiAgICAgIGlmIChwaWN0dXJlcy5maWVsZHMucGljdHVyZXMpIHtcbiAgICAgICAgcmV0dXJuIHBpY3R1cmVzLmZpZWxkcy5waWN0dXJlcy5tYXAoKHBpY3R1cmVzLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZS1lbGVtZW50LWNsYXNzJz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljdHVyZXMuZmllbGRzLmZpbGUudXJsfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pbWFnZS1lbGVtZW50LWNsYXNzIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDMzLjMlIC0gNDBweCk7XG4gICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGNhbGMoMzMuMyUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNSwgMywgMjIpO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPE1hc29ucnlcbiAgICAgICAgICBjbGFzc05hbWU9eydteS1nYWxsZXJ5LWNsYXNzJ30gLy8gZGVmYXVsdCAnJ1xuICAgICAgICAgIGVsZW1lbnRUeXBlPXsnZGl2J30gLy8gZGVmYXVsdCAnZGl2J1xuICAgICAgICAgIG9wdGlvbnM9e21hc29ucnlPcHRpb25zfSAvLyBkZWZhdWx0IHt9XG4gICAgICAgICAgZGlzYWJsZUltYWdlc0xvYWRlZD17ZmFsc2V9IC8vIGRlZmF1bHQgZmFsc2VcbiAgICAgICAgICB1cGRhdGVPbkVhY2hJbWFnZUxvYWQ9e2ZhbHNlfSAvLyBkZWZhdWx0IGZhbHNlIGFuZCB3b3JrcyBvbmx5IGlmIGRpc2FibGVJbWFnZXNMb2FkZWQgaXMgZmFsc2VcbiAgICAgICAgICBpbWFnZXNMb2FkZWRPcHRpb25zPXtpbWFnZXNMb2FkZWRPcHRpb25zfSAvLyBkZWZhdWx0IHt9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkRWxlbWVudHN9XG4gICAgICAgIDwvTWFzb25yeT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/Gallery.js */"));
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
          lineNumber: 67
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
//# sourceMappingURL=index.js.7dbe452ccacf55495c3f.hot-update.js.map