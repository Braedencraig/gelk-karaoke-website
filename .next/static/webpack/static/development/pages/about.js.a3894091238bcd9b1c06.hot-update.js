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
        className: "jsx-3736193277" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-3736193277",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Clients"), __jsx("div", {
        className: "jsx-3736193277" + " " + 'flexContainer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.state.clients[0] ? this.state.clients[0].fields.clientImages.map(function (images, i) {
        return __jsx("div", {
          key: i,
          className: "jsx-3736193277" + " " + 'clientImages',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx("img", {
          src: images.fields.file.url,
          className: "jsx-3736193277",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }));
      }) : ''), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3736193277",
        __self: this
      }, "h2.jsx-3736193277{margin-bottom:50px;}.clientImages.jsx-3736193277 img.jsx-3736193277{width:100px;height:50px;border:none;border-radius:5px;}.clientImages.jsx-3736193277{margin:10px;}.flexContainer.jsx-3736193277{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DbGllbnRDYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ29CLEFBR2dDLEFBR1AsQUFPQSxBQUlDLFlBVkQsQUFPZCxPQVZBLEtBSWMsWUFDTSxrQkFDcEIsb0JBUWEsV0FDSSx5REFDakIiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9jb21wb25lbnRzL0NsaWVudENhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcblxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5pbXBvcnQgJy4uL2luZGV4LmNzcyc7XG5cbmNsYXNzIENsaWVudEltYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjbGllbnRzOiBbXSxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG5cbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ2NsaWVudHMnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNsaWVudHM6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8aDI+Q2xpZW50czwvaDI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhDb250YWluZXInPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmNsaWVudHNbMF1cbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5jbGllbnRzWzBdLmZpZWxkcy5jbGllbnRJbWFnZXMubWFwKChpbWFnZXMsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50SW1hZ2VzJyBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlcy5maWVsZHMuZmlsZS51cmx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6ICcnfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNsaWVudEltYWdlcyBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jbGllbnRJbWFnZXMge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mbGV4Q29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50SW1hZ2VzO1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/ClientCarousel.js */"));
    }
  }]);

  return ClientImages;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClientImages);

/***/ })

})
//# sourceMappingURL=about.js.a3894091238bcd9b1c06.hot-update.js.map