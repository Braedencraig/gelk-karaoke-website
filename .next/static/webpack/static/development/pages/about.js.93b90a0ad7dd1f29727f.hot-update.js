webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/ClientCarousel.js":
/*!**************************************!*\
  !*** ./components/ClientCarousel.js ***!
  \**************************************/
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/ClientCarousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");




var ClientCarousel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ClientCarousel, _React$Component);

  function ClientCarousel(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientCarousel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ClientCarousel).call(this, props));
    _this.state = {
      clients: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientCarousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = contentful.createClient({
        space: 'sqmp3jmwaedr',
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      });
      client.getEntries({
        content_type: 'clients'
      }).then(function (response) {
        _this2.setState({
          clients: response.items
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-3849875404" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-3849875404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Clients"), __jsx("div", {
        className: "jsx-3849875404" + " " + 'flexContainer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.state.clients[0] ? this.state.clients[0].fields.clientImages.map(function (images, i) {
        return __jsx("div", {
          key: i,
          className: "jsx-3849875404" + " " + 'clientImages',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx("img", {
          src: images.fields.file.url,
          className: "jsx-3849875404",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }));
      }) : ''), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3849875404",
        __self: this
      }, ".clientImages.jsx-3849875404 img.jsx-3849875404{width:100px;height:50px;border:none;border-radius:5px;}.clientImages.jsx-3849875404{margin:10px;}.flexContainer.jsx-3849875404{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DbGllbnRDYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ29CLEFBR3lCLEFBT0EsQUFJQyxZQVZELEFBT2QsWUFOYyxZQUNNLGtCQUNwQixvQkFRYSxXQUNJLHlEQUNqQiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvQ2xpZW50Q2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCAnLi4vaW5kZXguY3NzJztcblxuY2xhc3MgQ2xpZW50Q2Fyb3VzZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2xpZW50czogW10sXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuXG4gICAgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6ICdjbGllbnRzJyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGllbnRzOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGgyPkNsaWVudHM8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Q29udGFpbmVyJz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5jbGllbnRzWzBdXG4gICAgICAgICAgICA/IHRoaXMuc3RhdGUuY2xpZW50c1swXS5maWVsZHMuY2xpZW50SW1hZ2VzLm1hcCgoaW1hZ2VzLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudEltYWdlcycga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZXMuZmllbGRzLmZpbGUudXJsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jbGllbnRJbWFnZXMgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xpZW50SW1hZ2VzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmxleENvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsaWVudENhcm91c2VsO1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/ClientCarousel.js */"));
    }
  }]);

  return ClientCarousel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClientCarousel);

/***/ })

})
//# sourceMappingURL=about.js.93b90a0ad7dd1f29727f.hot-update.js.map