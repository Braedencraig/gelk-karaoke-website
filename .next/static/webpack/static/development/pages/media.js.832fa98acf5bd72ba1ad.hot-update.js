webpackHotUpdate("static/development/pages/media.js",{

/***/ "./components/Videos.js":
/*!******************************!*\
  !*** ./components/Videos.js ***!
  \******************************/
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





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/Videos.js";

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

var Videos =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Videos, _React$Component);

  function Videos(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Videos);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Videos).call(this, props));
    _this.state = {
      media: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Videos, [{
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
      var childElements = this.state.media.map(function (videos, i) {
        if (videos.fields.videos) {
          return videos.fields.videos.map(function (videos, i) {
            return __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, __jsx("div", {
              className: "jsx-2671223347" + " " + 'image-element-class',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            }, __jsx("video", {
              width: "450",
              height: "385",
              controls: true,
              className: "jsx-2671223347",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            }, __jsx("source", {
              src: videos.fields.file.url,
              type: "video/mp4",
              className: "jsx-2671223347",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
              id: "2671223347",
              __self: this
            }, ".image-element-class.jsx-2671223347{width:calc(33.3% - 40px);min-width:calc(33.3% - 40px);background:rgb(25,3,22);padding:20px;}video.jsx-2671223347{width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9WaWRlb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUQwQixBQUc0QyxBQU1kLFdBQ0MsWUFDZCxFQVArQiw2QkFDSCx3QkFDYixhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9WaWRlb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuXG5jb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHtcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAwLFxufTtcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNSwzLDIyKScsXG4gIHBhZGRpbmc6ICcyNXB4IDBweCcsXG59O1xuXG5jb25zdCBpbWFnZXNMb2FkZWRPcHRpb25zID0geyBiYWNrZ3JvdW5kOiAnLm15LWJnLWltYWdlLWVsJyB9O1xuXG5jbGFzcyBWaWRlb3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVkaWE6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuXG4gICAgY2xpZW50XG4gICAgICAuZ2V0RW50cmllcyh7IGxpbWl0OiAxLCBjb250ZW50X3R5cGU6ICdwaWNzQW5kVmlkZW9zJyB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZWRpYTogcmVzcG9uc2UuaXRlbXMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuc3RhdGUubWVkaWEubWFwKCh2aWRlb3MsIGkpID0+IHtcbiAgICAgIGlmICh2aWRlb3MuZmllbGRzLnZpZGVvcykge1xuICAgICAgICByZXR1cm4gdmlkZW9zLmZpZWxkcy52aWRlb3MubWFwKCh2aWRlb3MsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlLWVsZW1lbnQtY2xhc3MnPlxuICAgICAgICAgICAgICAgIDx2aWRlbyB3aWR0aD0nNDUwJyBoZWlnaHQ9JzM4NScgY29udHJvbHM+XG4gICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17dmlkZW9zLmZpZWxkcy5maWxlLnVybH0gdHlwZT0ndmlkZW8vbXA0JyAvPlxuICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmltYWdlLWVsZW1lbnQtY2xhc3Mge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzMuMyUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogY2FsYygzMy4zJSAtIDQwcHgpO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1LCAzLCAyMik7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2aWRlbyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxNYXNvbnJ5XG4gICAgICAgICAgY2xhc3NOYW1lPXsnbXktZ2FsbGVyeS1jbGFzcyd9IC8vIGRlZmF1bHQgJydcbiAgICAgICAgICBlbGVtZW50VHlwZT17J2Rpdid9IC8vIGRlZmF1bHQgJ2RpdidcbiAgICAgICAgICBvcHRpb25zPXttYXNvbnJ5T3B0aW9uc30gLy8gZGVmYXVsdCB7fVxuICAgICAgICAgIGRpc2FibGVJbWFnZXNMb2FkZWQ9e2ZhbHNlfSAvLyBkZWZhdWx0IGZhbHNlXG4gICAgICAgICAgdXBkYXRlT25FYWNoSW1hZ2VMb2FkPXtmYWxzZX0gLy8gZGVmYXVsdCBmYWxzZSBhbmQgd29ya3Mgb25seSBpZiBkaXNhYmxlSW1hZ2VzTG9hZGVkIGlzIGZhbHNlXG4gICAgICAgICAgaW1hZ2VzTG9hZGVkT3B0aW9ucz17aW1hZ2VzTG9hZGVkT3B0aW9uc30gLy8gZGVmYXVsdCB7fVxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZEVsZW1lbnRzfVxuICAgICAgICA8L01hc29ucnk+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvcztcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/Videos.js */"));
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
          lineNumber: 70
        },
        __self: this
      }, childElements));
    }
  }]);

  return Videos;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Videos);

/***/ })

})
//# sourceMappingURL=media.js.832fa98acf5bd72ba1ad.hot-update.js.map