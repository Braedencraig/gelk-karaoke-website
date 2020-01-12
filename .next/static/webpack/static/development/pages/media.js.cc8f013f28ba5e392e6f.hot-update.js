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
              "class": "container",
              className: "jsx-3330429157",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            }, __jsx("img", {
              src: pictures.fields.file.url,
              alt: pictures.fields.file.url,
              style: {
                width: 100
              },
              className: "jsx-3330429157" + " " + 'image',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            }), __jsx("div", {
              className: "jsx-3330429157" + " " + 'middle',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            }, __jsx("div", {
              className: "jsx-3330429157" + " " + 'text',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            }, pictures.fields.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
              id: "3330429157",
              __self: this
            }, "p.jsx-3330429157{font-family:'Roboto',sans-serif;font-size:20px;color:#f1f1f1;text-align:center;}.pictures.jsx-3330429157{width:30%;margin:25px auto;}.pictures.jsx-3330429157 .top.jsx-3330429157{max-width:300px;max-height:400px;}img.jsx-3330429157{width:100%;height:auto;}.container.jsx-3330429157{position:relative;width:50%;}.image.jsx-3330429157{opacity:1;display:block;width:100%;height:auto;-webkit-transition:0.5s ease;transition:0.5s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden;}.middle.jsx-3330429157{-webkit-transition:0.5s ease;transition:0.5s ease;opacity:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);text-align:center;}.container.jsx-3330429157:hover .image.jsx-3330429157{opacity:0.3;}.container.jsx-3330429157:hover .middle.jsx-3330429157{opacity:1;}.text.jsx-3330429157{background-color:#4caf50;color:white;font-size:16px;padding:16px 32px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUQwQixBQUdvRCxBQU92QixBQUtNLEFBS0wsQUFLTyxBQUtSLEFBU1csQUFXVCxBQUlGLEFBSWUsVUEvQ1IsQUFvQkgsQUF3QmhCLENBbENjLENBOEJkLElBbkNtQixFQVVQLEtBSlosQ0FVYSxDQTJCQyxFQS9DZCxDQWVBLElBdkJpQixDQWFqQixFQWdCYyxFQTJCRyxVQXZERCxBQTZCTyxHQU1YLEVBcUJRLFFBcEJBLENBbkNBLFNBd0RwQixRQXBCVSxDQW5DVixPQW9DVyxTQUN1QixFQVRMLDhEQUM3Qix5Q0FTc0MsbUNBQ2xCLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL3BhZ2VzL21lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgQ2xpZW50SW1hZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvQ2xpZW50SW1hZ2VzJztcbmltcG9ydCBUZXN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEhlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lZGlhOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcblxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAncGljc0FuZFZpZGVvcycgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVkaWE6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcGljdHVyZXMgPSB0aGlzLnN0YXRlLm1lZGlhLm1hcCgocGljdHVyZXMsIGkpID0+IHtcbiAgICAgIGlmIChwaWN0dXJlcy5maWVsZHMucGljdHVyZXMpIHtcbiAgICAgICAgcmV0dXJuIHBpY3R1cmVzLmZpZWxkcy5waWN0dXJlcy5tYXAoKHBpY3R1cmVzLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlcy5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgICBhbHQ9e3BpY3R1cmVzLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1hZ2UnXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTAwIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWlkZGxlJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0Jz57cGljdHVyZXMuZmllbGRzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdwaWN0dXJlcyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvcCc+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cGljdHVyZXMuZmllbGRzLmZpbGUudXJsfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3BpY3R1cmVzLmZpZWxkcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvdHRvbSc+XG4gICAgICAgICAgICAgICAgICA8cD57cGljdHVyZXMuZmllbGRzLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5waWN0dXJlcyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnBpY3R1cmVzIC50b3Age1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5taWRkbGUge1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lcjpob3ZlciAuaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250YWluZXI6aG92ZXIgLm1pZGRsZSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nY2xpZW50VGl0bGUnPlBJQ1RVUkVTPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleEl0Jz57cGljdHVyZXN9PC9kaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nY2xpZW50VGl0bGVUZXN0Jz5WSURFT1M8L2gyPlxuICAgICAgICAgIHsvKiB7dGVzdGltb25pYWxzfSAqL31cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b3xSb2JvdG8rQ29uZGVuc2VkJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgICAgLmZsZXhJdCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NXZoO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgxLFxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgLTVweCAwIDA7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDd2dztcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmVlO1xuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSBibHVlLCAwIDAgMC41ZW0gYmx1ZSxcbiAgICAgICAgICAgICAgICAwIDAgMC4xZW0gYmx1ZSwgMCAxMHB4IDNweCAjMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNsaWVudFRpdGxlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jbGllbnRUaXRsZVRlc3Qge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/media.js */"));
          });
        }
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4089651751" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-4089651751" + " " + 'clientTitle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "PICTURES"), __jsx("div", {
        className: "jsx-4089651751" + " " + 'flexIt',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, pictures), __jsx("h2", {
        className: "jsx-4089651751" + " " + 'clientTitleTest',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "VIDEOS"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4089651751",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');.flexIt.jsx-4089651751{border:5px solid #f1f1f1;border-radius:25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:80%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;padding:50px;min-height:55vh;max-width:1400px;}h1.jsx-4089651751,h2.jsx-4089651751{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:'Roboto',sans-serif;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em blue,0 0 0.5em blue, 0 0 0.1em blue,0 10px 3px #000;}h1.jsx-4089651751{margin-bottom:50px;}.wrapper.jsx-4089651751{margin-top:20vh;}.clientTitle.jsx-4089651751{margin-bottom:50px;}.clientTitleTest.jsx-4089651751{margin-top:150px;margin-bottom:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUlzQixBQUV3RyxBQUVoRSxBQWFOLEFBY0EsQUFJSCxBQUlHLEFBR0YsZ0JBTm5CLENBT3FCLEVBekJELEFBY3BCLEFBUUEsTUFuQ3FCLFdBdUNyQixDQXpCcUIsT0FiTiwwRUFDSCxVQUNLLEVBWUQsY0FDQSxjQUNtQiwyQkFiVixLQWNQLGdCQUNFLGtCQUNQLFdBRXNCLGlEQWpCbkIsY0FDRCxhQUNHLGdCQUNDLEVBZW5CLGVBZEEiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9tZWRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IENsaWVudEltYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL0NsaWVudEltYWdlcyc7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZWRpYTogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG5cbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ3BpY3NBbmRWaWRlb3MnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lZGlhOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBpY3R1cmVzID0gdGhpcy5zdGF0ZS5tZWRpYS5tYXAoKHBpY3R1cmVzLCBpKSA9PiB7XG4gICAgICBpZiAocGljdHVyZXMuZmllbGRzLnBpY3R1cmVzKSB7XG4gICAgICAgIHJldHVybiBwaWN0dXJlcy5maWVsZHMucGljdHVyZXMubWFwKChwaWN0dXJlcywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17cGljdHVyZXMuZmllbGRzLmZpbGUudXJsfVxuICAgICAgICAgICAgICAgICAgYWx0PXtwaWN0dXJlcy5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltYWdlJ1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEwMCB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21pZGRsZSc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dCc+e3BpY3R1cmVzLmZpZWxkcy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncGljdHVyZXMnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3AnPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmVzLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwaWN0dXJlcy5maWVsZHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3R0b20nPlxuICAgICAgICAgICAgICAgICAgPHA+e3BpY3R1cmVzLmZpZWxkcy50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucGljdHVyZXMge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5waWN0dXJlcyAudG9wIHtcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWlkZGxlIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250YWluZXI6aG92ZXIgLmltYWdlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyOmhvdmVyIC5taWRkbGUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAzMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NsaWVudFRpdGxlJz5QSUNUVVJFUzwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhJdCc+e3BpY3R1cmVzfTwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NsaWVudFRpdGxlVGVzdCc+VklERU9TPC9oMj5cbiAgICAgICAgICB7Lyoge3Rlc3RpbW9uaWFsc30gKi99XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG98Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICAgIC5mbGV4SXQge1xuICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNTV2aDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMSxcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gYmx1ZSwgMCAwIDAuNWVtIGJsdWUsXG4gICAgICAgICAgICAgICAgMCAwIDAuMWVtIGJsdWUsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGllbnRUaXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50VGl0bGVUZXN0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/media.js */")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=media.js.cc8f013f28ba5e392e6f.hot-update.js.map