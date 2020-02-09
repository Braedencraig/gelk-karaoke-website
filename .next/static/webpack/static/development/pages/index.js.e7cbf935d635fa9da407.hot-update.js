webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");
/* harmony import */ var _components_NeonLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NeonLogo */ "./components/NeonLogo.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_spotify_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-spotify-player */ "./node_modules/react-spotify-player/dist/SpotifyPlayer.js");
/* harmony import */ var react_spotify_player__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_spotify_player__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_clientComp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/clientComp */ "./components/clientComp.js");
/* harmony import */ var _components_mediaComp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/mediaComp */ "./components/mediaComp.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Gallery */ "./components/Gallery.js");
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














var size = {
  width: '90%',
  height: 700
};
var view = 'list'; // or 'coverart'

var theme = 'black'; // or 'white'

var Index = function Index(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-4069103120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    id: "text",
    className: "jsx-4069103120" + " " + 'scrollBox',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4069103120" + " " + 'gelkLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("img", {
    src: "/testNeon.gif",
    alt: "good enough live karaoke neon logo",
    className: "jsx-4069103120" + " " + 'gelkImageLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4069103120" + " " + 'songButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("a", {
    href: "/list",
    className: "jsx-4069103120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "View Song List"))), __jsx("div", {
    className: "jsx-4069103120" + " " + 'chevron',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    className: "scrollChevron",
    to: "text",
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("svg", {
    height: "40px",
    width: "40px",
    fill: "#F1F1F1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    x: "0px",
    y: "0px",
    className: "jsx-4069103120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M15.2928932,9.29289322 L16.7071068,10.7071068 L12,15.4142136 L7.29289322,10.7071068 L8.70710678,9.29289322 L12,12.5857864 L15.2928932,9.29289322 Z",
    className: "jsx-4069103120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1966249990",
    __self: this
  }, ".songButton.jsx-4069103120{width:100%;text-align:center;margin-bottom:4%;}.songButton.jsx-4069103120 a.jsx-4069103120{background:none;padding:10px 20px;border-radius:50px;border:3px solid #f1f1f1;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;font-size:20px;cursor:pointer;}.songButton.jsx-4069103120:hover a.jsx-4069103120{text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.songButton.jsx-4069103120 a.jsx-4069103120:hover{opacity:1;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.gelkImageLogo.jsx-4069103120{display:block;width:100%;height:auto;max-height:800px;}.gelkLogo.jsx-4069103120{width:70%;margin:0 auto;margin-top:3%;max-width:1400px;margin-bottom:2.5%;}svg.jsx-4069103120:hover{fill:rgba(241,241,241,0.6);cursor:pointer;}svg.jsx-4069103120{-webkit-transition:all 0.4s;transition:all 0.4s;}h1.jsx-4069103120,a.jsx-4069103120{font-family:'Montserrat',sans-serif;}ul.jsx-4069103120{padding:0;}li.jsx-4069103120{list-style:none;margin:5px 0;}a.jsx-4069103120{-webkit-text-decoration:none;text-decoration:none;}a.jsx-4069103120:hover{opacity:0.6;}.chevron.jsx-4069103120{margin-bottom:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:94%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:fixed;top:88vh;z-index:100;-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1);}.wrapper.jsx-4069103120{margin:0 auto;max-width:960px;padding:0 2%;}.scrollBox.jsx-4069103120{position:relative;color:white;width:20px;height:20px;bottom:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVnQixBQUlrQixBQU1LLEFBY3NCLEFBTTVCLEFBTUksQUFPSixBQU9vQixBQUtSLEFBSWlCLEFBSTNCLEFBSU0sQUFLSyxBQUlULEFBSVEsQUFXTixBQU1JLFVBakVrQixBQVl4QixBQW9CZCxDQTNEa0IsQ0F3RWxCLEVBeENXLEFBdURPLEVBakZBLEFBeURILEVBOEJELEVBakJDLElBcENELENBUEYsRUFhSyxFQTdDQSxBQStEakIsQ0F3QmUsQUFNRixJQXZGTSxFQWdEbkIsQ0FyQmlCLENBT0EsR0FzREgsQ0FoRGQsQ0EwQ0EsR0F2RkYsRUFpREUsRUFpQkEsR0E1RHlCLEFBd0ZWLENBN0RqQixDQU9xQixXQXVEbkIsUUF0REYsSUFsQ21CLGdCQW9FTCxFQW5FUSxPQVV0QixDQTBENkIsU0FsRDdCLCtCQWpCZ0IsY0FDTywyQ0FtRUosT0FsRUYsUUFtRUosT0FqRWQsRUFrRWlCLFlBRWYsQ0FwRUQsNkVBb0VFIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IE5lb25Mb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTmVvbkxvZ28nO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNlbCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgU3BvdGlmeVBsYXllciBmcm9tICdyZWFjdC1zcG90aWZ5LXBsYXllcic7XG5pbXBvcnQgQ2xpZW50Q29tcCBmcm9tICcuLi9jb21wb25lbnRzL2NsaWVudENvbXAnO1xuaW1wb3J0IE1lZGlhQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL21lZGlhQ29tcCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcnknO1xuXG5pbXBvcnQge1xuICBMaW5rLFxuICBFbGVtZW50LFxuICBFdmVudHMsXG4gIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLFxuICBzY3JvbGxTcHksXG4gIHNjcm9sbGVyLFxufSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuXG5jb25zdCBzaXplID0ge1xuICB3aWR0aDogJzkwJScsXG4gIGhlaWdodDogNzAwLFxufTtcbmNvbnN0IHZpZXcgPSAnbGlzdCc7IC8vIG9yICdjb3ZlcmFydCdcbmNvbnN0IHRoZW1lID0gJ2JsYWNrJzsgLy8gb3IgJ3doaXRlJ1xuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcbiAgPExheW91dD5cbiAgICA8aGVhZGVyPlxuICAgICAgPGRpdiBpZD0ndGV4dCcgY2xhc3NOYW1lPSdzY3JvbGxCb3gnPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dlbGtMb2dvJz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT0nZ2Vsa0ltYWdlTG9nbydcbiAgICAgICAgICBzcmM9Jy90ZXN0TmVvbi5naWYnXG4gICAgICAgICAgYWx0PSdnb29kIGVub3VnaCBsaXZlIGthcmFva2UgbmVvbiBsb2dvJ1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc29uZ0J1dHRvbic+XG4gICAgICAgIDxhIGhyZWY9Jy9saXN0Jz5WaWV3IFNvbmcgTGlzdDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjaGV2cm9uJz5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT0nc2Nyb2xsQ2hldnJvbidcbiAgICAgICAgdG89J3RleHQnXG4gICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgaGVpZ2h0PSc0MHB4J1xuICAgICAgICAgIHdpZHRoPSc0MHB4J1xuICAgICAgICAgIGZpbGw9JyNGMUYxRjEnXG4gICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICB4PScwcHgnXG4gICAgICAgICAgeT0nMHB4J1xuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgIGQ9J00xMiwyMyBDNS45MjQ4Njc3NSwyMyAxLDE4LjA3NTEzMjIgMSwxMiBDMSw1LjkyNDg2Nzc1IDUuOTI0ODY3NzUsMSAxMiwxIEMxOC4wNzUxMzIyLDEgMjMsNS45MjQ4Njc3NSAyMywxMiBDMjMsMTguMDc1MTMyMiAxOC4wNzUxMzIyLDIzIDEyLDIzIFogTTEyLDIxIEMxNi45NzA1NjI3LDIxIDIxLDE2Ljk3MDU2MjcgMjEsMTIgQzIxLDcuMDI5NDM3MjUgMTYuOTcwNTYyNywzIDEyLDMgQzcuMDI5NDM3MjUsMyAzLDcuMDI5NDM3MjUgMywxMiBDMywxNi45NzA1NjI3IDcuMDI5NDM3MjUsMjEgMTIsMjEgWiBNMTUuMjkyODkzMiw5LjI5Mjg5MzIyIEwxNi43MDcxMDY4LDEwLjcwNzEwNjggTDEyLDE1LjQxNDIxMzYgTDcuMjkyODkzMjIsMTAuNzA3MTA2OCBMOC43MDcxMDY3OCw5LjI5Mjg5MzIyIEwxMiwxMi41ODU3ODY0IEwxNS4yOTI4OTMyLDkuMjkyODkzMjIgWidcbiAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAuc29uZ0J1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgIH1cblxuICAgIC5zb25nQnV0dG9uIGEge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgfVxuXG4gICAgLnNvbmdCdXR0b246aG92ZXIgYSB7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLCAwIDAgMC41ZW0gIzc2MWY2YixcbiAgICAgICAgICAwIDAgMC4xZW0gIzc2MWY2YiwgMCAxMHB4IDNweCAjMDAwO1xuICAgIH1cblxuICAgIFxuXG4gICAgLnNvbmdCdXR0b24gYTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICM3NjFmNmIsIDAgMCAwLjVlbSAjNzYxZjZiLFxuICAgICAgICAgIDAgMCAwLjFlbSAjNzYxZjZiLCAwIDEwcHggM3B4ICMwMDA7XG4gICAgfVxuXG4gICAgLmdlbGtJbWFnZUxvZ28ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xuICAgIH1cblxuICAgIC5nZWxrTG9nbyB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMi41JTtcbiAgICB9XG4gICAgICBzdmc6aG92ZXIge1xuICAgICAgICBmaWxsOiByZ2JhKDI0MSwyNDEsMjQxLCAwLjYpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgfVxuICAgICAgaDEsXG4gICAgICBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG5cbiAgICAgIC5jaGV2cm9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiA5NCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiA4OHZoO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpXG4gICAgICB9XG5cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMiU7XG4gICAgICB9XG5cbiAgICAgIC5zY3JvbGxCb3h7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBib3R0b206IDIwMHB4O1xuICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8PlxuICAgICAgey8qIDxDYXJvdXNlbCAvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcG90aWZ5QWJvdXQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleE9uZVNpZGUnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnRyb1RleHQnPlxuICAgICAgICAgICAgPGgzPkFib3V0IEdFTEs8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEdvb2QgRW5vdWdoIExpdmUgS2FyYW9rZSBpcyBUb3JvbnRvJ3MgbW9zdCBwb3B1bGFyIGxpdmUgYmFuZFxuICAgICAgICAgICAgICBrYXJhb2tlIGV4cGVyaWVuY2UsIGxldHRpbmcgYW55b25lIHdpdGggdGhlIGRlc2lyZSBhbmQgZ3V0cyB0b1xuICAgICAgICAgICAgICBqb2luIHVzIG9uIHN0YWdlLCB0YWtlIHRoZSBtaWMgYW5kIHNpbmchIElkZWFsIGZvciBjb3Jwb3JhdGVcbiAgICAgICAgICAgICAgZXZlbnRzLCBiaXJ0aGRheSBwYXJ0aWVzIGFuZCB3ZWRkaW5ncywgR29vZCBFbm91Z2ggaXMgYSBsaXZlIGJhbmRcbiAgICAgICAgICAgICAgZmVhdHVyaW5nIGd1aXRhcnMsIGJhc3MsIGtleWJvYXJkcyBhbmQgZHJ1bXMsIGFuZCBhIHJlcGVydG9pcmUgb2ZcbiAgICAgICAgICAgICAgb3ZlciA0MDAgc29uZ3Mgc3Bhbm5pbmcgZ2VucmVzIGFuZCBlcmFzLiBHZXQgaW4gdG91Y2ggYXR7JyAnfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9J21haWx0bzpzaW5nQGdvb2Rlbm91Z2hsaXZla2FyYW9rZS5jb20/U3ViamVjdD1IZWxsbyUyMCdcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J190b3AnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBzaW5nQGdvb2Rlbm91Z2hsaXZla2FyYW9rZS5jb21cbiAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgIHRvIGJvb2sgeW91ciBldmVudCwgYW5kIGZvbGxvdyB1cyBvbiBJbnN0YWdyYW0gdG8gc2VlIHdlZWtseVxuICAgICAgICAgICAgICBwdWJsaWMgc2hvd3MgYWNyb3NzIE9udGFyaW8uIFNpbmNlIDIwMTMsIHdlIGhhdmUgcGxheWVkIHRob3VzYW5kc1xuICAgICAgICAgICAgICBvZiBob3VycyBvbiBzdGFnZSBhdCBwcml2YXRlIGFuZCBwdWJsaWMgZXZlbnRzIHdpdGggb3VyIHVuaXF1ZSxcbiAgICAgICAgICAgICAgaW50ZXJhY3RpdmUgcm9jayduJ3JvbGwgZXhwZXJpZW5jZS4gSXTigJlzIGEgYml0IHRlcnJpZnlpbmcsIGh1Z2VseVxuICAgICAgICAgICAgICBleGhpbGFyYXRpbmcgYW5kIGNvbXBsZXRlbHkgYXdlc29tZSFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdEJ1dHRvbic+XG4gICAgICAgICAgICA8YSBocmVmPScvc2hvd3MnPlVwY29taW5nIFNob3dzPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhUd29TaWRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BvdGlmeSc+XG4gICAgICAgICAgICA8U3BvdGlmeVBsYXllclxuICAgICAgICAgICAgICB1cmk9J3Nwb3RpZnk6cGxheWxpc3Q6NFFtWDQ0ZHl6WmE2a09iWW01alh6UydcbiAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgdmlldz17dmlld31cbiAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxHYWxsZXJ5IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdEJ1dHRvbic+XG4gICAgICAgIDxhIGhyZWY9Jy9jb250YWN0Jz5Db250YWN0IFVzPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db25jZXJ0K09uZXxNb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuXG5cbiAgICAgIC5jb250YWN0QnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuY29udGFjdEJ1dHRvbiBhIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICB9XG5cbiAgICAuY29udGFjdEJ1dHRvbjpob3ZlciBhIHtcbiAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICM3NjFmNmIsIDAgMCAwLjVlbSAjNzYxZjZiLFxuICAgICAgICAgIDAgMCAwLjFlbSAjNzYxZjZiLCAwIDEwcHggM3B4ICMwMDA7XG4gICAgfVxuXG4gICAgXG5cbiAgICAuY29udGFjdEJ1dHRvbiBhOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gIzc2MWY2YiwgMCAwIDAuNWVtICM3NjFmNmIsXG4gICAgICAgICAgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAgICAubGlzdEJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgIH1cblxuICAgIC5saXN0QnV0dG9uIGEge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2U1MzQ0MTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2U1MzQ0MTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cblxuICAgIC5saXN0QnV0dG9uOmhvdmVyIGEge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRleHQtc2hhZG93OiAwIDQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gI2U1MzQ0MSwgMCAwIDAuNWVtICNlNTM0NDEsXG4gICAgICAgICAgMCAwIDAuMWVtICNlNTM0NDEsIDAgMTBweCAzcHggI2YxZjFmMTtcbiAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogI2U1MzQ0MTtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAuc3BvdGlmeSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAyJSAwO1xuICAgICAgfVxuXG4gICAgICAuc3BvdGlmeUFib3V0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4T25lU2lkZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgfVxuXG4gICAgICAuZmxleFR3b1NpZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTUzNDQxO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCB7XG4gICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMjUsMywyMik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IGEge1xuICAgICAgICBjb2xvcjogcmdiKDI1LDMsMjIpICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5pbnRyb1RleHQgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZTUzNDQxICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjUsMywyMilcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY1O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBjdXJzaXZlO1xuICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3NXB4KSB7XG4gICAgICAgIC5pbnRyb1RleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQgcCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMzJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTBweCkge1xuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI1dmg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hldnJvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTcwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQgcCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTU3cHgpIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nZWxrTG9nbyB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMzdmg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-4069103120" + " " + 'spotifyAbout',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069103120" + " " + 'flexOneSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069103120" + " " + 'introText',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4069103120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "About GELK"), __jsx("p", {
    className: "jsx-4069103120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Good Enough Live Karaoke is Toronto's most popular live band karaoke experience, letting anyone with the desire and guts to join us on stage, take the mic and sing! Ideal for corporate events, birthday parties and weddings, Good Enough is a live band featuring guitars, bass, keyboards and drums, and a repertoire of over 400 songs spanning genres and eras. Get in touch at", ' ', __jsx("a", {
    href: "mailto:sing@goodenoughlivekaraoke.com?Subject=Hello%20",
    target: "_top",
    className: "jsx-4069103120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "sing@goodenoughlivekaraoke.com"), ' ', "to book your event, and follow us on Instagram to see weekly public shows across Ontario. Since 2013, we have played thousands of hours on stage at private and public events with our unique, interactive rock'n'roll experience. It\u2019s a bit terrifying, hugely exhilarating and completely awesome!")), __jsx("div", {
    className: "jsx-4069103120" + " " + 'listButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("a", {
    href: "/shows",
    className: "jsx-4069103120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Upcoming Shows"))), __jsx("div", {
    className: "jsx-4069103120" + " " + 'flexTwoSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069103120" + " " + 'spotify',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx(react_spotify_player__WEBPACK_IMPORTED_MODULE_11___default.a, {
    uri: "spotify:playlist:4QmX44dyzZa6kObYm5jXzS",
    size: size,
    view: view,
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  })))), __jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4069103120" + " " + 'contactButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx("a", {
    href: "/contact",
    className: "jsx-4069103120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Contact Us"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4247139295",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Concert+One|Montserrat&display=swap');.contactButton.jsx-4069103120{width:100%;text-align:center;margin-bottom:0;}.contactButton.jsx-4069103120 a.jsx-4069103120{background:none;padding:10px 20px;border-radius:50px;border:3px solid #f1f1f1;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;font-size:20px;font-family:'Montserrat',sans-serif;cursor:pointer;}.contactButton.jsx-4069103120:hover a.jsx-4069103120{text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.contactButton.jsx-4069103120 a.jsx-4069103120:hover{opacity:1;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.listButton.jsx-4069103120{width:100%;text-align:center;margin-bottom:4%;}.listButton.jsx-4069103120 a.jsx-4069103120{background:none;font-family:'Montserrat',sans-serif;padding:10px 20px;border-radius:50px;border:3px solid #e53441;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#e53441;-webkit-text-decoration:none;text-decoration:none;font-size:20px;cursor:pointer;}.listButton.jsx-4069103120:hover a.jsx-4069103120{opacity:1;text-shadow:0 40px 100px,0 0 2px,0 0 1em #e53441,0 0 0.5em #e53441, 0 0 0.1em #e53441,0 10px 3px #f1f1f1;}h3.jsx-4069103120{text-align:center;font-family:'Concert One',sans-serif;color:#e53441;font-size:40px;}.spotify.jsx-4069103120{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2% 0;}.spotifyAbout.jsx-4069103120{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.flexOneSide.jsx-4069103120{width:60%;padding:2%;background:#f1f1f1;}.flexTwoSide.jsx-4069103120{background:#e53441;width:40%;padding:2%;}.introText.jsx-4069103120{max-width:1400px;font-family:'Montserrat',sans-serif;font-size:28px;color:rgb(25,3,22);font-weight:bold;}.introText.jsx-4069103120 a.jsx-4069103120{color:rgb(25,3,22) !important;}.introText.jsx-4069103120 a.jsx-4069103120:hover{color:#e53441 !important;}a.jsx-4069103120{color:rgb(25,3,22) text-decoration:underline;cursor:pointer;-webkit-transition:all 0.4s;transition:all 0.4s;}a.jsx-4069103120:hover{opacity:0.65;}.introText.jsx-4069103120 p.jsx-4069103120{line-height:38px;margin-bottom:50px;font-size:20px;text-align:left;}h2.jsx-4069103120{text-align:center;font-size:70px;margin-top:-100px;font-family:'Concert One',cursive;color:#f1f1f1;}@media screen and (max-width:1075px){.introText.jsx-4069103120 h2.jsx-4069103120{font-size:30px;font-family:'Concert One',cursive;}.introText.jsx-4069103120{font-size:20px;}.introText.jsx-4069103120 p.jsx-4069103120{line-height:36px;}.gelkLogo.jsx-4069103120{margin-top:33%;}}@media screen and (max-width:690px){.gelkLogo.jsx-4069103120{margin-top:25vh;}.chevron.jsx-4069103120{margin-top:50px;}.introText.jsx-4069103120 h2.jsx-4069103120{font-size:30px;margin-top:-70px;margin-bottom:30px;}.introText.jsx-4069103120{font-size:16px;}.introText.jsx-4069103120 p.jsx-4069103120{line-height:32px;}}@media screen and (max-width:557px){svg.jsx-4069103120{width:30px;}.introText.jsx-4069103120 h2.jsx-4069103120{font-size:22px;}.gelkLogo.jsx-4069103120{width:90%;}.gelkLogo.jsx-4069103120{margin-top:33vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMk5nQixBQUVpRyxBQUkvRSxBQU1LLEFBZXNCLEFBTTVCLEFBTUMsQUFNSyxBQWNOLEFBTVMsQUFPSCxBQU9ELEFBS0gsQUFNUyxBQU1GLEFBUWEsQUFJTCxBQU1DLEFBTWIsQUFJSSxBQU9DLEFBU0QsQUFLQSxBQUlFLEFBSUYsQUFNQyxBQUlBLEFBR0QsQUFNQSxBQUlFLEFBTU4sQUFJSSxBQUlMLEFBR00sVUE5SmtCLEFBMEJHLEFBd0I1QixBQTBHWCxDQXhMZ0IsQUFpQ0EsQUErSWhCLEVBOURGLENBaERlLENBb0V3QixBQUtyQyxBQVFBLEFBYW1CLEFBTW5CLEFBY0EsQ0E5S2dCLEFBaUNtQixBQWtIbkMsQUFJQSxBQThCQSxDQWpHcUMsQUE0QmxCLEFBeUJuQixBQTJCQSxDQS9Hc0MsQUFrRXZCLENBekNMLEVBTFMsSUF1QnJCLElBckdnQixBQWlDQyxBQW1ESixDQWFiLEVBK0R1QixDQW5DSCxDQXZIRCxFQWdIRixJQXZDakIsQUFNQSxLQXBGRixBQTBHbUIsQ0F6RW5CLEdBb0dJLEVBZmdCLEFBT21CLEFBbUNuQyxDQTFIZ0IsQ0FoQ08sQUFtRlIsRUEvQkQsS0FpRE0sT0FZdEIsQ0E3QnFCLENBL0JKLENBcEJFLElBZ0NOLElBaEVJLE1BcURqQixDQVlBLEFBc0RnQixFQW5DRyxDQTFCTSxDQXpCQSxPQWhDTCxHQXVIcEIsSUE1R0YsQ0F5RUUsSUFnQkEsS0FqRkYsQ0FjbUIsQ0FZbkIsaUJBWHNCLFlBakNOLGNBQ08sc0JBaUNQLE9BdUJBLE9BdEJPLEtBdUJyQixTQXhEZSxlQUNzQixxQkFpQ3RCLGVBL0JsQixBQWlDQSxlQWpDQyxBQWlDQSIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFRlc3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0SGVhZGVyJztcbmltcG9ydCBOZW9uTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL05lb25Mb2dvJztcbmltcG9ydCAqIGFzIFNjcm9sbCBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudHMvQ2Fyb3VzZWwnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MnO1xuaW1wb3J0IFNwb3RpZnlQbGF5ZXIgZnJvbSAncmVhY3Qtc3BvdGlmeS1wbGF5ZXInO1xuaW1wb3J0IENsaWVudENvbXAgZnJvbSAnLi4vY29tcG9uZW50cy9jbGllbnRDb21wJztcbmltcG9ydCBNZWRpYUNvbXAgZnJvbSAnLi4vY29tcG9uZW50cy9tZWRpYUNvbXAnO1xuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi4vY29tcG9uZW50cy9HYWxsZXJ5JztcblxuaW1wb3J0IHtcbiAgTGluayxcbiAgRWxlbWVudCxcbiAgRXZlbnRzLFxuICBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCxcbiAgc2Nyb2xsU3B5LFxuICBzY3JvbGxlcixcbn0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcblxuY29uc3Qgc2l6ZSA9IHtcbiAgd2lkdGg6ICc5MCUnLFxuICBoZWlnaHQ6IDcwMCxcbn07XG5jb25zdCB2aWV3ID0gJ2xpc3QnOyAvLyBvciAnY292ZXJhcnQnXG5jb25zdCB0aGVtZSA9ICdibGFjayc7IC8vIG9yICd3aGl0ZSdcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxkaXYgaWQ9J3RleHQnIGNsYXNzTmFtZT0nc2Nyb2xsQm94Jz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdnZWxrTG9nbyc+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9J2dlbGtJbWFnZUxvZ28nXG4gICAgICAgICAgc3JjPScvdGVzdE5lb24uZ2lmJ1xuICAgICAgICAgIGFsdD0nZ29vZCBlbm91Z2ggbGl2ZSBrYXJhb2tlIG5lb24gbG9nbydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NvbmdCdXR0b24nPlxuICAgICAgICA8YSBocmVmPScvbGlzdCc+VmlldyBTb25nIExpc3Q8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY2hldnJvbic+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9J3Njcm9sbENoZXZyb24nXG4gICAgICAgIHRvPSd0ZXh0J1xuICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgID5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGhlaWdodD0nNDBweCdcbiAgICAgICAgICB3aWR0aD0nNDBweCdcbiAgICAgICAgICBmaWxsPScjRjFGMUYxJ1xuICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgeD0nMHB4J1xuICAgICAgICAgIHk9JzBweCdcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsLXJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICBkPSdNMTIsMjMgQzUuOTI0ODY3NzUsMjMgMSwxOC4wNzUxMzIyIDEsMTIgQzEsNS45MjQ4Njc3NSA1LjkyNDg2Nzc1LDEgMTIsMSBDMTguMDc1MTMyMiwxIDIzLDUuOTI0ODY3NzUgMjMsMTIgQzIzLDE4LjA3NTEzMjIgMTguMDc1MTMyMiwyMyAxMiwyMyBaIE0xMiwyMSBDMTYuOTcwNTYyNywyMSAyMSwxNi45NzA1NjI3IDIxLDEyIEMyMSw3LjAyOTQzNzI1IDE2Ljk3MDU2MjcsMyAxMiwzIEM3LjAyOTQzNzI1LDMgMyw3LjAyOTQzNzI1IDMsMTIgQzMsMTYuOTcwNTYyNyA3LjAyOTQzNzI1LDIxIDEyLDIxIFogTTE1LjI5Mjg5MzIsOS4yOTI4OTMyMiBMMTYuNzA3MTA2OCwxMC43MDcxMDY4IEwxMiwxNS40MTQyMTM2IEw3LjI5Mjg5MzIyLDEwLjcwNzEwNjggTDguNzA3MTA2NzgsOS4yOTI4OTMyMiBMMTIsMTIuNTg1Nzg2NCBMMTUuMjkyODkzMiw5LjI5Mjg5MzIyIFonXG4gICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgLnNvbmdCdXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgICB9XG5cbiAgICAuc29uZ0J1dHRvbiBhIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cblxuICAgIC5zb25nQnV0dG9uOmhvdmVyIGEge1xuICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gIzc2MWY2YiwgMCAwIDAuNWVtICM3NjFmNmIsXG4gICAgICAgICAgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICBcblxuICAgIC5zb25nQnV0dG9uIGE6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLCAwIDAgMC41ZW0gIzc2MWY2YixcbiAgICAgICAgICAwIDAgMC4xZW0gIzc2MWY2YiwgMCAxMHB4IDNweCAjMDAwO1xuICAgIH1cblxuICAgIC5nZWxrSW1hZ2VMb2dvIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgICB9XG5cbiAgICAuZ2Vsa0xvZ28ge1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNSU7XG4gICAgfVxuICAgICAgc3ZnOmhvdmVyIHtcbiAgICAgICAgZmlsbDogcmdiYSgyNDEsMjQxLDI0MSwgMC42KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIH1cbiAgICAgIGgxLFxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuXG4gICAgICAuY2hldnJvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogOTQlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogODh2aDtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKVxuICAgICAgfVxuXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDIlO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsQm94e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYm90dG9tOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPD5cbiAgICAgIHsvKiA8Q2Fyb3VzZWwgLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BvdGlmeUFib3V0Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhPbmVTaWRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW50cm9UZXh0Jz5cbiAgICAgICAgICAgIDxoMz5BYm91dCBHRUxLPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBHb29kIEVub3VnaCBMaXZlIEthcmFva2UgaXMgVG9yb250bydzIG1vc3QgcG9wdWxhciBsaXZlIGJhbmRcbiAgICAgICAgICAgICAga2FyYW9rZSBleHBlcmllbmNlLCBsZXR0aW5nIGFueW9uZSB3aXRoIHRoZSBkZXNpcmUgYW5kIGd1dHMgdG9cbiAgICAgICAgICAgICAgam9pbiB1cyBvbiBzdGFnZSwgdGFrZSB0aGUgbWljIGFuZCBzaW5nISBJZGVhbCBmb3IgY29ycG9yYXRlXG4gICAgICAgICAgICAgIGV2ZW50cywgYmlydGhkYXkgcGFydGllcyBhbmQgd2VkZGluZ3MsIEdvb2QgRW5vdWdoIGlzIGEgbGl2ZSBiYW5kXG4gICAgICAgICAgICAgIGZlYXR1cmluZyBndWl0YXJzLCBiYXNzLCBrZXlib2FyZHMgYW5kIGRydW1zLCBhbmQgYSByZXBlcnRvaXJlIG9mXG4gICAgICAgICAgICAgIG92ZXIgNDAwIHNvbmdzIHNwYW5uaW5nIGdlbnJlcyBhbmQgZXJhcy4gR2V0IGluIHRvdWNoIGF0eycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPSdtYWlsdG86c2luZ0Bnb29kZW5vdWdobGl2ZWthcmFva2UuY29tP1N1YmplY3Q9SGVsbG8lMjAnXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfdG9wJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgc2luZ0Bnb29kZW5vdWdobGl2ZWthcmFva2UuY29tXG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICB0byBib29rIHlvdXIgZXZlbnQsIGFuZCBmb2xsb3cgdXMgb24gSW5zdGFncmFtIHRvIHNlZSB3ZWVrbHlcbiAgICAgICAgICAgICAgcHVibGljIHNob3dzIGFjcm9zcyBPbnRhcmlvLiBTaW5jZSAyMDEzLCB3ZSBoYXZlIHBsYXllZCB0aG91c2FuZHNcbiAgICAgICAgICAgICAgb2YgaG91cnMgb24gc3RhZ2UgYXQgcHJpdmF0ZSBhbmQgcHVibGljIGV2ZW50cyB3aXRoIG91ciB1bmlxdWUsXG4gICAgICAgICAgICAgIGludGVyYWN0aXZlIHJvY2snbidyb2xsIGV4cGVyaWVuY2UuIEl04oCZcyBhIGJpdCB0ZXJyaWZ5aW5nLCBodWdlbHlcbiAgICAgICAgICAgICAgZXhoaWxhcmF0aW5nIGFuZCBjb21wbGV0ZWx5IGF3ZXNvbWUhXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RCdXR0b24nPlxuICAgICAgICAgICAgPGEgaHJlZj0nL3Nob3dzJz5VcGNvbWluZyBTaG93czwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4VHdvU2lkZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Nwb3RpZnknPlxuICAgICAgICAgICAgPFNwb3RpZnlQbGF5ZXJcbiAgICAgICAgICAgICAgdXJpPSdzcG90aWZ5OnBsYXlsaXN0OjRRbVg0NGR5elphNmtPYlltNWpYelMnXG4gICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICAgIHZpZXc9e3ZpZXd9XG4gICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8R2FsbGVyeSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3RCdXR0b24nPlxuICAgICAgICA8YSBocmVmPScvY29udGFjdCc+Q29udGFjdCBVczwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q29uY2VydCtPbmV8TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcblxuXG4gICAgICAuY29udGFjdEJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLmNvbnRhY3RCdXR0b24gYSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgfVxuXG4gICAgLmNvbnRhY3RCdXR0b246aG92ZXIgYSB7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLCAwIDAgMC41ZW0gIzc2MWY2YixcbiAgICAgICAgICAwIDAgMC4xZW0gIzc2MWY2YiwgMCAxMHB4IDNweCAjMDAwO1xuICAgIH1cblxuICAgIFxuXG4gICAgLmNvbnRhY3RCdXR0b24gYTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICM3NjFmNmIsIDAgMCAwLjVlbSAjNzYxZjZiLFxuICAgICAgICAgIDAgMCAwLjFlbSAjNzYxZjZiLCAwIDEwcHggM3B4ICMwMDA7XG4gICAgfVxuXG4gICAgICAgLmxpc3RCdXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgICB9XG5cbiAgICAubGlzdEJ1dHRvbiBhIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNlNTM0NDE7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgY29sb3I6ICNlNTM0NDE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICB9XG5cbiAgICAubGlzdEJ1dHRvbjpob3ZlciBhIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0ZXh0LXNoYWRvdzogMCA0MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICNlNTM0NDEsIDAgMCAwLjVlbSAjZTUzNDQxLFxuICAgICAgICAgIDAgMCAwLjFlbSAjZTUzNDQxLCAwIDEwcHggM3B4ICNmMWYxZjE7XG4gICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICNlNTM0NDE7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIH1cblxuICAgICAgLnNwb3RpZnkge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMiUgMDtcbiAgICAgIH1cblxuICAgICAgLnNwb3RpZnlBYm91dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuZmxleE9uZVNpZGUge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgIH1cblxuICAgICAgLmZsZXhUd29TaWRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U1MzQ0MTtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICB9XG5cbiAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBjb2xvcjogcmdiKDI1LDMsMjIpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBhIHtcbiAgICAgICAgY29sb3I6IHJnYigyNSwzLDIyKSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2U1MzQ0MSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogcmdiKDI1LDMsMjIpXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42NTtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzVweCkge1xuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMyU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoZXZyb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1N3B4KSB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzM3ZoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e7cbf935d635fa9da407.hot-update.js.map