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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/list.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");






var ColorCircularProgress = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])({
  root: {
    color: '#f1f1f1'
  }
})(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"]);

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

      console.log(this.state.songs);
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
                        lineNumber: 80
                      },
                      __self: this
                    }, __jsx("div", {
                      key: i,
                      id: letter,
                      className: "jsx-4006146557" + " " + (letter || ""),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                      },
                      __self: this
                    }, __jsx("p", {
                      className: "jsx-4006146557",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                      },
                      __self: this
                    }, song.value)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      id: "4006146557",
                      __self: this
                    }, ".alphabet.jsx-4006146557{margin-bottom:50px;margin-top:200px;}p.jsx-4006146557{color:#f1f1f1;font-family:'Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRmtDLEFBRzhDLEFBSUwsY0FDbUIsS0FKaEIsaUJBQ25CLFVBSUEiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQge1xuICBMaW5rLFxuICBFbGVtZW50LFxuICBFdmVudHMsXG4gIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLFxuICBzY3JvbGxTcHksXG4gIHNjcm9sbGVyLFxufSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgQ29sb3JDaXJjdWxhclByb2dyZXNzID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBjb2xvcjogJyNmMWYxZjEnLFxuICB9LFxufSkoQ2lyY3VsYXJQcm9ncmVzcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc29uZ3M6IFtdLFxuICAgICAgYWxwaGFiZXQ6IFtcbiAgICAgICAgJ2EnLFxuICAgICAgICAnYicsXG4gICAgICAgICdjJyxcbiAgICAgICAgJ2QnLFxuICAgICAgICAnZScsXG4gICAgICAgICdmJyxcbiAgICAgICAgJ2cnLFxuICAgICAgICAnaCcsXG4gICAgICAgICdpJyxcbiAgICAgICAgJ2onLFxuICAgICAgICAnaycsXG4gICAgICAgICdsJyxcbiAgICAgICAgJ20nLFxuICAgICAgICAnbicsXG4gICAgICAgICdvJyxcbiAgICAgICAgJ3AnLFxuICAgICAgICAncScsXG4gICAgICAgICdyJyxcbiAgICAgICAgJ3MnLFxuICAgICAgICAndCcsXG4gICAgICAgICd1JyxcbiAgICAgICAgJ3YnLFxuICAgICAgICAndycsXG4gICAgICAgICd4JyxcbiAgICAgICAgJ3knLFxuICAgICAgICAneicsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNvbmdzKTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG4gICAgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6ICdzb25nTGlzdCcgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29uZ3M6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnN0YXRlLnNvbmdzLm1hcCgoc29uZywgaSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxwaGFiZXQubWFwKChsZXR0ZXIsIGkpID0+IHtcbiAgICAgICAgaWYgKHNvbmcuZmllbGRzW2xldHRlcl0pIHtcbiAgICAgICAgICByZXR1cm4gc29uZy5maWVsZHNbbGV0dGVyXS5jb250ZW50WzBdLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoc29uZy5jb250ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBzb25nLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvbmcuY29udGVudC5tYXAoKHNvbmcsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17bGV0dGVyfSBpZD17bGV0dGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzb25nLnZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWxwaGFiZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0V3JhcHBlcic+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY29udGFjdE5lb24nPlNPTkcgTElTVDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdhbHBoYWJldCc+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbHBoYWJldC5tYXAoKGxldHRlciwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGVzdDYnXG4gICAgICAgICAgICAgICAgICAgIHRvPXtsZXR0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ey0xNTB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtsZXR0ZXJ9YH0+e2xldHRlcn08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdCc+XG4gICAgICAgICAgICB7bGlzdCA/IGxpc3QgOiA8Q29sb3JDaXJjdWxhclByb2dyZXNzIHNpemU9ezEwMH0gdGhpY2tuZXNzPXs1fSAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0V3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sZXR0ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFscGhhYmV0IHtcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDQsIDExMywgMjQ2LCAwLjk4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/list.js */"));
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
          lineNumber: 104
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-350906149" + " " + 'listWrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-350906149" + " " + 'contactNeon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "SONG LIST"), __jsx("p", {
        className: "jsx-350906149" + " " + 'alphabet',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, this.state.alphabet.map(function (letter, i) {
        return __jsx("h3", {
          className: "jsx-350906149",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
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
            lineNumber: 111
          },
          __self: this
        }, __jsx("a", {
          href: "#".concat(letter),
          className: "jsx-350906149",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, letter)));
      })), __jsx("div", {
        className: "jsx-350906149" + " " + 'list',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, list ? list : __jsx(ColorCircularProgress, {
        size: 100,
        thickness: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "350906149",
        __self: this
      }, "h1.jsx-350906149{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:'Roboto',sans-serif;font-weight:100;text-align:center;color:#f1f1f1;}.listWrapper.jsx-350906149{margin-top:25vh;}.letter.jsx-350906149{color:#f1f1f1;}.list.jsx-350906149{font-family:'Roboto',sans-serif;width:600px;margin:0 auto;text-align:center;font-size:26px;}.alphabet.jsx-350906149{margin:50px 0;position:-webkit-sticky;position:sticky;top:60px;background:rgba(44,113,246,0.98);}p.jsx-350906149{color:#f1f1f1;font-size:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-350906149{-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;margin:10px;font-family:'Roboto',sans-serif;color:#f1f1f1;}a.jsx-350906149:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSW9CLEFBR2dDLEFBV0gsQUFJRixBQUltQixBQVFuQixBQU1BLEFBT08sQUFRSyxjQWhDNUIsQUFZa0IsQUFNRCxFQXRCakIsR0FYb0IsVUFrQ0wsR0FmRCxLQWxCTyxPQW1CTCxNQW9CVyxJQVpoQixJQVBTLEVBMkJwQixHQW5Cc0MsWUFZeEIsQ0FuQkcsV0FvQmtCLElBbkJuQyxLQU9BLE9BS3lCLGdCQVFULFdBekNBLEdBMENoQixXQXpDZ0IsY0FDbUIsZ0NBQ2pCLFlBK0JsQixJQTlCb0Isa0JBQ0osY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQge1xuICBMaW5rLFxuICBFbGVtZW50LFxuICBFdmVudHMsXG4gIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLFxuICBzY3JvbGxTcHksXG4gIHNjcm9sbGVyLFxufSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgQ29sb3JDaXJjdWxhclByb2dyZXNzID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBjb2xvcjogJyNmMWYxZjEnLFxuICB9LFxufSkoQ2lyY3VsYXJQcm9ncmVzcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc29uZ3M6IFtdLFxuICAgICAgYWxwaGFiZXQ6IFtcbiAgICAgICAgJ2EnLFxuICAgICAgICAnYicsXG4gICAgICAgICdjJyxcbiAgICAgICAgJ2QnLFxuICAgICAgICAnZScsXG4gICAgICAgICdmJyxcbiAgICAgICAgJ2cnLFxuICAgICAgICAnaCcsXG4gICAgICAgICdpJyxcbiAgICAgICAgJ2onLFxuICAgICAgICAnaycsXG4gICAgICAgICdsJyxcbiAgICAgICAgJ20nLFxuICAgICAgICAnbicsXG4gICAgICAgICdvJyxcbiAgICAgICAgJ3AnLFxuICAgICAgICAncScsXG4gICAgICAgICdyJyxcbiAgICAgICAgJ3MnLFxuICAgICAgICAndCcsXG4gICAgICAgICd1JyxcbiAgICAgICAgJ3YnLFxuICAgICAgICAndycsXG4gICAgICAgICd4JyxcbiAgICAgICAgJ3knLFxuICAgICAgICAneicsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNvbmdzKTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG4gICAgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6ICdzb25nTGlzdCcgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29uZ3M6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnN0YXRlLnNvbmdzLm1hcCgoc29uZywgaSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxwaGFiZXQubWFwKChsZXR0ZXIsIGkpID0+IHtcbiAgICAgICAgaWYgKHNvbmcuZmllbGRzW2xldHRlcl0pIHtcbiAgICAgICAgICByZXR1cm4gc29uZy5maWVsZHNbbGV0dGVyXS5jb250ZW50WzBdLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoc29uZy5jb250ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBzb25nLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvbmcuY29udGVudC5tYXAoKHNvbmcsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17bGV0dGVyfSBpZD17bGV0dGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzb25nLnZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWxwaGFiZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0V3JhcHBlcic+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY29udGFjdE5lb24nPlNPTkcgTElTVDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdhbHBoYWJldCc+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbHBoYWJldC5tYXAoKGxldHRlciwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGVzdDYnXG4gICAgICAgICAgICAgICAgICAgIHRvPXtsZXR0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ey0xNTB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtsZXR0ZXJ9YH0+e2xldHRlcn08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdCc+XG4gICAgICAgICAgICB7bGlzdCA/IGxpc3QgOiA8Q29sb3JDaXJjdWxhclByb2dyZXNzIHNpemU9ezEwMH0gdGhpY2tuZXNzPXs1fSAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0V3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sZXR0ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFscGhhYmV0IHtcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDQsIDExMywgMjQ2LCAwLjk4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/list.js */"));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=list.js.e7b6a8db35941b01a908.hot-update.js.map