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
        space: 'sqmp3jmwaedr',
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      });
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
        className: "jsx-1731138092" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoOne,
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.paragraphOne : ''), __jsx("p", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.paragraphTwo : ''), __jsx("p", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.name : ''))), __jsx("div", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoTwo,
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, this.state.testimonialTwo ? this.state.testimonialTwo.paragraphOne : ''), __jsx("p", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, this.state.testimonialTwo ? this.state.testimonialTwo.paragraphTwo : ''), __jsx("p", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, this.state.testimonialTwo ? this.state.testimonialTwo.name : ''))), __jsx("div", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoFour,
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.state.testimonialThree ? this.state.testimonialThree.paragraphOne : ''), __jsx("p", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, this.state.testimonialThree ? this.state.testimonialThree.paragraphTwo : ''), __jsx("p", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, this.state.testimonialThree ? this.state.testimonialThree.name : ''))), __jsx("div", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoThree,
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, this.state.testimonialFour ? this.state.testimonialFour.paragraphOne : ''), __jsx("p", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, this.state.testimonialFour ? this.state.testimonialFour.paragraphTwo : ''), __jsx("p", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-1731138092",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, this.state.testimonialFour ? this.state.testimonialFour.name : '')))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1731138092",
        __self: this
      }, "p.jsx-1731138092{font-family:Oswald,cursive;font-size:30px;color:#f1f1f1;width:75%;margin:0 auto;margin-top:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxS29CLEFBR3lDLDJCQUNiLGVBQ0QsY0FDSixVQUNJLGNBQ0UsZ0JBQ0gsMEVBQ2YiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9jb21wb25lbnRzL0Nhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcblxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5pbXBvcnQgJy4uL2luZGV4LmNzcyc7XG5cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFib3V0OiBbXSxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG4gICAgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6ICdhYm91dCcgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWJvdXQ6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgICBwaG90b09uZTogcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnBob3Rvc1swXS5maWVsZHMuZmlsZS51cmwsXG4gICAgICAgIHBob3RvVHdvOiByZXNwb25zZS5pdGVtc1swXS5maWVsZHMucGhvdG9zWzFdLmZpZWxkcy5maWxlLnVybCxcbiAgICAgICAgcGhvdG9UaHJlZTogcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnBob3Rvc1syXS5maWVsZHMuZmlsZS51cmwsXG4gICAgICAgIHBob3RvRm91cjogcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnBob3Rvc1szXS5maWVsZHMuZmlsZS51cmwsXG4gICAgICAgIHRlc3RpbW9uaWFsT25lOiB7XG4gICAgICAgICAgcGFyYWdyYXBoT25lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsT25lLmNvbnRlbnRbMF0uY29udGVudFswXS52YWx1ZSxcbiAgICAgICAgICBwYXJhZ3JhcGhUd286XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxPbmUuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlLFxuICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxPbmUuY29udGVudFsyXS5jb250ZW50WzBdLnZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICB0ZXN0aW1vbmlhbFR3bzoge1xuICAgICAgICAgIHBhcmFncmFwaE9uZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbFR3by5jb250ZW50WzBdLmNvbnRlbnRbMF0udmFsdWUsXG4gICAgICAgICAgcGFyYWdyYXBoVHdvOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsVHdvLmNvbnRlbnRbMV0uY29udGVudFswXS52YWx1ZSxcbiAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsVHdvLmNvbnRlbnRbMl0uY29udGVudFswXS52YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGVzdGltb25pYWxUaHJlZToge1xuICAgICAgICAgIHBhcmFncmFwaE9uZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbFRocmVlLmNvbnRlbnRbMF0uY29udGVudFswXVxuICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgICAgcGFyYWdyYXBoVHdvOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsVGhyZWUuY29udGVudFsxXS5jb250ZW50WzBdXG4gICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsVGhyZWUuY29udGVudFsyXS5jb250ZW50WzBdXG4gICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGVzdGltb25pYWxGb3VyOiB7XG4gICAgICAgICAgcGFyYWdyYXBoT25lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsRm91ci5jb250ZW50WzBdLmNvbnRlbnRbMF1cbiAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICAgIHBhcmFncmFwaFR3bzpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbEZvdXIuY29udGVudFsxXS5jb250ZW50WzBdXG4gICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsRm91ci5jb250ZW50WzJdLmNvbnRlbnRbMF1cbiAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHZhciBzZXR0aW5ncyA9IHtcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUucGhvdG9PbmV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbE9uZVxuICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbE9uZS5wYXJhZ3JhcGhPbmVcbiAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRlc3RpbW9uaWFsT25lXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsT25lLnBhcmFncmFwaFR3b1xuICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxPbmVcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbE9uZS5uYW1lXG4gICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnN0YXRlLnBob3RvVHdvfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxUd29cbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudGVzdGltb25pYWxUd28ucGFyYWdyYXBoT25lXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbFR3b1xuICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbFR3by5wYXJhZ3JhcGhUd29cbiAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRlc3RpbW9uaWFsVHdvXG4gICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudGVzdGltb25pYWxUd28ubmFtZVxuICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5waG90b0ZvdXJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbFRocmVlXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsVGhyZWUucGFyYWdyYXBoT25lXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbFRocmVlXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsVGhyZWUucGFyYWdyYXBoVHdvXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbFRocmVlXG4gICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudGVzdGltb25pYWxUaHJlZS5uYW1lXG4gICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnN0YXRlLnBob3RvVGhyZWV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEZvdXJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudGVzdGltb25pYWxGb3VyLnBhcmFncmFwaE9uZVxuICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxGb3VyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsRm91ci5wYXJhZ3JhcGhUd29cbiAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRlc3RpbW9uaWFsRm91clxuICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsRm91ci5uYW1lXG4gICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3N3YWxkLCBjdXJzaXZlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/Carousel.js */"));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.8555434ca7677150933c.hot-update.js.map