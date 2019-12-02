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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/Carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



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
        className: "jsx-3831558602" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoOne,
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.paragraphOne : ''), __jsx("p", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.paragraphTwo : ''), __jsx("p", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.name : ''))), __jsx("div", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoTwo,
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, this.state.testimonialTwo ? this.state.testimonialTwo.paragraphOne : ''), __jsx("p", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, this.state.testimonialTwo ? this.state.testimonialTwo.paragraphTwo : ''), __jsx("p", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, this.state.testimonialTwo ? this.state.testimonialTwo.name : ''))), __jsx("div", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoFour,
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, this.state.testimonialThree ? this.state.testimonialThree.paragraphOne : ''), __jsx("p", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, this.state.testimonialThree ? this.state.testimonialThree.paragraphTwo : ''), __jsx("p", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, this.state.testimonialThree ? this.state.testimonialThree.name : ''))), __jsx("div", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoThree,
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, this.state.testimonialFour ? this.state.testimonialFour.paragraphOne : ''), __jsx("p", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, this.state.testimonialFour ? this.state.testimonialFour.paragraphTwo : ''), __jsx("p", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-3831558602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, this.state.testimonialFour ? this.state.testimonialFour.name : '')))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3831558602",
        __self: this
      }, "p.jsx-3831558602{font-family:Oswald,cursive;font-size:30px;color:white;width:80%;margin:0 auto;margin-top:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwS29CLEFBR3lDLDJCQUNiLGVBQ0gsWUFDRixVQUNJLGNBQ0UsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5cbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xuaW1wb3J0ICcuLi9pbmRleC5jc3MnO1xuXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhYm91dDogW10sXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBzcGFjZSBJRC4gQSBzcGFjZSBpcyBsaWtlIGEgcHJvamVjdCBmb2xkZXIgaW4gQ29udGVudGZ1bCB0ZXJtc1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgLy8gVGhpcyBpcyB0aGUgYWNjZXNzIHRva2VuIGZvciB0aGlzIHNwYWNlLiBOb3JtYWxseSB5b3UgZ2V0IGJvdGggSUQgYW5kIHRoZSB0b2tlbiBpbiB0aGUgQ29udGVudGZ1bCB3ZWIgYXBwXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuICAgIC8vIGNvbnRlbnQgdHlwZSByZWxhdGVzIHRvIHRoZSBjb250ZW50IHR5cGUgbmFtZSBpbiBjb250ZW50ZnVsXG4gICAgLy8gZmlndXJlZCBpdCBvdXR0dHRcbiAgICAvLyAncG9zdCcgaW5zdGVhZCBvZiBzb25nTGlzdCwgcG9zdCBpcyBsaW5rZWQgdG8gYXV0aG9yIHNvIHdoZW4gcG9zdCByZXNwb25zZSB5b3UgZ2V0IGF1dGhvciBvYmplY3QgYXMgd2VsbFxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAnYWJvdXQnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFib3V0OiByZXNwb25zZS5pdGVtcyxcbiAgICAgICAgcGhvdG9PbmU6IHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy5waG90b3NbMF0uZmllbGRzLmZpbGUudXJsLFxuICAgICAgICBwaG90b1R3bzogcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnBob3Rvc1sxXS5maWVsZHMuZmlsZS51cmwsXG4gICAgICAgIHBob3RvVGhyZWU6IHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy5waG90b3NbMl0uZmllbGRzLmZpbGUudXJsLFxuICAgICAgICBwaG90b0ZvdXI6IHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy5waG90b3NbM10uZmllbGRzLmZpbGUudXJsLFxuICAgICAgICB0ZXN0aW1vbmlhbE9uZToge1xuICAgICAgICAgIHBhcmFncmFwaE9uZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbE9uZS5jb250ZW50WzBdLmNvbnRlbnRbMF0udmFsdWUsXG4gICAgICAgICAgcGFyYWdyYXBoVHdvOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsT25lLmNvbnRlbnRbMV0uY29udGVudFswXS52YWx1ZSxcbiAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsT25lLmNvbnRlbnRbMl0uY29udGVudFswXS52YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGVzdGltb25pYWxUd286IHtcbiAgICAgICAgICBwYXJhZ3JhcGhPbmU6XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxUd28uY29udGVudFswXS5jb250ZW50WzBdLnZhbHVlLFxuICAgICAgICAgIHBhcmFncmFwaFR3bzpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbFR3by5jb250ZW50WzFdLmNvbnRlbnRbMF0udmFsdWUsXG4gICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbFR3by5jb250ZW50WzJdLmNvbnRlbnRbMF0udmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIHRlc3RpbW9uaWFsVGhyZWU6IHtcbiAgICAgICAgICBwYXJhZ3JhcGhPbmU6XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxUaHJlZS5jb250ZW50WzBdLmNvbnRlbnRbMF1cbiAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICAgIHBhcmFncmFwaFR3bzpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbFRocmVlLmNvbnRlbnRbMV0uY29udGVudFswXVxuICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbFRocmVlLmNvbnRlbnRbMl0uY29udGVudFswXVxuICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIHRlc3RpbW9uaWFsRm91cjoge1xuICAgICAgICAgIHBhcmFncmFwaE9uZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbEZvdXIuY29udGVudFswXS5jb250ZW50WzBdXG4gICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgICBwYXJhZ3JhcGhUd286XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxGb3VyLmNvbnRlbnRbMV0uY29udGVudFswXVxuICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbEZvdXIuY29udGVudFsyXS5jb250ZW50WzBdXG4gICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgICBkb3RzOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnN0YXRlLnBob3RvT25lfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxPbmVcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudGVzdGltb25pYWxPbmUucGFyYWdyYXBoT25lXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbE9uZVxuICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbE9uZS5wYXJhZ3JhcGhUd29cbiAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRlc3RpbW9uaWFsT25lXG4gICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudGVzdGltb25pYWxPbmUubmFtZVxuICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5waG90b1R3b30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRlc3RpbW9uaWFsVHdvXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsVHdvLnBhcmFncmFwaE9uZVxuICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxUd29cbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudGVzdGltb25pYWxUd28ucGFyYWdyYXBoVHdvXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbFR3b1xuICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsVHdvLm5hbWVcbiAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUucGhvdG9Gb3VyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxUaHJlZVxuICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbFRocmVlLnBhcmFncmFwaE9uZVxuICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxUaHJlZVxuICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbFRocmVlLnBhcmFncmFwaFR3b1xuICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxUaHJlZVxuICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsVGhyZWUubmFtZVxuICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5waG90b1RocmVlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxGb3VyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsRm91ci5wYXJhZ3JhcGhPbmVcbiAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRlc3RpbW9uaWFsRm91clxuICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEZvdXIucGFyYWdyYXBoVHdvXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEZvdXJcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEZvdXIubmFtZVxuICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9zd2FsZCwgY3Vyc2l2ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/Carousel.js */"));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.9b3ba995c96a8a5ae6ed.hot-update.js.map