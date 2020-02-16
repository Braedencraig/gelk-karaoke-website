webpackHotUpdate("static/development/pages/media.js",{

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
              className: "jsx-2947209752" + " " + 'image-element-class',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            }, __jsx("img", {
              src: pictures.fields.file.url,
              className: "jsx-2947209752",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
              id: "2947209752",
              __self: this
            }, ".image-element-class.jsx-2947209752{width:calc(33.3% - 40px);min-width:calc(33.3% - 40px);background:rgb(25,3,22);padding:20px;}img.jsx-2947209752{width:100%;height:auto;}@media screen and (max-width:800px){.image-element-class.jsx-2947209752{width:calc(50% - 40px);min-width:calc(50% - 40px);background:rgb(25,3,22);padding:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9HYWxsZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDMEIsQUFHNEMsQUFNZCxBQU1jLFdBTGIsWUFDZCxBQUsrQixFQVpBLHlCQWFELElBWkYsb0JBYVgsSUFaRixTQWFiLElBWkYiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9jb21wb25lbnRzL0dhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuXG5jb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHtcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAwLFxufTtcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNSwzLDIyKScsXG4gIHBhZGRpbmc6ICcyNXB4IDBweCcsXG59O1xuXG5jb25zdCBpbWFnZXNMb2FkZWRPcHRpb25zID0geyBiYWNrZ3JvdW5kOiAnLm15LWJnLWltYWdlLWVsJyB9O1xuXG5jbGFzcyBHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lZGlhOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcblxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAncGljc0FuZFZpZGVvcycgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVkaWE6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuc3RhdGUubWVkaWEubWFwKChwaWN0dXJlcywgaSkgPT4ge1xuICAgICAgaWYgKHBpY3R1cmVzLmZpZWxkcy5waWN0dXJlcykge1xuICAgICAgICByZXR1cm4gcGljdHVyZXMuZmllbGRzLnBpY3R1cmVzLm1hcCgocGljdHVyZXMsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlLWVsZW1lbnQtY2xhc3MnPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN0dXJlcy5maWVsZHMuZmlsZS51cmx9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmltYWdlLWVsZW1lbnQtY2xhc3Mge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzMuMyUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogY2FsYygzMy4zJSAtIDQwcHgpO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1LCAzLCAyMik7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAgIC5pbWFnZS1lbGVtZW50LWNsYXNzIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNDBweCk7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogY2FsYyg1MCUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1LCAzLCAyMik7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8TWFzb25yeVxuICAgICAgICAgIGNsYXNzTmFtZT17J215LWdhbGxlcnktY2xhc3MnfSAvLyBkZWZhdWx0ICcnXG4gICAgICAgICAgZWxlbWVudFR5cGU9eydkaXYnfSAvLyBkZWZhdWx0ICdkaXYnXG4gICAgICAgICAgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9IC8vIGRlZmF1bHQge31cbiAgICAgICAgICBkaXNhYmxlSW1hZ2VzTG9hZGVkPXtmYWxzZX0gLy8gZGVmYXVsdCBmYWxzZVxuICAgICAgICAgIHVwZGF0ZU9uRWFjaEltYWdlTG9hZD17ZmFsc2V9IC8vIGRlZmF1bHQgZmFsc2UgYW5kIHdvcmtzIG9ubHkgaWYgZGlzYWJsZUltYWdlc0xvYWRlZCBpcyBmYWxzZVxuICAgICAgICAgIGltYWdlc0xvYWRlZE9wdGlvbnM9e2ltYWdlc0xvYWRlZE9wdGlvbnN9IC8vIGRlZmF1bHQge31cbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRFbGVtZW50c31cbiAgICAgICAgPC9NYXNvbnJ5PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/Gallery.js */"));
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
          lineNumber: 75
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
//# sourceMappingURL=media.js.071ad0ff4ecc6dbdc7c6.hot-update.js.map