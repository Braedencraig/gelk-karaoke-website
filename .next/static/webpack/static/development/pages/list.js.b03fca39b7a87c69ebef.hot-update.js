webpackHotUpdate("static/development/pages/list.js",{

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
    className: "jsx-4268113728" + " " + "".concat(classes, " wrapper stroke"),
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
    className: "jsx-4268113728" + " " + 'singMan',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("g", {
    className: "jsx-4268113728",
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
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M33.2001953,90.6738281c0.1665039-0.1660156,0.25-0.3671875,0.25-0.5996094  c0-0.2675781-0.0834961-0.4824219-0.25-0.6503906c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2001953,0-0.3833008,0.0839844-0.550293,0.25c-0.1665039,0.1679688-0.25,0.3828125-0.25,0.6503906  c0,0.2324219,0.0834961,0.4335938,0.25,0.5996094c0.1669922,0.1679688,0.3500977,0.25,0.550293,0.25  C32.8334961,90.9238281,33.0332031,90.8417969,33.2001953,90.6738281z M33.3500977,84.7246094  c-0.2333984-0.1679688-0.4501953-0.25-0.6499023-0.25c-0.1669922,0-0.3666992,0.0820313-0.6000977,0.25  c-0.1665039,0.2324219-0.25,0.4492188-0.25,0.6503906c0,0.1992188,0.0834961,0.3828125,0.25,0.5488281  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25c0.2666016,0,0.4833984-0.0820313,0.6499023-0.25  c0.1665039-0.1660156,0.25-0.3496094,0.25-0.5488281C33.6000977,85.1738281,33.5166016,84.9570313,33.3500977,84.7246094z   M33.7001953,80.6738281c0-0.2324219-0.0834961-0.4335938-0.25-0.5996094c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2666016,0-0.4833984,0.0839844-0.6499023,0.25c-0.1669922,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2011719,0.0830078,0.3828125,0.25,0.5507813c0.1665039,0.1660156,0.3833008,0.25,0.6499023,0.25  c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25C33.6166992,81.0566406,33.7001953,80.875,33.7001953,80.6738281z   M33.7998047,75.875c0-0.2011719-0.0830078-0.3847656-0.25-0.5507813c-0.1665039-0.1660156-0.3662109-0.25-0.5996094-0.25  c-0.2666016,0-0.4667969,0.0839844-0.6000977,0.25c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5507813  c0,0.265625,0.0834961,0.4824219,0.25,0.6484375c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25  c0.1665039,0,0.3662109-0.0820313,0.5996094-0.25C33.7167969,76.2910156,33.7998047,76.0742188,33.7998047,75.875z   M33.7001953,70.625c-0.1337891-0.1679688-0.3334961-0.25-0.6000977-0.25c-0.2333984,0-0.4165039,0.0820313-0.550293,0.25  c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5488281c0,0.2675781,0.0834961,0.484375,0.25,0.6503906  c0.1669922,0.1660156,0.3500977,0.25,0.550293,0.25c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25  c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906C33.9501953,70.9414063,33.8666992,70.7578125,33.7001953,70.625z   M59.2998047,48.0234375c-0.0664063,0.234375-0.0498047,0.4511719,0.050293,0.6503906L59.5,48.9746094  c0.2001953,0.2988281,0.4833984,0.4492188,0.8500977,0.4492188L60.7001953,49.375  c0.199707-0.1015625,0.3496094-0.2675781,0.449707-0.5c0.0668945-0.234375,0.050293-0.4511719-0.0498047-0.6503906  l-0.1499023-0.3007813c-0.2666016-0.5-0.6503906-0.6328125-1.1503906-0.4003906  C59.5332031,47.625,59.3666992,47.7910156,59.2998047,48.0234375z M55.2001953,38.4746094  c-0.5,0.2988281-0.6337891,0.6835938-0.4003906,1.1503906l3.3500977,6.5996094c0.1665039,0.3320313,0.4335938,0.5,0.800293,0.5  L59.2998047,46.625c0.5336914-0.2675781,0.6835938-0.6503906,0.4501953-1.1503906L56.3500977,38.875  C56.0834961,38.375,55.7001953,38.2402344,55.2001953,38.4746094z M69.7001953,22.2246094  c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094  c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25  c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906  c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25C69.25,22.4746094,69.4667969,22.390625,69.7001953,22.2246094z   M20.6499023,28.7734375l1.550293,1.75c0.5332031,0.4335938,1.2832031,0.8007813,2.25,1.1015625l-8.5,10.0488281  l-2.1000977-1.4492188L20.6499023,28.7734375z M22.75,24.0234375c0.6333008-0.7324219,1.5-1.1660156,2.6000977-1.2988281  c1.0664063-0.0996094,1.9663086,0.1503906,2.699707,0.75c0.800293,0.6328125,1.25,1.4667969,1.3500977,2.5  s-0.1665039,1.9335938-0.7998047,2.6992188c-0.6665039,0.8339844-1.5,1.3007813-2.5,1.4003906L25.2998047,30.125  c-0.7998047-0.1015625-1.4663086-0.4179688-2-0.9511719c-0.3330078-0.265625-0.6162109-0.6171875-0.8496094-1.0488281  l-0.050293-0.0507813c-0.1665039-0.3671875-0.2832031-0.8164063-0.3500977-1.3496094  C21.9501953,25.6582031,22.1835938,24.7578125,22.75,24.0234375z M44.1499023,11.375  c-0.4331055-0.3339844-0.8334961-0.2832031-1.199707,0.1484375c-0.3334961,0.4335938-0.2836914,0.8339844,0.1499023,1.2011719  l0.3500977,0.3496094c0.4663086,0.4003906,0.8496094,0.9160156,1.1499023,1.5507813  c0.1665039,0.3320313,0.4331055,0.5,0.7998047,0.5l0.3999023-0.1015625c0.2001953-0.0996094,0.3500977-0.265625,0.4501953-0.5  c0.0664063-0.2324219,0.0498047-0.4492188-0.0498047-0.6484375c-0.4667969-0.8007813-0.9667969-1.4667969-1.5-2  C44.5332031,11.6738281,44.3500977,11.5078125,44.1499023,11.375z M34.2001953,9.2246094  c1.4663086-0.9003906,3.1333008-1.3496094,5-1.3496094c2.6333008,0,4.8833008,0.9160156,6.75,2.75  C47.8164063,12.5566406,48.75,14.8066406,48.75,17.375c0,0.765625-0.0834961,1.5488281-0.25,2.3496094  c-0.4335938,1.6992188-1.2832031,3.1992188-2.5498047,4.5c-1.8666992,1.8320313-4.1166992,2.75-6.75,2.75  c-2.6669922,0-4.9169922-0.9335938-6.75-2.8007813c-1.8666992-1.8320313-2.800293-4.0996094-2.800293-6.7988281  c0-2.6015625,0.9335938-4.8515625,2.800293-6.75C33.0166016,10.0234375,33.6000977,9.5566406,34.2001953,9.2246094z   M41.0498047,9.875l-0.699707-0.1015625c-0.2333984,0-0.4335938,0.0839844-0.6000977,0.25  C39.5834961,10.1914063,39.5,10.390625,39.5,10.625c0,0.2324219,0.0834961,0.4492188,0.25,0.6484375  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25h0.25l0.25,0.0507813c0.3999023,0,0.6665039-0.2167969,0.7998047-0.6503906  c0.0668945-0.2324219,0.0336914-0.4492188-0.1000977-0.6503906C41.4501953,10.0742188,41.2832031,9.9414063,41.0498047,9.875z   M83.3500977,11.2246094L86,18.375L55.1499023,33.2734375C55.25,33.4414063,55.3500977,33.640625,55.4501953,33.875  l30.699707,58.1484375h-7.6000977l-19.449707-32l-22.050293,12.4511719  c-0.2666016,0.1660156-0.3999023,0.3828125-0.3999023,0.6503906l-1.25,19l-5.75-0.1015625l0.800293-23.1992188l18.449707-11.25  c0.3999023-0.2324219,0.5166016-0.5839844,0.3500977-1.0507813l-6.1000977-16.0488281c-0.199707-0.4003906-0.3666992-0.734375-0.5-1  L32.75,49.375L21.0498047,38.1738281l3.3500977-4.1992188L31.25,40.875c0.2001953,0.1992188,0.4165039,0.2832031,0.6499023,0.25  c0.2333984,0,0.4501953-0.1015625,0.6499023-0.3007813l9.1000977-11L83.3500977,11.2246094z M74.2001953,19.5742188  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25  c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094  c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25  c0.2001953,0,0.4169922-0.0839844,0.6503906-0.25C74.1166992,19.9902344,74.2001953,19.7734375,74.2001953,19.5742188z   M77.6000977,18.4746094c0.1665039,0,0.3666992-0.0839844,0.6000977-0.25c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.2011719-0.4335938-0.3007813-0.6000977-0.3007813  c-0.2333984,0-0.4335938,0.0996094-0.6000977,0.3007813c-0.1665039,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2675781,0.0834961,0.4824219,0.25,0.6503906C77.1665039,18.390625,77.3666992,18.4746094,77.6000977,18.4746094z   M82.3500977,16.1738281c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906c0-0.2324219-0.0834961-0.4316406-0.25-0.5996094  c-0.1665039-0.1660156-0.3666992-0.25-0.6000977-0.25c-0.2001953,0-0.3833008,0.0839844-0.5498047,0.25  c-0.1669922,0.1679688-0.25,0.3671875-0.25,0.5996094c0,0.2675781,0.0830078,0.484375,0.25,0.6503906  c0.1665039,0.1679688,0.3496094,0.25,0.5498047,0.25C81.9833984,16.4238281,82.1835938,16.3417969,82.3500977,16.1738281z",
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))))), __jsx("input", {
    type: "checkbox",
    id: "menu-toggle",
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "menu-toggle",
    className: "jsx-4268113728" + " " + 'label-toggle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-4268113728",
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
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-4268113728",
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
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-4268113728",
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
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-4268113728",
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
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-4268113728",
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
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-4268113728",
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
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Contact"))), __jsx("div", {
    className: "jsx-4268113728" + " " + 'flexTwo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("a", {
    href: "https://twitter.com/goodenoughkband",
    className: "jsx-4268113728",
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
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "height", "25px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "xmlns", "http://www.w3.org/2000/svg"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-4268113728"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 99
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx("path", {
    d: "M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z",
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))), __jsx("a", {
    href: "https://www.facebook.com/groups/GoodEnoughLIVEKARAOKE/",
    className: "jsx-4268113728",
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
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "height", "25px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "xmlns", "http://www.w3.org/2000/svg"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "className", "jsx-4268113728"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 113
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), _jsx2), __jsx("path", {
    d: "M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z",
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }))), __jsx("a", {
    href: "https://www.instagram.com/goodenoughlivekaraoke/",
    className: "jsx-4268113728",
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
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, ' ', __jsx("path", {
    d: "M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z",
    className: "jsx-4268113728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })))))), __jsx("header", {
    className: "jsx-4268113728" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4268113728",
    __self: this
  }, "svg.jsx-4268113728{fill:#f1f1f1;-webkit-transition:all 0.2s;transition:all 0.2s;z-index:100;}svg.jsx-4268113728:hover{fill:#761f6b;cursor:pointer;}nav.jsx-4268113728 ul.jsx-4268113728 a.jsx-4268113728:hover{color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.navBar.jsx-4268113728{-webkit-transition:background-color 0.2s;transition:background-color 0.2s;background:none;}.navBar.scrolled.jsx-4268113728{background:rgba(229,52,65,0.98)!important;z-index:300;height:75px;}.singMan.jsx-4268113728{-webkit-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);}h1.jsx-4268113728{font-size:3em;padding:3em 0 1em 0;}.navBar.jsx-4268113728{position:fixed;right:0;left:0;top:0;padding:5px 0;z-index:300;}.logo.jsx-4268113728{background-color:#f1f1f1;border-radius:50px;display:inline-block;height:45px;margin:1em 0;width:45px;}.wrapper.jsx-4268113728{margin:0 auto;max-width:1400px;padding:0 5%;}nav.jsx-4268113728 ul.jsx-4268113728{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;list-style-type:none;width:65%;}nav.jsx-4268113728 ul.jsx-4268113728 a.jsx-4268113728{font-size:20px;font-family:'Concert One',cursive;color:#f1f1f1;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;cursor:pointer;}li.jsx-4268113728{display:inline-block;}#menu-toggle.jsx-4268113728{display:none;}.label-toggle.jsx-4268113728{display:none;}label.jsx-4268113728{z-index:100;position:relative;}.wrapper.jsx-4268113728{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:1015px){nav.jsx-4268113728 .wrapper.jsx-4268113728{background:rgb(229,52,65,0.98)!important;}nav.jsx-4268113728 ul.jsx-4268113728{width:100%;padding:0 2%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}nav.jsx-4268113728 ul.jsx-4268113728 a.jsx-4268113728{color:#f1f1f1;font-size:60px;}svg.jsx-4268113728{width:50px;height:50px;margin:0 20px;top:10px;position:relative;}ul.jsx-4268113728{background:rgba(229,52,65,0.98)!important;display:block;height:0;list-style-type:none;opacity:0;text-align:center;width:100%;visibility:hidden;position:absolute;left:0;right:0;top:20px;}li.jsx-4268113728{color:#f1f1f1;display:block;font-size:1.5em;margin:5px 0;}#menu-toggle.jsx-4268113728:checked~ul.jsx-4268113728{opacity:1;height:65vh;visibility:visible;padding-bottom:100%;margin:0 auto;margin-top:-20px;position:absolute;left:0;right:0;top:20px;}.label-toggle.jsx-4268113728{background:linear-gradient( to bottom, #f1f1f1 0%, #f1f1f1 20%, transparent 20%, transparent 40%, #f1f1f1 40%, #f1f1f1 60%, transparent 60%, transparent 80%, #f1f1f1 80%, #f1f1f1 100% );cursor:pointer;display:block;float:right;height:35px;margin-top:1em;width:35px;}.wrapper.jsx-4268113728{display:block;}}@media screen and (max-width:800px){ul.jsx-4268113728{-webkit-transition:all 1s ease;transition:all 1s ease;}ul.jsx-4268113728 li.jsx-4268113728 a.jsx-4268113728{font-size:20px;}li.jsx-4268113728:first-child{margin-top:40px;}svg.jsx-4268113728{width:20px;height:20px;}nav.jsx-4268113728 ul.jsx-4268113728 a.jsx-4268113728{font-size:20px;}}@media screen and (max-width:600px){ul.jsx-4268113728 li.jsx-4268113728 a.jsx-4268113728{font-size:40px;}li.jsx-4268113728:first-child{margin-top:70px;}.navBar.jsx-4268113728 svg.jsx-4268113728{left:0px;}.songButton.jsx-4268113728{margin-top:36px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvY29tcG9uZW50cy9UZXN0SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZJa0IsQUFJc0IsQUFNQSxBQU1ILEFBTXlCLEFBSVUsQUFNbkIsQUFJWixBQUtDLEFBU1UsQUFTWCxBQU1ELEFBT0UsQUFVTSxBQUlSLEFBSUEsQUFJRCxBQUtPLEFBUTJCLEFBSS9CLEFBTUcsQUFLSCxBQVFpQyxBQWU5QixBQU9KLEFBeUJULEFBV2EsQUFPTyxBQUlSLEFBSUMsQUFJTCxBQUtJLEFBUUEsQUFHQyxBQUlQLEFBSU8sU0FIbEIsQ0EzRWdCLENBdklvQixBQThGbkIsQUFXRCxBQXFGRixDQWpISSxDQTFGRSxBQU1MLEFBNEVqQixBQUlBLENBdERzQixBQXVCSCxBQTBERSxBQTRCRCxBQTJDaEIsQ0FuSk0sQUErQjJCLEFBK0huQyxBQWFBLEFBUUEsQ0FqQkEsQUFvQkEsQUFRQSxLQXJKRixDQXVFeUIsQ0EvR2hCLEFBaUZVLEFBcUZqQixDQWhHMEIsQ0E5RFAsR0F2Q3JCLEFBdUlzQixDQTVCbEIsQ0EzRUksQUFvRFIsQ0FuQ2UsR0F2QmYsRUFPZ0IsQ0FnRkQsSUFqQlgsQUErQ3FCLENBaElULEFBd0dJLEVBL0VHLEFBVXZCLEFBc0ZtQixFQXRCSyxHQXBEUixDQTVCRixJQWxCRSxBQXdLZCxFQWhFYSxDQWlCWCxJQS9JVSxBQXNKTSxDQTdHcEIsQ0E0QjJCLENBb0R2QixDQTFFVSxBQWdGYSxDQXhHekIsT0F0QkYsQ0FnQm9CLEFBMkNZLENBMkZULEVBdkdSLFNBZ0ZDLEVBMURPLEVBcERyQixBQVNGLEFBc0JhLEVBdUdXLENBMURULEdBbUNTLEtBL0V4QixDQTBESSxRQTZDUyxJQTVJYixBQXFIaUIsR0F3QkgsUUF2QlUsQUF3QlQsU0FDWCxJQXJGdUIsS0E2REgsa0JBQ1gsTUF0Q21CLENBdUNsQixRQUNDLFNBQ1gsQ0FxQ2lCLEdBaEhFLE9BV04sS0FzR0csU0FoSFIsQ0FXWixJQXNHa0IsS0FoSGxCLE9BaUhrQixZQUNHLGVBQ0osV0FDYixpQkFuRkoiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9jb21wb25lbnRzL1Rlc3RIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vYXNzZXRzL2hvbWUuc3ZnJztcbmltcG9ydCBTaG93cyBmcm9tICcuLi9hc3NldHMvc2hvd3Muc3ZnJztcbmltcG9ydCBDbGllbnRzIGZyb20gJy4uL2Fzc2V0cy9jbGllbnRzLnN2Zyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi4vYXNzZXRzL21lZGlhLnN2Zyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9hc3NldHMvY29udGFjdC5zdmcnO1xuaW1wb3J0IFNvbmdMaXN0IGZyb20gJy4uL2Fzc2V0cy9zb25nbGlzdC5zdmcnO1xuXG5jb25zdCBUZXN0SGVhZGVyID0gXyA9PiB7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ25hdkJhcicsIHtcbiAgICBzY3JvbGxlZDogc2Nyb2xsZWQsXG4gIH0pO1xuICB1c2VFZmZlY3QoXyA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gXyA9PiB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMSkge1xuICAgICAgICBzZXRTY3JvbGxlZCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNjcm9sbGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiBfID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzfSB3cmFwcGVyIHN0cm9rZWB9PlxuICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICB3aWR0aD0nNjAnXG4gICAgICAgICAgICBoZWlnaHQ9JzYwJ1xuICAgICAgICAgICAgdmlld0JveD0nMCAwIDYwIDYwJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nTWFuJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1MCA1MCkgc2NhbGUoLTAuNjkgMC42OSkgcm90YXRlKDApIHRyYW5zbGF0ZSgtNTAgLTUwKSdcbiAgICAgICAgICAgIC8vIHN0eWxlPSdmaWxsOiNGRkZGRkYnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBmaWxsPScjZjFmMWYxJ1xuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPScxLjEnXG4gICAgICAgICAgICAgICAgeD0nMHB4J1xuICAgICAgICAgICAgICAgIHk9JzBweCdcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMTAwIDEwMCdcbiAgICAgICAgICAgICAgICBlbmFibGUtYmFja2dyb3VuZD0nbmV3IDAgMCAxMDAgMTAwJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgIGQ9J00zMy4yMDAxOTUzLDkwLjY3MzgyODFjMC4xNjY1MDM5LTAuMTY2MDE1NiwwLjI1LTAuMzY3MTg3NSwwLjI1LTAuNTk5NjA5NCAgYzAtMC4yNjc1NzgxLTAuMDgzNDk2MS0wLjQ4MjQyMTktMC4yNS0wLjY1MDM5MDZjLTAuMTY2OTkyMi0wLjE2NjAxNTYtMC4zNjY2OTkyLTAuMjUtMC42MDAwOTc3LTAuMjUgIGMtMC4yMDAxOTUzLDAtMC4zODMzMDA4LDAuMDgzOTg0NC0wLjU1MDI5MywwLjI1Yy0wLjE2NjUwMzksMC4xNjc5Njg4LTAuMjUsMC4zODI4MTI1LTAuMjUsMC42NTAzOTA2ICBjMCwwLjIzMjQyMTksMC4wODM0OTYxLDAuNDMzNTkzOCwwLjI1LDAuNTk5NjA5NGMwLjE2Njk5MjIsMC4xNjc5Njg4LDAuMzUwMDk3NywwLjI1LDAuNTUwMjkzLDAuMjUgIEMzMi44MzM0OTYxLDkwLjkyMzgyODEsMzMuMDMzMjAzMSw5MC44NDE3OTY5LDMzLjIwMDE5NTMsOTAuNjczODI4MXogTTMzLjM1MDA5NzcsODQuNzI0NjA5NCAgYy0wLjIzMzM5ODQtMC4xNjc5Njg4LTAuNDUwMTk1My0wLjI1LTAuNjQ5OTAyMy0wLjI1Yy0wLjE2Njk5MjIsMC0wLjM2NjY5OTIsMC4wODIwMzEzLTAuNjAwMDk3NywwLjI1ICBjLTAuMTY2NTAzOSwwLjIzMjQyMTktMC4yNSwwLjQ0OTIxODgtMC4yNSwwLjY1MDM5MDZjMCwwLjE5OTIxODgsMC4wODM0OTYxLDAuMzgyODEyNSwwLjI1LDAuNTQ4ODI4MSAgYzAuMTY2NTAzOSwwLjE2Nzk2ODgsMC4zNjY2OTkyLDAuMjUsMC42MDAwOTc3LDAuMjVjMC4yNjY2MDE2LDAsMC40ODMzOTg0LTAuMDgyMDMxMywwLjY0OTkwMjMtMC4yNSAgYzAuMTY2NTAzOS0wLjE2NjAxNTYsMC4yNS0wLjM0OTYwOTQsMC4yNS0wLjU0ODgyODFDMzMuNjAwMDk3Nyw4NS4xNzM4MjgxLDMzLjUxNjYwMTYsODQuOTU3MDMxMywzMy4zNTAwOTc3LDg0LjcyNDYwOTR6ICAgTTMzLjcwMDE5NTMsODAuNjczODI4MWMwLTAuMjMyNDIxOS0wLjA4MzQ5NjEtMC40MzM1OTM4LTAuMjUtMC41OTk2MDk0Yy0wLjE2Njk5MjItMC4xNjYwMTU2LTAuMzY2Njk5Mi0wLjI1LTAuNjAwMDk3Ny0wLjI1ICBjLTAuMjY2NjAxNiwwLTAuNDgzMzk4NCwwLjA4Mzk4NDQtMC42NDk5MDIzLDAuMjVjLTAuMTY2OTkyMiwwLjE2NjAxNTYtMC4yNSwwLjM2NzE4NzUtMC4yNSwwLjU5OTYwOTQgIGMwLDAuMjAxMTcxOSwwLjA4MzAwNzgsMC4zODI4MTI1LDAuMjUsMC41NTA3ODEzYzAuMTY2NTAzOSwwLjE2NjAxNTYsMC4zODMzMDA4LDAuMjUsMC42NDk5MDIzLDAuMjUgIGMwLjIzMzM5ODQsMCwwLjQzMzEwNTUtMC4wODM5ODQ0LDAuNjAwMDk3Ny0wLjI1QzMzLjYxNjY5OTIsODEuMDU2NjQwNiwzMy43MDAxOTUzLDgwLjg3NSwzMy43MDAxOTUzLDgwLjY3MzgyODF6ICAgTTMzLjc5OTgwNDcsNzUuODc1YzAtMC4yMDExNzE5LTAuMDgzMDA3OC0wLjM4NDc2NTYtMC4yNS0wLjU1MDc4MTNjLTAuMTY2NTAzOS0wLjE2NjAxNTYtMC4zNjYyMTA5LTAuMjUtMC41OTk2MDk0LTAuMjUgIGMtMC4yNjY2MDE2LDAtMC40NjY3OTY5LDAuMDgzOTg0NC0wLjYwMDA5NzcsMC4yNWMtMC4xNjY1MDM5LDAuMTMyODEyNS0wLjI1LDAuMzE2NDA2My0wLjI1LDAuNTUwNzgxMyAgYzAsMC4yNjU2MjUsMC4wODM0OTYxLDAuNDgyNDIxOSwwLjI1LDAuNjQ4NDM3NWMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzY2Njk5MiwwLjI1LDAuNjAwMDk3NywwLjI1ICBjMC4xNjY1MDM5LDAsMC4zNjYyMTA5LTAuMDgyMDMxMywwLjU5OTYwOTQtMC4yNUMzMy43MTY3OTY5LDc2LjI5MTAxNTYsMzMuNzk5ODA0Nyw3Ni4wNzQyMTg4LDMzLjc5OTgwNDcsNzUuODc1eiAgIE0zMy43MDAxOTUzLDcwLjYyNWMtMC4xMzM3ODkxLTAuMTY3OTY4OC0wLjMzMzQ5NjEtMC4yNS0wLjYwMDA5NzctMC4yNWMtMC4yMzMzOTg0LDAtMC40MTY1MDM5LDAuMDgyMDMxMy0wLjU1MDI5MywwLjI1ICBjLTAuMTY2NTAzOSwwLjEzMjgxMjUtMC4yNSwwLjMxNjQwNjMtMC4yNSwwLjU0ODgyODFjMCwwLjI2NzU3ODEsMC4wODM0OTYxLDAuNDg0Mzc1LDAuMjUsMC42NTAzOTA2ICBjMC4xNjY5OTIyLDAuMTY2MDE1NiwwLjM1MDA5NzcsMC4yNSwwLjU1MDI5MywwLjI1YzAuMjMzMzk4NCwwLDAuNDMzMTA1NS0wLjA4Mzk4NDQsMC42MDAwOTc3LTAuMjUgIGMwLjE2NjUwMzktMC4xNjYwMTU2LDAuMjUtMC4zODI4MTI1LDAuMjUtMC42NTAzOTA2QzMzLjk1MDE5NTMsNzAuOTQxNDA2MywzMy44NjY2OTkyLDcwLjc1NzgxMjUsMzMuNzAwMTk1Myw3MC42MjV6ICAgTTU5LjI5OTgwNDcsNDguMDIzNDM3NWMtMC4wNjY0MDYzLDAuMjM0Mzc1LTAuMDQ5ODA0NywwLjQ1MTE3MTksMC4wNTAyOTMsMC42NTAzOTA2TDU5LjUsNDguOTc0NjA5NCAgYzAuMjAwMTk1MywwLjI5ODgyODEsMC40ODMzOTg0LDAuNDQ5MjE4OCwwLjg1MDA5NzcsMC40NDkyMTg4TDYwLjcwMDE5NTMsNDkuMzc1ICBjMC4xOTk3MDctMC4xMDE1NjI1LDAuMzQ5NjA5NC0wLjI2NzU3ODEsMC40NDk3MDctMC41YzAuMDY2ODk0NS0wLjIzNDM3NSwwLjA1MDI5My0wLjQ1MTE3MTktMC4wNDk4MDQ3LTAuNjUwMzkwNiAgbC0wLjE0OTkwMjMtMC4zMDA3ODEzYy0wLjI2NjYwMTYtMC41LTAuNjUwMzkwNi0wLjYzMjgxMjUtMS4xNTAzOTA2LTAuNDAwMzkwNiAgQzU5LjUzMzIwMzEsNDcuNjI1LDU5LjM2NjY5OTIsNDcuNzkxMDE1Niw1OS4yOTk4MDQ3LDQ4LjAyMzQzNzV6IE01NS4yMDAxOTUzLDM4LjQ3NDYwOTQgIGMtMC41LDAuMjk4ODI4MS0wLjYzMzc4OTEsMC42ODM1OTM4LTAuNDAwMzkwNiwxLjE1MDM5MDZsMy4zNTAwOTc3LDYuNTk5NjA5NGMwLjE2NjUwMzksMC4zMzIwMzEzLDAuNDMzNTkzOCwwLjUsMC44MDAyOTMsMC41ICBMNTkuMjk5ODA0Nyw0Ni42MjVjMC41MzM2OTE0LTAuMjY3NTc4MSwwLjY4MzU5MzgtMC42NTAzOTA2LDAuNDUwMTk1My0xLjE1MDM5MDZMNTYuMzUwMDk3NywzOC44NzUgIEM1Ni4wODM0OTYxLDM4LjM3NSw1NS43MDAxOTUzLDM4LjI0MDIzNDQsNTUuMjAwMTk1MywzOC40NzQ2MDk0eiBNNjkuNzAwMTk1MywyMi4yMjQ2MDk0ICBjMC4xNjY1MDM5LTAuMjM0Mzc1LDAuMjUtMC40NTExNzE5LDAuMjUtMC42NTAzOTA2YzAtMC4xNjYwMTU2LTAuMDgzNDk2MS0wLjM2NzE4NzUtMC4yNS0wLjU5OTYwOTQgIGMtMC4yMzMzOTg0LTAuMTY3OTY4OC0wLjQ1MDE5NTMtMC4yNS0wLjY1MDM5MDYtMC4yNWMtMC4xNjY1MDM5LDAtMC4zNjYyMTA5LDAuMDgyMDMxMy0wLjU5OTYwOTQsMC4yNSAgYy0wLjE2Njk5MjIsMC4yMzI0MjE5LTAuMjUsMC40MzM1OTM4LTAuMjUsMC41OTk2MDk0YzAsMC4xOTkyMTg4LDAuMDgzMDA3OCwwLjQxNjAxNTYsMC4yNSwwLjY1MDM5MDYgIGMwLjIzMzM5ODQsMC4xNjYwMTU2LDAuNDMzMTA1NSwwLjI1LDAuNTk5NjA5NCwwLjI1QzY5LjI1LDIyLjQ3NDYwOTQsNjkuNDY2Nzk2OSwyMi4zOTA2MjUsNjkuNzAwMTk1MywyMi4yMjQ2MDk0eiAgIE0yMC42NDk5MDIzLDI4Ljc3MzQzNzVsMS41NTAyOTMsMS43NWMwLjUzMzIwMzEsMC40MzM1OTM4LDEuMjgzMjAzMSwwLjgwMDc4MTMsMi4yNSwxLjEwMTU2MjVsLTguNSwxMC4wNDg4MjgxICBsLTIuMTAwMDk3Ny0xLjQ0OTIxODhMMjAuNjQ5OTAyMywyOC43NzM0Mzc1eiBNMjIuNzUsMjQuMDIzNDM3NWMwLjYzMzMwMDgtMC43MzI0MjE5LDEuNS0xLjE2NjAxNTYsMi42MDAwOTc3LTEuMjk4ODI4MSAgYzEuMDY2NDA2My0wLjA5OTYwOTQsMS45NjYzMDg2LDAuMTUwMzkwNiwyLjY5OTcwNywwLjc1YzAuODAwMjkzLDAuNjMyODEyNSwxLjI1LDEuNDY2Nzk2OSwxLjM1MDA5NzcsMi41ICBzLTAuMTY2NTAzOSwxLjkzMzU5MzgtMC43OTk4MDQ3LDIuNjk5MjE4OGMtMC42NjY1MDM5LDAuODMzOTg0NC0xLjUsMS4zMDA3ODEzLTIuNSwxLjQwMDM5MDZMMjUuMjk5ODA0NywzMC4xMjUgIGMtMC43OTk4MDQ3LTAuMTAxNTYyNS0xLjQ2NjMwODYtMC40MTc5Njg4LTItMC45NTExNzE5Yy0wLjMzMzAwNzgtMC4yNjU2MjUtMC42MTYyMTA5LTAuNjE3MTg3NS0wLjg0OTYwOTQtMS4wNDg4MjgxICBsLTAuMDUwMjkzLTAuMDUwNzgxM2MtMC4xNjY1MDM5LTAuMzY3MTg3NS0wLjI4MzIwMzEtMC44MTY0MDYzLTAuMzUwMDk3Ny0xLjM0OTYwOTQgIEMyMS45NTAxOTUzLDI1LjY1ODIwMzEsMjIuMTgzNTkzOCwyNC43NTc4MTI1LDIyLjc1LDI0LjAyMzQzNzV6IE00NC4xNDk5MDIzLDExLjM3NSAgYy0wLjQzMzEwNTUtMC4zMzM5ODQ0LTAuODMzNDk2MS0wLjI4MzIwMzEtMS4xOTk3MDcsMC4xNDg0Mzc1Yy0wLjMzMzQ5NjEsMC40MzM1OTM4LTAuMjgzNjkxNCwwLjgzMzk4NDQsMC4xNDk5MDIzLDEuMjAxMTcxOSAgbDAuMzUwMDk3NywwLjM0OTYwOTRjMC40NjYzMDg2LDAuNDAwMzkwNiwwLjg0OTYwOTQsMC45MTYwMTU2LDEuMTQ5OTAyMywxLjU1MDc4MTMgIGMwLjE2NjUwMzksMC4zMzIwMzEzLDAuNDMzMTA1NSwwLjUsMC43OTk4MDQ3LDAuNWwwLjM5OTkwMjMtMC4xMDE1NjI1YzAuMjAwMTk1My0wLjA5OTYwOTQsMC4zNTAwOTc3LTAuMjY1NjI1LDAuNDUwMTk1My0wLjUgIGMwLjA2NjQwNjMtMC4yMzI0MjE5LDAuMDQ5ODA0Ny0wLjQ0OTIxODgtMC4wNDk4MDQ3LTAuNjQ4NDM3NWMtMC40NjY3OTY5LTAuODAwNzgxMy0wLjk2Njc5NjktMS40NjY3OTY5LTEuNS0yICBDNDQuNTMzMjAzMSwxMS42NzM4MjgxLDQ0LjM1MDA5NzcsMTEuNTA3ODEyNSw0NC4xNDk5MDIzLDExLjM3NXogTTM0LjIwMDE5NTMsOS4yMjQ2MDk0ICBjMS40NjYzMDg2LTAuOTAwMzkwNiwzLjEzMzMwMDgtMS4zNDk2MDk0LDUtMS4zNDk2MDk0YzIuNjMzMzAwOCwwLDQuODgzMzAwOCwwLjkxNjAxNTYsNi43NSwyLjc1ICBDNDcuODE2NDA2MywxMi41NTY2NDA2LDQ4Ljc1LDE0LjgwNjY0MDYsNDguNzUsMTcuMzc1YzAsMC43NjU2MjUtMC4wODM0OTYxLDEuNTQ4ODI4MS0wLjI1LDIuMzQ5NjA5NCAgYy0wLjQzMzU5MzgsMS42OTkyMTg4LTEuMjgzMjAzMSwzLjE5OTIxODgtMi41NDk4MDQ3LDQuNWMtMS44NjY2OTkyLDEuODMyMDMxMy00LjExNjY5OTIsMi43NS02Ljc1LDIuNzUgIGMtMi42NjY5OTIyLDAtNC45MTY5OTIyLTAuOTMzNTkzOC02Ljc1LTIuODAwNzgxM2MtMS44NjY2OTkyLTEuODMyMDMxMy0yLjgwMDI5My00LjA5OTYwOTQtMi44MDAyOTMtNi43OTg4MjgxICBjMC0yLjYwMTU2MjUsMC45MzM1OTM4LTQuODUxNTYyNSwyLjgwMDI5My02Ljc1QzMzLjAxNjYwMTYsMTAuMDIzNDM3NSwzMy42MDAwOTc3LDkuNTU2NjQwNiwzNC4yMDAxOTUzLDkuMjI0NjA5NHogICBNNDEuMDQ5ODA0Nyw5Ljg3NWwtMC42OTk3MDctMC4xMDE1NjI1Yy0wLjIzMzM5ODQsMC0wLjQzMzU5MzgsMC4wODM5ODQ0LTAuNjAwMDk3NywwLjI1ICBDMzkuNTgzNDk2MSwxMC4xOTE0MDYzLDM5LjUsMTAuMzkwNjI1LDM5LjUsMTAuNjI1YzAsMC4yMzI0MjE5LDAuMDgzNDk2MSwwLjQ0OTIxODgsMC4yNSwwLjY0ODQzNzUgIGMwLjE2NjUwMzksMC4xNjc5Njg4LDAuMzY2Njk5MiwwLjI1LDAuNjAwMDk3NywwLjI1aDAuMjVsMC4yNSwwLjA1MDc4MTNjMC4zOTk5MDIzLDAsMC42NjY1MDM5LTAuMjE2Nzk2OSwwLjc5OTgwNDctMC42NTAzOTA2ICBjMC4wNjY4OTQ1LTAuMjMyNDIxOSwwLjAzMzY5MTQtMC40NDkyMTg4LTAuMTAwMDk3Ny0wLjY1MDM5MDZDNDEuNDUwMTk1MywxMC4wNzQyMTg4LDQxLjI4MzIwMzEsOS45NDE0MDYzLDQxLjA0OTgwNDcsOS44NzV6ICAgTTgzLjM1MDA5NzcsMTEuMjI0NjA5NEw4NiwxOC4zNzVMNTUuMTQ5OTAyMywzMy4yNzM0Mzc1QzU1LjI1LDMzLjQ0MTQwNjMsNTUuMzUwMDk3NywzMy42NDA2MjUsNTUuNDUwMTk1MywzMy44NzUgIGwzMC42OTk3MDcsNTguMTQ4NDM3NWgtNy42MDAwOTc3bC0xOS40NDk3MDctMzJsLTIyLjA1MDI5MywxMi40NTExNzE5ICBjLTAuMjY2NjAxNiwwLjE2NjAxNTYtMC4zOTk5MDIzLDAuMzgyODEyNS0wLjM5OTkwMjMsMC42NTAzOTA2bC0xLjI1LDE5bC01Ljc1LTAuMTAxNTYyNWwwLjgwMDI5My0yMy4xOTkyMTg4bDE4LjQ0OTcwNy0xMS4yNSAgYzAuMzk5OTAyMy0wLjIzMjQyMTksMC41MTY2MDE2LTAuNTgzOTg0NCwwLjM1MDA5NzctMS4wNTA3ODEzbC02LjEwMDA5NzctMTYuMDQ4ODI4MWMtMC4xOTk3MDctMC40MDAzOTA2LTAuMzY2Njk5Mi0wLjczNDM3NS0wLjUtMSAgTDMyLjc1LDQ5LjM3NUwyMS4wNDk4MDQ3LDM4LjE3MzgyODFsMy4zNTAwOTc3LTQuMTk5MjE4OEwzMS4yNSw0MC44NzVjMC4yMDAxOTUzLDAuMTk5MjE4OCwwLjQxNjUwMzksMC4yODMyMDMxLDAuNjQ5OTAyMywwLjI1ICBjMC4yMzMzOTg0LDAsMC40NTAxOTUzLTAuMTAxNTYyNSwwLjY0OTkwMjMtMC4zMDA3ODEzbDkuMTAwMDk3Ny0xMUw4My4zNTAwOTc3LDExLjIyNDYwOTR6IE03NC4yMDAxOTUzLDE5LjU3NDIxODggIGMwLTAuMTY2MDE1Ni0wLjA4MzQ5NjEtMC4zNjcxODc1LTAuMjUtMC41OTk2MDk0Yy0wLjIzMzM5ODQtMC4xNjc5Njg4LTAuNDUwMTk1My0wLjI1LTAuNjUwMzkwNi0wLjI1ICBjLTAuMTY2NTAzOSwwLTAuMzY2MjEwOSwwLjA4MjAzMTMtMC41OTk2MDk0LDAuMjVjLTAuMTY2OTkyMiwwLjIzMjQyMTktMC4yNSwwLjQzMzU5MzgtMC4yNSwwLjU5OTYwOTQgIGMwLDAuMTk5MjE4OCwwLjA4MzAwNzgsMC40MTYwMTU2LDAuMjUsMC42NTAzOTA2YzAuMjMzMzk4NCwwLjE2NjAxNTYsMC40MzMxMDU1LDAuMjUsMC41OTk2MDk0LDAuMjUgIGMwLjIwMDE5NTMsMCwwLjQxNjk5MjItMC4wODM5ODQ0LDAuNjUwMzkwNi0wLjI1Qzc0LjExNjY5OTIsMTkuOTkwMjM0NCw3NC4yMDAxOTUzLDE5Ljc3MzQzNzUsNzQuMjAwMTk1MywxOS41NzQyMTg4eiAgIE03Ny42MDAwOTc3LDE4LjQ3NDYwOTRjMC4xNjY1MDM5LDAsMC4zNjY2OTkyLTAuMDgzOTg0NCwwLjYwMDA5NzctMC4yNWMwLjE2NjUwMzktMC4yMzQzNzUsMC4yNS0wLjQ1MTE3MTksMC4yNS0wLjY1MDM5MDYgIGMwLTAuMTY2MDE1Ni0wLjA4MzQ5NjEtMC4zNjcxODc1LTAuMjUtMC41OTk2MDk0Yy0wLjIzMzM5ODQtMC4yMDExNzE5LTAuNDMzNTkzOC0wLjMwMDc4MTMtMC42MDAwOTc3LTAuMzAwNzgxMyAgYy0wLjIzMzM5ODQsMC0wLjQzMzU5MzgsMC4wOTk2MDk0LTAuNjAwMDk3NywwLjMwMDc4MTNjLTAuMTY2NTAzOSwwLjE2NjAxNTYtMC4yNSwwLjM2NzE4NzUtMC4yNSwwLjU5OTYwOTQgIGMwLDAuMjY3NTc4MSwwLjA4MzQ5NjEsMC40ODI0MjE5LDAuMjUsMC42NTAzOTA2Qzc3LjE2NjUwMzksMTguMzkwNjI1LDc3LjM2NjY5OTIsMTguNDc0NjA5NCw3Ny42MDAwOTc3LDE4LjQ3NDYwOTR6ICAgTTgyLjM1MDA5NzcsMTYuMTczODI4MWMwLjE2NjUwMzktMC4xNjYwMTU2LDAuMjUtMC4zODI4MTI1LDAuMjUtMC42NTAzOTA2YzAtMC4yMzI0MjE5LTAuMDgzNDk2MS0wLjQzMTY0MDYtMC4yNS0wLjU5OTYwOTQgIGMtMC4xNjY1MDM5LTAuMTY2MDE1Ni0wLjM2NjY5OTItMC4yNS0wLjYwMDA5NzctMC4yNWMtMC4yMDAxOTUzLDAtMC4zODMzMDA4LDAuMDgzOTg0NC0wLjU0OTgwNDcsMC4yNSAgYy0wLjE2Njk5MjIsMC4xNjc5Njg4LTAuMjUsMC4zNjcxODc1LTAuMjUsMC41OTk2MDk0YzAsMC4yNjc1NzgxLDAuMDgzMDA3OCwwLjQ4NDM3NSwwLjI1LDAuNjUwMzkwNiAgYzAuMTY2NTAzOSwwLjE2Nzk2ODgsMC4zNDk2MDk0LDAuMjUsMC41NDk4MDQ3LDAuMjVDODEuOTgzMzk4NCwxNi40MjM4MjgxLDgyLjE4MzU5MzgsMTYuMzQxNzk2OSw4Mi4zNTAwOTc3LDE2LjE3MzgyODF6J1xuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBpZD0nbWVudS10b2dnbGUnIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdtZW51LXRvZ2dsZScgY2xhc3NOYW1lPSdsYWJlbC10b2dnbGUnPjwvbGFiZWw+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9zaG93cyc+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhPlNob3dzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2xpc3QnPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5Tb25nIExpc3Q8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvY2xpZW50cyc+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhPkNsaWVudHM8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvbWVkaWEnPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5NZWRpYTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0Jz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4VHdvJz5cbiAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vdHdpdHRlci5jb20vZ29vZGVub3VnaGtiYW5kJz5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDU2LjY5MyA1Ni42OTMnXG4gICAgICAgICAgICAgICAgaGVpZ2h0PSc1Ni42OTNweCdcbiAgICAgICAgICAgICAgICBpZD0nTGF5ZXJfMSdcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPScxLjEnXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDU2LjY5MyA1Ni42OTMnXG4gICAgICAgICAgICAgICAgd2lkdGg9JzI1cHgnXG4gICAgICAgICAgICAgICAgaGVpZ2h0PScyNXB4J1xuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001Mi44MzcsMTUuMDY1Yy0xLjgxMSwwLjgwNS0zLjc2LDEuMzQ4LTUuODA1LDEuNTkxYzIuMDg4LTEuMjUsMy42ODktMy4yMyw0LjQ0NC01LjU5MmMtMS45NTMsMS4xNTktNC4xMTUsMi02LjQxOCwyLjQ1NCAgYy0xLjg0My0xLjk2NC00LjQ3LTMuMTkyLTcuMzc3LTMuMTkyYy01LjU4MSwwLTEwLjEwNiw0LjUyNS0xMC4xMDYsMTAuMTA3YzAsMC43OTEsMC4wODksMS41NjIsMC4yNjIsMi4zMDMgIGMtOC40LTAuNDIyLTE1Ljg0OC00LjQ0NS0yMC44MzMtMTAuNTZjLTAuODcsMS40OTItMS4zNjgsMy4yMjgtMS4zNjgsNS4wODJjMCwzLjUwNiwxLjc4NCw2LjYsNC40OTYsOC40MTIgIGMtMS42NTYtMC4wNTMtMy4yMTUtMC41MDgtNC41NzgtMS4yNjVjLTAuMDAxLDAuMDQyLTAuMDAxLDAuMDg1LTAuMDAxLDAuMTI4YzAsNC44OTYsMy40ODQsOC45OCw4LjEwOCw5LjkxICBjLTAuODQ4LDAuMjMtMS43NDEsMC4zNTQtMi42NjMsMC4zNTRjLTAuNjUyLDAtMS4yODUtMC4wNjMtMS45MDItMC4xODJjMS4yODcsNC4wMTUsNS4wMTksNi45MzgsOS40NDEsNy4wMTkgIGMtMy40NTksMi43MTEtNy44MTYsNC4zMjctMTIuNTUyLDQuMzI3Yy0wLjgxNSwwLTEuNjItMC4wNDgtMi40MTEtMC4xNDJjNC40NzQsMi44NjksOS43ODYsNC41NDEsMTUuNDkzLDQuNTQxICBjMTguNTkxLDAsMjguNzU2LTE1LjQsMjguNzU2LTI4Ljc1NmMwLTAuNDM4LTAuMDA5LTAuODc1LTAuMDI4LTEuMzA5QzQ5Ljc2OSwxOC44NzMsNTEuNDgzLDE3LjA5Miw1Mi44MzcsMTUuMDY1eicgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzL0dvb2RFbm91Z2hMSVZFS0FSQU9LRS8nPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgNTYuNjkzIDU2LjY5MydcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzU2LjY5M3B4J1xuICAgICAgICAgICAgICAgIGlkPSdMYXllcl8xJ1xuICAgICAgICAgICAgICAgIHZlcnNpb249JzEuMSdcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgNTYuNjkzIDU2LjY5MydcbiAgICAgICAgICAgICAgICB3aWR0aD0nMjVweCdcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzI1cHgnXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggZD0nTTQwLjQzLDIxLjczOWgtNy42NDV2LTUuMDE0YzAtMS44ODMsMS4yNDgtMi4zMjIsMi4xMjctMi4zMjJjMC44NzcsMCw1LjM5NSwwLDUuMzk1LDBWNi4xMjVsLTcuNDMtMC4wMjkgIGMtOC4yNDgsMC0xMC4xMjUsNi4xNzQtMTAuMTI1LDEwLjEyNXY1LjUxOGgtNC43N3Y4LjUzaDQuNzdjMCwxMC45NDcsMCwyNC4xMzcsMCwyNC4xMzdoMTAuMDMzYzAsMCwwLTEzLjMyLDAtMjQuMTM3aDYuNzcgIEw0MC40MywyMS43Mzl6JyAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZ29vZGVub3VnaGxpdmVrYXJhb2tlLyc+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgZmlsbD0nI0YxZjFmMSdcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgNTAgNTAnXG4gICAgICAgICAgICAgICAgd2lkdGg9JzI1cHgnXG4gICAgICAgICAgICAgICAgaGVpZ2h0PScyNXB4J1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICA8cGF0aCBkPSdNIDE2IDMgQyA4LjgzIDMgMyA4LjgzIDMgMTYgTCAzIDM0IEMgMyA0MS4xNyA4LjgzIDQ3IDE2IDQ3IEwgMzQgNDcgQyA0MS4xNyA0NyA0NyA0MS4xNyA0NyAzNCBMIDQ3IDE2IEMgNDcgOC44MyA0MS4xNyAzIDM0IDMgTCAxNiAzIHogTSAzNyAxMSBDIDM4LjEgMTEgMzkgMTEuOSAzOSAxMyBDIDM5IDE0LjEgMzguMSAxNSAzNyAxNSBDIDM1LjkgMTUgMzUgMTQuMSAzNSAxMyBDIDM1IDExLjkgMzUuOSAxMSAzNyAxMSB6IE0gMjUgMTQgQyAzMS4wNyAxNCAzNiAxOC45MyAzNiAyNSBDIDM2IDMxLjA3IDMxLjA3IDM2IDI1IDM2IEMgMTguOTMgMzYgMTQgMzEuMDcgMTQgMjUgQyAxNCAxOC45MyAxOC45MyAxNCAyNSAxNCB6IE0gMjUgMTYgQyAyMC4wNCAxNiAxNiAyMC4wNCAxNiAyNSBDIDE2IDI5Ljk2IDIwLjA0IDM0IDI1IDM0IEMgMjkuOTYgMzQgMzQgMjkuOTYgMzQgMjUgQyAzNCAyMC4wNCAyOS45NiAxNiAyNSAxNiB6JyAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J3dyYXBwZXInPjwvaGVhZGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICBzdmcge1xuICAgICAgICBmaWxsOiAjZjFmMWYxO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgfVxuXG4gICAgICBzdmc6aG92ZXIge1xuICAgICAgICBmaWxsOiAjNzYxZjZiO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBcblxuICAgICAgbmF2IHVsIGE6aG92ZXIge1xuICAgICAgIGNvbG9yOiAjZmVlO1xuICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICM3NjFmNmIsIDAgMCAwLjVlbSAjNzYxZjZiLFxuICAgICAgICAgIDAgMCAwLjFlbSAjNzYxZjZiLCAwIDEwcHggM3B4ICMwMDA7XG4gICAgICB9XG5cbiAgICAubmF2QmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubmF2QmFyLnNjcm9sbGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyOSw1Miw2NSwgMC45OCkhaW1wb3J0YW50O1xuICAgICAgICAgIHotaW5kZXg6IDMwMDtcbiAgICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgIH1cblxuICAgICAgLnNpbmdNYW4ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwIDFlbSAwO1xuICAgICAgfVxuXG4gICAgICAubmF2QmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgei1pbmRleDogMzAwO1xuICAgICAgfVxuXG4gICAgICAubG9nbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBtYXJnaW46IDFlbSAwO1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICB9XG5cbiAgICAgIG5hdiB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgfVxuXG4gICAgICBuYXYgdWwgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjbWVudS10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubGFiZWwtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgbGFiZWwge1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxNXB4KSB7XG5cbiAgICAgICAgICBuYXYgLndyYXBwZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIHJnYigyMjksNTIsNjUsMC45OCkhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5hdiB1bCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMiU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAgIG5hdiB1bCBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxOyBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBtYXJnaW46MCAyMHB4O1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICByZ2JhKDIyOSw1Miw2NSwgMC45OCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNtZW51LXRvZ2dsZTpjaGVja2VkIH4gdWwge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGhlaWdodDogNjV2aDtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbSAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGFiZWwtdG9nZ2xlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdG8gYm90dG9tLFxuICAgICAgICAgICAgICAjZjFmMWYxIDAlLFxuICAgICAgICAgICAgICAjZjFmMWYxIDIwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA0MCUsXG4gICAgICAgICAgICAgICNmMWYxZjEgNDAlLFxuICAgICAgICAgICAgICAjZjFmMWYxIDYwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNjAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA4MCUsXG4gICAgICAgICAgICAgICNmMWYxZjEgODAlLFxuICAgICAgICAgICAgICAjZjFmMWYxIDEwMCVcbiAgICAgICAgICAgICk7IFxuICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIGxpIGEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYgdWwgYSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICBcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgdWwgbGkgYSB7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICB9XG4gICAgICAgIGxpOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdkJhciBzdmcge1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zb25nQnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0SGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/components/TestHeader.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TestHeader);

/***/ })

})
//# sourceMappingURL=list.js.b03fca39b7a87c69ebef.hot-update.js.map