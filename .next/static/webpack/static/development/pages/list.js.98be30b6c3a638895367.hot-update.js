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
                    }, ".alphabet.jsx-1121371533{margin-bottom:50px;margin-top:200px;}p.jsx-1121371533{color:#f1f1f1;font-family:'Montserrat',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRmtDLEFBRzhDLEFBSUwsY0FDdUIsS0FKcEIsaUJBQ25CLGNBSUEiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQge1xuICBMaW5rLFxuICBFbGVtZW50LFxuICBFdmVudHMsXG4gIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLFxuICBzY3JvbGxTcHksXG4gIHNjcm9sbGVyLFxufSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBpbWcgZnJvbSAnLi4vYXNzZXRzL3NvbmdMaXN0SGVhZC5zdmcnO1xuXG5jb25zdCBDb2xvckNpcmN1bGFyUHJvZ3Jlc3MgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGNvbG9yOiAnI2YxZjFmMScsXG4gIH0sXG59KShDaXJjdWxhclByb2dyZXNzKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzb25nczogW10sXG4gICAgICBhbHBoYWJldDogW1xuICAgICAgICAnYScsXG4gICAgICAgICdiJyxcbiAgICAgICAgJ2MnLFxuICAgICAgICAnZCcsXG4gICAgICAgICdlJyxcbiAgICAgICAgJ2YnLFxuICAgICAgICAnZycsXG4gICAgICAgICdoJyxcbiAgICAgICAgJ2knLFxuICAgICAgICAnaicsXG4gICAgICAgICdrJyxcbiAgICAgICAgJ2wnLFxuICAgICAgICAnbScsXG4gICAgICAgICduJyxcbiAgICAgICAgJ28nLFxuICAgICAgICAncCcsXG4gICAgICAgICdxJyxcbiAgICAgICAgJ3InLFxuICAgICAgICAncycsXG4gICAgICAgICd0JyxcbiAgICAgICAgJ3UnLFxuICAgICAgICAndicsXG4gICAgICAgICd3JyxcbiAgICAgICAgJ3gnLFxuICAgICAgICAneScsXG4gICAgICAgICd6JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG4gICAgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6ICdzb25nTGlzdCcgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29uZ3M6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnN0YXRlLnNvbmdzLm1hcCgoc29uZywgaSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxwaGFiZXQubWFwKChsZXR0ZXIsIGkpID0+IHtcbiAgICAgICAgaWYgKHNvbmcuZmllbGRzW2xldHRlcl0pIHtcbiAgICAgICAgICByZXR1cm4gc29uZy5maWVsZHNbbGV0dGVyXS5jb250ZW50WzBdLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoc29uZy5jb250ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBzb25nLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvbmcuY29udGVudC5tYXAoKHNvbmcsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17bGV0dGVyfSBpZD17bGV0dGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzb25nLnZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWxwaGFiZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdFdyYXBwZXInPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NvbnRhY3ROZW9uJz5TT05HIExJU1Q8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWxwaGFiZXQnPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxwaGFiZXQubWFwKChsZXR0ZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Rlc3Q2J1xuICAgICAgICAgICAgICAgICAgICB0bz17bGV0dGVyfVxuICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstMjAwfVxuICAgICAgICAgICAgICAgICAgICBpc0R5bmFtaWM9e3RydWV9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtsZXR0ZXJ9YH0+e2xldHRlcn08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdCc+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zb25ncy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxDb2xvckNpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MTAwfSB0aGlja25lc3M9ezV9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAvKiBsaXN0ICovIDxkaXY+YXNkYXM8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHZ3O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLFxuICAgICAgICAgICAgICAwIDAgMC41ZW0gIzc2MWY2YiwgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3RXcmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4dmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxldHRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1NXZoO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWxwaGFiZXQge1xuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1LCAzLCAyMik7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDE1cHgpIHtcbiAgICAgICAgICAgIC5hbHBoYWJldCB7XG4gICAgICAgICAgICAgIHRvcDogNzVweDtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTVweCkge1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgIC5saXN0V3JhcHBlciB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDc5LjMzdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgIHAsXG4gICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFscGhhYmV0IHtcbiAgICAgICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIC5hbHBoYWJldCxcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/list.js */"));
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
        className: "jsx-3007972911" + " " + 'listWrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3007972911" + " " + 'contactNeon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "SONG LIST"), __jsx("p", {
        className: "jsx-3007972911" + " " + 'alphabet',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.state.alphabet.map(function (letter, i) {
        return __jsx("h3", {
          className: "jsx-3007972911",
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
          className: "jsx-3007972911",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, letter)));
      })), __jsx("div", {
        className: "jsx-3007972911" + " " + 'list',
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
      }) :
      /* list */
      __jsx("div", {
        className: "jsx-3007972911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "asdas"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3007972911",
        __self: this
      }, ".jsx-3007972911::-webkit-scrollbar{display:none;}h1.jsx-3007972911{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:10vw;font-family:'Concert One',sans-serif;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b, 0 0 0.5em #761f6b,0 0 0.1em #761f6b,0 10px 3px #000;margin-bottom:50px;position:relative;z-index:20;}.listWrapper.jsx-3007972911{margin-top:18vh;}.title.jsx-3007972911{width:80%;margin:0 auto;}.letter.jsx-3007972911{color:#f1f1f1;}.list.jsx-3007972911{font-family:'Montserrat',sans-serif;width:600px;margin:0 auto;text-align:center;font-size:28px;min-height:55vh;margin-bottom:50px;}.alphabet.jsx-3007972911{margin:50px auto;position:-webkit-sticky;position:sticky;top:50px;background:rgb(25,3,22);-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:20px;width:95%;padding:20px 0;}p.jsx-3007972911{color:#f1f1f1;font-size:28px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-3007972911{-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;margin:10px;font-family:'Montserrat',sans-serif;color:#f1f1f1;font-size:20px;}a.jsx-3007972911:hover{-webkit-text-decoration:underline;text-decoration:underline;}@media screen and (max-width:1015px){.alphabet.jsx-3007972911{top:75px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:20px;width:100%;margin:50px auto;padding:20px 0;}p.jsx-3007972911,.list.jsx-3007972911{font-size:20px;}h3.jsx-3007972911{margin-top:10px;margin-bottom:10px;}}@media screen and (max-width:1015px){.title.jsx-3007972911{width:100%;}}@media screen and (max-width:800px){.listWrapper.jsx-3007972911{min-height:79.33vh;}}@media screen and (max-width:700px){p.jsx-3007972911,.list.jsx-3007972911{font-size:16px;width:70%;}.alphabet.jsx-3007972911{top:60px;}p.jsx-3007972911 .alphabet.jsx-3007972911,a.jsx-3007972911{font-size:18px;margin:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSW9CLEFBRzBCLEFBR00sQUFnQkgsQUFHTixBQUtJLEFBSXVCLEFBVXBCLEFBV0gsQUFPTyxBQVNLLEFBS2YsQUFVTSxBQUdDLEFBT0wsQUFNUSxBQU9KLEFBS04sQUFLTSxTQTFDQSxBQXNDakIsQ0F6RmMsQ0F1RWQsRUE3RkYsQ0EyQkEsQUF5QmlCLENBK0JmLEFBdUJZLEFBVUMsQ0FqR2YsQUFtRXVCLENBN0NMLEVBdENFLEFBZ0dsQixLQTVFRixDQW9GRSxDQVVBLEdBaEVhLE1Ba0NiLENBeERZLENBM0JPLFdBNEJMLEVBMkJXLE9BakJoQixHQTBCWCxFQW5Db0IsSUFVUSxBQStCWCxTQWRILEtBMUJHLE9BMkJzQixHQWpCdEIsS0FUQyxRQW1CTyxRQWxCSixZQTBCTCxPQXpEQSxBQWdDaEIsT0EwQmlCLEdBWUUsSUFyRUYsR0F1Q0YsS0FtQmYsR0FZZSxJQXJFeUIsT0FzRW5CLGlCQUNGLGFBdEVELEVBdUVoQixJQXhCRixVQTlDb0IsU0FxQ0gsU0FwQ0osTUFxQ0QsS0FuQzZDLEtBb0N4QyxlQUNqQixtRkFwQ3FCLG1CQUNELGtCQUNQLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQge1xuICBMaW5rLFxuICBFbGVtZW50LFxuICBFdmVudHMsXG4gIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLFxuICBzY3JvbGxTcHksXG4gIHNjcm9sbGVyLFxufSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBpbWcgZnJvbSAnLi4vYXNzZXRzL3NvbmdMaXN0SGVhZC5zdmcnO1xuXG5jb25zdCBDb2xvckNpcmN1bGFyUHJvZ3Jlc3MgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGNvbG9yOiAnI2YxZjFmMScsXG4gIH0sXG59KShDaXJjdWxhclByb2dyZXNzKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzb25nczogW10sXG4gICAgICBhbHBoYWJldDogW1xuICAgICAgICAnYScsXG4gICAgICAgICdiJyxcbiAgICAgICAgJ2MnLFxuICAgICAgICAnZCcsXG4gICAgICAgICdlJyxcbiAgICAgICAgJ2YnLFxuICAgICAgICAnZycsXG4gICAgICAgICdoJyxcbiAgICAgICAgJ2knLFxuICAgICAgICAnaicsXG4gICAgICAgICdrJyxcbiAgICAgICAgJ2wnLFxuICAgICAgICAnbScsXG4gICAgICAgICduJyxcbiAgICAgICAgJ28nLFxuICAgICAgICAncCcsXG4gICAgICAgICdxJyxcbiAgICAgICAgJ3InLFxuICAgICAgICAncycsXG4gICAgICAgICd0JyxcbiAgICAgICAgJ3UnLFxuICAgICAgICAndicsXG4gICAgICAgICd3JyxcbiAgICAgICAgJ3gnLFxuICAgICAgICAneScsXG4gICAgICAgICd6JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnc3FtcDNqbXdhZWRyJyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnMDFUc0Z4WlIybXJ3X1ZXc3VDdHpaQ0JDektzcnZDVERYOWlzLTZVUHpxVScsXG4gICAgfSk7XG4gICAgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6ICdzb25nTGlzdCcgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29uZ3M6IHJlc3BvbnNlLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnN0YXRlLnNvbmdzLm1hcCgoc29uZywgaSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxwaGFiZXQubWFwKChsZXR0ZXIsIGkpID0+IHtcbiAgICAgICAgaWYgKHNvbmcuZmllbGRzW2xldHRlcl0pIHtcbiAgICAgICAgICByZXR1cm4gc29uZy5maWVsZHNbbGV0dGVyXS5jb250ZW50WzBdLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoc29uZy5jb250ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBzb25nLmNvbnRlbnQubWFwKChzb25nLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvbmcuY29udGVudC5tYXAoKHNvbmcsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17bGV0dGVyfSBpZD17bGV0dGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzb25nLnZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWxwaGFiZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdFdyYXBwZXInPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NvbnRhY3ROZW9uJz5TT05HIExJU1Q8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWxwaGFiZXQnPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxwaGFiZXQubWFwKChsZXR0ZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Rlc3Q2J1xuICAgICAgICAgICAgICAgICAgICB0bz17bGV0dGVyfVxuICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstMjAwfVxuICAgICAgICAgICAgICAgICAgICBpc0R5bmFtaWM9e3RydWV9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtsZXR0ZXJ9YH0+e2xldHRlcn08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdCc+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zb25ncy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxDb2xvckNpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MTAwfSB0aGlja25lc3M9ezV9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAvKiBsaXN0ICovIDxkaXY+YXNkYXM8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHZ3O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjNzYxZjZiLFxuICAgICAgICAgICAgICAwIDAgMC41ZW0gIzc2MWY2YiwgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3RXcmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4dmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxldHRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1NXZoO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWxwaGFiZXQge1xuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1LCAzLCAyMik7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDE1cHgpIHtcbiAgICAgICAgICAgIC5hbHBoYWJldCB7XG4gICAgICAgICAgICAgIHRvcDogNzVweDtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTVweCkge1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgIC5saXN0V3JhcHBlciB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDc5LjMzdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgIHAsXG4gICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFscGhhYmV0IHtcbiAgICAgICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIC5hbHBoYWJldCxcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/list.js */"));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=list.js.98be30b6c3a638895367.hot-update.js.map