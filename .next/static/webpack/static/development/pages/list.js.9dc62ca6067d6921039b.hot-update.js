webpackHotUpdate("static/development/pages/list.js",{

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _assets_songListHead_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/songListHead.svg */ "./assets/songListHead.svg");





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/list.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");







var ColorCircularProgress = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])({
  root: {
    color: '#f1f1f1'
  }
})(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"]);

var List =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(List, _React$Component);

  function List(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, List);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(List).call(this, props));
    _this.state = {
      songs: [],
      alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = contentful.createClient({
        space: 'sqmp3jmwaedr',
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      });
      client.getEntries({
        content_type: 'songList'
      }).then(function (response) {
        _this2.setState({
          songs: response.items
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var list = this.state.songs.map(function (song, i) {
        return _this3.state.alphabet.map(function (letter, i) {
          if (song.fields[letter]) {
            return song.fields[letter].content[0].content.map(function (song, i) {
              if (song.content) {
                return song.content.map(function (song, i) {
                  return song.content.map(function (song, i) {
                    return __jsx("div", {
                      className: "jsx-1121371533",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                      },
                      __self: this
                    }, __jsx("div", {
                      key: i,
                      id: letter,
                      className: "jsx-1121371533" + " " + (letter || ""),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                      },
                      __self: this
                    }, __jsx("p", {
                      className: "jsx-1121371533",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                      },
                      __self: this
                    }, song.value)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      id: "1121371533",
                      __self: this
                    }, ".alphabet.jsx-1121371533{margin-bottom:50px;margin-top:200px;}p.jsx-1121371533{color:#f1f1f1;font-family:'Montserrat',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRmtDLEFBRzhDLEFBSUwsY0FDdUIsS0FKcEIsaUJBQ25CLGNBSUEiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQge1xuICBMaW5rLFxuICBFbGVtZW50LFxuICBFdmVudHMsXG4gIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLFxuICBzY3JvbGxTcHksXG4gIHNjcm9sbGVyLFxufSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBpbWcgZnJvbSAnLi4vYXNzZXRzL3NvbmdMaXN0SGVhZC5zdmcnO1xuXG5jb25zdCBDb2xvckNpcmN1bGFyUHJvZ3Jlc3MgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGNvbG9yOiAnI2YxZjFmMScsXG4gIH0sXG59KShDaXJjdWxhclByb2dyZXNzKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzb25nczogW10sXG4gICAgICBhbHBoYWJldDogW1xuICAgICAgICAnYScsXG4gICAgICAgICdiJyxcbiAgICAgICAgJ2MnLFxuICAgICAgICAnZCcsXG4gICAgICAgICdlJyxcbiAgICAgICAgJ2YnLFxuICAgICAgICAnZycsXG4gICAgICAgICdoJyxcbiAgICAgICAgJ2knLFxuICAgICAgICAnaicsXG4gICAgICAgICdrJyxcbiAgICAgICAgJ2wnLFxuICAgICAgICAnbScsXG4gICAgICAgICduJyxcbiAgICAgICAgJ28nLFxuICAgICAgICAncCcsXG4gICAgICAgICdxJyxcbiAgICAgICAgJ3InLFxuICAgICAgICAncycsXG4gICAgICAgICd0JyxcbiAgICAgICAgJ3UnLFxuICAgICAgICAndicsXG4gICAgICAgICd3JyxcbiAgICAgICAgJ3gnLFxuICAgICAgICAneScsXG4gICAgICAgICd6JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG4gICAgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6ICdzb25nTGlzdCcgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29uZ3M6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnN0YXRlLnNvbmdzLm1hcCgoc29uZywgaSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxwaGFiZXQubWFwKChsZXR0ZXIsIGkpID0+IHtcbiAgICAgICAgaWYgKHNvbmcuZmllbGRzW2xldHRlcl0pIHtcbiAgICAgICAgICByZXR1cm4gc29uZy5maWVsZHNbbGV0dGVyXS5jb250ZW50WzBdLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoc29uZy5jb250ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBzb25nLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvbmcuY29udGVudC5tYXAoKHNvbmcsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17bGV0dGVyfSBpZD17bGV0dGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzb25nLnZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWxwaGFiZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdFdyYXBwZXInPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NvbnRhY3ROZW9uJz5TT05HIExJU1Q8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWxwaGFiZXQnPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxwaGFiZXQubWFwKChsZXR0ZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Rlc3Q2J1xuICAgICAgICAgICAgICAgICAgICB0bz17bGV0dGVyfVxuICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstMjAwfVxuICAgICAgICAgICAgICAgICAgICBpc0R5bmFtaWM9e3RydWV9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtsZXR0ZXJ9YH0+e2xldHRlcn08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdCc+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zb25ncy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxDb2xvckNpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MTAwfSB0aGlja25lc3M9ezV9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBsaXN0XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBtYXJnaW46IDAgLTVweCAwIDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwdnc7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICM3NjFmNmIsXG4gICAgICAgICAgICAgIDAgMCAwLjVlbSAjNzYxZjZiLCAwIDAgMC4xZW0gIzc2MWY2YiwgMCAxMHB4IDNweCAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdFdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTh2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGV0dGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU1dmg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hbHBoYWJldCB7XG4gICAgICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUsIDMsIDIyKTtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTVweCkge1xuICAgICAgICAgICAgLmFscGhhYmV0IHtcbiAgICAgICAgICAgICAgdG9wOiA3NXB4O1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLFxuICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxNXB4KSB7XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgICAgLmxpc3RXcmFwcGVyIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNzkuMzN2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWxwaGFiZXQge1xuICAgICAgICAgICAgICB0b3A6IDYwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAgLmFscGhhYmV0LFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/list.js */"));
                  });
                });
              }
            });
          }
        });
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2254408235" + " " + 'listWrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-2254408235" + " " + 'contactNeon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "SONG LIST"), __jsx("p", {
        className: "jsx-2254408235" + " " + 'alphabet',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.state.alphabet.map(function (letter, i) {
        return __jsx("h3", {
          className: "jsx-2254408235",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          className: "test6",
          to: letter,
          spy: true,
          smooth: true,
          duration: 500,
          offset: -200,
          isDynamic: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, __jsx("a", {
          href: "#".concat(letter),
          className: "jsx-2254408235",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, letter)));
      })), __jsx("div", {
        className: "jsx-2254408235" + " " + 'list',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.state.songs.length === 0 ? __jsx(ColorCircularProgress, {
        size: 100,
        thickness: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }) : list)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2254408235",
        __self: this
      }, "h1.jsx-2254408235{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:10vw;font-family:'Concert One',sans-serif;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b, 0 0 0.5em #761f6b,0 0 0.1em #761f6b,0 10px 3px #000;margin-bottom:50px;position:relative;z-index:20;}.listWrapper.jsx-2254408235{margin-top:18vh;}.title.jsx-2254408235{width:80%;margin:0 auto;}.letter.jsx-2254408235{color:#f1f1f1;}.list.jsx-2254408235{font-family:'Montserrat',sans-serif;width:600px;margin:0 auto;text-align:center;font-size:28px;min-height:55vh;margin-bottom:50px;}.alphabet.jsx-2254408235{margin:50px auto;position:-webkit-sticky;position:sticky;top:50px;background:rgb(25,3,22);-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:20px;width:95%;padding:20px 0;}p.jsx-2254408235{color:#f1f1f1;font-size:28px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-2254408235{-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;margin:10px;font-family:'Montserrat',sans-serif;color:#f1f1f1;font-size:20px;}a.jsx-2254408235:hover{-webkit-text-decoration:underline;text-decoration:underline;}@media screen and (max-width:1015px){.alphabet.jsx-2254408235{top:75px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:20px;width:100%;margin:50px auto;padding:20px 0;}p.jsx-2254408235,.list.jsx-2254408235{font-size:20px;}h3.jsx-2254408235{margin-top:10px;margin-bottom:10px;}}@media screen and (max-width:1015px){.title.jsx-2254408235{width:100%;}}@media screen and (max-width:800px){.listWrapper.jsx-2254408235{min-height:79.33vh;}}@media screen and (max-width:700px){p.jsx-2254408235,.list.jsx-2254408235{font-size:16px;width:70%;}.alphabet.jsx-2254408235{top:60px;}p.jsx-2254408235 .alphabet.jsx-2254408235,a.jsx-2254408235{font-size:18px;margin:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSW9CLEFBR2dDLEFBZ0JILEFBR04sQUFLSSxBQUl1QixBQVVwQixBQVdILEFBT08sQUFTSyxBQUtmLEFBVU0sQUFHQyxBQU9MLEFBTVEsQUFPSixBQUtOLEFBS00sU0ExQ0EsQUFzQ2pCLENBekZjLENBdUVkLEdBbEVGLEFBeUJpQixDQStCZixBQXVCWSxBQVVDLENBakdmLEFBbUV1QixDQTdDTCxFQXRDRSxBQWdHbEIsS0E1RUYsQ0FvRkUsQ0FVQSxHQWhFYSxNQWtDYixDQXhEWSxDQTNCTyxXQTRCTCxFQTJCVyxPQWpCaEIsR0EwQlgsRUFuQ29CLElBVVEsQUErQlgsU0FkSCxLQTFCRyxPQTJCc0IsR0FqQnRCLEtBVEMsUUFtQk8sUUFsQkosWUEwQkwsT0F6REEsQUFnQ2hCLE9BMEJpQixHQVlFLElBckVGLEdBdUNGLEtBbUJmLEdBWWUsSUFyRXlCLE9Bc0VuQixpQkFDRixhQXRFRCxFQXVFaEIsSUF4QkYsVUE5Q29CLFNBcUNILFNBcENKLE1BcUNELEtBbkM2QyxLQW9DeEMsZUFDakIsbUZBcENxQixtQkFDRCxrQkFDUCxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IFRlc3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0SGVhZGVyJztcbmltcG9ydCAqIGFzIFNjcm9sbCBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IHtcbiAgTGluayxcbiAgRWxlbWVudCxcbiAgRXZlbnRzLFxuICBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCxcbiAgc2Nyb2xsU3B5LFxuICBzY3JvbGxlcixcbn0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgaW1nIGZyb20gJy4uL2Fzc2V0cy9zb25nTGlzdEhlYWQuc3ZnJztcblxuY29uc3QgQ29sb3JDaXJjdWxhclByb2dyZXNzID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBjb2xvcjogJyNmMWYxZjEnLFxuICB9LFxufSkoQ2lyY3VsYXJQcm9ncmVzcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc29uZ3M6IFtdLFxuICAgICAgYWxwaGFiZXQ6IFtcbiAgICAgICAgJ2EnLFxuICAgICAgICAnYicsXG4gICAgICAgICdjJyxcbiAgICAgICAgJ2QnLFxuICAgICAgICAnZScsXG4gICAgICAgICdmJyxcbiAgICAgICAgJ2cnLFxuICAgICAgICAnaCcsXG4gICAgICAgICdpJyxcbiAgICAgICAgJ2onLFxuICAgICAgICAnaycsXG4gICAgICAgICdsJyxcbiAgICAgICAgJ20nLFxuICAgICAgICAnbicsXG4gICAgICAgICdvJyxcbiAgICAgICAgJ3AnLFxuICAgICAgICAncScsXG4gICAgICAgICdyJyxcbiAgICAgICAgJ3MnLFxuICAgICAgICAndCcsXG4gICAgICAgICd1JyxcbiAgICAgICAgJ3YnLFxuICAgICAgICAndycsXG4gICAgICAgICd4JyxcbiAgICAgICAgJ3knLFxuICAgICAgICAneicsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJ3NxbXAzam13YWVkcicsXG4gICAgICBhY2Nlc3NUb2tlbjogJzAxVHNGeFpSMm1yd19WV3N1Q3R6WkNCQ3pLc3J2Q1REWDlpcy02VVB6cVUnLFxuICAgIH0pO1xuICAgIGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAnc29uZ0xpc3QnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNvbmdzOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5zdGF0ZS5zb25ncy5tYXAoKHNvbmcsIGkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFscGhhYmV0Lm1hcCgobGV0dGVyLCBpKSA9PiB7XG4gICAgICAgIGlmIChzb25nLmZpZWxkc1tsZXR0ZXJdKSB7XG4gICAgICAgICAgcmV0dXJuIHNvbmcuZmllbGRzW2xldHRlcl0uY29udGVudFswXS5jb250ZW50Lm1hcCgoc29uZywgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNvbmcuY29udGVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gc29uZy5jb250ZW50Lm1hcCgoc29uZywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzb25nLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2xldHRlcn0gaWQ9e2xldHRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57c29uZy52YWx1ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLmFscGhhYmV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RXcmFwcGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0TmVvbic+U09ORyBMSVNUPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2FscGhhYmV0Jz5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFscGhhYmV0Lm1hcCgobGV0dGVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXN0NidcbiAgICAgICAgICAgICAgICAgICAgdG89e2xldHRlcn1cbiAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTIwMH1cbiAgICAgICAgICAgICAgICAgICAgaXNEeW5hbWljPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7bGV0dGVyfWB9PntsZXR0ZXJ9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QnPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc29uZ3MubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8Q29sb3JDaXJjdWxhclByb2dyZXNzIHNpemU9ezEwMH0gdGhpY2tuZXNzPXs1fSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgbGlzdFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHZ3O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLFxuICAgICAgICAgICAgICAwIDAgMC41ZW0gIzc2MWY2YiwgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3RXcmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4dmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxldHRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1NXZoO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWxwaGFiZXQge1xuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1LCAzLCAyMik7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDE1cHgpIHtcbiAgICAgICAgICAgIC5hbHBoYWJldCB7XG4gICAgICAgICAgICAgIHRvcDogNzVweDtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTVweCkge1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgIC5saXN0V3JhcHBlciB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDc5LjMzdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgIHAsXG4gICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFscGhhYmV0IHtcbiAgICAgICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIC5hbHBoYWJldCxcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/list.js */"));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=list.js.9dc62ca6067d6921039b.hot-update.js.map