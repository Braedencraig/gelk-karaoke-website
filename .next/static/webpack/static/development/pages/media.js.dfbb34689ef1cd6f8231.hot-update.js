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
              "class": "image-container",
              className: "jsx-204007852",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            }, __jsx("img", {
              src: pictures.fields.file.url,
              className: "jsx-204007852",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            }), __jsx("div", {
              "class": "after",
              className: "jsx-204007852",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            }, "This is some content")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
              id: "204007852",
              __self: this
            }, ".image-container.jsx-204007852{position:relative;width:200px;height:300px;}.image-container.jsx-204007852 .after.jsx-204007852{position:absolute;top:0;left:0;display:none;color:#fff;}.image-container.jsx-204007852:hover .after.jsx-204007852{background:rgba(0,0,0,0.6);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0QwQixBQTBDcUMsQUFLQSxBQVFZLGtCQVpsQixBQUtOLE1BQ0MsR0FPVCxHQVplLENBT0EsWUFOZixDQU9hLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9tZWRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IENsaWVudEltYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL0NsaWVudEltYWdlcyc7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZWRpYTogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG5cbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ3BpY3NBbmRWaWRlb3MnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lZGlhOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBpY3R1cmVzID0gdGhpcy5zdGF0ZS5tZWRpYS5tYXAoKHBpY3R1cmVzLCBpKSA9PiB7XG4gICAgICBpZiAocGljdHVyZXMuZmllbGRzLnBpY3R1cmVzKSB7XG4gICAgICAgIHJldHVybiBwaWN0dXJlcy5maWVsZHMucGljdHVyZXMubWFwKChwaWN0dXJlcywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3BpY3R1cmVzJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wJz5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlcy5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17cGljdHVyZXMuZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm90dG9tJz5cbiAgICAgICAgICAgICAgICAgIDxwPntwaWN0dXJlcy5maWVsZHMudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ltYWdlLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3BpY3R1cmVzLmZpZWxkcy5maWxlLnVybH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhZnRlcic+VGhpcyBpcyBzb21lIGNvbnRlbnQ8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAvKiBwIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5waWN0dXJlcyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnBpY3R1cmVzIC50b3Age1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnBpY3R1cmVzIC50b3A6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5waWN0dXJlcyAuYm90dG9tIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH0gKi9cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIgLmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lcjpob3ZlciAuYWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NsaWVudFRpdGxlJz5QSUNUVVJFUzwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhJdCc+e3BpY3R1cmVzfTwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NsaWVudFRpdGxlVGVzdCc+VklERU9TPC9oMj5cbiAgICAgICAgICB7Lyoge3Rlc3RpbW9uaWFsc30gKi99XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG98Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICAgIC5mbGV4SXQge1xuICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNTV2aDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMSxcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gYmx1ZSwgMCAwIDAuNWVtIGJsdWUsXG4gICAgICAgICAgICAgICAgMCAwIDAuMWVtIGJsdWUsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGllbnRUaXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50VGl0bGVUZXN0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/media.js */"));
          });
        }
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4089651751" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-4089651751" + " " + 'clientTitle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "PICTURES"), __jsx("div", {
        className: "jsx-4089651751" + " " + 'flexIt',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, pictures), __jsx("h2", {
        className: "jsx-4089651751" + " " + 'clientTitleTest',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "VIDEOS"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4089651751",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');.flexIt.jsx-4089651751{border:5px solid #f1f1f1;border-radius:25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:80%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;padding:50px;min-height:55vh;max-width:1400px;}h1.jsx-4089651751,h2.jsx-4089651751{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:'Roboto',sans-serif;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em blue,0 0 0.5em blue, 0 0 0.1em blue,0 10px 3px #000;}h1.jsx-4089651751{margin-bottom:50px;}.wrapper.jsx-4089651751{margin-top:20vh;}.clientTitle.jsx-4089651751{margin-bottom:50px;}.clientTitleTest.jsx-4089651751{margin-top:150px;margin-bottom:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0hzQixBQUV3RyxBQUVoRSxBQWFOLEFBY0EsQUFJSCxBQUlHLEFBR0YsZ0JBTm5CLENBT3FCLEVBekJELEFBY3BCLEFBUUEsTUFuQ3FCLFdBdUNyQixDQXpCcUIsT0FiTiwwRUFDSCxVQUNLLEVBWUQsY0FDQSxjQUNtQiwyQkFiVixLQWNQLGdCQUNFLGtCQUNQLFdBRXNCLGlEQWpCbkIsY0FDRCxhQUNHLGdCQUNDLEVBZW5CLGVBZEEiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9tZWRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IENsaWVudEltYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL0NsaWVudEltYWdlcyc7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZWRpYTogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG5cbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ3BpY3NBbmRWaWRlb3MnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lZGlhOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBpY3R1cmVzID0gdGhpcy5zdGF0ZS5tZWRpYS5tYXAoKHBpY3R1cmVzLCBpKSA9PiB7XG4gICAgICBpZiAocGljdHVyZXMuZmllbGRzLnBpY3R1cmVzKSB7XG4gICAgICAgIHJldHVybiBwaWN0dXJlcy5maWVsZHMucGljdHVyZXMubWFwKChwaWN0dXJlcywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3BpY3R1cmVzJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wJz5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlcy5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17cGljdHVyZXMuZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm90dG9tJz5cbiAgICAgICAgICAgICAgICAgIDxwPntwaWN0dXJlcy5maWVsZHMudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ltYWdlLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3BpY3R1cmVzLmZpZWxkcy5maWxlLnVybH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhZnRlcic+VGhpcyBpcyBzb21lIGNvbnRlbnQ8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAvKiBwIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5waWN0dXJlcyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnBpY3R1cmVzIC50b3Age1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnBpY3R1cmVzIC50b3A6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5waWN0dXJlcyAuYm90dG9tIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH0gKi9cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIgLmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lcjpob3ZlciAuYWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NsaWVudFRpdGxlJz5QSUNUVVJFUzwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhJdCc+e3BpY3R1cmVzfTwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NsaWVudFRpdGxlVGVzdCc+VklERU9TPC9oMj5cbiAgICAgICAgICB7Lyoge3Rlc3RpbW9uaWFsc30gKi99XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG98Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICAgIC5mbGV4SXQge1xuICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNTV2aDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMSxcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gYmx1ZSwgMCAwIDAuNWVtIGJsdWUsXG4gICAgICAgICAgICAgICAgMCAwIDAuMWVtIGJsdWUsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGllbnRUaXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50VGl0bGVUZXN0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/media.js */")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=media.js.dfbb34689ef1cd6f8231.hot-update.js.map