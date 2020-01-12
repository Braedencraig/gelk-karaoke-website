webpackHotUpdate("static/development/pages/media.js",{

/***/ "./pages/media.js":
/*!************************!*\
  !*** ./pages/media.js ***!
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





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/media.js";


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
      media: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = contentful.createClient({
        space: 'sqmp3jmwaedr',
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      });
      client.getEntries({
        content_type: 'picsAndVideos'
      }).then(function (response) {
        _this2.setState({
          media: response.items
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var pictures = this.state.media.map(function (pictures, i) {
        if (pictures.fields.pictures) {
          return pictures.fields.pictures.map(function (pictures, i) {
            return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
              className: "jsx-3651019122" + " " + 'pictures',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            }, __jsx("div", {
              className: "jsx-3651019122" + " " + 'top',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            }, __jsx("img", {
              src: pictures.fields.file.url,
              alt: pictures.fields.title,
              className: "jsx-3651019122",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            })), __jsx("div", {
              className: "jsx-3651019122" + " " + 'bottom',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            }, __jsx("p", {
              className: "jsx-3651019122",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            }, pictures.fields.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
              id: "3651019122",
              __self: this
            }, "p.jsx-3651019122{font-family:'Roboto',sans-serif;font-size:20px;color:#f1f1f1;text-align:center;pointer-events:none;}.pictures.jsx-3651019122{width:30%;margin:25px auto;position:relative;}.pictures.jsx-3651019122 .top.jsx-3651019122{max-width:300px;max-height:400px;-webkit-transition:all 0.4s;transition:all 0.4s;}.pictures.jsx-3651019122 .top.jsx-3651019122:hover{opacity:0.5;}.pictures.jsx-3651019122 .pictures.jsx-3651019122 .bottom.jsx-3651019122{position:absolute;top:50%;right:50%;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);}img.jsx-3651019122{width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEMwQixBQUdvRCxBQVF2QixBQU1NLEFBTUosQUFJTSxBQU9QLFVBdEJNLENBdUJMLENBWGQsSUFObUIsRUFVVCxLQVFWLEdBUFksQ0FoQlEsS0FUSCxDQWVLLEdBV1csU0FoQmpDLEVBVGdCLGNBQ0ksa0JBQ0UsRUFhdEIsa0JBWkEsdUNBdUJBIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcbmltcG9ydCBDbGllbnRJbWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9DbGllbnRJbWFnZXMnO1xuaW1wb3J0IFRlc3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0SGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVkaWE6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuXG4gICAgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6ICdwaWNzQW5kVmlkZW9zJyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZWRpYTogcmVzcG9uc2UuaXRlbXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwaWN0dXJlcyA9IHRoaXMuc3RhdGUubWVkaWEubWFwKChwaWN0dXJlcywgaSkgPT4ge1xuICAgICAgaWYgKHBpY3R1cmVzLmZpZWxkcy5waWN0dXJlcykge1xuICAgICAgICByZXR1cm4gcGljdHVyZXMuZmllbGRzLnBpY3R1cmVzLm1hcCgocGljdHVyZXMsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BpY3R1cmVzJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wJz5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlcy5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17cGljdHVyZXMuZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm90dG9tJz5cbiAgICAgICAgICAgICAgICAgIDxwPntwaWN0dXJlcy5maWVsZHMudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5waWN0dXJlcyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnBpY3R1cmVzIC50b3Age1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnBpY3R1cmVzIC50b3A6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5waWN0dXJlcyAucGljdHVyZXMgLmJvdHRvbSB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjbGllbnRUaXRsZSc+UElDVFVSRVM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4SXQnPntwaWN0dXJlc308L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjbGllbnRUaXRsZVRlc3QnPlZJREVPUzwvaDI+XG4gICAgICAgICAgey8qIHt0ZXN0aW1vbmlhbHN9ICovfVxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvfFJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgICAuZmxleEl0IHtcbiAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI2YxZjFmMTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU1dmg7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDEsXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4IDAgMDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3Z3O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtIGJsdWUsIDAgMCAwLjVlbSBibHVlLFxuICAgICAgICAgICAgICAgIDAgMCAwLjFlbSBibHVlLCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHZoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2xpZW50VGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsaWVudFRpdGxlVGVzdCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/media.js */"));
          });
        }
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4089651751" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-4089651751" + " " + 'clientTitle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "PICTURES"), __jsx("div", {
        className: "jsx-4089651751" + " " + 'flexIt',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, pictures), __jsx("h2", {
        className: "jsx-4089651751" + " " + 'clientTitleTest',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "VIDEOS"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4089651751",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');.flexIt.jsx-4089651751{border:5px solid #f1f1f1;border-radius:25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:80%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;padding:50px;min-height:55vh;max-width:1400px;}h1.jsx-4089651751,h2.jsx-4089651751{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:'Roboto',sans-serif;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em blue,0 0 0.5em blue, 0 0 0.1em blue,0 10px 3px #000;}h1.jsx-4089651751{margin-bottom:50px;}.wrapper.jsx-4089651751{margin-top:20vh;}.clientTitle.jsx-4089651751{margin-bottom:50px;}.clientTitleTest.jsx-4089651751{margin-top:150px;margin-bottom:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZzQixBQUV3RyxBQUVoRSxBQWFOLEFBY0EsQUFJSCxBQUlHLEFBR0YsZ0JBTm5CLENBT3FCLEVBekJELEFBY3BCLEFBUUEsTUFuQ3FCLFdBdUNyQixDQXpCcUIsT0FiTiwwRUFDSCxVQUNLLEVBWUQsY0FDQSxjQUNtQiwyQkFiVixLQWNQLGdCQUNFLGtCQUNQLFdBRXNCLGlEQWpCbkIsY0FDRCxhQUNHLGdCQUNDLEVBZW5CLGVBZEEiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9tZWRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IENsaWVudEltYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL0NsaWVudEltYWdlcyc7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZWRpYTogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG5cbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ3BpY3NBbmRWaWRlb3MnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lZGlhOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBpY3R1cmVzID0gdGhpcy5zdGF0ZS5tZWRpYS5tYXAoKHBpY3R1cmVzLCBpKSA9PiB7XG4gICAgICBpZiAocGljdHVyZXMuZmllbGRzLnBpY3R1cmVzKSB7XG4gICAgICAgIHJldHVybiBwaWN0dXJlcy5maWVsZHMucGljdHVyZXMubWFwKChwaWN0dXJlcywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGljdHVyZXMnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3AnPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmVzLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwaWN0dXJlcy5maWVsZHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3R0b20nPlxuICAgICAgICAgICAgICAgICAgPHA+e3BpY3R1cmVzLmZpZWxkcy50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnBpY3R1cmVzIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucGljdHVyZXMgLnRvcCB7XG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucGljdHVyZXMgLnRvcDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnBpY3R1cmVzIC5waWN0dXJlcyAuYm90dG9tIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NsaWVudFRpdGxlJz5QSUNUVVJFUzwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhJdCc+e3BpY3R1cmVzfTwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NsaWVudFRpdGxlVGVzdCc+VklERU9TPC9oMj5cbiAgICAgICAgICB7Lyoge3Rlc3RpbW9uaWFsc30gKi99XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG98Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICAgIC5mbGV4SXQge1xuICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNTV2aDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMSxcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gYmx1ZSwgMCAwIDAuNWVtIGJsdWUsXG4gICAgICAgICAgICAgICAgMCAwIDAuMWVtIGJsdWUsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGllbnRUaXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50VGl0bGVUZXN0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/media.js */")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=media.js.72ae552aadebe1375c07.hot-update.js.map