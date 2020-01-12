webpackHotUpdate("static/development/pages/about.js",{

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
        className: "jsx-1473051432" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1473051432" + " " + ((this.state.clients.length === 0 ? '.flexContainerLoading' : 'flexContainer') || ""),
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
          className: "jsx-1473051432" + " " + 'clientImages',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("img", {
          src: images.fields.file.url,
          className: "jsx-1473051432",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }));
      }) : ''), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1473051432",
        __self: this
      }, ".clientImages.jsx-1473051432 img.jsx-1473051432{width:150px;height:70px;border:none;border-radius:5px;padding:10px;}.clientImages.jsx-1473051432{margin:10px;}.flexContainer.jsx-1473051432{border:5px solid #f1f1f1;border-radius:25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:-100px;margin-top:100px;background:white;padding:50px 0;min-height:55vh;}.flexContainerLoading.jsx-1473051432{border:5px solid #f1f1f1;border-radius:25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:-100px;margin-top:100px;background:none;padding:50px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DbGllbnRJbWFnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURvQixBQUd5QixBQVFBLEFBSWEsQUFjQSxZQXpCYixBQVFkLFlBUGMsQ0FXTyxBQWNBLFdBeEJELFFBV0wsQUFjQSxVQXhCQSxhQUNmLG1EQVVhLEFBY0EsV0FiSSxBQWNBLHlEQWJRLEFBY0EsbUdBYkYsQUFjQSxxQkFiSixBQWNBLGlCQWJBLEFBY0QsZ0JBQ0QsQ0FkQSxjQWVqQixDQWRrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9jb21wb25lbnRzL0NsaWVudEltYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCAnLi4vaW5kZXguY3NzJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IENvbG9yQ2lyY3VsYXJQcm9ncmVzcyA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgY29sb3I6ICcjZjFmMWYxJyxcbiAgfSxcbn0pKENpcmN1bGFyUHJvZ3Jlc3MpO1xuXG5jbGFzcyBDbGllbnRJbWFnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2xpZW50czogW10sXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuXG4gICAgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6ICdjbGllbnRzJyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGllbnRzOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNsaWVudHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgID8gJy5mbGV4Q29udGFpbmVyTG9hZGluZydcbiAgICAgICAgICAgICAgOiAnZmxleENvbnRhaW5lcidcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5jbGllbnRzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxDb2xvckNpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MTAwfSB0aGlja25lc3M9ezV9IC8+XG4gICAgICAgICAgKSA6IHRoaXMuc3RhdGUuY2xpZW50c1swXSA/IChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xpZW50c1swXS5maWVsZHMuY2xpZW50SW1hZ2VzLm1hcCgoaW1hZ2VzLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnRJbWFnZXMnIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlcy5maWVsZHMuZmlsZS51cmx9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgJydcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNsaWVudEltYWdlcyBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xpZW50SW1hZ2VzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmxleENvbnRhaW5lciB7XG4gICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU1dmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZsZXhDb250YWluZXJMb2FkaW5nIHtcbiAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsaWVudEltYWdlcztcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/ClientImages.js */"));
    }
  }]);

  return ClientImages;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClientImages);

/***/ })

})
//# sourceMappingURL=about.js.41196f285e9f053a9250.hot-update.js.map