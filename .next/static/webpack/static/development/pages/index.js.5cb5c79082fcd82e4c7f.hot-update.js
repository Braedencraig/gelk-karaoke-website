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
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    id: "text",
    className: "jsx-2674058118" + " " + 'scrollBox',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_16__["animated"].div, {
    style: Object(react_spring__WEBPACK_IMPORTED_MODULE_16__["useSpring"])({
      config: {
        duration: 950
      },
      opacity: 1,
      from: {
        opacity: 0,
        transform: scale(10)
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'gelkLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("img", {
    src: "/testNeon.gif",
    alt: "good enough live karaoke neon logo",
    className: "jsx-2674058118" + " " + 'gelkImageLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2674058118" + " " + 'songButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    href: "/list",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "View Song List")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3885837156",
    __self: this
  }, ".songButton.jsx-2674058118{width:100%;text-align:center;margin-bottom:2.5%;}.songButton.jsx-2674058118 a.jsx-2674058118{background:none;padding:10px 20px;border-radius:50px;border:3px solid #f1f1f1;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;font-size:20px;cursor:pointer;}.songButton.jsx-2674058118 a.jsx-2674058118:hover{opacity:1;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.gelkImageLogo.jsx-2674058118{display:block;width:100%;height:auto;max-height:800px;}.gelkLogo.jsx-2674058118{width:62%;margin:0 auto;margin-top:3.5%;max-width:1400px;margin-bottom:0.5%;}svg.jsx-2674058118:hover{fill:rgba(241,241,241,0.6);cursor:pointer;}svg.jsx-2674058118{-webkit-transition:all 0.4s;transition:all 0.4s;}h1.jsx-2674058118,a.jsx-2674058118{font-family:'Montserrat',sans-serif;}ul.jsx-2674058118{padding:0;}li.jsx-2674058118{list-style:none;margin:5px 0;}a.jsx-2674058118{-webkit-text-decoration:none;text-decoration:none;}a.jsx-2674058118:hover{opacity:0.6;}.chevron.jsx-2674058118{margin-bottom:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:94%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:fixed;top:92vh;z-index:100;-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1);}.wrapper.jsx-2674058118{margin:0 auto;max-width:960px;padding:0 2%;}.scrollBox.jsx-2674058118{position:relative;color:white;width:20px;height:20px;bottom:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEZnQixBQUlrQixBQU1LLEFBYU4sQUFNSSxBQU9KLEFBT29CLEFBS1IsQUFJaUIsQUFJM0IsQUFJTSxBQUtLLEFBSVQsQUFJUSxBQVdOLEFBTUksVUFqRWtCLEFBWXhCLEFBb0JkLENBcERrQixDQWlFbEIsRUF4Q1csQUF1RE8sRUExRUEsQUFrREgsRUE4QkQsRUFqQkMsSUFwQ0MsQ0FQSixFQWFLLEVBdENFLEFBd0RuQixDQXdCZSxBQU1GLElBaEZNLEVBeUNuQixDQXJCaUIsR0FPQSxDQXNESCxDQWhEZCxDQTBDQSxLQWhGRixBQTBDRSxFQWlCQSxHQXJEeUIsQUFpRlYsQ0E3RGpCLEdBT3FCLFNBdURuQixVQXRERixFQTNCbUIsZ0JBNkRMLEVBNURRLFFBNkRPLFNBbEQ3QiwrQkFWZ0IsY0FDTywyQ0E0REosT0EzREYsUUE0REosT0ExRGQsRUEyRGlCLFlBRWYsQ0E3REQsNkVBNkRFIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IE5lb25Mb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTmVvbkxvZ28nO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNlbCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgU3BvdGlmeVBsYXllciBmcm9tICdyZWFjdC1zcG90aWZ5LXBsYXllcic7XG5pbXBvcnQgQ2xpZW50Q29tcCBmcm9tICcuLi9jb21wb25lbnRzL2NsaWVudENvbXAnO1xuaW1wb3J0IE1lZGlhQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL21lZGlhQ29tcCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3RDb21wIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdENvbXAnO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmltcG9ydCB7XG4gIExpbmssXG4gIEVsZW1lbnQsXG4gIEV2ZW50cyxcbiAgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwsXG4gIHNjcm9sbFNweSxcbiAgc2Nyb2xsZXIsXG59IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbmNvbnN0IHNpemUgPSB7XG4gIHdpZHRoOiAnOTAlJyxcbiAgaGVpZ2h0OiA2MDAsXG4gIG1heEhlaWdodDogJzYwMHB4Jyxcbn07XG5jb25zdCB2aWV3ID0gJ2xpc3QnOyAvLyBvciAnY292ZXJhcnQnXG5jb25zdCB0aGVtZSA9ICdibGFjayc7IC8vIG9yICd3aGl0ZSdcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9J3RleHQnIGNsYXNzTmFtZT0nc2Nyb2xsQm94Jz48L2Rpdj5cbiAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgc3R5bGU9e3VzZVNwcmluZyh7XG4gICAgICAgICAgY29uZmlnOiB7IGR1cmF0aW9uOiA5NTAgfSxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGZyb206IHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBzY2FsZSgxMCkgfSxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnZWxrTG9nbyc+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdnZWxrSW1hZ2VMb2dvJ1xuICAgICAgICAgICAgc3JjPScvdGVzdE5lb24uZ2lmJ1xuICAgICAgICAgICAgYWx0PSdnb29kIGVub3VnaCBsaXZlIGthcmFva2UgbmVvbiBsb2dvJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29uZ0J1dHRvbic+XG4gICAgICAgICAgPGEgaHJlZj0nL2xpc3QnPlZpZXcgU29uZyBMaXN0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdnZWxrTG9nbyc+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9J2dlbGtJbWFnZUxvZ28nXG4gICAgICAgICAgc3JjPScvdGVzdE5lb24uZ2lmJ1xuICAgICAgICAgIGFsdD0nZ29vZCBlbm91Z2ggbGl2ZSBrYXJhb2tlIG5lb24gbG9nbydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nc29uZ0J1dHRvbic+XG4gICAgICAgIDxhIGhyZWY9Jy9saXN0Jz5WaWV3IFNvbmcgTGlzdDwvYT5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgICB7LyogPGRpdiBjbGFzc05hbWU9J2NoZXZyb24nPlxuICAgICAgPExpbmtcbiAgICAgICAgY2xhc3NOYW1lPSdzY3JvbGxDaGV2cm9uJ1xuICAgICAgICB0bz0ndGV4dCdcbiAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBoZWlnaHQ9JzQwcHgnXG4gICAgICAgICAgd2lkdGg9JzQwcHgnXG4gICAgICAgICAgZmlsbD0nI0YxRjFGMSdcbiAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgIHg9JzBweCdcbiAgICAgICAgICB5PScwcHgnXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbC1ydWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgZD0nTTEyLDIzIEM1LjkyNDg2Nzc1LDIzIDEsMTguMDc1MTMyMiAxLDEyIEMxLDUuOTI0ODY3NzUgNS45MjQ4Njc3NSwxIDEyLDEgQzE4LjA3NTEzMjIsMSAyMyw1LjkyNDg2Nzc1IDIzLDEyIEMyMywxOC4wNzUxMzIyIDE4LjA3NTEzMjIsMjMgMTIsMjMgWiBNMTIsMjEgQzE2Ljk3MDU2MjcsMjEgMjEsMTYuOTcwNTYyNyAyMSwxMiBDMjEsNy4wMjk0MzcyNSAxNi45NzA1NjI3LDMgMTIsMyBDNy4wMjk0MzcyNSwzIDMsNy4wMjk0MzcyNSAzLDEyIEMzLDE2Ljk3MDU2MjcgNy4wMjk0MzcyNSwyMSAxMiwyMSBaIE0xNS4yOTI4OTMyLDkuMjkyODkzMjIgTDE2LjcwNzEwNjgsMTAuNzA3MTA2OCBMMTIsMTUuNDE0MjEzNiBMNy4yOTI4OTMyMiwxMC43MDcxMDY4IEw4LjcwNzEwNjc4LDkuMjkyODkzMjIgTDEyLDEyLjU4NTc4NjQgTDE1LjI5Mjg5MzIsOS4yOTI4OTMyMiBaJ1xuICAgICAgICAgID48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PiAqL31cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAuc29uZ0J1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNSU7XG4gICAgfVxuXG4gICAgLnNvbmdCdXR0b24gYSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICB9XG5cbiAgICAuc29uZ0J1dHRvbiBhOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gIzc2MWY2YiwgMCAwIDAuNWVtICM3NjFmNmIsXG4gICAgICAgICAgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAuZ2Vsa0ltYWdlTG9nbyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWF4LWhlaWdodDogODAwcHg7XG4gICAgfVxuXG4gICAgLmdlbGtMb2dvIHtcbiAgICAgIHdpZHRoOiA2MiU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDMuNSU7XG4gICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNSU7XG4gICAgfVxuICAgICAgc3ZnOmhvdmVyIHtcbiAgICAgICAgZmlsbDogcmdiYSgyNDEsMjQxLDI0MSwgMC42KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIH1cbiAgICAgIGgxLFxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuXG4gICAgICAuY2hldnJvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogOTQlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogOTJ2aDtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKVxuICAgICAgfVxuXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDIlO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsQm94e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYm90dG9tOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPD5cbiAgICAgIHsvKiA8Q2Fyb3VzZWwgLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BvdGlmeUFib3V0Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhPbmVTaWRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW50cm9UZXh0Jz5cbiAgICAgICAgICAgIDxoMz5BQk9VVCBHRUxLPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBHb29kIEVub3VnaCBMaXZlIEthcmFva2UgaXMgVG9yb250bydzIG1vc3QgcG9wdWxhciBsaXZlIGJhbmRcbiAgICAgICAgICAgICAga2FyYW9rZSBleHBlcmllbmNlLCBsZXR0aW5nIGFueW9uZSB3aXRoIHRoZSBkZXNpcmUgYW5kIGd1dHMgdG9cbiAgICAgICAgICAgICAgam9pbiB1cyBvbiBzdGFnZSwgdGFrZSB0aGUgbWljIGFuZCBzaW5nISBJZGVhbCBmb3IgY29ycG9yYXRlXG4gICAgICAgICAgICAgIGV2ZW50cywgYmlydGhkYXkgcGFydGllcyBhbmQgd2VkZGluZ3MsIEdvb2QgRW5vdWdoIGlzIGEgbGl2ZSBiYW5kXG4gICAgICAgICAgICAgIGZlYXR1cmluZyBndWl0YXJzLCBiYXNzLCBrZXlib2FyZHMgYW5kIGRydW1zLCBhbmQgYSByZXBlcnRvaXJlIG9mXG4gICAgICAgICAgICAgIG92ZXIgNDAwIHNvbmdzIHNwYW5uaW5nIGdlbnJlcyBhbmQgZXJhcy4gR2V0IGluIHRvdWNoIGF0eycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPSdtYWlsdG86c2luZ0Bnb29kZW5vdWdobGl2ZWthcmFva2UuY29tP1N1YmplY3Q9SGVsbG8lMjAnXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfdG9wJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgc2luZ0Bnb29kZW5vdWdobGl2ZWthcmFva2UuY29tXG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICB0byBib29rIHlvdXIgZXZlbnQsIGFuZCBmb2xsb3cgdXMgb24gSW5zdGFncmFtIHRvIHNlZSB3ZWVrbHlcbiAgICAgICAgICAgICAgcHVibGljIHNob3dzIGFjcm9zcyBPbnRhcmlvLiBTaW5jZSAyMDEzLCB3ZSBoYXZlIHBsYXllZCB0aG91c2FuZHNcbiAgICAgICAgICAgICAgb2YgaG91cnMgb24gc3RhZ2UgYXQgcHJpdmF0ZSBhbmQgcHVibGljIGV2ZW50cyB3aXRoIG91ciB1bmlxdWUsXG4gICAgICAgICAgICAgIGludGVyYWN0aXZlIHJvY2snbidyb2xsIGV4cGVyaWVuY2UuIEl04oCZcyBhIGJpdCB0ZXJyaWZ5aW5nLCBodWdlbHlcbiAgICAgICAgICAgICAgZXhoaWxhcmF0aW5nIGFuZCBjb21wbGV0ZWx5IGF3ZXNvbWUhXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RCdXR0b24nPlxuICAgICAgICAgICAgPGEgaHJlZj0nL3Nob3dzJz5VcGNvbWluZyBTaG93czwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4VHdvU2lkZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Nwb3RpZnknPlxuICAgICAgICAgICAgPFNwb3RpZnlQbGF5ZXJcbiAgICAgICAgICAgICAgdXJpPSdzcG90aWZ5OnBsYXlsaXN0OjRRbVg0NGR5elphNmtPYlltNWpYelMnXG4gICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICAgIHZpZXc9e3ZpZXd9XG4gICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdFN2Zyc+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBoZWlnaHQ9JzEwMHB4J1xuICAgICAgICAgIHdpZHRoPScxMDBweCdcbiAgICAgICAgICBmaWxsPScjZjFmMWYxJ1xuICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICB2ZXJzaW9uPScxLjEnXG4gICAgICAgICAgeD0nMHB4J1xuICAgICAgICAgIHk9JzBweCdcbiAgICAgICAgICB2aWV3Qm94PScwIDAgNjQgNjQnXG4gICAgICAgID5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoIGQ9J00yNiwyMWMtMS42NTQsMC0zLDEuMzQ2LTMsM2gyYzAtMC41NTEsMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDFoMkMyOSwyMi4zNDYsMjcuNjU0LDIxLDI2LDIxeic+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD0nTTM4LDIxYy0xLjY1NCwwLTMsMS4zNDYtMywzaDJjMC0wLjU1MSwwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMWgyQzQxLDIyLjM0NiwzOS42NTQsMjEsMzgsMjF6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNNTEuNDA1LDQyLjIyM2MtMC43NTQtMC40MzEtMS41NjctMC43NjQtMi40MDUtMS4wMDhWMThjMC05LjM3NC03LjYyNi0xNy0xNy0xN1MxNSw4LjYyNiwxNSwxOHYyMy4yODcgICBjLTAuMDQsMC4wMTMtMC4wODEsMC4wMi0wLjEyLDAuMDMzQzExLjM2Myw0Mi40OTEsOSw0NS43Nyw5LDQ5LjQ3N3YwLjI5YzAsMC45MjUsMC4xNDgsMS44MzksMC40NDEsMi43MTlMMTAsNTQuMTYyVjYzaDE4aDdoMTIgICB2LTcuOTMzYzAuMzksMC4zMDQsMC44MywwLjU0OSwxLjMwNiwwLjczNEw1Mi40Miw2M2gxMC4xOThsLTUuNjI2LTExLjI1MkM1Ni45NTEsNDcuODE4LDU0LjgyMyw0NC4xNzUsNTEuNDA1LDQyLjIyM3ogICAgTTU2LjIyLDU0LjY3NWwtNS4wMjMsMi4xNTNsLTAuNzcyLTEuMzUxbDUuMTAzLTIuMTg3TDU2LjIyLDU0LjY3NXogTTQ2LjkwMSw0MC44MDVMMzksNDAuMDg3VjM5aC0wLjEwNCAgIGMzLjE0NC0xLjk3OCw1LjM3OC01LjI2LDUuOTQ3LTkuMDg1YzAuODAzLTAuMTM4LDEuNTMzLTAuNDY4LDIuMTU3LTAuOTR2MTEuODQ1QzQ2Ljk2Nyw0MC44MTYsNDYuOTM0LDQwLjgwOCw0Ni45MDEsNDAuODA1eiAgICBNMzQuOTUyLDQzLjI3NmMtMC4xMDgtMC44OTUtMC40MTUtMS43MjgtMC44NzQtMi40NThjMS4wMTctMC4xNjQsMS45OTgtMC40MzQsMi45MjItMC44MjF2MC44NTkgICBDMzYuODg1LDQxLjIwNiwzNi4zNjYsNDIuNDYxLDM0Ljk1Miw0My4yNzZ6IE0yOSw1NmgtMXYtNi4wOWMwLjMyNiwwLjA1NSwwLjY1OSwwLjA5LDEsMC4wOXMwLjY3NC0wLjAzNSwxLTAuMDl2Ni4xODEgICBDMjkuNjc0LDU2LjAzNSwyOS4zNDEsNTYsMjksNTZ6IE0yOSw0OGMtMi4yMDYsMC00LTEuNzk0LTQtNGMwLTEuNzI5LDEuMTA4LTMuMTkxLDIuNjQ3LTMuNzQ4ICAgYzAuMDA4LDAuMDAzLDAuMDE2LDAuMDA3LDAuMDI0LDAuMDA5bDAuMDA3LTAuMDE5QzI4LjA5NCw0MC4wOTUsMjguNTM0LDQwLDI5LDQwYzIuMjA2LDAsNCwxLjc5NCw0LDRTMzEuMjA2LDQ4LDI5LDQ4eiBNMTksMjcuODE2ICAgYy0xLjE2MS0wLjQxNC0yLTEuNTE0LTItMi44MTZzMC44MzktMi40MDIsMi0yLjgxNlYyNy44MTZ6IE0xOS4xNDYsMjkuOTE0YzAuNTgsMy44ODYsMi45LDcuMzAyLDYuMjY5LDkuMjg3ICAgYy0wLjM3MywwLjI4LTAuNzE2LDAuNTk3LTEuMDE1LDAuOTU1TDE3LDQwLjg5NXYtMTEuOTJDMTcuNjIxLDI5LjQ0NSwxOC4zNDcsMjkuNzc1LDE5LjE0NiwyOS45MTR6IE0zMi4yODYsMzguOTg2ICAgQzMxLjM0MSwzOC4zNjQsMzAuMjEzLDM4LDI5LDM4Yy0wLjQzNCwwLTAuODU2LDAuMDQ5LTEuMjYzLDAuMTM2QzIzLjY4MywzNi40MzEsMjEsMzIuNDM5LDIxLDI4VjE4aDEuMzQzICAgYzMuNTksMCw2Ljk4My0xLjI4Miw5LjY1Ny0zLjYzYzIuNjc0LDIuMzQ4LDYuMDY3LDMuNjMsOS42NTcsMy42M0g0M3YxMEM0MywzMy45NjksMzguMjE4LDM4LjgzMiwzMi4yODYsMzguOTg2eiBNNDUsMjIuMTg0ICAgYzEuMTYxLDAuNDE0LDIsMS41MTQsMiwyLjgxNnMtMC44MzksMi40MDItMiwyLjgxNlYyMi4xODR6IE0zMiwzYzguMjcxLDAsMTUsNi43MjksMTUsMTV2My4wMjZjLTAuNTg0LTAuNDQyLTEuMjU3LTAuNzczLTItMC45MjQgICBWMTZoLTMuMzQzYy0zLjM4MSwwLTYuNTYtMS4zMTYtOC45NS0zLjcwN0wzMiwxMS41ODZsLTAuNzA3LDAuNzA3QzI4LjkwMiwxNC42ODQsMjUuNzI0LDE2LDIyLjM0MywxNkgxOXY0LjEwMSAgIGMtMC43NDMsMC4xNTItMS40MTYsMC40ODItMiwwLjkyNFYxOEMxNyw5LjcyOSwyMy43MjksMywzMiwzeiBNMTEsNDkuNDc3YzAtMi44NDUsMS44MTMtNS4zNjEsNC41MTMtNi4yNiAgIGMwLjQ2My0wLjE1NCwwLjk0My0wLjI1NywxLjQzLTAuMzA2bDYuMzEyLTAuNjMxQzIzLjA5MSw0Mi44MjUsMjMsNDMuNDAyLDIzLDQ0YzAsMi4yMTUsMS4yMSw0LjE0OSwzLDUuMTg4VjU2aC02di03aC0ydjRoLTJ2MmgyICAgdjFoLTZ2LTFoMnYtMmgtMi4yNzlsLTAuMzgyLTEuMTQ2QzExLjExNCw1MS4xNzksMTEsNTAuNDc3LDExLDQ5Ljc2N1Y0OS40Nzd6IE0yOCw2MUgxMnYtM2g2aDFoMTBjMS44NiwwLDMuNDI5LDEuMjc3LDMuODczLDNIMjh6ICAgIE00Nyw1MC45ODdjMC0wLjQ5MSwwLjExNi0wLjk4MywwLjMzNi0xLjQyMmwwLjU1OS0xLjExN2wtMS43ODktMC44OTVsLTAuNTU5LDEuMTE4QzQ1LjE4OSw0OS4zODYsNDUsNTAuMTg4LDQ1LDUwLjk4NyAgIGMwLDAuMDA0LDAuMDAxLDAuMDA5LDAuMDAxLDAuMDEzSDQ1djEwSDM0LjkxYy0wLjMwMi0xLjc4OS0xLjM5NS0zLjMwOS0yLjkxLTQuMTg4di03LjYyNGMxLjM1OS0wLjc4OSwyLjM3OC0yLjA5NCwyLjc5Mi0zLjY0OCAgIGMyLjI5OC0wLjgwMywzLjQwNC0yLjQ2NiwzLjg3Mi0zLjQ3Nmw4LjA1NiwwLjczMmMxLjI5MSwwLjExNywyLjU2OCwwLjUyLDMuNjkzLDEuMTYyYzIuNjc5LDEuNTMxLDQuMzk3LDQuMzI5LDQuNTcyLDcuMzg4ICAgbC02LjAxOSwyLjU4QzQ3Ljc4MSw1My40MzgsNDcsNTIuMjg0LDQ3LDUwLjk4N3ogTTUzLjU4LDYxbC0xLjM4NS0yLjQyNGw0LjkyLTIuMTA5TDU5LjM4Miw2MUg1My41OHonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J00zMiwyOGMtMi4yMDYsMC00LDEuNzk0LTQsNHMxLjc5NCw0LDQsNHM0LTEuNzk0LDQtNFMzNC4yMDYsMjgsMzIsMjh6IE0zMiwzNGMtMS4xMDMsMC0yLTAuODk3LTItMnMwLjg5Ny0yLDItMiAgIHMyLDAuODk3LDIsMlMzMy4xMDMsMzQsMzIsMzR6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNMTMsMUg1djExLjE4NEM0LjY4NiwxMi4wNzIsNC4zNTIsMTIsNCwxMmMtMS42NTQsMC0zLDEuMzQ2LTMsM3MxLjM0NiwzLDMsM3MzLTEuMzQ2LDMtM1YzaDZWMXogTTQsMTYgICBjLTAuNTUyLDAtMS0wLjQ0OS0xLTFzMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDFTNC41NTIsMTYsNCwxNnonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J001MywxdjhoLTAuNWMtMS4zNzksMC0yLjUsMS4xMjItMi41LDIuNXMxLjEyMSwyLjUsMi41LDIuNXMyLjUtMS4xMjIsMi41LTIuNVY3aDZ2MmgtMC41Yy0xLjM3OSwwLTIuNSwxLjEyMi0yLjUsMi41ICAgczEuMTIxLDIuNSwyLjUsMi41czIuNS0xLjEyMiwyLjUtMi41VjFINTN6IE01MywxMS41YzAsMC4yNzYtMC4yMjUsMC41LTAuNSwwLjVTNTIsMTEuNzc2LDUyLDExLjVzMC4yMjUtMC41LDAuNS0wLjVINTNWMTEuNXogICAgTTYxLDExLjVjMCwwLjI3Ni0wLjIyNSwwLjUtMC41LDAuNVM2MCwxMS43NzYsNjAsMTEuNXMwLjIyNS0wLjUsMC41LTAuNUg2MVYxMS41eiBNNTUsNVYzaDZ2Mkg1NXonPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGFjdENvbXAgLz5cbiAgICA8Lz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvbmNlcnQrT25lfE1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICB9XG5cblxuICAgICAgLmNvbnRhY3RCdXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAuY29udGFjdEJ1dHRvbiBhIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICB9XG5cbiAgICAuY29udGFjdEJ1dHRvbiBhOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gIzc2MWY2YiwgMCAwIDAuNWVtICM3NjFmNmIsXG4gICAgICAgICAgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAgICAubGlzdEJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgIH1cblxuICAgIC5saXN0QnV0dG9uIGEge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2U1MzQ0MTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2U1MzQ0MTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cblxuICAgIC5saXN0QnV0dG9uIGE6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRleHQtc2hhZG93OiAwIDQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gI2U1MzQ0MSwgMCAwIDAuNWVtICNlNTM0NDEsXG4gICAgICAgICAgMCAwIDAuMWVtICNlNTM0NDEsIDAgMTBweCAzcHggI2YxZjFmMTtcbiAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogI2U1MzQ0MTtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgfVxuXG4gICAgICAuc3BvdGlmeSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAyJSAwO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5zcG90aWZ5QWJvdXQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmZsZXhPbmVTaWRlIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4VHdvU2lkZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNTM0NDE7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgY29sb3I6IHJnYigyNSwzLDIyKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBhIHtcbiAgICAgICAgY29sb3I6IHJnYigyNSwzLDIyKSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2U1MzQ0MSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogcmdiKDI1LDMsMjIpXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42NTtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzVweCkge1xuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMyU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoZXZyb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1N3B4KSB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzM3ZoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2674058118" + " " + 'spotifyAbout',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'flexOneSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'introText',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "ABOUT GELK"), __jsx("p", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Good Enough Live Karaoke is Toronto's most popular live band karaoke experience, letting anyone with the desire and guts to join us on stage, take the mic and sing! Ideal for corporate events, birthday parties and weddings, Good Enough is a live band featuring guitars, bass, keyboards and drums, and a repertoire of over 400 songs spanning genres and eras. Get in touch at", ' ', __jsx("a", {
    href: "mailto:sing@goodenoughlivekaraoke.com?Subject=Hello%20",
    target: "_top",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "sing@goodenoughlivekaraoke.com"), ' ', "to book your event, and follow us on Instagram to see weekly public shows across Ontario. Since 2013, we have played thousands of hours on stage at private and public events with our unique, interactive rock'n'roll experience. It\u2019s a bit terrifying, hugely exhilarating and completely awesome!")), __jsx("div", {
    className: "jsx-2674058118" + " " + 'listButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("a", {
    href: "/shows",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Upcoming Shows"))), __jsx("div", {
    className: "jsx-2674058118" + " " + 'flexTwoSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'spotify',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx(react_spotify_player__WEBPACK_IMPORTED_MODULE_11___default.a, {
    uri: "spotify:playlist:4QmX44dyzZa6kObYm5jXzS",
    size: size,
    view: view,
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-2674058118" + " " + 'contactSvg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
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
      lineNumber: 230
    },
    __self: this
  }, __jsx("g", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx("path", {
    d: "M26,21c-1.654,0-3,1.346-3,3h2c0-0.551,0.448-1,1-1s1,0.449,1,1h2C29,22.346,27.654,21,26,21z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), __jsx("path", {
    d: "M38,21c-1.654,0-3,1.346-3,3h2c0-0.551,0.448-1,1-1s1,0.449,1,1h2C41,22.346,39.654,21,38,21z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }), __jsx("path", {
    d: "M51.405,42.223c-0.754-0.431-1.567-0.764-2.405-1.008V18c0-9.374-7.626-17-17-17S15,8.626,15,18v23.287   c-0.04,0.013-0.081,0.02-0.12,0.033C11.363,42.491,9,45.77,9,49.477v0.29c0,0.925,0.148,1.839,0.441,2.719L10,54.162V63h18h7h12   v-7.933c0.39,0.304,0.83,0.549,1.306,0.734L52.42,63h10.198l-5.626-11.252C56.951,47.818,54.823,44.175,51.405,42.223z    M56.22,54.675l-5.023,2.153l-0.772-1.351l5.103-2.187L56.22,54.675z M46.901,40.805L39,40.087V39h-0.104   c3.144-1.978,5.378-5.26,5.947-9.085c0.803-0.138,1.533-0.468,2.157-0.94v11.845C46.967,40.816,46.934,40.808,46.901,40.805z    M34.952,43.276c-0.108-0.895-0.415-1.728-0.874-2.458c1.017-0.164,1.998-0.434,2.922-0.821v0.859   C36.885,41.206,36.366,42.461,34.952,43.276z M29,56h-1v-6.09c0.326,0.055,0.659,0.09,1,0.09s0.674-0.035,1-0.09v6.181   C29.674,56.035,29.341,56,29,56z M29,48c-2.206,0-4-1.794-4-4c0-1.729,1.108-3.191,2.647-3.748   c0.008,0.003,0.016,0.007,0.024,0.009l0.007-0.019C28.094,40.095,28.534,40,29,40c2.206,0,4,1.794,4,4S31.206,48,29,48z M19,27.816   c-1.161-0.414-2-1.514-2-2.816s0.839-2.402,2-2.816V27.816z M19.146,29.914c0.58,3.886,2.9,7.302,6.269,9.287   c-0.373,0.28-0.716,0.597-1.015,0.955L17,40.895v-11.92C17.621,29.445,18.347,29.775,19.146,29.914z M32.286,38.986   C31.341,38.364,30.213,38,29,38c-0.434,0-0.856,0.049-1.263,0.136C23.683,36.431,21,32.439,21,28V18h1.343   c3.59,0,6.983-1.282,9.657-3.63c2.674,2.348,6.067,3.63,9.657,3.63H43v10C43,33.969,38.218,38.832,32.286,38.986z M45,22.184   c1.161,0.414,2,1.514,2,2.816s-0.839,2.402-2,2.816V22.184z M32,3c8.271,0,15,6.729,15,15v3.026c-0.584-0.442-1.257-0.773-2-0.924   V16h-3.343c-3.381,0-6.56-1.316-8.95-3.707L32,11.586l-0.707,0.707C28.902,14.684,25.724,16,22.343,16H19v4.101   c-0.743,0.152-1.416,0.482-2,0.924V18C17,9.729,23.729,3,32,3z M11,49.477c0-2.845,1.813-5.361,4.513-6.26   c0.463-0.154,0.943-0.257,1.43-0.306l6.312-0.631C23.091,42.825,23,43.402,23,44c0,2.215,1.21,4.149,3,5.188V56h-6v-7h-2v4h-2v2h2   v1h-6v-1h2v-2h-2.279l-0.382-1.146C11.114,51.179,11,50.477,11,49.767V49.477z M28,61H12v-3h6h1h10c1.86,0,3.429,1.277,3.873,3H28z    M47,50.987c0-0.491,0.116-0.983,0.336-1.422l0.559-1.117l-1.789-0.895l-0.559,1.118C45.189,49.386,45,50.188,45,50.987   c0,0.004,0.001,0.009,0.001,0.013H45v10H34.91c-0.302-1.789-1.395-3.309-2.91-4.188v-7.624c1.359-0.789,2.378-2.094,2.792-3.648   c2.298-0.803,3.404-2.466,3.872-3.476l8.056,0.732c1.291,0.117,2.568,0.52,3.693,1.162c2.679,1.531,4.397,4.329,4.572,7.388   l-6.019,2.58C47.781,53.438,47,52.284,47,50.987z M53.58,61l-1.385-2.424l4.92-2.109L59.382,61H53.58z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }), __jsx("path", {
    d: "M32,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S34.206,28,32,28z M32,34c-1.103,0-2-0.897-2-2s0.897-2,2-2   s2,0.897,2,2S33.103,34,32,34z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }), __jsx("path", {
    d: "M13,1H5v11.184C4.686,12.072,4.352,12,4,12c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3V3h6V1z M4,16   c-0.552,0-1-0.449-1-1s0.448-1,1-1s1,0.449,1,1S4.552,16,4,16z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), __jsx("path", {
    d: "M53,1v8h-0.5c-1.379,0-2.5,1.122-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5V7h6v2h-0.5c-1.379,0-2.5,1.122-2.5,2.5   s1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5V1H53z M53,11.5c0,0.276-0.225,0.5-0.5,0.5S52,11.776,52,11.5s0.225-0.5,0.5-0.5H53V11.5z    M61,11.5c0,0.276-0.225,0.5-0.5,0.5S60,11.776,60,11.5s0.225-0.5,0.5-0.5H61V11.5z M55,5V3h6v2H55z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  })))), __jsx(_components_ContactComp__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4073361451",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Concert+One|Montserrat&display=swap');svg.jsx-2674058118{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-top:70px;}.contactButton.jsx-2674058118{width:100%;text-align:center;margin-bottom:0;margin-top:50px;}.contactButton.jsx-2674058118 a.jsx-2674058118{background:none;padding:10px 20px;border-radius:50px;border:3px solid #f1f1f1;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;font-size:20px;font-family:'Montserrat',sans-serif;cursor:pointer;}.contactButton.jsx-2674058118 a.jsx-2674058118:hover{opacity:1;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.listButton.jsx-2674058118{width:100%;text-align:center;margin-bottom:4%;}.listButton.jsx-2674058118 a.jsx-2674058118{background:none;font-family:'Montserrat',sans-serif;padding:10px 20px;border-radius:50px;border:3px solid #e53441;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#e53441;-webkit-text-decoration:none;text-decoration:none;font-size:20px;cursor:pointer;}.listButton.jsx-2674058118 a.jsx-2674058118:hover{opacity:1;text-shadow:0 40px 100px,0 0 2px,0 0 1em #e53441,0 0 0.5em #e53441, 0 0 0.1em #e53441,0 10px 3px #f1f1f1;}h3.jsx-2674058118{text-align:center;font-family:'Concert One',sans-serif;color:#e53441;font-size:40px;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;}.spotify.jsx-2674058118{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2% 0;padding:20px 0;}.spotifyAbout.jsx-2674058118{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.flexOneSide.jsx-2674058118{width:60%;padding:2%;background:#f1f1f1;}.flexTwoSide.jsx-2674058118{background:#e53441;width:40%;padding:2%;}.introText.jsx-2674058118{max-width:1400px;font-family:'Montserrat',sans-serif;font-size:28px;color:rgb(25,3,22);font-weight:bold;padding:0 25px;}.introText.jsx-2674058118 a.jsx-2674058118{color:rgb(25,3,22) !important;}.introText.jsx-2674058118 a.jsx-2674058118:hover{color:#e53441 !important;}a.jsx-2674058118{color:rgb(25,3,22) text-decoration:underline;cursor:pointer;-webkit-transition:all 0.4s;transition:all 0.4s;}a.jsx-2674058118:hover{opacity:0.65;}.introText.jsx-2674058118 p.jsx-2674058118{line-height:38px;margin-bottom:50px;font-size:20px;text-align:left;}h2.jsx-2674058118{text-align:center;font-size:70px;margin-top:-100px;font-family:'Concert One',cursive;color:#f1f1f1;}@media screen and (max-width:1075px){.introText.jsx-2674058118 h2.jsx-2674058118{font-size:30px;font-family:'Concert One',cursive;}.introText.jsx-2674058118{font-size:20px;}.introText.jsx-2674058118 p.jsx-2674058118{line-height:36px;}.gelkLogo.jsx-2674058118{margin-top:33%;}}@media screen and (max-width:690px){.gelkLogo.jsx-2674058118{margin-top:25vh;}.chevron.jsx-2674058118{margin-top:50px;}.introText.jsx-2674058118 h2.jsx-2674058118{font-size:30px;margin-top:-70px;margin-bottom:30px;}.introText.jsx-2674058118{font-size:16px;}.introText.jsx-2674058118 p.jsx-2674058118{line-height:32px;}}@media screen and (max-width:557px){svg.jsx-2674058118{width:30px;}.introText.jsx-2674058118 h2.jsx-2674058118{font-size:22px;}.gelkLogo.jsx-2674058118{width:90%;}.gelkLogo.jsx-2674058118{margin-top:33vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMlBnQixBQUVpRyxBQUd2RSxBQVFSLEFBT0ssQUFjTixBQU1DLEFBTUssQUFjTixBQU1TLEFBUUgsQUFRRCxBQUtILEFBTVMsQUFNRixBQVNhLEFBSUwsQUFNQyxBQU1iLEFBSUksQUFPQyxBQVNELEFBS0EsQUFJRSxBQUlGLEFBTUMsQUFJQSxBQUdELEFBTUEsQUFJRSxBQU1OLEFBSUksQUFJTCxBQUdNLFVBaktrQixBQTBCRyxBQTBCNUIsQUEyR1gsQ0FyTGdCLEFBMkJBLEFBa0poQixFQTlERixDQWxEZSxDQXNFd0IsQUFLckMsQUFRQSxBQWFtQixBQU1uQixBQWNBLENBMUtnQixBQTBCbUIsQUFxSG5DLEFBSUEsQUE4QkEsQ0FsR3FDLEFBNkJsQixBQXlCbkIsQUEyQkEsQ0FsSHNDLEFBcUV2QixDQTFDTCxFQUxTLElBd0JyQixJQWxHZ0IsQUEyQkMsQUFxREosQ0FjYixFQStEdUIsQ0FuQ0gsQ0FuSEQsRUE0R0YsSUF4Q2pCLEFBTUEsS0FoRmdCLEFBdUdDLENBNUVuQixHQXVHSSxFQWZnQixBQU9tQixBQW1DbkMsQ0E3SGdCLENBekJPLEFBOEVSLEVBakNELEtBb0RNLENBdkd4QixNQW1IRSxDQTlCcUIsQ0FqQ0osQ0FwQkUsSUEzQ1UsQUE2RWhCLElBM0RJLE1BOENJLENBY3JCLEFBdURnQixFQXBDRyxDQTNCTSxDQTFCQSxPQXpCTCxHQW1IcEIsS0FwQ2lCLElBaUJqQixLQXBGRixDQWNtQixDQVluQixJQTBDRSxhQXJEb0IsWUExQk4sY0FDTyxlQXBCSixJQWdFakIsR0FsQmMsSUE3Q1EsR0FxRVIsT0F2Qk8sS0F3QkosQ0FyRWIsUUFtQlcsTUFtRGYsU0FsRHFDLHFCQTBCdEIsZUF4QmxCLEFBMEJBLGVBMUJDLEFBMEJBIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IE5lb25Mb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTmVvbkxvZ28nO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNlbCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgU3BvdGlmeVBsYXllciBmcm9tICdyZWFjdC1zcG90aWZ5LXBsYXllcic7XG5pbXBvcnQgQ2xpZW50Q29tcCBmcm9tICcuLi9jb21wb25lbnRzL2NsaWVudENvbXAnO1xuaW1wb3J0IE1lZGlhQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL21lZGlhQ29tcCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3RDb21wIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdENvbXAnO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmltcG9ydCB7XG4gIExpbmssXG4gIEVsZW1lbnQsXG4gIEV2ZW50cyxcbiAgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwsXG4gIHNjcm9sbFNweSxcbiAgc2Nyb2xsZXIsXG59IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbmNvbnN0IHNpemUgPSB7XG4gIHdpZHRoOiAnOTAlJyxcbiAgaGVpZ2h0OiA2MDAsXG4gIG1heEhlaWdodDogJzYwMHB4Jyxcbn07XG5jb25zdCB2aWV3ID0gJ2xpc3QnOyAvLyBvciAnY292ZXJhcnQnXG5jb25zdCB0aGVtZSA9ICdibGFjayc7IC8vIG9yICd3aGl0ZSdcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9J3RleHQnIGNsYXNzTmFtZT0nc2Nyb2xsQm94Jz48L2Rpdj5cbiAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgc3R5bGU9e3VzZVNwcmluZyh7XG4gICAgICAgICAgY29uZmlnOiB7IGR1cmF0aW9uOiA5NTAgfSxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGZyb206IHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBzY2FsZSgxMCkgfSxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnZWxrTG9nbyc+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdnZWxrSW1hZ2VMb2dvJ1xuICAgICAgICAgICAgc3JjPScvdGVzdE5lb24uZ2lmJ1xuICAgICAgICAgICAgYWx0PSdnb29kIGVub3VnaCBsaXZlIGthcmFva2UgbmVvbiBsb2dvJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29uZ0J1dHRvbic+XG4gICAgICAgICAgPGEgaHJlZj0nL2xpc3QnPlZpZXcgU29uZyBMaXN0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdnZWxrTG9nbyc+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9J2dlbGtJbWFnZUxvZ28nXG4gICAgICAgICAgc3JjPScvdGVzdE5lb24uZ2lmJ1xuICAgICAgICAgIGFsdD0nZ29vZCBlbm91Z2ggbGl2ZSBrYXJhb2tlIG5lb24gbG9nbydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nc29uZ0J1dHRvbic+XG4gICAgICAgIDxhIGhyZWY9Jy9saXN0Jz5WaWV3IFNvbmcgTGlzdDwvYT5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgICB7LyogPGRpdiBjbGFzc05hbWU9J2NoZXZyb24nPlxuICAgICAgPExpbmtcbiAgICAgICAgY2xhc3NOYW1lPSdzY3JvbGxDaGV2cm9uJ1xuICAgICAgICB0bz0ndGV4dCdcbiAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBoZWlnaHQ9JzQwcHgnXG4gICAgICAgICAgd2lkdGg9JzQwcHgnXG4gICAgICAgICAgZmlsbD0nI0YxRjFGMSdcbiAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgIHg9JzBweCdcbiAgICAgICAgICB5PScwcHgnXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbC1ydWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgZD0nTTEyLDIzIEM1LjkyNDg2Nzc1LDIzIDEsMTguMDc1MTMyMiAxLDEyIEMxLDUuOTI0ODY3NzUgNS45MjQ4Njc3NSwxIDEyLDEgQzE4LjA3NTEzMjIsMSAyMyw1LjkyNDg2Nzc1IDIzLDEyIEMyMywxOC4wNzUxMzIyIDE4LjA3NTEzMjIsMjMgMTIsMjMgWiBNMTIsMjEgQzE2Ljk3MDU2MjcsMjEgMjEsMTYuOTcwNTYyNyAyMSwxMiBDMjEsNy4wMjk0MzcyNSAxNi45NzA1NjI3LDMgMTIsMyBDNy4wMjk0MzcyNSwzIDMsNy4wMjk0MzcyNSAzLDEyIEMzLDE2Ljk3MDU2MjcgNy4wMjk0MzcyNSwyMSAxMiwyMSBaIE0xNS4yOTI4OTMyLDkuMjkyODkzMjIgTDE2LjcwNzEwNjgsMTAuNzA3MTA2OCBMMTIsMTUuNDE0MjEzNiBMNy4yOTI4OTMyMiwxMC43MDcxMDY4IEw4LjcwNzEwNjc4LDkuMjkyODkzMjIgTDEyLDEyLjU4NTc4NjQgTDE1LjI5Mjg5MzIsOS4yOTI4OTMyMiBaJ1xuICAgICAgICAgID48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PiAqL31cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAuc29uZ0J1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNSU7XG4gICAgfVxuXG4gICAgLnNvbmdCdXR0b24gYSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICB9XG5cbiAgICAuc29uZ0J1dHRvbiBhOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gIzc2MWY2YiwgMCAwIDAuNWVtICM3NjFmNmIsXG4gICAgICAgICAgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAuZ2Vsa0ltYWdlTG9nbyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWF4LWhlaWdodDogODAwcHg7XG4gICAgfVxuXG4gICAgLmdlbGtMb2dvIHtcbiAgICAgIHdpZHRoOiA2MiU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDMuNSU7XG4gICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNSU7XG4gICAgfVxuICAgICAgc3ZnOmhvdmVyIHtcbiAgICAgICAgZmlsbDogcmdiYSgyNDEsMjQxLDI0MSwgMC42KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIH1cbiAgICAgIGgxLFxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuXG4gICAgICAuY2hldnJvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogOTQlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogOTJ2aDtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKVxuICAgICAgfVxuXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDIlO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsQm94e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYm90dG9tOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPD5cbiAgICAgIHsvKiA8Q2Fyb3VzZWwgLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BvdGlmeUFib3V0Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhPbmVTaWRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW50cm9UZXh0Jz5cbiAgICAgICAgICAgIDxoMz5BQk9VVCBHRUxLPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBHb29kIEVub3VnaCBMaXZlIEthcmFva2UgaXMgVG9yb250bydzIG1vc3QgcG9wdWxhciBsaXZlIGJhbmRcbiAgICAgICAgICAgICAga2FyYW9rZSBleHBlcmllbmNlLCBsZXR0aW5nIGFueW9uZSB3aXRoIHRoZSBkZXNpcmUgYW5kIGd1dHMgdG9cbiAgICAgICAgICAgICAgam9pbiB1cyBvbiBzdGFnZSwgdGFrZSB0aGUgbWljIGFuZCBzaW5nISBJZGVhbCBmb3IgY29ycG9yYXRlXG4gICAgICAgICAgICAgIGV2ZW50cywgYmlydGhkYXkgcGFydGllcyBhbmQgd2VkZGluZ3MsIEdvb2QgRW5vdWdoIGlzIGEgbGl2ZSBiYW5kXG4gICAgICAgICAgICAgIGZlYXR1cmluZyBndWl0YXJzLCBiYXNzLCBrZXlib2FyZHMgYW5kIGRydW1zLCBhbmQgYSByZXBlcnRvaXJlIG9mXG4gICAgICAgICAgICAgIG92ZXIgNDAwIHNvbmdzIHNwYW5uaW5nIGdlbnJlcyBhbmQgZXJhcy4gR2V0IGluIHRvdWNoIGF0eycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPSdtYWlsdG86c2luZ0Bnb29kZW5vdWdobGl2ZWthcmFva2UuY29tP1N1YmplY3Q9SGVsbG8lMjAnXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfdG9wJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgc2luZ0Bnb29kZW5vdWdobGl2ZWthcmFva2UuY29tXG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICB0byBib29rIHlvdXIgZXZlbnQsIGFuZCBmb2xsb3cgdXMgb24gSW5zdGFncmFtIHRvIHNlZSB3ZWVrbHlcbiAgICAgICAgICAgICAgcHVibGljIHNob3dzIGFjcm9zcyBPbnRhcmlvLiBTaW5jZSAyMDEzLCB3ZSBoYXZlIHBsYXllZCB0aG91c2FuZHNcbiAgICAgICAgICAgICAgb2YgaG91cnMgb24gc3RhZ2UgYXQgcHJpdmF0ZSBhbmQgcHVibGljIGV2ZW50cyB3aXRoIG91ciB1bmlxdWUsXG4gICAgICAgICAgICAgIGludGVyYWN0aXZlIHJvY2snbidyb2xsIGV4cGVyaWVuY2UuIEl04oCZcyBhIGJpdCB0ZXJyaWZ5aW5nLCBodWdlbHlcbiAgICAgICAgICAgICAgZXhoaWxhcmF0aW5nIGFuZCBjb21wbGV0ZWx5IGF3ZXNvbWUhXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RCdXR0b24nPlxuICAgICAgICAgICAgPGEgaHJlZj0nL3Nob3dzJz5VcGNvbWluZyBTaG93czwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4VHdvU2lkZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Nwb3RpZnknPlxuICAgICAgICAgICAgPFNwb3RpZnlQbGF5ZXJcbiAgICAgICAgICAgICAgdXJpPSdzcG90aWZ5OnBsYXlsaXN0OjRRbVg0NGR5elphNmtPYlltNWpYelMnXG4gICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICAgIHZpZXc9e3ZpZXd9XG4gICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdFN2Zyc+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBoZWlnaHQ9JzEwMHB4J1xuICAgICAgICAgIHdpZHRoPScxMDBweCdcbiAgICAgICAgICBmaWxsPScjZjFmMWYxJ1xuICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICB2ZXJzaW9uPScxLjEnXG4gICAgICAgICAgeD0nMHB4J1xuICAgICAgICAgIHk9JzBweCdcbiAgICAgICAgICB2aWV3Qm94PScwIDAgNjQgNjQnXG4gICAgICAgID5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoIGQ9J00yNiwyMWMtMS42NTQsMC0zLDEuMzQ2LTMsM2gyYzAtMC41NTEsMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDFoMkMyOSwyMi4zNDYsMjcuNjU0LDIxLDI2LDIxeic+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD0nTTM4LDIxYy0xLjY1NCwwLTMsMS4zNDYtMywzaDJjMC0wLjU1MSwwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMWgyQzQxLDIyLjM0NiwzOS42NTQsMjEsMzgsMjF6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNNTEuNDA1LDQyLjIyM2MtMC43NTQtMC40MzEtMS41NjctMC43NjQtMi40MDUtMS4wMDhWMThjMC05LjM3NC03LjYyNi0xNy0xNy0xN1MxNSw4LjYyNiwxNSwxOHYyMy4yODcgICBjLTAuMDQsMC4wMTMtMC4wODEsMC4wMi0wLjEyLDAuMDMzQzExLjM2Myw0Mi40OTEsOSw0NS43Nyw5LDQ5LjQ3N3YwLjI5YzAsMC45MjUsMC4xNDgsMS44MzksMC40NDEsMi43MTlMMTAsNTQuMTYyVjYzaDE4aDdoMTIgICB2LTcuOTMzYzAuMzksMC4zMDQsMC44MywwLjU0OSwxLjMwNiwwLjczNEw1Mi40Miw2M2gxMC4xOThsLTUuNjI2LTExLjI1MkM1Ni45NTEsNDcuODE4LDU0LjgyMyw0NC4xNzUsNTEuNDA1LDQyLjIyM3ogICAgTTU2LjIyLDU0LjY3NWwtNS4wMjMsMi4xNTNsLTAuNzcyLTEuMzUxbDUuMTAzLTIuMTg3TDU2LjIyLDU0LjY3NXogTTQ2LjkwMSw0MC44MDVMMzksNDAuMDg3VjM5aC0wLjEwNCAgIGMzLjE0NC0xLjk3OCw1LjM3OC01LjI2LDUuOTQ3LTkuMDg1YzAuODAzLTAuMTM4LDEuNTMzLTAuNDY4LDIuMTU3LTAuOTR2MTEuODQ1QzQ2Ljk2Nyw0MC44MTYsNDYuOTM0LDQwLjgwOCw0Ni45MDEsNDAuODA1eiAgICBNMzQuOTUyLDQzLjI3NmMtMC4xMDgtMC44OTUtMC40MTUtMS43MjgtMC44NzQtMi40NThjMS4wMTctMC4xNjQsMS45OTgtMC40MzQsMi45MjItMC44MjF2MC44NTkgICBDMzYuODg1LDQxLjIwNiwzNi4zNjYsNDIuNDYxLDM0Ljk1Miw0My4yNzZ6IE0yOSw1NmgtMXYtNi4wOWMwLjMyNiwwLjA1NSwwLjY1OSwwLjA5LDEsMC4wOXMwLjY3NC0wLjAzNSwxLTAuMDl2Ni4xODEgICBDMjkuNjc0LDU2LjAzNSwyOS4zNDEsNTYsMjksNTZ6IE0yOSw0OGMtMi4yMDYsMC00LTEuNzk0LTQtNGMwLTEuNzI5LDEuMTA4LTMuMTkxLDIuNjQ3LTMuNzQ4ICAgYzAuMDA4LDAuMDAzLDAuMDE2LDAuMDA3LDAuMDI0LDAuMDA5bDAuMDA3LTAuMDE5QzI4LjA5NCw0MC4wOTUsMjguNTM0LDQwLDI5LDQwYzIuMjA2LDAsNCwxLjc5NCw0LDRTMzEuMjA2LDQ4LDI5LDQ4eiBNMTksMjcuODE2ICAgYy0xLjE2MS0wLjQxNC0yLTEuNTE0LTItMi44MTZzMC44MzktMi40MDIsMi0yLjgxNlYyNy44MTZ6IE0xOS4xNDYsMjkuOTE0YzAuNTgsMy44ODYsMi45LDcuMzAyLDYuMjY5LDkuMjg3ICAgYy0wLjM3MywwLjI4LTAuNzE2LDAuNTk3LTEuMDE1LDAuOTU1TDE3LDQwLjg5NXYtMTEuOTJDMTcuNjIxLDI5LjQ0NSwxOC4zNDcsMjkuNzc1LDE5LjE0NiwyOS45MTR6IE0zMi4yODYsMzguOTg2ICAgQzMxLjM0MSwzOC4zNjQsMzAuMjEzLDM4LDI5LDM4Yy0wLjQzNCwwLTAuODU2LDAuMDQ5LTEuMjYzLDAuMTM2QzIzLjY4MywzNi40MzEsMjEsMzIuNDM5LDIxLDI4VjE4aDEuMzQzICAgYzMuNTksMCw2Ljk4My0xLjI4Miw5LjY1Ny0zLjYzYzIuNjc0LDIuMzQ4LDYuMDY3LDMuNjMsOS42NTcsMy42M0g0M3YxMEM0MywzMy45NjksMzguMjE4LDM4LjgzMiwzMi4yODYsMzguOTg2eiBNNDUsMjIuMTg0ICAgYzEuMTYxLDAuNDE0LDIsMS41MTQsMiwyLjgxNnMtMC44MzksMi40MDItMiwyLjgxNlYyMi4xODR6IE0zMiwzYzguMjcxLDAsMTUsNi43MjksMTUsMTV2My4wMjZjLTAuNTg0LTAuNDQyLTEuMjU3LTAuNzczLTItMC45MjQgICBWMTZoLTMuMzQzYy0zLjM4MSwwLTYuNTYtMS4zMTYtOC45NS0zLjcwN0wzMiwxMS41ODZsLTAuNzA3LDAuNzA3QzI4LjkwMiwxNC42ODQsMjUuNzI0LDE2LDIyLjM0MywxNkgxOXY0LjEwMSAgIGMtMC43NDMsMC4xNTItMS40MTYsMC40ODItMiwwLjkyNFYxOEMxNyw5LjcyOSwyMy43MjksMywzMiwzeiBNMTEsNDkuNDc3YzAtMi44NDUsMS44MTMtNS4zNjEsNC41MTMtNi4yNiAgIGMwLjQ2My0wLjE1NCwwLjk0My0wLjI1NywxLjQzLTAuMzA2bDYuMzEyLTAuNjMxQzIzLjA5MSw0Mi44MjUsMjMsNDMuNDAyLDIzLDQ0YzAsMi4yMTUsMS4yMSw0LjE0OSwzLDUuMTg4VjU2aC02di03aC0ydjRoLTJ2MmgyICAgdjFoLTZ2LTFoMnYtMmgtMi4yNzlsLTAuMzgyLTEuMTQ2QzExLjExNCw1MS4xNzksMTEsNTAuNDc3LDExLDQ5Ljc2N1Y0OS40Nzd6IE0yOCw2MUgxMnYtM2g2aDFoMTBjMS44NiwwLDMuNDI5LDEuMjc3LDMuODczLDNIMjh6ICAgIE00Nyw1MC45ODdjMC0wLjQ5MSwwLjExNi0wLjk4MywwLjMzNi0xLjQyMmwwLjU1OS0xLjExN2wtMS43ODktMC44OTVsLTAuNTU5LDEuMTE4QzQ1LjE4OSw0OS4zODYsNDUsNTAuMTg4LDQ1LDUwLjk4NyAgIGMwLDAuMDA0LDAuMDAxLDAuMDA5LDAuMDAxLDAuMDEzSDQ1djEwSDM0LjkxYy0wLjMwMi0xLjc4OS0xLjM5NS0zLjMwOS0yLjkxLTQuMTg4di03LjYyNGMxLjM1OS0wLjc4OSwyLjM3OC0yLjA5NCwyLjc5Mi0zLjY0OCAgIGMyLjI5OC0wLjgwMywzLjQwNC0yLjQ2NiwzLjg3Mi0zLjQ3Nmw4LjA1NiwwLjczMmMxLjI5MSwwLjExNywyLjU2OCwwLjUyLDMuNjkzLDEuMTYyYzIuNjc5LDEuNTMxLDQuMzk3LDQuMzI5LDQuNTcyLDcuMzg4ICAgbC02LjAxOSwyLjU4QzQ3Ljc4MSw1My40MzgsNDcsNTIuMjg0LDQ3LDUwLjk4N3ogTTUzLjU4LDYxbC0xLjM4NS0yLjQyNGw0LjkyLTIuMTA5TDU5LjM4Miw2MUg1My41OHonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J00zMiwyOGMtMi4yMDYsMC00LDEuNzk0LTQsNHMxLjc5NCw0LDQsNHM0LTEuNzk0LDQtNFMzNC4yMDYsMjgsMzIsMjh6IE0zMiwzNGMtMS4xMDMsMC0yLTAuODk3LTItMnMwLjg5Ny0yLDItMiAgIHMyLDAuODk3LDIsMlMzMy4xMDMsMzQsMzIsMzR6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNMTMsMUg1djExLjE4NEM0LjY4NiwxMi4wNzIsNC4zNTIsMTIsNCwxMmMtMS42NTQsMC0zLDEuMzQ2LTMsM3MxLjM0NiwzLDMsM3MzLTEuMzQ2LDMtM1YzaDZWMXogTTQsMTYgICBjLTAuNTUyLDAtMS0wLjQ0OS0xLTFzMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDFTNC41NTIsMTYsNCwxNnonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J001MywxdjhoLTAuNWMtMS4zNzksMC0yLjUsMS4xMjItMi41LDIuNXMxLjEyMSwyLjUsMi41LDIuNXMyLjUtMS4xMjIsMi41LTIuNVY3aDZ2MmgtMC41Yy0xLjM3OSwwLTIuNSwxLjEyMi0yLjUsMi41ICAgczEuMTIxLDIuNSwyLjUsMi41czIuNS0xLjEyMiwyLjUtMi41VjFINTN6IE01MywxMS41YzAsMC4yNzYtMC4yMjUsMC41LTAuNSwwLjVTNTIsMTEuNzc2LDUyLDExLjVzMC4yMjUtMC41LDAuNS0wLjVINTNWMTEuNXogICAgTTYxLDExLjVjMCwwLjI3Ni0wLjIyNSwwLjUtMC41LDAuNVM2MCwxMS43NzYsNjAsMTEuNXMwLjIyNS0wLjUsMC41LTAuNUg2MVYxMS41eiBNNTUsNVYzaDZ2Mkg1NXonPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGFjdENvbXAgLz5cbiAgICA8Lz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvbmNlcnQrT25lfE1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICB9XG5cblxuICAgICAgLmNvbnRhY3RCdXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAuY29udGFjdEJ1dHRvbiBhIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICB9XG5cbiAgICAuY29udGFjdEJ1dHRvbiBhOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gIzc2MWY2YiwgMCAwIDAuNWVtICM3NjFmNmIsXG4gICAgICAgICAgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAgICAubGlzdEJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgIH1cblxuICAgIC5saXN0QnV0dG9uIGEge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2U1MzQ0MTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2U1MzQ0MTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cblxuICAgIC5saXN0QnV0dG9uIGE6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRleHQtc2hhZG93OiAwIDQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gI2U1MzQ0MSwgMCAwIDAuNWVtICNlNTM0NDEsXG4gICAgICAgICAgMCAwIDAuMWVtICNlNTM0NDEsIDAgMTBweCAzcHggI2YxZjFmMTtcbiAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogI2U1MzQ0MTtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgfVxuXG4gICAgICAuc3BvdGlmeSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAyJSAwO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5zcG90aWZ5QWJvdXQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmZsZXhPbmVTaWRlIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4VHdvU2lkZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNTM0NDE7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgY29sb3I6IHJnYigyNSwzLDIyKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBhIHtcbiAgICAgICAgY29sb3I6IHJnYigyNSwzLDIyKSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2U1MzQ0MSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogcmdiKDI1LDMsMjIpXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42NTtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzVweCkge1xuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMyU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoZXZyb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1N3B4KSB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzM3ZoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5cb5c79082fcd82e4c7f.hot-update.js.map