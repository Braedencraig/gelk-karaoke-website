webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
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





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/about.js";


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
      about: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
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
      var testimonials = this.state.about.map(function (about, i) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
          className: "jsx-765191321" + " " + 'testimonials',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "765191321",
          __self: this
        }, "p.jsx-765191321,h3.jsx-765191321{color:white;font-family:Oswald;font-size:20px;}p.jsx-765191321{width:80%;margin:3% auto;}h3.jsx-765191321{width:80%;margin:0 auto;text-align:center;}img.jsx-765191321{width:100%;height:auto;}.image.jsx-765191321{width:50%;margin:5% auto;-moz-box-shadow:inset 0 0 10px #000000;-webkit-box-shadow:inset 0 0 10px #000000;box-shadow:inset 0 0 10px #000000;border:15px solid #000;border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkVzQixBQUkyQixBQU1GLEFBS0EsQUFLQyxBQUtELFVBZEssQUFLRCxBQVVDLENBTEgsQ0FoQk8sV0FpQnJCLENBTG9CLENBTHBCLEFBZXlDLE1BckJ4QixXQVlqQixJQVhBLGtCQXFCNEMsMENBQ1Isa0NBQ1gsdUJBQ0osbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcbmltcG9ydCBDbGllbnRJbWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9DbGllbnRJbWFnZXMnO1xuaW1wb3J0IFRlc3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0SGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWJvdXQ6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBzcGFjZSBJRC4gQSBzcGFjZSBpcyBsaWtlIGEgcHJvamVjdCBmb2xkZXIgaW4gQ29udGVudGZ1bCB0ZXJtc1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgLy8gVGhpcyBpcyB0aGUgYWNjZXNzIHRva2VuIGZvciB0aGlzIHNwYWNlLiBOb3JtYWxseSB5b3UgZ2V0IGJvdGggSUQgYW5kIHRoZSB0b2tlbiBpbiB0aGUgQ29udGVudGZ1bCB3ZWIgYXBwXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuICAgIC8vIGNvbnRlbnQgdHlwZSByZWxhdGVzIHRvIHRoZSBjb250ZW50IHR5cGUgbmFtZSBpbiBjb250ZW50ZnVsXG4gICAgLy8gZmlndXJlZCBpdCBvdXR0dHRcbiAgICAvLyAncG9zdCcgaW5zdGVhZCBvZiBzb25nTGlzdCwgcG9zdCBpcyBsaW5rZWQgdG8gYXV0aG9yIHNvIHdoZW4gcG9zdCByZXNwb25zZSB5b3UgZ2V0IGF1dGhvciBvYmplY3QgYXMgd2VsbFxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAnYWJvdXQnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFib3V0OiByZXNwb25zZS5pdGVtcyxcbiAgICAgICAgcGhvdG9PbmU6IHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy5waG90b3NbMF0uZmllbGRzLmZpbGUudXJsLFxuICAgICAgICBwaG90b1R3bzogcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnBob3Rvc1sxXS5maWVsZHMuZmlsZS51cmwsXG4gICAgICAgIHBob3RvVGhyZWU6IHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy5waG90b3NbMl0uZmllbGRzLmZpbGUudXJsLFxuICAgICAgICBwaG90b0ZvdXI6IHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy5waG90b3NbM10uZmllbGRzLmZpbGUudXJsLFxuICAgICAgICB0ZXN0aW1vbmlhbE9uZToge1xuICAgICAgICAgIHBhcmFncmFwaE9uZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbE9uZS5jb250ZW50WzBdLmNvbnRlbnRbMF0udmFsdWUsXG4gICAgICAgICAgcGFyYWdyYXBoVHdvOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsT25lLmNvbnRlbnRbMV0uY29udGVudFswXS52YWx1ZSxcbiAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsT25lLmNvbnRlbnRbMl0uY29udGVudFswXS52YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGVzdGltb25pYWxUd286IHtcbiAgICAgICAgICBwYXJhZ3JhcGhPbmU6XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxUd28uY29udGVudFswXS5jb250ZW50WzBdLnZhbHVlLFxuICAgICAgICAgIHBhcmFncmFwaFR3bzpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbFR3by5jb250ZW50WzFdLmNvbnRlbnRbMF0udmFsdWUsXG4gICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbFR3by5jb250ZW50WzJdLmNvbnRlbnRbMF0udmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIHRlc3RpbW9uaWFsVGhyZWU6IHtcbiAgICAgICAgICBwYXJhZ3JhcGhPbmU6XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxUaHJlZS5jb250ZW50WzBdLmNvbnRlbnRbMF1cbiAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICAgIHBhcmFncmFwaFR3bzpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbFRocmVlLmNvbnRlbnRbMV0uY29udGVudFswXVxuICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbFRocmVlLmNvbnRlbnRbMl0uY29udGVudFswXVxuICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIHRlc3RpbW9uaWFsRm91cjoge1xuICAgICAgICAgIHBhcmFncmFwaE9uZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbEZvdXIuY29udGVudFswXS5jb250ZW50WzBdXG4gICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgICBwYXJhZ3JhcGhUd286XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxGb3VyLmNvbnRlbnRbMV0uY29udGVudFswXVxuICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbEZvdXIuY29udGVudFsyXS5jb250ZW50WzBdXG4gICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRlc3RpbW9uaWFscyA9IHRoaXMuc3RhdGUuYWJvdXQubWFwKChhYm91dCwgaSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGVzdGltb25pYWxzJz48L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBwLFxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPc3dhbGQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMyUgYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1JSBhdXRvO1xuICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxNXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NvbnRhY3ROZW9uJz5URVNUSU1PTklBTFM8L2gxPlxuICAgICAgICAgIHsvKiB7dGVzdGltb25pYWxzfSAqL31cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIGNvbnRlbnRmdWwgT1RIRVIgVEVTVElNT05JQUxTIElOIEEgQklHIFJJQ0ggVEVYVCBET0NVTUVOVCBTTyBJVCBDQU5cbiAgICAgICAgICAgIEJFIEVESVRFRFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjbGllbnRUaXRsZSc+Q0xJRU5UUzwvaDI+XG4gICAgICAgICAgPENsaWVudEltYWdlcyAvPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgICAgaDEsXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4IDAgMDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3Z3O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmVlO1xuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSBibHVlLCAwIDAgMC41ZW0gYmx1ZSxcbiAgICAgICAgICAgICAgICAwIDAgMC4xZW0gYmx1ZSwgMCAxMHB4IDNweCAjMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGllbnRUaXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/about.js */"));
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3021285386" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3021285386" + " " + 'contactNeon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "TESTIMONIALS"), __jsx("p", {
        className: "jsx-3021285386",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "contentful OTHER TESTIMONIALS IN A BIG RICH TEXT DOCUMENT SO IT CAN BE EDITED"), __jsx("h2", {
        className: "jsx-3021285386" + " " + 'clientTitle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "CLIENTS"), __jsx(_components_ClientImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3021285386",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');h1.jsx-3021285386,h2.jsx-3021285386{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:Quicksand;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em blue,0 0 0.5em blue, 0 0 0.1em blue,0 10px 3px #000;}.wrapper.jsx-3021285386{margin-top:20vh;}.clientTitle.jsx-3021285386{margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkhzQixBQUUwRixBQUd4RCxBQWNILEFBSUcsZ0JBSHJCLEdBZG9CLEFBa0JwQixrQkFqQnFCLDZGQUNMLGNBQ0EsY0FDUSxzQkFDTixnQkFDRSxrQkFDUCxXQUVzQiw4RkFDbkMiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IENsaWVudEltYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL0NsaWVudEltYWdlcyc7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhYm91dDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIHNwYWNlIElELiBBIHNwYWNlIGlzIGxpa2UgYSBwcm9qZWN0IGZvbGRlciBpbiBDb250ZW50ZnVsIHRlcm1zXG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICAvLyBUaGlzIGlzIHRoZSBhY2Nlc3MgdG9rZW4gZm9yIHRoaXMgc3BhY2UuIE5vcm1hbGx5IHlvdSBnZXQgYm90aCBJRCBhbmQgdGhlIHRva2VuIGluIHRoZSBDb250ZW50ZnVsIHdlYiBhcHBcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG4gICAgLy8gY29udGVudCB0eXBlIHJlbGF0ZXMgdG8gdGhlIGNvbnRlbnQgdHlwZSBuYW1lIGluIGNvbnRlbnRmdWxcbiAgICAvLyBmaWd1cmVkIGl0IG91dHR0dFxuICAgIC8vICdwb3N0JyBpbnN0ZWFkIG9mIHNvbmdMaXN0LCBwb3N0IGlzIGxpbmtlZCB0byBhdXRob3Igc28gd2hlbiBwb3N0IHJlc3BvbnNlIHlvdSBnZXQgYXV0aG9yIG9iamVjdCBhcyB3ZWxsXG4gICAgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6ICdhYm91dCcgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWJvdXQ6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgICBwaG90b09uZTogcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnBob3Rvc1swXS5maWVsZHMuZmlsZS51cmwsXG4gICAgICAgIHBob3RvVHdvOiByZXNwb25zZS5pdGVtc1swXS5maWVsZHMucGhvdG9zWzFdLmZpZWxkcy5maWxlLnVybCxcbiAgICAgICAgcGhvdG9UaHJlZTogcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnBob3Rvc1syXS5maWVsZHMuZmlsZS51cmwsXG4gICAgICAgIHBob3RvRm91cjogcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnBob3Rvc1szXS5maWVsZHMuZmlsZS51cmwsXG4gICAgICAgIHRlc3RpbW9uaWFsT25lOiB7XG4gICAgICAgICAgcGFyYWdyYXBoT25lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsT25lLmNvbnRlbnRbMF0uY29udGVudFswXS52YWx1ZSxcbiAgICAgICAgICBwYXJhZ3JhcGhUd286XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxPbmUuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlLFxuICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICByZXNwb25zZS5pdGVtc1swXS5maWVsZHMudGVzdGltb25pYWxPbmUuY29udGVudFsyXS5jb250ZW50WzBdLnZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICB0ZXN0aW1vbmlhbFR3bzoge1xuICAgICAgICAgIHBhcmFncmFwaE9uZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbFR3by5jb250ZW50WzBdLmNvbnRlbnRbMF0udmFsdWUsXG4gICAgICAgICAgcGFyYWdyYXBoVHdvOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsVHdvLmNvbnRlbnRbMV0uY29udGVudFswXS52YWx1ZSxcbiAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsVHdvLmNvbnRlbnRbMl0uY29udGVudFswXS52YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGVzdGltb25pYWxUaHJlZToge1xuICAgICAgICAgIHBhcmFncmFwaE9uZTpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbFRocmVlLmNvbnRlbnRbMF0uY29udGVudFswXVxuICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgICAgcGFyYWdyYXBoVHdvOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsVGhyZWUuY29udGVudFsxXS5jb250ZW50WzBdXG4gICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsVGhyZWUuY29udGVudFsyXS5jb250ZW50WzBdXG4gICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGVzdGltb25pYWxGb3VyOiB7XG4gICAgICAgICAgcGFyYWdyYXBoT25lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsRm91ci5jb250ZW50WzBdLmNvbnRlbnRbMF1cbiAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICAgIHBhcmFncmFwaFR3bzpcbiAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zWzBdLmZpZWxkcy50ZXN0aW1vbmlhbEZvdXIuY29udGVudFsxXS5jb250ZW50WzBdXG4gICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXNbMF0uZmllbGRzLnRlc3RpbW9uaWFsRm91ci5jb250ZW50WzJdLmNvbnRlbnRbMF1cbiAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGVzdGltb25pYWxzID0gdGhpcy5zdGF0ZS5hYm91dC5tYXAoKGFib3V0LCBpKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXN0aW1vbmlhbHMnPjwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIHAsXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9zd2FsZDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAzJSBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDUlIGF1dG87XG4gICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgICAgICAgICAgICBib3JkZXI6IDE1cHggc29saWQgIzAwMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY29udGFjdE5lb24nPlRFU1RJTU9OSUFMUzwvaDE+XG4gICAgICAgICAgey8qIHt0ZXN0aW1vbmlhbHN9ICovfVxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgY29udGVudGZ1bCBPVEhFUiBURVNUSU1PTklBTFMgSU4gQSBCSUcgUklDSCBURVhUIERPQ1VNRU5UIFNPIElUIENBTlxuICAgICAgICAgICAgQkUgRURJVEVEXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NsaWVudFRpdGxlJz5DTElFTlRTPC9oMj5cbiAgICAgICAgICA8Q2xpZW50SW1hZ2VzIC8+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgICBoMSxcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtIGJsdWUsIDAgMCAwLjVlbSBibHVlLFxuICAgICAgICAgICAgICAgIDAgMCAwLjFlbSBibHVlLCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNsaWVudFRpdGxlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/about.js */")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=about.js.646b8a4e31d17cba8666.hot-update.js.map