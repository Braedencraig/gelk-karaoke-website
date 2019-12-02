webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/ClientCarousel.js":
/*!**************************************!*\
  !*** ./components/ClientCarousel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ClientCarousel, _React$Component);

  function ClientCarousel(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientCarousel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ClientCarousel).call(this, props));
    _this.state = {
      clients: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ClientCarousel, [{
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
      var settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
      };
      return __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.state.clients[0] ? this.state.clients[0].fields.clientImages.map(function (images, i) {
        return __jsx("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx("img", {
          src: images.fields.file.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }));
      }) : '')));
    }
  }]);

  return ClientCarousel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClientCarousel);

/***/ })

})
//# sourceMappingURL=about.js.baeb6734bf3b3ca3d7d7.hot-update.js.map