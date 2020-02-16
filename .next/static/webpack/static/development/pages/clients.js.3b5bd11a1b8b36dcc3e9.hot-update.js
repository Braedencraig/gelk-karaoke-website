webpackHotUpdate("static/development/pages/clients.js",{

/***/ "./components/ClientImages.js":
/*!************************************!*\
  !*** ./components/ClientImages.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/ClientImages.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");





var ColorCircularProgress = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])({
  root: {
    color: '#f1f1f1'
  }
})(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"]);

var ClientImages =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ClientImages, _React$Component);

  function ClientImages(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientImages);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ClientImages).call(this, props));
    _this.state = {
      clients: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientImages, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = contentful.createClient({
        space: 'sqmp3jmwaedr',
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      });
      client.getEntries({
        content_type: 'clients'
      }).then(function (response) {
        _this2.setState({
          clients: response.items
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-725824782" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-725824782" + " " + ((this.state.clients.length === 0 ? 'flexContainerLoading' : 'flexContainer') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.state.clients.length === 0 ? __jsx(ColorCircularProgress, {
        size: 100,
        thickness: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }) : this.state.clients[0] ? this.state.clients[0].fields.clientImages.map(function (images, i) {
        return __jsx("div", {
          key: i,
          className: "jsx-725824782" + " " + 'clientImages',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("img", {
          src: images.fields.file.url,
          className: "jsx-725824782",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }));
      }) : ''), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "725824782",
        __self: this
      }, ".clientImages.jsx-725824782 img.jsx-725824782{max-width:150px;max-height:150px;border:none;border-radius:5px;padding:10px;}.clientImages.jsx-725824782{margin:10px;}.flexContainer.jsx-725824782{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:120px;background:white;padding:50px 0;min-height:55vh;}.flexContainerLoading.jsx-725824782{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:-100px;margin-top:100px;background:none;padding:50px 0;min-height:55vh;}@media screen and (max-width:700px){.flexContainer.jsx-725824782{margin-top:200px;}}@media screen and (max-width:447px){.flexContainer.jsx-725824782{width:70%;}.container.jsx-725824782{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}@media screen and (max-width:340px){.flexConatiner.jsx-725824782{margin-top:175px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DbGllbnRJbWFnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURvQixBQUc2QixBQVFKLEFBSUMsQUFXQSxBQWFNLEFBTVAsQUFJRyxBQU9JLFVBVm5CLEVBbENGLElBUm1CLENBb0NqQixBQWlCQSxnQkFwRFksWUFDTSxrQkFDTCxXQVNGLEFBV0EsQUF1QmMsRUExQzNCLFNBU2lCLEFBV0EseURBVlEsQUFXQSwrQkFzQnZCLG9FQWhDaUIsQUFXSSxpQkFWSixJQVdBLGFBVkYsSUFXQyxXQVZBLEtBV0QsV0FWakIsSUFXa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DbGllbnRJbWFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5pbXBvcnQgJy4uL2luZGV4LmNzcyc7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCBDb2xvckNpcmN1bGFyUHJvZ3Jlc3MgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGNvbG9yOiAnI2YxZjFmMScsXG4gIH0sXG59KShDaXJjdWxhclByb2dyZXNzKTtcblxuY2xhc3MgQ2xpZW50SW1hZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsaWVudHM6IFtdLFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcblxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAnY2xpZW50cycgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2xpZW50czogcmVzcG9uc2UuaXRlbXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbGllbnRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICA/ICdmbGV4Q29udGFpbmVyTG9hZGluZydcbiAgICAgICAgICAgICAgOiAnZmxleENvbnRhaW5lcidcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5jbGllbnRzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxDb2xvckNpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MTAwfSB0aGlja25lc3M9ezV9IC8+XG4gICAgICAgICAgKSA6IHRoaXMuc3RhdGUuY2xpZW50c1swXSA/IChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xpZW50c1swXS5maWVsZHMuY2xpZW50SW1hZ2VzLm1hcCgoaW1hZ2VzLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnRJbWFnZXMnIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlcy5maWVsZHMuZmlsZS51cmx9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgJydcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNsaWVudEltYWdlcyBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xpZW50SW1hZ2VzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmxleENvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1NXZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mbGV4Q29udGFpbmVyTG9hZGluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU1dmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgIC5mbGV4Q29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQ3cHgpIHtcbiAgICAgICAgICAgIC5mbGV4Q29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gICAgICAgICAgICAuZmxleENvbmF0aW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGllbnRJbWFnZXM7XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/ClientImages.js */"));
    }
  }]);

  return ClientImages;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClientImages);

/***/ })

})
//# sourceMappingURL=clients.js.3b5bd11a1b8b36dcc3e9.hot-update.js.map