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
      transform: 'scale(1)',
      from: {
        opacity: 0,
        scale: 0
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
      lineNumber: 46
    },
    __self: this
  }, __jsx("img", {
    src: "/testNeon.gif",
    alt: "good enough live karaoke neon logo",
    className: "jsx-2674058118" + " " + 'gelkImageLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2674058118" + " " + 'songButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    href: "/list",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "View Song List")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3885837156",
    __self: this
  }, ".songButton.jsx-2674058118{width:100%;text-align:center;margin-bottom:2.5%;}.songButton.jsx-2674058118 a.jsx-2674058118{background:none;padding:10px 20px;border-radius:50px;border:3px solid #f1f1f1;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;font-size:20px;cursor:pointer;}.songButton.jsx-2674058118 a.jsx-2674058118:hover{opacity:1;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.gelkImageLogo.jsx-2674058118{display:block;width:100%;height:auto;max-height:800px;}.gelkLogo.jsx-2674058118{width:62%;margin:0 auto;margin-top:3.5%;max-width:1400px;margin-bottom:0.5%;}svg.jsx-2674058118:hover{fill:rgba(241,241,241,0.6);cursor:pointer;}svg.jsx-2674058118{-webkit-transition:all 0.4s;transition:all 0.4s;}h1.jsx-2674058118,a.jsx-2674058118{font-family:'Montserrat',sans-serif;}ul.jsx-2674058118{padding:0;}li.jsx-2674058118{list-style:none;margin:5px 0;}a.jsx-2674058118{-webkit-text-decoration:none;text-decoration:none;}a.jsx-2674058118:hover{opacity:0.6;}.chevron.jsx-2674058118{margin-bottom:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:94%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:fixed;top:92vh;z-index:100;-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1);}.wrapper.jsx-2674058118{margin:0 auto;max-width:960px;padding:0 2%;}.scrollBox.jsx-2674058118{position:relative;color:white;width:20px;height:20px;bottom:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZnQixBQUlrQixBQU1LLEFBYU4sQUFNSSxBQU9KLEFBT29CLEFBS1IsQUFJaUIsQUFJM0IsQUFJTSxBQUtLLEFBSVQsQUFJUSxBQVdOLEFBTUksVUFqRWtCLEFBWXhCLEFBb0JkLENBcERrQixDQWlFbEIsRUF4Q1csQUF1RE8sRUExRUEsQUFrREgsRUE4QkQsRUFqQkMsSUFwQ0MsQ0FQSixFQWFLLEVBdENFLEFBd0RuQixDQXdCZSxBQU1GLElBaEZNLEVBeUNuQixDQXJCaUIsR0FPQSxDQXNESCxDQWhEZCxDQTBDQSxLQWhGRixBQTBDRSxFQWlCQSxHQXJEeUIsQUFpRlYsQ0E3RGpCLEdBT3FCLFNBdURuQixVQXRERixFQTNCbUIsZ0JBNkRMLEVBNURRLFFBNkRPLFNBbEQ3QiwrQkFWZ0IsY0FDTywyQ0E0REosT0EzREYsUUE0REosT0ExRGQsRUEyRGlCLFlBRWYsQ0E3REQsNkVBNkRFIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IE5lb25Mb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTmVvbkxvZ28nO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNlbCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgU3BvdGlmeVBsYXllciBmcm9tICdyZWFjdC1zcG90aWZ5LXBsYXllcic7XG5pbXBvcnQgQ2xpZW50Q29tcCBmcm9tICcuLi9jb21wb25lbnRzL2NsaWVudENvbXAnO1xuaW1wb3J0IE1lZGlhQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL21lZGlhQ29tcCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3RDb21wIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdENvbXAnO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmltcG9ydCB7XG4gIExpbmssXG4gIEVsZW1lbnQsXG4gIEV2ZW50cyxcbiAgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwsXG4gIHNjcm9sbFNweSxcbiAgc2Nyb2xsZXIsXG59IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbmNvbnN0IHNpemUgPSB7XG4gIHdpZHRoOiAnOTAlJyxcbiAgaGVpZ2h0OiA2MDAsXG4gIG1heEhlaWdodDogJzYwMHB4Jyxcbn07XG5jb25zdCB2aWV3ID0gJ2xpc3QnOyAvLyBvciAnY292ZXJhcnQnXG5jb25zdCB0aGVtZSA9ICdibGFjayc7IC8vIG9yICd3aGl0ZSdcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9J3RleHQnIGNsYXNzTmFtZT0nc2Nyb2xsQm94Jz48L2Rpdj5cbiAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgc3R5bGU9e3VzZVNwcmluZyh7XG4gICAgICAgICAgY29uZmlnOiB7IGR1cmF0aW9uOiA5NTAgfSxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgICAgICBmcm9tOiB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwIH0sXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2Vsa0xvZ28nPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZ2Vsa0ltYWdlTG9nbydcbiAgICAgICAgICAgIHNyYz0nL3Rlc3ROZW9uLmdpZidcbiAgICAgICAgICAgIGFsdD0nZ29vZCBlbm91Z2ggbGl2ZSBrYXJhb2tlIG5lb24gbG9nbydcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvbmdCdXR0b24nPlxuICAgICAgICAgIDxhIGhyZWY9Jy9saXN0Jz5WaWV3IFNvbmcgTGlzdDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nZ2Vsa0xvZ28nPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPSdnZWxrSW1hZ2VMb2dvJ1xuICAgICAgICAgIHNyYz0nL3Rlc3ROZW9uLmdpZidcbiAgICAgICAgICBhbHQ9J2dvb2QgZW5vdWdoIGxpdmUga2FyYW9rZSBuZW9uIGxvZ28nXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3NvbmdCdXR0b24nPlxuICAgICAgICA8YSBocmVmPScvbGlzdCc+VmlldyBTb25nIExpc3Q8L2E+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICAgey8qIDxkaXYgY2xhc3NOYW1lPSdjaGV2cm9uJz5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT0nc2Nyb2xsQ2hldnJvbidcbiAgICAgICAgdG89J3RleHQnXG4gICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgaGVpZ2h0PSc0MHB4J1xuICAgICAgICAgIHdpZHRoPSc0MHB4J1xuICAgICAgICAgIGZpbGw9JyNGMUYxRjEnXG4gICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICB4PScwcHgnXG4gICAgICAgICAgeT0nMHB4J1xuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgIGQ9J00xMiwyMyBDNS45MjQ4Njc3NSwyMyAxLDE4LjA3NTEzMjIgMSwxMiBDMSw1LjkyNDg2Nzc1IDUuOTI0ODY3NzUsMSAxMiwxIEMxOC4wNzUxMzIyLDEgMjMsNS45MjQ4Njc3NSAyMywxMiBDMjMsMTguMDc1MTMyMiAxOC4wNzUxMzIyLDIzIDEyLDIzIFogTTEyLDIxIEMxNi45NzA1NjI3LDIxIDIxLDE2Ljk3MDU2MjcgMjEsMTIgQzIxLDcuMDI5NDM3MjUgMTYuOTcwNTYyNywzIDEyLDMgQzcuMDI5NDM3MjUsMyAzLDcuMDI5NDM3MjUgMywxMiBDMywxNi45NzA1NjI3IDcuMDI5NDM3MjUsMjEgMTIsMjEgWiBNMTUuMjkyODkzMiw5LjI5Mjg5MzIyIEwxNi43MDcxMDY4LDEwLjcwNzEwNjggTDEyLDE1LjQxNDIxMzYgTDcuMjkyODkzMjIsMTAuNzA3MTA2OCBMOC43MDcxMDY3OCw5LjI5Mjg5MzIyIEwxMiwxMi41ODU3ODY0IEwxNS4yOTI4OTMyLDkuMjkyODkzMjIgWidcbiAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj4gKi99XG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgLnNvbmdCdXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjUlO1xuICAgIH1cblxuICAgIC5zb25nQnV0dG9uIGEge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgfVxuXG4gICAgLnNvbmdCdXR0b24gYTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICM3NjFmNmIsIDAgMCAwLjVlbSAjNzYxZjZiLFxuICAgICAgICAgIDAgMCAwLjFlbSAjNzYxZjZiLCAwIDEwcHggM3B4ICMwMDA7XG4gICAgfVxuXG4gICAgLmdlbGtJbWFnZUxvZ28ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xuICAgIH1cblxuICAgIC5nZWxrTG9nbyB7XG4gICAgICB3aWR0aDogNjIlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiAzLjUlO1xuICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjUlO1xuICAgIH1cbiAgICAgIHN2Zzpob3ZlciB7XG4gICAgICAgIGZpbGw6IHJnYmEoMjQxLDI0MSwyNDEsIDAuNik7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgc3ZnIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB9XG4gICAgICBoMSxcbiAgICAgIGEge1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cblxuICAgICAgLmNoZXZyb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDk0JTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDkydmg7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSlcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyJTtcbiAgICAgIH1cblxuICAgICAgLnNjcm9sbEJveHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvdHRvbTogMjAwcHg7XG4gICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDw+XG4gICAgICB7LyogPENhcm91c2VsIC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Nwb3RpZnlBYm91dCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4T25lU2lkZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludHJvVGV4dCc+XG4gICAgICAgICAgICA8aDM+QUJPVVQgR0VMSzwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgR29vZCBFbm91Z2ggTGl2ZSBLYXJhb2tlIGlzIFRvcm9udG8ncyBtb3N0IHBvcHVsYXIgbGl2ZSBiYW5kXG4gICAgICAgICAgICAgIGthcmFva2UgZXhwZXJpZW5jZSwgbGV0dGluZyBhbnlvbmUgd2l0aCB0aGUgZGVzaXJlIGFuZCBndXRzIHRvXG4gICAgICAgICAgICAgIGpvaW4gdXMgb24gc3RhZ2UsIHRha2UgdGhlIG1pYyBhbmQgc2luZyEgSWRlYWwgZm9yIGNvcnBvcmF0ZVxuICAgICAgICAgICAgICBldmVudHMsIGJpcnRoZGF5IHBhcnRpZXMgYW5kIHdlZGRpbmdzLCBHb29kIEVub3VnaCBpcyBhIGxpdmUgYmFuZFxuICAgICAgICAgICAgICBmZWF0dXJpbmcgZ3VpdGFycywgYmFzcywga2V5Ym9hcmRzIGFuZCBkcnVtcywgYW5kIGEgcmVwZXJ0b2lyZSBvZlxuICAgICAgICAgICAgICBvdmVyIDQwMCBzb25ncyBzcGFubmluZyBnZW5yZXMgYW5kIGVyYXMuIEdldCBpbiB0b3VjaCBhdHsnICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj0nbWFpbHRvOnNpbmdAZ29vZGVub3VnaGxpdmVrYXJhb2tlLmNvbT9TdWJqZWN0PUhlbGxvJTIwJ1xuICAgICAgICAgICAgICAgIHRhcmdldD0nX3RvcCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHNpbmdAZ29vZGVub3VnaGxpdmVrYXJhb2tlLmNvbVxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgdG8gYm9vayB5b3VyIGV2ZW50LCBhbmQgZm9sbG93IHVzIG9uIEluc3RhZ3JhbSB0byBzZWUgd2Vla2x5XG4gICAgICAgICAgICAgIHB1YmxpYyBzaG93cyBhY3Jvc3MgT250YXJpby4gU2luY2UgMjAxMywgd2UgaGF2ZSBwbGF5ZWQgdGhvdXNhbmRzXG4gICAgICAgICAgICAgIG9mIGhvdXJzIG9uIHN0YWdlIGF0IHByaXZhdGUgYW5kIHB1YmxpYyBldmVudHMgd2l0aCBvdXIgdW5pcXVlLFxuICAgICAgICAgICAgICBpbnRlcmFjdGl2ZSByb2NrJ24ncm9sbCBleHBlcmllbmNlLiBJdOKAmXMgYSBiaXQgdGVycmlmeWluZywgaHVnZWx5XG4gICAgICAgICAgICAgIGV4aGlsYXJhdGluZyBhbmQgY29tcGxldGVseSBhd2Vzb21lIVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0QnV0dG9uJz5cbiAgICAgICAgICAgIDxhIGhyZWY9Jy9zaG93cyc+VXBjb21pbmcgU2hvd3M8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleFR3b1NpZGUnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcG90aWZ5Jz5cbiAgICAgICAgICAgIDxTcG90aWZ5UGxheWVyXG4gICAgICAgICAgICAgIHVyaT0nc3BvdGlmeTpwbGF5bGlzdDo0UW1YNDRkeXpaYTZrT2JZbTVqWHpTJ1xuICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICB2aWV3PXt2aWV3fVxuICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3RTdmcnPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgaGVpZ2h0PScxMDBweCdcbiAgICAgICAgICB3aWR0aD0nMTAwcHgnXG4gICAgICAgICAgZmlsbD0nI2YxZjFmMSdcbiAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgdmVyc2lvbj0nMS4xJ1xuICAgICAgICAgIHg9JzBweCdcbiAgICAgICAgICB5PScwcHgnXG4gICAgICAgICAgdmlld0JveD0nMCAwIDY0IDY0J1xuICAgICAgICA+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8cGF0aCBkPSdNMjYsMjFjLTEuNjU0LDAtMywxLjM0Ni0zLDNoMmMwLTAuNTUxLDAuNDQ4LTEsMS0xczEsMC40NDksMSwxaDJDMjksMjIuMzQ2LDI3LjY1NCwyMSwyNiwyMXonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J00zOCwyMWMtMS42NTQsMC0zLDEuMzQ2LTMsM2gyYzAtMC41NTEsMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDFoMkM0MSwyMi4zNDYsMzkuNjU0LDIxLDM4LDIxeic+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD0nTTUxLjQwNSw0Mi4yMjNjLTAuNzU0LTAuNDMxLTEuNTY3LTAuNzY0LTIuNDA1LTEuMDA4VjE4YzAtOS4zNzQtNy42MjYtMTctMTctMTdTMTUsOC42MjYsMTUsMTh2MjMuMjg3ICAgYy0wLjA0LDAuMDEzLTAuMDgxLDAuMDItMC4xMiwwLjAzM0MxMS4zNjMsNDIuNDkxLDksNDUuNzcsOSw0OS40Nzd2MC4yOWMwLDAuOTI1LDAuMTQ4LDEuODM5LDAuNDQxLDIuNzE5TDEwLDU0LjE2MlY2M2gxOGg3aDEyICAgdi03LjkzM2MwLjM5LDAuMzA0LDAuODMsMC41NDksMS4zMDYsMC43MzRMNTIuNDIsNjNoMTAuMTk4bC01LjYyNi0xMS4yNTJDNTYuOTUxLDQ3LjgxOCw1NC44MjMsNDQuMTc1LDUxLjQwNSw0Mi4yMjN6ICAgIE01Ni4yMiw1NC42NzVsLTUuMDIzLDIuMTUzbC0wLjc3Mi0xLjM1MWw1LjEwMy0yLjE4N0w1Ni4yMiw1NC42NzV6IE00Ni45MDEsNDAuODA1TDM5LDQwLjA4N1YzOWgtMC4xMDQgICBjMy4xNDQtMS45NzgsNS4zNzgtNS4yNiw1Ljk0Ny05LjA4NWMwLjgwMy0wLjEzOCwxLjUzMy0wLjQ2OCwyLjE1Ny0wLjk0djExLjg0NUM0Ni45NjcsNDAuODE2LDQ2LjkzNCw0MC44MDgsNDYuOTAxLDQwLjgwNXogICAgTTM0Ljk1Miw0My4yNzZjLTAuMTA4LTAuODk1LTAuNDE1LTEuNzI4LTAuODc0LTIuNDU4YzEuMDE3LTAuMTY0LDEuOTk4LTAuNDM0LDIuOTIyLTAuODIxdjAuODU5ICAgQzM2Ljg4NSw0MS4yMDYsMzYuMzY2LDQyLjQ2MSwzNC45NTIsNDMuMjc2eiBNMjksNTZoLTF2LTYuMDljMC4zMjYsMC4wNTUsMC42NTksMC4wOSwxLDAuMDlzMC42NzQtMC4wMzUsMS0wLjA5djYuMTgxICAgQzI5LjY3NCw1Ni4wMzUsMjkuMzQxLDU2LDI5LDU2eiBNMjksNDhjLTIuMjA2LDAtNC0xLjc5NC00LTRjMC0xLjcyOSwxLjEwOC0zLjE5MSwyLjY0Ny0zLjc0OCAgIGMwLjAwOCwwLjAwMywwLjAxNiwwLjAwNywwLjAyNCwwLjAwOWwwLjAwNy0wLjAxOUMyOC4wOTQsNDAuMDk1LDI4LjUzNCw0MCwyOSw0MGMyLjIwNiwwLDQsMS43OTQsNCw0UzMxLjIwNiw0OCwyOSw0OHogTTE5LDI3LjgxNiAgIGMtMS4xNjEtMC40MTQtMi0xLjUxNC0yLTIuODE2czAuODM5LTIuNDAyLDItMi44MTZWMjcuODE2eiBNMTkuMTQ2LDI5LjkxNGMwLjU4LDMuODg2LDIuOSw3LjMwMiw2LjI2OSw5LjI4NyAgIGMtMC4zNzMsMC4yOC0wLjcxNiwwLjU5Ny0xLjAxNSwwLjk1NUwxNyw0MC44OTV2LTExLjkyQzE3LjYyMSwyOS40NDUsMTguMzQ3LDI5Ljc3NSwxOS4xNDYsMjkuOTE0eiBNMzIuMjg2LDM4Ljk4NiAgIEMzMS4zNDEsMzguMzY0LDMwLjIxMywzOCwyOSwzOGMtMC40MzQsMC0wLjg1NiwwLjA0OS0xLjI2MywwLjEzNkMyMy42ODMsMzYuNDMxLDIxLDMyLjQzOSwyMSwyOFYxOGgxLjM0MyAgIGMzLjU5LDAsNi45ODMtMS4yODIsOS42NTctMy42M2MyLjY3NCwyLjM0OCw2LjA2NywzLjYzLDkuNjU3LDMuNjNINDN2MTBDNDMsMzMuOTY5LDM4LjIxOCwzOC44MzIsMzIuMjg2LDM4Ljk4NnogTTQ1LDIyLjE4NCAgIGMxLjE2MSwwLjQxNCwyLDEuNTE0LDIsMi44MTZzLTAuODM5LDIuNDAyLTIsMi44MTZWMjIuMTg0eiBNMzIsM2M4LjI3MSwwLDE1LDYuNzI5LDE1LDE1djMuMDI2Yy0wLjU4NC0wLjQ0Mi0xLjI1Ny0wLjc3My0yLTAuOTI0ICAgVjE2aC0zLjM0M2MtMy4zODEsMC02LjU2LTEuMzE2LTguOTUtMy43MDdMMzIsMTEuNTg2bC0wLjcwNywwLjcwN0MyOC45MDIsMTQuNjg0LDI1LjcyNCwxNiwyMi4zNDMsMTZIMTl2NC4xMDEgICBjLTAuNzQzLDAuMTUyLTEuNDE2LDAuNDgyLTIsMC45MjRWMThDMTcsOS43MjksMjMuNzI5LDMsMzIsM3ogTTExLDQ5LjQ3N2MwLTIuODQ1LDEuODEzLTUuMzYxLDQuNTEzLTYuMjYgICBjMC40NjMtMC4xNTQsMC45NDMtMC4yNTcsMS40My0wLjMwNmw2LjMxMi0wLjYzMUMyMy4wOTEsNDIuODI1LDIzLDQzLjQwMiwyMyw0NGMwLDIuMjE1LDEuMjEsNC4xNDksMyw1LjE4OFY1NmgtNnYtN2gtMnY0aC0ydjJoMiAgIHYxaC02di0xaDJ2LTJoLTIuMjc5bC0wLjM4Mi0xLjE0NkMxMS4xMTQsNTEuMTc5LDExLDUwLjQ3NywxMSw0OS43NjdWNDkuNDc3eiBNMjgsNjFIMTJ2LTNoNmgxaDEwYzEuODYsMCwzLjQyOSwxLjI3NywzLjg3MywzSDI4eiAgICBNNDcsNTAuOTg3YzAtMC40OTEsMC4xMTYtMC45ODMsMC4zMzYtMS40MjJsMC41NTktMS4xMTdsLTEuNzg5LTAuODk1bC0wLjU1OSwxLjExOEM0NS4xODksNDkuMzg2LDQ1LDUwLjE4OCw0NSw1MC45ODcgICBjMCwwLjAwNCwwLjAwMSwwLjAwOSwwLjAwMSwwLjAxM0g0NXYxMEgzNC45MWMtMC4zMDItMS43ODktMS4zOTUtMy4zMDktMi45MS00LjE4OHYtNy42MjRjMS4zNTktMC43ODksMi4zNzgtMi4wOTQsMi43OTItMy42NDggICBjMi4yOTgtMC44MDMsMy40MDQtMi40NjYsMy44NzItMy40NzZsOC4wNTYsMC43MzJjMS4yOTEsMC4xMTcsMi41NjgsMC41MiwzLjY5MywxLjE2MmMyLjY3OSwxLjUzMSw0LjM5Nyw0LjMyOSw0LjU3Miw3LjM4OCAgIGwtNi4wMTksMi41OEM0Ny43ODEsNTMuNDM4LDQ3LDUyLjI4NCw0Nyw1MC45ODd6IE01My41OCw2MWwtMS4zODUtMi40MjRsNC45Mi0yLjEwOUw1OS4zODIsNjFINTMuNTh6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNMzIsMjhjLTIuMjA2LDAtNCwxLjc5NC00LDRzMS43OTQsNCw0LDRzNC0xLjc5NCw0LTRTMzQuMjA2LDI4LDMyLDI4eiBNMzIsMzRjLTEuMTAzLDAtMi0wLjg5Ny0yLTJzMC44OTctMiwyLTIgICBzMiwwLjg5NywyLDJTMzMuMTAzLDM0LDMyLDM0eic+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD0nTTEzLDFINXYxMS4xODRDNC42ODYsMTIuMDcyLDQuMzUyLDEyLDQsMTJjLTEuNjU0LDAtMywxLjM0Ni0zLDNzMS4zNDYsMywzLDNzMy0xLjM0NiwzLTNWM2g2VjF6IE00LDE2ICAgYy0wLjU1MiwwLTEtMC40NDktMS0xczAuNDQ4LTEsMS0xczEsMC40NDksMSwxUzQuNTUyLDE2LDQsMTZ6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNNTMsMXY4aC0wLjVjLTEuMzc5LDAtMi41LDEuMTIyLTIuNSwyLjVzMS4xMjEsMi41LDIuNSwyLjVzMi41LTEuMTIyLDIuNS0yLjVWN2g2djJoLTAuNWMtMS4zNzksMC0yLjUsMS4xMjItMi41LDIuNSAgIHMxLjEyMSwyLjUsMi41LDIuNXMyLjUtMS4xMjIsMi41LTIuNVYxSDUzeiBNNTMsMTEuNWMwLDAuMjc2LTAuMjI1LDAuNS0wLjUsMC41UzUyLDExLjc3Niw1MiwxMS41czAuMjI1LTAuNSwwLjUtMC41SDUzVjExLjV6ICAgIE02MSwxMS41YzAsMC4yNzYtMC4yMjUsMC41LTAuNSwwLjVTNjAsMTEuNzc2LDYwLDExLjVzMC4yMjUtMC41LDAuNS0wLjVINjFWMTEuNXogTTU1LDVWM2g2djJINTV6Jz48L3BhdGg+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbnRhY3RDb21wIC8+XG4gICAgPC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db25jZXJ0K09uZXxNb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgICAgfVxuXG5cbiAgICAgIC5jb250YWN0QnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhY3RCdXR0b24gYSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgfVxuXG4gICAgLmNvbnRhY3RCdXR0b24gYTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICM3NjFmNmIsIDAgMCAwLjVlbSAjNzYxZjZiLFxuICAgICAgICAgIDAgMCAwLjFlbSAjNzYxZjZiLCAwIDEwcHggM3B4ICMwMDA7XG4gICAgfVxuXG4gICAgICAgLmxpc3RCdXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgICB9XG5cbiAgICAubGlzdEJ1dHRvbiBhIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNlNTM0NDE7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgY29sb3I6ICNlNTM0NDE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICB9XG5cbiAgICAubGlzdEJ1dHRvbiBhOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0ZXh0LXNoYWRvdzogMCA0MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICNlNTM0NDEsIDAgMCAwLjVlbSAjZTUzNDQxLFxuICAgICAgICAgIDAgMCAwLjFlbSAjZTUzNDQxLCAwIDEwcHggM3B4ICNmMWYxZjE7XG4gICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICNlNTM0NDE7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgIH1cblxuICAgICAgLnNwb3RpZnkge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMiUgMDtcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgfVxuXG4gICAgICAuc3BvdGlmeUFib3V0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4T25lU2lkZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgfVxuXG4gICAgICAuZmxleFR3b1NpZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTUzNDQxO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCB7XG4gICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMjUsMywyMik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICB9XG5cbiAgICAgIC5pbnRyb1RleHQgYSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjUsMywyMikgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNlNTM0NDEgIWltcG9ydGFudDtcbiAgICAgIH1cblxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHJnYigyNSwzLDIyKVxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgICB9XG5cbiAgICAgIC5pbnRyb1RleHQgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDc1cHgpIHtcbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBjdXJzaXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCBwIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nZWxrTG9nbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzMlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5MHB4KSB7XG4gICAgICAgIC5nZWxrTG9nbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGV2cm9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnRyb1RleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCBwIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTdweCkge1xuICAgICAgICBzdmcge1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgICAgIC5nZWxrTG9nbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzN2aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2674058118" + " " + 'spotifyAbout',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'flexOneSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'introText',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "ABOUT GELK"), __jsx("p", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Good Enough Live Karaoke is Toronto's most popular live band karaoke experience, letting anyone with the desire and guts to join us on stage, take the mic and sing! Ideal for corporate events, birthday parties and weddings, Good Enough is a live band featuring guitars, bass, keyboards and drums, and a repertoire of over 400 songs spanning genres and eras. Get in touch at", ' ', __jsx("a", {
    href: "mailto:sing@goodenoughlivekaraoke.com?Subject=Hello%20",
    target: "_top",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "sing@goodenoughlivekaraoke.com"), ' ', "to book your event, and follow us on Instagram to see weekly public shows across Ontario. Since 2013, we have played thousands of hours on stage at private and public events with our unique, interactive rock'n'roll experience. It\u2019s a bit terrifying, hugely exhilarating and completely awesome!")), __jsx("div", {
    className: "jsx-2674058118" + " " + 'listButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("a", {
    href: "/shows",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Upcoming Shows"))), __jsx("div", {
    className: "jsx-2674058118" + " " + 'flexTwoSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'spotify',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx(react_spotify_player__WEBPACK_IMPORTED_MODULE_11___default.a, {
    uri: "spotify:playlist:4QmX44dyzZa6kObYm5jXzS",
    size: size,
    view: view,
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-2674058118" + " " + 'contactSvg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
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
      lineNumber: 231
    },
    __self: this
  }, __jsx("g", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("path", {
    d: "M26,21c-1.654,0-3,1.346-3,3h2c0-0.551,0.448-1,1-1s1,0.449,1,1h2C29,22.346,27.654,21,26,21z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }), __jsx("path", {
    d: "M38,21c-1.654,0-3,1.346-3,3h2c0-0.551,0.448-1,1-1s1,0.449,1,1h2C41,22.346,39.654,21,38,21z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }), __jsx("path", {
    d: "M51.405,42.223c-0.754-0.431-1.567-0.764-2.405-1.008V18c0-9.374-7.626-17-17-17S15,8.626,15,18v23.287   c-0.04,0.013-0.081,0.02-0.12,0.033C11.363,42.491,9,45.77,9,49.477v0.29c0,0.925,0.148,1.839,0.441,2.719L10,54.162V63h18h7h12   v-7.933c0.39,0.304,0.83,0.549,1.306,0.734L52.42,63h10.198l-5.626-11.252C56.951,47.818,54.823,44.175,51.405,42.223z    M56.22,54.675l-5.023,2.153l-0.772-1.351l5.103-2.187L56.22,54.675z M46.901,40.805L39,40.087V39h-0.104   c3.144-1.978,5.378-5.26,5.947-9.085c0.803-0.138,1.533-0.468,2.157-0.94v11.845C46.967,40.816,46.934,40.808,46.901,40.805z    M34.952,43.276c-0.108-0.895-0.415-1.728-0.874-2.458c1.017-0.164,1.998-0.434,2.922-0.821v0.859   C36.885,41.206,36.366,42.461,34.952,43.276z M29,56h-1v-6.09c0.326,0.055,0.659,0.09,1,0.09s0.674-0.035,1-0.09v6.181   C29.674,56.035,29.341,56,29,56z M29,48c-2.206,0-4-1.794-4-4c0-1.729,1.108-3.191,2.647-3.748   c0.008,0.003,0.016,0.007,0.024,0.009l0.007-0.019C28.094,40.095,28.534,40,29,40c2.206,0,4,1.794,4,4S31.206,48,29,48z M19,27.816   c-1.161-0.414-2-1.514-2-2.816s0.839-2.402,2-2.816V27.816z M19.146,29.914c0.58,3.886,2.9,7.302,6.269,9.287   c-0.373,0.28-0.716,0.597-1.015,0.955L17,40.895v-11.92C17.621,29.445,18.347,29.775,19.146,29.914z M32.286,38.986   C31.341,38.364,30.213,38,29,38c-0.434,0-0.856,0.049-1.263,0.136C23.683,36.431,21,32.439,21,28V18h1.343   c3.59,0,6.983-1.282,9.657-3.63c2.674,2.348,6.067,3.63,9.657,3.63H43v10C43,33.969,38.218,38.832,32.286,38.986z M45,22.184   c1.161,0.414,2,1.514,2,2.816s-0.839,2.402-2,2.816V22.184z M32,3c8.271,0,15,6.729,15,15v3.026c-0.584-0.442-1.257-0.773-2-0.924   V16h-3.343c-3.381,0-6.56-1.316-8.95-3.707L32,11.586l-0.707,0.707C28.902,14.684,25.724,16,22.343,16H19v4.101   c-0.743,0.152-1.416,0.482-2,0.924V18C17,9.729,23.729,3,32,3z M11,49.477c0-2.845,1.813-5.361,4.513-6.26   c0.463-0.154,0.943-0.257,1.43-0.306l6.312-0.631C23.091,42.825,23,43.402,23,44c0,2.215,1.21,4.149,3,5.188V56h-6v-7h-2v4h-2v2h2   v1h-6v-1h2v-2h-2.279l-0.382-1.146C11.114,51.179,11,50.477,11,49.767V49.477z M28,61H12v-3h6h1h10c1.86,0,3.429,1.277,3.873,3H28z    M47,50.987c0-0.491,0.116-0.983,0.336-1.422l0.559-1.117l-1.789-0.895l-0.559,1.118C45.189,49.386,45,50.188,45,50.987   c0,0.004,0.001,0.009,0.001,0.013H45v10H34.91c-0.302-1.789-1.395-3.309-2.91-4.188v-7.624c1.359-0.789,2.378-2.094,2.792-3.648   c2.298-0.803,3.404-2.466,3.872-3.476l8.056,0.732c1.291,0.117,2.568,0.52,3.693,1.162c2.679,1.531,4.397,4.329,4.572,7.388   l-6.019,2.58C47.781,53.438,47,52.284,47,50.987z M53.58,61l-1.385-2.424l4.92-2.109L59.382,61H53.58z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }), __jsx("path", {
    d: "M32,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S34.206,28,32,28z M32,34c-1.103,0-2-0.897-2-2s0.897-2,2-2   s2,0.897,2,2S33.103,34,32,34z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), __jsx("path", {
    d: "M13,1H5v11.184C4.686,12.072,4.352,12,4,12c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3V3h6V1z M4,16   c-0.552,0-1-0.449-1-1s0.448-1,1-1s1,0.449,1,1S4.552,16,4,16z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }), __jsx("path", {
    d: "M53,1v8h-0.5c-1.379,0-2.5,1.122-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5V7h6v2h-0.5c-1.379,0-2.5,1.122-2.5,2.5   s1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5V1H53z M53,11.5c0,0.276-0.225,0.5-0.5,0.5S52,11.776,52,11.5s0.225-0.5,0.5-0.5H53V11.5z    M61,11.5c0,0.276-0.225,0.5-0.5,0.5S60,11.776,60,11.5s0.225-0.5,0.5-0.5H61V11.5z M55,5V3h6v2H55z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  })))), __jsx(_components_ContactComp__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4073361451",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Concert+One|Montserrat&display=swap');svg.jsx-2674058118{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-top:70px;}.contactButton.jsx-2674058118{width:100%;text-align:center;margin-bottom:0;margin-top:50px;}.contactButton.jsx-2674058118 a.jsx-2674058118{background:none;padding:10px 20px;border-radius:50px;border:3px solid #f1f1f1;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;font-size:20px;font-family:'Montserrat',sans-serif;cursor:pointer;}.contactButton.jsx-2674058118 a.jsx-2674058118:hover{opacity:1;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.listButton.jsx-2674058118{width:100%;text-align:center;margin-bottom:4%;}.listButton.jsx-2674058118 a.jsx-2674058118{background:none;font-family:'Montserrat',sans-serif;padding:10px 20px;border-radius:50px;border:3px solid #e53441;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#e53441;-webkit-text-decoration:none;text-decoration:none;font-size:20px;cursor:pointer;}.listButton.jsx-2674058118 a.jsx-2674058118:hover{opacity:1;text-shadow:0 40px 100px,0 0 2px,0 0 1em #e53441,0 0 0.5em #e53441, 0 0 0.1em #e53441,0 10px 3px #f1f1f1;}h3.jsx-2674058118{text-align:center;font-family:'Concert One',sans-serif;color:#e53441;font-size:40px;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;}.spotify.jsx-2674058118{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2% 0;padding:20px 0;}.spotifyAbout.jsx-2674058118{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.flexOneSide.jsx-2674058118{width:60%;padding:2%;background:#f1f1f1;}.flexTwoSide.jsx-2674058118{background:#e53441;width:40%;padding:2%;}.introText.jsx-2674058118{max-width:1400px;font-family:'Montserrat',sans-serif;font-size:28px;color:rgb(25,3,22);font-weight:bold;padding:0 25px;}.introText.jsx-2674058118 a.jsx-2674058118{color:rgb(25,3,22) !important;}.introText.jsx-2674058118 a.jsx-2674058118:hover{color:#e53441 !important;}a.jsx-2674058118{color:rgb(25,3,22) text-decoration:underline;cursor:pointer;-webkit-transition:all 0.4s;transition:all 0.4s;}a.jsx-2674058118:hover{opacity:0.65;}.introText.jsx-2674058118 p.jsx-2674058118{line-height:38px;margin-bottom:50px;font-size:20px;text-align:left;}h2.jsx-2674058118{text-align:center;font-size:70px;margin-top:-100px;font-family:'Concert One',cursive;color:#f1f1f1;}@media screen and (max-width:1075px){.introText.jsx-2674058118 h2.jsx-2674058118{font-size:30px;font-family:'Concert One',cursive;}.introText.jsx-2674058118{font-size:20px;}.introText.jsx-2674058118 p.jsx-2674058118{line-height:36px;}.gelkLogo.jsx-2674058118{margin-top:33%;}}@media screen and (max-width:690px){.gelkLogo.jsx-2674058118{margin-top:25vh;}.chevron.jsx-2674058118{margin-top:50px;}.introText.jsx-2674058118 h2.jsx-2674058118{font-size:30px;margin-top:-70px;margin-bottom:30px;}.introText.jsx-2674058118{font-size:16px;}.introText.jsx-2674058118 p.jsx-2674058118{line-height:32px;}}@media screen and (max-width:557px){svg.jsx-2674058118{width:30px;}.introText.jsx-2674058118 h2.jsx-2674058118{font-size:22px;}.gelkLogo.jsx-2674058118{width:90%;}.gelkLogo.jsx-2674058118{margin-top:33vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNFBnQixBQUVpRyxBQUd2RSxBQVFSLEFBT0ssQUFjTixBQU1DLEFBTUssQUFjTixBQU1TLEFBUUgsQUFRRCxBQUtILEFBTVMsQUFNRixBQVNhLEFBSUwsQUFNQyxBQU1iLEFBSUksQUFPQyxBQVNELEFBS0EsQUFJRSxBQUlGLEFBTUMsQUFJQSxBQUdELEFBTUEsQUFJRSxBQU1OLEFBSUksQUFJTCxBQUdNLFVBaktrQixBQTBCRyxBQTBCNUIsQUEyR1gsQ0FyTGdCLEFBMkJBLEFBa0poQixFQTlERixDQWxEZSxDQXNFd0IsQUFLckMsQUFRQSxBQWFtQixBQU1uQixBQWNBLENBMUtnQixBQTBCbUIsQUFxSG5DLEFBSUEsQUE4QkEsQ0FsR3FDLEFBNkJsQixBQXlCbkIsQUEyQkEsQ0FsSHNDLEFBcUV2QixDQTFDTCxFQUxTLElBd0JyQixJQWxHZ0IsQUEyQkMsQUFxREosQ0FjYixFQStEdUIsQ0FuQ0gsQ0FuSEQsRUE0R0YsSUF4Q2pCLEFBTUEsS0FoRmdCLEFBdUdDLENBNUVuQixHQXVHSSxFQWZnQixBQU9tQixBQW1DbkMsQ0E3SGdCLENBekJPLEFBOEVSLEVBakNELEtBb0RNLENBdkd4QixNQW1IRSxDQTlCcUIsQ0FqQ0osQ0FwQkUsSUEzQ1UsQUE2RWhCLElBM0RJLE1BOENJLENBY3JCLEFBdURnQixFQXBDRyxDQTNCTSxDQTFCQSxPQXpCTCxHQW1IcEIsS0FwQ2lCLElBaUJqQixLQXBGRixDQWNtQixDQVluQixJQTBDRSxhQXJEb0IsWUExQk4sY0FDTyxlQXBCSixJQWdFakIsR0FsQmMsSUE3Q1EsR0FxRVIsT0F2Qk8sS0F3QkosQ0FyRWIsUUFtQlcsTUFtRGYsU0FsRHFDLHFCQTBCdEIsZUF4QmxCLEFBMEJBLGVBMUJDLEFBMEJBIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IE5lb25Mb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTmVvbkxvZ28nO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNlbCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgU3BvdGlmeVBsYXllciBmcm9tICdyZWFjdC1zcG90aWZ5LXBsYXllcic7XG5pbXBvcnQgQ2xpZW50Q29tcCBmcm9tICcuLi9jb21wb25lbnRzL2NsaWVudENvbXAnO1xuaW1wb3J0IE1lZGlhQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL21lZGlhQ29tcCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3RDb21wIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdENvbXAnO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmltcG9ydCB7XG4gIExpbmssXG4gIEVsZW1lbnQsXG4gIEV2ZW50cyxcbiAgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwsXG4gIHNjcm9sbFNweSxcbiAgc2Nyb2xsZXIsXG59IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbmNvbnN0IHNpemUgPSB7XG4gIHdpZHRoOiAnOTAlJyxcbiAgaGVpZ2h0OiA2MDAsXG4gIG1heEhlaWdodDogJzYwMHB4Jyxcbn07XG5jb25zdCB2aWV3ID0gJ2xpc3QnOyAvLyBvciAnY292ZXJhcnQnXG5jb25zdCB0aGVtZSA9ICdibGFjayc7IC8vIG9yICd3aGl0ZSdcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9J3RleHQnIGNsYXNzTmFtZT0nc2Nyb2xsQm94Jz48L2Rpdj5cbiAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgc3R5bGU9e3VzZVNwcmluZyh7XG4gICAgICAgICAgY29uZmlnOiB7IGR1cmF0aW9uOiA5NTAgfSxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgICAgICBmcm9tOiB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwIH0sXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2Vsa0xvZ28nPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZ2Vsa0ltYWdlTG9nbydcbiAgICAgICAgICAgIHNyYz0nL3Rlc3ROZW9uLmdpZidcbiAgICAgICAgICAgIGFsdD0nZ29vZCBlbm91Z2ggbGl2ZSBrYXJhb2tlIG5lb24gbG9nbydcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvbmdCdXR0b24nPlxuICAgICAgICAgIDxhIGhyZWY9Jy9saXN0Jz5WaWV3IFNvbmcgTGlzdDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nZ2Vsa0xvZ28nPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPSdnZWxrSW1hZ2VMb2dvJ1xuICAgICAgICAgIHNyYz0nL3Rlc3ROZW9uLmdpZidcbiAgICAgICAgICBhbHQ9J2dvb2QgZW5vdWdoIGxpdmUga2FyYW9rZSBuZW9uIGxvZ28nXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3NvbmdCdXR0b24nPlxuICAgICAgICA8YSBocmVmPScvbGlzdCc+VmlldyBTb25nIExpc3Q8L2E+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICAgey8qIDxkaXYgY2xhc3NOYW1lPSdjaGV2cm9uJz5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT0nc2Nyb2xsQ2hldnJvbidcbiAgICAgICAgdG89J3RleHQnXG4gICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgaGVpZ2h0PSc0MHB4J1xuICAgICAgICAgIHdpZHRoPSc0MHB4J1xuICAgICAgICAgIGZpbGw9JyNGMUYxRjEnXG4gICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICB4PScwcHgnXG4gICAgICAgICAgeT0nMHB4J1xuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgIGQ9J00xMiwyMyBDNS45MjQ4Njc3NSwyMyAxLDE4LjA3NTEzMjIgMSwxMiBDMSw1LjkyNDg2Nzc1IDUuOTI0ODY3NzUsMSAxMiwxIEMxOC4wNzUxMzIyLDEgMjMsNS45MjQ4Njc3NSAyMywxMiBDMjMsMTguMDc1MTMyMiAxOC4wNzUxMzIyLDIzIDEyLDIzIFogTTEyLDIxIEMxNi45NzA1NjI3LDIxIDIxLDE2Ljk3MDU2MjcgMjEsMTIgQzIxLDcuMDI5NDM3MjUgMTYuOTcwNTYyNywzIDEyLDMgQzcuMDI5NDM3MjUsMyAzLDcuMDI5NDM3MjUgMywxMiBDMywxNi45NzA1NjI3IDcuMDI5NDM3MjUsMjEgMTIsMjEgWiBNMTUuMjkyODkzMiw5LjI5Mjg5MzIyIEwxNi43MDcxMDY4LDEwLjcwNzEwNjggTDEyLDE1LjQxNDIxMzYgTDcuMjkyODkzMjIsMTAuNzA3MTA2OCBMOC43MDcxMDY3OCw5LjI5Mjg5MzIyIEwxMiwxMi41ODU3ODY0IEwxNS4yOTI4OTMyLDkuMjkyODkzMjIgWidcbiAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj4gKi99XG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgLnNvbmdCdXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjUlO1xuICAgIH1cblxuICAgIC5zb25nQnV0dG9uIGEge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgfVxuXG4gICAgLnNvbmdCdXR0b24gYTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICM3NjFmNmIsIDAgMCAwLjVlbSAjNzYxZjZiLFxuICAgICAgICAgIDAgMCAwLjFlbSAjNzYxZjZiLCAwIDEwcHggM3B4ICMwMDA7XG4gICAgfVxuXG4gICAgLmdlbGtJbWFnZUxvZ28ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xuICAgIH1cblxuICAgIC5nZWxrTG9nbyB7XG4gICAgICB3aWR0aDogNjIlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiAzLjUlO1xuICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjUlO1xuICAgIH1cbiAgICAgIHN2Zzpob3ZlciB7XG4gICAgICAgIGZpbGw6IHJnYmEoMjQxLDI0MSwyNDEsIDAuNik7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgc3ZnIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB9XG4gICAgICBoMSxcbiAgICAgIGEge1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cblxuICAgICAgLmNoZXZyb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDk0JTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDkydmg7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSlcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyJTtcbiAgICAgIH1cblxuICAgICAgLnNjcm9sbEJveHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvdHRvbTogMjAwcHg7XG4gICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDw+XG4gICAgICB7LyogPENhcm91c2VsIC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Nwb3RpZnlBYm91dCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4T25lU2lkZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludHJvVGV4dCc+XG4gICAgICAgICAgICA8aDM+QUJPVVQgR0VMSzwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgR29vZCBFbm91Z2ggTGl2ZSBLYXJhb2tlIGlzIFRvcm9udG8ncyBtb3N0IHBvcHVsYXIgbGl2ZSBiYW5kXG4gICAgICAgICAgICAgIGthcmFva2UgZXhwZXJpZW5jZSwgbGV0dGluZyBhbnlvbmUgd2l0aCB0aGUgZGVzaXJlIGFuZCBndXRzIHRvXG4gICAgICAgICAgICAgIGpvaW4gdXMgb24gc3RhZ2UsIHRha2UgdGhlIG1pYyBhbmQgc2luZyEgSWRlYWwgZm9yIGNvcnBvcmF0ZVxuICAgICAgICAgICAgICBldmVudHMsIGJpcnRoZGF5IHBhcnRpZXMgYW5kIHdlZGRpbmdzLCBHb29kIEVub3VnaCBpcyBhIGxpdmUgYmFuZFxuICAgICAgICAgICAgICBmZWF0dXJpbmcgZ3VpdGFycywgYmFzcywga2V5Ym9hcmRzIGFuZCBkcnVtcywgYW5kIGEgcmVwZXJ0b2lyZSBvZlxuICAgICAgICAgICAgICBvdmVyIDQwMCBzb25ncyBzcGFubmluZyBnZW5yZXMgYW5kIGVyYXMuIEdldCBpbiB0b3VjaCBhdHsnICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj0nbWFpbHRvOnNpbmdAZ29vZGVub3VnaGxpdmVrYXJhb2tlLmNvbT9TdWJqZWN0PUhlbGxvJTIwJ1xuICAgICAgICAgICAgICAgIHRhcmdldD0nX3RvcCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHNpbmdAZ29vZGVub3VnaGxpdmVrYXJhb2tlLmNvbVxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgdG8gYm9vayB5b3VyIGV2ZW50LCBhbmQgZm9sbG93IHVzIG9uIEluc3RhZ3JhbSB0byBzZWUgd2Vla2x5XG4gICAgICAgICAgICAgIHB1YmxpYyBzaG93cyBhY3Jvc3MgT250YXJpby4gU2luY2UgMjAxMywgd2UgaGF2ZSBwbGF5ZWQgdGhvdXNhbmRzXG4gICAgICAgICAgICAgIG9mIGhvdXJzIG9uIHN0YWdlIGF0IHByaXZhdGUgYW5kIHB1YmxpYyBldmVudHMgd2l0aCBvdXIgdW5pcXVlLFxuICAgICAgICAgICAgICBpbnRlcmFjdGl2ZSByb2NrJ24ncm9sbCBleHBlcmllbmNlLiBJdOKAmXMgYSBiaXQgdGVycmlmeWluZywgaHVnZWx5XG4gICAgICAgICAgICAgIGV4aGlsYXJhdGluZyBhbmQgY29tcGxldGVseSBhd2Vzb21lIVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0QnV0dG9uJz5cbiAgICAgICAgICAgIDxhIGhyZWY9Jy9zaG93cyc+VXBjb21pbmcgU2hvd3M8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleFR3b1NpZGUnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcG90aWZ5Jz5cbiAgICAgICAgICAgIDxTcG90aWZ5UGxheWVyXG4gICAgICAgICAgICAgIHVyaT0nc3BvdGlmeTpwbGF5bGlzdDo0UW1YNDRkeXpaYTZrT2JZbTVqWHpTJ1xuICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICB2aWV3PXt2aWV3fVxuICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3RTdmcnPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgaGVpZ2h0PScxMDBweCdcbiAgICAgICAgICB3aWR0aD0nMTAwcHgnXG4gICAgICAgICAgZmlsbD0nI2YxZjFmMSdcbiAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgdmVyc2lvbj0nMS4xJ1xuICAgICAgICAgIHg9JzBweCdcbiAgICAgICAgICB5PScwcHgnXG4gICAgICAgICAgdmlld0JveD0nMCAwIDY0IDY0J1xuICAgICAgICA+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8cGF0aCBkPSdNMjYsMjFjLTEuNjU0LDAtMywxLjM0Ni0zLDNoMmMwLTAuNTUxLDAuNDQ4LTEsMS0xczEsMC40NDksMSwxaDJDMjksMjIuMzQ2LDI3LjY1NCwyMSwyNiwyMXonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J00zOCwyMWMtMS42NTQsMC0zLDEuMzQ2LTMsM2gyYzAtMC41NTEsMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDFoMkM0MSwyMi4zNDYsMzkuNjU0LDIxLDM4LDIxeic+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD0nTTUxLjQwNSw0Mi4yMjNjLTAuNzU0LTAuNDMxLTEuNTY3LTAuNzY0LTIuNDA1LTEuMDA4VjE4YzAtOS4zNzQtNy42MjYtMTctMTctMTdTMTUsOC42MjYsMTUsMTh2MjMuMjg3ICAgYy0wLjA0LDAuMDEzLTAuMDgxLDAuMDItMC4xMiwwLjAzM0MxMS4zNjMsNDIuNDkxLDksNDUuNzcsOSw0OS40Nzd2MC4yOWMwLDAuOTI1LDAuMTQ4LDEuODM5LDAuNDQxLDIuNzE5TDEwLDU0LjE2MlY2M2gxOGg3aDEyICAgdi03LjkzM2MwLjM5LDAuMzA0LDAuODMsMC41NDksMS4zMDYsMC43MzRMNTIuNDIsNjNoMTAuMTk4bC01LjYyNi0xMS4yNTJDNTYuOTUxLDQ3LjgxOCw1NC44MjMsNDQuMTc1LDUxLjQwNSw0Mi4yMjN6ICAgIE01Ni4yMiw1NC42NzVsLTUuMDIzLDIuMTUzbC0wLjc3Mi0xLjM1MWw1LjEwMy0yLjE4N0w1Ni4yMiw1NC42NzV6IE00Ni45MDEsNDAuODA1TDM5LDQwLjA4N1YzOWgtMC4xMDQgICBjMy4xNDQtMS45NzgsNS4zNzgtNS4yNiw1Ljk0Ny05LjA4NWMwLjgwMy0wLjEzOCwxLjUzMy0wLjQ2OCwyLjE1Ny0wLjk0djExLjg0NUM0Ni45NjcsNDAuODE2LDQ2LjkzNCw0MC44MDgsNDYuOTAxLDQwLjgwNXogICAgTTM0Ljk1Miw0My4yNzZjLTAuMTA4LTAuODk1LTAuNDE1LTEuNzI4LTAuODc0LTIuNDU4YzEuMDE3LTAuMTY0LDEuOTk4LTAuNDM0LDIuOTIyLTAuODIxdjAuODU5ICAgQzM2Ljg4NSw0MS4yMDYsMzYuMzY2LDQyLjQ2MSwzNC45NTIsNDMuMjc2eiBNMjksNTZoLTF2LTYuMDljMC4zMjYsMC4wNTUsMC42NTksMC4wOSwxLDAuMDlzMC42NzQtMC4wMzUsMS0wLjA5djYuMTgxICAgQzI5LjY3NCw1Ni4wMzUsMjkuMzQxLDU2LDI5LDU2eiBNMjksNDhjLTIuMjA2LDAtNC0xLjc5NC00LTRjMC0xLjcyOSwxLjEwOC0zLjE5MSwyLjY0Ny0zLjc0OCAgIGMwLjAwOCwwLjAwMywwLjAxNiwwLjAwNywwLjAyNCwwLjAwOWwwLjAwNy0wLjAxOUMyOC4wOTQsNDAuMDk1LDI4LjUzNCw0MCwyOSw0MGMyLjIwNiwwLDQsMS43OTQsNCw0UzMxLjIwNiw0OCwyOSw0OHogTTE5LDI3LjgxNiAgIGMtMS4xNjEtMC40MTQtMi0xLjUxNC0yLTIuODE2czAuODM5LTIuNDAyLDItMi44MTZWMjcuODE2eiBNMTkuMTQ2LDI5LjkxNGMwLjU4LDMuODg2LDIuOSw3LjMwMiw2LjI2OSw5LjI4NyAgIGMtMC4zNzMsMC4yOC0wLjcxNiwwLjU5Ny0xLjAxNSwwLjk1NUwxNyw0MC44OTV2LTExLjkyQzE3LjYyMSwyOS40NDUsMTguMzQ3LDI5Ljc3NSwxOS4xNDYsMjkuOTE0eiBNMzIuMjg2LDM4Ljk4NiAgIEMzMS4zNDEsMzguMzY0LDMwLjIxMywzOCwyOSwzOGMtMC40MzQsMC0wLjg1NiwwLjA0OS0xLjI2MywwLjEzNkMyMy42ODMsMzYuNDMxLDIxLDMyLjQzOSwyMSwyOFYxOGgxLjM0MyAgIGMzLjU5LDAsNi45ODMtMS4yODIsOS42NTctMy42M2MyLjY3NCwyLjM0OCw2LjA2NywzLjYzLDkuNjU3LDMuNjNINDN2MTBDNDMsMzMuOTY5LDM4LjIxOCwzOC44MzIsMzIuMjg2LDM4Ljk4NnogTTQ1LDIyLjE4NCAgIGMxLjE2MSwwLjQxNCwyLDEuNTE0LDIsMi44MTZzLTAuODM5LDIuNDAyLTIsMi44MTZWMjIuMTg0eiBNMzIsM2M4LjI3MSwwLDE1LDYuNzI5LDE1LDE1djMuMDI2Yy0wLjU4NC0wLjQ0Mi0xLjI1Ny0wLjc3My0yLTAuOTI0ICAgVjE2aC0zLjM0M2MtMy4zODEsMC02LjU2LTEuMzE2LTguOTUtMy43MDdMMzIsMTEuNTg2bC0wLjcwNywwLjcwN0MyOC45MDIsMTQuNjg0LDI1LjcyNCwxNiwyMi4zNDMsMTZIMTl2NC4xMDEgICBjLTAuNzQzLDAuMTUyLTEuNDE2LDAuNDgyLTIsMC45MjRWMThDMTcsOS43MjksMjMuNzI5LDMsMzIsM3ogTTExLDQ5LjQ3N2MwLTIuODQ1LDEuODEzLTUuMzYxLDQuNTEzLTYuMjYgICBjMC40NjMtMC4xNTQsMC45NDMtMC4yNTcsMS40My0wLjMwNmw2LjMxMi0wLjYzMUMyMy4wOTEsNDIuODI1LDIzLDQzLjQwMiwyMyw0NGMwLDIuMjE1LDEuMjEsNC4xNDksMyw1LjE4OFY1NmgtNnYtN2gtMnY0aC0ydjJoMiAgIHYxaC02di0xaDJ2LTJoLTIuMjc5bC0wLjM4Mi0xLjE0NkMxMS4xMTQsNTEuMTc5LDExLDUwLjQ3NywxMSw0OS43NjdWNDkuNDc3eiBNMjgsNjFIMTJ2LTNoNmgxaDEwYzEuODYsMCwzLjQyOSwxLjI3NywzLjg3MywzSDI4eiAgICBNNDcsNTAuOTg3YzAtMC40OTEsMC4xMTYtMC45ODMsMC4zMzYtMS40MjJsMC41NTktMS4xMTdsLTEuNzg5LTAuODk1bC0wLjU1OSwxLjExOEM0NS4xODksNDkuMzg2LDQ1LDUwLjE4OCw0NSw1MC45ODcgICBjMCwwLjAwNCwwLjAwMSwwLjAwOSwwLjAwMSwwLjAxM0g0NXYxMEgzNC45MWMtMC4zMDItMS43ODktMS4zOTUtMy4zMDktMi45MS00LjE4OHYtNy42MjRjMS4zNTktMC43ODksMi4zNzgtMi4wOTQsMi43OTItMy42NDggICBjMi4yOTgtMC44MDMsMy40MDQtMi40NjYsMy44NzItMy40NzZsOC4wNTYsMC43MzJjMS4yOTEsMC4xMTcsMi41NjgsMC41MiwzLjY5MywxLjE2MmMyLjY3OSwxLjUzMSw0LjM5Nyw0LjMyOSw0LjU3Miw3LjM4OCAgIGwtNi4wMTksMi41OEM0Ny43ODEsNTMuNDM4LDQ3LDUyLjI4NCw0Nyw1MC45ODd6IE01My41OCw2MWwtMS4zODUtMi40MjRsNC45Mi0yLjEwOUw1OS4zODIsNjFINTMuNTh6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNMzIsMjhjLTIuMjA2LDAtNCwxLjc5NC00LDRzMS43OTQsNCw0LDRzNC0xLjc5NCw0LTRTMzQuMjA2LDI4LDMyLDI4eiBNMzIsMzRjLTEuMTAzLDAtMi0wLjg5Ny0yLTJzMC44OTctMiwyLTIgICBzMiwwLjg5NywyLDJTMzMuMTAzLDM0LDMyLDM0eic+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD0nTTEzLDFINXYxMS4xODRDNC42ODYsMTIuMDcyLDQuMzUyLDEyLDQsMTJjLTEuNjU0LDAtMywxLjM0Ni0zLDNzMS4zNDYsMywzLDNzMy0xLjM0NiwzLTNWM2g2VjF6IE00LDE2ICAgYy0wLjU1MiwwLTEtMC40NDktMS0xczAuNDQ4LTEsMS0xczEsMC40NDksMSwxUzQuNTUyLDE2LDQsMTZ6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNNTMsMXY4aC0wLjVjLTEuMzc5LDAtMi41LDEuMTIyLTIuNSwyLjVzMS4xMjEsMi41LDIuNSwyLjVzMi41LTEuMTIyLDIuNS0yLjVWN2g2djJoLTAuNWMtMS4zNzksMC0yLjUsMS4xMjItMi41LDIuNSAgIHMxLjEyMSwyLjUsMi41LDIuNXMyLjUtMS4xMjIsMi41LTIuNVYxSDUzeiBNNTMsMTEuNWMwLDAuMjc2LTAuMjI1LDAuNS0wLjUsMC41UzUyLDExLjc3Niw1MiwxMS41czAuMjI1LTAuNSwwLjUtMC41SDUzVjExLjV6ICAgIE02MSwxMS41YzAsMC4yNzYtMC4yMjUsMC41LTAuNSwwLjVTNjAsMTEuNzc2LDYwLDExLjVzMC4yMjUtMC41LDAuNS0wLjVINjFWMTEuNXogTTU1LDVWM2g2djJINTV6Jz48L3BhdGg+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbnRhY3RDb21wIC8+XG4gICAgPC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db25jZXJ0K09uZXxNb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgICAgfVxuXG5cbiAgICAgIC5jb250YWN0QnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhY3RCdXR0b24gYSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgfVxuXG4gICAgLmNvbnRhY3RCdXR0b24gYTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICM3NjFmNmIsIDAgMCAwLjVlbSAjNzYxZjZiLFxuICAgICAgICAgIDAgMCAwLjFlbSAjNzYxZjZiLCAwIDEwcHggM3B4ICMwMDA7XG4gICAgfVxuXG4gICAgICAgLmxpc3RCdXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgICB9XG5cbiAgICAubGlzdEJ1dHRvbiBhIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNlNTM0NDE7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgY29sb3I6ICNlNTM0NDE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICB9XG5cbiAgICAubGlzdEJ1dHRvbiBhOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0ZXh0LXNoYWRvdzogMCA0MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICNlNTM0NDEsIDAgMCAwLjVlbSAjZTUzNDQxLFxuICAgICAgICAgIDAgMCAwLjFlbSAjZTUzNDQxLCAwIDEwcHggM3B4ICNmMWYxZjE7XG4gICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICNlNTM0NDE7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgIH1cblxuICAgICAgLnNwb3RpZnkge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMiUgMDtcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgfVxuXG4gICAgICAuc3BvdGlmeUFib3V0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4T25lU2lkZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgfVxuXG4gICAgICAuZmxleFR3b1NpZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTUzNDQxO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCB7XG4gICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMjUsMywyMik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICB9XG5cbiAgICAgIC5pbnRyb1RleHQgYSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjUsMywyMikgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNlNTM0NDEgIWltcG9ydGFudDtcbiAgICAgIH1cblxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHJnYigyNSwzLDIyKVxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgICB9XG5cbiAgICAgIC5pbnRyb1RleHQgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDc1cHgpIHtcbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBjdXJzaXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCBwIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nZWxrTG9nbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzMlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5MHB4KSB7XG4gICAgICAgIC5nZWxrTG9nbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGV2cm9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnRyb1RleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCBwIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTdweCkge1xuICAgICAgICBzdmcge1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgICAgIC5nZWxrTG9nbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzN2aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.6616a16bde5c217d7400.hot-update.js.map