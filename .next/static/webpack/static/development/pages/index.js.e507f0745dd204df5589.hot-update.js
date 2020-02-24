webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TestHeader.js":
/*!**********************************!*\
  !*** ./components/TestHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_home_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/home.svg */ "./assets/home.svg");
/* harmony import */ var _assets_shows_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/shows.svg */ "./assets/shows.svg");
/* harmony import */ var _assets_clients_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/clients.svg */ "./assets/clients.svg");
/* harmony import */ var _assets_media_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/media.svg */ "./assets/media.svg");
/* harmony import */ var _assets_contact_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/contact.svg */ "./assets/contact.svg");
/* harmony import */ var _assets_songlist_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/songlist.svg */ "./assets/songlist.svg");

var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var TestHeader = function TestHeader(_) {
  var _jsx, _jsx2;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      scrolled = _useState[0],
      setScrolled = _useState[1];

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('navBar', {
    scrolled: scrolled
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function (_) {
    var handleScroll = function handleScroll(_) {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return function (_) {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("nav", {
    className: "jsx-1575115114" + " " + "".concat(classes, " wrapper stroke"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    className: "jsx-1575115114" + " " + 'singMan',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("g", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("svg", {
    fill: "#f1f1f1",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    "enable-background": "new 0 0 100 100",
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M33.2001953,90.6738281c0.1665039-0.1660156,0.25-0.3671875,0.25-0.5996094  c0-0.2675781-0.0834961-0.4824219-0.25-0.6503906c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2001953,0-0.3833008,0.0839844-0.550293,0.25c-0.1665039,0.1679688-0.25,0.3828125-0.25,0.6503906  c0,0.2324219,0.0834961,0.4335938,0.25,0.5996094c0.1669922,0.1679688,0.3500977,0.25,0.550293,0.25  C32.8334961,90.9238281,33.0332031,90.8417969,33.2001953,90.6738281z M33.3500977,84.7246094  c-0.2333984-0.1679688-0.4501953-0.25-0.6499023-0.25c-0.1669922,0-0.3666992,0.0820313-0.6000977,0.25  c-0.1665039,0.2324219-0.25,0.4492188-0.25,0.6503906c0,0.1992188,0.0834961,0.3828125,0.25,0.5488281  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25c0.2666016,0,0.4833984-0.0820313,0.6499023-0.25  c0.1665039-0.1660156,0.25-0.3496094,0.25-0.5488281C33.6000977,85.1738281,33.5166016,84.9570313,33.3500977,84.7246094z   M33.7001953,80.6738281c0-0.2324219-0.0834961-0.4335938-0.25-0.5996094c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2666016,0-0.4833984,0.0839844-0.6499023,0.25c-0.1669922,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2011719,0.0830078,0.3828125,0.25,0.5507813c0.1665039,0.1660156,0.3833008,0.25,0.6499023,0.25  c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25C33.6166992,81.0566406,33.7001953,80.875,33.7001953,80.6738281z   M33.7998047,75.875c0-0.2011719-0.0830078-0.3847656-0.25-0.5507813c-0.1665039-0.1660156-0.3662109-0.25-0.5996094-0.25  c-0.2666016,0-0.4667969,0.0839844-0.6000977,0.25c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5507813  c0,0.265625,0.0834961,0.4824219,0.25,0.6484375c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25  c0.1665039,0,0.3662109-0.0820313,0.5996094-0.25C33.7167969,76.2910156,33.7998047,76.0742188,33.7998047,75.875z   M33.7001953,70.625c-0.1337891-0.1679688-0.3334961-0.25-0.6000977-0.25c-0.2333984,0-0.4165039,0.0820313-0.550293,0.25  c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5488281c0,0.2675781,0.0834961,0.484375,0.25,0.6503906  c0.1669922,0.1660156,0.3500977,0.25,0.550293,0.25c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25  c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906C33.9501953,70.9414063,33.8666992,70.7578125,33.7001953,70.625z   M59.2998047,48.0234375c-0.0664063,0.234375-0.0498047,0.4511719,0.050293,0.6503906L59.5,48.9746094  c0.2001953,0.2988281,0.4833984,0.4492188,0.8500977,0.4492188L60.7001953,49.375  c0.199707-0.1015625,0.3496094-0.2675781,0.449707-0.5c0.0668945-0.234375,0.050293-0.4511719-0.0498047-0.6503906  l-0.1499023-0.3007813c-0.2666016-0.5-0.6503906-0.6328125-1.1503906-0.4003906  C59.5332031,47.625,59.3666992,47.7910156,59.2998047,48.0234375z M55.2001953,38.4746094  c-0.5,0.2988281-0.6337891,0.6835938-0.4003906,1.1503906l3.3500977,6.5996094c0.1665039,0.3320313,0.4335938,0.5,0.800293,0.5  L59.2998047,46.625c0.5336914-0.2675781,0.6835938-0.6503906,0.4501953-1.1503906L56.3500977,38.875  C56.0834961,38.375,55.7001953,38.2402344,55.2001953,38.4746094z M69.7001953,22.2246094  c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094  c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25  c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906  c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25C69.25,22.4746094,69.4667969,22.390625,69.7001953,22.2246094z   M20.6499023,28.7734375l1.550293,1.75c0.5332031,0.4335938,1.2832031,0.8007813,2.25,1.1015625l-8.5,10.0488281  l-2.1000977-1.4492188L20.6499023,28.7734375z M22.75,24.0234375c0.6333008-0.7324219,1.5-1.1660156,2.6000977-1.2988281  c1.0664063-0.0996094,1.9663086,0.1503906,2.699707,0.75c0.800293,0.6328125,1.25,1.4667969,1.3500977,2.5  s-0.1665039,1.9335938-0.7998047,2.6992188c-0.6665039,0.8339844-1.5,1.3007813-2.5,1.4003906L25.2998047,30.125  c-0.7998047-0.1015625-1.4663086-0.4179688-2-0.9511719c-0.3330078-0.265625-0.6162109-0.6171875-0.8496094-1.0488281  l-0.050293-0.0507813c-0.1665039-0.3671875-0.2832031-0.8164063-0.3500977-1.3496094  C21.9501953,25.6582031,22.1835938,24.7578125,22.75,24.0234375z M44.1499023,11.375  c-0.4331055-0.3339844-0.8334961-0.2832031-1.199707,0.1484375c-0.3334961,0.4335938-0.2836914,0.8339844,0.1499023,1.2011719  l0.3500977,0.3496094c0.4663086,0.4003906,0.8496094,0.9160156,1.1499023,1.5507813  c0.1665039,0.3320313,0.4331055,0.5,0.7998047,0.5l0.3999023-0.1015625c0.2001953-0.0996094,0.3500977-0.265625,0.4501953-0.5  c0.0664063-0.2324219,0.0498047-0.4492188-0.0498047-0.6484375c-0.4667969-0.8007813-0.9667969-1.4667969-1.5-2  C44.5332031,11.6738281,44.3500977,11.5078125,44.1499023,11.375z M34.2001953,9.2246094  c1.4663086-0.9003906,3.1333008-1.3496094,5-1.3496094c2.6333008,0,4.8833008,0.9160156,6.75,2.75  C47.8164063,12.5566406,48.75,14.8066406,48.75,17.375c0,0.765625-0.0834961,1.5488281-0.25,2.3496094  c-0.4335938,1.6992188-1.2832031,3.1992188-2.5498047,4.5c-1.8666992,1.8320313-4.1166992,2.75-6.75,2.75  c-2.6669922,0-4.9169922-0.9335938-6.75-2.8007813c-1.8666992-1.8320313-2.800293-4.0996094-2.800293-6.7988281  c0-2.6015625,0.9335938-4.8515625,2.800293-6.75C33.0166016,10.0234375,33.6000977,9.5566406,34.2001953,9.2246094z   M41.0498047,9.875l-0.699707-0.1015625c-0.2333984,0-0.4335938,0.0839844-0.6000977,0.25  C39.5834961,10.1914063,39.5,10.390625,39.5,10.625c0,0.2324219,0.0834961,0.4492188,0.25,0.6484375  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25h0.25l0.25,0.0507813c0.3999023,0,0.6665039-0.2167969,0.7998047-0.6503906  c0.0668945-0.2324219,0.0336914-0.4492188-0.1000977-0.6503906C41.4501953,10.0742188,41.2832031,9.9414063,41.0498047,9.875z   M83.3500977,11.2246094L86,18.375L55.1499023,33.2734375C55.25,33.4414063,55.3500977,33.640625,55.4501953,33.875  l30.699707,58.1484375h-7.6000977l-19.449707-32l-22.050293,12.4511719  c-0.2666016,0.1660156-0.3999023,0.3828125-0.3999023,0.6503906l-1.25,19l-5.75-0.1015625l0.800293-23.1992188l18.449707-11.25  c0.3999023-0.2324219,0.5166016-0.5839844,0.3500977-1.0507813l-6.1000977-16.0488281c-0.199707-0.4003906-0.3666992-0.734375-0.5-1  L32.75,49.375L21.0498047,38.1738281l3.3500977-4.1992188L31.25,40.875c0.2001953,0.1992188,0.4165039,0.2832031,0.6499023,0.25  c0.2333984,0,0.4501953-0.1015625,0.6499023-0.3007813l9.1000977-11L83.3500977,11.2246094z M74.2001953,19.5742188  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25  c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094  c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25  c0.2001953,0,0.4169922-0.0839844,0.6503906-0.25C74.1166992,19.9902344,74.2001953,19.7734375,74.2001953,19.5742188z   M77.6000977,18.4746094c0.1665039,0,0.3666992-0.0839844,0.6000977-0.25c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.2011719-0.4335938-0.3007813-0.6000977-0.3007813  c-0.2333984,0-0.4335938,0.0996094-0.6000977,0.3007813c-0.1665039,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2675781,0.0834961,0.4824219,0.25,0.6503906C77.1665039,18.390625,77.3666992,18.4746094,77.6000977,18.4746094z   M82.3500977,16.1738281c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906c0-0.2324219-0.0834961-0.4316406-0.25-0.5996094  c-0.1665039-0.1660156-0.3666992-0.25-0.6000977-0.25c-0.2001953,0-0.3833008,0.0839844-0.5498047,0.25  c-0.1669922,0.1679688-0.25,0.3671875-0.25,0.5996094c0,0.2675781,0.0830078,0.484375,0.25,0.6503906  c0.1665039,0.1679688,0.3496094,0.25,0.5498047,0.25C81.9833984,16.4238281,82.1835938,16.3417969,82.3500977,16.1738281z",
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))))), __jsx("input", {
    type: "checkbox",
    id: "menu-toggle",
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "menu-toggle",
    className: "jsx-1575115114" + " " + 'label-toggle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/shows",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Shows"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Song List"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/clients",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Clients"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Media"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Contact"))), __jsx("div", {
    className: "jsx-1575115114" + " " + 'flexTwo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("a", {
    href: "https://twitter.com/goodenoughkband",
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("svg", (_jsx = {
    "enable-background": "new 0 0 56.693 56.693",
    height: "56.693px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 56.693 56.693",
    width: "25px"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "height", "25px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "xmlns", "http://www.w3.org/2000/svg"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-1575115114"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 99
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx("path", {
    d: "M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z",
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))), __jsx("a", {
    href: "https://www.facebook.com/groups/GoodEnoughLIVEKARAOKE/",
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("svg", (_jsx2 = {
    "enable-background": "new 0 0 56.693 56.693",
    height: "56.693px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 56.693 56.693",
    width: "25px"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "height", "25px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "xmlns", "http://www.w3.org/2000/svg"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "className", "jsx-1575115114"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 113
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), _jsx2), __jsx("path", {
    d: "M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z",
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }))), __jsx("a", {
    href: "https://www.instagram.com/goodenoughlivekaraoke/",
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#F1f1f1",
    viewBox: "0 0 50 50",
    width: "25px",
    height: "25px",
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, ' ', __jsx("path", {
    d: "M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z",
    className: "jsx-1575115114",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })))))), __jsx("header", {
    className: "jsx-1575115114" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1575115114",
    __self: this
  }, "svg.jsx-1575115114{fill:#f1f1f1;-webkit-transition:all 0.2s;transition:all 0.2s;z-index:100;}svg.jsx-1575115114:hover{fill:#761f6b;cursor:pointer;}nav.jsx-1575115114 ul.jsx-1575115114 a.jsx-1575115114:hover{color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.navBar.jsx-1575115114{-webkit-transition:background-color 0.2s;transition:background-color 0.2s;background:none;}.navBar.scrolled.jsx-1575115114{background:rgba(229,52,65,0.98)!important;z-index:300;height:75px;}.singMan.jsx-1575115114{-webkit-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);}h1.jsx-1575115114{font-size:3em;padding:3em 0 1em 0;}.navBar.jsx-1575115114{position:fixed;right:0;left:0;top:0;padding:5px 0;z-index:300;}.logo.jsx-1575115114{background-color:#f1f1f1;border-radius:50px;display:inline-block;height:45px;margin:1em 0;width:45px;}.wrapper.jsx-1575115114{margin:0 auto;max-width:1400px;padding:0 5%;}nav.jsx-1575115114 ul.jsx-1575115114{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;list-style-type:none;width:65%;}nav.jsx-1575115114 ul.jsx-1575115114 a.jsx-1575115114{font-size:20px;font-family:'Concert One',cursive;color:#f1f1f1;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;cursor:pointer;}li.jsx-1575115114{display:inline-block;}#menu-toggle.jsx-1575115114{display:none;}.label-toggle.jsx-1575115114{display:none;}label.jsx-1575115114{z-index:100;position:relative;}.wrapper.jsx-1575115114{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:1015px){nav.jsx-1575115114 .wrapper.jsx-1575115114{background:rgb(229,52,65,0.98)!important;}nav.jsx-1575115114 ul.jsx-1575115114{width:100%;padding:0 2%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}nav.jsx-1575115114 ul.jsx-1575115114 a.jsx-1575115114{color:#f1f1f1;font-size:60px;}svg.jsx-1575115114{width:50px;height:50px;margin:0 20px;top:10px;position:relative;}ul.jsx-1575115114{background:rgba(229,52,65,0.98)!important;display:block;height:0;list-style-type:none;opacity:0;text-align:center;width:100%;visibility:hidden;position:absolute;left:0;right:0;top:20px;}li.jsx-1575115114{color:#f1f1f1;display:block;font-size:1.5em;margin:5px 0;}#menu-toggle.jsx-1575115114:checked~ul.jsx-1575115114{opacity:1;height:65vh;visibility:visible;padding-bottom:100%;margin:0 auto;margin-top:-20px;position:absolute;left:0;right:0;top:20px;}.label-toggle.jsx-1575115114{background:linear-gradient( to bottom, #f1f1f1 0%, #f1f1f1 20%, transparent 20%, transparent 40%, #f1f1f1 40%, #f1f1f1 60%, transparent 60%, transparent 80%, #f1f1f1 80%, #f1f1f1 100% );cursor:pointer;display:block;float:right;height:35px;margin-top:1em;width:35px;}.wrapper.jsx-1575115114{display:block;}}@media screen and (max-width:800px){ul.jsx-1575115114{-webkit-transition:all 1s ease;transition:all 1s ease;}ul.jsx-1575115114 li.jsx-1575115114 a.jsx-1575115114{font-size:30px;}li.jsx-1575115114:first-child{margin-top:40px;}svg.jsx-1575115114{top:0;width:30px;height:30px;}}@media screen and (max-width:600px){ul.jsx-1575115114 li.jsx-1575115114 a.jsx-1575115114{font-size:40px;}li.jsx-1575115114:first-child{margin-top:70px;}.navBar.jsx-1575115114 svg.jsx-1575115114{left:0px;}.songButton.jsx-1575115114{margin-top:36px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9UZXN0SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZJa0IsQUFJc0IsQUFNQSxBQU1ILEFBTXlCLEFBSVUsQUFNbkIsQUFJWixBQUtDLEFBU1UsQUFTWCxBQU1ELEFBT0UsQUFVTSxBQUlSLEFBSUEsQUFJRCxBQUtPLEFBUTJCLEFBSS9CLEFBTUcsQUFLSCxBQVFpQyxBQWU5QixBQU9KLEFBeUJULEFBV2EsQUFPTyxBQUlSLEFBSUMsQUFJVixBQVFTLEFBR0MsQUFJUCxBQUlPLE1BbEJMLEdBZWIsQ0F0RWdCLENBdklvQixBQThGbkIsQUFXRCxDQTVCRSxDQTFGRSxBQU1MLEFBNEVqQixBQUlBLENBdERzQixBQXVCSCxBQTBERSxBQTRCRCxBQTJDaEIsQ0FuSk0sQUErQjJCLEFBK0huQyxBQWdCQSxDQVpBLEFBZUEsQUFRQSxDQWxCYyxJQTlIaEIsQ0F1RXlCLENBL0doQixBQWlGVSxDQVhTLENBOURQLEdBdkNyQixBQXVJc0IsQ0E1QmxCLEFBMkZGLENBdEtNLEFBb0RSLENBbkNlLEdBdkJmLEVBT2dCLENBZ0ZELElBakJYLEFBK0NxQixDQWhJVCxBQXdHSSxFQS9FRyxBQVV2QixBQXNGbUIsRUF0QkssR0FwRFIsQ0E1QkYsSUFsQkUsQUF3S2QsRUFoRWEsQ0FpQlgsSUEvSVUsQUFzSk0sQ0E3R3BCLENBNEIyQixDQW9EdkIsQ0ExRVUsQUFnRmEsQ0F4R3pCLE9BdEJGLENBZ0JvQixBQTJDWSxDQTJGVCxFQXZHUixTQWdGQyxFQTFETyxFQXBEckIsQUFTRixBQXNCYSxFQXVHVyxDQTFEVCxHQW1DUyxLQS9FeEIsQ0EwREksUUE2Q1MsSUE1SWIsQUFxSGlCLEdBd0JILFFBdkJVLEFBd0JULFNBQ1gsSUFyRnVCLEtBNkRILGtCQUNYLE1BdENtQixDQXVDbEIsUUFDQyxTQUNYLENBcUNpQixHQWhIRSxPQVdOLEtBc0dHLFNBaEhSLENBV1osSUFzR2tCLEtBaEhsQixPQWlIa0IsWUFDRyxlQUNKLFdBQ2IsaUJBbkZKIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9UZXN0SGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lIGZyb20gJy4uL2Fzc2V0cy9ob21lLnN2Zyc7XG5pbXBvcnQgU2hvd3MgZnJvbSAnLi4vYXNzZXRzL3Nob3dzLnN2Zyc7XG5pbXBvcnQgQ2xpZW50cyBmcm9tICcuLi9hc3NldHMvY2xpZW50cy5zdmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4uL2Fzc2V0cy9tZWRpYS5zdmcnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vYXNzZXRzL2NvbnRhY3Quc3ZnJztcbmltcG9ydCBTb25nTGlzdCBmcm9tICcuLi9hc3NldHMvc29uZ2xpc3Quc3ZnJztcblxuY29uc3QgVGVzdEhlYWRlciA9IF8gPT4ge1xuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCduYXZCYXInLCB7XG4gICAgc2Nyb2xsZWQ6IHNjcm9sbGVkLFxuICB9KTtcbiAgdXNlRWZmZWN0KF8gPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IF8gPT4ge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEpIHtcbiAgICAgICAgc2V0U2Nyb2xsZWQodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTY3JvbGxlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gXyA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlc30gd3JhcHBlciBzdHJva2VgfT5cbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgd2lkdGg9JzYwJ1xuICAgICAgICAgICAgaGVpZ2h0PSc2MCdcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA2MCA2MCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ01hbidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgLy8gdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTAgNTApIHNjYWxlKC0wLjY5IDAuNjkpIHJvdGF0ZSgwKSB0cmFuc2xhdGUoLTUwIC01MCknXG4gICAgICAgICAgICAvLyBzdHlsZT0nZmlsbDojRkZGRkZGJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgZmlsbD0nI2YxZjFmMSdcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgdmVyc2lvbj0nMS4xJ1xuICAgICAgICAgICAgICAgIHg9JzBweCdcbiAgICAgICAgICAgICAgICB5PScwcHgnXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDEwMCAxMDAnXG4gICAgICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgMTAwIDEwMCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICBkPSdNMzMuMjAwMTk1Myw5MC42NzM4MjgxYzAuMTY2NTAzOS0wLjE2NjAxNTYsMC4yNS0wLjM2NzE4NzUsMC4yNS0wLjU5OTYwOTQgIGMwLTAuMjY3NTc4MS0wLjA4MzQ5NjEtMC40ODI0MjE5LTAuMjUtMC42NTAzOTA2Yy0wLjE2Njk5MjItMC4xNjYwMTU2LTAuMzY2Njk5Mi0wLjI1LTAuNjAwMDk3Ny0wLjI1ICBjLTAuMjAwMTk1MywwLTAuMzgzMzAwOCwwLjA4Mzk4NDQtMC41NTAyOTMsMC4yNWMtMC4xNjY1MDM5LDAuMTY3OTY4OC0wLjI1LDAuMzgyODEyNS0wLjI1LDAuNjUwMzkwNiAgYzAsMC4yMzI0MjE5LDAuMDgzNDk2MSwwLjQzMzU5MzgsMC4yNSwwLjU5OTYwOTRjMC4xNjY5OTIyLDAuMTY3OTY4OCwwLjM1MDA5NzcsMC4yNSwwLjU1MDI5MywwLjI1ICBDMzIuODMzNDk2MSw5MC45MjM4MjgxLDMzLjAzMzIwMzEsOTAuODQxNzk2OSwzMy4yMDAxOTUzLDkwLjY3MzgyODF6IE0zMy4zNTAwOTc3LDg0LjcyNDYwOTQgIGMtMC4yMzMzOTg0LTAuMTY3OTY4OC0wLjQ1MDE5NTMtMC4yNS0wLjY0OTkwMjMtMC4yNWMtMC4xNjY5OTIyLDAtMC4zNjY2OTkyLDAuMDgyMDMxMy0wLjYwMDA5NzcsMC4yNSAgYy0wLjE2NjUwMzksMC4yMzI0MjE5LTAuMjUsMC40NDkyMTg4LTAuMjUsMC42NTAzOTA2YzAsMC4xOTkyMTg4LDAuMDgzNDk2MSwwLjM4MjgxMjUsMC4yNSwwLjU0ODgyODEgIGMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzY2Njk5MiwwLjI1LDAuNjAwMDk3NywwLjI1YzAuMjY2NjAxNiwwLDAuNDgzMzk4NC0wLjA4MjAzMTMsMC42NDk5MDIzLTAuMjUgIGMwLjE2NjUwMzktMC4xNjYwMTU2LDAuMjUtMC4zNDk2MDk0LDAuMjUtMC41NDg4MjgxQzMzLjYwMDA5NzcsODUuMTczODI4MSwzMy41MTY2MDE2LDg0Ljk1NzAzMTMsMzMuMzUwMDk3Nyw4NC43MjQ2MDk0eiAgIE0zMy43MDAxOTUzLDgwLjY3MzgyODFjMC0wLjIzMjQyMTktMC4wODM0OTYxLTAuNDMzNTkzOC0wLjI1LTAuNTk5NjA5NGMtMC4xNjY5OTIyLTAuMTY2MDE1Ni0wLjM2NjY5OTItMC4yNS0wLjYwMDA5NzctMC4yNSAgYy0wLjI2NjYwMTYsMC0wLjQ4MzM5ODQsMC4wODM5ODQ0LTAuNjQ5OTAyMywwLjI1Yy0wLjE2Njk5MjIsMC4xNjYwMTU2LTAuMjUsMC4zNjcxODc1LTAuMjUsMC41OTk2MDk0ICBjMCwwLjIwMTE3MTksMC4wODMwMDc4LDAuMzgyODEyNSwwLjI1LDAuNTUwNzgxM2MwLjE2NjUwMzksMC4xNjYwMTU2LDAuMzgzMzAwOCwwLjI1LDAuNjQ5OTAyMywwLjI1ICBjMC4yMzMzOTg0LDAsMC40MzMxMDU1LTAuMDgzOTg0NCwwLjYwMDA5NzctMC4yNUMzMy42MTY2OTkyLDgxLjA1NjY0MDYsMzMuNzAwMTk1Myw4MC44NzUsMzMuNzAwMTk1Myw4MC42NzM4MjgxeiAgIE0zMy43OTk4MDQ3LDc1Ljg3NWMwLTAuMjAxMTcxOS0wLjA4MzAwNzgtMC4zODQ3NjU2LTAuMjUtMC41NTA3ODEzYy0wLjE2NjUwMzktMC4xNjYwMTU2LTAuMzY2MjEwOS0wLjI1LTAuNTk5NjA5NC0wLjI1ICBjLTAuMjY2NjAxNiwwLTAuNDY2Nzk2OSwwLjA4Mzk4NDQtMC42MDAwOTc3LDAuMjVjLTAuMTY2NTAzOSwwLjEzMjgxMjUtMC4yNSwwLjMxNjQwNjMtMC4yNSwwLjU1MDc4MTMgIGMwLDAuMjY1NjI1LDAuMDgzNDk2MSwwLjQ4MjQyMTksMC4yNSwwLjY0ODQzNzVjMC4xNjY1MDM5LDAuMTY3OTY4OCwwLjM2NjY5OTIsMC4yNSwwLjYwMDA5NzcsMC4yNSAgYzAuMTY2NTAzOSwwLDAuMzY2MjEwOS0wLjA4MjAzMTMsMC41OTk2MDk0LTAuMjVDMzMuNzE2Nzk2OSw3Ni4yOTEwMTU2LDMzLjc5OTgwNDcsNzYuMDc0MjE4OCwzMy43OTk4MDQ3LDc1Ljg3NXogICBNMzMuNzAwMTk1Myw3MC42MjVjLTAuMTMzNzg5MS0wLjE2Nzk2ODgtMC4zMzM0OTYxLTAuMjUtMC42MDAwOTc3LTAuMjVjLTAuMjMzMzk4NCwwLTAuNDE2NTAzOSwwLjA4MjAzMTMtMC41NTAyOTMsMC4yNSAgYy0wLjE2NjUwMzksMC4xMzI4MTI1LTAuMjUsMC4zMTY0MDYzLTAuMjUsMC41NDg4MjgxYzAsMC4yNjc1NzgxLDAuMDgzNDk2MSwwLjQ4NDM3NSwwLjI1LDAuNjUwMzkwNiAgYzAuMTY2OTkyMiwwLjE2NjAxNTYsMC4zNTAwOTc3LDAuMjUsMC41NTAyOTMsMC4yNWMwLjIzMzM5ODQsMCwwLjQzMzEwNTUtMC4wODM5ODQ0LDAuNjAwMDk3Ny0wLjI1ICBjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzgyODEyNSwwLjI1LTAuNjUwMzkwNkMzMy45NTAxOTUzLDcwLjk0MTQwNjMsMzMuODY2Njk5Miw3MC43NTc4MTI1LDMzLjcwMDE5NTMsNzAuNjI1eiAgIE01OS4yOTk4MDQ3LDQ4LjAyMzQzNzVjLTAuMDY2NDA2MywwLjIzNDM3NS0wLjA0OTgwNDcsMC40NTExNzE5LDAuMDUwMjkzLDAuNjUwMzkwNkw1OS41LDQ4Ljk3NDYwOTQgIGMwLjIwMDE5NTMsMC4yOTg4MjgxLDAuNDgzMzk4NCwwLjQ0OTIxODgsMC44NTAwOTc3LDAuNDQ5MjE4OEw2MC43MDAxOTUzLDQ5LjM3NSAgYzAuMTk5NzA3LTAuMTAxNTYyNSwwLjM0OTYwOTQtMC4yNjc1NzgxLDAuNDQ5NzA3LTAuNWMwLjA2Njg5NDUtMC4yMzQzNzUsMC4wNTAyOTMtMC40NTExNzE5LTAuMDQ5ODA0Ny0wLjY1MDM5MDYgIGwtMC4xNDk5MDIzLTAuMzAwNzgxM2MtMC4yNjY2MDE2LTAuNS0wLjY1MDM5MDYtMC42MzI4MTI1LTEuMTUwMzkwNi0wLjQwMDM5MDYgIEM1OS41MzMyMDMxLDQ3LjYyNSw1OS4zNjY2OTkyLDQ3Ljc5MTAxNTYsNTkuMjk5ODA0Nyw0OC4wMjM0Mzc1eiBNNTUuMjAwMTk1MywzOC40NzQ2MDk0ICBjLTAuNSwwLjI5ODgyODEtMC42MzM3ODkxLDAuNjgzNTkzOC0wLjQwMDM5MDYsMS4xNTAzOTA2bDMuMzUwMDk3Nyw2LjU5OTYwOTRjMC4xNjY1MDM5LDAuMzMyMDMxMywwLjQzMzU5MzgsMC41LDAuODAwMjkzLDAuNSAgTDU5LjI5OTgwNDcsNDYuNjI1YzAuNTMzNjkxNC0wLjI2NzU3ODEsMC42ODM1OTM4LTAuNjUwMzkwNiwwLjQ1MDE5NTMtMS4xNTAzOTA2TDU2LjM1MDA5NzcsMzguODc1ICBDNTYuMDgzNDk2MSwzOC4zNzUsNTUuNzAwMTk1MywzOC4yNDAyMzQ0LDU1LjIwMDE5NTMsMzguNDc0NjA5NHogTTY5LjcwMDE5NTMsMjIuMjI0NjA5NCAgYzAuMTY2NTAzOS0wLjIzNDM3NSwwLjI1LTAuNDUxMTcxOSwwLjI1LTAuNjUwMzkwNmMwLTAuMTY2MDE1Ni0wLjA4MzQ5NjEtMC4zNjcxODc1LTAuMjUtMC41OTk2MDk0ICBjLTAuMjMzMzk4NC0wLjE2Nzk2ODgtMC40NTAxOTUzLTAuMjUtMC42NTAzOTA2LTAuMjVjLTAuMTY2NTAzOSwwLTAuMzY2MjEwOSwwLjA4MjAzMTMtMC41OTk2MDk0LDAuMjUgIGMtMC4xNjY5OTIyLDAuMjMyNDIxOS0wLjI1LDAuNDMzNTkzOC0wLjI1LDAuNTk5NjA5NGMwLDAuMTk5MjE4OCwwLjA4MzAwNzgsMC40MTYwMTU2LDAuMjUsMC42NTAzOTA2ICBjMC4yMzMzOTg0LDAuMTY2MDE1NiwwLjQzMzEwNTUsMC4yNSwwLjU5OTYwOTQsMC4yNUM2OS4yNSwyMi40NzQ2MDk0LDY5LjQ2Njc5NjksMjIuMzkwNjI1LDY5LjcwMDE5NTMsMjIuMjI0NjA5NHogICBNMjAuNjQ5OTAyMywyOC43NzM0Mzc1bDEuNTUwMjkzLDEuNzVjMC41MzMyMDMxLDAuNDMzNTkzOCwxLjI4MzIwMzEsMC44MDA3ODEzLDIuMjUsMS4xMDE1NjI1bC04LjUsMTAuMDQ4ODI4MSAgbC0yLjEwMDA5NzctMS40NDkyMTg4TDIwLjY0OTkwMjMsMjguNzczNDM3NXogTTIyLjc1LDI0LjAyMzQzNzVjMC42MzMzMDA4LTAuNzMyNDIxOSwxLjUtMS4xNjYwMTU2LDIuNjAwMDk3Ny0xLjI5ODgyODEgIGMxLjA2NjQwNjMtMC4wOTk2MDk0LDEuOTY2MzA4NiwwLjE1MDM5MDYsMi42OTk3MDcsMC43NWMwLjgwMDI5MywwLjYzMjgxMjUsMS4yNSwxLjQ2Njc5NjksMS4zNTAwOTc3LDIuNSAgcy0wLjE2NjUwMzksMS45MzM1OTM4LTAuNzk5ODA0NywyLjY5OTIxODhjLTAuNjY2NTAzOSwwLjgzMzk4NDQtMS41LDEuMzAwNzgxMy0yLjUsMS40MDAzOTA2TDI1LjI5OTgwNDcsMzAuMTI1ICBjLTAuNzk5ODA0Ny0wLjEwMTU2MjUtMS40NjYzMDg2LTAuNDE3OTY4OC0yLTAuOTUxMTcxOWMtMC4zMzMwMDc4LTAuMjY1NjI1LTAuNjE2MjEwOS0wLjYxNzE4NzUtMC44NDk2MDk0LTEuMDQ4ODI4MSAgbC0wLjA1MDI5My0wLjA1MDc4MTNjLTAuMTY2NTAzOS0wLjM2NzE4NzUtMC4yODMyMDMxLTAuODE2NDA2My0wLjM1MDA5NzctMS4zNDk2MDk0ICBDMjEuOTUwMTk1MywyNS42NTgyMDMxLDIyLjE4MzU5MzgsMjQuNzU3ODEyNSwyMi43NSwyNC4wMjM0Mzc1eiBNNDQuMTQ5OTAyMywxMS4zNzUgIGMtMC40MzMxMDU1LTAuMzMzOTg0NC0wLjgzMzQ5NjEtMC4yODMyMDMxLTEuMTk5NzA3LDAuMTQ4NDM3NWMtMC4zMzM0OTYxLDAuNDMzNTkzOC0wLjI4MzY5MTQsMC44MzM5ODQ0LDAuMTQ5OTAyMywxLjIwMTE3MTkgIGwwLjM1MDA5NzcsMC4zNDk2MDk0YzAuNDY2MzA4NiwwLjQwMDM5MDYsMC44NDk2MDk0LDAuOTE2MDE1NiwxLjE0OTkwMjMsMS41NTA3ODEzICBjMC4xNjY1MDM5LDAuMzMyMDMxMywwLjQzMzEwNTUsMC41LDAuNzk5ODA0NywwLjVsMC4zOTk5MDIzLTAuMTAxNTYyNWMwLjIwMDE5NTMtMC4wOTk2MDk0LDAuMzUwMDk3Ny0wLjI2NTYyNSwwLjQ1MDE5NTMtMC41ICBjMC4wNjY0MDYzLTAuMjMyNDIxOSwwLjA0OTgwNDctMC40NDkyMTg4LTAuMDQ5ODA0Ny0wLjY0ODQzNzVjLTAuNDY2Nzk2OS0wLjgwMDc4MTMtMC45NjY3OTY5LTEuNDY2Nzk2OS0xLjUtMiAgQzQ0LjUzMzIwMzEsMTEuNjczODI4MSw0NC4zNTAwOTc3LDExLjUwNzgxMjUsNDQuMTQ5OTAyMywxMS4zNzV6IE0zNC4yMDAxOTUzLDkuMjI0NjA5NCAgYzEuNDY2MzA4Ni0wLjkwMDM5MDYsMy4xMzMzMDA4LTEuMzQ5NjA5NCw1LTEuMzQ5NjA5NGMyLjYzMzMwMDgsMCw0Ljg4MzMwMDgsMC45MTYwMTU2LDYuNzUsMi43NSAgQzQ3LjgxNjQwNjMsMTIuNTU2NjQwNiw0OC43NSwxNC44MDY2NDA2LDQ4Ljc1LDE3LjM3NWMwLDAuNzY1NjI1LTAuMDgzNDk2MSwxLjU0ODgyODEtMC4yNSwyLjM0OTYwOTQgIGMtMC40MzM1OTM4LDEuNjk5MjE4OC0xLjI4MzIwMzEsMy4xOTkyMTg4LTIuNTQ5ODA0Nyw0LjVjLTEuODY2Njk5MiwxLjgzMjAzMTMtNC4xMTY2OTkyLDIuNzUtNi43NSwyLjc1ICBjLTIuNjY2OTkyMiwwLTQuOTE2OTkyMi0wLjkzMzU5MzgtNi43NS0yLjgwMDc4MTNjLTEuODY2Njk5Mi0xLjgzMjAzMTMtMi44MDAyOTMtNC4wOTk2MDk0LTIuODAwMjkzLTYuNzk4ODI4MSAgYzAtMi42MDE1NjI1LDAuOTMzNTkzOC00Ljg1MTU2MjUsMi44MDAyOTMtNi43NUMzMy4wMTY2MDE2LDEwLjAyMzQzNzUsMzMuNjAwMDk3Nyw5LjU1NjY0MDYsMzQuMjAwMTk1Myw5LjIyNDYwOTR6ICAgTTQxLjA0OTgwNDcsOS44NzVsLTAuNjk5NzA3LTAuMTAxNTYyNWMtMC4yMzMzOTg0LDAtMC40MzM1OTM4LDAuMDgzOTg0NC0wLjYwMDA5NzcsMC4yNSAgQzM5LjU4MzQ5NjEsMTAuMTkxNDA2MywzOS41LDEwLjM5MDYyNSwzOS41LDEwLjYyNWMwLDAuMjMyNDIxOSwwLjA4MzQ5NjEsMC40NDkyMTg4LDAuMjUsMC42NDg0Mzc1ICBjMC4xNjY1MDM5LDAuMTY3OTY4OCwwLjM2NjY5OTIsMC4yNSwwLjYwMDA5NzcsMC4yNWgwLjI1bDAuMjUsMC4wNTA3ODEzYzAuMzk5OTAyMywwLDAuNjY2NTAzOS0wLjIxNjc5NjksMC43OTk4MDQ3LTAuNjUwMzkwNiAgYzAuMDY2ODk0NS0wLjIzMjQyMTksMC4wMzM2OTE0LTAuNDQ5MjE4OC0wLjEwMDA5NzctMC42NTAzOTA2QzQxLjQ1MDE5NTMsMTAuMDc0MjE4OCw0MS4yODMyMDMxLDkuOTQxNDA2Myw0MS4wNDk4MDQ3LDkuODc1eiAgIE04My4zNTAwOTc3LDExLjIyNDYwOTRMODYsMTguMzc1TDU1LjE0OTkwMjMsMzMuMjczNDM3NUM1NS4yNSwzMy40NDE0MDYzLDU1LjM1MDA5NzcsMzMuNjQwNjI1LDU1LjQ1MDE5NTMsMzMuODc1ICBsMzAuNjk5NzA3LDU4LjE0ODQzNzVoLTcuNjAwMDk3N2wtMTkuNDQ5NzA3LTMybC0yMi4wNTAyOTMsMTIuNDUxMTcxOSAgYy0wLjI2NjYwMTYsMC4xNjYwMTU2LTAuMzk5OTAyMywwLjM4MjgxMjUtMC4zOTk5MDIzLDAuNjUwMzkwNmwtMS4yNSwxOWwtNS43NS0wLjEwMTU2MjVsMC44MDAyOTMtMjMuMTk5MjE4OGwxOC40NDk3MDctMTEuMjUgIGMwLjM5OTkwMjMtMC4yMzI0MjE5LDAuNTE2NjAxNi0wLjU4Mzk4NDQsMC4zNTAwOTc3LTEuMDUwNzgxM2wtNi4xMDAwOTc3LTE2LjA0ODgyODFjLTAuMTk5NzA3LTAuNDAwMzkwNi0wLjM2NjY5OTItMC43MzQzNzUtMC41LTEgIEwzMi43NSw0OS4zNzVMMjEuMDQ5ODA0NywzOC4xNzM4MjgxbDMuMzUwMDk3Ny00LjE5OTIxODhMMzEuMjUsNDAuODc1YzAuMjAwMTk1MywwLjE5OTIxODgsMC40MTY1MDM5LDAuMjgzMjAzMSwwLjY0OTkwMjMsMC4yNSAgYzAuMjMzMzk4NCwwLDAuNDUwMTk1My0wLjEwMTU2MjUsMC42NDk5MDIzLTAuMzAwNzgxM2w5LjEwMDA5NzctMTFMODMuMzUwMDk3NywxMS4yMjQ2MDk0eiBNNzQuMjAwMTk1MywxOS41NzQyMTg4ICBjMC0wLjE2NjAxNTYtMC4wODM0OTYxLTAuMzY3MTg3NS0wLjI1LTAuNTk5NjA5NGMtMC4yMzMzOTg0LTAuMTY3OTY4OC0wLjQ1MDE5NTMtMC4yNS0wLjY1MDM5MDYtMC4yNSAgYy0wLjE2NjUwMzksMC0wLjM2NjIxMDksMC4wODIwMzEzLTAuNTk5NjA5NCwwLjI1Yy0wLjE2Njk5MjIsMC4yMzI0MjE5LTAuMjUsMC40MzM1OTM4LTAuMjUsMC41OTk2MDk0ICBjMCwwLjE5OTIxODgsMC4wODMwMDc4LDAuNDE2MDE1NiwwLjI1LDAuNjUwMzkwNmMwLjIzMzM5ODQsMC4xNjYwMTU2LDAuNDMzMTA1NSwwLjI1LDAuNTk5NjA5NCwwLjI1ICBjMC4yMDAxOTUzLDAsMC40MTY5OTIyLTAuMDgzOTg0NCwwLjY1MDM5MDYtMC4yNUM3NC4xMTY2OTkyLDE5Ljk5MDIzNDQsNzQuMjAwMTk1MywxOS43NzM0Mzc1LDc0LjIwMDE5NTMsMTkuNTc0MjE4OHogICBNNzcuNjAwMDk3NywxOC40NzQ2MDk0YzAuMTY2NTAzOSwwLDAuMzY2Njk5Mi0wLjA4Mzk4NDQsMC42MDAwOTc3LTAuMjVjMC4xNjY1MDM5LTAuMjM0Mzc1LDAuMjUtMC40NTExNzE5LDAuMjUtMC42NTAzOTA2ICBjMC0wLjE2NjAxNTYtMC4wODM0OTYxLTAuMzY3MTg3NS0wLjI1LTAuNTk5NjA5NGMtMC4yMzMzOTg0LTAuMjAxMTcxOS0wLjQzMzU5MzgtMC4zMDA3ODEzLTAuNjAwMDk3Ny0wLjMwMDc4MTMgIGMtMC4yMzMzOTg0LDAtMC40MzM1OTM4LDAuMDk5NjA5NC0wLjYwMDA5NzcsMC4zMDA3ODEzYy0wLjE2NjUwMzksMC4xNjYwMTU2LTAuMjUsMC4zNjcxODc1LTAuMjUsMC41OTk2MDk0ICBjMCwwLjI2NzU3ODEsMC4wODM0OTYxLDAuNDgyNDIxOSwwLjI1LDAuNjUwMzkwNkM3Ny4xNjY1MDM5LDE4LjM5MDYyNSw3Ny4zNjY2OTkyLDE4LjQ3NDYwOTQsNzcuNjAwMDk3NywxOC40NzQ2MDk0eiAgIE04Mi4zNTAwOTc3LDE2LjE3MzgyODFjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzgyODEyNSwwLjI1LTAuNjUwMzkwNmMwLTAuMjMyNDIxOS0wLjA4MzQ5NjEtMC40MzE2NDA2LTAuMjUtMC41OTk2MDk0ICBjLTAuMTY2NTAzOS0wLjE2NjAxNTYtMC4zNjY2OTkyLTAuMjUtMC42MDAwOTc3LTAuMjVjLTAuMjAwMTk1MywwLTAuMzgzMzAwOCwwLjA4Mzk4NDQtMC41NDk4MDQ3LDAuMjUgIGMtMC4xNjY5OTIyLDAuMTY3OTY4OC0wLjI1LDAuMzY3MTg3NS0wLjI1LDAuNTk5NjA5NGMwLDAuMjY3NTc4MSwwLjA4MzAwNzgsMC40ODQzNzUsMC4yNSwwLjY1MDM5MDYgIGMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzQ5NjA5NCwwLjI1LDAuNTQ5ODA0NywwLjI1QzgxLjk4MzM5ODQsMTYuNDIzODI4MSw4Mi4xODM1OTM4LDE2LjM0MTc5NjksODIuMzUwMDk3NywxNi4xNzM4MjgxeidcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgaWQ9J21lbnUtdG9nZ2xlJyAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbWVudS10b2dnbGUnIGNsYXNzTmFtZT0nbGFiZWwtdG9nZ2xlJz48L2xhYmVsPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvc2hvd3MnPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5TaG93czwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9saXN0Jz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGE+U29uZyBMaXN0PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2NsaWVudHMnPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5DbGllbnRzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL21lZGlhJz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGE+TWVkaWE8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCc+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleFR3byc+XG4gICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL2dvb2Rlbm91Z2hrYmFuZCc+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBlbmFibGUtYmFja2dyb3VuZD0nbmV3IDAgMCA1Ni42OTMgNTYuNjkzJ1xuICAgICAgICAgICAgICAgIGhlaWdodD0nNTYuNjkzcHgnXG4gICAgICAgICAgICAgICAgaWQ9J0xheWVyXzEnXG4gICAgICAgICAgICAgICAgdmVyc2lvbj0nMS4xJ1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1Ni42OTMgNTYuNjkzJ1xuICAgICAgICAgICAgICAgIHdpZHRoPScyNXB4J1xuICAgICAgICAgICAgICAgIGhlaWdodD0nMjVweCdcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNTIuODM3LDE1LjA2NWMtMS44MTEsMC44MDUtMy43NiwxLjM0OC01LjgwNSwxLjU5MWMyLjA4OC0xLjI1LDMuNjg5LTMuMjMsNC40NDQtNS41OTJjLTEuOTUzLDEuMTU5LTQuMTE1LDItNi40MTgsMi40NTQgIGMtMS44NDMtMS45NjQtNC40Ny0zLjE5Mi03LjM3Ny0zLjE5MmMtNS41ODEsMC0xMC4xMDYsNC41MjUtMTAuMTA2LDEwLjEwN2MwLDAuNzkxLDAuMDg5LDEuNTYyLDAuMjYyLDIuMzAzICBjLTguNC0wLjQyMi0xNS44NDgtNC40NDUtMjAuODMzLTEwLjU2Yy0wLjg3LDEuNDkyLTEuMzY4LDMuMjI4LTEuMzY4LDUuMDgyYzAsMy41MDYsMS43ODQsNi42LDQuNDk2LDguNDEyICBjLTEuNjU2LTAuMDUzLTMuMjE1LTAuNTA4LTQuNTc4LTEuMjY1Yy0wLjAwMSwwLjA0Mi0wLjAwMSwwLjA4NS0wLjAwMSwwLjEyOGMwLDQuODk2LDMuNDg0LDguOTgsOC4xMDgsOS45MSAgYy0wLjg0OCwwLjIzLTEuNzQxLDAuMzU0LTIuNjYzLDAuMzU0Yy0wLjY1MiwwLTEuMjg1LTAuMDYzLTEuOTAyLTAuMTgyYzEuMjg3LDQuMDE1LDUuMDE5LDYuOTM4LDkuNDQxLDcuMDE5ICBjLTMuNDU5LDIuNzExLTcuODE2LDQuMzI3LTEyLjU1Miw0LjMyN2MtMC44MTUsMC0xLjYyLTAuMDQ4LTIuNDExLTAuMTQyYzQuNDc0LDIuODY5LDkuNzg2LDQuNTQxLDE1LjQ5Myw0LjU0MSAgYzE4LjU5MSwwLDI4Ljc1Ni0xNS40LDI4Ljc1Ni0yOC43NTZjMC0wLjQzOC0wLjAwOS0wLjg3NS0wLjAyOC0xLjMwOUM0OS43NjksMTguODczLDUxLjQ4MywxNy4wOTIsNTIuODM3LDE1LjA2NXonIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy9Hb29kRW5vdWdoTElWRUtBUkFPS0UvJz5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDU2LjY5MyA1Ni42OTMnXG4gICAgICAgICAgICAgICAgaGVpZ2h0PSc1Ni42OTNweCdcbiAgICAgICAgICAgICAgICBpZD0nTGF5ZXJfMSdcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPScxLjEnXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDU2LjY5MyA1Ni42OTMnXG4gICAgICAgICAgICAgICAgd2lkdGg9JzI1cHgnXG4gICAgICAgICAgICAgICAgaGVpZ2h0PScyNXB4J1xuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9J000MC40MywyMS43MzloLTcuNjQ1di01LjAxNGMwLTEuODgzLDEuMjQ4LTIuMzIyLDIuMTI3LTIuMzIyYzAuODc3LDAsNS4zOTUsMCw1LjM5NSwwVjYuMTI1bC03LjQzLTAuMDI5ICBjLTguMjQ4LDAtMTAuMTI1LDYuMTc0LTEwLjEyNSwxMC4xMjV2NS41MThoLTQuNzd2OC41M2g0Ljc3YzAsMTAuOTQ3LDAsMjQuMTM3LDAsMjQuMTM3aDEwLjAzM2MwLDAsMC0xMy4zMiwwLTI0LjEzN2g2Ljc3ICBMNDAuNDMsMjEuNzM5eicgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2dvb2Rlbm91Z2hsaXZla2FyYW9rZS8nPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGMWYxZjEnXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDUwIDUwJ1xuICAgICAgICAgICAgICAgIHdpZHRoPScyNXB4J1xuICAgICAgICAgICAgICAgIGhlaWdodD0nMjVweCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgPHBhdGggZD0nTSAxNiAzIEMgOC44MyAzIDMgOC44MyAzIDE2IEwgMyAzNCBDIDMgNDEuMTcgOC44MyA0NyAxNiA0NyBMIDM0IDQ3IEMgNDEuMTcgNDcgNDcgNDEuMTcgNDcgMzQgTCA0NyAxNiBDIDQ3IDguODMgNDEuMTcgMyAzNCAzIEwgMTYgMyB6IE0gMzcgMTEgQyAzOC4xIDExIDM5IDExLjkgMzkgMTMgQyAzOSAxNC4xIDM4LjEgMTUgMzcgMTUgQyAzNS45IDE1IDM1IDE0LjEgMzUgMTMgQyAzNSAxMS45IDM1LjkgMTEgMzcgMTEgeiBNIDI1IDE0IEMgMzEuMDcgMTQgMzYgMTguOTMgMzYgMjUgQyAzNiAzMS4wNyAzMS4wNyAzNiAyNSAzNiBDIDE4LjkzIDM2IDE0IDMxLjA3IDE0IDI1IEMgMTQgMTguOTMgMTguOTMgMTQgMjUgMTQgeiBNIDI1IDE2IEMgMjAuMDQgMTYgMTYgMjAuMDQgMTYgMjUgQyAxNiAyOS45NiAyMC4wNCAzNCAyNSAzNCBDIDI5Ljk2IDM0IDM0IDI5Ljk2IDM0IDI1IEMgMzQgMjAuMDQgMjkuOTYgMTYgMjUgMTYgeicgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSd3cmFwcGVyJz48L2hlYWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgc3ZnIHtcbiAgICAgICAgZmlsbDogI2YxZjFmMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgIH1cblxuICAgICAgc3ZnOmhvdmVyIHtcbiAgICAgICAgZmlsbDogIzc2MWY2YjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgXG5cbiAgICAgIG5hdiB1bCBhOmhvdmVyIHtcbiAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLCAwIDAgMC41ZW0gIzc2MWY2YixcbiAgICAgICAgICAwIDAgMC4xZW0gIzc2MWY2YiwgMCAxMHB4IDNweCAjMDAwO1xuICAgICAgfVxuXG4gICAgLm5hdkJhciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdkJhci5zY3JvbGxlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjksNTIsNjUsIDAuOTgpIWltcG9ydGFudDtcbiAgICAgICAgICB6LWluZGV4OiAzMDA7XG4gICAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICB9XG5cbiAgICAgIC5zaW5nTWFuIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICB9XG4gICAgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBwYWRkaW5nOiAzZW0gMCAxZW0gMDtcbiAgICAgIH1cblxuICAgICAgLm5hdkJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgIHotaW5kZXg6IDMwMDtcbiAgICAgIH1cblxuICAgICAgLmxvZ28ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICB9XG5cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDUlO1xuICAgICAgfVxuXG4gICAgICBuYXYgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgIH1cblxuICAgICAgbmF2IHVsIGEge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBjdXJzaXZlO1xuICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAgICAgXG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgI21lbnUtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmxhYmVsLXRvZ2dsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTVweCkge1xuXG4gICAgICAgICAgbmF2IC53cmFwcGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICByZ2IoMjI5LDUyLDY1LDAuOTgpIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuYXYgdWwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgICBuYXYgdWwgYSB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTsgXG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOjAgMjBweDtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAgcmdiYSgyMjksNTIsNjUsIDAuOTgpIWltcG9ydGFudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjbWVudS10b2dnbGU6Y2hlY2tlZCB+IHVsIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1dmg7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b20gMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxhYmVsLXRvZ2dsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgICAgICAgI2YxZjFmMSAwJSxcbiAgICAgICAgICAgICAgI2YxZjFmMSAyMCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDIwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNDAlLFxuICAgICAgICAgICAgICAjZjFmMWYxIDQwJSxcbiAgICAgICAgICAgICAgI2YxZjFmMSA2MCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDYwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgODAlLFxuICAgICAgICAgICAgICAjZjFmMWYxIDgwJSxcbiAgICAgICAgICAgICAgI2YxZjFmMSAxMDAlXG4gICAgICAgICAgICApOyBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICB1bCBsaSBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBsaTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICB1bCBsaSBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbGk6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2QmFyIHN2ZyB7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNvbmdCdXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TestHeader);

/***/ })

})
//# sourceMappingURL=index.js.e507f0745dd204df5589.hot-update.js.map