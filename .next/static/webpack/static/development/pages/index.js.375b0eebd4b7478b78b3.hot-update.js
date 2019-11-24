webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TestHeader.js":
/*!**********************************!*\
  !*** ./components/TestHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_NeonLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/NeonLogo */ "./components/NeonLogo.js");







var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var TestHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TestHeader, _Component);

  function TestHeader() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TestHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TestHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "documentStyle", document.documentElement.style);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "initalNavbarBackgroundColor", 'rgba(95, 108, 255, 1)');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scrolledNavbarBackgroundColor", 'rgba(95, 108, 255, .7)');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleScroll", function () {
      if (window.scrollY === 0) {
        _this.documentStyle.setProperty('--navbar-background-color', _this.initalNavbarBackgroundColor);
      } else {
        _this.documentStyle.setProperty('--navbar-background-color', _this.scrolledNavbarBackgroundColor);
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TestHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _jsx;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("nav", (_jsx = {
        className: "navBar"
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "className", "jsx-3548033797" + " " + (styles.Navbar || "")), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 34
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "__self", this), _jsx), __jsx("nav", {
        className: "jsx-3548033797" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        className: "jsx-3548033797" + " " + 'singMan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("g", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("svg", {
        fill: "#FFFFFF",
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        "enable-background": "new 0 0 100 100",
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M33.2001953,90.6738281c0.1665039-0.1660156,0.25-0.3671875,0.25-0.5996094  c0-0.2675781-0.0834961-0.4824219-0.25-0.6503906c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2001953,0-0.3833008,0.0839844-0.550293,0.25c-0.1665039,0.1679688-0.25,0.3828125-0.25,0.6503906  c0,0.2324219,0.0834961,0.4335938,0.25,0.5996094c0.1669922,0.1679688,0.3500977,0.25,0.550293,0.25  C32.8334961,90.9238281,33.0332031,90.8417969,33.2001953,90.6738281z M33.3500977,84.7246094  c-0.2333984-0.1679688-0.4501953-0.25-0.6499023-0.25c-0.1669922,0-0.3666992,0.0820313-0.6000977,0.25  c-0.1665039,0.2324219-0.25,0.4492188-0.25,0.6503906c0,0.1992188,0.0834961,0.3828125,0.25,0.5488281  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25c0.2666016,0,0.4833984-0.0820313,0.6499023-0.25  c0.1665039-0.1660156,0.25-0.3496094,0.25-0.5488281C33.6000977,85.1738281,33.5166016,84.9570313,33.3500977,84.7246094z   M33.7001953,80.6738281c0-0.2324219-0.0834961-0.4335938-0.25-0.5996094c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2666016,0-0.4833984,0.0839844-0.6499023,0.25c-0.1669922,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2011719,0.0830078,0.3828125,0.25,0.5507813c0.1665039,0.1660156,0.3833008,0.25,0.6499023,0.25  c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25C33.6166992,81.0566406,33.7001953,80.875,33.7001953,80.6738281z   M33.7998047,75.875c0-0.2011719-0.0830078-0.3847656-0.25-0.5507813c-0.1665039-0.1660156-0.3662109-0.25-0.5996094-0.25  c-0.2666016,0-0.4667969,0.0839844-0.6000977,0.25c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5507813  c0,0.265625,0.0834961,0.4824219,0.25,0.6484375c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25  c0.1665039,0,0.3662109-0.0820313,0.5996094-0.25C33.7167969,76.2910156,33.7998047,76.0742188,33.7998047,75.875z   M33.7001953,70.625c-0.1337891-0.1679688-0.3334961-0.25-0.6000977-0.25c-0.2333984,0-0.4165039,0.0820313-0.550293,0.25  c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5488281c0,0.2675781,0.0834961,0.484375,0.25,0.6503906  c0.1669922,0.1660156,0.3500977,0.25,0.550293,0.25c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25  c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906C33.9501953,70.9414063,33.8666992,70.7578125,33.7001953,70.625z   M59.2998047,48.0234375c-0.0664063,0.234375-0.0498047,0.4511719,0.050293,0.6503906L59.5,48.9746094  c0.2001953,0.2988281,0.4833984,0.4492188,0.8500977,0.4492188L60.7001953,49.375  c0.199707-0.1015625,0.3496094-0.2675781,0.449707-0.5c0.0668945-0.234375,0.050293-0.4511719-0.0498047-0.6503906  l-0.1499023-0.3007813c-0.2666016-0.5-0.6503906-0.6328125-1.1503906-0.4003906  C59.5332031,47.625,59.3666992,47.7910156,59.2998047,48.0234375z M55.2001953,38.4746094  c-0.5,0.2988281-0.6337891,0.6835938-0.4003906,1.1503906l3.3500977,6.5996094c0.1665039,0.3320313,0.4335938,0.5,0.800293,0.5  L59.2998047,46.625c0.5336914-0.2675781,0.6835938-0.6503906,0.4501953-1.1503906L56.3500977,38.875  C56.0834961,38.375,55.7001953,38.2402344,55.2001953,38.4746094z M69.7001953,22.2246094  c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094  c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25  c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906  c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25C69.25,22.4746094,69.4667969,22.390625,69.7001953,22.2246094z   M20.6499023,28.7734375l1.550293,1.75c0.5332031,0.4335938,1.2832031,0.8007813,2.25,1.1015625l-8.5,10.0488281  l-2.1000977-1.4492188L20.6499023,28.7734375z M22.75,24.0234375c0.6333008-0.7324219,1.5-1.1660156,2.6000977-1.2988281  c1.0664063-0.0996094,1.9663086,0.1503906,2.699707,0.75c0.800293,0.6328125,1.25,1.4667969,1.3500977,2.5  s-0.1665039,1.9335938-0.7998047,2.6992188c-0.6665039,0.8339844-1.5,1.3007813-2.5,1.4003906L25.2998047,30.125  c-0.7998047-0.1015625-1.4663086-0.4179688-2-0.9511719c-0.3330078-0.265625-0.6162109-0.6171875-0.8496094-1.0488281  l-0.050293-0.0507813c-0.1665039-0.3671875-0.2832031-0.8164063-0.3500977-1.3496094  C21.9501953,25.6582031,22.1835938,24.7578125,22.75,24.0234375z M44.1499023,11.375  c-0.4331055-0.3339844-0.8334961-0.2832031-1.199707,0.1484375c-0.3334961,0.4335938-0.2836914,0.8339844,0.1499023,1.2011719  l0.3500977,0.3496094c0.4663086,0.4003906,0.8496094,0.9160156,1.1499023,1.5507813  c0.1665039,0.3320313,0.4331055,0.5,0.7998047,0.5l0.3999023-0.1015625c0.2001953-0.0996094,0.3500977-0.265625,0.4501953-0.5  c0.0664063-0.2324219,0.0498047-0.4492188-0.0498047-0.6484375c-0.4667969-0.8007813-0.9667969-1.4667969-1.5-2  C44.5332031,11.6738281,44.3500977,11.5078125,44.1499023,11.375z M34.2001953,9.2246094  c1.4663086-0.9003906,3.1333008-1.3496094,5-1.3496094c2.6333008,0,4.8833008,0.9160156,6.75,2.75  C47.8164063,12.5566406,48.75,14.8066406,48.75,17.375c0,0.765625-0.0834961,1.5488281-0.25,2.3496094  c-0.4335938,1.6992188-1.2832031,3.1992188-2.5498047,4.5c-1.8666992,1.8320313-4.1166992,2.75-6.75,2.75  c-2.6669922,0-4.9169922-0.9335938-6.75-2.8007813c-1.8666992-1.8320313-2.800293-4.0996094-2.800293-6.7988281  c0-2.6015625,0.9335938-4.8515625,2.800293-6.75C33.0166016,10.0234375,33.6000977,9.5566406,34.2001953,9.2246094z   M41.0498047,9.875l-0.699707-0.1015625c-0.2333984,0-0.4335938,0.0839844-0.6000977,0.25  C39.5834961,10.1914063,39.5,10.390625,39.5,10.625c0,0.2324219,0.0834961,0.4492188,0.25,0.6484375  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25h0.25l0.25,0.0507813c0.3999023,0,0.6665039-0.2167969,0.7998047-0.6503906  c0.0668945-0.2324219,0.0336914-0.4492188-0.1000977-0.6503906C41.4501953,10.0742188,41.2832031,9.9414063,41.0498047,9.875z   M83.3500977,11.2246094L86,18.375L55.1499023,33.2734375C55.25,33.4414063,55.3500977,33.640625,55.4501953,33.875  l30.699707,58.1484375h-7.6000977l-19.449707-32l-22.050293,12.4511719  c-0.2666016,0.1660156-0.3999023,0.3828125-0.3999023,0.6503906l-1.25,19l-5.75-0.1015625l0.800293-23.1992188l18.449707-11.25  c0.3999023-0.2324219,0.5166016-0.5839844,0.3500977-1.0507813l-6.1000977-16.0488281c-0.199707-0.4003906-0.3666992-0.734375-0.5-1  L32.75,49.375L21.0498047,38.1738281l3.3500977-4.1992188L31.25,40.875c0.2001953,0.1992188,0.4165039,0.2832031,0.6499023,0.25  c0.2333984,0,0.4501953-0.1015625,0.6499023-0.3007813l9.1000977-11L83.3500977,11.2246094z M74.2001953,19.5742188  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25  c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094  c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25  c0.2001953,0,0.4169922-0.0839844,0.6503906-0.25C74.1166992,19.9902344,74.2001953,19.7734375,74.2001953,19.5742188z   M77.6000977,18.4746094c0.1665039,0,0.3666992-0.0839844,0.6000977-0.25c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.2011719-0.4335938-0.3007813-0.6000977-0.3007813  c-0.2333984,0-0.4335938,0.0996094-0.6000977,0.3007813c-0.1665039,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2675781,0.0834961,0.4824219,0.25,0.6503906C77.1665039,18.390625,77.3666992,18.4746094,77.6000977,18.4746094z   M82.3500977,16.1738281c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906c0-0.2324219-0.0834961-0.4316406-0.25-0.5996094  c-0.1665039-0.1660156-0.3666992-0.25-0.6000977-0.25c-0.2001953,0-0.3833008,0.0839844-0.5498047,0.25  c-0.1669922,0.1679688-0.25,0.3671875-0.25,0.5996094c0,0.2675781,0.0830078,0.484375,0.25,0.6503906  c0.1665039,0.1679688,0.3496094,0.25,0.5498047,0.25C81.9833984,16.4238281,82.1835938,16.3417969,82.3500977,16.1738281z",
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })))), __jsx("input", {
        type: "checkbox",
        id: "menu-toggle",
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "menu-toggle",
        className: "jsx-3548033797" + " " + 'label-toggle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx("ul", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("li", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Home"))), __jsx("li", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "About"))), __jsx("li", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/shows",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Shows"))), __jsx("li", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Song List"))), __jsx("li", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Media"))), __jsx("li", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3548033797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Contact")))))), __jsx("header", {
        className: "jsx-3548033797" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3548033797",
        __self: this
      }, "@import url(//fonts.googleapis.com/css?family=Vibur);@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');.singMan.jsx-3548033797{-webkit-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);}h1.jsx-3548033797{font-size:3em;padding:3em 0 1em 0;}.navBar.jsx-3548033797{position:fixed;right:0;left:0;}.logo.jsx-3548033797{background-color:white;border-radius:50px;display:inline-block;height:45px;margin:1em 0;width:45px;}.logo.jsx-3548033797:hover{background-color:#fee;box-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444,0 0 0.5em #ff4444, 0 0 0.1em #ff4444,0 10px 3px #000;}.wrapper.jsx-3548033797{margin:0 auto;max-width:960px;padding:0 2%;}nav.jsx-3548033797 ul.jsx-3548033797{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;list-style-type:none;width:50%;}nav.jsx-3548033797 ul.jsx-3548033797 a.jsx-3548033797{font-family:'Oswald';color:white;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;}nav.jsx-3548033797 ul.jsx-3548033797 a.jsx-3548033797:hover{color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444,0 0 0.5em #ff4444, 0 0 0.1em #ff4444,0 10px 3px #000;}li.jsx-3548033797{display:inline-block;}#menu-toggle.jsx-3548033797{display:none;}.label-toggle.jsx-3548033797{display:none;}.wrapper.jsx-3548033797{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:768px){nav.jsx-3548033797 ul.jsx-3548033797 a.jsx-3548033797{color:#53354a;}ul.jsx-3548033797{background-color:#e84545;display:block;height:0;list-style-type:none;opacity:0;text-align:center;-webkit-transition:all 1s ease;transition:all 1s ease;width:100%;visibility:hidden;}li.jsx-3548033797{border-bottom:2px solid #53354a;color:#53354a;display:block;font-size:1.5em;padding:2em 0;}#menu-toggle.jsx-3548033797:checked~ul.jsx-3548033797{opacity:1;height:100vh;visibility:visible;}.label-toggle.jsx-3548033797{background:linear-gradient( to bottom, #e84545 0%, #e84545 20%, transparent 20%, transparent 40%, #e84545 40%, #e84545 60%, transparent 60%, transparent 80%, #e84545 80%, #e84545 100% );cursor:pointer;display:block;float:right;height:35px;margin-top:1em;width:35px;}.wrapper.jsx-3548033797{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9UZXN0SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Hb0IsQUFHeUQsQUFDc0IsQUFHNUMsQUFJWixBQUtDLEFBTVEsQUFTRCxBQU1SLEFBTUQsQUFPUSxBQU9YLEFBTVcsQUFJUixBQUlBLEFBSU0sQUFRRCxBQUlXLEFBWU8sQUFRdEIsQUFrQlQsQUFXYSxVQTVCRCxDQWpEbUIsRUFTdEMsQUFJQSxDQTVEc0IsQUEwQkosQUE4Q2QsQUFxREEsQ0F4SE0sTUFrQ0ksQUFhZCxDQS9Cc0MsQ0FmN0IsQUFLWSxBQXNGSSxFQXJCTCxLQXJFcEIsQUFvQmUsRUE2REssQ0FoREcsQ0F2Q3ZCLEtBNEVlLEdBakVRLEFBc0ZuQixDQXRFSixHQTZEb0IsRUFYTyxZQVlMLEdBN0VSLE1Ba0VFLEtBL0NnQixDQWxCakIsQ0E2RUssR0FYSSxJQXZDRyxLQTFCZCxFQW5CYixBQWdHSSxHQTVCVyxJQWlCYyxFQWpFN0IsZUFnQ0EsVUExQkEsaUJBb0JBLFVBd0NpQixXQUNPLEtBbEJRLGFBbUI1QixNQStCaUIsR0FsRkUsWUFtRkgsU0FsRlIsS0FtRk0sS0FsRmxCLE9BbUZrQixZQUNHLGVBQ0osV0FDYixpQkF2REoiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9jb21wb25lbnRzL1Rlc3RIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBOZW9uTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL05lb25Mb2dvJztcblxuY2xhc3MgVGVzdEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGRvY3VtZW50U3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG4gIGluaXRhbE5hdmJhckJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDk1LCAxMDgsIDI1NSwgMSknO1xuICBzY3JvbGxlZE5hdmJhckJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDk1LCAxMDgsIDI1NSwgLjcpJztcblxuICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID09PSAwKSB7XG4gICAgICB0aGlzLmRvY3VtZW50U3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLW5hdmJhci1iYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICAgICAgdGhpcy5pbml0YWxOYXZiYXJCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvY3VtZW50U3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLW5hdmJhci1iYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICAgICAgdGhpcy5zY3JvbGxlZE5hdmJhckJhY2tncm91bmRDb2xvcixcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdkJhcicgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyfT5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgd2lkdGg9JzYwJ1xuICAgICAgICAgICAgICBoZWlnaHQ9JzYwJ1xuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgNjAgNjAnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ01hbidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTAgNTApIHNjYWxlKC0wLjY5IDAuNjkpIHJvdGF0ZSgwKSB0cmFuc2xhdGUoLTUwIC01MCknXG4gICAgICAgICAgICAgIC8vIHN0eWxlPSdmaWxsOiNGRkZGRkYnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICBmaWxsPScjRkZGRkZGJ1xuICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICAgICAgdmVyc2lvbj0nMS4xJ1xuICAgICAgICAgICAgICAgICAgeD0nMHB4J1xuICAgICAgICAgICAgICAgICAgeT0nMHB4J1xuICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDEwMCAxMDAnXG4gICAgICAgICAgICAgICAgICBlbmFibGUtYmFja2dyb3VuZD0nbmV3IDAgMCAxMDAgMTAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICBkPSdNMzMuMjAwMTk1Myw5MC42NzM4MjgxYzAuMTY2NTAzOS0wLjE2NjAxNTYsMC4yNS0wLjM2NzE4NzUsMC4yNS0wLjU5OTYwOTQgIGMwLTAuMjY3NTc4MS0wLjA4MzQ5NjEtMC40ODI0MjE5LTAuMjUtMC42NTAzOTA2Yy0wLjE2Njk5MjItMC4xNjYwMTU2LTAuMzY2Njk5Mi0wLjI1LTAuNjAwMDk3Ny0wLjI1ICBjLTAuMjAwMTk1MywwLTAuMzgzMzAwOCwwLjA4Mzk4NDQtMC41NTAyOTMsMC4yNWMtMC4xNjY1MDM5LDAuMTY3OTY4OC0wLjI1LDAuMzgyODEyNS0wLjI1LDAuNjUwMzkwNiAgYzAsMC4yMzI0MjE5LDAuMDgzNDk2MSwwLjQzMzU5MzgsMC4yNSwwLjU5OTYwOTRjMC4xNjY5OTIyLDAuMTY3OTY4OCwwLjM1MDA5NzcsMC4yNSwwLjU1MDI5MywwLjI1ICBDMzIuODMzNDk2MSw5MC45MjM4MjgxLDMzLjAzMzIwMzEsOTAuODQxNzk2OSwzMy4yMDAxOTUzLDkwLjY3MzgyODF6IE0zMy4zNTAwOTc3LDg0LjcyNDYwOTQgIGMtMC4yMzMzOTg0LTAuMTY3OTY4OC0wLjQ1MDE5NTMtMC4yNS0wLjY0OTkwMjMtMC4yNWMtMC4xNjY5OTIyLDAtMC4zNjY2OTkyLDAuMDgyMDMxMy0wLjYwMDA5NzcsMC4yNSAgYy0wLjE2NjUwMzksMC4yMzI0MjE5LTAuMjUsMC40NDkyMTg4LTAuMjUsMC42NTAzOTA2YzAsMC4xOTkyMTg4LDAuMDgzNDk2MSwwLjM4MjgxMjUsMC4yNSwwLjU0ODgyODEgIGMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzY2Njk5MiwwLjI1LDAuNjAwMDk3NywwLjI1YzAuMjY2NjAxNiwwLDAuNDgzMzk4NC0wLjA4MjAzMTMsMC42NDk5MDIzLTAuMjUgIGMwLjE2NjUwMzktMC4xNjYwMTU2LDAuMjUtMC4zNDk2MDk0LDAuMjUtMC41NDg4MjgxQzMzLjYwMDA5NzcsODUuMTczODI4MSwzMy41MTY2MDE2LDg0Ljk1NzAzMTMsMzMuMzUwMDk3Nyw4NC43MjQ2MDk0eiAgIE0zMy43MDAxOTUzLDgwLjY3MzgyODFjMC0wLjIzMjQyMTktMC4wODM0OTYxLTAuNDMzNTkzOC0wLjI1LTAuNTk5NjA5NGMtMC4xNjY5OTIyLTAuMTY2MDE1Ni0wLjM2NjY5OTItMC4yNS0wLjYwMDA5NzctMC4yNSAgYy0wLjI2NjYwMTYsMC0wLjQ4MzM5ODQsMC4wODM5ODQ0LTAuNjQ5OTAyMywwLjI1Yy0wLjE2Njk5MjIsMC4xNjYwMTU2LTAuMjUsMC4zNjcxODc1LTAuMjUsMC41OTk2MDk0ICBjMCwwLjIwMTE3MTksMC4wODMwMDc4LDAuMzgyODEyNSwwLjI1LDAuNTUwNzgxM2MwLjE2NjUwMzksMC4xNjYwMTU2LDAuMzgzMzAwOCwwLjI1LDAuNjQ5OTAyMywwLjI1ICBjMC4yMzMzOTg0LDAsMC40MzMxMDU1LTAuMDgzOTg0NCwwLjYwMDA5NzctMC4yNUMzMy42MTY2OTkyLDgxLjA1NjY0MDYsMzMuNzAwMTk1Myw4MC44NzUsMzMuNzAwMTk1Myw4MC42NzM4MjgxeiAgIE0zMy43OTk4MDQ3LDc1Ljg3NWMwLTAuMjAxMTcxOS0wLjA4MzAwNzgtMC4zODQ3NjU2LTAuMjUtMC41NTA3ODEzYy0wLjE2NjUwMzktMC4xNjYwMTU2LTAuMzY2MjEwOS0wLjI1LTAuNTk5NjA5NC0wLjI1ICBjLTAuMjY2NjAxNiwwLTAuNDY2Nzk2OSwwLjA4Mzk4NDQtMC42MDAwOTc3LDAuMjVjLTAuMTY2NTAzOSwwLjEzMjgxMjUtMC4yNSwwLjMxNjQwNjMtMC4yNSwwLjU1MDc4MTMgIGMwLDAuMjY1NjI1LDAuMDgzNDk2MSwwLjQ4MjQyMTksMC4yNSwwLjY0ODQzNzVjMC4xNjY1MDM5LDAuMTY3OTY4OCwwLjM2NjY5OTIsMC4yNSwwLjYwMDA5NzcsMC4yNSAgYzAuMTY2NTAzOSwwLDAuMzY2MjEwOS0wLjA4MjAzMTMsMC41OTk2MDk0LTAuMjVDMzMuNzE2Nzk2OSw3Ni4yOTEwMTU2LDMzLjc5OTgwNDcsNzYuMDc0MjE4OCwzMy43OTk4MDQ3LDc1Ljg3NXogICBNMzMuNzAwMTk1Myw3MC42MjVjLTAuMTMzNzg5MS0wLjE2Nzk2ODgtMC4zMzM0OTYxLTAuMjUtMC42MDAwOTc3LTAuMjVjLTAuMjMzMzk4NCwwLTAuNDE2NTAzOSwwLjA4MjAzMTMtMC41NTAyOTMsMC4yNSAgYy0wLjE2NjUwMzksMC4xMzI4MTI1LTAuMjUsMC4zMTY0MDYzLTAuMjUsMC41NDg4MjgxYzAsMC4yNjc1NzgxLDAuMDgzNDk2MSwwLjQ4NDM3NSwwLjI1LDAuNjUwMzkwNiAgYzAuMTY2OTkyMiwwLjE2NjAxNTYsMC4zNTAwOTc3LDAuMjUsMC41NTAyOTMsMC4yNWMwLjIzMzM5ODQsMCwwLjQzMzEwNTUtMC4wODM5ODQ0LDAuNjAwMDk3Ny0wLjI1ICBjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzgyODEyNSwwLjI1LTAuNjUwMzkwNkMzMy45NTAxOTUzLDcwLjk0MTQwNjMsMzMuODY2Njk5Miw3MC43NTc4MTI1LDMzLjcwMDE5NTMsNzAuNjI1eiAgIE01OS4yOTk4MDQ3LDQ4LjAyMzQzNzVjLTAuMDY2NDA2MywwLjIzNDM3NS0wLjA0OTgwNDcsMC40NTExNzE5LDAuMDUwMjkzLDAuNjUwMzkwNkw1OS41LDQ4Ljk3NDYwOTQgIGMwLjIwMDE5NTMsMC4yOTg4MjgxLDAuNDgzMzk4NCwwLjQ0OTIxODgsMC44NTAwOTc3LDAuNDQ5MjE4OEw2MC43MDAxOTUzLDQ5LjM3NSAgYzAuMTk5NzA3LTAuMTAxNTYyNSwwLjM0OTYwOTQtMC4yNjc1NzgxLDAuNDQ5NzA3LTAuNWMwLjA2Njg5NDUtMC4yMzQzNzUsMC4wNTAyOTMtMC40NTExNzE5LTAuMDQ5ODA0Ny0wLjY1MDM5MDYgIGwtMC4xNDk5MDIzLTAuMzAwNzgxM2MtMC4yNjY2MDE2LTAuNS0wLjY1MDM5MDYtMC42MzI4MTI1LTEuMTUwMzkwNi0wLjQwMDM5MDYgIEM1OS41MzMyMDMxLDQ3LjYyNSw1OS4zNjY2OTkyLDQ3Ljc5MTAxNTYsNTkuMjk5ODA0Nyw0OC4wMjM0Mzc1eiBNNTUuMjAwMTk1MywzOC40NzQ2MDk0ICBjLTAuNSwwLjI5ODgyODEtMC42MzM3ODkxLDAuNjgzNTkzOC0wLjQwMDM5MDYsMS4xNTAzOTA2bDMuMzUwMDk3Nyw2LjU5OTYwOTRjMC4xNjY1MDM5LDAuMzMyMDMxMywwLjQzMzU5MzgsMC41LDAuODAwMjkzLDAuNSAgTDU5LjI5OTgwNDcsNDYuNjI1YzAuNTMzNjkxNC0wLjI2NzU3ODEsMC42ODM1OTM4LTAuNjUwMzkwNiwwLjQ1MDE5NTMtMS4xNTAzOTA2TDU2LjM1MDA5NzcsMzguODc1ICBDNTYuMDgzNDk2MSwzOC4zNzUsNTUuNzAwMTk1MywzOC4yNDAyMzQ0LDU1LjIwMDE5NTMsMzguNDc0NjA5NHogTTY5LjcwMDE5NTMsMjIuMjI0NjA5NCAgYzAuMTY2NTAzOS0wLjIzNDM3NSwwLjI1LTAuNDUxMTcxOSwwLjI1LTAuNjUwMzkwNmMwLTAuMTY2MDE1Ni0wLjA4MzQ5NjEtMC4zNjcxODc1LTAuMjUtMC41OTk2MDk0ICBjLTAuMjMzMzk4NC0wLjE2Nzk2ODgtMC40NTAxOTUzLTAuMjUtMC42NTAzOTA2LTAuMjVjLTAuMTY2NTAzOSwwLTAuMzY2MjEwOSwwLjA4MjAzMTMtMC41OTk2MDk0LDAuMjUgIGMtMC4xNjY5OTIyLDAuMjMyNDIxOS0wLjI1LDAuNDMzNTkzOC0wLjI1LDAuNTk5NjA5NGMwLDAuMTk5MjE4OCwwLjA4MzAwNzgsMC40MTYwMTU2LDAuMjUsMC42NTAzOTA2ICBjMC4yMzMzOTg0LDAuMTY2MDE1NiwwLjQzMzEwNTUsMC4yNSwwLjU5OTYwOTQsMC4yNUM2OS4yNSwyMi40NzQ2MDk0LDY5LjQ2Njc5NjksMjIuMzkwNjI1LDY5LjcwMDE5NTMsMjIuMjI0NjA5NHogICBNMjAuNjQ5OTAyMywyOC43NzM0Mzc1bDEuNTUwMjkzLDEuNzVjMC41MzMyMDMxLDAuNDMzNTkzOCwxLjI4MzIwMzEsMC44MDA3ODEzLDIuMjUsMS4xMDE1NjI1bC04LjUsMTAuMDQ4ODI4MSAgbC0yLjEwMDA5NzctMS40NDkyMTg4TDIwLjY0OTkwMjMsMjguNzczNDM3NXogTTIyLjc1LDI0LjAyMzQzNzVjMC42MzMzMDA4LTAuNzMyNDIxOSwxLjUtMS4xNjYwMTU2LDIuNjAwMDk3Ny0xLjI5ODgyODEgIGMxLjA2NjQwNjMtMC4wOTk2MDk0LDEuOTY2MzA4NiwwLjE1MDM5MDYsMi42OTk3MDcsMC43NWMwLjgwMDI5MywwLjYzMjgxMjUsMS4yNSwxLjQ2Njc5NjksMS4zNTAwOTc3LDIuNSAgcy0wLjE2NjUwMzksMS45MzM1OTM4LTAuNzk5ODA0NywyLjY5OTIxODhjLTAuNjY2NTAzOSwwLjgzMzk4NDQtMS41LDEuMzAwNzgxMy0yLjUsMS40MDAzOTA2TDI1LjI5OTgwNDcsMzAuMTI1ICBjLTAuNzk5ODA0Ny0wLjEwMTU2MjUtMS40NjYzMDg2LTAuNDE3OTY4OC0yLTAuOTUxMTcxOWMtMC4zMzMwMDc4LTAuMjY1NjI1LTAuNjE2MjEwOS0wLjYxNzE4NzUtMC44NDk2MDk0LTEuMDQ4ODI4MSAgbC0wLjA1MDI5My0wLjA1MDc4MTNjLTAuMTY2NTAzOS0wLjM2NzE4NzUtMC4yODMyMDMxLTAuODE2NDA2My0wLjM1MDA5NzctMS4zNDk2MDk0ICBDMjEuOTUwMTk1MywyNS42NTgyMDMxLDIyLjE4MzU5MzgsMjQuNzU3ODEyNSwyMi43NSwyNC4wMjM0Mzc1eiBNNDQuMTQ5OTAyMywxMS4zNzUgIGMtMC40MzMxMDU1LTAuMzMzOTg0NC0wLjgzMzQ5NjEtMC4yODMyMDMxLTEuMTk5NzA3LDAuMTQ4NDM3NWMtMC4zMzM0OTYxLDAuNDMzNTkzOC0wLjI4MzY5MTQsMC44MzM5ODQ0LDAuMTQ5OTAyMywxLjIwMTE3MTkgIGwwLjM1MDA5NzcsMC4zNDk2MDk0YzAuNDY2MzA4NiwwLjQwMDM5MDYsMC44NDk2MDk0LDAuOTE2MDE1NiwxLjE0OTkwMjMsMS41NTA3ODEzICBjMC4xNjY1MDM5LDAuMzMyMDMxMywwLjQzMzEwNTUsMC41LDAuNzk5ODA0NywwLjVsMC4zOTk5MDIzLTAuMTAxNTYyNWMwLjIwMDE5NTMtMC4wOTk2MDk0LDAuMzUwMDk3Ny0wLjI2NTYyNSwwLjQ1MDE5NTMtMC41ICBjMC4wNjY0MDYzLTAuMjMyNDIxOSwwLjA0OTgwNDctMC40NDkyMTg4LTAuMDQ5ODA0Ny0wLjY0ODQzNzVjLTAuNDY2Nzk2OS0wLjgwMDc4MTMtMC45NjY3OTY5LTEuNDY2Nzk2OS0xLjUtMiAgQzQ0LjUzMzIwMzEsMTEuNjczODI4MSw0NC4zNTAwOTc3LDExLjUwNzgxMjUsNDQuMTQ5OTAyMywxMS4zNzV6IE0zNC4yMDAxOTUzLDkuMjI0NjA5NCAgYzEuNDY2MzA4Ni0wLjkwMDM5MDYsMy4xMzMzMDA4LTEuMzQ5NjA5NCw1LTEuMzQ5NjA5NGMyLjYzMzMwMDgsMCw0Ljg4MzMwMDgsMC45MTYwMTU2LDYuNzUsMi43NSAgQzQ3LjgxNjQwNjMsMTIuNTU2NjQwNiw0OC43NSwxNC44MDY2NDA2LDQ4Ljc1LDE3LjM3NWMwLDAuNzY1NjI1LTAuMDgzNDk2MSwxLjU0ODgyODEtMC4yNSwyLjM0OTYwOTQgIGMtMC40MzM1OTM4LDEuNjk5MjE4OC0xLjI4MzIwMzEsMy4xOTkyMTg4LTIuNTQ5ODA0Nyw0LjVjLTEuODY2Njk5MiwxLjgzMjAzMTMtNC4xMTY2OTkyLDIuNzUtNi43NSwyLjc1ICBjLTIuNjY2OTkyMiwwLTQuOTE2OTkyMi0wLjkzMzU5MzgtNi43NS0yLjgwMDc4MTNjLTEuODY2Njk5Mi0xLjgzMjAzMTMtMi44MDAyOTMtNC4wOTk2MDk0LTIuODAwMjkzLTYuNzk4ODI4MSAgYzAtMi42MDE1NjI1LDAuOTMzNTkzOC00Ljg1MTU2MjUsMi44MDAyOTMtNi43NUMzMy4wMTY2MDE2LDEwLjAyMzQzNzUsMzMuNjAwMDk3Nyw5LjU1NjY0MDYsMzQuMjAwMTk1Myw5LjIyNDYwOTR6ICAgTTQxLjA0OTgwNDcsOS44NzVsLTAuNjk5NzA3LTAuMTAxNTYyNWMtMC4yMzMzOTg0LDAtMC40MzM1OTM4LDAuMDgzOTg0NC0wLjYwMDA5NzcsMC4yNSAgQzM5LjU4MzQ5NjEsMTAuMTkxNDA2MywzOS41LDEwLjM5MDYyNSwzOS41LDEwLjYyNWMwLDAuMjMyNDIxOSwwLjA4MzQ5NjEsMC40NDkyMTg4LDAuMjUsMC42NDg0Mzc1ICBjMC4xNjY1MDM5LDAuMTY3OTY4OCwwLjM2NjY5OTIsMC4yNSwwLjYwMDA5NzcsMC4yNWgwLjI1bDAuMjUsMC4wNTA3ODEzYzAuMzk5OTAyMywwLDAuNjY2NTAzOS0wLjIxNjc5NjksMC43OTk4MDQ3LTAuNjUwMzkwNiAgYzAuMDY2ODk0NS0wLjIzMjQyMTksMC4wMzM2OTE0LTAuNDQ5MjE4OC0wLjEwMDA5NzctMC42NTAzOTA2QzQxLjQ1MDE5NTMsMTAuMDc0MjE4OCw0MS4yODMyMDMxLDkuOTQxNDA2Myw0MS4wNDk4MDQ3LDkuODc1eiAgIE04My4zNTAwOTc3LDExLjIyNDYwOTRMODYsMTguMzc1TDU1LjE0OTkwMjMsMzMuMjczNDM3NUM1NS4yNSwzMy40NDE0MDYzLDU1LjM1MDA5NzcsMzMuNjQwNjI1LDU1LjQ1MDE5NTMsMzMuODc1ICBsMzAuNjk5NzA3LDU4LjE0ODQzNzVoLTcuNjAwMDk3N2wtMTkuNDQ5NzA3LTMybC0yMi4wNTAyOTMsMTIuNDUxMTcxOSAgYy0wLjI2NjYwMTYsMC4xNjYwMTU2LTAuMzk5OTAyMywwLjM4MjgxMjUtMC4zOTk5MDIzLDAuNjUwMzkwNmwtMS4yNSwxOWwtNS43NS0wLjEwMTU2MjVsMC44MDAyOTMtMjMuMTk5MjE4OGwxOC40NDk3MDctMTEuMjUgIGMwLjM5OTkwMjMtMC4yMzI0MjE5LDAuNTE2NjAxNi0wLjU4Mzk4NDQsMC4zNTAwOTc3LTEuMDUwNzgxM2wtNi4xMDAwOTc3LTE2LjA0ODgyODFjLTAuMTk5NzA3LTAuNDAwMzkwNi0wLjM2NjY5OTItMC43MzQzNzUtMC41LTEgIEwzMi43NSw0OS4zNzVMMjEuMDQ5ODA0NywzOC4xNzM4MjgxbDMuMzUwMDk3Ny00LjE5OTIxODhMMzEuMjUsNDAuODc1YzAuMjAwMTk1MywwLjE5OTIxODgsMC40MTY1MDM5LDAuMjgzMjAzMSwwLjY0OTkwMjMsMC4yNSAgYzAuMjMzMzk4NCwwLDAuNDUwMTk1My0wLjEwMTU2MjUsMC42NDk5MDIzLTAuMzAwNzgxM2w5LjEwMDA5NzctMTFMODMuMzUwMDk3NywxMS4yMjQ2MDk0eiBNNzQuMjAwMTk1MywxOS41NzQyMTg4ICBjMC0wLjE2NjAxNTYtMC4wODM0OTYxLTAuMzY3MTg3NS0wLjI1LTAuNTk5NjA5NGMtMC4yMzMzOTg0LTAuMTY3OTY4OC0wLjQ1MDE5NTMtMC4yNS0wLjY1MDM5MDYtMC4yNSAgYy0wLjE2NjUwMzksMC0wLjM2NjIxMDksMC4wODIwMzEzLTAuNTk5NjA5NCwwLjI1Yy0wLjE2Njk5MjIsMC4yMzI0MjE5LTAuMjUsMC40MzM1OTM4LTAuMjUsMC41OTk2MDk0ICBjMCwwLjE5OTIxODgsMC4wODMwMDc4LDAuNDE2MDE1NiwwLjI1LDAuNjUwMzkwNmMwLjIzMzM5ODQsMC4xNjYwMTU2LDAuNDMzMTA1NSwwLjI1LDAuNTk5NjA5NCwwLjI1ICBjMC4yMDAxOTUzLDAsMC40MTY5OTIyLTAuMDgzOTg0NCwwLjY1MDM5MDYtMC4yNUM3NC4xMTY2OTkyLDE5Ljk5MDIzNDQsNzQuMjAwMTk1MywxOS43NzM0Mzc1LDc0LjIwMDE5NTMsMTkuNTc0MjE4OHogICBNNzcuNjAwMDk3NywxOC40NzQ2MDk0YzAuMTY2NTAzOSwwLDAuMzY2Njk5Mi0wLjA4Mzk4NDQsMC42MDAwOTc3LTAuMjVjMC4xNjY1MDM5LTAuMjM0Mzc1LDAuMjUtMC40NTExNzE5LDAuMjUtMC42NTAzOTA2ICBjMC0wLjE2NjAxNTYtMC4wODM0OTYxLTAuMzY3MTg3NS0wLjI1LTAuNTk5NjA5NGMtMC4yMzMzOTg0LTAuMjAxMTcxOS0wLjQzMzU5MzgtMC4zMDA3ODEzLTAuNjAwMDk3Ny0wLjMwMDc4MTMgIGMtMC4yMzMzOTg0LDAtMC40MzM1OTM4LDAuMDk5NjA5NC0wLjYwMDA5NzcsMC4zMDA3ODEzYy0wLjE2NjUwMzksMC4xNjYwMTU2LTAuMjUsMC4zNjcxODc1LTAuMjUsMC41OTk2MDk0ICBjMCwwLjI2NzU3ODEsMC4wODM0OTYxLDAuNDgyNDIxOSwwLjI1LDAuNjUwMzkwNkM3Ny4xNjY1MDM5LDE4LjM5MDYyNSw3Ny4zNjY2OTkyLDE4LjQ3NDYwOTQsNzcuNjAwMDk3NywxOC40NzQ2MDk0eiAgIE04Mi4zNTAwOTc3LDE2LjE3MzgyODFjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzgyODEyNSwwLjI1LTAuNjUwMzkwNmMwLTAuMjMyNDIxOS0wLjA4MzQ5NjEtMC40MzE2NDA2LTAuMjUtMC41OTk2MDk0ICBjLTAuMTY2NTAzOS0wLjE2NjAxNTYtMC4zNjY2OTkyLTAuMjUtMC42MDAwOTc3LTAuMjVjLTAuMjAwMTk1MywwLTAuMzgzMzAwOCwwLjA4Mzk4NDQtMC41NDk4MDQ3LDAuMjUgIGMtMC4xNjY5OTIyLDAuMTY3OTY4OC0wLjI1LDAuMzY3MTg3NS0wLjI1LDAuNTk5NjA5NGMwLDAuMjY3NTc4MSwwLjA4MzAwNzgsMC40ODQzNzUsMC4yNSwwLjY1MDM5MDYgIGMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzQ5NjA5NCwwLjI1LDAuNTQ5ODA0NywwLjI1QzgxLjk4MzM5ODQsMTYuNDIzODI4MSw4Mi4xODM1OTM4LDE2LjM0MTc5NjksODIuMzUwMDk3NywxNi4xNzM4MjgxeidcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBpZD0nbWVudS10b2dnbGUnIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbWVudS10b2dnbGUnIGNsYXNzTmFtZT0nbGFiZWwtdG9nZ2xlJz48L2xhYmVsPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+XG4gICAgICAgICAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvc2hvd3MnPlxuICAgICAgICAgICAgICAgICAgPGE+U2hvd3M8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xpc3QnPlxuICAgICAgICAgICAgICAgICAgPGE+U29uZyBMaXN0PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9tZWRpYSc+XG4gICAgICAgICAgICAgICAgICA8YT5NZWRpYTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCc+XG4gICAgICAgICAgICAgICAgICA8YT5Db250YWN0PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nd3JhcHBlcic+PC9oZWFkZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgIFxuICAgIEBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1WaWJ1cik7XG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgIC5zaW5nTWFuIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICB9XG4gICAgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBwYWRkaW5nOiAzZW0gMCAxZW0gMDtcbiAgICAgIH1cblxuICAgICAgLm5hdkJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBtYXJnaW46IDFlbSAwO1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgIH1cblxuICAgICAgLmxvZ286aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlO1xuICAgICAgICBib3gtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICNmZjQ0NDQsIDAgMCAwLjVlbSAjZmY0NDQ0LFxuICAgICAgICAgIDAgMCAwLjFlbSAjZmY0NDQ0LCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICB9XG5cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMiU7XG4gICAgICB9XG5cbiAgICAgIG5hdiB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuXG4gICAgICBuYXYgdWwgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIG5hdiB1bCBhOmhvdmVyIHtcbiAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gI2ZmNDQ0NCwgMCAwIDAuNWVtICNmZjQ0NDQsXG4gICAgICAgICAgMCAwIDAuMWVtICNmZjQ0NDQsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjbWVudS10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubGFiZWwtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgIFxuICAgICAgICAgIG5hdiB1bCBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTMzNTRhOyBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg0NTQ1O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUzMzU0YTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTMzNTRhO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgcGFkZGluZzogMmVtIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI21lbnUtdG9nZ2xlOmNoZWNrZWQgfiB1bCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxhYmVsLXRvZ2dsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgICAgICAgI2U4NDU0NSAwJSxcbiAgICAgICAgICAgICAgI2U4NDU0NSAyMCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDIwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNDAlLFxuICAgICAgICAgICAgICAjZTg0NTQ1IDQwJSxcbiAgICAgICAgICAgICAgI2U4NDU0NSA2MCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDYwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgODAlLFxuICAgICAgICAgICAgICAjZTg0NTQ1IDgwJSxcbiAgICAgICAgICAgICAgI2U4NDU0NSAxMDAlXG4gICAgICAgICAgICApOyBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js */"));
    }
  }]);

  return TestHeader;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TestHeader);

/***/ })

})
//# sourceMappingURL=index.js.375b0eebd4b7478b78b3.hot-update.js.map