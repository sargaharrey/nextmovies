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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      page = _useState3[0],
      setPage = _useState3[1];

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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(filterd),
      output = _useState4[0],
      setOutput = _useState4[1];

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

_s(Index, "Uge4YevssWsp6nB85Zd5/398P14=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibG93ZXJOYW1lIiwidG9Mb3dlckNhc2UiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJwYWdlIiwic2V0UGFnZSIsImRhdGFhIiwiZGF0YSIsImRhdGFhVXJsIiwiZGF0YVVybCIsInoiLCJtYXAiLCJpIiwicmVzdWx0cyIsImZpbHRlcmQiLCJmaWx0ZXIiLCJxIiwic3RhcnRzV2l0aCIsInN1YnN0cmluZyIsIm91dHB1dCIsInNldE91dHB1dCIsImFycnkiLCJnZXRJbml0aWFsUHJvcHMiLCJhcnJVcmwiLCJhcnIiLCJwIiwicHVzaCIsImF4aW9zIiwiZ2V0IiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNRLElBQU9BLE9BQU8sZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBakI7QUFFTyxTQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFBQSxNQUM1QkMsSUFENEI7QUFBQSxNQUN2QkMsT0FEdUI7O0FBRWpDLE1BQU1DLFNBQVMsR0FBR0YsSUFBSSxDQUFDRyxXQUFMLEVBQWxCOztBQUZpQyxtQkFHUkosc0RBQVEsQ0FBQyxLQUFELENBSEE7QUFBQSxNQUc1QkssTUFINEI7QUFBQSxNQUdyQkMsU0FIcUI7O0FBQUEsbUJBSVpOLHNEQUFRLENBQUMsQ0FBRCxDQUpJO0FBQUEsTUFJNUJPLElBSjRCO0FBQUEsTUFJdkJDLE9BSnVCOztBQUtuQyxNQUFNQyxLQUFLLEdBQUdWLEtBQUssQ0FBQ1csSUFBcEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdaLEtBQUssQ0FBQ2EsT0FBdkI7QUFFQyxNQUFNQyxDQUFDLEdBQUdKLEtBQUssQ0FBQ0ssR0FBTixDQUFXLFVBQUFDLENBQUMsRUFBSTtBQUN6QixXQUFPQSxDQUFDLENBQUNDLE9BQVQ7QUFDQSxHQUZTLENBQVY7QUFJQSxNQUFNQyxPQUFPLEdBQUdKLENBQUMsQ0FBQ0MsR0FBRixDQUFPLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNHLE1BQUYsQ0FBVSxVQUFBQyxDQUFDO0FBQUEsYUFBS0EsQ0FBQyxDQUFDbEIsSUFBRixDQUFPRyxXQUFQLEdBQXFCZ0IsVUFBckIsQ0FBZ0NqQixTQUFTLENBQUNrQixTQUFWLENBQW9CLENBQXBCLEVBQXNCLEVBQXRCLENBQWhDLENBQUw7QUFBQSxLQUFYLENBQUo7QUFBQSxHQUFSLENBQWhCOztBQVprQyxtQkFjTnJCLHNEQUFRLENBQUNpQixPQUFELENBZEY7QUFBQSxNQWMxQkssTUFkMEI7QUFBQSxNQWNuQkMsU0FkbUI7O0FBZ0JuQyxNQUFNQyxJQUFJLEdBQUksQ0FBQ2YsS0FBSyxDQUFDLENBQUQsQ0FBTixFQUFVQSxLQUFLLENBQUMsQ0FBRCxDQUFmLENBQWQsQ0FoQm1DLENBaUJsQzs7QUFRRCxTQUNFLE1BQUMsT0FBRCxDQUFTLFFBQVQ7QUFBa0IsU0FBSyxFQUFFLENBQUNBLEtBQUQsRUFBT0UsUUFBUCxFQUFnQk0sT0FBaEIsRUFBd0IsQ0FBQ2hCLElBQUQsRUFBTUMsT0FBTixDQUF4QixFQUF1QyxDQUFDRyxNQUFELEVBQVFDLFNBQVIsQ0FBdkMsRUFBMEQsQ0FBQ2dCLE1BQUQsRUFBUUMsU0FBUixDQUExRCxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0QsTUFBQyx5REFBRDtBQUFNLFVBQU0sRUFBRUQsTUFBZDtBQUFzQixTQUFLLEVBQUVFLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQyxDQURBLENBREY7QUFXRDs7R0FwQ3VCMUIsSzs7S0FBQUEsSztBQXNDeEJBLEtBQUssQ0FBQzJCLGVBQU4sdVFBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVoQkMsZ0JBRmdCLEdBRVIsRUFGUTtBQUdoQkMsYUFIZ0IsR0FHWCxFQUhXO0FBS2JDLFdBTGEsR0FLVixDQUxVOztBQUFBO0FBQUEsZ0JBS1BBLENBQUMsR0FBRyxFQUxHO0FBQUE7QUFBQTtBQUFBOztBQU1qQkYsZ0JBQU0sQ0FBQ0csSUFBUCxnSEFBb0hELENBQXBIO0FBTmlCLHdCQU9sQkQsR0FQa0I7QUFBQTtBQUFBLGlCQU9IRyw0Q0FBSyxDQUFDQyxHQUFOLGdIQUFrSEgsQ0FBbEgsR0FBdUhJLElBQXZILENBQTRILFVBQUF0QixJQUFJO0FBQUEsbUJBQUlBLElBQUksQ0FBQ0EsSUFBVDtBQUFBLFdBQWhJLENBUEc7O0FBQUE7QUFBQTs7QUFBQSxzQkFPZG1CLElBUGM7O0FBQUE7QUFLQ0QsV0FBQyxFQUxGO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJDQVVoQjtBQUNKbEIsZ0JBQUksRUFBRWlCLEdBREY7QUFFSmYsbUJBQU8sRUFBR2M7QUFGTixXQVZnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZTJiM2IzM2FmN2JiNDBmYjBhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsIENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL0NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBJdGVtIGZyb20gJy4vLi4vQ29tcG9uZW50cy9JdGVtcyc7XG5cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuIGV4cG9ydCBjb25zdCAgY29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcbiAgY29uc3QgW25hbWUsc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKClcbiAgY29uc3QgW2lzT3BlbixzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwYWdlLHNldFBhZ2VdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgZGF0YWEgPSBwcm9wcy5kYXRhO1xuICBjb25zdCBkYXRhYVVybCA9IHByb3BzLmRhdGFVcmxcbiBcbiAgIGNvbnN0IHogPSBkYXRhYS5tYXAoIGkgPT4ge1xuICAgIHJldHVybiBpLnJlc3VsdHNcbiAgIH0pXG5cbiAgIGNvbnN0IGZpbHRlcmQgPSB6Lm1hcCggaSA9PiBpLmZpbHRlciggcSA9PiAocS5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChsb3dlck5hbWUuc3Vic3RyaW5nKDAsMjApKSApKSlcblxuICAgIGNvbnN0IFtvdXRwdXQsc2V0T3V0cHV0XSA9IHVzZVN0YXRlKGZpbHRlcmQpXG5cbiAgY29uc3QgYXJyeSAgPSBbZGF0YWFbMF0sZGF0YWFbMV1dICBcbiAgIC8vIGNvbWluZURhdGEgXG4gICAgIFxuXG4gICAgICAgIFxuICAgIFxuICAgXG4gXG4gXG4gIHJldHVybiAoXG4gICAgPGNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tkYXRhYSxkYXRhYVVybCxmaWx0ZXJkLFtuYW1lLHNldE5hbWVdLFtpc09wZW4sc2V0SXNPcGVuXSxbb3V0cHV0LHNldE91dHB1dF1dfT5cbiAgICA8TGF5b3V0PlxuICAgPEl0ZW0gb3V0cHV0PXtvdXRwdXR9IHBhZ2VzPXthcnJ5fSAgLz5cbiAgXG4gICAgXG4gICAgICBcbiAgICAgIFxuICAgIDwvTGF5b3V0PlxuICAgIDwvY29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpe1xuXG4gIGNvbnN0IGFyclVybCA9W10gXG4gIGNvbnN0IGFyciA9W11cbiAgXG4gICBmb3IobGV0IHAgPTE7IHAgPCAxMCA7cCsrKXtcbiAgICAgICBhcnJVcmwucHVzaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90di9wb3B1bGFyP2FwaV9rZXk9MDNkMzEzZTJmOTIyNjg5ODcxYTJmZmI3MmJkNmJlMGQmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0ke3B9YClcbiAgICAgIGFyci5wdXNoKGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90di9wb3B1bGFyP2FwaV9rZXk9MDNkMzEzZTJmOTIyNjg5ODcxYTJmZmI3MmJkNmJlMGQmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0ke3B9YCkudGhlbihkYXRhID0+IGRhdGEuZGF0YSkpXG4gICB9IFxuIFxuICByZXR1cm57XG4gICAgZGF0YTogYXJyLFxuICAgIGRhdGFVcmwgOiBhcnJVcmxcbiAgIFxuICB9XG4gICB9XG4gIFxuXG4iXSwic291cmNlUm9vdCI6IiJ9