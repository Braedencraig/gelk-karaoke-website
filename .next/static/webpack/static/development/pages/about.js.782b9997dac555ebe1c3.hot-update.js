webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/ClientCarousel.js":
false,

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





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/ClientImages.js";

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
      }, "h2.jsx-3736193277{margin-bottom:50px;}.clientImages.jsx-3736193277 img.jsx-3736193277{width:100px;height:50px;border:none;border-radius:5px;}.clientImages.jsx-3736193277{margin:10px;}.flexContainer.jsx-3736193277{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DbGllbnRJbWFnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENvQixBQUdnQyxBQUdQLEFBT0EsQUFJQyxZQVZELEFBT2QsT0FWQSxLQUljLFlBQ00sa0JBQ3BCLG9CQVFhLFdBQ0kseURBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9DbGllbnRJbWFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCAnLi4vaW5kZXguY3NzJztcblxuY2xhc3MgQ2xpZW50SW1hZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsaWVudHM6IFtdLFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcblxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAnY2xpZW50cycgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2xpZW50czogcmVzcG9uc2UuaXRlbXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxoMj5DbGllbnRzPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleENvbnRhaW5lcic+XG4gICAgICAgICAge3RoaXMuc3RhdGUuY2xpZW50c1swXVxuICAgICAgICAgICAgPyB0aGlzLnN0YXRlLmNsaWVudHNbMF0uZmllbGRzLmNsaWVudEltYWdlcy5tYXAoKGltYWdlcywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnRJbWFnZXMnIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VzLmZpZWxkcy5maWxlLnVybH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogJyd9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xpZW50SW1hZ2VzIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNsaWVudEltYWdlcyB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZsZXhDb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGllbnRJbWFnZXM7XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/ClientImages.js */"));
    }
  }]);

  return ClientImages;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClientImages);

/***/ }),

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
    key: "render",
    value: function render() {
      var about = this.state.about.map(function (about, i) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "765191321",
          __self: this
        }, "p.jsx-765191321,h3.jsx-765191321{color:white;font-family:Oswald;font-size:20px;}p.jsx-765191321{width:80%;margin:3% auto;}h3.jsx-765191321{width:80%;margin:0 auto;text-align:center;}img.jsx-765191321{width:100%;height:auto;}.image.jsx-765191321{width:50%;margin:5% auto;-moz-box-shadow:inset 0 0 10px #000000;-webkit-box-shadow:inset 0 0 10px #000000;box-shadow:inset 0 0 10px #000000;border:15px solid #000;border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJzQixBQUkyQixBQU1GLEFBS0EsQUFLQyxBQUtELFVBZEssQUFLRCxBQVVDLENBTEgsQ0FoQk8sV0FpQnJCLENBTG9CLENBTHBCLEFBZXlDLE1BckJ4QixXQVlqQixJQVhBLGtCQXFCNEMsMENBQ1Isa0NBQ1gsdUJBQ0osbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcbmltcG9ydCBDbGllbnRJbWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9DbGllbnRJbWFnZXMnO1xuaW1wb3J0IFRlc3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0SGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWJvdXQ6IFtdLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWJvdXQgPSB0aGlzLnN0YXRlLmFib3V0Lm1hcCgoYWJvdXQsIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogT3N3YWxkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDMlIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMTVweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0TmVvbic+VEVTVElNT05JQUxTPC9oMT5cbiAgICAgICAgICB7Lyoge2Fib3V0fSAqL31cbiAgICAgICAgICA8Q2xpZW50SW1hZ2VzIC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBkeW5hbWljYWxseSBpbXBvcnQgbGlzdCBvZiBjbGllbnRzIHNvIHRoYXQgamVubiBjYW4gdXBkYXRlIGFzIHNoZVxuICAgICAgICAgICAgd2FudHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPmluY2x1ZGUgYSBjYXJvdXNlbCBvZiBsb2dvcyBhbmQgc3BlY2lmaWMgZW5kb3JzZW1lbnRzPC9wPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgLTVweCAwIDA7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDd2dztcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gYmx1ZSwgMCAwIDAuNWVtIGJsdWUsXG4gICAgICAgICAgICAgICAgMCAwIDAuMWVtIGJsdWUsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/about.js */"));
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1115144492" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1115144492" + " " + 'contactNeon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "TESTIMONIALS"), __jsx(_components_ClientImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-1115144492",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "dynamically import list of clients so that jenn can update as she wants."), __jsx("p", {
        className: "jsx-1115144492",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "include a carousel of logos and specific endorsements"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1115144492",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');h1.jsx-1115144492{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:Quicksand;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em blue,0 0 0.5em blue, 0 0 0.1em blue,0 10px 3px #000;}.wrapper.jsx-1115144492{margin-top:20vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVzQixBQUUwRixBQUV4RCxBQWNILGdCQUNsQixHQWRvQixrQkFDQyw2RkFDTCxjQUNBLGNBQ1Esc0JBQ04sZ0JBQ0Usa0JBQ1AsV0FFc0IsOEZBQ25DIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcbmltcG9ydCBDbGllbnRJbWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9DbGllbnRJbWFnZXMnO1xuaW1wb3J0IFRlc3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0SGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWJvdXQ6IFtdLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWJvdXQgPSB0aGlzLnN0YXRlLmFib3V0Lm1hcCgoYWJvdXQsIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogT3N3YWxkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDMlIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMTVweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0TmVvbic+VEVTVElNT05JQUxTPC9oMT5cbiAgICAgICAgICB7Lyoge2Fib3V0fSAqL31cbiAgICAgICAgICA8Q2xpZW50SW1hZ2VzIC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBkeW5hbWljYWxseSBpbXBvcnQgbGlzdCBvZiBjbGllbnRzIHNvIHRoYXQgamVubiBjYW4gdXBkYXRlIGFzIHNoZVxuICAgICAgICAgICAgd2FudHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPmluY2x1ZGUgYSBjYXJvdXNlbCBvZiBsb2dvcyBhbmQgc3BlY2lmaWMgZW5kb3JzZW1lbnRzPC9wPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgLTVweCAwIDA7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDd2dztcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gYmx1ZSwgMCAwIDAuNWVtIGJsdWUsXG4gICAgICAgICAgICAgICAgMCAwIDAuMWVtIGJsdWUsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/about.js */")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=about.js.782b9997dac555ebe1c3.hot-update.js.map