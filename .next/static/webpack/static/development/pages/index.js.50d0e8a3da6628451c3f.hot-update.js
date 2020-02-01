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
  height: 300
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
    className: "jsx-2569515894",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    id: "text",
    className: "jsx-2569515894" + " " + 'scrollBox',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2569515894" + " " + 'gelkLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    src: "/testNeon.gif",
    alt: "good enough live karaoke neon logo",
    className: "jsx-2569515894" + " " + 'gelkImageLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2569515894" + " " + 'chevron',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
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
      lineNumber: 41
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
    className: "jsx-2569515894",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M15.2928932,9.29289322 L16.7071068,10.7071068 L12,15.4142136 L7.29289322,10.7071068 L8.70710678,9.29289322 L12,12.5857864 L15.2928932,9.29289322 Z",
    className: "jsx-2569515894",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3334069918",
    __self: this
  }, ".gelkImageLogo.jsx-2569515894{display:block;width:100%;height:auto;max-height:800px;}.gelkLogo.jsx-2569515894{width:70%;margin:0 auto;margin-top:3%;max-width:1400px;margin-bottom:15%;}svg.jsx-2569515894:hover{fill:rgba(241,241,241,0.6);cursor:pointer;}svg.jsx-2569515894{-webkit-transition:all 0.4s;transition:all 0.4s;}h1.jsx-2569515894,a.jsx-2569515894{font-family:'Montserrat',sans-serif;}ul.jsx-2569515894{padding:0;}li.jsx-2569515894{list-style:none;margin:5px 0;}a.jsx-2569515894{-webkit-text-decoration:none;text-decoration:none;}a.jsx-2569515894:hover{opacity:0.6;}.chevron.jsx-2569515894{margin-bottom:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:94%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:fixed;top:88vh;-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1);}.wrapper.jsx-2569515894{margin:0 auto;max-width:960px;padding:0 2%;}.scrollBox.jsx-2569515894{position:relative;color:white;width:20px;height:20px;bottom:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RnQixBQUlxQixBQU9KLEFBT29CLEFBS1IsQUFJaUIsQUFJM0IsQUFJTSxBQUtLLEFBSVQsQUFJUSxBQVVOLEFBTUksVUFwRE4sQUFvQmQsRUFhQSxFQXhDVyxBQXNETyxFQXZCSCxFQTZCRCxFQWhCQyxJQXBDRCxDQVBGLEVBYUssRUFrQmpCLENBdUJlLEFBTUYsTUF0Q2IsQ0FyQmlCLENBT0EsR0FxREgsQ0EvQ2QsQ0F5Q0EsS0FyQ0EsRUFpQkEsR0EyQmUsQ0E1RGpCLENBT29CLFdBc0RsQixPQXJERixxQkFrQ2MsVUFDZSxpR0FDVixlQUNOLFNBRVosOEVBQUMiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUZXN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEhlYWRlcic7XG5pbXBvcnQgTmVvbkxvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9OZW9uTG9nbyc7XG5pbXBvcnQgKiBhcyBTY3JvbGwgZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL0Nhcm91c2VsJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzJztcbmltcG9ydCBTcG90aWZ5UGxheWVyIGZyb20gJ3JlYWN0LXNwb3RpZnktcGxheWVyJztcblxuaW1wb3J0IHtcbiAgTGluayxcbiAgRWxlbWVudCxcbiAgRXZlbnRzLFxuICBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCxcbiAgc2Nyb2xsU3B5LFxuICBzY3JvbGxlcixcbn0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcblxuY29uc3Qgc2l6ZSA9IHtcbiAgd2lkdGg6ICc5MCUnLFxuICBoZWlnaHQ6IDMwMCxcbn07XG5jb25zdCB2aWV3ID0gJ2xpc3QnOyAvLyBvciAnY292ZXJhcnQnXG5jb25zdCB0aGVtZSA9ICdibGFjayc7IC8vIG9yICd3aGl0ZSdcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxkaXYgaWQ9J3RleHQnIGNsYXNzTmFtZT0nc2Nyb2xsQm94Jz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdnZWxrTG9nbyc+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9J2dlbGtJbWFnZUxvZ28nXG4gICAgICAgICAgc3JjPScvdGVzdE5lb24uZ2lmJ1xuICAgICAgICAgIGFsdD0nZ29vZCBlbm91Z2ggbGl2ZSBrYXJhb2tlIG5lb24gbG9nbydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjaGV2cm9uJz5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT0nc2Nyb2xsQ2hldnJvbidcbiAgICAgICAgdG89J3RleHQnXG4gICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgaGVpZ2h0PSc0MHB4J1xuICAgICAgICAgIHdpZHRoPSc0MHB4J1xuICAgICAgICAgIGZpbGw9JyNGMUYxRjEnXG4gICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICB4PScwcHgnXG4gICAgICAgICAgeT0nMHB4J1xuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgIGQ9J00xMiwyMyBDNS45MjQ4Njc3NSwyMyAxLDE4LjA3NTEzMjIgMSwxMiBDMSw1LjkyNDg2Nzc1IDUuOTI0ODY3NzUsMSAxMiwxIEMxOC4wNzUxMzIyLDEgMjMsNS45MjQ4Njc3NSAyMywxMiBDMjMsMTguMDc1MTMyMiAxOC4wNzUxMzIyLDIzIDEyLDIzIFogTTEyLDIxIEMxNi45NzA1NjI3LDIxIDIxLDE2Ljk3MDU2MjcgMjEsMTIgQzIxLDcuMDI5NDM3MjUgMTYuOTcwNTYyNywzIDEyLDMgQzcuMDI5NDM3MjUsMyAzLDcuMDI5NDM3MjUgMywxMiBDMywxNi45NzA1NjI3IDcuMDI5NDM3MjUsMjEgMTIsMjEgWiBNMTUuMjkyODkzMiw5LjI5Mjg5MzIyIEwxNi43MDcxMDY4LDEwLjcwNzEwNjggTDEyLDE1LjQxNDIxMzYgTDcuMjkyODkzMjIsMTAuNzA3MTA2OCBMOC43MDcxMDY3OCw5LjI5Mjg5MzIyIEwxMiwxMi41ODU3ODY0IEwxNS4yOTI4OTMyLDkuMjkyODkzMjIgWidcbiAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAuZ2Vsa0ltYWdlTG9nbyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWF4LWhlaWdodDogODAwcHg7XG4gICAgfVxuXG4gICAgLmdlbGtMb2dvIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gICAgfVxuICAgICAgc3ZnOmhvdmVyIHtcbiAgICAgICAgZmlsbDogcmdiYSgyNDEsMjQxLDI0MSwgMC42KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIH1cbiAgICAgIGgxLFxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuXG4gICAgICAuY2hldnJvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogOTQlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogODh2aDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSlcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyJTtcbiAgICAgIH1cblxuICAgICAgLnNjcm9sbEJveHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvdHRvbTogMjAwcHg7XG4gICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDw+XG4gICAgICB7LyogPENhcm91c2VsIC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Nwb3RpZnlBYm91dCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4T25lU2lkZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludHJvVGV4dCc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgR29vZCBFbm91Z2ggTGl2ZSBLYXJhb2tlIGlzIFRvcm9udG8ncyBtb3N0IHBvcHVsYXIgbGl2ZSBiYW5kXG4gICAgICAgICAgICAgIGthcmFva2UgZXhwZXJpZW5jZSwgbGV0dGluZyBhbnlvbmUgd2l0aCB0aGUgZGVzaXJlIGFuZCBndXRzIHRvXG4gICAgICAgICAgICAgIGpvaW4gdXMgb24gc3RhZ2UsIHRha2UgdGhlIG1pYyBhbmQgc2luZyEgSWRlYWwgZm9yIGNvcnBvcmF0ZVxuICAgICAgICAgICAgICBldmVudHMsIGJpcnRoZGF5IHBhcnRpZXMgYW5kIHdlZGRpbmdzLCBHb29kIEVub3VnaCBpcyBhIGxpdmUgYmFuZFxuICAgICAgICAgICAgICBmZWF0dXJpbmcgZ3VpdGFycywgYmFzcywga2V5Ym9hcmRzIGFuZCBkcnVtcywgYW5kIGEgcmVwZXJ0b2lyZSBvZlxuICAgICAgICAgICAgICBvdmVyIDQwMCBzb25ncyBzcGFubmluZyBnZW5yZXMgYW5kIGVyYXMuIEdldCBpbiB0b3VjaCBhdHsnICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj0nbWFpbHRvOnNpbmdAZ29vZGVub3VnaGxpdmVrYXJhb2tlLmNvbT9TdWJqZWN0PUhlbGxvJTIwJ1xuICAgICAgICAgICAgICAgIHRhcmdldD0nX3RvcCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHNpbmdAZ29vZGVub3VnaGxpdmVrYXJhb2tlLmNvbVxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgdG8gYm9vayB5b3VyIGV2ZW50LCBhbmQgZm9sbG93IHVzIG9uIEluc3RhZ3JhbSB0byBzZWUgd2Vla2x5XG4gICAgICAgICAgICAgIHB1YmxpYyBzaG93cyBhY3Jvc3MgT250YXJpby4gU2luY2UgMjAxMywgd2UgaGF2ZSBwbGF5ZWQgdGhvdXNhbmRzXG4gICAgICAgICAgICAgIG9mIGhvdXJzIG9uIHN0YWdlIGF0IHByaXZhdGUgYW5kIHB1YmxpYyBldmVudHMgd2l0aCBvdXIgdW5pcXVlLFxuICAgICAgICAgICAgICBpbnRlcmFjdGl2ZSByb2NrJ24ncm9sbCBleHBlcmllbmNlLiBJdOKAmXMgYSBiaXQgdGVycmlmeWluZywgaHVnZWx5XG4gICAgICAgICAgICAgIGV4aGlsYXJhdGluZyBhbmQgY29tcGxldGVseSBhd2Vzb21lIVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhUd29TaWRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BvdGlmeSc+XG4gICAgICAgICAgICA8U3BvdGlmeVBsYXllclxuICAgICAgICAgICAgICB1cmk9J3Nwb3RpZnk6cGxheWxpc3Q6NFFtWDQ0ZHl6WmE2a09iWW01alh6UydcbiAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgdmlldz17dmlld31cbiAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvbmNlcnQrT25lfE1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgIC5zcG90aWZ5IHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuc3BvdGlmeUFib3V0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4T25lU2lkZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLmZsZXhUd29TaWRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U1MzQ0MTtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCB7XG4gICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY1O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzVweCkge1xuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMyU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoZXZyb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1N3B4KSB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzM3ZoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2569515894" + " " + 'spotifyAbout',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2569515894" + " " + 'flexOneSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2569515894" + " " + 'introText',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2569515894",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Good Enough Live Karaoke is Toronto's most popular live band karaoke experience, letting anyone with the desire and guts to join us on stage, take the mic and sing! Ideal for corporate events, birthday parties and weddings, Good Enough is a live band featuring guitars, bass, keyboards and drums, and a repertoire of over 400 songs spanning genres and eras. Get in touch at", ' ', __jsx("a", {
    href: "mailto:sing@goodenoughlivekaraoke.com?Subject=Hello%20",
    target: "_top",
    className: "jsx-2569515894",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "sing@goodenoughlivekaraoke.com"), ' ', "to book your event, and follow us on Instagram to see weekly public shows across Ontario. Since 2013, we have played thousands of hours on stage at private and public events with our unique, interactive rock'n'roll experience. It\u2019s a bit terrifying, hugely exhilarating and completely awesome!"))), __jsx("div", {
    className: "jsx-2569515894" + " " + 'flexTwoSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2569515894" + " " + 'spotify',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(react_spotify_player__WEBPACK_IMPORTED_MODULE_11___default.a, {
    uri: "spotify:playlist:4QmX44dyzZa6kObYm5jXzS",
    size: size,
    view: view,
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "911680481",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Concert+One|Montserrat&display=swap');.spotify.jsx-2569515894{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.spotifyAbout.jsx-2569515894{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.flexOneSide.jsx-2569515894{width:60%;padding:2%;background:white;}.flexTwoSide.jsx-2569515894{background:#e53441;width:40%;}.introText.jsx-2569515894{max-width:1400px;font-family:'Montserrat',sans-serif;font-size:28px;color:#f1f1f1;}a.jsx-2569515894{color:#f1f1f1;font-family:'Roboto',sans-serif;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;-webkit-transition:all 0.4s;transition:all 0.4s;}a.jsx-2569515894:hover{opacity:0.65;}.introText.jsx-2569515894 p.jsx-2569515894{line-height:38px;margin-bottom:50px;text-align:left;}h2.jsx-2569515894{text-align:center;font-size:70px;margin-top:-100px;font-family:'Concert One',cursive;color:#f1f1f1;}@media screen and (max-width:1075px){.introText.jsx-2569515894 h2.jsx-2569515894{font-size:30px;font-family:'Concert One',cursive;}.introText.jsx-2569515894{font-size:20px;}.introText.jsx-2569515894 p.jsx-2569515894{line-height:36px;}.gelkLogo.jsx-2569515894{margin-top:33%;}}@media screen and (max-width:690px){.gelkLogo.jsx-2569515894{margin-top:25vh;}.chevron.jsx-2569515894{margin-top:50px;}.introText.jsx-2569515894 h2.jsx-2569515894{font-size:30px;margin-top:-70px;margin-bottom:30px;}.introText.jsx-2569515894{font-size:16px;}.introText.jsx-2569515894 p.jsx-2569515894{line-height:32px;}}@media screen and (max-width:557px){svg.jsx-2569515894{width:30px;}.introText.jsx-2569515894 h2.jsx-2569515894{font-size:22px;}.gelkLogo.jsx-2569515894{width:90%;}.gelkLogo.jsx-2569515894{margin-top:33vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEtnQixBQUVpRyxBQUcxRSxBQU1ELEFBS0gsQUFNUyxBQUtGLEFBT0gsQUFRRCxBQUlJLEFBTUMsQUFTRCxBQUtBLEFBSUUsQUFJRixBQU1DLEFBSUEsQUFHRCxBQU1BLEFBSUUsQUFNTixBQUlJLEFBSUwsQUFHTSxVQWpHUCxBQStGWCxDQVJBLEVBN0RGLENBckNlLEFBNkJvQixDQTJCSSxBQUtyQyxBQVFBLEFBYW1CLEFBTW5CLEFBY0EsQ0EzQkEsQUFJQSxBQThCQSxDQXZGcUMsQUFtQmxCLEFBd0JuQixBQTJCQSxDQTdDZSxDQTlCTCxFQUxPLFFBTW5CLEdBaUV1QixDQW5DSCxHQU5GLEVBN0JsQixRQWlCNEIsR0EyQjFCLEVBUm1DLEFBbUNuQyxDQXpDRixDQXBCaUIsZUFDRCxNQWxCSCxRQW1CYixHQWxCQSxBQTJDZ0IsR0FqRFMsV0FrRHpCLE9BcEJpQixlQUNLLGdEQUN0QixrQkEvQkEiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUZXN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEhlYWRlcic7XG5pbXBvcnQgTmVvbkxvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9OZW9uTG9nbyc7XG5pbXBvcnQgKiBhcyBTY3JvbGwgZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL0Nhcm91c2VsJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzJztcbmltcG9ydCBTcG90aWZ5UGxheWVyIGZyb20gJ3JlYWN0LXNwb3RpZnktcGxheWVyJztcblxuaW1wb3J0IHtcbiAgTGluayxcbiAgRWxlbWVudCxcbiAgRXZlbnRzLFxuICBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCxcbiAgc2Nyb2xsU3B5LFxuICBzY3JvbGxlcixcbn0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcblxuY29uc3Qgc2l6ZSA9IHtcbiAgd2lkdGg6ICc5MCUnLFxuICBoZWlnaHQ6IDMwMCxcbn07XG5jb25zdCB2aWV3ID0gJ2xpc3QnOyAvLyBvciAnY292ZXJhcnQnXG5jb25zdCB0aGVtZSA9ICdibGFjayc7IC8vIG9yICd3aGl0ZSdcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxkaXYgaWQ9J3RleHQnIGNsYXNzTmFtZT0nc2Nyb2xsQm94Jz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdnZWxrTG9nbyc+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9J2dlbGtJbWFnZUxvZ28nXG4gICAgICAgICAgc3JjPScvdGVzdE5lb24uZ2lmJ1xuICAgICAgICAgIGFsdD0nZ29vZCBlbm91Z2ggbGl2ZSBrYXJhb2tlIG5lb24gbG9nbydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjaGV2cm9uJz5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT0nc2Nyb2xsQ2hldnJvbidcbiAgICAgICAgdG89J3RleHQnXG4gICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgaGVpZ2h0PSc0MHB4J1xuICAgICAgICAgIHdpZHRoPSc0MHB4J1xuICAgICAgICAgIGZpbGw9JyNGMUYxRjEnXG4gICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICB4PScwcHgnXG4gICAgICAgICAgeT0nMHB4J1xuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgIGQ9J00xMiwyMyBDNS45MjQ4Njc3NSwyMyAxLDE4LjA3NTEzMjIgMSwxMiBDMSw1LjkyNDg2Nzc1IDUuOTI0ODY3NzUsMSAxMiwxIEMxOC4wNzUxMzIyLDEgMjMsNS45MjQ4Njc3NSAyMywxMiBDMjMsMTguMDc1MTMyMiAxOC4wNzUxMzIyLDIzIDEyLDIzIFogTTEyLDIxIEMxNi45NzA1NjI3LDIxIDIxLDE2Ljk3MDU2MjcgMjEsMTIgQzIxLDcuMDI5NDM3MjUgMTYuOTcwNTYyNywzIDEyLDMgQzcuMDI5NDM3MjUsMyAzLDcuMDI5NDM3MjUgMywxMiBDMywxNi45NzA1NjI3IDcuMDI5NDM3MjUsMjEgMTIsMjEgWiBNMTUuMjkyODkzMiw5LjI5Mjg5MzIyIEwxNi43MDcxMDY4LDEwLjcwNzEwNjggTDEyLDE1LjQxNDIxMzYgTDcuMjkyODkzMjIsMTAuNzA3MTA2OCBMOC43MDcxMDY3OCw5LjI5Mjg5MzIyIEwxMiwxMi41ODU3ODY0IEwxNS4yOTI4OTMyLDkuMjkyODkzMjIgWidcbiAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAuZ2Vsa0ltYWdlTG9nbyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWF4LWhlaWdodDogODAwcHg7XG4gICAgfVxuXG4gICAgLmdlbGtMb2dvIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gICAgfVxuICAgICAgc3ZnOmhvdmVyIHtcbiAgICAgICAgZmlsbDogcmdiYSgyNDEsMjQxLDI0MSwgMC42KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIH1cbiAgICAgIGgxLFxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuXG4gICAgICAuY2hldnJvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogOTQlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogODh2aDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSlcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyJTtcbiAgICAgIH1cblxuICAgICAgLnNjcm9sbEJveHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvdHRvbTogMjAwcHg7XG4gICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDw+XG4gICAgICB7LyogPENhcm91c2VsIC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Nwb3RpZnlBYm91dCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4T25lU2lkZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludHJvVGV4dCc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgR29vZCBFbm91Z2ggTGl2ZSBLYXJhb2tlIGlzIFRvcm9udG8ncyBtb3N0IHBvcHVsYXIgbGl2ZSBiYW5kXG4gICAgICAgICAgICAgIGthcmFva2UgZXhwZXJpZW5jZSwgbGV0dGluZyBhbnlvbmUgd2l0aCB0aGUgZGVzaXJlIGFuZCBndXRzIHRvXG4gICAgICAgICAgICAgIGpvaW4gdXMgb24gc3RhZ2UsIHRha2UgdGhlIG1pYyBhbmQgc2luZyEgSWRlYWwgZm9yIGNvcnBvcmF0ZVxuICAgICAgICAgICAgICBldmVudHMsIGJpcnRoZGF5IHBhcnRpZXMgYW5kIHdlZGRpbmdzLCBHb29kIEVub3VnaCBpcyBhIGxpdmUgYmFuZFxuICAgICAgICAgICAgICBmZWF0dXJpbmcgZ3VpdGFycywgYmFzcywga2V5Ym9hcmRzIGFuZCBkcnVtcywgYW5kIGEgcmVwZXJ0b2lyZSBvZlxuICAgICAgICAgICAgICBvdmVyIDQwMCBzb25ncyBzcGFubmluZyBnZW5yZXMgYW5kIGVyYXMuIEdldCBpbiB0b3VjaCBhdHsnICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj0nbWFpbHRvOnNpbmdAZ29vZGVub3VnaGxpdmVrYXJhb2tlLmNvbT9TdWJqZWN0PUhlbGxvJTIwJ1xuICAgICAgICAgICAgICAgIHRhcmdldD0nX3RvcCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHNpbmdAZ29vZGVub3VnaGxpdmVrYXJhb2tlLmNvbVxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgdG8gYm9vayB5b3VyIGV2ZW50LCBhbmQgZm9sbG93IHVzIG9uIEluc3RhZ3JhbSB0byBzZWUgd2Vla2x5XG4gICAgICAgICAgICAgIHB1YmxpYyBzaG93cyBhY3Jvc3MgT250YXJpby4gU2luY2UgMjAxMywgd2UgaGF2ZSBwbGF5ZWQgdGhvdXNhbmRzXG4gICAgICAgICAgICAgIG9mIGhvdXJzIG9uIHN0YWdlIGF0IHByaXZhdGUgYW5kIHB1YmxpYyBldmVudHMgd2l0aCBvdXIgdW5pcXVlLFxuICAgICAgICAgICAgICBpbnRlcmFjdGl2ZSByb2NrJ24ncm9sbCBleHBlcmllbmNlLiBJdOKAmXMgYSBiaXQgdGVycmlmeWluZywgaHVnZWx5XG4gICAgICAgICAgICAgIGV4aGlsYXJhdGluZyBhbmQgY29tcGxldGVseSBhd2Vzb21lIVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhUd29TaWRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BvdGlmeSc+XG4gICAgICAgICAgICA8U3BvdGlmeVBsYXllclxuICAgICAgICAgICAgICB1cmk9J3Nwb3RpZnk6cGxheWxpc3Q6NFFtWDQ0ZHl6WmE2a09iWW01alh6UydcbiAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgdmlldz17dmlld31cbiAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvbmNlcnQrT25lfE1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgIC5zcG90aWZ5IHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuc3BvdGlmeUFib3V0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4T25lU2lkZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLmZsZXhUd29TaWRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U1MzQ0MTtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCB7XG4gICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY1O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzVweCkge1xuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMyU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoZXZyb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1N3B4KSB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzM3ZoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.50d0e8a3da6628451c3f.hot-update.js.map