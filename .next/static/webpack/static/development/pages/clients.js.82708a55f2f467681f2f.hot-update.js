webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/ClientImages.js":
/*!************************************!*\
  !*** ./components/ClientImages.js ***!
  \************************************/
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
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/ClientImages.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");





var ColorCircularProgress = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])({
  root: {
    color: '#f1f1f1'
  }
})(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"]);

var ClientImages =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ClientImages, _React$Component);

  function ClientImages(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientImages);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ClientImages).call(this, props));
    _this.state = {
      clients: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientImages, [{
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
        className: "jsx-3759467173" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3759467173" + " " + ((this.state.clients.length === 0 ? 'flexContainerLoading' : 'flexContainer') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.state.clients.length === 0 ? __jsx(ColorCircularProgress, {
        size: 100,
        thickness: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }) : this.state.clients[0] ? this.state.clients[0].fields.clientImages.map(function (images, i) {
        return __jsx("div", {
          key: i,
          className: "jsx-3759467173" + " " + 'clientImages',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("img", {
          src: images.fields.file.url,
          className: "jsx-3759467173",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }));
      }) : ''), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3759467173",
        __self: this
      }, ".clientImages.jsx-3759467173 img.jsx-3759467173{width:150px;height:82px;border:none;border-radius:5px;padding:10px;}.clientImages.jsx-3759467173{margin:10px;}.flexContainer.jsx-3759467173{border:10px solid #f1f1f1;border-radius:25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:95%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:100px;background:white;padding:50px 0;min-height:55vh;}.flexContainerLoading.jsx-3759467173{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:-100px;margin-top:100px;background:none;padding:50px 0;min-height:55vh;}@media screen and (max-width:700px){.flexContainer.jsx-3759467173{margin-top:200px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DbGllbnRJbWFnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURvQixBQUd5QixBQVFBLEFBSWMsQUFhYixBQWFNLFlBckNQLEFBUWQsS0E4QkUsT0FyQ1ksRUFXTyxVQVZELFNBV0wsU0FWQSxhQUNmLE9BcUJhLFdBQ0ksa0NBWkwsVUFDSyxhQVlRLDRDQVhBLHVEQVlGLHFCQUNKLGlCQUNELE1BYkMsVUFjRixPQWJFLFFBY0QsU0FiRCxPQWNqQixRQWJrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9jb21wb25lbnRzL0NsaWVudEltYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCAnLi4vaW5kZXguY3NzJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IENvbG9yQ2lyY3VsYXJQcm9ncmVzcyA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgY29sb3I6ICcjZjFmMWYxJyxcbiAgfSxcbn0pKENpcmN1bGFyUHJvZ3Jlc3MpO1xuXG5jbGFzcyBDbGllbnRJbWFnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2xpZW50czogW10sXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuXG4gICAgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6ICdjbGllbnRzJyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGllbnRzOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNsaWVudHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgID8gJ2ZsZXhDb250YWluZXJMb2FkaW5nJ1xuICAgICAgICAgICAgICA6ICdmbGV4Q29udGFpbmVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmNsaWVudHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPENvbG9yQ2lyY3VsYXJQcm9ncmVzcyBzaXplPXsxMDB9IHRoaWNrbmVzcz17NX0gLz5cbiAgICAgICAgICApIDogdGhpcy5zdGF0ZS5jbGllbnRzWzBdID8gKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbGllbnRzWzBdLmZpZWxkcy5jbGllbnRJbWFnZXMubWFwKChpbWFnZXMsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudEltYWdlcycga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VzLmZpZWxkcy5maWxlLnVybH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY2xpZW50SW1hZ2VzIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgycHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jbGllbnRJbWFnZXMge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mbGV4Q29udGFpbmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNTV2aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmxleENvbnRhaW5lckxvYWRpbmcge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1NXZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAuZmxleENvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGllbnRJbWFnZXM7XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/ClientImages.js */"));
    }
  }]);

  return ClientImages;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClientImages);

/***/ })

})
//# sourceMappingURL=clients.js.82708a55f2f467681f2f.hot-update.js.map