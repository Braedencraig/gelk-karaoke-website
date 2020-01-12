webpackHotUpdate("static/development/pages/shows.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/core-js/library/fn/object/values.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-to-array.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-to-array.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.values.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./pages/shows.js":
/*!************************!*\
  !*** ./pages/shows.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shows; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/shows.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");




var Shows =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Shows, _React$Component);

  function Shows(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Shows);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Shows).call(this, props));
    _this.state = {
      shows: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Shows, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = contentful.createClient({
        space: 'sqmp3jmwaedr',
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      });
      client.getEntries({
        content_type: 'upcomingShows'
      }).then(function (response) {
        _this2.setState({
          shows: response.items
        });
      });
      var shows = this.state.shows.map(function (shows, i) {
        var realShows = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(shows.fields);

        realShows.map(function (show, i) {
          _this2.setState({
            upcomingShows: show.content[1].content[0].value,
            links: show.content[0].content[1].data.uri
          }); // return (
          //   <>
          //     <p>
          //       <Link
          //         href={{ pathname: `${show.content[0].content[1].data.uri}` }}
          //       >
          //         <a>{show.content[1].content[0].value}</a>{' '}
          //       </Link>
          //     </p>
          //   </>
          // );

        }); // return (
        //   <div>
        //     <p>adsadsds</p>
        //   </div>
        // );
        // Object.values(shows.fields).map((show, i) => {
        //   return (
        //     <>
        //       <p>
        //         <Link
        //           href={{ pathname: `${show.content[0].content[1].data.uri}` }}
        //         >
        //           <a>{show.content[1].content[0].value}</a>{' '}
        //         </Link>
        //       </p>
        //     </>
        //   );
        // });
      }); // const shows = this.state.links.map((links, i) => {
      //   return links.fields.link.content.map((links, i) => {
      //     return links.content.map((links, i) => {
      //       return this.state.shows.map((shows, i) => {
      //         return shows.fields.shows.content.map((shows, i) => {
      //           return (
      //             <>
      //               <Link href={{ pathname: `${links.value}` }}>
      //                 <a>{shows.content[0].value}</a>
      //               </Link>
      //             </>
      //           );
      //         });
      //       });
      //     });
      //   });
      // });
    }
  }, {
    key: "render",
    value: function render() {
      // const shows = this.state.shows.map((shows, i) => {
      //   const realShows = Object.values(shows.fields);
      //   realShows.map((show, i) => {
      //     this.setState({
      //       upcomingShows: show.content[1].content[0].value,
      //       links: show.content[0].content[1].data.uri,
      //     });
      //     // return (
      //     //   <>
      //     //     <p>
      //     //       <Link
      //     //         href={{ pathname: `${show.content[0].content[1].data.uri}` }}
      //     //       >
      //     //         <a>{show.content[1].content[0].value}</a>{' '}
      //     //       </Link>
      //     //     </p>
      //     //   </>
      //     // );
      //   });
      //   // return (
      //   //   <div>
      //   //     <p>adsadsds</p>
      //   //   </div>
      //   // );
      //   // Object.values(shows.fields).map((show, i) => {
      //   //   return (
      //   //     <>
      //   //       <p>
      //   //         <Link
      //   //           href={{ pathname: `${show.content[0].content[1].data.uri}` }}
      //   //         >
      //   //           <a>{show.content[1].content[0].value}</a>{' '}
      //   //         </Link>
      //   //       </p>
      //   //     </>
      //   //   );
      //   // });
      // });
      // // const shows = this.state.links.map((links, i) => {
      // //   return links.fields.link.content.map((links, i) => {
      // //     return links.content.map((links, i) => {
      // //       return this.state.shows.map((shows, i) => {
      // //         return shows.fields.shows.content.map((shows, i) => {
      // //           return (
      // //             <>
      // //               <Link href={{ pathname: `${links.value}` }}>
      // //                 <a>{shows.content[0].value}</a>
      // //               </Link>
      // //             </>
      // //           );
      // //         });
      // //       });
      // //     });
      // //   });
      // // });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1393880905" + " " + 'listWrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1393880905" + " " + 'contactNeon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "UPCOMING SHOWS"), __jsx("div", {
        className: "jsx-1393880905" + " " + 'shows',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, shows)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1393880905",
        __self: this
      }, "h1.jsx-1393880905{white-space:nowrap;margin:0 -5px 0 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;line-height:1;font-size:7vw;font-family:'Roboto',sans-serif;font-weight:100;text-align:center;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444, 0 0 0.5em #ff4444,0 0 0.1em #ff4444,0 10px 3px #000;}.listWrapper.jsx-1393880905{margin-top:25vh;}.shows.jsx-1393880905{font-family:'Roboto',sans-serif;width:600px;margin:0 auto;text-align:center;font-size:26px;color:#f1f1f1;}p.jsx-1393880905{color:#f1f1f1;font-size:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-1393880905{-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;margin:10px;color:#fee;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #ff4444, 0 0 0.5em #ff4444,0 0 0.1em #ff4444,0 10px 3px #000;}a.jsx-1393880905:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvc2hvd3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0lvQixBQUdnQyxBQWFILEFBSWlCLEFBU25CLEFBT08sQUFTSyxjQWZYLEVBYmpCLEdBYm9CLFVBMkJMLEdBVkQsS0FoQk8sT0FpQkwsTUFlVyxRQWRQLEVBdUJwQixlQVJjLENBZEcsV0FlSixJQWRHLE9BZ0J5QyxLQVRoQyxFQU56Qix5QkFwQmdCLGNBQ0EsY0FDbUIsZ0NBQ2pCLFdBaUNsQixDQVRBLElBdkJvQixrQkFDUCxXQUU0Qyx1R0FDekQiLCJmaWxlIjoiL1VzZXJzL2JyYWVkZW5jcmFpZy9EZXNrdG9wL0dFTEstU0lURS9wYWdlcy9zaG93cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5jb25zdCBjb250ZW50ZnVsID0gcmVxdWlyZSgnY29udGVudGZ1bCcpO1xuaW1wb3J0IFRlc3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0SGVhZGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6ICdzcW1wM2ptd2FlZHInLFxuICAgICAgYWNjZXNzVG9rZW46ICcwMVRzRnhaUjJtcndfVldzdUN0elpDQkN6S3NydkNURFg5aXMtNlVQenFVJyxcbiAgICB9KTtcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ3VwY29taW5nU2hvd3MnIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dzOiByZXNwb25zZS5pdGVtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IHNob3dzID0gdGhpcy5zdGF0ZS5zaG93cy5tYXAoKHNob3dzLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWFsU2hvd3MgPSBPYmplY3QudmFsdWVzKHNob3dzLmZpZWxkcyk7XG4gICAgICByZWFsU2hvd3MubWFwKChzaG93LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHVwY29taW5nU2hvd3M6IHNob3cuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlLFxuICAgICAgICAgIGxpbmtzOiBzaG93LmNvbnRlbnRbMF0uY29udGVudFsxXS5kYXRhLnVyaSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJldHVybiAoXG4gICAgICAgIC8vICAgPD5cbiAgICAgICAgLy8gICAgIDxwPlxuICAgICAgICAvLyAgICAgICA8TGlua1xuICAgICAgICAvLyAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6IGAke3Nob3cuY29udGVudFswXS5jb250ZW50WzFdLmRhdGEudXJpfWAgfX1cbiAgICAgICAgLy8gICAgICAgPlxuICAgICAgICAvLyAgICAgICAgIDxhPntzaG93LmNvbnRlbnRbMV0uY29udGVudFswXS52YWx1ZX08L2E+eycgJ31cbiAgICAgICAgLy8gICAgICAgPC9MaW5rPlxuICAgICAgICAvLyAgICAgPC9wPlxuICAgICAgICAvLyAgIDwvPlxuICAgICAgICAvLyApO1xuICAgICAgfSk7XG4gICAgICAvLyByZXR1cm4gKFxuICAgICAgLy8gICA8ZGl2PlxuICAgICAgLy8gICAgIDxwPmFkc2Fkc2RzPC9wPlxuICAgICAgLy8gICA8L2Rpdj5cbiAgICAgIC8vICk7XG4gICAgICAvLyBPYmplY3QudmFsdWVzKHNob3dzLmZpZWxkcykubWFwKChzaG93LCBpKSA9PiB7XG4gICAgICAvLyAgIHJldHVybiAoXG4gICAgICAvLyAgICAgPD5cbiAgICAgIC8vICAgICAgIDxwPlxuICAgICAgLy8gICAgICAgICA8TGlua1xuICAgICAgLy8gICAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6IGAke3Nob3cuY29udGVudFswXS5jb250ZW50WzFdLmRhdGEudXJpfWAgfX1cbiAgICAgIC8vICAgICAgICAgPlxuICAgICAgLy8gICAgICAgICAgIDxhPntzaG93LmNvbnRlbnRbMV0uY29udGVudFswXS52YWx1ZX08L2E+eycgJ31cbiAgICAgIC8vICAgICAgICAgPC9MaW5rPlxuICAgICAgLy8gICAgICAgPC9wPlxuICAgICAgLy8gICAgIDwvPlxuICAgICAgLy8gICApO1xuICAgICAgLy8gfSk7XG4gICAgfSk7XG4gICAgLy8gY29uc3Qgc2hvd3MgPSB0aGlzLnN0YXRlLmxpbmtzLm1hcCgobGlua3MsIGkpID0+IHtcbiAgICAvLyAgIHJldHVybiBsaW5rcy5maWVsZHMubGluay5jb250ZW50Lm1hcCgobGlua3MsIGkpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGxpbmtzLmNvbnRlbnQubWFwKChsaW5rcywgaSkgPT4ge1xuICAgIC8vICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNob3dzLm1hcCgoc2hvd3MsIGkpID0+IHtcbiAgICAvLyAgICAgICAgIHJldHVybiBzaG93cy5maWVsZHMuc2hvd3MuY29udGVudC5tYXAoKHNob3dzLCBpKSA9PiB7XG4gICAgLy8gICAgICAgICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgICAgICAgPD5cbiAgICAvLyAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAke2xpbmtzLnZhbHVlfWAgfX0+XG4gICAgLy8gICAgICAgICAgICAgICAgIDxhPntzaG93cy5jb250ZW50WzBdLnZhbHVlfTwvYT5cbiAgICAvLyAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAvLyAgICAgICAgICAgICA8Lz5cbiAgICAvLyAgICAgICAgICAgKTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICAgIH0pO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnN0IHNob3dzID0gdGhpcy5zdGF0ZS5zaG93cy5tYXAoKHNob3dzLCBpKSA9PiB7XG4gICAgLy8gICBjb25zdCByZWFsU2hvd3MgPSBPYmplY3QudmFsdWVzKHNob3dzLmZpZWxkcyk7XG4gICAgLy8gICByZWFsU2hvd3MubWFwKChzaG93LCBpKSA9PiB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgIHVwY29taW5nU2hvd3M6IHNob3cuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlLFxuICAgIC8vICAgICAgIGxpbmtzOiBzaG93LmNvbnRlbnRbMF0uY29udGVudFsxXS5kYXRhLnVyaSxcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIC8vIHJldHVybiAoXG4gICAgLy8gICAgIC8vICAgPD5cbiAgICAvLyAgICAgLy8gICAgIDxwPlxuICAgIC8vICAgICAvLyAgICAgICA8TGlua1xuICAgIC8vICAgICAvLyAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6IGAke3Nob3cuY29udGVudFswXS5jb250ZW50WzFdLmRhdGEudXJpfWAgfX1cbiAgICAvLyAgICAgLy8gICAgICAgPlxuICAgIC8vICAgICAvLyAgICAgICAgIDxhPntzaG93LmNvbnRlbnRbMV0uY29udGVudFswXS52YWx1ZX08L2E+eycgJ31cbiAgICAvLyAgICAgLy8gICAgICAgPC9MaW5rPlxuICAgIC8vICAgICAvLyAgICAgPC9wPlxuICAgIC8vICAgICAvLyAgIDwvPlxuICAgIC8vICAgICAvLyApO1xuICAgIC8vICAgfSk7XG4gICAgLy8gICAvLyByZXR1cm4gKFxuICAgIC8vICAgLy8gICA8ZGl2PlxuICAgIC8vICAgLy8gICAgIDxwPmFkc2Fkc2RzPC9wPlxuICAgIC8vICAgLy8gICA8L2Rpdj5cbiAgICAvLyAgIC8vICk7XG4gICAgLy8gICAvLyBPYmplY3QudmFsdWVzKHNob3dzLmZpZWxkcykubWFwKChzaG93LCBpKSA9PiB7XG4gICAgLy8gICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAvLyAgICAgPD5cbiAgICAvLyAgIC8vICAgICAgIDxwPlxuICAgIC8vICAgLy8gICAgICAgICA8TGlua1xuICAgIC8vICAgLy8gICAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6IGAke3Nob3cuY29udGVudFswXS5jb250ZW50WzFdLmRhdGEudXJpfWAgfX1cbiAgICAvLyAgIC8vICAgICAgICAgPlxuICAgIC8vICAgLy8gICAgICAgICAgIDxhPntzaG93LmNvbnRlbnRbMV0uY29udGVudFswXS52YWx1ZX08L2E+eycgJ31cbiAgICAvLyAgIC8vICAgICAgICAgPC9MaW5rPlxuICAgIC8vICAgLy8gICAgICAgPC9wPlxuICAgIC8vICAgLy8gICAgIDwvPlxuICAgIC8vICAgLy8gICApO1xuICAgIC8vICAgLy8gfSk7XG4gICAgLy8gfSk7XG4gICAgLy8gLy8gY29uc3Qgc2hvd3MgPSB0aGlzLnN0YXRlLmxpbmtzLm1hcCgobGlua3MsIGkpID0+IHtcbiAgICAvLyAvLyAgIHJldHVybiBsaW5rcy5maWVsZHMubGluay5jb250ZW50Lm1hcCgobGlua3MsIGkpID0+IHtcbiAgICAvLyAvLyAgICAgcmV0dXJuIGxpbmtzLmNvbnRlbnQubWFwKChsaW5rcywgaSkgPT4ge1xuICAgIC8vIC8vICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNob3dzLm1hcCgoc2hvd3MsIGkpID0+IHtcbiAgICAvLyAvLyAgICAgICAgIHJldHVybiBzaG93cy5maWVsZHMuc2hvd3MuY29udGVudC5tYXAoKHNob3dzLCBpKSA9PiB7XG4gICAgLy8gLy8gICAgICAgICAgIHJldHVybiAoXG4gICAgLy8gLy8gICAgICAgICAgICAgPD5cbiAgICAvLyAvLyAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAke2xpbmtzLnZhbHVlfWAgfX0+XG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIDxhPntzaG93cy5jb250ZW50WzBdLnZhbHVlfTwvYT5cbiAgICAvLyAvLyAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAvLyAvLyAgICAgICAgICAgICA8Lz5cbiAgICAvLyAvLyAgICAgICAgICAgKTtcbiAgICAvLyAvLyAgICAgICAgIH0pO1xuICAgIC8vIC8vICAgICAgIH0pO1xuICAgIC8vIC8vICAgICB9KTtcbiAgICAvLyAvLyAgIH0pO1xuICAgIC8vIC8vIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0V3JhcHBlcic+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY29udGFjdE5lb24nPlVQQ09NSU5HIFNIT1dTPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2hvd3MnPntzaG93c308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC01cHggMCAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZWU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCwgMCAwIDFlbSAjZmY0NDQ0LFxuICAgICAgICAgICAgICAwIDAgMC41ZW0gI2ZmNDQ0NCwgMCAwIDAuMWVtICNmZjQ0NDQsIDAgMTBweCAzcHggIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3RXcmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1dmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNob3dzIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZlZTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4LCAwIDAgMWVtICNmZjQ0NDQsXG4gICAgICAgICAgICAgIDAgMCAwLjVlbSAjZmY0NDQ0LCAwIDAgMC4xZW0gI2ZmNDQ0NCwgMCAxMHB4IDNweCAjMDAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/shows.js */"));
    }
  }]);

  return Shows;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=shows.js.da33c27f55524e85a687.hot-update.js.map