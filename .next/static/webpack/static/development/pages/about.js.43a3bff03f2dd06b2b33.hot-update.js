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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_ClientImages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ClientImages */ "./components/ClientImages.js");
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");




var About =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _React$Component);

  function About(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(About).call(this, props));
    _this.state = {
      testimonials: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: 'sqmp3jmwaedr',
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      }); // content type relates to the content type name in contentful
      // figured it outttt
      // 'post' instead of songList, post is linked to author so when post response you get author object as well

      client.getEntries({
        content_type: 'about'
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
        if (_this3.state.testimonials[0]) {
          return testimonials.fields.largeTestimonials.content[0].content.map(function (testimonials, i) {
            // console.log(testimonials.content[0].content);
            return __jsx("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            }, __jsx("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            }, testimonials.content[0].content[0].value), __jsx("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            }, testimonials.content[0].content[1].value));
          });
        }
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3021285386" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3021285386" + " " + 'contactNeon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "TESTIMONIALS"), testimonials, __jsx("p", {
        className: "jsx-3021285386",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "contentful OTHER TESTIMONIALS IN A BIG RICH TEXT DOCUMENT SO IT CAN BE EDITED"), __jsx("h2", {
        className: "jsx-3021285386" + " " + 'clientTitle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "CLIENTS"), __jsx(_components_ClientImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3021285386",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');h1.jsx-3021285386,h2.jsx-3021285386{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:Quicksand;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em blue,0 0 0.5em blue, 0 0 0.1em blue,0 10px 3px #000;}.wrapper.jsx-3021285386{margin-top:20vh;}.clientTitle.jsx-3021285386{margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERzQixBQUUwRixBQUd4RCxBQWNILEFBSUcsZ0JBSHJCLEdBZG9CLEFBa0JwQixrQkFqQnFCLDZGQUNMLGNBQ0EsY0FDUSxzQkFDTixnQkFDRSxrQkFDUCxXQUVzQiw4RkFDbkMiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IENsaWVudEltYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL0NsaWVudEltYWdlcyc7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXN0aW1vbmlhbHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBzcGFjZSBJRC4gQSBzcGFjZSBpcyBsaWtlIGEgcHJvamVjdCBmb2xkZXIgaW4gQ29udGVudGZ1bCB0ZXJtc1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgLy8gVGhpcyBpcyB0aGUgYWNjZXNzIHRva2VuIGZvciB0aGlzIHNwYWNlLiBOb3JtYWxseSB5b3UgZ2V0IGJvdGggSUQgYW5kIHRoZSB0b2tlbiBpbiB0aGUgQ29udGVudGZ1bCB3ZWIgYXBwXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuICAgIC8vIGNvbnRlbnQgdHlwZSByZWxhdGVzIHRvIHRoZSBjb250ZW50IHR5cGUgbmFtZSBpbiBjb250ZW50ZnVsXG4gICAgLy8gZmlndXJlZCBpdCBvdXR0dHRcbiAgICAvLyAncG9zdCcgaW5zdGVhZCBvZiBzb25nTGlzdCwgcG9zdCBpcyBsaW5rZWQgdG8gYXV0aG9yIHNvIHdoZW4gcG9zdCByZXNwb25zZSB5b3UgZ2V0IGF1dGhvciBvYmplY3QgYXMgd2VsbFxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAnYWJvdXQnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRlc3RpbW9uaWFsczogcmVzcG9uc2UuaXRlbXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXN0aW1vbmlhbHMgPSB0aGlzLnN0YXRlLnRlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFscywgaSkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUudGVzdGltb25pYWxzWzBdKSB7XG4gICAgICAgIHJldHVybiB0ZXN0aW1vbmlhbHMuZmllbGRzLmxhcmdlVGVzdGltb25pYWxzLmNvbnRlbnRbMF0uY29udGVudC5tYXAoXG4gICAgICAgICAgKHRlc3RpbW9uaWFscywgaSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVzdGltb25pYWxzLmNvbnRlbnRbMF0uY29udGVudCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPnt0ZXN0aW1vbmlhbHMuY29udGVudFswXS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57dGVzdGltb25pYWxzLmNvbnRlbnRbMF0uY29udGVudFsxXS52YWx1ZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0TmVvbic+VEVTVElNT05JQUxTPC9oMT5cbiAgICAgICAgICB7dGVzdGltb25pYWxzfVxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgY29udGVudGZ1bCBPVEhFUiBURVNUSU1PTklBTFMgSU4gQSBCSUcgUklDSCBURVhUIERPQ1VNRU5UIFNPIElUIENBTlxuICAgICAgICAgICAgQkUgRURJVEVEXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NsaWVudFRpdGxlJz5DTElFTlRTPC9oMj5cbiAgICAgICAgICA8Q2xpZW50SW1hZ2VzIC8+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgICBoMSxcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtIGJsdWUsIDAgMCAwLjVlbSBibHVlLFxuICAgICAgICAgICAgICAgIDAgMCAwLjFlbSBibHVlLCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNsaWVudFRpdGxlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/about.js */")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=about.js.43a3bff03f2dd06b2b33.hot-update.js.map