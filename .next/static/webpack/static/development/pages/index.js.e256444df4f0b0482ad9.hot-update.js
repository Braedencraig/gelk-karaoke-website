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
/* harmony import */ var _components_ContactComp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ContactComp */ "./components/ContactComp.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















var ps = Object(react_spring__WEBPACK_IMPORTED_MODULE_16__["useSpring"])({
  opacity: 1,
  from: {
    opacity: 0
  }
});
var size = {
  width: '90%',
  height: 600,
  maxHeight: '600px'
};
var view = 'list'; // or 'coverart'

var theme = 'black'; // or 'white'

var Index = function Index(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    id: "text",
    className: "jsx-2674058118" + " " + 'scrollBox',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_16__["animated"].div, {
    style: Object(react_spring__WEBPACK_IMPORTED_MODULE_16__["useSpring"])({
      opacity: 1,
      from: {
        opacity: 0
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'gelkLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("img", {
    src: "/testNeon.gif",
    alt: "good enough live karaoke neon logo",
    className: "jsx-2674058118" + " " + 'gelkImageLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2674058118" + " " + 'songButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("a", {
    href: "/list",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "View Song List"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3885837156",
    __self: this
  }, ".songButton.jsx-2674058118{width:100%;text-align:center;margin-bottom:2.5%;}.songButton.jsx-2674058118 a.jsx-2674058118{background:none;padding:10px 20px;border-radius:50px;border:3px solid #f1f1f1;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;font-size:20px;cursor:pointer;}.songButton.jsx-2674058118 a.jsx-2674058118:hover{opacity:1;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.gelkImageLogo.jsx-2674058118{display:block;width:100%;height:auto;max-height:800px;}.gelkLogo.jsx-2674058118{width:62%;margin:0 auto;margin-top:3.5%;max-width:1400px;margin-bottom:0.5%;}svg.jsx-2674058118:hover{fill:rgba(241,241,241,0.6);cursor:pointer;}svg.jsx-2674058118{-webkit-transition:all 0.4s;transition:all 0.4s;}h1.jsx-2674058118,a.jsx-2674058118{font-family:'Montserrat',sans-serif;}ul.jsx-2674058118{padding:0;}li.jsx-2674058118{list-style:none;margin:5px 0;}a.jsx-2674058118{-webkit-text-decoration:none;text-decoration:none;}a.jsx-2674058118:hover{opacity:0.6;}.chevron.jsx-2674058118{margin-bottom:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:94%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:fixed;top:92vh;z-index:100;-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1);}.wrapper.jsx-2674058118{margin:0 auto;max-width:960px;padding:0 2%;}.scrollBox.jsx-2674058118{position:relative;color:white;width:20px;height:20px;bottom:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZnQixBQUlrQixBQU1LLEFBYU4sQUFNSSxBQU9KLEFBT29CLEFBS1IsQUFJaUIsQUFJM0IsQUFJTSxBQUtLLEFBSVQsQUFJUSxBQVdOLEFBTUksVUFqRWtCLEFBWXhCLEFBb0JkLENBcERrQixDQWlFbEIsRUF4Q1csQUF1RE8sRUExRUEsQUFrREgsRUE4QkQsRUFqQkMsSUFwQ0MsQ0FQSixFQWFLLEVBdENFLEFBd0RuQixDQXdCZSxBQU1GLElBaEZNLEVBeUNuQixDQXJCaUIsR0FPQSxDQXNESCxDQWhEZCxDQTBDQSxLQWhGRixBQTBDRSxFQWlCQSxHQXJEeUIsQUFpRlYsQ0E3RGpCLEdBT3FCLFNBdURuQixVQXRERixFQTNCbUIsZ0JBNkRMLEVBNURRLFFBNkRPLFNBbEQ3QiwrQkFWZ0IsY0FDTywyQ0E0REosT0EzREYsUUE0REosT0ExRGQsRUEyRGlCLFlBRWYsQ0E3REQsNkVBNkRFIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IE5lb25Mb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTmVvbkxvZ28nO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNlbCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgU3BvdGlmeVBsYXllciBmcm9tICdyZWFjdC1zcG90aWZ5LXBsYXllcic7XG5pbXBvcnQgQ2xpZW50Q29tcCBmcm9tICcuLi9jb21wb25lbnRzL2NsaWVudENvbXAnO1xuaW1wb3J0IE1lZGlhQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL21lZGlhQ29tcCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3RDb21wIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdENvbXAnO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmltcG9ydCB7XG4gIExpbmssXG4gIEVsZW1lbnQsXG4gIEV2ZW50cyxcbiAgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwsXG4gIHNjcm9sbFNweSxcbiAgc2Nyb2xsZXIsXG59IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbmNvbnN0IHBzID0gdXNlU3ByaW5nKHsgb3BhY2l0eTogMSwgZnJvbTogeyBvcGFjaXR5OiAwIH0gfSk7XG5cbmNvbnN0IHNpemUgPSB7XG4gIHdpZHRoOiAnOTAlJyxcbiAgaGVpZ2h0OiA2MDAsXG4gIG1heEhlaWdodDogJzYwMHB4Jyxcbn07XG5jb25zdCB2aWV3ID0gJ2xpc3QnOyAvLyBvciAnY292ZXJhcnQnXG5jb25zdCB0aGVtZSA9ICdibGFjayc7IC8vIG9yICd3aGl0ZSdcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9J3RleHQnIGNsYXNzTmFtZT0nc2Nyb2xsQm94Jz48L2Rpdj5cbiAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3VzZVNwcmluZyh7IG9wYWNpdHk6IDEsIGZyb206IHsgb3BhY2l0eTogMCB9IH0pfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dlbGtMb2dvJz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9J2dlbGtJbWFnZUxvZ28nXG4gICAgICAgICAgICBzcmM9Jy90ZXN0TmVvbi5naWYnXG4gICAgICAgICAgICBhbHQ9J2dvb2QgZW5vdWdoIGxpdmUga2FyYW9rZSBuZW9uIGxvZ28nXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nZ2Vsa0xvZ28nPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPSdnZWxrSW1hZ2VMb2dvJ1xuICAgICAgICAgIHNyYz0nL3Rlc3ROZW9uLmdpZidcbiAgICAgICAgICBhbHQ9J2dvb2QgZW5vdWdoIGxpdmUga2FyYW9rZSBuZW9uIGxvZ28nXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc29uZ0J1dHRvbic+XG4gICAgICAgIDxhIGhyZWY9Jy9saXN0Jz5WaWV3IFNvbmcgTGlzdDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nY2hldnJvbic+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9J3Njcm9sbENoZXZyb24nXG4gICAgICAgIHRvPSd0ZXh0J1xuICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgID5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGhlaWdodD0nNDBweCdcbiAgICAgICAgICB3aWR0aD0nNDBweCdcbiAgICAgICAgICBmaWxsPScjRjFGMUYxJ1xuICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgeD0nMHB4J1xuICAgICAgICAgIHk9JzBweCdcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsLXJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICBkPSdNMTIsMjMgQzUuOTI0ODY3NzUsMjMgMSwxOC4wNzUxMzIyIDEsMTIgQzEsNS45MjQ4Njc3NSA1LjkyNDg2Nzc1LDEgMTIsMSBDMTguMDc1MTMyMiwxIDIzLDUuOTI0ODY3NzUgMjMsMTIgQzIzLDE4LjA3NTEzMjIgMTguMDc1MTMyMiwyMyAxMiwyMyBaIE0xMiwyMSBDMTYuOTcwNTYyNywyMSAyMSwxNi45NzA1NjI3IDIxLDEyIEMyMSw3LjAyOTQzNzI1IDE2Ljk3MDU2MjcsMyAxMiwzIEM3LjAyOTQzNzI1LDMgMyw3LjAyOTQzNzI1IDMsMTIgQzMsMTYuOTcwNTYyNyA3LjAyOTQzNzI1LDIxIDEyLDIxIFogTTE1LjI5Mjg5MzIsOS4yOTI4OTMyMiBMMTYuNzA3MTA2OCwxMC43MDcxMDY4IEwxMiwxNS40MTQyMTM2IEw3LjI5Mjg5MzIyLDEwLjcwNzEwNjggTDguNzA3MTA2NzgsOS4yOTI4OTMyMiBMMTIsMTIuNTg1Nzg2NCBMMTUuMjkyODkzMiw5LjI5Mjg5MzIyIFonXG4gICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+ICovfVxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgIC5zb25nQnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMi41JTtcbiAgICB9XG5cbiAgICAuc29uZ0J1dHRvbiBhIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cblxuICAgIC5zb25nQnV0dG9uIGE6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLCAwIDAgMC41ZW0gIzc2MWY2YixcbiAgICAgICAgICAwIDAgMC4xZW0gIzc2MWY2YiwgMCAxMHB4IDNweCAjMDAwO1xuICAgIH1cblxuICAgIC5nZWxrSW1hZ2VMb2dvIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgICB9XG5cbiAgICAuZ2Vsa0xvZ28ge1xuICAgICAgd2lkdGg6IDYyJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMy41JTtcbiAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41JTtcbiAgICB9XG4gICAgICBzdmc6aG92ZXIge1xuICAgICAgICBmaWxsOiByZ2JhKDI0MSwyNDEsMjQxLCAwLjYpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgfVxuICAgICAgaDEsXG4gICAgICBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG5cbiAgICAgIC5jaGV2cm9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiA5NCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiA5MnZoO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpXG4gICAgICB9XG5cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMiU7XG4gICAgICB9XG5cbiAgICAgIC5zY3JvbGxCb3h7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBib3R0b206IDIwMHB4O1xuICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8PlxuICAgICAgey8qIDxDYXJvdXNlbCAvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcG90aWZ5QWJvdXQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleE9uZVNpZGUnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnRyb1RleHQnPlxuICAgICAgICAgICAgPGgzPkFCT1VUIEdFTEs8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEdvb2QgRW5vdWdoIExpdmUgS2FyYW9rZSBpcyBUb3JvbnRvJ3MgbW9zdCBwb3B1bGFyIGxpdmUgYmFuZFxuICAgICAgICAgICAgICBrYXJhb2tlIGV4cGVyaWVuY2UsIGxldHRpbmcgYW55b25lIHdpdGggdGhlIGRlc2lyZSBhbmQgZ3V0cyB0b1xuICAgICAgICAgICAgICBqb2luIHVzIG9uIHN0YWdlLCB0YWtlIHRoZSBtaWMgYW5kIHNpbmchIElkZWFsIGZvciBjb3Jwb3JhdGVcbiAgICAgICAgICAgICAgZXZlbnRzLCBiaXJ0aGRheSBwYXJ0aWVzIGFuZCB3ZWRkaW5ncywgR29vZCBFbm91Z2ggaXMgYSBsaXZlIGJhbmRcbiAgICAgICAgICAgICAgZmVhdHVyaW5nIGd1aXRhcnMsIGJhc3MsIGtleWJvYXJkcyBhbmQgZHJ1bXMsIGFuZCBhIHJlcGVydG9pcmUgb2ZcbiAgICAgICAgICAgICAgb3ZlciA0MDAgc29uZ3Mgc3Bhbm5pbmcgZ2VucmVzIGFuZCBlcmFzLiBHZXQgaW4gdG91Y2ggYXR7JyAnfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9J21haWx0bzpzaW5nQGdvb2Rlbm91Z2hsaXZla2FyYW9rZS5jb20/U3ViamVjdD1IZWxsbyUyMCdcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J190b3AnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBzaW5nQGdvb2Rlbm91Z2hsaXZla2FyYW9rZS5jb21cbiAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgIHRvIGJvb2sgeW91ciBldmVudCwgYW5kIGZvbGxvdyB1cyBvbiBJbnN0YWdyYW0gdG8gc2VlIHdlZWtseVxuICAgICAgICAgICAgICBwdWJsaWMgc2hvd3MgYWNyb3NzIE9udGFyaW8uIFNpbmNlIDIwMTMsIHdlIGhhdmUgcGxheWVkIHRob3VzYW5kc1xuICAgICAgICAgICAgICBvZiBob3VycyBvbiBzdGFnZSBhdCBwcml2YXRlIGFuZCBwdWJsaWMgZXZlbnRzIHdpdGggb3VyIHVuaXF1ZSxcbiAgICAgICAgICAgICAgaW50ZXJhY3RpdmUgcm9jayduJ3JvbGwgZXhwZXJpZW5jZS4gSXTigJlzIGEgYml0IHRlcnJpZnlpbmcsIGh1Z2VseVxuICAgICAgICAgICAgICBleGhpbGFyYXRpbmcgYW5kIGNvbXBsZXRlbHkgYXdlc29tZSFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdEJ1dHRvbic+XG4gICAgICAgICAgICA8YSBocmVmPScvc2hvd3MnPlVwY29taW5nIFNob3dzPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhUd29TaWRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BvdGlmeSc+XG4gICAgICAgICAgICA8U3BvdGlmeVBsYXllclxuICAgICAgICAgICAgICB1cmk9J3Nwb3RpZnk6cGxheWxpc3Q6NFFtWDQ0ZHl6WmE2a09iWW01alh6UydcbiAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgdmlldz17dmlld31cbiAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWN0U3ZnJz5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGhlaWdodD0nMTAwcHgnXG4gICAgICAgICAgd2lkdGg9JzEwMHB4J1xuICAgICAgICAgIGZpbGw9JyNmMWYxZjEnXG4gICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgIHZlcnNpb249JzEuMSdcbiAgICAgICAgICB4PScwcHgnXG4gICAgICAgICAgeT0nMHB4J1xuICAgICAgICAgIHZpZXdCb3g9JzAgMCA2NCA2NCdcbiAgICAgICAgPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgICAgPHBhdGggZD0nTTI2LDIxYy0xLjY1NCwwLTMsMS4zNDYtMywzaDJjMC0wLjU1MSwwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMWgyQzI5LDIyLjM0NiwyNy42NTQsMjEsMjYsMjF6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNMzgsMjFjLTEuNjU0LDAtMywxLjM0Ni0zLDNoMmMwLTAuNTUxLDAuNDQ4LTEsMS0xczEsMC40NDksMSwxaDJDNDEsMjIuMzQ2LDM5LjY1NCwyMSwzOCwyMXonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J001MS40MDUsNDIuMjIzYy0wLjc1NC0wLjQzMS0xLjU2Ny0wLjc2NC0yLjQwNS0xLjAwOFYxOGMwLTkuMzc0LTcuNjI2LTE3LTE3LTE3UzE1LDguNjI2LDE1LDE4djIzLjI4NyAgIGMtMC4wNCwwLjAxMy0wLjA4MSwwLjAyLTAuMTIsMC4wMzNDMTEuMzYzLDQyLjQ5MSw5LDQ1Ljc3LDksNDkuNDc3djAuMjljMCwwLjkyNSwwLjE0OCwxLjgzOSwwLjQ0MSwyLjcxOUwxMCw1NC4xNjJWNjNoMThoN2gxMiAgIHYtNy45MzNjMC4zOSwwLjMwNCwwLjgzLDAuNTQ5LDEuMzA2LDAuNzM0TDUyLjQyLDYzaDEwLjE5OGwtNS42MjYtMTEuMjUyQzU2Ljk1MSw0Ny44MTgsNTQuODIzLDQ0LjE3NSw1MS40MDUsNDIuMjIzeiAgICBNNTYuMjIsNTQuNjc1bC01LjAyMywyLjE1M2wtMC43NzItMS4zNTFsNS4xMDMtMi4xODdMNTYuMjIsNTQuNjc1eiBNNDYuOTAxLDQwLjgwNUwzOSw0MC4wODdWMzloLTAuMTA0ICAgYzMuMTQ0LTEuOTc4LDUuMzc4LTUuMjYsNS45NDctOS4wODVjMC44MDMtMC4xMzgsMS41MzMtMC40NjgsMi4xNTctMC45NHYxMS44NDVDNDYuOTY3LDQwLjgxNiw0Ni45MzQsNDAuODA4LDQ2LjkwMSw0MC44MDV6ICAgIE0zNC45NTIsNDMuMjc2Yy0wLjEwOC0wLjg5NS0wLjQxNS0xLjcyOC0wLjg3NC0yLjQ1OGMxLjAxNy0wLjE2NCwxLjk5OC0wLjQzNCwyLjkyMi0wLjgyMXYwLjg1OSAgIEMzNi44ODUsNDEuMjA2LDM2LjM2Niw0Mi40NjEsMzQuOTUyLDQzLjI3NnogTTI5LDU2aC0xdi02LjA5YzAuMzI2LDAuMDU1LDAuNjU5LDAuMDksMSwwLjA5czAuNjc0LTAuMDM1LDEtMC4wOXY2LjE4MSAgIEMyOS42NzQsNTYuMDM1LDI5LjM0MSw1NiwyOSw1NnogTTI5LDQ4Yy0yLjIwNiwwLTQtMS43OTQtNC00YzAtMS43MjksMS4xMDgtMy4xOTEsMi42NDctMy43NDggICBjMC4wMDgsMC4wMDMsMC4wMTYsMC4wMDcsMC4wMjQsMC4wMDlsMC4wMDctMC4wMTlDMjguMDk0LDQwLjA5NSwyOC41MzQsNDAsMjksNDBjMi4yMDYsMCw0LDEuNzk0LDQsNFMzMS4yMDYsNDgsMjksNDh6IE0xOSwyNy44MTYgICBjLTEuMTYxLTAuNDE0LTItMS41MTQtMi0yLjgxNnMwLjgzOS0yLjQwMiwyLTIuODE2VjI3LjgxNnogTTE5LjE0NiwyOS45MTRjMC41OCwzLjg4NiwyLjksNy4zMDIsNi4yNjksOS4yODcgICBjLTAuMzczLDAuMjgtMC43MTYsMC41OTctMS4wMTUsMC45NTVMMTcsNDAuODk1di0xMS45MkMxNy42MjEsMjkuNDQ1LDE4LjM0NywyOS43NzUsMTkuMTQ2LDI5LjkxNHogTTMyLjI4NiwzOC45ODYgICBDMzEuMzQxLDM4LjM2NCwzMC4yMTMsMzgsMjksMzhjLTAuNDM0LDAtMC44NTYsMC4wNDktMS4yNjMsMC4xMzZDMjMuNjgzLDM2LjQzMSwyMSwzMi40MzksMjEsMjhWMThoMS4zNDMgICBjMy41OSwwLDYuOTgzLTEuMjgyLDkuNjU3LTMuNjNjMi42NzQsMi4zNDgsNi4wNjcsMy42Myw5LjY1NywzLjYzSDQzdjEwQzQzLDMzLjk2OSwzOC4yMTgsMzguODMyLDMyLjI4NiwzOC45ODZ6IE00NSwyMi4xODQgICBjMS4xNjEsMC40MTQsMiwxLjUxNCwyLDIuODE2cy0wLjgzOSwyLjQwMi0yLDIuODE2VjIyLjE4NHogTTMyLDNjOC4yNzEsMCwxNSw2LjcyOSwxNSwxNXYzLjAyNmMtMC41ODQtMC40NDItMS4yNTctMC43NzMtMi0wLjkyNCAgIFYxNmgtMy4zNDNjLTMuMzgxLDAtNi41Ni0xLjMxNi04Ljk1LTMuNzA3TDMyLDExLjU4NmwtMC43MDcsMC43MDdDMjguOTAyLDE0LjY4NCwyNS43MjQsMTYsMjIuMzQzLDE2SDE5djQuMTAxICAgYy0wLjc0MywwLjE1Mi0xLjQxNiwwLjQ4Mi0yLDAuOTI0VjE4QzE3LDkuNzI5LDIzLjcyOSwzLDMyLDN6IE0xMSw0OS40NzdjMC0yLjg0NSwxLjgxMy01LjM2MSw0LjUxMy02LjI2ICAgYzAuNDYzLTAuMTU0LDAuOTQzLTAuMjU3LDEuNDMtMC4zMDZsNi4zMTItMC42MzFDMjMuMDkxLDQyLjgyNSwyMyw0My40MDIsMjMsNDRjMCwyLjIxNSwxLjIxLDQuMTQ5LDMsNS4xODhWNTZoLTZ2LTdoLTJ2NGgtMnYyaDIgICB2MWgtNnYtMWgydi0yaC0yLjI3OWwtMC4zODItMS4xNDZDMTEuMTE0LDUxLjE3OSwxMSw1MC40NzcsMTEsNDkuNzY3VjQ5LjQ3N3ogTTI4LDYxSDEydi0zaDZoMWgxMGMxLjg2LDAsMy40MjksMS4yNzcsMy44NzMsM0gyOHogICAgTTQ3LDUwLjk4N2MwLTAuNDkxLDAuMTE2LTAuOTgzLDAuMzM2LTEuNDIybDAuNTU5LTEuMTE3bC0xLjc4OS0wLjg5NWwtMC41NTksMS4xMThDNDUuMTg5LDQ5LjM4Niw0NSw1MC4xODgsNDUsNTAuOTg3ICAgYzAsMC4wMDQsMC4wMDEsMC4wMDksMC4wMDEsMC4wMTNINDV2MTBIMzQuOTFjLTAuMzAyLTEuNzg5LTEuMzk1LTMuMzA5LTIuOTEtNC4xODh2LTcuNjI0YzEuMzU5LTAuNzg5LDIuMzc4LTIuMDk0LDIuNzkyLTMuNjQ4ICAgYzIuMjk4LTAuODAzLDMuNDA0LTIuNDY2LDMuODcyLTMuNDc2bDguMDU2LDAuNzMyYzEuMjkxLDAuMTE3LDIuNTY4LDAuNTIsMy42OTMsMS4xNjJjMi42NzksMS41MzEsNC4zOTcsNC4zMjksNC41NzIsNy4zODggICBsLTYuMDE5LDIuNThDNDcuNzgxLDUzLjQzOCw0Nyw1Mi4yODQsNDcsNTAuOTg3eiBNNTMuNTgsNjFsLTEuMzg1LTIuNDI0bDQuOTItMi4xMDlMNTkuMzgyLDYxSDUzLjU4eic+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD0nTTMyLDI4Yy0yLjIwNiwwLTQsMS43OTQtNCw0czEuNzk0LDQsNCw0czQtMS43OTQsNC00UzM0LjIwNiwyOCwzMiwyOHogTTMyLDM0Yy0xLjEwMywwLTItMC44OTctMi0yczAuODk3LTIsMi0yICAgczIsMC44OTcsMiwyUzMzLjEwMywzNCwzMiwzNHonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J00xMywxSDV2MTEuMTg0QzQuNjg2LDEyLjA3Miw0LjM1MiwxMiw0LDEyYy0xLjY1NCwwLTMsMS4zNDYtMywzczEuMzQ2LDMsMywzczMtMS4zNDYsMy0zVjNoNlYxeiBNNCwxNiAgIGMtMC41NTIsMC0xLTAuNDQ5LTEtMXMwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMVM0LjU1MiwxNiw0LDE2eic+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD0nTTUzLDF2OGgtMC41Yy0xLjM3OSwwLTIuNSwxLjEyMi0yLjUsMi41czEuMTIxLDIuNSwyLjUsMi41czIuNS0xLjEyMiwyLjUtMi41VjdoNnYyaC0wLjVjLTEuMzc5LDAtMi41LDEuMTIyLTIuNSwyLjUgICBzMS4xMjEsMi41LDIuNSwyLjVzMi41LTEuMTIyLDIuNS0yLjVWMUg1M3ogTTUzLDExLjVjMCwwLjI3Ni0wLjIyNSwwLjUtMC41LDAuNVM1MiwxMS43NzYsNTIsMTEuNXMwLjIyNS0wLjUsMC41LTAuNUg1M1YxMS41eiAgICBNNjEsMTEuNWMwLDAuMjc2LTAuMjI1LDAuNS0wLjUsMC41UzYwLDExLjc3Niw2MCwxMS41czAuMjI1LTAuNSwwLjUtMC41SDYxVjExLjV6IE01NSw1VjNoNnYySDU1eic+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb250YWN0Q29tcCAvPlxuICAgIDwvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q29uY2VydCtPbmV8TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICAgIH1cblxuXG4gICAgICAuY29udGFjdEJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC5jb250YWN0QnV0dG9uIGEge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cblxuICAgIC5jb250YWN0QnV0dG9uIGE6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLCAwIDAgMC41ZW0gIzc2MWY2YixcbiAgICAgICAgICAwIDAgMC4xZW0gIzc2MWY2YiwgMCAxMHB4IDNweCAjMDAwO1xuICAgIH1cblxuICAgICAgIC5saXN0QnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgfVxuXG4gICAgLmxpc3RCdXR0b24gYSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjZTUzNDQxO1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIGNvbG9yOiAjZTUzNDQxO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgfVxuXG4gICAgLmxpc3RCdXR0b24gYTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjZTUzNDQxLCAwIDAgMC41ZW0gI2U1MzQ0MSxcbiAgICAgICAgICAwIDAgMC4xZW0gI2U1MzQ0MSwgMCAxMHB4IDNweCAjZjFmMWYxO1xuICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjZTUzNDQxO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICB9XG5cbiAgICAgIC5zcG90aWZ5IHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDIlIDA7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgIH1cblxuICAgICAgLnNwb3RpZnlBYm91dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuZmxleE9uZVNpZGUge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgIH1cblxuICAgICAgLmZsZXhUd29TaWRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U1MzQ0MTtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICB9XG5cbiAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBjb2xvcjogcmdiKDI1LDMsMjIpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IGEge1xuICAgICAgICBjb2xvcjogcmdiKDI1LDMsMjIpICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5pbnRyb1RleHQgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZTUzNDQxICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjUsMywyMilcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY1O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBjdXJzaXZlO1xuICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3NXB4KSB7XG4gICAgICAgIC5pbnRyb1RleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQgcCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMzJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTBweCkge1xuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI1dmg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hldnJvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTcwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQgcCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTU3cHgpIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nZWxrTG9nbyB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMzdmg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2674058118" + " " + 'spotifyAbout',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'flexOneSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'introText',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "ABOUT GELK"), __jsx("p", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Good Enough Live Karaoke is Toronto's most popular live band karaoke experience, letting anyone with the desire and guts to join us on stage, take the mic and sing! Ideal for corporate events, birthday parties and weddings, Good Enough is a live band featuring guitars, bass, keyboards and drums, and a repertoire of over 400 songs spanning genres and eras. Get in touch at", ' ', __jsx("a", {
    href: "mailto:sing@goodenoughlivekaraoke.com?Subject=Hello%20",
    target: "_top",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "sing@goodenoughlivekaraoke.com"), ' ', "to book your event, and follow us on Instagram to see weekly public shows across Ontario. Since 2013, we have played thousands of hours on stage at private and public events with our unique, interactive rock'n'roll experience. It\u2019s a bit terrifying, hugely exhilarating and completely awesome!")), __jsx("div", {
    className: "jsx-2674058118" + " " + 'listButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("a", {
    href: "/shows",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "Upcoming Shows"))), __jsx("div", {
    className: "jsx-2674058118" + " " + 'flexTwoSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'spotify',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx(react_spotify_player__WEBPACK_IMPORTED_MODULE_11___default.a, {
    uri: "spotify:playlist:4QmX44dyzZa6kObYm5jXzS",
    size: size,
    view: view,
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-2674058118" + " " + 'contactSvg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("svg", {
    height: "100px",
    width: "100px",
    fill: "#f1f1f1",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 64 64",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("g", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, __jsx("path", {
    d: "M26,21c-1.654,0-3,1.346-3,3h2c0-0.551,0.448-1,1-1s1,0.449,1,1h2C29,22.346,27.654,21,26,21z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), __jsx("path", {
    d: "M38,21c-1.654,0-3,1.346-3,3h2c0-0.551,0.448-1,1-1s1,0.449,1,1h2C41,22.346,39.654,21,38,21z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }), __jsx("path", {
    d: "M51.405,42.223c-0.754-0.431-1.567-0.764-2.405-1.008V18c0-9.374-7.626-17-17-17S15,8.626,15,18v23.287   c-0.04,0.013-0.081,0.02-0.12,0.033C11.363,42.491,9,45.77,9,49.477v0.29c0,0.925,0.148,1.839,0.441,2.719L10,54.162V63h18h7h12   v-7.933c0.39,0.304,0.83,0.549,1.306,0.734L52.42,63h10.198l-5.626-11.252C56.951,47.818,54.823,44.175,51.405,42.223z    M56.22,54.675l-5.023,2.153l-0.772-1.351l5.103-2.187L56.22,54.675z M46.901,40.805L39,40.087V39h-0.104   c3.144-1.978,5.378-5.26,5.947-9.085c0.803-0.138,1.533-0.468,2.157-0.94v11.845C46.967,40.816,46.934,40.808,46.901,40.805z    M34.952,43.276c-0.108-0.895-0.415-1.728-0.874-2.458c1.017-0.164,1.998-0.434,2.922-0.821v0.859   C36.885,41.206,36.366,42.461,34.952,43.276z M29,56h-1v-6.09c0.326,0.055,0.659,0.09,1,0.09s0.674-0.035,1-0.09v6.181   C29.674,56.035,29.341,56,29,56z M29,48c-2.206,0-4-1.794-4-4c0-1.729,1.108-3.191,2.647-3.748   c0.008,0.003,0.016,0.007,0.024,0.009l0.007-0.019C28.094,40.095,28.534,40,29,40c2.206,0,4,1.794,4,4S31.206,48,29,48z M19,27.816   c-1.161-0.414-2-1.514-2-2.816s0.839-2.402,2-2.816V27.816z M19.146,29.914c0.58,3.886,2.9,7.302,6.269,9.287   c-0.373,0.28-0.716,0.597-1.015,0.955L17,40.895v-11.92C17.621,29.445,18.347,29.775,19.146,29.914z M32.286,38.986   C31.341,38.364,30.213,38,29,38c-0.434,0-0.856,0.049-1.263,0.136C23.683,36.431,21,32.439,21,28V18h1.343   c3.59,0,6.983-1.282,9.657-3.63c2.674,2.348,6.067,3.63,9.657,3.63H43v10C43,33.969,38.218,38.832,32.286,38.986z M45,22.184   c1.161,0.414,2,1.514,2,2.816s-0.839,2.402-2,2.816V22.184z M32,3c8.271,0,15,6.729,15,15v3.026c-0.584-0.442-1.257-0.773-2-0.924   V16h-3.343c-3.381,0-6.56-1.316-8.95-3.707L32,11.586l-0.707,0.707C28.902,14.684,25.724,16,22.343,16H19v4.101   c-0.743,0.152-1.416,0.482-2,0.924V18C17,9.729,23.729,3,32,3z M11,49.477c0-2.845,1.813-5.361,4.513-6.26   c0.463-0.154,0.943-0.257,1.43-0.306l6.312-0.631C23.091,42.825,23,43.402,23,44c0,2.215,1.21,4.149,3,5.188V56h-6v-7h-2v4h-2v2h2   v1h-6v-1h2v-2h-2.279l-0.382-1.146C11.114,51.179,11,50.477,11,49.767V49.477z M28,61H12v-3h6h1h10c1.86,0,3.429,1.277,3.873,3H28z    M47,50.987c0-0.491,0.116-0.983,0.336-1.422l0.559-1.117l-1.789-0.895l-0.559,1.118C45.189,49.386,45,50.188,45,50.987   c0,0.004,0.001,0.009,0.001,0.013H45v10H34.91c-0.302-1.789-1.395-3.309-2.91-4.188v-7.624c1.359-0.789,2.378-2.094,2.792-3.648   c2.298-0.803,3.404-2.466,3.872-3.476l8.056,0.732c1.291,0.117,2.568,0.52,3.693,1.162c2.679,1.531,4.397,4.329,4.572,7.388   l-6.019,2.58C47.781,53.438,47,52.284,47,50.987z M53.58,61l-1.385-2.424l4.92-2.109L59.382,61H53.58z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }), __jsx("path", {
    d: "M32,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S34.206,28,32,28z M32,34c-1.103,0-2-0.897-2-2s0.897-2,2-2   s2,0.897,2,2S33.103,34,32,34z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }), __jsx("path", {
    d: "M13,1H5v11.184C4.686,12.072,4.352,12,4,12c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3V3h6V1z M4,16   c-0.552,0-1-0.449-1-1s0.448-1,1-1s1,0.449,1,1S4.552,16,4,16z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }), __jsx("path", {
    d: "M53,1v8h-0.5c-1.379,0-2.5,1.122-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5V7h6v2h-0.5c-1.379,0-2.5,1.122-2.5,2.5   s1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5V1H53z M53,11.5c0,0.276-0.225,0.5-0.5,0.5S52,11.776,52,11.5s0.225-0.5,0.5-0.5H53V11.5z    M61,11.5c0,0.276-0.225,0.5-0.5,0.5S60,11.776,60,11.5s0.225-0.5,0.5-0.5H61V11.5z M55,5V3h6v2H55z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  })))), __jsx(_components_ContactComp__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4073361451",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Concert+One|Montserrat&display=swap');svg.jsx-2674058118{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-top:70px;}.contactButton.jsx-2674058118{width:100%;text-align:center;margin-bottom:0;margin-top:50px;}.contactButton.jsx-2674058118 a.jsx-2674058118{background:none;padding:10px 20px;border-radius:50px;border:3px solid #f1f1f1;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;font-size:20px;font-family:'Montserrat',sans-serif;cursor:pointer;}.contactButton.jsx-2674058118 a.jsx-2674058118:hover{opacity:1;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.listButton.jsx-2674058118{width:100%;text-align:center;margin-bottom:4%;}.listButton.jsx-2674058118 a.jsx-2674058118{background:none;font-family:'Montserrat',sans-serif;padding:10px 20px;border-radius:50px;border:3px solid #e53441;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#e53441;-webkit-text-decoration:none;text-decoration:none;font-size:20px;cursor:pointer;}.listButton.jsx-2674058118 a.jsx-2674058118:hover{opacity:1;text-shadow:0 40px 100px,0 0 2px,0 0 1em #e53441,0 0 0.5em #e53441, 0 0 0.1em #e53441,0 10px 3px #f1f1f1;}h3.jsx-2674058118{text-align:center;font-family:'Concert One',sans-serif;color:#e53441;font-size:40px;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;}.spotify.jsx-2674058118{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2% 0;padding:20px 0;}.spotifyAbout.jsx-2674058118{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.flexOneSide.jsx-2674058118{width:60%;padding:2%;background:#f1f1f1;}.flexTwoSide.jsx-2674058118{background:#e53441;width:40%;padding:2%;}.introText.jsx-2674058118{max-width:1400px;font-family:'Montserrat',sans-serif;font-size:28px;color:rgb(25,3,22);font-weight:bold;padding:0 25px;}.introText.jsx-2674058118 a.jsx-2674058118{color:rgb(25,3,22) !important;}.introText.jsx-2674058118 a.jsx-2674058118:hover{color:#e53441 !important;}a.jsx-2674058118{color:rgb(25,3,22) text-decoration:underline;cursor:pointer;-webkit-transition:all 0.4s;transition:all 0.4s;}a.jsx-2674058118:hover{opacity:0.65;}.introText.jsx-2674058118 p.jsx-2674058118{line-height:38px;margin-bottom:50px;font-size:20px;text-align:left;}h2.jsx-2674058118{text-align:center;font-size:70px;margin-top:-100px;font-family:'Concert One',cursive;color:#f1f1f1;}@media screen and (max-width:1075px){.introText.jsx-2674058118 h2.jsx-2674058118{font-size:30px;font-family:'Concert One',cursive;}.introText.jsx-2674058118{font-size:20px;}.introText.jsx-2674058118 p.jsx-2674058118{line-height:36px;}.gelkLogo.jsx-2674058118{margin-top:33%;}}@media screen and (max-width:690px){.gelkLogo.jsx-2674058118{margin-top:25vh;}.chevron.jsx-2674058118{margin-top:50px;}.introText.jsx-2674058118 h2.jsx-2674058118{font-size:30px;margin-top:-70px;margin-bottom:30px;}.introText.jsx-2674058118{font-size:16px;}.introText.jsx-2674058118 p.jsx-2674058118{line-height:32px;}}@media screen and (max-width:557px){svg.jsx-2674058118{width:30px;}.introText.jsx-2674058118 h2.jsx-2674058118{font-size:22px;}.gelkLogo.jsx-2674058118{width:90%;}.gelkLogo.jsx-2674058118{margin-top:33vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1BnQixBQUVpRyxBQUd2RSxBQVFSLEFBT0ssQUFjTixBQU1DLEFBTUssQUFjTixBQU1TLEFBUUgsQUFRRCxBQUtILEFBTVMsQUFNRixBQVNhLEFBSUwsQUFNQyxBQU1iLEFBSUksQUFPQyxBQVNELEFBS0EsQUFJRSxBQUlGLEFBTUMsQUFJQSxBQUdELEFBTUEsQUFJRSxBQU1OLEFBSUksQUFJTCxBQUdNLFVBaktrQixBQTBCRyxBQTBCNUIsQUEyR1gsQ0FyTGdCLEFBMkJBLEFBa0poQixFQTlERixDQWxEZSxDQXNFd0IsQUFLckMsQUFRQSxBQWFtQixBQU1uQixBQWNBLENBMUtnQixBQTBCbUIsQUFxSG5DLEFBSUEsQUE4QkEsQ0FsR3FDLEFBNkJsQixBQXlCbkIsQUEyQkEsQ0FsSHNDLEFBcUV2QixDQTFDTCxFQUxTLElBd0JyQixJQWxHZ0IsQUEyQkMsQUFxREosQ0FjYixFQStEdUIsQ0FuQ0gsQ0FuSEQsRUE0R0YsSUF4Q2pCLEFBTUEsS0FoRmdCLEFBdUdDLENBNUVuQixHQXVHSSxFQWZnQixBQU9tQixBQW1DbkMsQ0E3SGdCLENBekJPLEFBOEVSLEVBakNELEtBb0RNLENBdkd4QixNQW1IRSxDQTlCcUIsQ0FqQ0osQ0FwQkUsSUEzQ1UsQUE2RWhCLElBM0RJLE1BOENJLENBY3JCLEFBdURnQixFQXBDRyxDQTNCTSxDQTFCQSxPQXpCTCxHQW1IcEIsS0FwQ2lCLElBaUJqQixLQXBGRixDQWNtQixDQVluQixJQTBDRSxhQXJEb0IsWUExQk4sY0FDTyxlQXBCSixJQWdFakIsR0FsQmMsSUE3Q1EsR0FxRVIsT0F2Qk8sS0F3QkosQ0FyRWIsUUFtQlcsTUFtRGYsU0FsRHFDLHFCQTBCdEIsZUF4QmxCLEFBMEJBLGVBMUJDLEFBMEJBIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IE5lb25Mb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTmVvbkxvZ28nO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNlbCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgU3BvdGlmeVBsYXllciBmcm9tICdyZWFjdC1zcG90aWZ5LXBsYXllcic7XG5pbXBvcnQgQ2xpZW50Q29tcCBmcm9tICcuLi9jb21wb25lbnRzL2NsaWVudENvbXAnO1xuaW1wb3J0IE1lZGlhQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL21lZGlhQ29tcCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3RDb21wIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdENvbXAnO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmltcG9ydCB7XG4gIExpbmssXG4gIEVsZW1lbnQsXG4gIEV2ZW50cyxcbiAgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwsXG4gIHNjcm9sbFNweSxcbiAgc2Nyb2xsZXIsXG59IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbmNvbnN0IHBzID0gdXNlU3ByaW5nKHsgb3BhY2l0eTogMSwgZnJvbTogeyBvcGFjaXR5OiAwIH0gfSk7XG5cbmNvbnN0IHNpemUgPSB7XG4gIHdpZHRoOiAnOTAlJyxcbiAgaGVpZ2h0OiA2MDAsXG4gIG1heEhlaWdodDogJzYwMHB4Jyxcbn07XG5jb25zdCB2aWV3ID0gJ2xpc3QnOyAvLyBvciAnY292ZXJhcnQnXG5jb25zdCB0aGVtZSA9ICdibGFjayc7IC8vIG9yICd3aGl0ZSdcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9J3RleHQnIGNsYXNzTmFtZT0nc2Nyb2xsQm94Jz48L2Rpdj5cbiAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3VzZVNwcmluZyh7IG9wYWNpdHk6IDEsIGZyb206IHsgb3BhY2l0eTogMCB9IH0pfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dlbGtMb2dvJz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9J2dlbGtJbWFnZUxvZ28nXG4gICAgICAgICAgICBzcmM9Jy90ZXN0TmVvbi5naWYnXG4gICAgICAgICAgICBhbHQ9J2dvb2QgZW5vdWdoIGxpdmUga2FyYW9rZSBuZW9uIGxvZ28nXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nZ2Vsa0xvZ28nPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPSdnZWxrSW1hZ2VMb2dvJ1xuICAgICAgICAgIHNyYz0nL3Rlc3ROZW9uLmdpZidcbiAgICAgICAgICBhbHQ9J2dvb2QgZW5vdWdoIGxpdmUga2FyYW9rZSBuZW9uIGxvZ28nXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc29uZ0J1dHRvbic+XG4gICAgICAgIDxhIGhyZWY9Jy9saXN0Jz5WaWV3IFNvbmcgTGlzdDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nY2hldnJvbic+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9J3Njcm9sbENoZXZyb24nXG4gICAgICAgIHRvPSd0ZXh0J1xuICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgID5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGhlaWdodD0nNDBweCdcbiAgICAgICAgICB3aWR0aD0nNDBweCdcbiAgICAgICAgICBmaWxsPScjRjFGMUYxJ1xuICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgeD0nMHB4J1xuICAgICAgICAgIHk9JzBweCdcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsLXJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICBkPSdNMTIsMjMgQzUuOTI0ODY3NzUsMjMgMSwxOC4wNzUxMzIyIDEsMTIgQzEsNS45MjQ4Njc3NSA1LjkyNDg2Nzc1LDEgMTIsMSBDMTguMDc1MTMyMiwxIDIzLDUuOTI0ODY3NzUgMjMsMTIgQzIzLDE4LjA3NTEzMjIgMTguMDc1MTMyMiwyMyAxMiwyMyBaIE0xMiwyMSBDMTYuOTcwNTYyNywyMSAyMSwxNi45NzA1NjI3IDIxLDEyIEMyMSw3LjAyOTQzNzI1IDE2Ljk3MDU2MjcsMyAxMiwzIEM3LjAyOTQzNzI1LDMgMyw3LjAyOTQzNzI1IDMsMTIgQzMsMTYuOTcwNTYyNyA3LjAyOTQzNzI1LDIxIDEyLDIxIFogTTE1LjI5Mjg5MzIsOS4yOTI4OTMyMiBMMTYuNzA3MTA2OCwxMC43MDcxMDY4IEwxMiwxNS40MTQyMTM2IEw3LjI5Mjg5MzIyLDEwLjcwNzEwNjggTDguNzA3MTA2NzgsOS4yOTI4OTMyMiBMMTIsMTIuNTg1Nzg2NCBMMTUuMjkyODkzMiw5LjI5Mjg5MzIyIFonXG4gICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+ICovfVxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgIC5zb25nQnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMi41JTtcbiAgICB9XG5cbiAgICAuc29uZ0J1dHRvbiBhIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cblxuICAgIC5zb25nQnV0dG9uIGE6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLCAwIDAgMC41ZW0gIzc2MWY2YixcbiAgICAgICAgICAwIDAgMC4xZW0gIzc2MWY2YiwgMCAxMHB4IDNweCAjMDAwO1xuICAgIH1cblxuICAgIC5nZWxrSW1hZ2VMb2dvIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgICB9XG5cbiAgICAuZ2Vsa0xvZ28ge1xuICAgICAgd2lkdGg6IDYyJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMy41JTtcbiAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41JTtcbiAgICB9XG4gICAgICBzdmc6aG92ZXIge1xuICAgICAgICBmaWxsOiByZ2JhKDI0MSwyNDEsMjQxLCAwLjYpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgfVxuICAgICAgaDEsXG4gICAgICBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG5cbiAgICAgIC5jaGV2cm9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiA5NCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiA5MnZoO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpXG4gICAgICB9XG5cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMiU7XG4gICAgICB9XG5cbiAgICAgIC5zY3JvbGxCb3h7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBib3R0b206IDIwMHB4O1xuICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8PlxuICAgICAgey8qIDxDYXJvdXNlbCAvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcG90aWZ5QWJvdXQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleE9uZVNpZGUnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnRyb1RleHQnPlxuICAgICAgICAgICAgPGgzPkFCT1VUIEdFTEs8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEdvb2QgRW5vdWdoIExpdmUgS2FyYW9rZSBpcyBUb3JvbnRvJ3MgbW9zdCBwb3B1bGFyIGxpdmUgYmFuZFxuICAgICAgICAgICAgICBrYXJhb2tlIGV4cGVyaWVuY2UsIGxldHRpbmcgYW55b25lIHdpdGggdGhlIGRlc2lyZSBhbmQgZ3V0cyB0b1xuICAgICAgICAgICAgICBqb2luIHVzIG9uIHN0YWdlLCB0YWtlIHRoZSBtaWMgYW5kIHNpbmchIElkZWFsIGZvciBjb3Jwb3JhdGVcbiAgICAgICAgICAgICAgZXZlbnRzLCBiaXJ0aGRheSBwYXJ0aWVzIGFuZCB3ZWRkaW5ncywgR29vZCBFbm91Z2ggaXMgYSBsaXZlIGJhbmRcbiAgICAgICAgICAgICAgZmVhdHVyaW5nIGd1aXRhcnMsIGJhc3MsIGtleWJvYXJkcyBhbmQgZHJ1bXMsIGFuZCBhIHJlcGVydG9pcmUgb2ZcbiAgICAgICAgICAgICAgb3ZlciA0MDAgc29uZ3Mgc3Bhbm5pbmcgZ2VucmVzIGFuZCBlcmFzLiBHZXQgaW4gdG91Y2ggYXR7JyAnfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9J21haWx0bzpzaW5nQGdvb2Rlbm91Z2hsaXZla2FyYW9rZS5jb20/U3ViamVjdD1IZWxsbyUyMCdcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J190b3AnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBzaW5nQGdvb2Rlbm91Z2hsaXZla2FyYW9rZS5jb21cbiAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgIHRvIGJvb2sgeW91ciBldmVudCwgYW5kIGZvbGxvdyB1cyBvbiBJbnN0YWdyYW0gdG8gc2VlIHdlZWtseVxuICAgICAgICAgICAgICBwdWJsaWMgc2hvd3MgYWNyb3NzIE9udGFyaW8uIFNpbmNlIDIwMTMsIHdlIGhhdmUgcGxheWVkIHRob3VzYW5kc1xuICAgICAgICAgICAgICBvZiBob3VycyBvbiBzdGFnZSBhdCBwcml2YXRlIGFuZCBwdWJsaWMgZXZlbnRzIHdpdGggb3VyIHVuaXF1ZSxcbiAgICAgICAgICAgICAgaW50ZXJhY3RpdmUgcm9jayduJ3JvbGwgZXhwZXJpZW5jZS4gSXTigJlzIGEgYml0IHRlcnJpZnlpbmcsIGh1Z2VseVxuICAgICAgICAgICAgICBleGhpbGFyYXRpbmcgYW5kIGNvbXBsZXRlbHkgYXdlc29tZSFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdEJ1dHRvbic+XG4gICAgICAgICAgICA8YSBocmVmPScvc2hvd3MnPlVwY29taW5nIFNob3dzPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhUd29TaWRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BvdGlmeSc+XG4gICAgICAgICAgICA8U3BvdGlmeVBsYXllclxuICAgICAgICAgICAgICB1cmk9J3Nwb3RpZnk6cGxheWxpc3Q6NFFtWDQ0ZHl6WmE2a09iWW01alh6UydcbiAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgdmlldz17dmlld31cbiAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWN0U3ZnJz5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGhlaWdodD0nMTAwcHgnXG4gICAgICAgICAgd2lkdGg9JzEwMHB4J1xuICAgICAgICAgIGZpbGw9JyNmMWYxZjEnXG4gICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgIHZlcnNpb249JzEuMSdcbiAgICAgICAgICB4PScwcHgnXG4gICAgICAgICAgeT0nMHB4J1xuICAgICAgICAgIHZpZXdCb3g9JzAgMCA2NCA2NCdcbiAgICAgICAgPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgICAgPHBhdGggZD0nTTI2LDIxYy0xLjY1NCwwLTMsMS4zNDYtMywzaDJjMC0wLjU1MSwwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMWgyQzI5LDIyLjM0NiwyNy42NTQsMjEsMjYsMjF6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNMzgsMjFjLTEuNjU0LDAtMywxLjM0Ni0zLDNoMmMwLTAuNTUxLDAuNDQ4LTEsMS0xczEsMC40NDksMSwxaDJDNDEsMjIuMzQ2LDM5LjY1NCwyMSwzOCwyMXonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J001MS40MDUsNDIuMjIzYy0wLjc1NC0wLjQzMS0xLjU2Ny0wLjc2NC0yLjQwNS0xLjAwOFYxOGMwLTkuMzc0LTcuNjI2LTE3LTE3LTE3UzE1LDguNjI2LDE1LDE4djIzLjI4NyAgIGMtMC4wNCwwLjAxMy0wLjA4MSwwLjAyLTAuMTIsMC4wMzNDMTEuMzYzLDQyLjQ5MSw5LDQ1Ljc3LDksNDkuNDc3djAuMjljMCwwLjkyNSwwLjE0OCwxLjgzOSwwLjQ0MSwyLjcxOUwxMCw1NC4xNjJWNjNoMThoN2gxMiAgIHYtNy45MzNjMC4zOSwwLjMwNCwwLjgzLDAuNTQ5LDEuMzA2LDAuNzM0TDUyLjQyLDYzaDEwLjE5OGwtNS42MjYtMTEuMjUyQzU2Ljk1MSw0Ny44MTgsNTQuODIzLDQ0LjE3NSw1MS40MDUsNDIuMjIzeiAgICBNNTYuMjIsNTQuNjc1bC01LjAyMywyLjE1M2wtMC43NzItMS4zNTFsNS4xMDMtMi4xODdMNTYuMjIsNTQuNjc1eiBNNDYuOTAxLDQwLjgwNUwzOSw0MC4wODdWMzloLTAuMTA0ICAgYzMuMTQ0LTEuOTc4LDUuMzc4LTUuMjYsNS45NDctOS4wODVjMC44MDMtMC4xMzgsMS41MzMtMC40NjgsMi4xNTctMC45NHYxMS44NDVDNDYuOTY3LDQwLjgxNiw0Ni45MzQsNDAuODA4LDQ2LjkwMSw0MC44MDV6ICAgIE0zNC45NTIsNDMuMjc2Yy0wLjEwOC0wLjg5NS0wLjQxNS0xLjcyOC0wLjg3NC0yLjQ1OGMxLjAxNy0wLjE2NCwxLjk5OC0wLjQzNCwyLjkyMi0wLjgyMXYwLjg1OSAgIEMzNi44ODUsNDEuMjA2LDM2LjM2Niw0Mi40NjEsMzQuOTUyLDQzLjI3NnogTTI5LDU2aC0xdi02LjA5YzAuMzI2LDAuMDU1LDAuNjU5LDAuMDksMSwwLjA5czAuNjc0LTAuMDM1LDEtMC4wOXY2LjE4MSAgIEMyOS42NzQsNTYuMDM1LDI5LjM0MSw1NiwyOSw1NnogTTI5LDQ4Yy0yLjIwNiwwLTQtMS43OTQtNC00YzAtMS43MjksMS4xMDgtMy4xOTEsMi42NDctMy43NDggICBjMC4wMDgsMC4wMDMsMC4wMTYsMC4wMDcsMC4wMjQsMC4wMDlsMC4wMDctMC4wMTlDMjguMDk0LDQwLjA5NSwyOC41MzQsNDAsMjksNDBjMi4yMDYsMCw0LDEuNzk0LDQsNFMzMS4yMDYsNDgsMjksNDh6IE0xOSwyNy44MTYgICBjLTEuMTYxLTAuNDE0LTItMS41MTQtMi0yLjgxNnMwLjgzOS0yLjQwMiwyLTIuODE2VjI3LjgxNnogTTE5LjE0NiwyOS45MTRjMC41OCwzLjg4NiwyLjksNy4zMDIsNi4yNjksOS4yODcgICBjLTAuMzczLDAuMjgtMC43MTYsMC41OTctMS4wMTUsMC45NTVMMTcsNDAuODk1di0xMS45MkMxNy42MjEsMjkuNDQ1LDE4LjM0NywyOS43NzUsMTkuMTQ2LDI5LjkxNHogTTMyLjI4NiwzOC45ODYgICBDMzEuMzQxLDM4LjM2NCwzMC4yMTMsMzgsMjksMzhjLTAuNDM0LDAtMC44NTYsMC4wNDktMS4yNjMsMC4xMzZDMjMuNjgzLDM2LjQzMSwyMSwzMi40MzksMjEsMjhWMThoMS4zNDMgICBjMy41OSwwLDYuOTgzLTEuMjgyLDkuNjU3LTMuNjNjMi42NzQsMi4zNDgsNi4wNjcsMy42Myw5LjY1NywzLjYzSDQzdjEwQzQzLDMzLjk2OSwzOC4yMTgsMzguODMyLDMyLjI4NiwzOC45ODZ6IE00NSwyMi4xODQgICBjMS4xNjEsMC40MTQsMiwxLjUxNCwyLDIuODE2cy0wLjgzOSwyLjQwMi0yLDIuODE2VjIyLjE4NHogTTMyLDNjOC4yNzEsMCwxNSw2LjcyOSwxNSwxNXYzLjAyNmMtMC41ODQtMC40NDItMS4yNTctMC43NzMtMi0wLjkyNCAgIFYxNmgtMy4zNDNjLTMuMzgxLDAtNi41Ni0xLjMxNi04Ljk1LTMuNzA3TDMyLDExLjU4NmwtMC43MDcsMC43MDdDMjguOTAyLDE0LjY4NCwyNS43MjQsMTYsMjIuMzQzLDE2SDE5djQuMTAxICAgYy0wLjc0MywwLjE1Mi0xLjQxNiwwLjQ4Mi0yLDAuOTI0VjE4QzE3LDkuNzI5LDIzLjcyOSwzLDMyLDN6IE0xMSw0OS40NzdjMC0yLjg0NSwxLjgxMy01LjM2MSw0LjUxMy02LjI2ICAgYzAuNDYzLTAuMTU0LDAuOTQzLTAuMjU3LDEuNDMtMC4zMDZsNi4zMTItMC42MzFDMjMuMDkxLDQyLjgyNSwyMyw0My40MDIsMjMsNDRjMCwyLjIxNSwxLjIxLDQuMTQ5LDMsNS4xODhWNTZoLTZ2LTdoLTJ2NGgtMnYyaDIgICB2MWgtNnYtMWgydi0yaC0yLjI3OWwtMC4zODItMS4xNDZDMTEuMTE0LDUxLjE3OSwxMSw1MC40NzcsMTEsNDkuNzY3VjQ5LjQ3N3ogTTI4LDYxSDEydi0zaDZoMWgxMGMxLjg2LDAsMy40MjksMS4yNzcsMy44NzMsM0gyOHogICAgTTQ3LDUwLjk4N2MwLTAuNDkxLDAuMTE2LTAuOTgzLDAuMzM2LTEuNDIybDAuNTU5LTEuMTE3bC0xLjc4OS0wLjg5NWwtMC41NTksMS4xMThDNDUuMTg5LDQ5LjM4Niw0NSw1MC4xODgsNDUsNTAuOTg3ICAgYzAsMC4wMDQsMC4wMDEsMC4wMDksMC4wMDEsMC4wMTNINDV2MTBIMzQuOTFjLTAuMzAyLTEuNzg5LTEuMzk1LTMuMzA5LTIuOTEtNC4xODh2LTcuNjI0YzEuMzU5LTAuNzg5LDIuMzc4LTIuMDk0LDIuNzkyLTMuNjQ4ICAgYzIuMjk4LTAuODAzLDMuNDA0LTIuNDY2LDMuODcyLTMuNDc2bDguMDU2LDAuNzMyYzEuMjkxLDAuMTE3LDIuNTY4LDAuNTIsMy42OTMsMS4xNjJjMi42NzksMS41MzEsNC4zOTcsNC4zMjksNC41NzIsNy4zODggICBsLTYuMDE5LDIuNThDNDcuNzgxLDUzLjQzOCw0Nyw1Mi4yODQsNDcsNTAuOTg3eiBNNTMuNTgsNjFsLTEuMzg1LTIuNDI0bDQuOTItMi4xMDlMNTkuMzgyLDYxSDUzLjU4eic+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD0nTTMyLDI4Yy0yLjIwNiwwLTQsMS43OTQtNCw0czEuNzk0LDQsNCw0czQtMS43OTQsNC00UzM0LjIwNiwyOCwzMiwyOHogTTMyLDM0Yy0xLjEwMywwLTItMC44OTctMi0yczAuODk3LTIsMi0yICAgczIsMC44OTcsMiwyUzMzLjEwMywzNCwzMiwzNHonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J00xMywxSDV2MTEuMTg0QzQuNjg2LDEyLjA3Miw0LjM1MiwxMiw0LDEyYy0xLjY1NCwwLTMsMS4zNDYtMywzczEuMzQ2LDMsMywzczMtMS4zNDYsMy0zVjNoNlYxeiBNNCwxNiAgIGMtMC41NTIsMC0xLTAuNDQ5LTEtMXMwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMVM0LjU1MiwxNiw0LDE2eic+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD0nTTUzLDF2OGgtMC41Yy0xLjM3OSwwLTIuNSwxLjEyMi0yLjUsMi41czEuMTIxLDIuNSwyLjUsMi41czIuNS0xLjEyMiwyLjUtMi41VjdoNnYyaC0wLjVjLTEuMzc5LDAtMi41LDEuMTIyLTIuNSwyLjUgICBzMS4xMjEsMi41LDIuNSwyLjVzMi41LTEuMTIyLDIuNS0yLjVWMUg1M3ogTTUzLDExLjVjMCwwLjI3Ni0wLjIyNSwwLjUtMC41LDAuNVM1MiwxMS43NzYsNTIsMTEuNXMwLjIyNS0wLjUsMC41LTAuNUg1M1YxMS41eiAgICBNNjEsMTEuNWMwLDAuMjc2LTAuMjI1LDAuNS0wLjUsMC41UzYwLDExLjc3Niw2MCwxMS41czAuMjI1LTAuNSwwLjUtMC41SDYxVjExLjV6IE01NSw1VjNoNnYySDU1eic+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb250YWN0Q29tcCAvPlxuICAgIDwvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q29uY2VydCtPbmV8TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICAgIH1cblxuXG4gICAgICAuY29udGFjdEJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC5jb250YWN0QnV0dG9uIGEge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cblxuICAgIC5jb250YWN0QnV0dG9uIGE6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLCAwIDAgMC41ZW0gIzc2MWY2YixcbiAgICAgICAgICAwIDAgMC4xZW0gIzc2MWY2YiwgMCAxMHB4IDNweCAjMDAwO1xuICAgIH1cblxuICAgICAgIC5saXN0QnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgfVxuXG4gICAgLmxpc3RCdXR0b24gYSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjZTUzNDQxO1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIGNvbG9yOiAjZTUzNDQxO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgfVxuXG4gICAgLmxpc3RCdXR0b24gYTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjZTUzNDQxLCAwIDAgMC41ZW0gI2U1MzQ0MSxcbiAgICAgICAgICAwIDAgMC4xZW0gI2U1MzQ0MSwgMCAxMHB4IDNweCAjZjFmMWYxO1xuICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjZTUzNDQxO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICB9XG5cbiAgICAgIC5zcG90aWZ5IHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDIlIDA7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgIH1cblxuICAgICAgLnNwb3RpZnlBYm91dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuZmxleE9uZVNpZGUge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgIH1cblxuICAgICAgLmZsZXhUd29TaWRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U1MzQ0MTtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICB9XG5cbiAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBjb2xvcjogcmdiKDI1LDMsMjIpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IGEge1xuICAgICAgICBjb2xvcjogcmdiKDI1LDMsMjIpICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5pbnRyb1RleHQgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZTUzNDQxICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjUsMywyMilcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY1O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBjdXJzaXZlO1xuICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3NXB4KSB7XG4gICAgICAgIC5pbnRyb1RleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQgcCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMzJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTBweCkge1xuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI1dmg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hldnJvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTcwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQgcCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTU3cHgpIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyb1RleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nZWxrTG9nbyB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMzdmg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e256444df4f0b0482ad9.hot-update.js.map