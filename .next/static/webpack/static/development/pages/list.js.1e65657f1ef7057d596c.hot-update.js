webpackHotUpdate("static/development/pages/list.js",{

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
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
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/list.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");






var List =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(List, _React$Component);

  function List(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, List);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(List).call(this, props));
    _this.state = {
      songs: [],
      alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = contentful.createClient({
        space: 'sqmp3jmwaedr',
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      });
      client.getEntries({
        content_type: 'songList'
      }).then(function (response) {
        _this2.setState({
          songs: response.items
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var list = this.state.songs.map(function (song, i) {
        return _this3.state.alphabet.map(function (letter, i) {
          if (song.fields[letter]) {
            return song.fields[letter].content[0].content.map(function (song, i) {
              if (song.content) {
                return song.content.map(function (song, i) {
                  return song.content.map(function (song, i) {
                    return __jsx("div", {
                      className: "jsx-4006146557",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                      },
                      __self: this
                    }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"], {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                      },
                      __self: this
                    }), __jsx("div", {
                      key: i,
                      id: letter,
                      className: "jsx-4006146557" + " " + (letter || ""),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      },
                      __self: this
                    }, __jsx("p", {
                      className: "jsx-4006146557",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                      },
                      __self: this
                    }, song.value)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      id: "4006146557",
                      __self: this
                    }, ".alphabet.jsx-4006146557{margin-bottom:50px;margin-top:200px;}p.jsx-4006146557{color:#f1f1f1;font-family:'Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RWtDLEFBRzhDLEFBSUwsY0FDbUIsS0FKaEIsaUJBQ25CLFVBSUEiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQge1xuICBMaW5rLFxuICBFbGVtZW50LFxuICBFdmVudHMsXG4gIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLFxuICBzY3JvbGxTcHksXG4gIHNjcm9sbGVyLFxufSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc29uZ3M6IFtdLFxuICAgICAgYWxwaGFiZXQ6IFtcbiAgICAgICAgJ2EnLFxuICAgICAgICAnYicsXG4gICAgICAgICdjJyxcbiAgICAgICAgJ2QnLFxuICAgICAgICAnZScsXG4gICAgICAgICdmJyxcbiAgICAgICAgJ2cnLFxuICAgICAgICAnaCcsXG4gICAgICAgICdpJyxcbiAgICAgICAgJ2onLFxuICAgICAgICAnaycsXG4gICAgICAgICdsJyxcbiAgICAgICAgJ20nLFxuICAgICAgICAnbicsXG4gICAgICAgICdvJyxcbiAgICAgICAgJ3AnLFxuICAgICAgICAncScsXG4gICAgICAgICdyJyxcbiAgICAgICAgJ3MnLFxuICAgICAgICAndCcsXG4gICAgICAgICd1JyxcbiAgICAgICAgJ3YnLFxuICAgICAgICAndycsXG4gICAgICAgICd4JyxcbiAgICAgICAgJ3knLFxuICAgICAgICAneicsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAnc29uZ0xpc3QnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNvbmdzOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5zdGF0ZS5zb25ncy5tYXAoKHNvbmcsIGkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFscGhhYmV0Lm1hcCgobGV0dGVyLCBpKSA9PiB7XG4gICAgICAgIGlmIChzb25nLmZpZWxkc1tsZXR0ZXJdKSB7XG4gICAgICAgICAgcmV0dXJuIHNvbmcuZmllbGRzW2xldHRlcl0uY29udGVudFswXS5jb250ZW50Lm1hcCgoc29uZywgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNvbmcuY29udGVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gc29uZy5jb250ZW50Lm1hcCgoc29uZywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzb25nLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtsZXR0ZXJ9IGlkPXtsZXR0ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3NvbmcudmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbHBoYWJldCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RXcmFwcGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0TmVvbic+U09ORyBMSVNUPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2FscGhhYmV0Jz5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFscGhhYmV0Lm1hcCgobGV0dGVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXN0NidcbiAgICAgICAgICAgICAgICAgICAgdG89e2xldHRlcn1cbiAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTE1MH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCMke2xldHRlcn1gfT57bGV0dGVyfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0Jz57bGlzdH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0V3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sZXR0ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFscGhhYmV0IHtcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDQsIDExMywgMjQ2LCAwLjk4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/list.js */"));
                  });
                });
              }
            });
          }
        });
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-350906149" + " " + 'listWrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-350906149" + " " + 'contactNeon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "SONG LIST"), __jsx("p", {
        className: "jsx-350906149" + " " + 'alphabet',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, this.state.alphabet.map(function (letter, i) {
        return __jsx("h3", {
          className: "jsx-350906149",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          className: "test6",
          to: letter,
          spy: true,
          smooth: true,
          duration: 500,
          offset: -150,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, __jsx("a", {
          href: "#".concat(letter),
          className: "jsx-350906149",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, letter)));
      })), __jsx("div", {
        className: "jsx-350906149" + " " + 'list',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, list)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "350906149",
        __self: this
      }, "h1.jsx-350906149{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:'Roboto',sans-serif;font-weight:100;text-align:center;color:#f1f1f1;}.listWrapper.jsx-350906149{margin-top:25vh;}.letter.jsx-350906149{color:#f1f1f1;}.list.jsx-350906149{font-family:'Roboto',sans-serif;width:600px;margin:0 auto;text-align:center;font-size:26px;}.alphabet.jsx-350906149{margin:50px 0;position:-webkit-sticky;position:sticky;top:60px;background:rgba(44,113,246,0.98);}p.jsx-350906149{color:#f1f1f1;font-size:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-350906149{-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;margin:10px;font-family:'Roboto',sans-serif;color:#f1f1f1;}a.jsx-350906149:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SG9CLEFBR2dDLEFBV0gsQUFJRixBQUltQixBQVFuQixBQU1BLEFBT08sQUFRSyxjQWhDNUIsQUFZa0IsQUFNRCxFQXRCakIsR0FYb0IsVUFrQ0wsR0FmRCxLQWxCTyxPQW1CTCxNQW9CVyxJQVpoQixJQVBTLEVBMkJwQixHQW5Cc0MsWUFZeEIsQ0FuQkcsV0FvQmtCLElBbkJuQyxLQU9BLE9BS3lCLGdCQVFULFdBekNBLEdBMENoQixXQXpDZ0IsY0FDbUIsZ0NBQ2pCLFlBK0JsQixJQTlCb0Isa0JBQ0osY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQge1xuICBMaW5rLFxuICBFbGVtZW50LFxuICBFdmVudHMsXG4gIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLFxuICBzY3JvbGxTcHksXG4gIHNjcm9sbGVyLFxufSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc29uZ3M6IFtdLFxuICAgICAgYWxwaGFiZXQ6IFtcbiAgICAgICAgJ2EnLFxuICAgICAgICAnYicsXG4gICAgICAgICdjJyxcbiAgICAgICAgJ2QnLFxuICAgICAgICAnZScsXG4gICAgICAgICdmJyxcbiAgICAgICAgJ2cnLFxuICAgICAgICAnaCcsXG4gICAgICAgICdpJyxcbiAgICAgICAgJ2onLFxuICAgICAgICAnaycsXG4gICAgICAgICdsJyxcbiAgICAgICAgJ20nLFxuICAgICAgICAnbicsXG4gICAgICAgICdvJyxcbiAgICAgICAgJ3AnLFxuICAgICAgICAncScsXG4gICAgICAgICdyJyxcbiAgICAgICAgJ3MnLFxuICAgICAgICAndCcsXG4gICAgICAgICd1JyxcbiAgICAgICAgJ3YnLFxuICAgICAgICAndycsXG4gICAgICAgICd4JyxcbiAgICAgICAgJ3knLFxuICAgICAgICAneicsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAnc29uZ0xpc3QnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNvbmdzOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5zdGF0ZS5zb25ncy5tYXAoKHNvbmcsIGkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFscGhhYmV0Lm1hcCgobGV0dGVyLCBpKSA9PiB7XG4gICAgICAgIGlmIChzb25nLmZpZWxkc1tsZXR0ZXJdKSB7XG4gICAgICAgICAgcmV0dXJuIHNvbmcuZmllbGRzW2xldHRlcl0uY29udGVudFswXS5jb250ZW50Lm1hcCgoc29uZywgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNvbmcuY29udGVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gc29uZy5jb250ZW50Lm1hcCgoc29uZywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzb25nLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtsZXR0ZXJ9IGlkPXtsZXR0ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3NvbmcudmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbHBoYWJldCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RXcmFwcGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0TmVvbic+U09ORyBMSVNUPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2FscGhhYmV0Jz5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFscGhhYmV0Lm1hcCgobGV0dGVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXN0NidcbiAgICAgICAgICAgICAgICAgICAgdG89e2xldHRlcn1cbiAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTE1MH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCMke2xldHRlcn1gfT57bGV0dGVyfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0Jz57bGlzdH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0V3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sZXR0ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFscGhhYmV0IHtcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDQsIDExMywgMjQ2LCAwLjk4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/list.js */"));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=list.js.1e65657f1ef7057d596c.hot-update.js.map