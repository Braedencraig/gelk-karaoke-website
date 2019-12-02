webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
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






var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");




var Carousel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Carousel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Carousel).call(this, props));
    _this.state = {
      about: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: 'sqmp3jmwaedr',
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      }); // content type relates to the content type name in contentful
      // figured it outttt
      // 'post' instead of songList, post is linked to author so when post response you get author object as well

      client.getEntries({
        content_type: 'about'
      }).then(function (response) {
        _this2.setState({
          about: response.items,
          photoOne: response.items[0].fields.photos[0].fields.file.url,
          photoTwo: response.items[0].fields.photos[1].fields.file.url,
          photoThree: response.items[0].fields.photos[2].fields.file.url,
          photoFour: response.items[0].fields.photos[3].fields.file.url,
          testimonialOne: {
            paragraphOne: response.items[0].fields.testimonialOne.content[0].content[0].value,
            paragraphTwo: response.items[0].fields.testimonialOne.content[1].content[0].value,
            name: response.items[0].fields.testimonialOne.content[2].content[0].value
          },
          testimonialTwo: {
            paragraphOne: response.items[0].fields.testimonialTwo.content[0].content[0].value,
            paragraphTwo: response.items[0].fields.testimonialTwo.content[1].content[0].value,
            name: response.items[0].fields.testimonialTwo.content[2].content[0].value
          },
          testimonialThree: {
            paragraphOne: response.items[0].fields.testimonialThree.content[0].content[0].value,
            paragraphTwo: response.items[0].fields.testimonialThree.content[1].content[0].value,
            name: response.items[0].fields.testimonialThree.content[2].content[0].value
          },
          testimonialFour: {
            paragraphOne: response.items[0].fields.testimonialFour.content[0].content[0].value,
            paragraphTwo: response.items[0].fields.testimonialFour.content[1].content[0].value,
            name: response.items[0].fields.testimonialFour.content[2].content[0].value
          }
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
          lineNumber: 80
        },
        __self: this
      }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoOne,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.paragraphOne : ''), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.paragraphTwo : ''), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.name : ''))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoTwo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, this.state.testimonialTwo ? this.state.testimonialTwo.paragraphOne : ''), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, this.state.testimonialTwo ? this.state.testimonialTwo.paragraphTwo : ''), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, this.state.testimonialTwo ? this.state.testimonialTwo.name : ''))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoFour,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, this.state.testimonialThree ? this.state.testimonialThree.paragraphOne : ''), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, this.state.testimonialThree ? this.state.testimonialThree.paragraphTwo : ''), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, this.state.testimonialThree ? this.state.testimonialThree.name : ''))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoThree,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.paragraphOne : ''), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.paragraphTwo : ''), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.name : '')))));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.17a0df6b9c9f79090fa0.hot-update.js.map