webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
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






var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");




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
          var testimonial = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(testimonials.fields);

          return testimonial.map(function (testimonials, i) {
            return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
              className: "jsx-196008484",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            }, __jsx("p", {
              className: "jsx-196008484",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            }, testimonials)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
              id: "196008484",
              __self: this
            }, "p.jsx-196008484{font-family:'Roboto',sans-serif;font-size:24px;color:#f1f1f1;width:80%;margin:25px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUMwQixBQUdvRCxnQ0FDbEIsZUFDRCxjQUNKLFVBQ08saUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcbmltcG9ydCBDbGllbnRJbWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9DbGllbnRJbWFnZXMnO1xuaW1wb3J0IFRlc3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0SGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGVzdGltb25pYWxzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ3Rlc3RpbW9uaWFscycgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGVzdGltb25pYWxzOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRlc3RpbW9uaWFscyA9IHRoaXMuc3RhdGUudGVzdGltb25pYWxzLm1hcCgodGVzdGltb25pYWxzLCBpKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS50ZXN0aW1vbmlhbHNbMF0uZmllbGRzKSB7XG4gICAgICAgIGNvbnN0IHRlc3RpbW9uaWFsID0gT2JqZWN0LnZhbHVlcyh0ZXN0aW1vbmlhbHMuZmllbGRzKTtcbiAgICAgICAgcmV0dXJuIHRlc3RpbW9uaWFsLm1hcCgodGVzdGltb25pYWxzLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+e3Rlc3RpbW9uaWFsc308L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjbGllbnRUaXRsZSc+Q0xJRU5UUzwvaDI+XG4gICAgICAgICAgPENsaWVudEltYWdlcyAvPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NsaWVudFRpdGxlVGVzdCc+VEVTVElNT05JQUxTPC9oMj5cbiAgICAgICAgICB7dGVzdGltb25pYWxzfVxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvfFJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgICBoMSxcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gYmx1ZSwgMCAwIDAuNWVtIGJsdWUsXG4gICAgICAgICAgICAgICAgMCAwIDAuMWVtIGJsdWUsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGllbnRUaXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50VGl0bGVUZXN0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/about.js */"));
          });
        }
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3567996235" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-3567996235" + " " + 'clientTitle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "CLIENTS"), __jsx(_components_ClientImages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx("h2", {
        className: "jsx-3567996235" + " " + 'clientTitleTest',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "TESTIMONIALS"), testimonials, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3567996235",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');h1.jsx-3567996235,h2.jsx-3567996235{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:'Roboto',sans-serif;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em blue,0 0 0.5em blue, 0 0 0.1em blue,0 10px 3px #000;}h1.jsx-3567996235{margin-bottom:50px;}.wrapper.jsx-3567996235{margin-top:20vh;}.clientTitle.jsx-3567996235{margin-bottom:50px;}.clientTitleTest.jsx-3567996235{margin-top:150px;margin-bottom:150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURzQixBQUV3RyxBQUd0RSxBQWNBLEFBSUgsQUFJRyxBQUdGLGdCQU5uQixDQU9zQixFQXpCRixBQWNwQixBQVFBLGtCQXJCcUIsQUF5QnJCLDZGQXhCZ0IsY0FDQSxjQUNtQixnQ0FDakIsZ0JBQ0Usa0JBQ1AsV0FFc0IsOEZBQ25DIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcbmltcG9ydCBDbGllbnRJbWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9DbGllbnRJbWFnZXMnO1xuaW1wb3J0IFRlc3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0SGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGVzdGltb25pYWxzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ3Rlc3RpbW9uaWFscycgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGVzdGltb25pYWxzOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRlc3RpbW9uaWFscyA9IHRoaXMuc3RhdGUudGVzdGltb25pYWxzLm1hcCgodGVzdGltb25pYWxzLCBpKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS50ZXN0aW1vbmlhbHNbMF0uZmllbGRzKSB7XG4gICAgICAgIGNvbnN0IHRlc3RpbW9uaWFsID0gT2JqZWN0LnZhbHVlcyh0ZXN0aW1vbmlhbHMuZmllbGRzKTtcbiAgICAgICAgcmV0dXJuIHRlc3RpbW9uaWFsLm1hcCgodGVzdGltb25pYWxzLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+e3Rlc3RpbW9uaWFsc308L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjbGllbnRUaXRsZSc+Q0xJRU5UUzwvaDI+XG4gICAgICAgICAgPENsaWVudEltYWdlcyAvPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NsaWVudFRpdGxlVGVzdCc+VEVTVElNT05JQUxTPC9oMj5cbiAgICAgICAgICB7dGVzdGltb25pYWxzfVxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvfFJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgICBoMSxcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gYmx1ZSwgMCAwIDAuNWVtIGJsdWUsXG4gICAgICAgICAgICAgICAgMCAwIDAuMWVtIGJsdWUsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGllbnRUaXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50VGl0bGVUZXN0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/about.js */")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=about.js.f0e388fdb7e4a43a173a.hot-update.js.map