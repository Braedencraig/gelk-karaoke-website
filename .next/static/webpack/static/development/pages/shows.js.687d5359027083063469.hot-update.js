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
    className: "jsx-160667042" + " " + "".concat(classes, " wrapper stroke"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    className: "jsx-160667042" + " " + 'singMan',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("g", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
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
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M33.2001953,90.6738281c0.1665039-0.1660156,0.25-0.3671875,0.25-0.5996094  c0-0.2675781-0.0834961-0.4824219-0.25-0.6503906c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2001953,0-0.3833008,0.0839844-0.550293,0.25c-0.1665039,0.1679688-0.25,0.3828125-0.25,0.6503906  c0,0.2324219,0.0834961,0.4335938,0.25,0.5996094c0.1669922,0.1679688,0.3500977,0.25,0.550293,0.25  C32.8334961,90.9238281,33.0332031,90.8417969,33.2001953,90.6738281z M33.3500977,84.7246094  c-0.2333984-0.1679688-0.4501953-0.25-0.6499023-0.25c-0.1669922,0-0.3666992,0.0820313-0.6000977,0.25  c-0.1665039,0.2324219-0.25,0.4492188-0.25,0.6503906c0,0.1992188,0.0834961,0.3828125,0.25,0.5488281  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25c0.2666016,0,0.4833984-0.0820313,0.6499023-0.25  c0.1665039-0.1660156,0.25-0.3496094,0.25-0.5488281C33.6000977,85.1738281,33.5166016,84.9570313,33.3500977,84.7246094z   M33.7001953,80.6738281c0-0.2324219-0.0834961-0.4335938-0.25-0.5996094c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2666016,0-0.4833984,0.0839844-0.6499023,0.25c-0.1669922,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2011719,0.0830078,0.3828125,0.25,0.5507813c0.1665039,0.1660156,0.3833008,0.25,0.6499023,0.25  c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25C33.6166992,81.0566406,33.7001953,80.875,33.7001953,80.6738281z   M33.7998047,75.875c0-0.2011719-0.0830078-0.3847656-0.25-0.5507813c-0.1665039-0.1660156-0.3662109-0.25-0.5996094-0.25  c-0.2666016,0-0.4667969,0.0839844-0.6000977,0.25c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5507813  c0,0.265625,0.0834961,0.4824219,0.25,0.6484375c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25  c0.1665039,0,0.3662109-0.0820313,0.5996094-0.25C33.7167969,76.2910156,33.7998047,76.0742188,33.7998047,75.875z   M33.7001953,70.625c-0.1337891-0.1679688-0.3334961-0.25-0.6000977-0.25c-0.2333984,0-0.4165039,0.0820313-0.550293,0.25  c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5488281c0,0.2675781,0.0834961,0.484375,0.25,0.6503906  c0.1669922,0.1660156,0.3500977,0.25,0.550293,0.25c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25  c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906C33.9501953,70.9414063,33.8666992,70.7578125,33.7001953,70.625z   M59.2998047,48.0234375c-0.0664063,0.234375-0.0498047,0.4511719,0.050293,0.6503906L59.5,48.9746094  c0.2001953,0.2988281,0.4833984,0.4492188,0.8500977,0.4492188L60.7001953,49.375  c0.199707-0.1015625,0.3496094-0.2675781,0.449707-0.5c0.0668945-0.234375,0.050293-0.4511719-0.0498047-0.6503906  l-0.1499023-0.3007813c-0.2666016-0.5-0.6503906-0.6328125-1.1503906-0.4003906  C59.5332031,47.625,59.3666992,47.7910156,59.2998047,48.0234375z M55.2001953,38.4746094  c-0.5,0.2988281-0.6337891,0.6835938-0.4003906,1.1503906l3.3500977,6.5996094c0.1665039,0.3320313,0.4335938,0.5,0.800293,0.5  L59.2998047,46.625c0.5336914-0.2675781,0.6835938-0.6503906,0.4501953-1.1503906L56.3500977,38.875  C56.0834961,38.375,55.7001953,38.2402344,55.2001953,38.4746094z M69.7001953,22.2246094  c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094  c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25  c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906  c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25C69.25,22.4746094,69.4667969,22.390625,69.7001953,22.2246094z   M20.6499023,28.7734375l1.550293,1.75c0.5332031,0.4335938,1.2832031,0.8007813,2.25,1.1015625l-8.5,10.0488281  l-2.1000977-1.4492188L20.6499023,28.7734375z M22.75,24.0234375c0.6333008-0.7324219,1.5-1.1660156,2.6000977-1.2988281  c1.0664063-0.0996094,1.9663086,0.1503906,2.699707,0.75c0.800293,0.6328125,1.25,1.4667969,1.3500977,2.5  s-0.1665039,1.9335938-0.7998047,2.6992188c-0.6665039,0.8339844-1.5,1.3007813-2.5,1.4003906L25.2998047,30.125  c-0.7998047-0.1015625-1.4663086-0.4179688-2-0.9511719c-0.3330078-0.265625-0.6162109-0.6171875-0.8496094-1.0488281  l-0.050293-0.0507813c-0.1665039-0.3671875-0.2832031-0.8164063-0.3500977-1.3496094  C21.9501953,25.6582031,22.1835938,24.7578125,22.75,24.0234375z M44.1499023,11.375  c-0.4331055-0.3339844-0.8334961-0.2832031-1.199707,0.1484375c-0.3334961,0.4335938-0.2836914,0.8339844,0.1499023,1.2011719  l0.3500977,0.3496094c0.4663086,0.4003906,0.8496094,0.9160156,1.1499023,1.5507813  c0.1665039,0.3320313,0.4331055,0.5,0.7998047,0.5l0.3999023-0.1015625c0.2001953-0.0996094,0.3500977-0.265625,0.4501953-0.5  c0.0664063-0.2324219,0.0498047-0.4492188-0.0498047-0.6484375c-0.4667969-0.8007813-0.9667969-1.4667969-1.5-2  C44.5332031,11.6738281,44.3500977,11.5078125,44.1499023,11.375z M34.2001953,9.2246094  c1.4663086-0.9003906,3.1333008-1.3496094,5-1.3496094c2.6333008,0,4.8833008,0.9160156,6.75,2.75  C47.8164063,12.5566406,48.75,14.8066406,48.75,17.375c0,0.765625-0.0834961,1.5488281-0.25,2.3496094  c-0.4335938,1.6992188-1.2832031,3.1992188-2.5498047,4.5c-1.8666992,1.8320313-4.1166992,2.75-6.75,2.75  c-2.6669922,0-4.9169922-0.9335938-6.75-2.8007813c-1.8666992-1.8320313-2.800293-4.0996094-2.800293-6.7988281  c0-2.6015625,0.9335938-4.8515625,2.800293-6.75C33.0166016,10.0234375,33.6000977,9.5566406,34.2001953,9.2246094z   M41.0498047,9.875l-0.699707-0.1015625c-0.2333984,0-0.4335938,0.0839844-0.6000977,0.25  C39.5834961,10.1914063,39.5,10.390625,39.5,10.625c0,0.2324219,0.0834961,0.4492188,0.25,0.6484375  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25h0.25l0.25,0.0507813c0.3999023,0,0.6665039-0.2167969,0.7998047-0.6503906  c0.0668945-0.2324219,0.0336914-0.4492188-0.1000977-0.6503906C41.4501953,10.0742188,41.2832031,9.9414063,41.0498047,9.875z   M83.3500977,11.2246094L86,18.375L55.1499023,33.2734375C55.25,33.4414063,55.3500977,33.640625,55.4501953,33.875  l30.699707,58.1484375h-7.6000977l-19.449707-32l-22.050293,12.4511719  c-0.2666016,0.1660156-0.3999023,0.3828125-0.3999023,0.6503906l-1.25,19l-5.75-0.1015625l0.800293-23.1992188l18.449707-11.25  c0.3999023-0.2324219,0.5166016-0.5839844,0.3500977-1.0507813l-6.1000977-16.0488281c-0.199707-0.4003906-0.3666992-0.734375-0.5-1  L32.75,49.375L21.0498047,38.1738281l3.3500977-4.1992188L31.25,40.875c0.2001953,0.1992188,0.4165039,0.2832031,0.6499023,0.25  c0.2333984,0,0.4501953-0.1015625,0.6499023-0.3007813l9.1000977-11L83.3500977,11.2246094z M74.2001953,19.5742188  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25  c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094  c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25  c0.2001953,0,0.4169922-0.0839844,0.6503906-0.25C74.1166992,19.9902344,74.2001953,19.7734375,74.2001953,19.5742188z   M77.6000977,18.4746094c0.1665039,0,0.3666992-0.0839844,0.6000977-0.25c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.2011719-0.4335938-0.3007813-0.6000977-0.3007813  c-0.2333984,0-0.4335938,0.0996094-0.6000977,0.3007813c-0.1665039,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2675781,0.0834961,0.4824219,0.25,0.6503906C77.1665039,18.390625,77.3666992,18.4746094,77.6000977,18.4746094z   M82.3500977,16.1738281c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906c0-0.2324219-0.0834961-0.4316406-0.25-0.5996094  c-0.1665039-0.1660156-0.3666992-0.25-0.6000977-0.25c-0.2001953,0-0.3833008,0.0839844-0.5498047,0.25  c-0.1669922,0.1679688-0.25,0.3671875-0.25,0.5996094c0,0.2675781,0.0830078,0.484375,0.25,0.6503906  c0.1665039,0.1679688,0.3496094,0.25,0.5498047,0.25C81.9833984,16.4238281,82.1835938,16.3417969,82.3500977,16.1738281z",
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })))), __jsx("input", {
    type: "checkbox",
    id: "menu-toggle",
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "menu-toggle",
    className: "jsx-160667042" + " " + 'label-toggle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/shows",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Shows"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Song List"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/clients",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Clients"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Media"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Contact"))), __jsx("div", {
    className: "jsx-160667042" + " " + 'flexTwo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("a", {
    href: "https://twitter.com/goodenoughkband",
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("svg", (_jsx = {
    "enable-background": "new 0 0 56.693 56.693",
    height: "56.693px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 56.693 56.693",
    width: "25px"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "height", "25px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "xmlns", "http://www.w3.org/2000/svg"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-160667042"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 102
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx("path", {
    d: "M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z",
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), __jsx("a", {
    href: "https://www.facebook.com/groups/GoodEnoughLIVEKARAOKE/",
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("svg", (_jsx2 = {
    "enable-background": "new 0 0 56.693 56.693",
    height: "56.693px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 56.693 56.693",
    width: "25px"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "height", "25px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "xmlns", "http://www.w3.org/2000/svg"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "className", "jsx-160667042"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 116
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), _jsx2), __jsx("path", {
    d: "M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z",
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }))), __jsx("a", {
    href: "https://www.instagram.com/goodenoughlivekaraoke/",
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#F1f1f1",
    viewBox: "0 0 50 50",
    width: "25px",
    height: "25px",
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, ' ', __jsx("path", {
    d: "M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z",
    className: "jsx-160667042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })))))), __jsx("header", {
    className: "jsx-160667042" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "160667042",
    __self: this
  }, "svg.jsx-160667042{fill:#f1f1f1;-webkit-transition:all 0.2s;transition:all 0.2s;}svg.jsx-160667042:hover{fill:#761f6b;}nav.jsx-160667042 ul.jsx-160667042 a.jsx-160667042:hover{color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.navBar.jsx-160667042{-webkit-transition:background-color 0.2s;transition:background-color 0.2s;background:none;}.navBar.scrolled.jsx-160667042{background:rgba(25,3,22,0.98)!important;z-index:300;}.singMan.jsx-160667042{-webkit-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);}h1.jsx-160667042{font-size:3em;padding:3em 0 1em 0;}.navBar.jsx-160667042{position:fixed;right:0;left:0;top:0;padding:5px 0;z-index:300;}.logo.jsx-160667042{background-color:#f1f1f1;border-radius:50px;display:inline-block;height:45px;margin:1em 0;width:45px;}.wrapper.jsx-160667042{margin:0 auto;max-width:1400px;padding:0 5%;}nav.jsx-160667042 ul.jsx-160667042{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;list-style-type:none;width:65%;}nav.jsx-160667042 ul.jsx-160667042 a.jsx-160667042{font-size:20px;font-family:'Concert One',cursive;color:#f1f1f1;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;cursor:pointer;}li.jsx-160667042{display:inline-block;}#menu-toggle.jsx-160667042{display:none;}.label-toggle.jsx-160667042{display:none;}.wrapper.jsx-160667042{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:1015px){nav.jsx-160667042 .wrapper.jsx-160667042{background:rgba(25,3,22,0.98)!important;}nav.jsx-160667042 ul.jsx-160667042{width:100%;padding:0 2%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}nav.jsx-160667042 ul.jsx-160667042 a.jsx-160667042{color:#f1f1f1;font-size:60px;}svg.jsx-160667042{width:50px;height:50px;margin:0 20px;}ul.jsx-160667042{background:rgba(25,3,22,0.98)!important;display:block;height:0;list-style-type:none;opacity:0;text-align:center;width:100%;visibility:hidden;}li.jsx-160667042{color:#f1f1f1;display:block;font-size:1.5em;margin:5px 0;}#menu-toggle.jsx-160667042:checked~ul.jsx-160667042{opacity:1;height:65vh;visibility:visible;padding-bottom:100%;margin:0 auto;margin-top:0px;}.label-toggle.jsx-160667042{background:linear-gradient( to bottom, #f1f1f1 0%, #f1f1f1 20%, transparent 20%, transparent 40%, #f1f1f1 40%, #f1f1f1 60%, transparent 60%, transparent 80%, #f1f1f1 80%, #f1f1f1 100% );cursor:pointer;display:block;float:right;height:35px;margin-top:1em;width:35px;}.wrapper.jsx-160667042{display:block;}}@media screen and (max-width:1000px){ul.jsx-160667042{-webkit-transition:all 1s ease;transition:all 1s ease;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9UZXN0SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdKa0IsQUFJc0IsQUFLQSxBQUtILEFBTXlCLEFBSVEsQUFLakIsQUFJWixBQUtDLEFBU1UsQUFTWCxBQU1ELEFBT0UsQUFVTSxBQUlSLEFBSUEsQUFJTSxBQVEwQixBQUk5QixBQU1HLEFBS0gsQUFNOEIsQUFXM0IsQUFPSixBQXFCVCxBQVdhLEFBT08sVUF0Q1QsQ0EzSG9CLEFBd0ZuQixBQVdELEVBOUdJLEFBS3RCLEFBMEVBLEFBSUEsQ0F0RHNCLEFBdUJILEFBcURFLEFBc0JELEFBdUNoQixDQXBJTSxBQStCMkIsTUFVckMsQ0E0RHlCLENBcEdoQixBQTRFVSxDQVhTLENBekRQLEdBcUZDLENBdEJsQixDQXRFSSxDQWlCTyxHQXZCZixFQU9nQixDQTJFWixHQTVGWSxBQTJFWixBQXFCZ0IsQ0FvQkssR0E1RkYsQUFVdkIsQUEyRW1CLEtBL0RILENBNUJGLEVBakJaLEVBZ0dhLEFBd0RiLEdBM0NFLElBaklKLEFBd0lvQixDQWxHcEIsQ0E0QjJCLEFBbURBLEVBekViLFNBN0JNLEFBMENZLENBZ0ZYLEVBNUZOLE9BeUVDLElBbkRPLEVBbkRyQixBQVFGLEFBc0JhLEFBNEZULEdBcERXLENBaUNTLE9BeEV4QixDQXFESSxVQW9CYSxFQTdHakIsU0E4R3dCLGVBckRHLEdBc0R2QiwwQkFuQzRCLG1CQW9FWCxHQWpHRSxPQVdOLEtBdUZHLFNBakdSLENBV1osSUF1RmtCLEtBakdsQixPQWtHa0IsWUFDRyxlQUNKLFdBQ2IsaUJBekVKIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9UZXN0SGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lIGZyb20gJy4uL2Fzc2V0cy9ob21lLnN2Zyc7XG5pbXBvcnQgU2hvd3MgZnJvbSAnLi4vYXNzZXRzL3Nob3dzLnN2Zyc7XG5pbXBvcnQgQ2xpZW50cyBmcm9tICcuLi9hc3NldHMvY2xpZW50cy5zdmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4uL2Fzc2V0cy9tZWRpYS5zdmcnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vYXNzZXRzL2NvbnRhY3Quc3ZnJztcbmltcG9ydCBTb25nTGlzdCBmcm9tICcuLi9hc3NldHMvc29uZ2xpc3Quc3ZnJztcblxuY29uc3QgVGVzdEhlYWRlciA9IF8gPT4ge1xuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCduYXZCYXInLCB7XG4gICAgc2Nyb2xsZWQ6IHNjcm9sbGVkLFxuICB9KTtcbiAgdXNlRWZmZWN0KF8gPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IF8gPT4ge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEpIHtcbiAgICAgICAgc2V0U2Nyb2xsZWQodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTY3JvbGxlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gXyA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlc30gd3JhcHBlciBzdHJva2VgfT5cbiAgICAgICAgey8qIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9J2dlbGtJbWFnZUxvZ28nXG4gICAgICAgICAgc3JjPScvc2luZzIucG5nJ1xuICAgICAgICAgIGFsdD0nZ29vZCBlbm91Z2ggbGl2ZSBrYXJhb2tlIG5lb24gbG9nbydcbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgd2lkdGg9JzYwJ1xuICAgICAgICAgIGhlaWdodD0nNjAnXG4gICAgICAgICAgdmlld0JveD0nMCAwIDYwIDYwJ1xuICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ01hbidcbiAgICAgICAgPlxuICAgICAgICAgIDxnXG4gICAgICAgICAgLy8gdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTAgNTApIHNjYWxlKC0wLjY5IDAuNjkpIHJvdGF0ZSgwKSB0cmFuc2xhdGUoLTUwIC01MCknXG4gICAgICAgICAgLy8gc3R5bGU9J2ZpbGw6I0ZGRkZGRidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGZpbGw9JyNmMWYxZjEnXG4gICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgdmVyc2lvbj0nMS4xJ1xuICAgICAgICAgICAgICB4PScwcHgnXG4gICAgICAgICAgICAgIHk9JzBweCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDEwMCAxMDAnXG4gICAgICAgICAgICAgIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDEwMCAxMDAnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbC1ydWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgIGNsaXAtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICBkPSdNMzMuMjAwMTk1Myw5MC42NzM4MjgxYzAuMTY2NTAzOS0wLjE2NjAxNTYsMC4yNS0wLjM2NzE4NzUsMC4yNS0wLjU5OTYwOTQgIGMwLTAuMjY3NTc4MS0wLjA4MzQ5NjEtMC40ODI0MjE5LTAuMjUtMC42NTAzOTA2Yy0wLjE2Njk5MjItMC4xNjYwMTU2LTAuMzY2Njk5Mi0wLjI1LTAuNjAwMDk3Ny0wLjI1ICBjLTAuMjAwMTk1MywwLTAuMzgzMzAwOCwwLjA4Mzk4NDQtMC41NTAyOTMsMC4yNWMtMC4xNjY1MDM5LDAuMTY3OTY4OC0wLjI1LDAuMzgyODEyNS0wLjI1LDAuNjUwMzkwNiAgYzAsMC4yMzI0MjE5LDAuMDgzNDk2MSwwLjQzMzU5MzgsMC4yNSwwLjU5OTYwOTRjMC4xNjY5OTIyLDAuMTY3OTY4OCwwLjM1MDA5NzcsMC4yNSwwLjU1MDI5MywwLjI1ICBDMzIuODMzNDk2MSw5MC45MjM4MjgxLDMzLjAzMzIwMzEsOTAuODQxNzk2OSwzMy4yMDAxOTUzLDkwLjY3MzgyODF6IE0zMy4zNTAwOTc3LDg0LjcyNDYwOTQgIGMtMC4yMzMzOTg0LTAuMTY3OTY4OC0wLjQ1MDE5NTMtMC4yNS0wLjY0OTkwMjMtMC4yNWMtMC4xNjY5OTIyLDAtMC4zNjY2OTkyLDAuMDgyMDMxMy0wLjYwMDA5NzcsMC4yNSAgYy0wLjE2NjUwMzksMC4yMzI0MjE5LTAuMjUsMC40NDkyMTg4LTAuMjUsMC42NTAzOTA2YzAsMC4xOTkyMTg4LDAuMDgzNDk2MSwwLjM4MjgxMjUsMC4yNSwwLjU0ODgyODEgIGMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzY2Njk5MiwwLjI1LDAuNjAwMDk3NywwLjI1YzAuMjY2NjAxNiwwLDAuNDgzMzk4NC0wLjA4MjAzMTMsMC42NDk5MDIzLTAuMjUgIGMwLjE2NjUwMzktMC4xNjYwMTU2LDAuMjUtMC4zNDk2MDk0LDAuMjUtMC41NDg4MjgxQzMzLjYwMDA5NzcsODUuMTczODI4MSwzMy41MTY2MDE2LDg0Ljk1NzAzMTMsMzMuMzUwMDk3Nyw4NC43MjQ2MDk0eiAgIE0zMy43MDAxOTUzLDgwLjY3MzgyODFjMC0wLjIzMjQyMTktMC4wODM0OTYxLTAuNDMzNTkzOC0wLjI1LTAuNTk5NjA5NGMtMC4xNjY5OTIyLTAuMTY2MDE1Ni0wLjM2NjY5OTItMC4yNS0wLjYwMDA5NzctMC4yNSAgYy0wLjI2NjYwMTYsMC0wLjQ4MzM5ODQsMC4wODM5ODQ0LTAuNjQ5OTAyMywwLjI1Yy0wLjE2Njk5MjIsMC4xNjYwMTU2LTAuMjUsMC4zNjcxODc1LTAuMjUsMC41OTk2MDk0ICBjMCwwLjIwMTE3MTksMC4wODMwMDc4LDAuMzgyODEyNSwwLjI1LDAuNTUwNzgxM2MwLjE2NjUwMzksMC4xNjYwMTU2LDAuMzgzMzAwOCwwLjI1LDAuNjQ5OTAyMywwLjI1ICBjMC4yMzMzOTg0LDAsMC40MzMxMDU1LTAuMDgzOTg0NCwwLjYwMDA5NzctMC4yNUMzMy42MTY2OTkyLDgxLjA1NjY0MDYsMzMuNzAwMTk1Myw4MC44NzUsMzMuNzAwMTk1Myw4MC42NzM4MjgxeiAgIE0zMy43OTk4MDQ3LDc1Ljg3NWMwLTAuMjAxMTcxOS0wLjA4MzAwNzgtMC4zODQ3NjU2LTAuMjUtMC41NTA3ODEzYy0wLjE2NjUwMzktMC4xNjYwMTU2LTAuMzY2MjEwOS0wLjI1LTAuNTk5NjA5NC0wLjI1ICBjLTAuMjY2NjAxNiwwLTAuNDY2Nzk2OSwwLjA4Mzk4NDQtMC42MDAwOTc3LDAuMjVjLTAuMTY2NTAzOSwwLjEzMjgxMjUtMC4yNSwwLjMxNjQwNjMtMC4yNSwwLjU1MDc4MTMgIGMwLDAuMjY1NjI1LDAuMDgzNDk2MSwwLjQ4MjQyMTksMC4yNSwwLjY0ODQzNzVjMC4xNjY1MDM5LDAuMTY3OTY4OCwwLjM2NjY5OTIsMC4yNSwwLjYwMDA5NzcsMC4yNSAgYzAuMTY2NTAzOSwwLDAuMzY2MjEwOS0wLjA4MjAzMTMsMC41OTk2MDk0LTAuMjVDMzMuNzE2Nzk2OSw3Ni4yOTEwMTU2LDMzLjc5OTgwNDcsNzYuMDc0MjE4OCwzMy43OTk4MDQ3LDc1Ljg3NXogICBNMzMuNzAwMTk1Myw3MC42MjVjLTAuMTMzNzg5MS0wLjE2Nzk2ODgtMC4zMzM0OTYxLTAuMjUtMC42MDAwOTc3LTAuMjVjLTAuMjMzMzk4NCwwLTAuNDE2NTAzOSwwLjA4MjAzMTMtMC41NTAyOTMsMC4yNSAgYy0wLjE2NjUwMzksMC4xMzI4MTI1LTAuMjUsMC4zMTY0MDYzLTAuMjUsMC41NDg4MjgxYzAsMC4yNjc1NzgxLDAuMDgzNDk2MSwwLjQ4NDM3NSwwLjI1LDAuNjUwMzkwNiAgYzAuMTY2OTkyMiwwLjE2NjAxNTYsMC4zNTAwOTc3LDAuMjUsMC41NTAyOTMsMC4yNWMwLjIzMzM5ODQsMCwwLjQzMzEwNTUtMC4wODM5ODQ0LDAuNjAwMDk3Ny0wLjI1ICBjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzgyODEyNSwwLjI1LTAuNjUwMzkwNkMzMy45NTAxOTUzLDcwLjk0MTQwNjMsMzMuODY2Njk5Miw3MC43NTc4MTI1LDMzLjcwMDE5NTMsNzAuNjI1eiAgIE01OS4yOTk4MDQ3LDQ4LjAyMzQzNzVjLTAuMDY2NDA2MywwLjIzNDM3NS0wLjA0OTgwNDcsMC40NTExNzE5LDAuMDUwMjkzLDAuNjUwMzkwNkw1OS41LDQ4Ljk3NDYwOTQgIGMwLjIwMDE5NTMsMC4yOTg4MjgxLDAuNDgzMzk4NCwwLjQ0OTIxODgsMC44NTAwOTc3LDAuNDQ5MjE4OEw2MC43MDAxOTUzLDQ5LjM3NSAgYzAuMTk5NzA3LTAuMTAxNTYyNSwwLjM0OTYwOTQtMC4yNjc1NzgxLDAuNDQ5NzA3LTAuNWMwLjA2Njg5NDUtMC4yMzQzNzUsMC4wNTAyOTMtMC40NTExNzE5LTAuMDQ5ODA0Ny0wLjY1MDM5MDYgIGwtMC4xNDk5MDIzLTAuMzAwNzgxM2MtMC4yNjY2MDE2LTAuNS0wLjY1MDM5MDYtMC42MzI4MTI1LTEuMTUwMzkwNi0wLjQwMDM5MDYgIEM1OS41MzMyMDMxLDQ3LjYyNSw1OS4zNjY2OTkyLDQ3Ljc5MTAxNTYsNTkuMjk5ODA0Nyw0OC4wMjM0Mzc1eiBNNTUuMjAwMTk1MywzOC40NzQ2MDk0ICBjLTAuNSwwLjI5ODgyODEtMC42MzM3ODkxLDAuNjgzNTkzOC0wLjQwMDM5MDYsMS4xNTAzOTA2bDMuMzUwMDk3Nyw2LjU5OTYwOTRjMC4xNjY1MDM5LDAuMzMyMDMxMywwLjQzMzU5MzgsMC41LDAuODAwMjkzLDAuNSAgTDU5LjI5OTgwNDcsNDYuNjI1YzAuNTMzNjkxNC0wLjI2NzU3ODEsMC42ODM1OTM4LTAuNjUwMzkwNiwwLjQ1MDE5NTMtMS4xNTAzOTA2TDU2LjM1MDA5NzcsMzguODc1ICBDNTYuMDgzNDk2MSwzOC4zNzUsNTUuNzAwMTk1MywzOC4yNDAyMzQ0LDU1LjIwMDE5NTMsMzguNDc0NjA5NHogTTY5LjcwMDE5NTMsMjIuMjI0NjA5NCAgYzAuMTY2NTAzOS0wLjIzNDM3NSwwLjI1LTAuNDUxMTcxOSwwLjI1LTAuNjUwMzkwNmMwLTAuMTY2MDE1Ni0wLjA4MzQ5NjEtMC4zNjcxODc1LTAuMjUtMC41OTk2MDk0ICBjLTAuMjMzMzk4NC0wLjE2Nzk2ODgtMC40NTAxOTUzLTAuMjUtMC42NTAzOTA2LTAuMjVjLTAuMTY2NTAzOSwwLTAuMzY2MjEwOSwwLjA4MjAzMTMtMC41OTk2MDk0LDAuMjUgIGMtMC4xNjY5OTIyLDAuMjMyNDIxOS0wLjI1LDAuNDMzNTkzOC0wLjI1LDAuNTk5NjA5NGMwLDAuMTk5MjE4OCwwLjA4MzAwNzgsMC40MTYwMTU2LDAuMjUsMC42NTAzOTA2ICBjMC4yMzMzOTg0LDAuMTY2MDE1NiwwLjQzMzEwNTUsMC4yNSwwLjU5OTYwOTQsMC4yNUM2OS4yNSwyMi40NzQ2MDk0LDY5LjQ2Njc5NjksMjIuMzkwNjI1LDY5LjcwMDE5NTMsMjIuMjI0NjA5NHogICBNMjAuNjQ5OTAyMywyOC43NzM0Mzc1bDEuNTUwMjkzLDEuNzVjMC41MzMyMDMxLDAuNDMzNTkzOCwxLjI4MzIwMzEsMC44MDA3ODEzLDIuMjUsMS4xMDE1NjI1bC04LjUsMTAuMDQ4ODI4MSAgbC0yLjEwMDA5NzctMS40NDkyMTg4TDIwLjY0OTkwMjMsMjguNzczNDM3NXogTTIyLjc1LDI0LjAyMzQzNzVjMC42MzMzMDA4LTAuNzMyNDIxOSwxLjUtMS4xNjYwMTU2LDIuNjAwMDk3Ny0xLjI5ODgyODEgIGMxLjA2NjQwNjMtMC4wOTk2MDk0LDEuOTY2MzA4NiwwLjE1MDM5MDYsMi42OTk3MDcsMC43NWMwLjgwMDI5MywwLjYzMjgxMjUsMS4yNSwxLjQ2Njc5NjksMS4zNTAwOTc3LDIuNSAgcy0wLjE2NjUwMzksMS45MzM1OTM4LTAuNzk5ODA0NywyLjY5OTIxODhjLTAuNjY2NTAzOSwwLjgzMzk4NDQtMS41LDEuMzAwNzgxMy0yLjUsMS40MDAzOTA2TDI1LjI5OTgwNDcsMzAuMTI1ICBjLTAuNzk5ODA0Ny0wLjEwMTU2MjUtMS40NjYzMDg2LTAuNDE3OTY4OC0yLTAuOTUxMTcxOWMtMC4zMzMwMDc4LTAuMjY1NjI1LTAuNjE2MjEwOS0wLjYxNzE4NzUtMC44NDk2MDk0LTEuMDQ4ODI4MSAgbC0wLjA1MDI5My0wLjA1MDc4MTNjLTAuMTY2NTAzOS0wLjM2NzE4NzUtMC4yODMyMDMxLTAuODE2NDA2My0wLjM1MDA5NzctMS4zNDk2MDk0ICBDMjEuOTUwMTk1MywyNS42NTgyMDMxLDIyLjE4MzU5MzgsMjQuNzU3ODEyNSwyMi43NSwyNC4wMjM0Mzc1eiBNNDQuMTQ5OTAyMywxMS4zNzUgIGMtMC40MzMxMDU1LTAuMzMzOTg0NC0wLjgzMzQ5NjEtMC4yODMyMDMxLTEuMTk5NzA3LDAuMTQ4NDM3NWMtMC4zMzM0OTYxLDAuNDMzNTkzOC0wLjI4MzY5MTQsMC44MzM5ODQ0LDAuMTQ5OTAyMywxLjIwMTE3MTkgIGwwLjM1MDA5NzcsMC4zNDk2MDk0YzAuNDY2MzA4NiwwLjQwMDM5MDYsMC44NDk2MDk0LDAuOTE2MDE1NiwxLjE0OTkwMjMsMS41NTA3ODEzICBjMC4xNjY1MDM5LDAuMzMyMDMxMywwLjQzMzEwNTUsMC41LDAuNzk5ODA0NywwLjVsMC4zOTk5MDIzLTAuMTAxNTYyNWMwLjIwMDE5NTMtMC4wOTk2MDk0LDAuMzUwMDk3Ny0wLjI2NTYyNSwwLjQ1MDE5NTMtMC41ICBjMC4wNjY0MDYzLTAuMjMyNDIxOSwwLjA0OTgwNDctMC40NDkyMTg4LTAuMDQ5ODA0Ny0wLjY0ODQzNzVjLTAuNDY2Nzk2OS0wLjgwMDc4MTMtMC45NjY3OTY5LTEuNDY2Nzk2OS0xLjUtMiAgQzQ0LjUzMzIwMzEsMTEuNjczODI4MSw0NC4zNTAwOTc3LDExLjUwNzgxMjUsNDQuMTQ5OTAyMywxMS4zNzV6IE0zNC4yMDAxOTUzLDkuMjI0NjA5NCAgYzEuNDY2MzA4Ni0wLjkwMDM5MDYsMy4xMzMzMDA4LTEuMzQ5NjA5NCw1LTEuMzQ5NjA5NGMyLjYzMzMwMDgsMCw0Ljg4MzMwMDgsMC45MTYwMTU2LDYuNzUsMi43NSAgQzQ3LjgxNjQwNjMsMTIuNTU2NjQwNiw0OC43NSwxNC44MDY2NDA2LDQ4Ljc1LDE3LjM3NWMwLDAuNzY1NjI1LTAuMDgzNDk2MSwxLjU0ODgyODEtMC4yNSwyLjM0OTYwOTQgIGMtMC40MzM1OTM4LDEuNjk5MjE4OC0xLjI4MzIwMzEsMy4xOTkyMTg4LTIuNTQ5ODA0Nyw0LjVjLTEuODY2Njk5MiwxLjgzMjAzMTMtNC4xMTY2OTkyLDIuNzUtNi43NSwyLjc1ICBjLTIuNjY2OTkyMiwwLTQuOTE2OTkyMi0wLjkzMzU5MzgtNi43NS0yLjgwMDc4MTNjLTEuODY2Njk5Mi0xLjgzMjAzMTMtMi44MDAyOTMtNC4wOTk2MDk0LTIuODAwMjkzLTYuNzk4ODI4MSAgYzAtMi42MDE1NjI1LDAuOTMzNTkzOC00Ljg1MTU2MjUsMi44MDAyOTMtNi43NUMzMy4wMTY2MDE2LDEwLjAyMzQzNzUsMzMuNjAwMDk3Nyw5LjU1NjY0MDYsMzQuMjAwMTk1Myw5LjIyNDYwOTR6ICAgTTQxLjA0OTgwNDcsOS44NzVsLTAuNjk5NzA3LTAuMTAxNTYyNWMtMC4yMzMzOTg0LDAtMC40MzM1OTM4LDAuMDgzOTg0NC0wLjYwMDA5NzcsMC4yNSAgQzM5LjU4MzQ5NjEsMTAuMTkxNDA2MywzOS41LDEwLjM5MDYyNSwzOS41LDEwLjYyNWMwLDAuMjMyNDIxOSwwLjA4MzQ5NjEsMC40NDkyMTg4LDAuMjUsMC42NDg0Mzc1ICBjMC4xNjY1MDM5LDAuMTY3OTY4OCwwLjM2NjY5OTIsMC4yNSwwLjYwMDA5NzcsMC4yNWgwLjI1bDAuMjUsMC4wNTA3ODEzYzAuMzk5OTAyMywwLDAuNjY2NTAzOS0wLjIxNjc5NjksMC43OTk4MDQ3LTAuNjUwMzkwNiAgYzAuMDY2ODk0NS0wLjIzMjQyMTksMC4wMzM2OTE0LTAuNDQ5MjE4OC0wLjEwMDA5NzctMC42NTAzOTA2QzQxLjQ1MDE5NTMsMTAuMDc0MjE4OCw0MS4yODMyMDMxLDkuOTQxNDA2Myw0MS4wNDk4MDQ3LDkuODc1eiAgIE04My4zNTAwOTc3LDExLjIyNDYwOTRMODYsMTguMzc1TDU1LjE0OTkwMjMsMzMuMjczNDM3NUM1NS4yNSwzMy40NDE0MDYzLDU1LjM1MDA5NzcsMzMuNjQwNjI1LDU1LjQ1MDE5NTMsMzMuODc1ICBsMzAuNjk5NzA3LDU4LjE0ODQzNzVoLTcuNjAwMDk3N2wtMTkuNDQ5NzA3LTMybC0yMi4wNTAyOTMsMTIuNDUxMTcxOSAgYy0wLjI2NjYwMTYsMC4xNjYwMTU2LTAuMzk5OTAyMywwLjM4MjgxMjUtMC4zOTk5MDIzLDAuNjUwMzkwNmwtMS4yNSwxOWwtNS43NS0wLjEwMTU2MjVsMC44MDAyOTMtMjMuMTk5MjE4OGwxOC40NDk3MDctMTEuMjUgIGMwLjM5OTkwMjMtMC4yMzI0MjE5LDAuNTE2NjAxNi0wLjU4Mzk4NDQsMC4zNTAwOTc3LTEuMDUwNzgxM2wtNi4xMDAwOTc3LTE2LjA0ODgyODFjLTAuMTk5NzA3LTAuNDAwMzkwNi0wLjM2NjY5OTItMC43MzQzNzUtMC41LTEgIEwzMi43NSw0OS4zNzVMMjEuMDQ5ODA0NywzOC4xNzM4MjgxbDMuMzUwMDk3Ny00LjE5OTIxODhMMzEuMjUsNDAuODc1YzAuMjAwMTk1MywwLjE5OTIxODgsMC40MTY1MDM5LDAuMjgzMjAzMSwwLjY0OTkwMjMsMC4yNSAgYzAuMjMzMzk4NCwwLDAuNDUwMTk1My0wLjEwMTU2MjUsMC42NDk5MDIzLTAuMzAwNzgxM2w5LjEwMDA5NzctMTFMODMuMzUwMDk3NywxMS4yMjQ2MDk0eiBNNzQuMjAwMTk1MywxOS41NzQyMTg4ICBjMC0wLjE2NjAxNTYtMC4wODM0OTYxLTAuMzY3MTg3NS0wLjI1LTAuNTk5NjA5NGMtMC4yMzMzOTg0LTAuMTY3OTY4OC0wLjQ1MDE5NTMtMC4yNS0wLjY1MDM5MDYtMC4yNSAgYy0wLjE2NjUwMzksMC0wLjM2NjIxMDksMC4wODIwMzEzLTAuNTk5NjA5NCwwLjI1Yy0wLjE2Njk5MjIsMC4yMzI0MjE5LTAuMjUsMC40MzM1OTM4LTAuMjUsMC41OTk2MDk0ICBjMCwwLjE5OTIxODgsMC4wODMwMDc4LDAuNDE2MDE1NiwwLjI1LDAuNjUwMzkwNmMwLjIzMzM5ODQsMC4xNjYwMTU2LDAuNDMzMTA1NSwwLjI1LDAuNTk5NjA5NCwwLjI1ICBjMC4yMDAxOTUzLDAsMC40MTY5OTIyLTAuMDgzOTg0NCwwLjY1MDM5MDYtMC4yNUM3NC4xMTY2OTkyLDE5Ljk5MDIzNDQsNzQuMjAwMTk1MywxOS43NzM0Mzc1LDc0LjIwMDE5NTMsMTkuNTc0MjE4OHogICBNNzcuNjAwMDk3NywxOC40NzQ2MDk0YzAuMTY2NTAzOSwwLDAuMzY2Njk5Mi0wLjA4Mzk4NDQsMC42MDAwOTc3LTAuMjVjMC4xNjY1MDM5LTAuMjM0Mzc1LDAuMjUtMC40NTExNzE5LDAuMjUtMC42NTAzOTA2ICBjMC0wLjE2NjAxNTYtMC4wODM0OTYxLTAuMzY3MTg3NS0wLjI1LTAuNTk5NjA5NGMtMC4yMzMzOTg0LTAuMjAxMTcxOS0wLjQzMzU5MzgtMC4zMDA3ODEzLTAuNjAwMDk3Ny0wLjMwMDc4MTMgIGMtMC4yMzMzOTg0LDAtMC40MzM1OTM4LDAuMDk5NjA5NC0wLjYwMDA5NzcsMC4zMDA3ODEzYy0wLjE2NjUwMzksMC4xNjYwMTU2LTAuMjUsMC4zNjcxODc1LTAuMjUsMC41OTk2MDk0ICBjMCwwLjI2NzU3ODEsMC4wODM0OTYxLDAuNDgyNDIxOSwwLjI1LDAuNjUwMzkwNkM3Ny4xNjY1MDM5LDE4LjM5MDYyNSw3Ny4zNjY2OTkyLDE4LjQ3NDYwOTQsNzcuNjAwMDk3NywxOC40NzQ2MDk0eiAgIE04Mi4zNTAwOTc3LDE2LjE3MzgyODFjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzgyODEyNSwwLjI1LTAuNjUwMzkwNmMwLTAuMjMyNDIxOS0wLjA4MzQ5NjEtMC40MzE2NDA2LTAuMjUtMC41OTk2MDk0ICBjLTAuMTY2NTAzOS0wLjE2NjAxNTYtMC4zNjY2OTkyLTAuMjUtMC42MDAwOTc3LTAuMjVjLTAuMjAwMTk1MywwLTAuMzgzMzAwOCwwLjA4Mzk4NDQtMC41NDk4MDQ3LDAuMjUgIGMtMC4xNjY5OTIyLDAuMTY3OTY4OC0wLjI1LDAuMzY3MTg3NS0wLjI1LDAuNTk5NjA5NGMwLDAuMjY3NTc4MSwwLjA4MzAwNzgsMC40ODQzNzUsMC4yNSwwLjY1MDM5MDYgIGMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzQ5NjA5NCwwLjI1LDAuNTQ5ODA0NywwLjI1QzgxLjk4MzM5ODQsMTYuNDIzODI4MSw4Mi4xODM1OTM4LDE2LjM0MTc5NjksODIuMzUwMDk3NywxNi4xNzM4MjgxeidcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBpZD0nbWVudS10b2dnbGUnIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdtZW51LXRvZ2dsZScgY2xhc3NOYW1lPSdsYWJlbC10b2dnbGUnPjwvbGFiZWw+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9zaG93cyc+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhPlNob3dzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2xpc3QnPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5Tb25nIExpc3Q8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvY2xpZW50cyc+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhPkNsaWVudHM8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvbWVkaWEnPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5NZWRpYTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0Jz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4VHdvJz5cbiAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vdHdpdHRlci5jb20vZ29vZGVub3VnaGtiYW5kJz5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDU2LjY5MyA1Ni42OTMnXG4gICAgICAgICAgICAgICAgaGVpZ2h0PSc1Ni42OTNweCdcbiAgICAgICAgICAgICAgICBpZD0nTGF5ZXJfMSdcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPScxLjEnXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDU2LjY5MyA1Ni42OTMnXG4gICAgICAgICAgICAgICAgd2lkdGg9JzI1cHgnXG4gICAgICAgICAgICAgICAgaGVpZ2h0PScyNXB4J1xuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001Mi44MzcsMTUuMDY1Yy0xLjgxMSwwLjgwNS0zLjc2LDEuMzQ4LTUuODA1LDEuNTkxYzIuMDg4LTEuMjUsMy42ODktMy4yMyw0LjQ0NC01LjU5MmMtMS45NTMsMS4xNTktNC4xMTUsMi02LjQxOCwyLjQ1NCAgYy0xLjg0My0xLjk2NC00LjQ3LTMuMTkyLTcuMzc3LTMuMTkyYy01LjU4MSwwLTEwLjEwNiw0LjUyNS0xMC4xMDYsMTAuMTA3YzAsMC43OTEsMC4wODksMS41NjIsMC4yNjIsMi4zMDMgIGMtOC40LTAuNDIyLTE1Ljg0OC00LjQ0NS0yMC44MzMtMTAuNTZjLTAuODcsMS40OTItMS4zNjgsMy4yMjgtMS4zNjgsNS4wODJjMCwzLjUwNiwxLjc4NCw2LjYsNC40OTYsOC40MTIgIGMtMS42NTYtMC4wNTMtMy4yMTUtMC41MDgtNC41NzgtMS4yNjVjLTAuMDAxLDAuMDQyLTAuMDAxLDAuMDg1LTAuMDAxLDAuMTI4YzAsNC44OTYsMy40ODQsOC45OCw4LjEwOCw5LjkxICBjLTAuODQ4LDAuMjMtMS43NDEsMC4zNTQtMi42NjMsMC4zNTRjLTAuNjUyLDAtMS4yODUtMC4wNjMtMS45MDItMC4xODJjMS4yODcsNC4wMTUsNS4wMTksNi45MzgsOS40NDEsNy4wMTkgIGMtMy40NTksMi43MTEtNy44MTYsNC4zMjctMTIuNTUyLDQuMzI3Yy0wLjgxNSwwLTEuNjItMC4wNDgtMi40MTEtMC4xNDJjNC40NzQsMi44NjksOS43ODYsNC41NDEsMTUuNDkzLDQuNTQxICBjMTguNTkxLDAsMjguNzU2LTE1LjQsMjguNzU2LTI4Ljc1NmMwLTAuNDM4LTAuMDA5LTAuODc1LTAuMDI4LTEuMzA5QzQ5Ljc2OSwxOC44NzMsNTEuNDgzLDE3LjA5Miw1Mi44MzcsMTUuMDY1eicgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzL0dvb2RFbm91Z2hMSVZFS0FSQU9LRS8nPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgNTYuNjkzIDU2LjY5MydcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzU2LjY5M3B4J1xuICAgICAgICAgICAgICAgIGlkPSdMYXllcl8xJ1xuICAgICAgICAgICAgICAgIHZlcnNpb249JzEuMSdcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgNTYuNjkzIDU2LjY5MydcbiAgICAgICAgICAgICAgICB3aWR0aD0nMjVweCdcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzI1cHgnXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggZD0nTTQwLjQzLDIxLjczOWgtNy42NDV2LTUuMDE0YzAtMS44ODMsMS4yNDgtMi4zMjIsMi4xMjctMi4zMjJjMC44NzcsMCw1LjM5NSwwLDUuMzk1LDBWNi4xMjVsLTcuNDMtMC4wMjkgIGMtOC4yNDgsMC0xMC4xMjUsNi4xNzQtMTAuMTI1LDEwLjEyNXY1LjUxOGgtNC43N3Y4LjUzaDQuNzdjMCwxMC45NDcsMCwyNC4xMzcsMCwyNC4xMzdoMTAuMDMzYzAsMCwwLTEzLjMyLDAtMjQuMTM3aDYuNzcgIEw0MC40MywyMS43Mzl6JyAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZ29vZGVub3VnaGxpdmVrYXJhb2tlLyc+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgZmlsbD0nI0YxZjFmMSdcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgNTAgNTAnXG4gICAgICAgICAgICAgICAgd2lkdGg9JzI1cHgnXG4gICAgICAgICAgICAgICAgaGVpZ2h0PScyNXB4J1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICA8cGF0aCBkPSdNIDE2IDMgQyA4LjgzIDMgMyA4LjgzIDMgMTYgTCAzIDM0IEMgMyA0MS4xNyA4LjgzIDQ3IDE2IDQ3IEwgMzQgNDcgQyA0MS4xNyA0NyA0NyA0MS4xNyA0NyAzNCBMIDQ3IDE2IEMgNDcgOC44MyA0MS4xNyAzIDM0IDMgTCAxNiAzIHogTSAzNyAxMSBDIDM4LjEgMTEgMzkgMTEuOSAzOSAxMyBDIDM5IDE0LjEgMzguMSAxNSAzNyAxNSBDIDM1LjkgMTUgMzUgMTQuMSAzNSAxMyBDIDM1IDExLjkgMzUuOSAxMSAzNyAxMSB6IE0gMjUgMTQgQyAzMS4wNyAxNCAzNiAxOC45MyAzNiAyNSBDIDM2IDMxLjA3IDMxLjA3IDM2IDI1IDM2IEMgMTguOTMgMzYgMTQgMzEuMDcgMTQgMjUgQyAxNCAxOC45MyAxOC45MyAxNCAyNSAxNCB6IE0gMjUgMTYgQyAyMC4wNCAxNiAxNiAyMC4wNCAxNiAyNSBDIDE2IDI5Ljk2IDIwLjA0IDM0IDI1IDM0IEMgMjkuOTYgMzQgMzQgMjkuOTYgMzQgMjUgQyAzNCAyMC4wNCAyOS45NiAxNiAyNSAxNiB6JyAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J3dyYXBwZXInPjwvaGVhZGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICBzdmcge1xuICAgICAgICBmaWxsOiAjZjFmMWYxO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgIH1cblxuICAgICAgc3ZnOmhvdmVyIHtcbiAgICAgICAgZmlsbDogIzc2MWY2YjtcbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICBuYXYgdWwgYTpob3ZlciB7XG4gICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gIzc2MWY2YiwgMCAwIDAuNWVtICM3NjFmNmIsXG4gICAgICAgICAgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgIH1cblxuICAgIC5uYXZCYXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZCYXIuc2Nyb2xsZWQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsMywyMiwgMC45OCkhaW1wb3J0YW50O1xuICAgICAgICAgIHotaW5kZXg6IDMwMDtcbiAgICAgICAgfVxuXG4gICAgICAuc2luZ01hbiB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgfVxuICAgIFxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgcGFkZGluZzogM2VtIDAgMWVtIDA7XG4gICAgICB9XG5cbiAgICAgIC5uYXZCYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICB6LWluZGV4OiAzMDA7XG4gICAgICB9XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgfVxuXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgIH1cblxuICAgICAgbmF2IHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICB9XG5cbiAgICAgIG5hdiB1bCBhIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgICAgIFxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICNtZW51LXRvZ2dsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5sYWJlbC10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDE1cHgpIHtcblxuICAgICAgICAgIG5hdiAud3JhcHBlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1LDMsMjIsIDAuOTgpIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuYXYgdWwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgICBuYXYgdWwgYSB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTsgXG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOjAgMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1LDMsMjIsIDAuOTgpIWltcG9ydGFudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjbWVudS10b2dnbGU6Y2hlY2tlZCB+IHVsIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1dmg7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b20gMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sYWJlbC10b2dnbGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICB0byBib3R0b20sXG4gICAgICAgICAgICAgICNmMWYxZjEgMCUsXG4gICAgICAgICAgICAgICNmMWYxZjEgMjAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAyMCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDQwJSxcbiAgICAgICAgICAgICAgI2YxZjFmMSA0MCUsXG4gICAgICAgICAgICAgICNmMWYxZjEgNjAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA2MCUsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDgwJSxcbiAgICAgICAgICAgICAgI2YxZjFmMSA4MCUsXG4gICAgICAgICAgICAgICNmMWYxZjEgMTAwJVxuICAgICAgICAgICAgKTsgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TestHeader);

/***/ })

})
//# sourceMappingURL=shows.js.687d5359027083063469.hot-update.js.map