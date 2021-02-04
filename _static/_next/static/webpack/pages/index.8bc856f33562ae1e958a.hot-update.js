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

  return __jsx(context.Provider, {
    value: [dataa, dataaUrl, filterd, [name, setName], [isOpen, setIsOpen], [output, setOutput]],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_Components_Items__WEBPACK_IMPORTED_MODULE_4__["default"], {
    output: output,
    pages: arry,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  })));
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

          arrUrl.push("https://api.themoviedb.org/3/tv/popular?api_key=03d313e2f922689871a2ffb72bd6be0d&language=en-US&page=".concat(p));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibG93ZXJOYW1lIiwidG9Mb3dlckNhc2UiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkYXRhYSIsImRhdGEiLCJkYXRhYVVybCIsImRhdGFVcmwiLCJ6IiwibWFwIiwiaSIsInJlc3VsdHMiLCJmaWx0ZXJkIiwiZmlsdGVyIiwicSIsInN0YXJ0c1dpdGgiLCJzdWJzdHJpbmciLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJhcnJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiYXJyVXJsIiwiYXJyIiwicCIsInB1c2giLCJheGlvcyIsImdldCIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDUSxJQUFPQSxPQUFPLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQWpCO0FBRU8sU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDNUJDLElBRDRCO0FBQUEsTUFDdkJDLE9BRHVCOztBQUVqQyxNQUFNQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csV0FBTCxFQUFsQjs7QUFGaUMsbUJBR1JKLHNEQUFRLENBQUMsS0FBRCxDQUhBO0FBQUEsTUFHNUJLLE1BSDRCO0FBQUEsTUFHckJDLFNBSHFCOztBQUtuQyxNQUFNQyxLQUFLLEdBQUdSLEtBQUssQ0FBQ1MsSUFBcEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdWLEtBQUssQ0FBQ1csT0FBdkI7QUFFQyxNQUFNQyxDQUFDLEdBQUdKLEtBQUssQ0FBQ0ssR0FBTixDQUFXLFVBQUFDLENBQUMsRUFBSTtBQUN6QixXQUFPQSxDQUFDLENBQUNDLE9BQVQ7QUFDQSxHQUZTLENBQVY7QUFJQSxNQUFNQyxPQUFPLEdBQUdKLENBQUMsQ0FBQ0MsR0FBRixDQUFPLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNHLE1BQUYsQ0FBVSxVQUFBQyxDQUFDO0FBQUEsYUFBS0EsQ0FBQyxDQUFDaEIsSUFBRixDQUFPRyxXQUFQLEdBQXFCYyxVQUFyQixDQUFnQ2YsU0FBUyxDQUFDZ0IsU0FBVixDQUFvQixDQUFwQixFQUFzQixFQUF0QixDQUFoQyxDQUFMO0FBQUEsS0FBWCxDQUFKO0FBQUEsR0FBUixDQUFoQjs7QUFaa0MsbUJBY05uQixzREFBUSxDQUFDZSxPQUFELENBZEY7QUFBQSxNQWMxQkssTUFkMEI7QUFBQSxNQWNuQkMsU0FkbUI7O0FBZ0JuQyxNQUFNQyxJQUFJLEdBQUksQ0FBQ2YsS0FBSyxDQUFDLENBQUQsQ0FBTixFQUFVQSxLQUFLLENBQUMsQ0FBRCxDQUFmLENBQWQsQ0FoQm1DLENBaUJsQzs7QUFRRCxTQUNFLE1BQUMsT0FBRCxDQUFTLFFBQVQ7QUFBa0IsU0FBSyxFQUFFLENBQUNBLEtBQUQsRUFBT0UsUUFBUCxFQUFnQk0sT0FBaEIsRUFBd0IsQ0FBQ2QsSUFBRCxFQUFNQyxPQUFOLENBQXhCLEVBQXVDLENBQUNHLE1BQUQsRUFBUUMsU0FBUixDQUF2QyxFQUEwRCxDQUFDYyxNQUFELEVBQVFDLFNBQVIsQ0FBMUQsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNELE1BQUMseURBQUQ7QUFBTSxVQUFNLEVBQUVELE1BQWQ7QUFBc0IsU0FBSyxFQUFFRSxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREMsQ0FEQSxDQURGO0FBV0Q7O0dBcEN1QnhCLEs7O0tBQUFBLEs7QUFzQ3hCQSxLQUFLLENBQUN5QixlQUFOLHVRQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaEJDLGdCQUZnQixHQUVSLEVBRlE7QUFHaEJDLGFBSGdCLEdBR1gsRUFIVztBQUtiQyxXQUxhLEdBS1YsQ0FMVTs7QUFBQTtBQUFBLGdCQUtQQSxDQUFDLEdBQUcsRUFMRztBQUFBO0FBQUE7QUFBQTs7QUFNakJGLGdCQUFNLENBQUNHLElBQVAsZ0hBQW9IRCxDQUFwSDtBQU5pQix3QkFPbEJELEdBUGtCO0FBQUE7QUFBQSxpQkFPSEcsNENBQUssQ0FBQ0MsR0FBTixnSEFBa0hILENBQWxILEdBQXVISSxJQUF2SCxDQUE0SCxVQUFBdEIsSUFBSTtBQUFBLG1CQUFJQSxJQUFJLENBQUNBLElBQVQ7QUFBQSxXQUFoSSxDQVBHOztBQUFBO0FBQUE7O0FBQUEsc0JBT2RtQixJQVBjOztBQUFBO0FBS0NELFdBQUMsRUFMRjtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyQ0FVaEI7QUFDSmxCLGdCQUFJLEVBQUVpQixHQURGO0FBRUpmLG1CQUFPLEVBQUdjO0FBRk4sV0FWZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGJjODU2ZjMzNTYyYWUxZTk1OGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LCBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9Db21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuLy4uL0NvbXBvbmVudHMvSXRlbXMnO1xuXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiBleHBvcnQgY29uc3QgIGNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XG4gIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGRhdGFhID0gcHJvcHMuZGF0YTtcbiAgY29uc3QgZGF0YWFVcmwgPSBwcm9wcy5kYXRhVXJsXG4gXG4gICBjb25zdCB6ID0gZGF0YWEubWFwKCBpID0+IHtcbiAgICByZXR1cm4gaS5yZXN1bHRzXG4gICB9KVxuXG4gICBjb25zdCBmaWx0ZXJkID0gei5tYXAoIGkgPT4gaS5maWx0ZXIoIHEgPT4gKHEubmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgobG93ZXJOYW1lLnN1YnN0cmluZygwLDIwKSkgKSkpXG5cbiAgICBjb25zdCBbb3V0cHV0LHNldE91dHB1dF0gPSB1c2VTdGF0ZShmaWx0ZXJkKVxuXG4gIGNvbnN0IGFycnkgID0gW2RhdGFhWzBdLGRhdGFhWzFdXSAgXG4gICAvLyBjb21pbmVEYXRhIFxuICAgICBcblxuICAgICAgICBcbiAgICBcbiAgIFxuIFxuIFxuICByZXR1cm4gKFxuICAgIDxjb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbZGF0YWEsZGF0YWFVcmwsZmlsdGVyZCxbbmFtZSxzZXROYW1lXSxbaXNPcGVuLHNldElzT3Blbl0sW291dHB1dCxzZXRPdXRwdXRdXX0+XG4gICAgPExheW91dD5cbiAgIDxJdGVtIG91dHB1dD17b3V0cHV0fSBwYWdlcz17YXJyeX0gIC8+XG4gIFxuICAgIFxuICAgICAgXG4gICAgICBcbiAgICA8L0xheW91dD5cbiAgICA8L2NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKXtcblxuICBjb25zdCBhcnJVcmwgPVtdIFxuICBjb25zdCBhcnIgPVtdXG4gIFxuICAgZm9yKGxldCBwID0xOyBwIDwgMTAgO3ArKyl7XG4gICAgICAgYXJyVXJsLnB1c2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvcG9wdWxhcj9hcGlfa2V5PTAzZDMxM2UyZjkyMjY4OTg3MWEyZmZiNzJiZDZiZTBkJmxhbmd1YWdlPWVuLVVTJnBhZ2U9JHtwfWApXG4gICAgICBhcnIucHVzaChhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvcG9wdWxhcj9hcGlfa2V5PTAzZDMxM2UyZjkyMjY4OTg3MWEyZmZiNzJiZDZiZTBkJmxhbmd1YWdlPWVuLVVTJnBhZ2U9JHtwfWApLnRoZW4oZGF0YSA9PiBkYXRhLmRhdGEpKVxuICAgfSBcbiBcbiAgcmV0dXJue1xuICAgIGRhdGE6IGFycixcbiAgICBkYXRhVXJsIDogYXJyVXJsXG4gICBcbiAgfVxuICAgfVxuICBcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==