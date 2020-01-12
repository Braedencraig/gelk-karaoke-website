webpackHotUpdate("static/development/pages/shows.js",{

/***/ "./pages/shows.js":
/*!************************!*\
  !*** ./pages/shows.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shows; });
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
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/shows.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");




var Shows =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Shows, _React$Component);

  function Shows(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Shows);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Shows).call(this, props));
    _this.state = {
      shows: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Shows, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = contentful.createClient({
        space: 'sqmp3jmwaedr',
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      });
      client.getEntries({
        content_type: 'upcomingShows'
      }).then(function (response) {
        _this2.setState({
          shows: response.items
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var shows = this.state.shows.map(function (shows, i) {
        if (shows.fields.showOne) {
          var actualShows = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(shows.fields);

          return actualShows.map(function (show, i) {
            return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            }, "adsadas"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
              href: {
                pathname: "".concat(show.content[0].content[1].data.uri)
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            }, __jsx("a", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            }, show.content[1].content[0].value), ' '));
          });
        }
      }); // const shows = this.state.shows.map((shows, i) => {
      //   const realShows = Object.values(shows.fields);
      //   if (realShows) {
      //     return realShows.map((show, i) => {
      //       return (
      //         <>
      //           <p>adsadas</p>
      //           <Link
      //             href={{ pathname: `${show.content[0].content[1].data.uri}` }}
      //           >
      //             <a>{show.content[1].content[0].value}</a>{' '}
      //           </Link>
      //         </>
      //       );
      //     });
      //   }
      // });

      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1393880905" + " " + 'listWrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1393880905" + " " + 'contactNeon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "UPCOMING SHOWS"), __jsx("div", {
        className: "jsx-1393880905" + " " + 'shows',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, shows)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1393880905",
        __self: this
      }, "h1.jsx-1393880905{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:'Roboto',sans-serif;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444, 0 0 0.5em #ff4444,0 0 0.1em #ff4444,0 10px 3px #000;}.listWrapper.jsx-1393880905{margin-top:25vh;}.shows.jsx-1393880905{font-family:'Roboto',sans-serif;width:600px;margin:0 auto;text-align:center;font-size:26px;color:#f1f1f1;}p.jsx-1393880905{color:#f1f1f1;font-size:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-1393880905{-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;margin:10px;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444, 0 0 0.5em #ff4444,0 0 0.1em #ff4444,0 10px 3px #000;}a.jsx-1393880905:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvc2hvd3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VvQixBQUdnQyxBQWFILEFBSWlCLEFBU25CLEFBT08sQUFTSyxjQWZYLEVBYmpCLEdBYm9CLFVBMkJMLEdBVkQsS0FoQk8sT0FpQkwsTUFlVyxRQWRQLEVBdUJwQixlQVJjLENBZEcsV0FlSixJQWRHLE9BZ0J5QyxLQVRoQyxFQU56Qix5QkFwQmdCLGNBQ0EsY0FDbUIsZ0NBQ2pCLFdBaUNsQixDQVRBLElBdkJvQixrQkFDUCxXQUU0Qyx1R0FDekQiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9zaG93cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IFRlc3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0SGVhZGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ3VwY29taW5nU2hvd3MnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dzOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzaG93cyA9IHRoaXMuc3RhdGUuc2hvd3MubWFwKChzaG93cywgaSkgPT4ge1xuICAgICAgaWYgKHNob3dzLmZpZWxkcy5zaG93T25lKSB7XG4gICAgICAgIGNvbnN0IGFjdHVhbFNob3dzID0gT2JqZWN0LnZhbHVlcyhzaG93cy5maWVsZHMpO1xuICAgICAgICByZXR1cm4gYWN0dWFsU2hvd3MubWFwKChzaG93LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwPmFkc2FkYXM8L3A+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17eyBwYXRobmFtZTogYCR7c2hvdy5jb250ZW50WzBdLmNvbnRlbnRbMV0uZGF0YS51cml9YCB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGE+e3Nob3cuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlfTwvYT57JyAnfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBjb25zdCBzaG93cyA9IHRoaXMuc3RhdGUuc2hvd3MubWFwKChzaG93cywgaSkgPT4ge1xuICAgIC8vICAgY29uc3QgcmVhbFNob3dzID0gT2JqZWN0LnZhbHVlcyhzaG93cy5maWVsZHMpO1xuICAgIC8vICAgaWYgKHJlYWxTaG93cykge1xuICAgIC8vICAgICByZXR1cm4gcmVhbFNob3dzLm1hcCgoc2hvdywgaSkgPT4ge1xuICAgIC8vICAgICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgICA8PlxuICAgIC8vICAgICAgICAgICA8cD5hZHNhZGFzPC9wPlxuICAgIC8vICAgICAgICAgICA8TGlua1xuICAgIC8vICAgICAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6IGAke3Nob3cuY29udGVudFswXS5jb250ZW50WzFdLmRhdGEudXJpfWAgfX1cbiAgICAvLyAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICAgIDxhPntzaG93LmNvbnRlbnRbMV0uY29udGVudFswXS52YWx1ZX08L2E+eycgJ31cbiAgICAvLyAgICAgICAgICAgPC9MaW5rPlxuICAgIC8vICAgICAgICAgPC8+XG4gICAgLy8gICAgICAgKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RXcmFwcGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0TmVvbic+VVBDT01JTkcgU0hPV1M8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaG93cyc+e3Nob3dzfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBtYXJnaW46IDAgLTVweCAwIDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDd2dztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICNmZjQ0NDQsXG4gICAgICAgICAgICAgIDAgMCAwLjVlbSAjZmY0NDQ0LCAwIDAgMC4xZW0gI2ZmNDQ0NCwgMCAxMHB4IDNweCAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdFdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2hvd3Mge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmVlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gI2ZmNDQ0NCxcbiAgICAgICAgICAgICAgMCAwIDAuNWVtICNmZjQ0NDQsIDAgMCAwLjFlbSAjZmY0NDQ0LCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/shows.js */"));
    }
  }]);

  return Shows;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=shows.js.ac6ee5be8e0a0b83aee0.hot-update.js.map