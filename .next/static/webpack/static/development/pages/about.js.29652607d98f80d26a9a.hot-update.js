webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/ClientCarousel.js":
/*!**************************************!*\
  !*** ./components/ClientCarousel.js ***!
  \**************************************/
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





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/ClientCarousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");




var ClientCarousel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ClientCarousel, _React$Component);

  function ClientCarousel(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientCarousel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ClientCarousel).call(this, props));
    _this.state = {
      clients: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientCarousel, [{
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
        className: "jsx-1959412132" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-1959412132",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Clients"), __jsx("div", {
        className: "jsx-1959412132",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.state.clients[0] ? this.state.clients[0].fields.clientImages.map(function (images, i) {
        return __jsx("div", {
          key: i,
          className: "jsx-1959412132" + " " + 'clientImages',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx("img", {
          src: images.fields.file.url,
          className: "jsx-1959412132",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }));
      }) : ''), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1959412132",
        __self: this
      }, ".clientImages.jsx-1959412132 img.jsx-1959412132{width:100px;height:50px;border:none;border-radius:5px;}.clientImages.jsx-1959412132{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DbGllbnRDYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ29CLEFBR3lCLEFBT0MsWUFORCxZQUNBLFlBQ00sa0JBQ3BCLG9CQUljLFlBQ08scUVBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DbGllbnRDYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5cbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xuaW1wb3J0ICcuLi9pbmRleC5jc3MnO1xuXG5jbGFzcyBDbGllbnRDYXJvdXNlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjbGllbnRzOiBbXSxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG5cbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ2NsaWVudHMnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNsaWVudHM6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8aDI+Q2xpZW50czwvaDI+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5jbGllbnRzWzBdXG4gICAgICAgICAgICA/IHRoaXMuc3RhdGUuY2xpZW50c1swXS5maWVsZHMuY2xpZW50SW1hZ2VzLm1hcCgoaW1hZ2VzLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudEltYWdlcycga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZXMuZmllbGRzLmZpbGUudXJsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jbGllbnRJbWFnZXMgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xpZW50SW1hZ2VzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGllbnRDYXJvdXNlbDtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/ClientCarousel.js */"));
    }
  }]);

  return ClientCarousel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClientCarousel);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
false

})
//# sourceMappingURL=about.js.29652607d98f80d26a9a.hot-update.js.map