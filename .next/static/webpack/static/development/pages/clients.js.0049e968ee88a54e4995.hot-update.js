webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./pages/clients.js":
/*!**************************!*\
  !*** ./pages/clients.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_ClientImages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ClientImages */ "./components/ClientImages.js");
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _assets_clientsHead_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/clientsHead.svg */ "./assets/clientsHead.svg");
/* harmony import */ var _assets_testimonialsHead_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/testimonialsHead.svg */ "./assets/testimonialsHead.svg");






var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/clients.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");







var ColorCircularProgress = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])({
  root: {
    color: '#f1f1f1'
  }
})(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__["default"]);

var About =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(About, _React$Component);

  function About(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, About);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(About).call(this, props));
    _this.state = {
      testimonials: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = contentful.createClient({
        space: 'sqmp3jmwaedr',
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      });
      client.getEntries({
        content_type: 'testimonials'
      }).then(function (response) {
        _this2.setState({
          testimonials: response.items
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var testimonials = this.state.testimonials.map(function (testimonials, i) {
        if (_this3.state.testimonials[0].fields) {
          var _testimonial = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(testimonials.fields);

          return _testimonial.map(function (testimonials, i) {
            return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
              className: "jsx-3201489184",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            }, __jsx("p", {
              className: "jsx-3201489184",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            }, testimonials)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
              id: "3201489184",
              __self: this
            }, "p.jsx-3201489184{font-family:'Montserrat',sans-serif;font-size:18px;color:#f1f1f1;width:80%;margin:40px auto;max-width:1400px;line-height:28px;}@media screen and (max-width:900px){p.jsx-3201489184{font-size:16px;}}@media screen and (max-width:600px){p.jsx-3201489184{font-size:14px;text-align:center;}.title.jsx-3201489184{width:90%;margin-bottom:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvY2xpZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QzBCLEFBR3dELEFBV3BCLEFBTUEsQUFLTCxVQUNTLEtBWHJCLEFBTW9CLGNBTXBCLElBTEEsR0FsQmUsZUFDRCxjQUNKLFVBQ08saUJBQ0EsaUJBQ0EsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvY2xpZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IENsaWVudEltYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL0NsaWVudEltYWdlcyc7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBjbGllbnRzIGZyb20gJy4uL2Fzc2V0cy9jbGllbnRzSGVhZC5zdmcnO1xuaW1wb3J0IHRlc3RpbW9uaWFsIGZyb20gJy4uL2Fzc2V0cy90ZXN0aW1vbmlhbHNIZWFkLnN2Zyc7XG5cbmNvbnN0IENvbG9yQ2lyY3VsYXJQcm9ncmVzcyA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgY29sb3I6ICcjZjFmMWYxJyxcbiAgfSxcbn0pKENpcmN1bGFyUHJvZ3Jlc3MpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXN0aW1vbmlhbHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAndGVzdGltb25pYWxzJyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0ZXN0aW1vbmlhbHM6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGVzdGltb25pYWxzID0gdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbHMubWFwKCh0ZXN0aW1vbmlhbHMsIGkpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnRlc3RpbW9uaWFsc1swXS5maWVsZHMpIHtcbiAgICAgICAgY29uc3QgdGVzdGltb25pYWwgPSBPYmplY3QudmFsdWVzKHRlc3RpbW9uaWFscy5maWVsZHMpO1xuICAgICAgICByZXR1cm4gdGVzdGltb25pYWwubWFwKCh0ZXN0aW1vbmlhbHMsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD57dGVzdGltb25pYWxzfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgY2xpZW50Jz5cbiAgICAgICAgICAgIDxoMz5DTElFTlRTPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRQcmV2Jz5cbiAgICAgICAgICAgICAgPENvbG9yQ2lyY3VsYXJQcm9ncmVzcyBzaXplPXsxMDB9IHRoaWNrbmVzcz17NX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZFByZXYnPlxuICAgICAgICAgICAgICA8Q2xpZW50SW1hZ2VzIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSB0ZXN0aW1vbmlhbCc+XG4gICAgICAgICAgICA8aDM+VEVTVElNT05JQUxTPC9oMz5cbiAgICAgICAgICA8L2Rpdj57JyAnfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXN0aW1vbmlhbEJvdHRvbSc+e3Rlc3RpbW9uaWFsc308L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG5cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHZ3O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLFxuICAgICAgICAgICAgICAwIDAgMC41ZW0gIzc2MWY2YiwgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZXN0aW1vbmlhbEJvdHRvbSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgIHdpZHRoIDgwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGllbnQsIC50ZXN0aW1vbmlhbCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2FkUHJldiB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU1dmg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4dmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGllbnRUaXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50VGl0bGVUZXN0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/clients.js */"));
          });
        }
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3328123565" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3328123565" + " " + 'title client',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3328123565",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "CLIENTS")), this.state.testimonials.length === 0 ? __jsx("div", {
        className: "jsx-3328123565" + " " + 'loadPrev',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(ColorCircularProgress, {
        size: 100,
        thickness: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })) : __jsx("div", {
        className: "jsx-3328123565" + " " + 'loadPrev',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(_components_ClientImages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3328123565" + " " + 'title testimonial',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3328123565",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "TESTIMONIALS")), ' ', __jsx("div", {
        className: "jsx-3328123565" + " " + 'testimonialBottom',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, testimonials), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3328123565",
        __self: this
      }, "h3.jsx-3328123565{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:10vw;font-family:'Concert One',sans-serif;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b, 0 0 0.5em #761f6b,0 0 0.1em #761f6b,0 10px 3px #000;margin-bottom:50px;}.testimonialBottom.jsx-3328123565{margin-bottom:50px;}.title.jsx-3328123565{width:80%;margin:0 auto;}.client.jsx-3328123565,.testimonial.jsx-3328123565{margin-bottom:50px;}.loadPrev.jsx-3328123565{min-height:55vh;margin-bottom:100px;}.wrapper.jsx-3328123565{margin-top:18vh;}.clientTitle.jsx-3328123565{margin-bottom:50px;}.clientTitleTest.jsx-3328123565{margin-top:150px;margin-bottom:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvY2xpZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR3NCLEFBS2tDLEFBZUEsQUFJVixBQUtVLEFBSUgsQUFLQSxBQUlHLEFBR0YsVUFwQkgsTUFTTSxBQUt0QixDQU9xQixFQXhDSCxBQWVsQixBQVNBLEFBYUEsS0FqQkEsWUFTQSxBQVlBLENBeENtQiw2RkFDTCxjQUNDLGVBQ3VCLHFDQUN0QixnQkFDRSxrQkFDUCxXQUU0Qyx1R0FDcEMsbUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvY2xpZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IENsaWVudEltYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL0NsaWVudEltYWdlcyc7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBjbGllbnRzIGZyb20gJy4uL2Fzc2V0cy9jbGllbnRzSGVhZC5zdmcnO1xuaW1wb3J0IHRlc3RpbW9uaWFsIGZyb20gJy4uL2Fzc2V0cy90ZXN0aW1vbmlhbHNIZWFkLnN2Zyc7XG5cbmNvbnN0IENvbG9yQ2lyY3VsYXJQcm9ncmVzcyA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgY29sb3I6ICcjZjFmMWYxJyxcbiAgfSxcbn0pKENpcmN1bGFyUHJvZ3Jlc3MpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXN0aW1vbmlhbHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAndGVzdGltb25pYWxzJyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0ZXN0aW1vbmlhbHM6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGVzdGltb25pYWxzID0gdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbHMubWFwKCh0ZXN0aW1vbmlhbHMsIGkpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnRlc3RpbW9uaWFsc1swXS5maWVsZHMpIHtcbiAgICAgICAgY29uc3QgdGVzdGltb25pYWwgPSBPYmplY3QudmFsdWVzKHRlc3RpbW9uaWFscy5maWVsZHMpO1xuICAgICAgICByZXR1cm4gdGVzdGltb25pYWwubWFwKCh0ZXN0aW1vbmlhbHMsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD57dGVzdGltb25pYWxzfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgY2xpZW50Jz5cbiAgICAgICAgICAgIDxoMz5DTElFTlRTPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRQcmV2Jz5cbiAgICAgICAgICAgICAgPENvbG9yQ2lyY3VsYXJQcm9ncmVzcyBzaXplPXsxMDB9IHRoaWNrbmVzcz17NX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZFByZXYnPlxuICAgICAgICAgICAgICA8Q2xpZW50SW1hZ2VzIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSB0ZXN0aW1vbmlhbCc+XG4gICAgICAgICAgICA8aDM+VEVTVElNT05JQUxTPC9oMz5cbiAgICAgICAgICA8L2Rpdj57JyAnfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXN0aW1vbmlhbEJvdHRvbSc+e3Rlc3RpbW9uaWFsc308L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG5cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHZ3O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLFxuICAgICAgICAgICAgICAwIDAgMC41ZW0gIzc2MWY2YiwgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZXN0aW1vbmlhbEJvdHRvbSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgIHdpZHRoIDgwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGllbnQsIC50ZXN0aW1vbmlhbCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2FkUHJldiB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU1dmg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4dmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGllbnRUaXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50VGl0bGVUZXN0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/clients.js */")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=clients.js.0049e968ee88a54e4995.hot-update.js.map