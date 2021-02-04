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
/* harmony import */ var _Components_ItemsPag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Components/ItemsPag */ "./Components/ItemsPag.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\with-tailwindcss-app\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext();
function Index(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var lowerName = name.toLowerCase();
  var dataa = props.data;
  var dataaUrl = props.dataUrl;
  var z = dataa.map(function (i) {
    return i.results;
  });
  var filterd = z.map(function (i) {
    return i.filter(function (q) {
      return q.name.toLowerCase().startsWith(lowerName.substring(0, 20));
    });
  }); //  const filterd = 'ahmed'

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(filterd),
      output = _useState3[0],
      setOutput = _useState3[1];

  var arry = [dataa[0], dataa[1]]; // comineData 

  return __jsx(context.Provider, {
    value: [dataa, dataaUrl, filterd, [name, setName], [isOpen, setIsOpen], [output, setOutput]],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_Components_Items__WEBPACK_IMPORTED_MODULE_4__["default"], {
    output: output,
    pages: arry,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }
  }), __jsx(_Components_ItemsPag__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: JSON.parse(localStorage.getItem('zero')),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
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
          return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://api.themoviedb.org/3/tv/popular?api_key=03d313e2f922689871a2ffb72bd6be0d&language=en-US&page=".concat(p)).then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibG93ZXJOYW1lIiwidG9Mb3dlckNhc2UiLCJkYXRhYSIsImRhdGEiLCJkYXRhYVVybCIsImRhdGFVcmwiLCJ6IiwibWFwIiwiaSIsInJlc3VsdHMiLCJmaWx0ZXJkIiwiZmlsdGVyIiwicSIsInN0YXJ0c1dpdGgiLCJzdWJzdHJpbmciLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJhcnJ5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldEluaXRpYWxQcm9wcyIsImFyclVybCIsImFyciIsInAiLCJwdXNoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ1EsSUFBT0EsT0FBTyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixFQUFqQjtBQUVPLFNBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEVBQUQsQ0FESTtBQUFBLE1BQzVCQyxJQUQ0QjtBQUFBLE1BQ3ZCQyxPQUR1Qjs7QUFBQSxtQkFHUkYsc0RBQVEsQ0FBQyxLQUFELENBSEE7QUFBQSxNQUc1QkcsTUFINEI7QUFBQSxNQUdyQkMsU0FIcUI7O0FBSWxDLE1BQU1DLFNBQVMsR0FBR0osSUFBSSxDQUFDSyxXQUFMLEVBQWxCO0FBQ0QsTUFBTUMsS0FBSyxHQUFHUixLQUFLLENBQUNTLElBQXBCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHVixLQUFLLENBQUNXLE9BQXZCO0FBRUMsTUFBTUMsQ0FBQyxHQUFHSixLQUFLLENBQUNLLEdBQU4sQ0FBVyxVQUFBQyxDQUFDLEVBQUk7QUFDekIsV0FBT0EsQ0FBQyxDQUFDQyxPQUFUO0FBQ0EsR0FGUyxDQUFWO0FBSUEsTUFBTUMsT0FBTyxHQUFHSixDQUFDLENBQUNDLEdBQUYsQ0FBTyxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDRyxNQUFGLENBQVUsVUFBQUMsQ0FBQztBQUFBLGFBQUtBLENBQUMsQ0FBQ2hCLElBQUYsQ0FBT0ssV0FBUCxHQUFxQlksVUFBckIsQ0FBZ0NiLFNBQVMsQ0FBQ2MsU0FBVixDQUFvQixDQUFwQixFQUFzQixFQUF0QixDQUFoQyxDQUFMO0FBQUEsS0FBWCxDQUFKO0FBQUEsR0FBUixDQUFoQixDQVprQyxDQWFyQzs7QUFicUMsbUJBY05uQixzREFBUSxDQUFDZSxPQUFELENBZEY7QUFBQSxNQWMxQkssTUFkMEI7QUFBQSxNQWNuQkMsU0FkbUI7O0FBZ0JuQyxNQUFNQyxJQUFJLEdBQUksQ0FBQ2YsS0FBSyxDQUFDLENBQUQsQ0FBTixFQUFVQSxLQUFLLENBQUMsQ0FBRCxDQUFmLENBQWQsQ0FoQm1DLENBaUJsQzs7QUFRRCxTQUNFLE1BQUMsT0FBRCxDQUFTLFFBQVQ7QUFBa0IsU0FBSyxFQUFFLENBQUNBLEtBQUQsRUFBT0UsUUFBUCxFQUFnQk0sT0FBaEIsRUFBd0IsQ0FBQ2QsSUFBRCxFQUFNQyxPQUFOLENBQXhCLEVBQXVDLENBQUNDLE1BQUQsRUFBUUMsU0FBUixDQUF2QyxFQUEwRCxDQUFDZ0IsTUFBRCxFQUFRQyxTQUFSLENBQTFELENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRCxNQUFDLHlEQUFEO0FBQU0sVUFBTSxFQUFFRCxNQUFkO0FBQXNCLFNBQUssRUFBRUUsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURDLEVBRUQsTUFBQyw0REFBRDtBQUFVLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQyxDQURBLENBREY7QUFZRDs7R0FyQ3VCNUIsSzs7S0FBQUEsSztBQXVDeEJBLEtBQUssQ0FBQzZCLGVBQU4sdVFBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVoQkMsZ0JBRmdCLEdBRVIsRUFGUTtBQUdoQkMsYUFIZ0IsR0FHWCxFQUhXO0FBS2JDLFdBTGEsR0FLVixDQUxVOztBQUFBO0FBQUEsZ0JBS1BBLENBQUMsR0FBRyxFQUxHO0FBQUE7QUFBQTtBQUFBOztBQU1qQkYsZ0JBQU0sQ0FBQ0csSUFBUCxnSEFBb0hELENBQXBIO0FBTmlCLHdCQU9sQkQsR0FQa0I7QUFBQTtBQUFBLGlCQU9IRyw0Q0FBSyxDQUFDQyxHQUFOLGdIQUFrSEgsQ0FBbEgsR0FBdUhJLElBQXZILENBQTRILFVBQUExQixJQUFJO0FBQUEsbUJBQUlBLElBQUksQ0FBQ0EsSUFBVDtBQUFBLFdBQWhJLENBUEc7O0FBQUE7QUFBQTs7QUFBQSxzQkFPZHVCLElBUGM7O0FBQUE7QUFLQ0QsV0FBQyxFQUxGO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJDQVVoQjtBQUNKdEIsZ0JBQUksRUFBRXFCLEdBREY7QUFFSm5CLG1CQUFPLEVBQUdrQjtBQUZOLFdBVmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY4MjY3ZDA1MDZmNDYzZDU0NTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCwgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vQ29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi8uLi9Db21wb25lbnRzL0l0ZW1zJztcbmltcG9ydCBJdGVtc1BhZyBmcm9tICcuLy4uL0NvbXBvbmVudHMvSXRlbXNQYWcnO1xuXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiBleHBvcnQgY29uc3QgIGNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XG4gIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gICBcbiAgY29uc3QgW2lzT3BlbixzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKClcbiAgY29uc3QgZGF0YWEgPSBwcm9wcy5kYXRhO1xuICBjb25zdCBkYXRhYVVybCA9IHByb3BzLmRhdGFVcmxcbiBcbiAgIGNvbnN0IHogPSBkYXRhYS5tYXAoIGkgPT4ge1xuICAgIHJldHVybiBpLnJlc3VsdHNcbiAgIH0pXG5cbiAgIGNvbnN0IGZpbHRlcmQgPSB6Lm1hcCggaSA9PiBpLmZpbHRlciggcSA9PiAocS5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChsb3dlck5hbWUuc3Vic3RyaW5nKDAsMjApKSApKSlcbi8vICBjb25zdCBmaWx0ZXJkID0gJ2FobWVkJ1xuICAgIGNvbnN0IFtvdXRwdXQsc2V0T3V0cHV0XSA9IHVzZVN0YXRlKGZpbHRlcmQpXG5cbiAgY29uc3QgYXJyeSAgPSBbZGF0YWFbMF0sZGF0YWFbMV1dICBcbiAgIC8vIGNvbWluZURhdGEgXG4gICAgIFxuXG4gICAgICAgIFxuICAgIFxuICAgXG4gXG4gXG4gIHJldHVybiAoXG4gICAgPGNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tkYXRhYSxkYXRhYVVybCxmaWx0ZXJkLFtuYW1lLHNldE5hbWVdLFtpc09wZW4sc2V0SXNPcGVuXSxbb3V0cHV0LHNldE91dHB1dF1dfT5cbiAgICA8TGF5b3V0PlxuICAgPEl0ZW0gb3V0cHV0PXtvdXRwdXR9IHBhZ2VzPXthcnJ5fSAgLz5cbiAgIDxJdGVtc1BhZyBkYXRhPXtKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd6ZXJvJykpfSAvPlxuICAgIFxuICAgIFxuICAgICAgXG4gICAgICBcbiAgICA8L0xheW91dD5cbiAgICA8L2NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKXtcblxuICBjb25zdCBhcnJVcmwgPVtdIFxuICBjb25zdCBhcnIgPVtdXG4gIFxuICAgZm9yKGxldCBwID0xOyBwIDwgMTAgO3ArKyl7XG4gICAgICAgYXJyVXJsLnB1c2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvcG9wdWxhcj9hcGlfa2V5PTAzZDMxM2UyZjkyMjY4OTg3MWEyZmZiNzJiZDZiZTBkJmxhbmd1YWdlPWVuLVVTJnBhZ2U9JHtwfWApXG4gICAgICBhcnIucHVzaChhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvcG9wdWxhcj9hcGlfa2V5PTAzZDMxM2UyZjkyMjY4OTg3MWEyZmZiNzJiZDZiZTBkJmxhbmd1YWdlPWVuLVVTJnBhZ2U9JHtwfWApLnRoZW4oZGF0YSA9PiBkYXRhLmRhdGEpKVxuICAgfSBcbiBcbiAgcmV0dXJue1xuICAgIGRhdGE6IGFycixcbiAgICBkYXRhVXJsIDogYXJyVXJsXG4gICBcbiAgfVxuICAgfVxuICBcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==