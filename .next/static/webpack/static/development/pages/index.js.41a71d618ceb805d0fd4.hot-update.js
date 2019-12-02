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
          photoFour: response.items[0].fields.photos[3].fields.file.url // testimonialOne: {
          //   paragraphOne:
          //   paragraphTwo:
          //   name:
          // }

        });

        console.log(response.items[0].fields.testimonialOne.content[0].content[0].value);
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
          lineNumber: 50
        },
        __self: this
      }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoOne,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "The entire experience was exceptional from the booking itself to the actual performance."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "The song list is incredible, sooooo many options, everyone in attendance had a blast and it was the talk of the office for days afterward."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Amanda Power, Loopio"))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoTwo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "'Good Enough'; is a blatant misnomer - the band was excellent and all of my guests gushed compliments."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Best of all, the band was very encouraging and forgiving, which led to an incredible breadth of participation from people not expected to sing."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Malcolm White, celebrated 50th Birthday"))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoFour,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "We couldn't have asked for a better group of people."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "The band learned two songs of our choosing for the big day and the father of the bride even got to sit on drums for a song."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "All of our guests had a ton of fun and I cannot recommend Good Enough Live Karaoke enough!"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Sean O'Grady"))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoThree,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Thank you for you outstanding service and special thanks for an amazing, talented band."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "I hope to work with you sometime in the future again!"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Katerina Semenova, Premise LED")))));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.41a71d618ceb805d0fd4.hot-update.js.map