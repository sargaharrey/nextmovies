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
    imgY: arrcon,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibG93ZXJOYW1lIiwidG9Mb3dlckNhc2UiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkYXRhYSIsImRhdGEiLCJkYXRhYVVybCIsImRhdGFVcmwiLCJ6IiwibWFwIiwiaSIsInJlc3VsdHMiLCJmaWx0ZXJkIiwiZmlsdGVyIiwicSIsInN0YXJ0c1dpdGgiLCJzdWJzdHJpbmciLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJhcnJ5IiwiYmFzZUltZ1VybCIsInNpemUiLCJwb3N0ZXIiLCJwb3N0ZXJfcGF0aCIsImFycmNvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJhcnJVcmwiLCJhcnIiLCJwIiwicHVzaCIsImF4aW9zIiwiZ2V0IiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNRLElBQU9BLE9BQU8sZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBakI7QUFFTyxTQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFBQSxNQUM1QkMsSUFENEI7QUFBQSxNQUN2QkMsT0FEdUI7O0FBRWpDLE1BQU1DLFNBQVMsR0FBR0YsSUFBSSxDQUFDRyxXQUFMLEVBQWxCOztBQUZpQyxtQkFHUkosc0RBQVEsQ0FBQyxLQUFELENBSEE7QUFBQSxNQUc1QkssTUFINEI7QUFBQSxNQUdyQkMsU0FIcUI7O0FBS25DLE1BQU1DLEtBQUssR0FBR1IsS0FBSyxDQUFDUyxJQUFwQjtBQUNBLE1BQU1DLFFBQVEsR0FBR1YsS0FBSyxDQUFDVyxPQUF2QjtBQUVDLE1BQU1DLENBQUMsR0FBR0osS0FBSyxDQUFDSyxHQUFOLENBQVcsVUFBQUMsQ0FBQyxFQUFJO0FBQ3pCLFdBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNBLEdBRlMsQ0FBVjtBQUlBLE1BQU1DLE9BQU8sR0FBR0osQ0FBQyxDQUFDQyxHQUFGLENBQU8sVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0csTUFBRixDQUFVLFVBQUFDLENBQUM7QUFBQSxhQUFLQSxDQUFDLENBQUNoQixJQUFGLENBQU9HLFdBQVAsR0FBcUJjLFVBQXJCLENBQWdDZixTQUFTLENBQUNnQixTQUFWLENBQW9CLENBQXBCLEVBQXNCLEVBQXRCLENBQWhDLENBQUw7QUFBQSxLQUFYLENBQUo7QUFBQSxHQUFSLENBQWhCOztBQVprQyxtQkFjTm5CLHNEQUFRLENBQUNlLE9BQUQsQ0FkRjtBQUFBLE1BYzFCSyxNQWQwQjtBQUFBLE1BY25CQyxTQWRtQjs7QUFnQm5DLE1BQU1DLElBQUksR0FBSSxDQUFDZixLQUFLLENBQUMsQ0FBRCxDQUFOLEVBQVVBLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FBZCxDQWhCbUMsQ0FpQmxDOztBQUVELE1BQU1nQixVQUFVLEdBQUcsNEJBQW5CO0FBQ0YsTUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxNQUFNQyxNQUFNLEdBQUdILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUVIsT0FBUixDQUFnQlksV0FBL0I7QUFFSSxNQUFJQyxNQUFNLEdBQUcsQ0FBQ0osVUFBRCxFQUFZQyxJQUFaLEVBQWlCQyxNQUFqQixDQUFiO0FBSUYsU0FDRSxNQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQWtCLFNBQUssRUFBRSxDQUFDbEIsS0FBRCxFQUFPRSxRQUFQLEVBQWdCTSxPQUFoQixFQUF3QixDQUFDZCxJQUFELEVBQU1DLE9BQU4sQ0FBeEIsRUFBdUMsQ0FBQ0csTUFBRCxFQUFRQyxTQUFSLENBQXZDLEVBQTBELENBQUNjLE1BQUQsRUFBUUMsU0FBUixDQUExRCxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0QsTUFBQyx5REFBRDtBQUFNLFVBQU0sRUFBRUQsTUFBZDtBQUFzQixTQUFLLEVBQUVFLElBQTdCO0FBQW1DLFFBQUksRUFBRUssTUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURDLEVBR0NDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFJLENBQUMsQ0FBRCxDQUFoQixDQUhELENBREEsQ0FERjtBQVdEOztHQXRDdUJ4QixLOztLQUFBQSxLO0FBd0N4QkEsS0FBSyxDQUFDZ0MsZUFBTix1UUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWhCQyxnQkFGZ0IsR0FFUixFQUZRO0FBR2hCQyxhQUhnQixHQUdYLEVBSFc7QUFLYkMsV0FMYSxHQUtWLENBTFU7O0FBQUE7QUFBQSxnQkFLUEEsQ0FBQyxHQUFHLEVBTEc7QUFBQTtBQUFBO0FBQUE7O0FBTWpCRixnQkFBTSxDQUFDRyxJQUFQLCtIQUFtSUQsQ0FBbkk7QUFOaUIsd0JBT2xCRCxHQVBrQjtBQUFBO0FBQUEsaUJBT0hHLDRDQUFLLENBQUNDLEdBQU4sZ0hBQWtISCxDQUFsSCxHQUF1SEksSUFBdkgsQ0FBNEgsVUFBQTdCLElBQUk7QUFBQSxtQkFBSUEsSUFBSSxDQUFDQSxJQUFUO0FBQUEsV0FBaEksQ0FQRzs7QUFBQTtBQUFBOztBQUFBLHNCQU9kMEIsSUFQYzs7QUFBQTtBQUtDRCxXQUFDLEVBTEY7QUFBQTtBQUFBOztBQUFBO0FBQUEsMkNBVWhCO0FBQ0p6QixnQkFBSSxFQUFFd0IsR0FERjtBQUVKdEIsbUJBQU8sRUFBR3FCO0FBRk4sV0FWZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGY4MDZkNjNkZTc2OGZmM2Y0NTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LCBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9Db21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuLy4uL0NvbXBvbmVudHMvSXRlbXMnO1xuXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiBleHBvcnQgY29uc3QgIGNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XG4gIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGRhdGFhID0gcHJvcHMuZGF0YTtcbiAgY29uc3QgZGF0YWFVcmwgPSBwcm9wcy5kYXRhVXJsXG4gXG4gICBjb25zdCB6ID0gZGF0YWEubWFwKCBpID0+IHtcbiAgICByZXR1cm4gaS5yZXN1bHRzXG4gICB9KVxuXG4gICBjb25zdCBmaWx0ZXJkID0gei5tYXAoIGkgPT4gaS5maWx0ZXIoIHEgPT4gKHEubmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgobG93ZXJOYW1lLnN1YnN0cmluZygwLDIwKSkgKSkpXG5cbiAgICBjb25zdCBbb3V0cHV0LHNldE91dHB1dF0gPSB1c2VTdGF0ZShmaWx0ZXJkKVxuXG4gIGNvbnN0IGFycnkgID0gW2RhdGFhWzBdLGRhdGFhWzFdXSAgXG4gICAvLyBjb21pbmVEYXRhIFxuICAgICBcbiAgY29uc3QgYmFzZUltZ1VybCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3BcIlxuY29uc3Qgc2l6ZSA9IFwidzUwMFwiXG5jb25zdCBwb3N0ZXIgPSBhcnJ5WzBdLnJlc3VsdHMucG9zdGVyX3BhdGhcbiAgICAgICAgXG4gICAgdmFyIGFycmNvbiA9IFtiYXNlSW1nVXJsLHNpemUscG9zdGVyXVxuICAgXG4gXG4gXG4gIHJldHVybiAoXG4gICAgPGNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tkYXRhYSxkYXRhYVVybCxmaWx0ZXJkLFtuYW1lLHNldE5hbWVdLFtpc09wZW4sc2V0SXNPcGVuXSxbb3V0cHV0LHNldE91dHB1dF1dfT5cbiAgICA8TGF5b3V0PlxuICAgPEl0ZW0gb3V0cHV0PXtvdXRwdXR9IHBhZ2VzPXthcnJ5fSBpbWdZPXthcnJjb259IC8+XG4gIFxuICAgIHtjb25zb2xlLmxvZyhhcnJ5WzBdKX1cbiAgICAgIFxuICAgICAgXG4gICAgPC9MYXlvdXQ+XG4gICAgPC9jb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCl7XG5cbiAgY29uc3QgYXJyVXJsID1bXSBcbiAgY29uc3QgYXJyID1bXVxuICBcbiAgIGZvcihsZXQgcCA9MTsgcCA8IDEwIDtwKyspe1xuICAgICAgIGFyclVybC5wdXNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2L3BvcHVsYXIvY29uZmlndXJhdGlvbi8/YXBpX2tleT0wM2QzMTNlMmY5MjI2ODk4NzFhMmZmYjcyYmQ2YmUwZCZsYW5ndWFnZT1lbi1VUyZwYWdlPSR7cH1gKVxuICAgICAgYXJyLnB1c2goYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2L3BvcHVsYXI/YXBpX2tleT0wM2QzMTNlMmY5MjI2ODk4NzFhMmZmYjcyYmQ2YmUwZCZsYW5ndWFnZT1lbi1VUyZwYWdlPSR7cH1gKS50aGVuKGRhdGEgPT4gZGF0YS5kYXRhKSlcbiAgIH0gXG5cbiAgcmV0dXJue1xuICAgIGRhdGE6IGFycixcbiAgICBkYXRhVXJsIDogYXJyVXJsXG4gICBcbiAgfVxuICAgfVxuICBcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==