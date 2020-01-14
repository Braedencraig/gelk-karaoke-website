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
        autoplaySpeed: 10000
      };
      return __jsx("div", {
        className: "jsx-3370401571" + " " + 'container',
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
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoOne,
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3370401571" + " " + 'text',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.paragraphOne : ''), __jsx("p", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.paragraphTwo : ''), __jsx("p", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, this.state.testimonialOne ? this.state.testimonialOne.name : ''))), __jsx("div", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoTwo,
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3370401571" + " " + 'text',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, this.state.testimonialTwo ? this.state.testimonialTwo.paragraphOne : ''), __jsx("p", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, this.state.testimonialTwo ? this.state.testimonialTwo.paragraphTwo : ''), __jsx("p", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, this.state.testimonialTwo ? this.state.testimonialTwo.name : ''))), __jsx("div", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoFour,
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3370401571" + " " + 'text',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.state.testimonialThree ? this.state.testimonialThree.paragraphOne : ''), __jsx("p", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, this.state.testimonialThree ? this.state.testimonialThree.paragraphTwo : ''), __jsx("p", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, this.state.testimonialThree ? this.state.testimonialThree.name : ''))), __jsx("div", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx("img", {
        src: this.state.photoThree,
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3370401571" + " " + 'text',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, this.state.testimonialFour ? this.state.testimonialFour.paragraphOne : ''), __jsx("p", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, this.state.testimonialFour ? this.state.testimonialFour.paragraphTwo : ''), __jsx("p", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-3370401571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, this.state.testimonialFour ? this.state.testimonialFour.name : '')))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3370401571",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');p.jsx-3370401571{font-family:'Roboto',sans-serif;font-size:30px;color:#f1f1f1;width:80%;margin:0 auto;margin-top:50px;text-align:center;}.text.jsx-3370401571{padding:50px 0;}@media screen (max-width:1075px){p.jsx-3370401571{font-size:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxS29CLEFBRXNHLEFBR3hELEFBVWxCLEFBS0UsZUFKbkIsQUFLRSxpQkFmZSxlQUNELGNBQ0osVUFDSSxjQUNFLGdCQUNFLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCAnLi4vaW5kZXguY3NzJztcblxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWJvdXQ6IFtdLFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ2Fib3V0JyB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhYm91dDogcmVzcG9uc2UuaXRlbXMsXG4gICAgICAgIHBob3RvT25lOiByZXNwb25zZS5pdGVtc1swXS5maWVsZHMucGhvdG9zWzBdLmZpZWxkcy5maWxlLnVybCxcbiAgICAgICAgcGhvdG9Ud286IHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy5waG90b3NbMV0uZmllbGRzLmZpbGUudXJsLFxuICAgICAgICBwaG90b1RocmVlOiByZXNwb25zZS5pdGVtc1swXS5maWVsZHMucGhvdG9zWzJdLmZpZWxkcy5maWxlLnVybCxcbiAgICAgICAgcGhvdG9Gb3VyOiByZXNwb25zZS5pdGVtc1swXS5maWVsZHMucGhvdG9zWzNdLmZpZWxkcy5maWxlLnVybCxcbiAgICAgICAgdGVzdGltb25pYWxPbmU6IHtcbiAgICAgICAgICBwYXJhZ3JhcGhPbmU6XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxPbmUuY29udGVudFswXS5jb250ZW50WzBdLnZhbHVlLFxuICAgICAgICAgIHBhcmFncmFwaFR3bzpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbE9uZS5jb250ZW50WzFdLmNvbnRlbnRbMF0udmFsdWUsXG4gICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbE9uZS5jb250ZW50WzJdLmNvbnRlbnRbMF0udmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIHRlc3RpbW9uaWFsVHdvOiB7XG4gICAgICAgICAgcGFyYWdyYXBoT25lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsVHdvLmNvbnRlbnRbMF0uY29udGVudFswXS52YWx1ZSxcbiAgICAgICAgICBwYXJhZ3JhcGhUd286XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxUd28uY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlLFxuICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxUd28uY29udGVudFsyXS5jb250ZW50WzBdLnZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICB0ZXN0aW1vbmlhbFRocmVlOiB7XG4gICAgICAgICAgcGFyYWdyYXBoT25lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsVGhyZWUuY29udGVudFswXS5jb250ZW50WzBdXG4gICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgICBwYXJhZ3JhcGhUd286XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxUaHJlZS5jb250ZW50WzFdLmNvbnRlbnRbMF1cbiAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxUaHJlZS5jb250ZW50WzJdLmNvbnRlbnRbMF1cbiAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICB0ZXN0aW1vbmlhbEZvdXI6IHtcbiAgICAgICAgICBwYXJhZ3JhcGhPbmU6XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxGb3VyLmNvbnRlbnRbMF0uY29udGVudFswXVxuICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgICAgcGFyYWdyYXBoVHdvOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsRm91ci5jb250ZW50WzFdLmNvbnRlbnRbMF1cbiAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxGb3VyLmNvbnRlbnRbMl0uY29udGVudFswXVxuICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHNldHRpbmdzID0ge1xuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgYXV0b3BsYXlTcGVlZDogMTAwMDAsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUucGhvdG9PbmV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQnPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRlc3RpbW9uaWFsT25lXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsT25lLnBhcmFncmFwaE9uZVxuICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxPbmVcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudGVzdGltb25pYWxPbmUucGFyYWdyYXBoVHdvXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbE9uZVxuICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsT25lLm5hbWVcbiAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUucGhvdG9Ud299IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQnPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRlc3RpbW9uaWFsVHdvXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsVHdvLnBhcmFncmFwaE9uZVxuICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxUd29cbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudGVzdGltb25pYWxUd28ucGFyYWdyYXBoVHdvXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbFR3b1xuICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsVHdvLm5hbWVcbiAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUucGhvdG9Gb3VyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0Jz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbFRocmVlXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsVGhyZWUucGFyYWdyYXBoT25lXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbFRocmVlXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnRlc3RpbW9uaWFsVGhyZWUucGFyYWdyYXBoVHdvXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbFRocmVlXG4gICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudGVzdGltb25pYWxUaHJlZS5uYW1lXG4gICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnN0YXRlLnBob3RvVGhyZWV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQnPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRlc3RpbW9uaWFsRm91clxuICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEZvdXIucGFyYWdyYXBoT25lXG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0aW1vbmlhbEZvdXJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudGVzdGltb25pYWxGb3VyLnBhcmFncmFwaFR3b1xuICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdGltb25pYWxGb3VyXG4gICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudGVzdGltb25pYWxGb3VyLm5hbWVcbiAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b3xSb2JvdG8rQ29uZGVuc2VkJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gKG1heC13aWR0aDogMTA3NXB4KSB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/Carousel.js */"));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.b13bb6117bf2d306ac5b.hot-update.js.map