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
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");





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
      about: []
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
          about: response.items
        });

        console.log(response.items);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var about = this.state.about.map(function (about, i) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
          className: "jsx-765191321" + " " + 'image',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, __jsx("img", {
          src: about.fields.founder.fields.file.url,
          alt: "An image of the founder of Good Enough Live Karaoke, Mr. Tim McCready",
          className: "jsx-765191321",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        })), __jsx("div", {
          key: i,
          className: "jsx-765191321",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-765191321",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, about.fields.aboutText.content[0].content[0].value), __jsx("p", {
          className: "jsx-765191321",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, about.fields.aboutText.content[1].content[0].value), __jsx("p", {
          className: "jsx-765191321",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, about.fields.aboutText.content[2].content[0].value), __jsx("h3", {
          className: "jsx-765191321",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, about.fields.aboutText.content[3].content[0].value), __jsx("p", {
          className: "jsx-765191321",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, about.fields.aboutText.content[4].content[0].value), __jsx("p", {
          className: "jsx-765191321",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, about.fields.aboutText.content[5].content[0].value), __jsx("p", {
          className: "jsx-765191321",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, about.fields.aboutText.content[6].content[0].value)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "765191321",
          __self: this
        }, "p.jsx-765191321,h3.jsx-765191321{color:white;font-family:Oswald;font-size:20px;}p.jsx-765191321{width:80%;margin:3% auto;}h3.jsx-765191321{width:80%;margin:0 auto;text-align:center;}img.jsx-765191321{width:100%;height:auto;}.image.jsx-765191321{width:50%;margin:5% auto;-moz-box-shadow:inset 0 0 10px #000000;-webkit-box-shadow:inset 0 0 10px #000000;box-shadow:inset 0 0 10px #000000;border:15px solid #000;border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RzQixBQUkyQixBQU1GLEFBS0EsQUFLQyxBQUtELFVBZEssQUFLRCxBQVVDLENBTEgsQ0FoQk8sV0FpQnJCLENBTG9CLENBTHBCLEFBZXlDLE1BckJ4QixXQVlqQixJQVhBLGtCQXFCNEMsMENBQ1Isa0NBQ1gsdUJBQ0osbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcbmltcG9ydCBUZXN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEhlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFib3V0OiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgLy8gVGhpcyBpcyB0aGUgc3BhY2UgSUQuIEEgc3BhY2UgaXMgbGlrZSBhIHByb2plY3QgZm9sZGVyIGluIENvbnRlbnRmdWwgdGVybXNcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGFjY2VzcyB0b2tlbiBmb3IgdGhpcyBzcGFjZS4gTm9ybWFsbHkgeW91IGdldCBib3RoIElEIGFuZCB0aGUgdG9rZW4gaW4gdGhlIENvbnRlbnRmdWwgd2ViIGFwcFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcbiAgICAvLyBjb250ZW50IHR5cGUgcmVsYXRlcyB0byB0aGUgY29udGVudCB0eXBlIG5hbWUgaW4gY29udGVudGZ1bFxuICAgIC8vIGZpZ3VyZWQgaXQgb3V0dHR0XG4gICAgLy8gJ3Bvc3QnIGluc3RlYWQgb2Ygc29uZ0xpc3QsIHBvc3QgaXMgbGlua2VkIHRvIGF1dGhvciBzbyB3aGVuIHBvc3QgcmVzcG9uc2UgeW91IGdldCBhdXRob3Igb2JqZWN0IGFzIHdlbGxcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ2Fib3V0JyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhYm91dDogcmVzcG9uc2UuaXRlbXMsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLml0ZW1zKTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWJvdXQgPSB0aGlzLnN0YXRlLmFib3V0Lm1hcCgoYWJvdXQsIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlJz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXthYm91dC5maWVsZHMuZm91bmRlci5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgIGFsdD0nQW4gaW1hZ2Ugb2YgdGhlIGZvdW5kZXIgb2YgR29vZCBFbm91Z2ggTGl2ZSBLYXJhb2tlLCBNci4gVGltIE1jQ3JlYWR5J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICA8cD57YWJvdXQuZmllbGRzLmFib3V0VGV4dC5jb250ZW50WzBdLmNvbnRlbnRbMF0udmFsdWV9PC9wPlxuICAgICAgICAgICAgPHA+e2Fib3V0LmZpZWxkcy5hYm91dFRleHQuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDxwPnthYm91dC5maWVsZHMuYWJvdXRUZXh0LmNvbnRlbnRbMl0uY29udGVudFswXS52YWx1ZX08L3A+XG4gICAgICAgICAgICA8aDM+e2Fib3V0LmZpZWxkcy5hYm91dFRleHQuY29udGVudFszXS5jb250ZW50WzBdLnZhbHVlfTwvaDM+XG4gICAgICAgICAgICA8cD57YWJvdXQuZmllbGRzLmFib3V0VGV4dC5jb250ZW50WzRdLmNvbnRlbnRbMF0udmFsdWV9PC9wPlxuICAgICAgICAgICAgPHA+e2Fib3V0LmZpZWxkcy5hYm91dFRleHQuY29udGVudFs1XS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDxwPnthYm91dC5maWVsZHMuYWJvdXRUZXh0LmNvbnRlbnRbNl0uY29udGVudFswXS52YWx1ZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogT3N3YWxkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDMlIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMTVweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0TmVvbic+VEVTVElNT05JQUxTPC9oMT5cbiAgICAgICAgICB7YWJvdXR9XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4IDAgMDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3Z3O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmVlO1xuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSBibHVlLCAwIDAgMC41ZW0gYmx1ZSxcbiAgICAgICAgICAgICAgICAwIDAgMC4xZW0gYmx1ZSwgMCAxMHB4IDNweCAjMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/about.js */"));
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1115144492" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1115144492" + " " + 'contactNeon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "TESTIMONIALS"), about, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1115144492",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');h1.jsx-1115144492{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:Quicksand;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em blue,0 0 0.5em blue, 0 0 0.1em blue,0 10px 3px #000;}.wrapper.jsx-1115144492{margin-top:20vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEZzQixBQUUwRixBQUV4RCxBQWNILGdCQUNsQixHQWRvQixrQkFDQyw2RkFDTCxjQUNBLGNBQ1Esc0JBQ04sZ0JBQ0Usa0JBQ1AsV0FFc0IsOEZBQ25DIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcbmltcG9ydCBUZXN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEhlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFib3V0OiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgLy8gVGhpcyBpcyB0aGUgc3BhY2UgSUQuIEEgc3BhY2UgaXMgbGlrZSBhIHByb2plY3QgZm9sZGVyIGluIENvbnRlbnRmdWwgdGVybXNcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGFjY2VzcyB0b2tlbiBmb3IgdGhpcyBzcGFjZS4gTm9ybWFsbHkgeW91IGdldCBib3RoIElEIGFuZCB0aGUgdG9rZW4gaW4gdGhlIENvbnRlbnRmdWwgd2ViIGFwcFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcbiAgICAvLyBjb250ZW50IHR5cGUgcmVsYXRlcyB0byB0aGUgY29udGVudCB0eXBlIG5hbWUgaW4gY29udGVudGZ1bFxuICAgIC8vIGZpZ3VyZWQgaXQgb3V0dHR0XG4gICAgLy8gJ3Bvc3QnIGluc3RlYWQgb2Ygc29uZ0xpc3QsIHBvc3QgaXMgbGlua2VkIHRvIGF1dGhvciBzbyB3aGVuIHBvc3QgcmVzcG9uc2UgeW91IGdldCBhdXRob3Igb2JqZWN0IGFzIHdlbGxcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ2Fib3V0JyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhYm91dDogcmVzcG9uc2UuaXRlbXMsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLml0ZW1zKTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWJvdXQgPSB0aGlzLnN0YXRlLmFib3V0Lm1hcCgoYWJvdXQsIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlJz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXthYm91dC5maWVsZHMuZm91bmRlci5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgIGFsdD0nQW4gaW1hZ2Ugb2YgdGhlIGZvdW5kZXIgb2YgR29vZCBFbm91Z2ggTGl2ZSBLYXJhb2tlLCBNci4gVGltIE1jQ3JlYWR5J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICA8cD57YWJvdXQuZmllbGRzLmFib3V0VGV4dC5jb250ZW50WzBdLmNvbnRlbnRbMF0udmFsdWV9PC9wPlxuICAgICAgICAgICAgPHA+e2Fib3V0LmZpZWxkcy5hYm91dFRleHQuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDxwPnthYm91dC5maWVsZHMuYWJvdXRUZXh0LmNvbnRlbnRbMl0uY29udGVudFswXS52YWx1ZX08L3A+XG4gICAgICAgICAgICA8aDM+e2Fib3V0LmZpZWxkcy5hYm91dFRleHQuY29udGVudFszXS5jb250ZW50WzBdLnZhbHVlfTwvaDM+XG4gICAgICAgICAgICA8cD57YWJvdXQuZmllbGRzLmFib3V0VGV4dC5jb250ZW50WzRdLmNvbnRlbnRbMF0udmFsdWV9PC9wPlxuICAgICAgICAgICAgPHA+e2Fib3V0LmZpZWxkcy5hYm91dFRleHQuY29udGVudFs1XS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDxwPnthYm91dC5maWVsZHMuYWJvdXRUZXh0LmNvbnRlbnRbNl0uY29udGVudFswXS52YWx1ZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogT3N3YWxkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDMlIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMTVweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0TmVvbic+VEVTVElNT05JQUxTPC9oMT5cbiAgICAgICAgICB7YWJvdXR9XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4IDAgMDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3Z3O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmVlO1xuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSBibHVlLCAwIDAgMC41ZW0gYmx1ZSxcbiAgICAgICAgICAgICAgICAwIDAgMC4xZW0gYmx1ZSwgMCAxMHB4IDNweCAjMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/about.js */")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=about.js.a2793e037aa628a73e0e.hot-update.js.map