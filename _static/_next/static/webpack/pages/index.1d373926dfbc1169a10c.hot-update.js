webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var C_with_tailwindcss_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_with_tailwindcss_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_with_tailwindcss_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_with_tailwindcss_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var _Components_Items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Components/Items */ "./Components/Items.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\with-tailwindcss-app\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext();
function Index(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var lowerName = name.toLowerCase();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var dataa = props.data;
  var dataaUrl = props.dataUrl;
  var z = dataa.map(function (i) {
    return i.results;
  });
  var filterd = z.map(function (i) {
    return i.filter(function (q) {
      return q.name.toLowerCase().startsWith(lowerName.substring(0, 20));
    });
  });

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(filterd),
      output = _useState3[0],
      setOutput = _useState3[1];

  var arry = [dataa[0], dataa[1]]; // comineData 

  var baseImgUrl = "https://image.tmdb.org/t/p";
  var size = "w500";
  var poster = arry[0].results.poster_path;
  var arrcon = [baseImgUrl, size, poster];
  return __jsx(context.Provider, {
    value: [dataa, dataaUrl, filterd, [name, setName], [isOpen, setIsOpen], [output, setOutput]],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(_Components_Items__WEBPACK_IMPORTED_MODULE_4__["default"], {
    output: output,
    pages: arry,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }), console.log(arry[0])));
}

_s(Index, "iF6uF3+euxOZZ7FwevtIZXurcHU=");

