webpackHotUpdate("static/development/pages/testimonials.js",{

/***/ "./pages/testimonials.js":
/*!*******************************!*\
  !*** ./pages/testimonials.js ***!
  \*******************************/
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






var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/testimonials.js";


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
              className: "jsx-1143427390",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            }, __jsx("p", {
              className: "jsx-1143427390",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            }, testimonials)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
              id: "1143427390",
              __self: this
            }, "p.jsx-1143427390{font-family:'Roboto',sans-serif;font-size:24px;color:#f1f1f1;width:80%;margin:25px auto;max-width:1400px;line-height:36px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvdGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDMEIsQUFHb0QsZ0NBQ2xCLGVBQ0QsY0FDSixVQUNPLGlCQUNBLGlCQUNBLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL3BhZ2VzL3Rlc3RpbW9uaWFscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IENsaWVudEltYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL0NsaWVudEltYWdlcyc7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBjbGllbnRzIGZyb20gJy4uL2Fzc2V0cy9jbGllbnRzSGVhZC5zdmcnO1xuaW1wb3J0IHRlc3RpbW9uaWFsIGZyb20gJy4uL2Fzc2V0cy90ZXN0aW1vbmlhbHNIZWFkLnN2Zyc7XG5cbmNvbnN0IENvbG9yQ2lyY3VsYXJQcm9ncmVzcyA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgY29sb3I6ICcjZjFmMWYxJyxcbiAgfSxcbn0pKENpcmN1bGFyUHJvZ3Jlc3MpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXN0aW1vbmlhbHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAndGVzdGltb25pYWxzJyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0ZXN0aW1vbmlhbHM6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGVzdGltb25pYWxzID0gdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbHMubWFwKCh0ZXN0aW1vbmlhbHMsIGkpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnRlc3RpbW9uaWFsc1swXS5maWVsZHMpIHtcbiAgICAgICAgY29uc3QgdGVzdGltb25pYWwgPSBPYmplY3QudmFsdWVzKHRlc3RpbW9uaWFscy5maWVsZHMpO1xuICAgICAgICByZXR1cm4gdGVzdGltb25pYWwubWFwKCh0ZXN0aW1vbmlhbHMsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD57dGVzdGltb25pYWxzfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgY2xpZW50Jz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtjbGllbnRzfSBhbHQ9J0NsaWVudHMnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkUHJldic+XG4gICAgICAgICAgICAgIDxDb2xvckNpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MTAwfSB0aGlja25lc3M9ezV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRQcmV2Jz5cbiAgICAgICAgICAgICAgPENsaWVudEltYWdlcyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgdGVzdGltb25pYWwnPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Rlc3RpbW9uaWFsfSBhbHQ9J1Rlc3RpbW9uaWFscycgLz5cbiAgICAgICAgICA8L2Rpdj57JyAnfVxuICAgICAgICAgIHt0ZXN0aW1vbmlhbHN9XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG98Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgd2lkdGggODAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNsaWVudCwgLnRlc3RpbW9uaWFsIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAubG9hZFByZXYge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NXZoO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxOHZoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2xpZW50VGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsaWVudFRpdGxlVGVzdCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/testimonials.js */"));
          });
        }
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2939651143" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2939651143" + " " + 'title client',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("img", {
        src: _assets_clientsHead_svg__WEBPACK_IMPORTED_MODULE_13__["default"],
        alt: "Clients",
        className: "jsx-2939651143",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), this.state.testimonials.length === 0 ? __jsx("div", {
        className: "jsx-2939651143" + " " + 'loadPrev',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(ColorCircularProgress, {
        size: 100,
        thickness: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })) : __jsx("div", {
        className: "jsx-2939651143" + " " + 'loadPrev',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx(_components_ClientImages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2939651143" + " " + 'title testimonial',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("img", {
        src: _assets_testimonialsHead_svg__WEBPACK_IMPORTED_MODULE_14__["default"],
        alt: "Testimonials",
        className: "jsx-2939651143",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), ' ', testimonials, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2939651143",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');.title.jsx-2939651143{width:80%;margin:0 auto;}.client.jsx-2939651143,.testimonial.jsx-2939651143{margin-bottom:50px;}.loadPrev.jsx-2939651143{min-height:55vh;margin-bottom:100px;}.wrapper.jsx-2939651143{margin-top:18vh;}.clientTitle.jsx-2939651143{margin-bottom:50px;}.clientTitleTest.jsx-2939651143{margin-top:150px;margin-bottom:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvdGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGc0IsQUFFd0csQUFHaEYsQUFLVSxBQUtILEFBS0EsQUFJRyxBQUdGLFVBckJILE1BVU0sQUFLdEIsQ0FPcUIsRUFqQnJCLEFBY0EsS0FsQkEsWUFVQSxBQVlBIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvdGVzdGltb25pYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgQ2xpZW50SW1hZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvQ2xpZW50SW1hZ2VzJztcbmltcG9ydCBUZXN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEhlYWRlcic7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGNsaWVudHMgZnJvbSAnLi4vYXNzZXRzL2NsaWVudHNIZWFkLnN2Zyc7XG5pbXBvcnQgdGVzdGltb25pYWwgZnJvbSAnLi4vYXNzZXRzL3Rlc3RpbW9uaWFsc0hlYWQuc3ZnJztcblxuY29uc3QgQ29sb3JDaXJjdWxhclByb2dyZXNzID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBjb2xvcjogJyNmMWYxZjEnLFxuICB9LFxufSkoQ2lyY3VsYXJQcm9ncmVzcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRlc3RpbW9uaWFsczogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG4gICAgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6ICd0ZXN0aW1vbmlhbHMnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRlc3RpbW9uaWFsczogcmVzcG9uc2UuaXRlbXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXN0aW1vbmlhbHMgPSB0aGlzLnN0YXRlLnRlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFscywgaSkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUudGVzdGltb25pYWxzWzBdLmZpZWxkcykge1xuICAgICAgICBjb25zdCB0ZXN0aW1vbmlhbCA9IE9iamVjdC52YWx1ZXModGVzdGltb25pYWxzLmZpZWxkcyk7XG4gICAgICAgIHJldHVybiB0ZXN0aW1vbmlhbC5tYXAoKHRlc3RpbW9uaWFscywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPnt0ZXN0aW1vbmlhbHN9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSBjbGllbnQnPlxuICAgICAgICAgICAgPGltZyBzcmM9e2NsaWVudHN9IGFsdD0nQ2xpZW50cycgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRQcmV2Jz5cbiAgICAgICAgICAgICAgPENvbG9yQ2lyY3VsYXJQcm9ncmVzcyBzaXplPXsxMDB9IHRoaWNrbmVzcz17NX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZFByZXYnPlxuICAgICAgICAgICAgICA8Q2xpZW50SW1hZ2VzIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSB0ZXN0aW1vbmlhbCc+XG4gICAgICAgICAgICA8aW1nIHNyYz17dGVzdGltb25pYWx9IGFsdD0nVGVzdGltb25pYWxzJyAvPlxuICAgICAgICAgIDwvZGl2PnsnICd9XG4gICAgICAgICAge3Rlc3RpbW9uaWFsc31cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b3xSb2JvdG8rQ29uZGVuc2VkJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICB3aWR0aCA4MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2xpZW50LCAudGVzdGltb25pYWwge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5sb2FkUHJldiB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU1dmg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4dmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGllbnRUaXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50VGl0bGVUZXN0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/testimonials.js */")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=testimonials.js.5604391e56307d8ab2d3.hot-update.js.map