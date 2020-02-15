webpackHotUpdate("static/development/pages/shows.js",{

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
    className: "jsx-2125477516" + " " + "".concat(classes, " wrapper stroke"),
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
    className: "jsx-2125477516" + " " + 'singMan',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("g", {
    className: "jsx-2125477516",
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
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M33.2001953,90.6738281c0.1665039-0.1660156,0.25-0.3671875,0.25-0.5996094  c0-0.2675781-0.0834961-0.4824219-0.25-0.6503906c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2001953,0-0.3833008,0.0839844-0.550293,0.25c-0.1665039,0.1679688-0.25,0.3828125-0.25,0.6503906  c0,0.2324219,0.0834961,0.4335938,0.25,0.5996094c0.1669922,0.1679688,0.3500977,0.25,0.550293,0.25  C32.8334961,90.9238281,33.0332031,90.8417969,33.2001953,90.6738281z M33.3500977,84.7246094  c-0.2333984-0.1679688-0.4501953-0.25-0.6499023-0.25c-0.1669922,0-0.3666992,0.0820313-0.6000977,0.25  c-0.1665039,0.2324219-0.25,0.4492188-0.25,0.6503906c0,0.1992188,0.0834961,0.3828125,0.25,0.5488281  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25c0.2666016,0,0.4833984-0.0820313,0.6499023-0.25  c0.1665039-0.1660156,0.25-0.3496094,0.25-0.5488281C33.6000977,85.1738281,33.5166016,84.9570313,33.3500977,84.7246094z   M33.7001953,80.6738281c0-0.2324219-0.0834961-0.4335938-0.25-0.5996094c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2666016,0-0.4833984,0.0839844-0.6499023,0.25c-0.1669922,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2011719,0.0830078,0.3828125,0.25,0.5507813c0.1665039,0.1660156,0.3833008,0.25,0.6499023,0.25  c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25C33.6166992,81.0566406,33.7001953,80.875,33.7001953,80.6738281z   M33.7998047,75.875c0-0.2011719-0.0830078-0.3847656-0.25-0.5507813c-0.1665039-0.1660156-0.3662109-0.25-0.5996094-0.25  c-0.2666016,0-0.4667969,0.0839844-0.6000977,0.25c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5507813  c0,0.265625,0.0834961,0.4824219,0.25,0.6484375c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25  c0.1665039,0,0.3662109-0.0820313,0.5996094-0.25C33.7167969,76.2910156,33.7998047,76.0742188,33.7998047,75.875z   M33.7001953,70.625c-0.1337891-0.1679688-0.3334961-0.25-0.6000977-0.25c-0.2333984,0-0.4165039,0.0820313-0.550293,0.25  c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5488281c0,0.2675781,0.0834961,0.484375,0.25,0.6503906  c0.1669922,0.1660156,0.3500977,0.25,0.550293,0.25c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25  c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906C33.9501953,70.9414063,33.8666992,70.7578125,33.7001953,70.625z   M59.2998047,48.0234375c-0.0664063,0.234375-0.0498047,0.4511719,0.050293,0.6503906L59.5,48.9746094  c0.2001953,0.2988281,0.4833984,0.4492188,0.8500977,0.4492188L60.7001953,49.375  c0.199707-0.1015625,0.3496094-0.2675781,0.449707-0.5c0.0668945-0.234375,0.050293-0.4511719-0.0498047-0.6503906  l-0.1499023-0.3007813c-0.2666016-0.5-0.6503906-0.6328125-1.1503906-0.4003906  C59.5332031,47.625,59.3666992,47.7910156,59.2998047,48.0234375z M55.2001953,38.4746094  c-0.5,0.2988281-0.6337891,0.6835938-0.4003906,1.1503906l3.3500977,6.5996094c0.1665039,0.3320313,0.4335938,0.5,0.800293,0.5  L59.2998047,46.625c0.5336914-0.2675781,0.6835938-0.6503906,0.4501953-1.1503906L56.3500977,38.875  C56.0834961,38.375,55.7001953,38.2402344,55.2001953,38.4746094z M69.7001953,22.2246094  c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094  c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25  c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906  c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25C69.25,22.4746094,69.4667969,22.390625,69.7001953,22.2246094z   M20.6499023,28.7734375l1.550293,1.75c0.5332031,0.4335938,1.2832031,0.8007813,2.25,1.1015625l-8.5,10.0488281  l-2.1000977-1.4492188L20.6499023,28.7734375z M22.75,24.0234375c0.6333008-0.7324219,1.5-1.1660156,2.6000977-1.2988281  c1.0664063-0.0996094,1.9663086,0.1503906,2.699707,0.75c0.800293,0.6328125,1.25,1.4667969,1.3500977,2.5  s-0.1665039,1.9335938-0.7998047,2.6992188c-0.6665039,0.8339844-1.5,1.3007813-2.5,1.4003906L25.2998047,30.125  c-0.7998047-0.1015625-1.4663086-0.4179688-2-0.9511719c-0.3330078-0.265625-0.6162109-0.6171875-0.8496094-1.0488281  l-0.050293-0.0507813c-0.1665039-0.3671875-0.2832031-0.8164063-0.3500977-1.3496094  C21.9501953,25.6582031,22.1835938,24.7578125,22.75,24.0234375z M44.1499023,11.375  c-0.4331055-0.3339844-0.8334961-0.2832031-1.199707,0.1484375c-0.3334961,0.4335938-0.2836914,0.8339844,0.1499023,1.2011719  l0.3500977,0.3496094c0.4663086,0.4003906,0.8496094,0.9160156,1.1499023,1.5507813  c0.1665039,0.3320313,0.4331055,0.5,0.7998047,0.5l0.3999023-0.1015625c0.2001953-0.0996094,0.3500977-0.265625,0.4501953-0.5  c0.0664063-0.2324219,0.0498047-0.4492188-0.0498047-0.6484375c-0.4667969-0.8007813-0.9667969-1.4667969-1.5-2  C44.5332031,11.6738281,44.3500977,11.5078125,44.1499023,11.375z M34.2001953,9.2246094  c1.4663086-0.9003906,3.1333008-1.3496094,5-1.3496094c2.6333008,0,4.8833008,0.9160156,6.75,2.75  C47.8164063,12.5566406,48.75,14.8066406,48.75,17.375c0,0.765625-0.0834961,1.5488281-0.25,2.3496094  c-0.4335938,1.6992188-1.2832031,3.1992188-2.5498047,4.5c-1.8666992,1.8320313-4.1166992,2.75-6.75,2.75  c-2.6669922,0-4.9169922-0.9335938-6.75-2.8007813c-1.8666992-1.8320313-2.800293-4.0996094-2.800293-6.7988281  c0-2.6015625,0.9335938-4.8515625,2.800293-6.75C33.0166016,10.0234375,33.6000977,9.5566406,34.2001953,9.2246094z   M41.0498047,9.875l-0.699707-0.1015625c-0.2333984,0-0.4335938,0.0839844-0.6000977,0.25  C39.5834961,10.1914063,39.5,10.390625,39.5,10.625c0,0.2324219,0.0834961,0.4492188,0.25,0.6484375  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25h0.25l0.25,0.0507813c0.3999023,0,0.6665039-0.2167969,0.7998047-0.6503906  c0.0668945-0.2324219,0.0336914-0.4492188-0.1000977-0.6503906C41.4501953,10.0742188,41.2832031,9.9414063,41.0498047,9.875z   M83.3500977,11.2246094L86,18.375L55.1499023,33.2734375C55.25,33.4414063,55.3500977,33.640625,55.4501953,33.875  l30.699707,58.1484375h-7.6000977l-19.449707-32l-22.050293,12.4511719  c-0.2666016,0.1660156-0.3999023,0.3828125-0.3999023,0.6503906l-1.25,19l-5.75-0.1015625l0.800293-23.1992188l18.449707-11.25  c0.3999023-0.2324219,0.5166016-0.5839844,0.3500977-1.0507813l-6.1000977-16.0488281c-0.199707-0.4003906-0.3666992-0.734375-0.5-1  L32.75,49.375L21.0498047,38.1738281l3.3500977-4.1992188L31.25,40.875c0.2001953,0.1992188,0.4165039,0.2832031,0.6499023,0.25  c0.2333984,0,0.4501953-0.1015625,0.6499023-0.3007813l9.1000977-11L83.3500977,11.2246094z M74.2001953,19.5742188  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25  c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094  c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25  c0.2001953,0,0.4169922-0.0839844,0.6503906-0.25C74.1166992,19.9902344,74.2001953,19.7734375,74.2001953,19.5742188z   M77.6000977,18.4746094c0.1665039,0,0.3666992-0.0839844,0.6000977-0.25c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.2011719-0.4335938-0.3007813-0.6000977-0.3007813  c-0.2333984,0-0.4335938,0.0996094-0.6000977,0.3007813c-0.1665039,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2675781,0.0834961,0.4824219,0.25,0.6503906C77.1665039,18.390625,77.3666992,18.4746094,77.6000977,18.4746094z   M82.3500977,16.1738281c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906c0-0.2324219-0.0834961-0.4316406-0.25-0.5996094  c-0.1665039-0.1660156-0.3666992-0.25-0.6000977-0.25c-0.2001953,0-0.3833008,0.0839844-0.5498047,0.25  c-0.1669922,0.1679688-0.25,0.3671875-0.25,0.5996094c0,0.2675781,0.0830078,0.484375,0.25,0.6503906  c0.1665039,0.1679688,0.3496094,0.25,0.5498047,0.25C81.9833984,16.4238281,82.1835938,16.3417969,82.3500977,16.1738281z",
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))))), __jsx("input", {
    type: "checkbox",
    id: "menu-toggle",
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "menu-toggle",
    className: "jsx-2125477516" + " " + 'label-toggle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-2125477516",
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
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2125477516",
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
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2125477516",
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
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2125477516",
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
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2125477516",
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
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2125477516",
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
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Contact"))), __jsx("div", {
    className: "jsx-2125477516" + " " + 'flexTwo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("a", {
    href: "https://twitter.com/goodenoughkband",
    className: "jsx-2125477516",
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
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "height", "25px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "xmlns", "http://www.w3.org/2000/svg"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-2125477516"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 99
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx("path", {
    d: "M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z",
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))), __jsx("a", {
    href: "https://www.facebook.com/groups/GoodEnoughLIVEKARAOKE/",
    className: "jsx-2125477516",
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
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "height", "25px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "xmlns", "http://www.w3.org/2000/svg"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "className", "jsx-2125477516"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 113
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), _jsx2), __jsx("path", {
    d: "M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z",
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }))), __jsx("a", {
    href: "https://www.instagram.com/goodenoughlivekaraoke/",
    className: "jsx-2125477516",
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
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, ' ', __jsx("path", {
    d: "M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z",
    className: "jsx-2125477516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })))))), __jsx("header", {
    className: "jsx-2125477516" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2125477516",
    __self: this
  }, "svg.jsx-2125477516{fill:#f1f1f1;-webkit-transition:all 0.2s;transition:all 0.2s;}svg.jsx-2125477516:hover{fill:#761f6b;cursor:pointer;}nav.jsx-2125477516 ul.jsx-2125477516 a.jsx-2125477516:hover{color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.navBar.jsx-2125477516{-webkit-transition:background-color 0.2s;transition:background-color 0.2s;background:rgb(229,52,65);}.navBar.scrolled.jsx-2125477516{background:rgba(229,52,65,0.98)!important;z-index:300;}.singMan.jsx-2125477516{-webkit-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);}h1.jsx-2125477516{font-size:3em;padding:3em 0 1em 0;}.navBar.jsx-2125477516{position:fixed;right:0;left:0;top:0;padding:5px 0;z-index:300;}.logo.jsx-2125477516{background-color:#f1f1f1;border-radius:50px;display:inline-block;height:45px;margin:1em 0;width:45px;}.wrapper.jsx-2125477516{margin:0 auto;max-width:1400px;padding:0 5%;}nav.jsx-2125477516 ul.jsx-2125477516{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;list-style-type:none;width:65%;}nav.jsx-2125477516 ul.jsx-2125477516 a.jsx-2125477516{font-size:20px;font-family:'Concert One',cursive;color:#f1f1f1;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;cursor:pointer;}li.jsx-2125477516{display:inline-block;}#menu-toggle.jsx-2125477516{display:none;}.label-toggle.jsx-2125477516{display:none;}.wrapper.jsx-2125477516{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:1015px){nav.jsx-2125477516 .wrapper.jsx-2125477516{background:rgba(25,3,22,0.98)!important;}nav.jsx-2125477516 ul.jsx-2125477516{width:100%;padding:0 2%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}nav.jsx-2125477516 ul.jsx-2125477516 a.jsx-2125477516{color:#f1f1f1;font-size:60px;}svg.jsx-2125477516{width:50px;height:50px;margin:0 20px;}ul.jsx-2125477516{background:rgba(25,3,22,0.98)!important;display:block;height:0;list-style-type:none;opacity:0;text-align:center;width:100%;visibility:hidden;}li.jsx-2125477516{color:#f1f1f1;display:block;font-size:1.5em;margin:5px 0;}#menu-toggle.jsx-2125477516:checked~ul.jsx-2125477516{opacity:1;height:65vh;visibility:visible;padding-bottom:100%;margin:0 auto;margin-top:-20px;}.label-toggle.jsx-2125477516{background:linear-gradient( to bottom, #f1f1f1 0%, #f1f1f1 20%, transparent 20%, transparent 40%, #f1f1f1 40%, #f1f1f1 60%, transparent 60%, transparent 80%, #f1f1f1 80%, #f1f1f1 100% );cursor:pointer;display:block;float:right;height:35px;margin-top:1em;width:35px;}.wrapper.jsx-2125477516{display:block;}}@media screen and (max-width:1000px){ul.jsx-2125477516{-webkit-transition:all 1s ease;transition:all 1s ease;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9UZXN0SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZJa0IsQUFJc0IsQUFLQSxBQU1ILEFBTXlCLEFBSVUsQUFLbkIsQUFJWixBQUtDLEFBU1UsQUFTWCxBQU1ELEFBT0UsQUFVTSxBQUlSLEFBSUEsQUFJTSxBQVEwQixBQUk5QixBQU1HLEFBS0gsQUFNOEIsQUFXM0IsQUFPSixBQXFCVCxBQVdhLEFBT08sVUF0Q1QsQ0EzSG9CLEFBd0ZuQixBQVdELEVBL0dJLEFBS0wsQUEyRWpCLEFBSUEsQ0F0RHNCLEFBdUJILEFBcURFLEFBc0JELEFBdUNoQixDQXBJTSxBQStCMkIsTUFVckMsQ0E0RHlCLENBcEdoQixBQTRFVSxDQVhTLENBekRQLEdBdENyQixBQTJIc0IsQ0F0QmxCLENBdEVJLENBaUJPLEdBdkJmLEVBT2dCLENBMkVaLEdBakJBLEFBcUJnQixDQW9CSyxDQXBIVCxFQXdCTyxBQVV2QixBQTJFbUIsS0EvREgsQ0E1QkYsSUFqQlosQUFnR2EsQUF3RGIsR0EzQ0UsSUFsSUosQUF5SW9CLENBbEdwQixDQTRCMkIsQUFtREEsRUF6RWIsU0E3QmdCLEFBMENFLENBZ0ZULEVBNUZSLE9BeUVDLElBbkRPLEVBM0N2QixBQXNCYSxFQTRGVCxDQXBEVyxDQWlDUyxNQXZHdEIsQ0ErQkYsQ0FxREksVUFvQmEsRUE3R2pCLFNBOEd3QixlQXJERyxHQXNEdkIsMEJBbkM0QixtQkFvRVgsR0FqR0UsT0FXTixLQXVGRyxTQWpHUixDQVdaLElBdUZrQixLQWpHbEIsT0FrR2tCLFlBQ0csZUFDSixXQUNiLGlCQXpFSiIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL2NvbXBvbmVudHMvVGVzdEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9hc3NldHMvaG9tZS5zdmcnO1xuaW1wb3J0IFNob3dzIGZyb20gJy4uL2Fzc2V0cy9zaG93cy5zdmcnO1xuaW1wb3J0IENsaWVudHMgZnJvbSAnLi4vYXNzZXRzL2NsaWVudHMuc3ZnJztcbmltcG9ydCBNZWRpYSBmcm9tICcuLi9hc3NldHMvbWVkaWEuc3ZnJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2Fzc2V0cy9jb250YWN0LnN2Zyc7XG5pbXBvcnQgU29uZ0xpc3QgZnJvbSAnLi4vYXNzZXRzL3NvbmdsaXN0LnN2Zyc7XG5cbmNvbnN0IFRlc3RIZWFkZXIgPSBfID0+IHtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnbmF2QmFyJywge1xuICAgIHNjcm9sbGVkOiBzY3JvbGxlZCxcbiAgfSk7XG4gIHVzZUVmZmVjdChfID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSBfID0+IHtcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAxKSB7XG4gICAgICAgIHNldFNjcm9sbGVkKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2Nyb2xsZWQoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuIF8gPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake2NsYXNzZXN9IHdyYXBwZXIgc3Ryb2tlYH0+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgIHdpZHRoPSc2MCdcbiAgICAgICAgICAgIGhlaWdodD0nNjAnXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgNjAgNjAnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdNYW4nXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGdcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUwIDUwKSBzY2FsZSgtMC42OSAwLjY5KSByb3RhdGUoMCkgdHJhbnNsYXRlKC01MCAtNTApJ1xuICAgICAgICAgICAgLy8gc3R5bGU9J2ZpbGw6I0ZGRkZGRidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGZpbGw9JyNmMWYxZjEnXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICAgIHZlcnNpb249JzEuMSdcbiAgICAgICAgICAgICAgICB4PScwcHgnXG4gICAgICAgICAgICAgICAgeT0nMHB4J1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAxMDAgMTAwJ1xuICAgICAgICAgICAgICAgIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDEwMCAxMDAnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgZD0nTTMzLjIwMDE5NTMsOTAuNjczODI4MWMwLjE2NjUwMzktMC4xNjYwMTU2LDAuMjUtMC4zNjcxODc1LDAuMjUtMC41OTk2MDk0ICBjMC0wLjI2NzU3ODEtMC4wODM0OTYxLTAuNDgyNDIxOS0wLjI1LTAuNjUwMzkwNmMtMC4xNjY5OTIyLTAuMTY2MDE1Ni0wLjM2NjY5OTItMC4yNS0wLjYwMDA5NzctMC4yNSAgYy0wLjIwMDE5NTMsMC0wLjM4MzMwMDgsMC4wODM5ODQ0LTAuNTUwMjkzLDAuMjVjLTAuMTY2NTAzOSwwLjE2Nzk2ODgtMC4yNSwwLjM4MjgxMjUtMC4yNSwwLjY1MDM5MDYgIGMwLDAuMjMyNDIxOSwwLjA4MzQ5NjEsMC40MzM1OTM4LDAuMjUsMC41OTk2MDk0YzAuMTY2OTkyMiwwLjE2Nzk2ODgsMC4zNTAwOTc3LDAuMjUsMC41NTAyOTMsMC4yNSAgQzMyLjgzMzQ5NjEsOTAuOTIzODI4MSwzMy4wMzMyMDMxLDkwLjg0MTc5NjksMzMuMjAwMTk1Myw5MC42NzM4MjgxeiBNMzMuMzUwMDk3Nyw4NC43MjQ2MDk0ICBjLTAuMjMzMzk4NC0wLjE2Nzk2ODgtMC40NTAxOTUzLTAuMjUtMC42NDk5MDIzLTAuMjVjLTAuMTY2OTkyMiwwLTAuMzY2Njk5MiwwLjA4MjAzMTMtMC42MDAwOTc3LDAuMjUgIGMtMC4xNjY1MDM5LDAuMjMyNDIxOS0wLjI1LDAuNDQ5MjE4OC0wLjI1LDAuNjUwMzkwNmMwLDAuMTk5MjE4OCwwLjA4MzQ5NjEsMC4zODI4MTI1LDAuMjUsMC41NDg4MjgxICBjMC4xNjY1MDM5LDAuMTY3OTY4OCwwLjM2NjY5OTIsMC4yNSwwLjYwMDA5NzcsMC4yNWMwLjI2NjYwMTYsMCwwLjQ4MzM5ODQtMC4wODIwMzEzLDAuNjQ5OTAyMy0wLjI1ICBjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzQ5NjA5NCwwLjI1LTAuNTQ4ODI4MUMzMy42MDAwOTc3LDg1LjE3MzgyODEsMzMuNTE2NjAxNiw4NC45NTcwMzEzLDMzLjM1MDA5NzcsODQuNzI0NjA5NHogICBNMzMuNzAwMTk1Myw4MC42NzM4MjgxYzAtMC4yMzI0MjE5LTAuMDgzNDk2MS0wLjQzMzU5MzgtMC4yNS0wLjU5OTYwOTRjLTAuMTY2OTkyMi0wLjE2NjAxNTYtMC4zNjY2OTkyLTAuMjUtMC42MDAwOTc3LTAuMjUgIGMtMC4yNjY2MDE2LDAtMC40ODMzOTg0LDAuMDgzOTg0NC0wLjY0OTkwMjMsMC4yNWMtMC4xNjY5OTIyLDAuMTY2MDE1Ni0wLjI1LDAuMzY3MTg3NS0wLjI1LDAuNTk5NjA5NCAgYzAsMC4yMDExNzE5LDAuMDgzMDA3OCwwLjM4MjgxMjUsMC4yNSwwLjU1MDc4MTNjMC4xNjY1MDM5LDAuMTY2MDE1NiwwLjM4MzMwMDgsMC4yNSwwLjY0OTkwMjMsMC4yNSAgYzAuMjMzMzk4NCwwLDAuNDMzMTA1NS0wLjA4Mzk4NDQsMC42MDAwOTc3LTAuMjVDMzMuNjE2Njk5Miw4MS4wNTY2NDA2LDMzLjcwMDE5NTMsODAuODc1LDMzLjcwMDE5NTMsODAuNjczODI4MXogICBNMzMuNzk5ODA0Nyw3NS44NzVjMC0wLjIwMTE3MTktMC4wODMwMDc4LTAuMzg0NzY1Ni0wLjI1LTAuNTUwNzgxM2MtMC4xNjY1MDM5LTAuMTY2MDE1Ni0wLjM2NjIxMDktMC4yNS0wLjU5OTYwOTQtMC4yNSAgYy0wLjI2NjYwMTYsMC0wLjQ2Njc5NjksMC4wODM5ODQ0LTAuNjAwMDk3NywwLjI1Yy0wLjE2NjUwMzksMC4xMzI4MTI1LTAuMjUsMC4zMTY0MDYzLTAuMjUsMC41NTA3ODEzICBjMCwwLjI2NTYyNSwwLjA4MzQ5NjEsMC40ODI0MjE5LDAuMjUsMC42NDg0Mzc1YzAuMTY2NTAzOSwwLjE2Nzk2ODgsMC4zNjY2OTkyLDAuMjUsMC42MDAwOTc3LDAuMjUgIGMwLjE2NjUwMzksMCwwLjM2NjIxMDktMC4wODIwMzEzLDAuNTk5NjA5NC0wLjI1QzMzLjcxNjc5NjksNzYuMjkxMDE1NiwzMy43OTk4MDQ3LDc2LjA3NDIxODgsMzMuNzk5ODA0Nyw3NS44NzV6ICAgTTMzLjcwMDE5NTMsNzAuNjI1Yy0wLjEzMzc4OTEtMC4xNjc5Njg4LTAuMzMzNDk2MS0wLjI1LTAuNjAwMDk3Ny0wLjI1Yy0wLjIzMzM5ODQsMC0wLjQxNjUwMzksMC4wODIwMzEzLTAuNTUwMjkzLDAuMjUgIGMtMC4xNjY1MDM5LDAuMTMyODEyNS0wLjI1LDAuMzE2NDA2My0wLjI1LDAuNTQ4ODI4MWMwLDAuMjY3NTc4MSwwLjA4MzQ5NjEsMC40ODQzNzUsMC4yNSwwLjY1MDM5MDYgIGMwLjE2Njk5MjIsMC4xNjYwMTU2LDAuMzUwMDk3NywwLjI1LDAuNTUwMjkzLDAuMjVjMC4yMzMzOTg0LDAsMC40MzMxMDU1LTAuMDgzOTg0NCwwLjYwMDA5NzctMC4yNSAgYzAuMTY2NTAzOS0wLjE2NjAxNTYsMC4yNS0wLjM4MjgxMjUsMC4yNS0wLjY1MDM5MDZDMzMuOTUwMTk1Myw3MC45NDE0MDYzLDMzLjg2NjY5OTIsNzAuNzU3ODEyNSwzMy43MDAxOTUzLDcwLjYyNXogICBNNTkuMjk5ODA0Nyw0OC4wMjM0Mzc1Yy0wLjA2NjQwNjMsMC4yMzQzNzUtMC4wNDk4MDQ3LDAuNDUxMTcxOSwwLjA1MDI5MywwLjY1MDM5MDZMNTkuNSw0OC45NzQ2MDk0ICBjMC4yMDAxOTUzLDAuMjk4ODI4MSwwLjQ4MzM5ODQsMC40NDkyMTg4LDAuODUwMDk3NywwLjQ0OTIxODhMNjAuNzAwMTk1Myw0OS4zNzUgIGMwLjE5OTcwNy0wLjEwMTU2MjUsMC4zNDk2MDk0LTAuMjY3NTc4MSwwLjQ0OTcwNy0wLjVjMC4wNjY4OTQ1LTAuMjM0Mzc1LDAuMDUwMjkzLTAuNDUxMTcxOS0wLjA0OTgwNDctMC42NTAzOTA2ICBsLTAuMTQ5OTAyMy0wLjMwMDc4MTNjLTAuMjY2NjAxNi0wLjUtMC42NTAzOTA2LTAuNjMyODEyNS0xLjE1MDM5MDYtMC40MDAzOTA2ICBDNTkuNTMzMjAzMSw0Ny42MjUsNTkuMzY2Njk5Miw0Ny43OTEwMTU2LDU5LjI5OTgwNDcsNDguMDIzNDM3NXogTTU1LjIwMDE5NTMsMzguNDc0NjA5NCAgYy0wLjUsMC4yOTg4MjgxLTAuNjMzNzg5MSwwLjY4MzU5MzgtMC40MDAzOTA2LDEuMTUwMzkwNmwzLjM1MDA5NzcsNi41OTk2MDk0YzAuMTY2NTAzOSwwLjMzMjAzMTMsMC40MzM1OTM4LDAuNSwwLjgwMDI5MywwLjUgIEw1OS4yOTk4MDQ3LDQ2LjYyNWMwLjUzMzY5MTQtMC4yNjc1NzgxLDAuNjgzNTkzOC0wLjY1MDM5MDYsMC40NTAxOTUzLTEuMTUwMzkwNkw1Ni4zNTAwOTc3LDM4Ljg3NSAgQzU2LjA4MzQ5NjEsMzguMzc1LDU1LjcwMDE5NTMsMzguMjQwMjM0NCw1NS4yMDAxOTUzLDM4LjQ3NDYwOTR6IE02OS43MDAxOTUzLDIyLjIyNDYwOTQgIGMwLjE2NjUwMzktMC4yMzQzNzUsMC4yNS0wLjQ1MTE3MTksMC4yNS0wLjY1MDM5MDZjMC0wLjE2NjAxNTYtMC4wODM0OTYxLTAuMzY3MTg3NS0wLjI1LTAuNTk5NjA5NCAgYy0wLjIzMzM5ODQtMC4xNjc5Njg4LTAuNDUwMTk1My0wLjI1LTAuNjUwMzkwNi0wLjI1Yy0wLjE2NjUwMzksMC0wLjM2NjIxMDksMC4wODIwMzEzLTAuNTk5NjA5NCwwLjI1ICBjLTAuMTY2OTkyMiwwLjIzMjQyMTktMC4yNSwwLjQzMzU5MzgtMC4yNSwwLjU5OTYwOTRjMCwwLjE5OTIxODgsMC4wODMwMDc4LDAuNDE2MDE1NiwwLjI1LDAuNjUwMzkwNiAgYzAuMjMzMzk4NCwwLjE2NjAxNTYsMC40MzMxMDU1LDAuMjUsMC41OTk2MDk0LDAuMjVDNjkuMjUsMjIuNDc0NjA5NCw2OS40NjY3OTY5LDIyLjM5MDYyNSw2OS43MDAxOTUzLDIyLjIyNDYwOTR6ICAgTTIwLjY0OTkwMjMsMjguNzczNDM3NWwxLjU1MDI5MywxLjc1YzAuNTMzMjAzMSwwLjQzMzU5MzgsMS4yODMyMDMxLDAuODAwNzgxMywyLjI1LDEuMTAxNTYyNWwtOC41LDEwLjA0ODgyODEgIGwtMi4xMDAwOTc3LTEuNDQ5MjE4OEwyMC42NDk5MDIzLDI4Ljc3MzQzNzV6IE0yMi43NSwyNC4wMjM0Mzc1YzAuNjMzMzAwOC0wLjczMjQyMTksMS41LTEuMTY2MDE1NiwyLjYwMDA5NzctMS4yOTg4MjgxICBjMS4wNjY0MDYzLTAuMDk5NjA5NCwxLjk2NjMwODYsMC4xNTAzOTA2LDIuNjk5NzA3LDAuNzVjMC44MDAyOTMsMC42MzI4MTI1LDEuMjUsMS40NjY3OTY5LDEuMzUwMDk3NywyLjUgIHMtMC4xNjY1MDM5LDEuOTMzNTkzOC0wLjc5OTgwNDcsMi42OTkyMTg4Yy0wLjY2NjUwMzksMC44MzM5ODQ0LTEuNSwxLjMwMDc4MTMtMi41LDEuNDAwMzkwNkwyNS4yOTk4MDQ3LDMwLjEyNSAgYy0wLjc5OTgwNDctMC4xMDE1NjI1LTEuNDY2MzA4Ni0wLjQxNzk2ODgtMi0wLjk1MTE3MTljLTAuMzMzMDA3OC0wLjI2NTYyNS0wLjYxNjIxMDktMC42MTcxODc1LTAuODQ5NjA5NC0xLjA0ODgyODEgIGwtMC4wNTAyOTMtMC4wNTA3ODEzYy0wLjE2NjUwMzktMC4zNjcxODc1LTAuMjgzMjAzMS0wLjgxNjQwNjMtMC4zNTAwOTc3LTEuMzQ5NjA5NCAgQzIxLjk1MDE5NTMsMjUuNjU4MjAzMSwyMi4xODM1OTM4LDI0Ljc1NzgxMjUsMjIuNzUsMjQuMDIzNDM3NXogTTQ0LjE0OTkwMjMsMTEuMzc1ICBjLTAuNDMzMTA1NS0wLjMzMzk4NDQtMC44MzM0OTYxLTAuMjgzMjAzMS0xLjE5OTcwNywwLjE0ODQzNzVjLTAuMzMzNDk2MSwwLjQzMzU5MzgtMC4yODM2OTE0LDAuODMzOTg0NCwwLjE0OTkwMjMsMS4yMDExNzE5ICBsMC4zNTAwOTc3LDAuMzQ5NjA5NGMwLjQ2NjMwODYsMC40MDAzOTA2LDAuODQ5NjA5NCwwLjkxNjAxNTYsMS4xNDk5MDIzLDEuNTUwNzgxMyAgYzAuMTY2NTAzOSwwLjMzMjAzMTMsMC40MzMxMDU1LDAuNSwwLjc5OTgwNDcsMC41bDAuMzk5OTAyMy0wLjEwMTU2MjVjMC4yMDAxOTUzLTAuMDk5NjA5NCwwLjM1MDA5NzctMC4yNjU2MjUsMC40NTAxOTUzLTAuNSAgYzAuMDY2NDA2My0wLjIzMjQyMTksMC4wNDk4MDQ3LTAuNDQ5MjE4OC0wLjA0OTgwNDctMC42NDg0Mzc1Yy0wLjQ2Njc5NjktMC44MDA3ODEzLTAuOTY2Nzk2OS0xLjQ2Njc5NjktMS41LTIgIEM0NC41MzMyMDMxLDExLjY3MzgyODEsNDQuMzUwMDk3NywxMS41MDc4MTI1LDQ0LjE0OTkwMjMsMTEuMzc1eiBNMzQuMjAwMTk1Myw5LjIyNDYwOTQgIGMxLjQ2NjMwODYtMC45MDAzOTA2LDMuMTMzMzAwOC0xLjM0OTYwOTQsNS0xLjM0OTYwOTRjMi42MzMzMDA4LDAsNC44ODMzMDA4LDAuOTE2MDE1Niw2Ljc1LDIuNzUgIEM0Ny44MTY0MDYzLDEyLjU1NjY0MDYsNDguNzUsMTQuODA2NjQwNiw0OC43NSwxNy4zNzVjMCwwLjc2NTYyNS0wLjA4MzQ5NjEsMS41NDg4MjgxLTAuMjUsMi4zNDk2MDk0ICBjLTAuNDMzNTkzOCwxLjY5OTIxODgtMS4yODMyMDMxLDMuMTk5MjE4OC0yLjU0OTgwNDcsNC41Yy0xLjg2NjY5OTIsMS44MzIwMzEzLTQuMTE2Njk5MiwyLjc1LTYuNzUsMi43NSAgYy0yLjY2Njk5MjIsMC00LjkxNjk5MjItMC45MzM1OTM4LTYuNzUtMi44MDA3ODEzYy0xLjg2NjY5OTItMS44MzIwMzEzLTIuODAwMjkzLTQuMDk5NjA5NC0yLjgwMDI5My02Ljc5ODgyODEgIGMwLTIuNjAxNTYyNSwwLjkzMzU5MzgtNC44NTE1NjI1LDIuODAwMjkzLTYuNzVDMzMuMDE2NjAxNiwxMC4wMjM0Mzc1LDMzLjYwMDA5NzcsOS41NTY2NDA2LDM0LjIwMDE5NTMsOS4yMjQ2MDk0eiAgIE00MS4wNDk4MDQ3LDkuODc1bC0wLjY5OTcwNy0wLjEwMTU2MjVjLTAuMjMzMzk4NCwwLTAuNDMzNTkzOCwwLjA4Mzk4NDQtMC42MDAwOTc3LDAuMjUgIEMzOS41ODM0OTYxLDEwLjE5MTQwNjMsMzkuNSwxMC4zOTA2MjUsMzkuNSwxMC42MjVjMCwwLjIzMjQyMTksMC4wODM0OTYxLDAuNDQ5MjE4OCwwLjI1LDAuNjQ4NDM3NSAgYzAuMTY2NTAzOSwwLjE2Nzk2ODgsMC4zNjY2OTkyLDAuMjUsMC42MDAwOTc3LDAuMjVoMC4yNWwwLjI1LDAuMDUwNzgxM2MwLjM5OTkwMjMsMCwwLjY2NjUwMzktMC4yMTY3OTY5LDAuNzk5ODA0Ny0wLjY1MDM5MDYgIGMwLjA2Njg5NDUtMC4yMzI0MjE5LDAuMDMzNjkxNC0wLjQ0OTIxODgtMC4xMDAwOTc3LTAuNjUwMzkwNkM0MS40NTAxOTUzLDEwLjA3NDIxODgsNDEuMjgzMjAzMSw5Ljk0MTQwNjMsNDEuMDQ5ODA0Nyw5Ljg3NXogICBNODMuMzUwMDk3NywxMS4yMjQ2MDk0TDg2LDE4LjM3NUw1NS4xNDk5MDIzLDMzLjI3MzQzNzVDNTUuMjUsMzMuNDQxNDA2Myw1NS4zNTAwOTc3LDMzLjY0MDYyNSw1NS40NTAxOTUzLDMzLjg3NSAgbDMwLjY5OTcwNyw1OC4xNDg0Mzc1aC03LjYwMDA5NzdsLTE5LjQ0OTcwNy0zMmwtMjIuMDUwMjkzLDEyLjQ1MTE3MTkgIGMtMC4yNjY2MDE2LDAuMTY2MDE1Ni0wLjM5OTkwMjMsMC4zODI4MTI1LTAuMzk5OTAyMywwLjY1MDM5MDZsLTEuMjUsMTlsLTUuNzUtMC4xMDE1NjI1bDAuODAwMjkzLTIzLjE5OTIxODhsMTguNDQ5NzA3LTExLjI1ICBjMC4zOTk5MDIzLTAuMjMyNDIxOSwwLjUxNjYwMTYtMC41ODM5ODQ0LDAuMzUwMDk3Ny0xLjA1MDc4MTNsLTYuMTAwMDk3Ny0xNi4wNDg4MjgxYy0wLjE5OTcwNy0wLjQwMDM5MDYtMC4zNjY2OTkyLTAuNzM0Mzc1LTAuNS0xICBMMzIuNzUsNDkuMzc1TDIxLjA0OTgwNDcsMzguMTczODI4MWwzLjM1MDA5NzctNC4xOTkyMTg4TDMxLjI1LDQwLjg3NWMwLjIwMDE5NTMsMC4xOTkyMTg4LDAuNDE2NTAzOSwwLjI4MzIwMzEsMC42NDk5MDIzLDAuMjUgIGMwLjIzMzM5ODQsMCwwLjQ1MDE5NTMtMC4xMDE1NjI1LDAuNjQ5OTAyMy0wLjMwMDc4MTNsOS4xMDAwOTc3LTExTDgzLjM1MDA5NzcsMTEuMjI0NjA5NHogTTc0LjIwMDE5NTMsMTkuNTc0MjE4OCAgYzAtMC4xNjYwMTU2LTAuMDgzNDk2MS0wLjM2NzE4NzUtMC4yNS0wLjU5OTYwOTRjLTAuMjMzMzk4NC0wLjE2Nzk2ODgtMC40NTAxOTUzLTAuMjUtMC42NTAzOTA2LTAuMjUgIGMtMC4xNjY1MDM5LDAtMC4zNjYyMTA5LDAuMDgyMDMxMy0wLjU5OTYwOTQsMC4yNWMtMC4xNjY5OTIyLDAuMjMyNDIxOS0wLjI1LDAuNDMzNTkzOC0wLjI1LDAuNTk5NjA5NCAgYzAsMC4xOTkyMTg4LDAuMDgzMDA3OCwwLjQxNjAxNTYsMC4yNSwwLjY1MDM5MDZjMC4yMzMzOTg0LDAuMTY2MDE1NiwwLjQzMzEwNTUsMC4yNSwwLjU5OTYwOTQsMC4yNSAgYzAuMjAwMTk1MywwLDAuNDE2OTkyMi0wLjA4Mzk4NDQsMC42NTAzOTA2LTAuMjVDNzQuMTE2Njk5MiwxOS45OTAyMzQ0LDc0LjIwMDE5NTMsMTkuNzczNDM3NSw3NC4yMDAxOTUzLDE5LjU3NDIxODh6ICAgTTc3LjYwMDA5NzcsMTguNDc0NjA5NGMwLjE2NjUwMzksMCwwLjM2NjY5OTItMC4wODM5ODQ0LDAuNjAwMDk3Ny0wLjI1YzAuMTY2NTAzOS0wLjIzNDM3NSwwLjI1LTAuNDUxMTcxOSwwLjI1LTAuNjUwMzkwNiAgYzAtMC4xNjYwMTU2LTAuMDgzNDk2MS0wLjM2NzE4NzUtMC4yNS0wLjU5OTYwOTRjLTAuMjMzMzk4NC0wLjIwMTE3MTktMC40MzM1OTM4LTAuMzAwNzgxMy0wLjYwMDA5NzctMC4zMDA3ODEzICBjLTAuMjMzMzk4NCwwLTAuNDMzNTkzOCwwLjA5OTYwOTQtMC42MDAwOTc3LDAuMzAwNzgxM2MtMC4xNjY1MDM5LDAuMTY2MDE1Ni0wLjI1LDAuMzY3MTg3NS0wLjI1LDAuNTk5NjA5NCAgYzAsMC4yNjc1NzgxLDAuMDgzNDk2MSwwLjQ4MjQyMTksMC4yNSwwLjY1MDM5MDZDNzcuMTY2NTAzOSwxOC4zOTA2MjUsNzcuMzY2Njk5MiwxOC40NzQ2MDk0LDc3LjYwMDA5NzcsMTguNDc0NjA5NHogICBNODIuMzUwMDk3NywxNi4xNzM4MjgxYzAuMTY2NTAzOS0wLjE2NjAxNTYsMC4yNS0wLjM4MjgxMjUsMC4yNS0wLjY1MDM5MDZjMC0wLjIzMjQyMTktMC4wODM0OTYxLTAuNDMxNjQwNi0wLjI1LTAuNTk5NjA5NCAgYy0wLjE2NjUwMzktMC4xNjYwMTU2LTAuMzY2Njk5Mi0wLjI1LTAuNjAwMDk3Ny0wLjI1Yy0wLjIwMDE5NTMsMC0wLjM4MzMwMDgsMC4wODM5ODQ0LTAuNTQ5ODA0NywwLjI1ICBjLTAuMTY2OTkyMiwwLjE2Nzk2ODgtMC4yNSwwLjM2NzE4NzUtMC4yNSwwLjU5OTYwOTRjMCwwLjI2NzU3ODEsMC4wODMwMDc4LDAuNDg0Mzc1LDAuMjUsMC42NTAzOTA2ICBjMC4xNjY1MDM5LDAuMTY3OTY4OCwwLjM0OTYwOTQsMC4yNSwwLjU0OTgwNDcsMC4yNUM4MS45ODMzOTg0LDE2LjQyMzgyODEsODIuMTgzNTkzOCwxNi4zNDE3OTY5LDgyLjM1MDA5NzcsMTYuMTczODI4MXonXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGlkPSdtZW51LXRvZ2dsZScgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J21lbnUtdG9nZ2xlJyBjbGFzc05hbWU9J2xhYmVsLXRvZ2dsZSc+PC9sYWJlbD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL3Nob3dzJz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGE+U2hvd3M8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvbGlzdCc+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhPlNvbmcgTGlzdDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jbGllbnRzJz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGE+Q2xpZW50czwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9tZWRpYSc+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhPk1lZGlhPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5Db250YWN0PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhUd28nPlxuICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly90d2l0dGVyLmNvbS9nb29kZW5vdWdoa2JhbmQnPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgNTYuNjkzIDU2LjY5MydcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzU2LjY5M3B4J1xuICAgICAgICAgICAgICAgIGlkPSdMYXllcl8xJ1xuICAgICAgICAgICAgICAgIHZlcnNpb249JzEuMSdcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgNTYuNjkzIDU2LjY5MydcbiAgICAgICAgICAgICAgICB3aWR0aD0nMjVweCdcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzI1cHgnXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggZD0nTTUyLjgzNywxNS4wNjVjLTEuODExLDAuODA1LTMuNzYsMS4zNDgtNS44MDUsMS41OTFjMi4wODgtMS4yNSwzLjY4OS0zLjIzLDQuNDQ0LTUuNTkyYy0xLjk1MywxLjE1OS00LjExNSwyLTYuNDE4LDIuNDU0ICBjLTEuODQzLTEuOTY0LTQuNDctMy4xOTItNy4zNzctMy4xOTJjLTUuNTgxLDAtMTAuMTA2LDQuNTI1LTEwLjEwNiwxMC4xMDdjMCwwLjc5MSwwLjA4OSwxLjU2MiwwLjI2MiwyLjMwMyAgYy04LjQtMC40MjItMTUuODQ4LTQuNDQ1LTIwLjgzMy0xMC41NmMtMC44NywxLjQ5Mi0xLjM2OCwzLjIyOC0xLjM2OCw1LjA4MmMwLDMuNTA2LDEuNzg0LDYuNiw0LjQ5Niw4LjQxMiAgYy0xLjY1Ni0wLjA1My0zLjIxNS0wLjUwOC00LjU3OC0xLjI2NWMtMC4wMDEsMC4wNDItMC4wMDEsMC4wODUtMC4wMDEsMC4xMjhjMCw0Ljg5NiwzLjQ4NCw4Ljk4LDguMTA4LDkuOTEgIGMtMC44NDgsMC4yMy0xLjc0MSwwLjM1NC0yLjY2MywwLjM1NGMtMC42NTIsMC0xLjI4NS0wLjA2My0xLjkwMi0wLjE4MmMxLjI4Nyw0LjAxNSw1LjAxOSw2LjkzOCw5LjQ0MSw3LjAxOSAgYy0zLjQ1OSwyLjcxMS03LjgxNiw0LjMyNy0xMi41NTIsNC4zMjdjLTAuODE1LDAtMS42Mi0wLjA0OC0yLjQxMS0wLjE0MmM0LjQ3NCwyLjg2OSw5Ljc4Niw0LjU0MSwxNS40OTMsNC41NDEgIGMxOC41OTEsMCwyOC43NTYtMTUuNCwyOC43NTYtMjguNzU2YzAtMC40MzgtMC4wMDktMC44NzUtMC4wMjgtMS4zMDlDNDkuNzY5LDE4Ljg3Myw1MS40ODMsMTcuMDkyLDUyLjgzNywxNS4wNjV6JyAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvR29vZEVub3VnaExJVkVLQVJBT0tFLyc+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBlbmFibGUtYmFja2dyb3VuZD0nbmV3IDAgMCA1Ni42OTMgNTYuNjkzJ1xuICAgICAgICAgICAgICAgIGhlaWdodD0nNTYuNjkzcHgnXG4gICAgICAgICAgICAgICAgaWQ9J0xheWVyXzEnXG4gICAgICAgICAgICAgICAgdmVyc2lvbj0nMS4xJ1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1Ni42OTMgNTYuNjkzJ1xuICAgICAgICAgICAgICAgIHdpZHRoPScyNXB4J1xuICAgICAgICAgICAgICAgIGhlaWdodD0nMjVweCdcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNDAuNDMsMjEuNzM5aC03LjY0NXYtNS4wMTRjMC0xLjg4MywxLjI0OC0yLjMyMiwyLjEyNy0yLjMyMmMwLjg3NywwLDUuMzk1LDAsNS4zOTUsMFY2LjEyNWwtNy40My0wLjAyOSAgYy04LjI0OCwwLTEwLjEyNSw2LjE3NC0xMC4xMjUsMTAuMTI1djUuNTE4aC00Ljc3djguNTNoNC43N2MwLDEwLjk0NywwLDI0LjEzNywwLDI0LjEzN2gxMC4wMzNjMCwwLDAtMTMuMzIsMC0yNC4xMzdoNi43NyAgTDQwLjQzLDIxLjczOXonIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9nb29kZW5vdWdobGl2ZWthcmFva2UvJz5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgICBmaWxsPScjRjFmMWYxJ1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1MCA1MCdcbiAgICAgICAgICAgICAgICB3aWR0aD0nMjVweCdcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzI1cHgnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00gMTYgMyBDIDguODMgMyAzIDguODMgMyAxNiBMIDMgMzQgQyAzIDQxLjE3IDguODMgNDcgMTYgNDcgTCAzNCA0NyBDIDQxLjE3IDQ3IDQ3IDQxLjE3IDQ3IDM0IEwgNDcgMTYgQyA0NyA4LjgzIDQxLjE3IDMgMzQgMyBMIDE2IDMgeiBNIDM3IDExIEMgMzguMSAxMSAzOSAxMS45IDM5IDEzIEMgMzkgMTQuMSAzOC4xIDE1IDM3IDE1IEMgMzUuOSAxNSAzNSAxNC4xIDM1IDEzIEMgMzUgMTEuOSAzNS45IDExIDM3IDExIHogTSAyNSAxNCBDIDMxLjA3IDE0IDM2IDE4LjkzIDM2IDI1IEMgMzYgMzEuMDcgMzEuMDcgMzYgMjUgMzYgQyAxOC45MyAzNiAxNCAzMS4wNyAxNCAyNSBDIDE0IDE4LjkzIDE4LjkzIDE0IDI1IDE0IHogTSAyNSAxNiBDIDIwLjA0IDE2IDE2IDIwLjA0IDE2IDI1IEMgMTYgMjkuOTYgMjAuMDQgMzQgMjUgMzQgQyAyOS45NiAzNCAzNCAyOS45NiAzNCAyNSBDIDM0IDIwLjA0IDI5Ljk2IDE2IDI1IDE2IHonIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nd3JhcHBlcic+PC9oZWFkZXI+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIGZpbGw6ICNmMWYxZjE7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgfVxuXG4gICAgICBzdmc6aG92ZXIge1xuICAgICAgICBmaWxsOiAjNzYxZjZiO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBcblxuICAgICAgbmF2IHVsIGE6aG92ZXIge1xuICAgICAgIGNvbG9yOiAjZmVlO1xuICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICM3NjFmNmIsIDAgMCAwLjVlbSAjNzYxZjZiLFxuICAgICAgICAgIDAgMCAwLjFlbSAjNzYxZjZiLCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICB9XG5cbiAgICAubmF2QmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIyOSw1Miw2NSk7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdkJhci5zY3JvbGxlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjksNTIsNjUsIDAuOTgpIWltcG9ydGFudDtcbiAgICAgICAgICB6LWluZGV4OiAzMDA7XG4gICAgICAgIH1cblxuICAgICAgLnNpbmdNYW4ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwIDFlbSAwO1xuICAgICAgfVxuXG4gICAgICAubmF2QmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgei1pbmRleDogMzAwO1xuICAgICAgfVxuXG4gICAgICAubG9nbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBtYXJnaW46IDFlbSAwO1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICB9XG5cbiAgICAgIG5hdiB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgfVxuXG4gICAgICBuYXYgdWwgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjbWVudS10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubGFiZWwtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxNXB4KSB7XG5cbiAgICAgICAgICBuYXYgLndyYXBwZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNSwzLDIyLCAwLjk4KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmF2IHVsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAyJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICAgbmF2IHVsIGEge1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7IFxuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjowIDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNSwzLDIyLCAwLjk4KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI21lbnUtdG9nZ2xlOmNoZWNrZWQgfiB1bCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NXZoO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tIDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sYWJlbC10b2dnbGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICB0byBib3R0b20sXG4gICAgICAgICAgICAgICNmMWYxZjEgMCUsXG4gICAgICAgICAgICAgICNmMWYxZjEgMjAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAyMCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDQwJSxcbiAgICAgICAgICAgICAgI2YxZjFmMSA0MCUsXG4gICAgICAgICAgICAgICNmMWYxZjEgNjAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA2MCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDgwJSxcbiAgICAgICAgICAgICAgI2YxZjFmMSA4MCUsXG4gICAgICAgICAgICAgICNmMWYxZjEgMTAwJVxuICAgICAgICAgICAgKTsgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TestHeader);

/***/ })

})
//# sourceMappingURL=shows.js.a40c9deb2f185f790e8c.hot-update.js.map