_c = Index;
Index.getInitialProps = /*#__PURE__*/Object(C_with_tailwindcss_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_with_tailwindcss_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var arrUrl, arr, p;
  return C_with_tailwindcss_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          arrUrl = [];
          arr = [];
          p = 1;

        case 3:
          if (!(p < 10)) {
            _context.next = 13;
            break;
          }

          arrUrl.push("https://api.themoviedb.org/3/tv/popular/configuration/?api_key=03d313e2f922689871a2ffb72bd6be0d&language=en-US&page=".concat(p));
          _context.t0 = arr;
          _context.next = 8;
          return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("https://api.themoviedb.org/3/tv/popular?api_key=03d313e2f922689871a2ffb72bd6be0d&language=en-US&page=".concat(p)).then(function (data) {
            return data.data;
          });

        case 8:
          _context.t1 = _context.sent;

          _context.t0.push.call(_context.t0, _context.t1);

        case 10:
          p++;
          _context.next = 3;
          break;

        case 13:
          return _context.abrupt("return", {
            data: arr,
            dataUrl: arrUrl
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibG93ZXJOYW1lIiwidG9Mb3dlckNhc2UiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkYXRhYSIsImRhdGEiLCJkYXRhYVVybCIsImRhdGFVcmwiLCJ6IiwibWFwIiwiaSIsInJlc3VsdHMiLCJmaWx0ZXJkIiwiZmlsdGVyIiwicSIsInN0YXJ0c1dpdGgiLCJzdWJzdHJpbmciLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJhcnJ5IiwiYmFzZUltZ1VybCIsInNpemUiLCJwb3N0ZXIiLCJwb3N0ZXJfcGF0aCIsImFycmNvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJhcnJVcmwiLCJhcnIiLCJwIiwicHVzaCIsImF4aW9zIiwiZ2V0IiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNRLElBQU9BLE9BQU8sZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBakI7QUFFTyxTQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFBQSxNQUM1QkMsSUFENEI7QUFBQSxNQUN2QkMsT0FEdUI7O0FBRWpDLE1BQU1DLFNBQVMsR0FBR0YsSUFBSSxDQUFDRyxXQUFMLEVBQWxCOztBQUZpQyxtQkFHUkosc0RBQVEsQ0FBQyxLQUFELENBSEE7QUFBQSxNQUc1QkssTUFINEI7QUFBQSxNQUdyQkMsU0FIcUI7O0FBS25DLE1BQU1DLEtBQUssR0FBR1IsS0FBSyxDQUFDUyxJQUFwQjtBQUNBLE1BQU1DLFFBQVEsR0FBR1YsS0FBSyxDQUFDVyxPQUF2QjtBQUVDLE1BQU1DLENBQUMsR0FBR0osS0FBSyxDQUFDSyxHQUFOLENBQVcsVUFBQUMsQ0FBQyxFQUFJO0FBQ3pCLFdBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNBLEdBRlMsQ0FBVjtBQUlBLE1BQU1DLE9BQU8sR0FBR0osQ0FBQyxDQUFDQyxHQUFGLENBQU8sVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0csTUFBRixDQUFVLFVBQUFDLENBQUM7QUFBQSxhQUFLQSxDQUFDLENBQUNoQixJQUFGLENBQU9HLFdBQVAsR0FBcUJjLFVBQXJCLENBQWdDZixTQUFTLENBQUNnQixTQUFWLENBQW9CLENBQXBCLEVBQXNCLEVBQXRCLENBQWhDLENBQUw7QUFBQSxLQUFYLENBQUo7QUFBQSxHQUFSLENBQWhCOztBQVprQyxtQkFjTm5CLHNEQUFRLENBQUNlLE9BQUQsQ0FkRjtBQUFBLE1BYzFCSyxNQWQwQjtBQUFBLE1BY25CQyxTQWRtQjs7QUFnQm5DLE1BQU1DLElBQUksR0FBSSxDQUFDZixLQUFLLENBQUMsQ0FBRCxDQUFOLEVBQVVBLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FBZCxDQWhCbUMsQ0FpQmxDOztBQUVELE1BQU1nQixVQUFVLEdBQUcsNEJBQW5CO0FBQ0YsTUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxNQUFNQyxNQUFNLEdBQUdILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUVIsT0FBUixDQUFnQlksV0FBL0I7QUFFSSxNQUFJQyxNQUFNLEdBQUcsQ0FBQ0osVUFBRCxFQUFZQyxJQUFaLEVBQWlCQyxNQUFqQixDQUFiO0FBSUYsU0FDRSxNQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQWtCLFNBQUssRUFBRSxDQUFDbEIsS0FBRCxFQUFPRSxRQUFQLEVBQWdCTSxPQUFoQixFQUF3QixDQUFDZCxJQUFELEVBQU1DLE9BQU4sQ0FBeEIsRUFBdUMsQ0FBQ0csTUFBRCxFQUFRQyxTQUFSLENBQXZDLEVBQTBELENBQUNjLE1BQUQsRUFBUUMsU0FBUixDQUExRCxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0QsTUFBQyx5REFBRDtBQUFNLFVBQU0sRUFBRUQsTUFBZDtBQUFzQixTQUFLLEVBQUVFLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQyxFQUdDTSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBSSxDQUFDLENBQUQsQ0FBaEIsQ0FIRCxDQURBLENBREY7QUFXRDs7R0F0Q3VCeEIsSzs7S0FBQUEsSztBQXdDeEJBLEtBQUssQ0FBQ2dDLGVBQU4sdVFBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVoQkMsZ0JBRmdCLEdBRVIsRUFGUTtBQUdoQkMsYUFIZ0IsR0FHWCxFQUhXO0FBS2JDLFdBTGEsR0FLVixDQUxVOztBQUFBO0FBQUEsZ0JBS1BBLENBQUMsR0FBRyxFQUxHO0FBQUE7QUFBQTtBQUFBOztBQU1qQkYsZ0JBQU0sQ0FBQ0csSUFBUCwrSEFBbUlELENBQW5JO0FBTmlCLHdCQU9sQkQsR0FQa0I7QUFBQTtBQUFBLGlCQU9IRyw0Q0FBSyxDQUFDQyxHQUFOLGdIQUFrSEgsQ0FBbEgsR0FBdUhJLElBQXZILENBQTRILFVBQUE3QixJQUFJO0FBQUEsbUJBQUlBLElBQUksQ0FBQ0EsSUFBVDtBQUFBLFdBQWhJLENBUEc7O0FBQUE7QUFBQTs7QUFBQSxzQkFPZDBCLElBUGM7O0FBQUE7QUFLQ0QsV0FBQyxFQUxGO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJDQVVoQjtBQUNKekIsZ0JBQUksRUFBRXdCLEdBREY7QUFFSnRCLG1CQUFPLEVBQUdxQjtBQUZOLFdBVmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFkMzczOTI2ZGZiYzExNjlhMTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCwgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vQ29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi8uLi9Db21wb25lbnRzL0l0ZW1zJztcblxuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4gZXhwb3J0IGNvbnN0ICBjb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleChwcm9wcykge1xuICBjb25zdCBbbmFtZSxzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKVxuICBjb25zdCBbaXNPcGVuLHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBkYXRhYSA9IHByb3BzLmRhdGE7XG4gIGNvbnN0IGRhdGFhVXJsID0gcHJvcHMuZGF0YVVybFxuIFxuICAgY29uc3QgeiA9IGRhdGFhLm1hcCggaSA9PiB7XG4gICAgcmV0dXJuIGkucmVzdWx0c1xuICAgfSlcblxuICAgY29uc3QgZmlsdGVyZCA9IHoubWFwKCBpID0+IGkuZmlsdGVyKCBxID0+IChxLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGxvd2VyTmFtZS5zdWJzdHJpbmcoMCwyMCkpICkpKVxuXG4gICAgY29uc3QgW291dHB1dCxzZXRPdXRwdXRdID0gdXNlU3RhdGUoZmlsdGVyZClcblxuICBjb25zdCBhcnJ5ICA9IFtkYXRhYVswXSxkYXRhYVsxXV0gIFxuICAgLy8gY29taW5lRGF0YSBcbiAgICAgXG4gIGNvbnN0IGJhc2VJbWdVcmwgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wXCJcbmNvbnN0IHNpemUgPSBcInc1MDBcIlxuY29uc3QgcG9zdGVyID0gYXJyeVswXS5yZXN1bHRzLnBvc3Rlcl9wYXRoXG4gICAgICAgIFxuICAgIHZhciBhcnJjb24gPSBbYmFzZUltZ1VybCxzaXplLHBvc3Rlcl1cbiAgIFxuIFxuIFxuICByZXR1cm4gKFxuICAgIDxjb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbZGF0YWEsZGF0YWFVcmwsZmlsdGVyZCxbbmFtZSxzZXROYW1lXSxbaXNPcGVuLHNldElzT3Blbl0sW291dHB1dCxzZXRPdXRwdXRdXX0+XG4gICAgPExheW91dD5cbiAgIDxJdGVtIG91dHB1dD17b3V0cHV0fSBwYWdlcz17YXJyeX0gIC8+XG4gIFxuICAgIHtjb25zb2xlLmxvZyhhcnJ5WzBdKX1cbiAgICAgIFxuICAgICAgXG4gICAgPC9MYXlvdXQ+XG4gICAgPC9jb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCl7XG5cbiAgY29uc3QgYXJyVXJsID1bXSBcbiAgY29uc3QgYXJyID1bXVxuICBcbiAgIGZvcihsZXQgcCA9MTsgcCA8IDEwIDtwKyspe1xuICAgICAgIGFyclVybC5wdXNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2L3BvcHVsYXIvY29uZmlndXJhdGlvbi8/YXBpX2tleT0wM2QzMTNlMmY5MjI2ODk4NzFhMmZmYjcyYmQ2YmUwZCZsYW5ndWFnZT1lbi1VUyZwYWdlPSR7cH1gKVxuICAgICAgYXJyLnB1c2goYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2L3BvcHVsYXI/YXBpX2tleT0wM2QzMTNlMmY5MjI2ODk4NzFhMmZmYjcyYmQ2YmUwZCZsYW5ndWFnZT1lbi1VUyZwYWdlPSR7cH1gKS50aGVuKGRhdGEgPT4gZGF0YS5kYXRhKSlcbiAgIH0gXG5cbiAgcmV0dXJue1xuICAgIGRhdGE6IGFycixcbiAgICBkYXRhVXJsIDogYXJyVXJsXG4gICBcbiAgfVxuICAgfVxuICBcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==