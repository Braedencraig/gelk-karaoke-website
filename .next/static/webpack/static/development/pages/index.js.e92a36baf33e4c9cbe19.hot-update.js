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
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var size = {
  width: '90%',
  height: 600
};
var view = 'list'; // or 'coverart'

var theme = 'black'; // or 'white'

var Index = function Index(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-269466626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    id: "text",
    className: "jsx-269466626" + " " + 'scrollBox',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-269466626" + " " + 'gelkLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    src: "/testNeon.gif",
    alt: "good enough live karaoke neon logo",
    className: "jsx-269466626" + " " + 'gelkImageLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-269466626" + " " + 'songButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    href: "/list",
    className: "jsx-269466626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "View Song List"))), __jsx("div", {
    className: "jsx-269466626" + " " + 'chevron',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
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
      lineNumber: 44
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
    className: "jsx-269466626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M15.2928932,9.29289322 L16.7071068,10.7071068 L12,15.4142136 L7.29289322,10.7071068 L8.70710678,9.29289322 L12,12.5857864 L15.2928932,9.29289322 Z",
    className: "jsx-269466626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "592487013",
    __self: this
  }, ".songButton.jsx-269466626{width:100%;text-align:center;margin-bottom:4%;}.songButton.jsx-269466626 a.jsx-269466626{background:#e53441;padding:10px 20px;border-radius:50px;border:1px solid #e53441;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;font-size:30px;}.songButton.jsx-269466626 a.jsx-269466626:hover{opacity:1;}.gelkImageLogo.jsx-269466626{display:block;width:100%;height:auto;max-height:800px;}.gelkLogo.jsx-269466626{width:70%;margin:0 auto;margin-top:3%;max-width:1400px;margin-bottom:2.5%;}svg.jsx-269466626:hover{fill:rgba(241,241,241,0.6);cursor:pointer;}svg.jsx-269466626{-webkit-transition:all 0.4s;transition:all 0.4s;}h1.jsx-269466626,a.jsx-269466626{font-family:'Montserrat',sans-serif;}ul.jsx-269466626{padding:0;}li.jsx-269466626{list-style:none;margin:5px 0;}a.jsx-269466626{-webkit-text-decoration:none;text-decoration:none;}a.jsx-269466626:hover{opacity:0.6;}.chevron.jsx-269466626{margin-bottom:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:94%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:fixed;top:88vh;-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1);}.wrapper.jsx-269466626{margin:0 auto;max-width:960px;padding:0 2%;}.scrollBox.jsx-269466626{position:relative;color:white;width:20px;height:20px;bottom:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VnQixBQUlrQixBQU1RLEFBWVQsQUFJSSxBQU9KLEFBT29CLEFBS1IsQUFJaUIsQUFJM0IsQUFJTSxBQUtLLEFBSVQsQUFJUSxBQVVOLEFBTUksVUEvRHRCLEFBV2dCLEFBb0JkLENBakRrQixDQThEbEIsRUF4Q1csQUFzRE8sRUF2QkgsRUE2QkQsQ0E1RUksQ0E0REgsSUFwQ0QsQ0FQRixFQWFLLEVBbkNBLEFBcURqQixDQXVCZSxBQU1GLE1BdENiLENBdENtQixBQWlCRixDQU9BLEdBcURILENBL0NkLENBeUNBLEdBNUVGLEVBdUNFLEVBaUJBLEdBMkJlLENBNURqQixDQU9xQixDQXhCTSxVQThFekIsUUFyREYsT0F4Qm1CLGFBMERMLEtBekRRLEtBMERPLDJDQXpEYixjQUNPLHdDQXlESixVQXhERixLQXlESixTQUVaLENBMURELDZFQTBERSIsImZpbGUiOiIvVXNlcnMvYnJhZWRlbmNyYWlnL0Rlc2t0b3AvR0VMSy1TSVRFL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFRlc3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0SGVhZGVyJztcbmltcG9ydCBOZW9uTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL05lb25Mb2dvJztcbmltcG9ydCAqIGFzIFNjcm9sbCBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudHMvQ2Fyb3VzZWwnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MnO1xuaW1wb3J0IFNwb3RpZnlQbGF5ZXIgZnJvbSAncmVhY3Qtc3BvdGlmeS1wbGF5ZXInO1xuXG5pbXBvcnQge1xuICBMaW5rLFxuICBFbGVtZW50LFxuICBFdmVudHMsXG4gIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLFxuICBzY3JvbGxTcHksXG4gIHNjcm9sbGVyLFxufSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuXG5jb25zdCBzaXplID0ge1xuICB3aWR0aDogJzkwJScsXG4gIGhlaWdodDogNjAwLFxufTtcbmNvbnN0IHZpZXcgPSAnbGlzdCc7IC8vIG9yICdjb3ZlcmFydCdcbmNvbnN0IHRoZW1lID0gJ2JsYWNrJzsgLy8gb3IgJ3doaXRlJ1xuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcbiAgPExheW91dD5cbiAgICA8aGVhZGVyPlxuICAgICAgPGRpdiBpZD0ndGV4dCcgY2xhc3NOYW1lPSdzY3JvbGxCb3gnPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dlbGtMb2dvJz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT0nZ2Vsa0ltYWdlTG9nbydcbiAgICAgICAgICBzcmM9Jy90ZXN0TmVvbi5naWYnXG4gICAgICAgICAgYWx0PSdnb29kIGVub3VnaCBsaXZlIGthcmFva2UgbmVvbiBsb2dvJ1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc29uZ0J1dHRvbic+XG4gICAgICAgIDxhIGhyZWY9Jy9saXN0Jz5WaWV3IFNvbmcgTGlzdDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjaGV2cm9uJz5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT0nc2Nyb2xsQ2hldnJvbidcbiAgICAgICAgdG89J3RleHQnXG4gICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgaGVpZ2h0PSc0MHB4J1xuICAgICAgICAgIHdpZHRoPSc0MHB4J1xuICAgICAgICAgIGZpbGw9JyNGMUYxRjEnXG4gICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICB4PScwcHgnXG4gICAgICAgICAgeT0nMHB4J1xuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgIGQ9J00xMiwyMyBDNS45MjQ4Njc3NSwyMyAxLDE4LjA3NTEzMjIgMSwxMiBDMSw1LjkyNDg2Nzc1IDUuOTI0ODY3NzUsMSAxMiwxIEMxOC4wNzUxMzIyLDEgMjMsNS45MjQ4Njc3NSAyMywxMiBDMjMsMTguMDc1MTMyMiAxOC4wNzUxMzIyLDIzIDEyLDIzIFogTTEyLDIxIEMxNi45NzA1NjI3LDIxIDIxLDE2Ljk3MDU2MjcgMjEsMTIgQzIxLDcuMDI5NDM3MjUgMTYuOTcwNTYyNywzIDEyLDMgQzcuMDI5NDM3MjUsMyAzLDcuMDI5NDM3MjUgMywxMiBDMywxNi45NzA1NjI3IDcuMDI5NDM3MjUsMjEgMTIsMjEgWiBNMTUuMjkyODkzMiw5LjI5Mjg5MzIyIEwxNi43MDcxMDY4LDEwLjcwNzEwNjggTDEyLDE1LjQxNDIxMzYgTDcuMjkyODkzMjIsMTAuNzA3MTA2OCBMOC43MDcxMDY3OCw5LjI5Mjg5MzIyIEwxMiwxMi41ODU3ODY0IEwxNS4yOTI4OTMyLDkuMjkyODkzMjIgWidcbiAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAuc29uZ0J1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgIH1cblxuICAgIC5zb25nQnV0dG9uIGEge1xuICAgICAgYmFja2dyb3VuZDogI2U1MzQ0MTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTUzNDQxO1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblxuICAgIC5zb25nQnV0dG9uIGE6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAuZ2Vsa0ltYWdlTG9nbyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWF4LWhlaWdodDogODAwcHg7XG4gICAgfVxuXG4gICAgLmdlbGtMb2dvIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjUlO1xuICAgIH1cbiAgICAgIHN2Zzpob3ZlciB7XG4gICAgICAgIGZpbGw6IHJnYmEoMjQxLDI0MSwyNDEsIDAuNik7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgc3ZnIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB9XG4gICAgICBoMSxcbiAgICAgIGEge1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cblxuICAgICAgLmNoZXZyb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDk0JTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDg4dmg7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpXG4gICAgICB9XG5cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMiU7XG4gICAgICB9XG5cbiAgICAgIC5zY3JvbGxCb3h7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBib3R0b206IDIwMHB4O1xuICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8PlxuICAgICAgey8qIDxDYXJvdXNlbCAvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcG90aWZ5QWJvdXQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleE9uZVNpZGUnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnRyb1RleHQnPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEdvb2QgRW5vdWdoIExpdmUgS2FyYW9rZSBpcyBUb3JvbnRvJ3MgbW9zdCBwb3B1bGFyIGxpdmUgYmFuZFxuICAgICAgICAgICAgICBrYXJhb2tlIGV4cGVyaWVuY2UsIGxldHRpbmcgYW55b25lIHdpdGggdGhlIGRlc2lyZSBhbmQgZ3V0cyB0b1xuICAgICAgICAgICAgICBqb2luIHVzIG9uIHN0YWdlLCB0YWtlIHRoZSBtaWMgYW5kIHNpbmchIElkZWFsIGZvciBjb3Jwb3JhdGVcbiAgICAgICAgICAgICAgZXZlbnRzLCBiaXJ0aGRheSBwYXJ0aWVzIGFuZCB3ZWRkaW5ncywgR29vZCBFbm91Z2ggaXMgYSBsaXZlIGJhbmRcbiAgICAgICAgICAgICAgZmVhdHVyaW5nIGd1aXRhcnMsIGJhc3MsIGtleWJvYXJkcyBhbmQgZHJ1bXMsIGFuZCBhIHJlcGVydG9pcmUgb2ZcbiAgICAgICAgICAgICAgb3ZlciA0MDAgc29uZ3Mgc3Bhbm5pbmcgZ2VucmVzIGFuZCBlcmFzLiBHZXQgaW4gdG91Y2ggYXR7JyAnfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9J21haWx0bzpzaW5nQGdvb2Rlbm91Z2hsaXZla2FyYW9rZS5jb20/U3ViamVjdD1IZWxsbyUyMCdcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J190b3AnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBzaW5nQGdvb2Rlbm91Z2hsaXZla2FyYW9rZS5jb21cbiAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgIHRvIGJvb2sgeW91ciBldmVudCwgYW5kIGZvbGxvdyB1cyBvbiBJbnN0YWdyYW0gdG8gc2VlIHdlZWtseVxuICAgICAgICAgICAgICBwdWJsaWMgc2hvd3MgYWNyb3NzIE9udGFyaW8uIFNpbmNlIDIwMTMsIHdlIGhhdmUgcGxheWVkIHRob3VzYW5kc1xuICAgICAgICAgICAgICBvZiBob3VycyBvbiBzdGFnZSBhdCBwcml2YXRlIGFuZCBwdWJsaWMgZXZlbnRzIHdpdGggb3VyIHVuaXF1ZSxcbiAgICAgICAgICAgICAgaW50ZXJhY3RpdmUgcm9jayduJ3JvbGwgZXhwZXJpZW5jZS4gSXTigJlzIGEgYml0IHRlcnJpZnlpbmcsIGh1Z2VseVxuICAgICAgICAgICAgICBleGhpbGFyYXRpbmcgYW5kIGNvbXBsZXRlbHkgYXdlc29tZSFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4VHdvU2lkZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Nwb3RpZnknPlxuICAgICAgICAgICAgPFNwb3RpZnlQbGF5ZXJcbiAgICAgICAgICAgICAgdXJpPSdzcG90aWZ5OnBsYXlsaXN0OjRRbVg0NGR5elphNmtPYlltNWpYelMnXG4gICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICAgIHZpZXc9e3ZpZXd9XG4gICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db25jZXJ0K09uZXxNb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICAuc3BvdGlmeSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAyJSAwO1xuICAgICAgfVxuXG4gICAgICAuc3BvdGlmeUFib3V0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4T25lU2lkZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLmZsZXhUd29TaWRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U1MzQ0MTtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICB9XG5cbiAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42NTtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDc1cHgpIHtcbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBjdXJzaXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCBwIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nZWxrTG9nbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzMlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5MHB4KSB7XG4gICAgICAgIC5nZWxrTG9nbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGV2cm9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnRyb1RleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCBwIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTdweCkge1xuICAgICAgICBzdmcge1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgICAgIC5nZWxrTG9nbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzN2aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-269466626" + " " + 'spotifyAbout',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-269466626" + " " + 'flexOneSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-269466626" + " " + 'introText',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-269466626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Good Enough Live Karaoke is Toronto's most popular live band karaoke experience, letting anyone with the desire and guts to join us on stage, take the mic and sing! Ideal for corporate events, birthday parties and weddings, Good Enough is a live band featuring guitars, bass, keyboards and drums, and a repertoire of over 400 songs spanning genres and eras. Get in touch at", ' ', __jsx("a", {
    href: "mailto:sing@goodenoughlivekaraoke.com?Subject=Hello%20",
    target: "_top",
    className: "jsx-269466626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "sing@goodenoughlivekaraoke.com"), ' ', "to book your event, and follow us on Instagram to see weekly public shows across Ontario. Since 2013, we have played thousands of hours on stage at private and public events with our unique, interactive rock'n'roll experience. It\u2019s a bit terrifying, hugely exhilarating and completely awesome!"))), __jsx("div", {
    className: "jsx-269466626" + " " + 'flexTwoSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-269466626" + " " + 'spotify',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx(react_spotify_player__WEBPACK_IMPORTED_MODULE_11___default.a, {
    uri: "spotify:playlist:4QmX44dyzZa6kObYm5jXzS",
    size: size,
    view: view,
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3561238414",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Concert+One|Montserrat&display=swap');.spotify.jsx-269466626{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2% 0;}.spotifyAbout.jsx-269466626{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.flexOneSide.jsx-269466626{width:60%;padding:2%;background:white;}.flexTwoSide.jsx-269466626{background:#e53441;width:40%;padding:2%;}.introText.jsx-269466626{max-width:1400px;font-family:'Montserrat',sans-serif;font-size:28px;color:#f1f1f1;}a.jsx-269466626{color:#f1f1f1;font-family:'Roboto',sans-serif;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;-webkit-transition:all 0.4s;transition:all 0.4s;}a.jsx-269466626:hover{opacity:0.65;}.introText.jsx-269466626 p.jsx-269466626{line-height:38px;margin-bottom:50px;text-align:left;}h2.jsx-269466626{text-align:center;font-size:70px;margin-top:-100px;font-family:'Concert One',cursive;color:#f1f1f1;}@media screen and (max-width:1075px){.introText.jsx-269466626 h2.jsx-269466626{font-size:30px;font-family:'Concert One',cursive;}.introText.jsx-269466626{font-size:20px;}.introText.jsx-269466626 p.jsx-269466626{line-height:36px;}.gelkLogo.jsx-269466626{margin-top:33%;}}@media screen and (max-width:690px){.gelkLogo.jsx-269466626{margin-top:25vh;}.chevron.jsx-269466626{margin-top:50px;}.introText.jsx-269466626 h2.jsx-269466626{font-size:30px;margin-top:-70px;margin-bottom:30px;}.introText.jsx-269466626{font-size:16px;}.introText.jsx-269466626 p.jsx-269466626{line-height:32px;}}@media screen and (max-width:557px){svg.jsx-269466626{width:30px;}.introText.jsx-269466626 h2.jsx-269466626{font-size:22px;}.gelkLogo.jsx-269466626{width:90%;}.gelkLogo.jsx-269466626{margin-top:33vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcU1nQixBQUVpRyxBQUcxRSxBQU9ELEFBS0gsQUFNUyxBQU1GLEFBT0gsQUFRRCxBQUlJLEFBTUMsQUFTRCxBQUtBLEFBSUUsQUFJRixBQU1DLEFBSUEsQUFHRCxBQU1BLEFBSUUsQUFNTixBQUlJLEFBSUwsQUFHTSxVQWxHUCxBQWdHWCxDQVJBLEVBN0RGLENBdkNlLEFBK0JvQixDQTJCSSxBQUtyQyxBQVFBLEFBYW1CLEFBTW5CLEFBY0EsQ0EzQkEsQUFJQSxBQThCQSxDQXZGcUMsQUFtQmxCLEFBd0JuQixBQTJCQSxDQTdDZSxDQS9CTCxFQUxPLFFBTU4sR0FrRVUsQ0FuQ0gsR0FORixFQTlCbEIsRUFNQSxNQVk0QixHQTJCMUIsRUFSbUMsQUFtQ25DLENBekNGLENBcEJpQixlQUNELE1BbkJILFFBb0JiLEdBbkJBLEFBNENnQixHQW5EUyxXQW9EekIsT0FwQmlCLGVBQ0ssZ0RBQ3RCLGtCQWpDYyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IE5lb25Mb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTmVvbkxvZ28nO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNlbCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgU3BvdGlmeVBsYXllciBmcm9tICdyZWFjdC1zcG90aWZ5LXBsYXllcic7XG5cbmltcG9ydCB7XG4gIExpbmssXG4gIEVsZW1lbnQsXG4gIEV2ZW50cyxcbiAgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwsXG4gIHNjcm9sbFNweSxcbiAgc2Nyb2xsZXIsXG59IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbmNvbnN0IHNpemUgPSB7XG4gIHdpZHRoOiAnOTAlJyxcbiAgaGVpZ2h0OiA2MDAsXG59O1xuY29uc3QgdmlldyA9ICdsaXN0JzsgLy8gb3IgJ2NvdmVyYXJ0J1xuY29uc3QgdGhlbWUgPSAnYmxhY2snOyAvLyBvciAnd2hpdGUnXG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoZWFkZXI+XG4gICAgICA8ZGl2IGlkPSd0ZXh0JyBjbGFzc05hbWU9J3Njcm9sbEJveCc+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2Vsa0xvZ28nPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPSdnZWxrSW1hZ2VMb2dvJ1xuICAgICAgICAgIHNyYz0nL3Rlc3ROZW9uLmdpZidcbiAgICAgICAgICBhbHQ9J2dvb2QgZW5vdWdoIGxpdmUga2FyYW9rZSBuZW9uIGxvZ28nXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb25nQnV0dG9uJz5cbiAgICAgICAgPGEgaHJlZj0nL2xpc3QnPlZpZXcgU29uZyBMaXN0PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9J2NoZXZyb24nPlxuICAgICAgPExpbmtcbiAgICAgICAgY2xhc3NOYW1lPSdzY3JvbGxDaGV2cm9uJ1xuICAgICAgICB0bz0ndGV4dCdcbiAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBoZWlnaHQ9JzQwcHgnXG4gICAgICAgICAgd2lkdGg9JzQwcHgnXG4gICAgICAgICAgZmlsbD0nI0YxRjFGMSdcbiAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgIHg9JzBweCdcbiAgICAgICAgICB5PScwcHgnXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbC1ydWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgZD0nTTEyLDIzIEM1LjkyNDg2Nzc1LDIzIDEsMTguMDc1MTMyMiAxLDEyIEMxLDUuOTI0ODY3NzUgNS45MjQ4Njc3NSwxIDEyLDEgQzE4LjA3NTEzMjIsMSAyMyw1LjkyNDg2Nzc1IDIzLDEyIEMyMywxOC4wNzUxMzIyIDE4LjA3NTEzMjIsMjMgMTIsMjMgWiBNMTIsMjEgQzE2Ljk3MDU2MjcsMjEgMjEsMTYuOTcwNTYyNyAyMSwxMiBDMjEsNy4wMjk0MzcyNSAxNi45NzA1NjI3LDMgMTIsMyBDNy4wMjk0MzcyNSwzIDMsNy4wMjk0MzcyNSAzLDEyIEMzLDE2Ljk3MDU2MjcgNy4wMjk0MzcyNSwyMSAxMiwyMSBaIE0xNS4yOTI4OTMyLDkuMjkyODkzMjIgTDE2LjcwNzEwNjgsMTAuNzA3MTA2OCBMMTIsMTUuNDE0MjEzNiBMNy4yOTI4OTMyMiwxMC43MDcxMDY4IEw4LjcwNzEwNjc4LDkuMjkyODkzMjIgTDEyLDEyLjU4NTc4NjQgTDE1LjI5Mjg5MzIsOS4yOTI4OTMyMiBaJ1xuICAgICAgICAgID48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgIC5zb25nQnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgfVxuXG4gICAgLnNvbmdCdXR0b24gYSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTUzNDQxO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNTM0NDE7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgLnNvbmdCdXR0b24gYTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5nZWxrSW1hZ2VMb2dvIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgICB9XG5cbiAgICAuZ2Vsa0xvZ28ge1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNSU7XG4gICAgfVxuICAgICAgc3ZnOmhvdmVyIHtcbiAgICAgICAgZmlsbDogcmdiYSgyNDEsMjQxLDI0MSwgMC42KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIH1cbiAgICAgIGgxLFxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuXG4gICAgICAuY2hldnJvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogOTQlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogODh2aDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSlcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyJTtcbiAgICAgIH1cblxuICAgICAgLnNjcm9sbEJveHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvdHRvbTogMjAwcHg7XG4gICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDw+XG4gICAgICB7LyogPENhcm91c2VsIC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Nwb3RpZnlBYm91dCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4T25lU2lkZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludHJvVGV4dCc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgR29vZCBFbm91Z2ggTGl2ZSBLYXJhb2tlIGlzIFRvcm9udG8ncyBtb3N0IHBvcHVsYXIgbGl2ZSBiYW5kXG4gICAgICAgICAgICAgIGthcmFva2UgZXhwZXJpZW5jZSwgbGV0dGluZyBhbnlvbmUgd2l0aCB0aGUgZGVzaXJlIGFuZCBndXRzIHRvXG4gICAgICAgICAgICAgIGpvaW4gdXMgb24gc3RhZ2UsIHRha2UgdGhlIG1pYyBhbmQgc2luZyEgSWRlYWwgZm9yIGNvcnBvcmF0ZVxuICAgICAgICAgICAgICBldmVudHMsIGJpcnRoZGF5IHBhcnRpZXMgYW5kIHdlZGRpbmdzLCBHb29kIEVub3VnaCBpcyBhIGxpdmUgYmFuZFxuICAgICAgICAgICAgICBmZWF0dXJpbmcgZ3VpdGFycywgYmFzcywga2V5Ym9hcmRzIGFuZCBkcnVtcywgYW5kIGEgcmVwZXJ0b2lyZSBvZlxuICAgICAgICAgICAgICBvdmVyIDQwMCBzb25ncyBzcGFubmluZyBnZW5yZXMgYW5kIGVyYXMuIEdldCBpbiB0b3VjaCBhdHsnICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj0nbWFpbHRvOnNpbmdAZ29vZGVub3VnaGxpdmVrYXJhb2tlLmNvbT9TdWJqZWN0PUhlbGxvJTIwJ1xuICAgICAgICAgICAgICAgIHRhcmdldD0nX3RvcCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHNpbmdAZ29vZGVub3VnaGxpdmVrYXJhb2tlLmNvbVxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgdG8gYm9vayB5b3VyIGV2ZW50LCBhbmQgZm9sbG93IHVzIG9uIEluc3RhZ3JhbSB0byBzZWUgd2Vla2x5XG4gICAgICAgICAgICAgIHB1YmxpYyBzaG93cyBhY3Jvc3MgT250YXJpby4gU2luY2UgMjAxMywgd2UgaGF2ZSBwbGF5ZWQgdGhvdXNhbmRzXG4gICAgICAgICAgICAgIG9mIGhvdXJzIG9uIHN0YWdlIGF0IHByaXZhdGUgYW5kIHB1YmxpYyBldmVudHMgd2l0aCBvdXIgdW5pcXVlLFxuICAgICAgICAgICAgICBpbnRlcmFjdGl2ZSByb2NrJ24ncm9sbCBleHBlcmllbmNlLiBJdOKAmXMgYSBiaXQgdGVycmlmeWluZywgaHVnZWx5XG4gICAgICAgICAgICAgIGV4aGlsYXJhdGluZyBhbmQgY29tcGxldGVseSBhd2Vzb21lIVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhUd29TaWRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BvdGlmeSc+XG4gICAgICAgICAgICA8U3BvdGlmeVBsYXllclxuICAgICAgICAgICAgICB1cmk9J3Nwb3RpZnk6cGxheWxpc3Q6NFFtWDQ0ZHl6WmE2a09iWW01alh6UydcbiAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgdmlldz17dmlld31cbiAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvbmNlcnQrT25lfE1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgIC5zcG90aWZ5IHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDIlIDA7XG4gICAgICB9XG5cbiAgICAgIC5zcG90aWZ5QWJvdXQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmZsZXhPbmVTaWRlIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAuZmxleFR3b1NpZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTUzNDQxO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCB7XG4gICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY1O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzVweCkge1xuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMyU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoZXZyb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1N3B4KSB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzM3ZoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e92a36baf33e4c9cbe19.hot-update.js.map