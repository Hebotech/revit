webpackHotUpdate_N_E("pages/productos/[name]",{

/***/ "./src/components/Molecules/RelatedProduct.jsx":
/*!*****************************************************!*\
  !*** ./src/components/Molecules/RelatedProduct.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/Users/irving/Desktop/hebotechno/revit/src/components/Molecules/RelatedProduct.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction RelatedProduct(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('pending'),\n      asyncStatus = _useState[0],\n      setAsyncStatus = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('fetchingData'),\n      fetchData = _useState2[0],\n      setFetchData = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var bringProduct = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var response, _yield$response$json, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return fetch(\"http://localhost:9000/revit/product/\".concat(id));\n\n              case 3:\n                response = _context.sent;\n                _context.next = 6;\n                return response.json();\n\n              case 6:\n                _yield$response$json = _context.sent;\n                data = _yield$response$json.data;\n                setAsyncStatus('resolved');\n                setFetchData(data);\n                _context.next = 16;\n                break;\n\n              case 12:\n                _context.prev = 12;\n                _context.t0 = _context[\"catch\"](0);\n                setAsyncStatus('error');\n                setFetchData(_context.t0);\n\n              case 16:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 12]]);\n      }));\n\n      return function bringProduct() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    bringProduct();\n  }, []);\n\n  switch (asyncStatus) {\n    case 'pending':\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"col\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this);\n\n    case 'resolved':\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"col\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/productos/\".concat(fetchData.slug),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n              src: fetchData.images[0].src,\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"small\", {\n              children: fetchData.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 55\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, fetchData.slug, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this);\n\n    case 'error':\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this);\n  }\n}\n\n_s(RelatedProduct, \"mepMwftlRN72aO59Eoey19KMn+w=\");\n\n_c = RelatedProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RelatedProduct);\n\nvar _c;\n\n$RefreshReg$(_c, \"RelatedProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9sZWN1bGVzL1JlbGF0ZWRQcm9kdWN0LmpzeD9mYjY0Il0sIm5hbWVzIjpbIlJlbGF0ZWRQcm9kdWN0IiwiaWQiLCJ1c2VTdGF0ZSIsImFzeW5jU3RhdHVzIiwic2V0QXN5bmNTdGF0dXMiLCJmZXRjaERhdGEiLCJzZXRGZXRjaERhdGEiLCJ1c2VFZmZlY3QiLCJicmluZ1Byb2R1Y3QiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzbHVnIiwiaW1hZ2VzIiwic3JjIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsU0FBRCxDQURoQjtBQUFBLE1BQ3ZCQyxXQUR1QjtBQUFBLE1BQ1ZDLGNBRFU7O0FBQUEsbUJBRUlGLHNEQUFRLENBQUMsY0FBRCxDQUZaO0FBQUEsTUFFdkJHLFNBRnVCO0FBQUEsTUFFWkMsWUFGWTs7QUFJOUJDLHlEQUFTLENBQUMsWUFBTTtBQUVkLFFBQUlDLFlBQVk7QUFBQSxtTUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVNQyxLQUFLLCtDQUF3Q1IsRUFBeEMsRUFGWDs7QUFBQTtBQUVYUyx3QkFGVztBQUFBO0FBQUEsdUJBR01BLFFBQVEsQ0FBQ0MsSUFBVCxFQUhOOztBQUFBO0FBQUE7QUFHVEMsb0JBSFMsd0JBR1RBLElBSFM7QUFJZlIsOEJBQWMsQ0FBQyxVQUFELENBQWQ7QUFDQUUsNEJBQVksQ0FBQ00sSUFBRCxDQUFaO0FBTGU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFPZlIsOEJBQWMsQ0FBQyxPQUFELENBQWQ7QUFDQUUsNEJBQVksYUFBWjs7QUFSZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFaRSxZQUFZO0FBQUE7QUFBQTtBQUFBLE9BQWhCOztBQVlBQSxnQkFBWTtBQUNiLEdBZlEsRUFlTixFQWZNLENBQVQ7O0FBaUJBLFVBQVFMLFdBQVI7QUFDRSxTQUFLLFNBQUw7QUFDRSwwQkFDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGOztBQU1GLFNBQUssVUFBTDtBQUNFLDBCQUNFO0FBQTBCLGlCQUFTLEVBQUMsS0FBcEM7QUFBQSwrQkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksdUJBQWdCRSxTQUFTLENBQUNRLElBQTFCLENBQVY7QUFBQSxpQ0FBNEM7QUFBQSxvQ0FDMUM7QUFBSyxpQkFBRyxFQUFFUixTQUFTLENBQUNTLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0JDLEdBQTlCO0FBQW1DLGlCQUFHLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEMEMsZUFFMUM7QUFBQSx3QkFDR1YsU0FBUyxDQUFDVztBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVVgsU0FBUyxDQUFDUSxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7O0FBVUYsU0FBSyxPQUFMO0FBQ0UsMEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBcEJKO0FBd0JEOztHQTdDUWIsYzs7S0FBQUEsYztBQStDTUEsNkVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2xlY3VsZXMvUmVsYXRlZFByb2R1Y3QuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZnVuY3Rpb24gUmVsYXRlZFByb2R1Y3QoeyBpZCB9KSB7XG4gIGNvbnN0IFthc3luY1N0YXR1cywgc2V0QXN5bmNTdGF0dXNdID0gdXNlU3RhdGUoJ3BlbmRpbmcnKVxuICBjb25zdCBbZmV0Y2hEYXRhLCBzZXRGZXRjaERhdGFdID0gdXNlU3RhdGUoJ2ZldGNoaW5nRGF0YScpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBcbiAgICBsZXQgYnJpbmdQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9yZXZpdC9wcm9kdWN0LyR7aWR9YClcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIHNldEFzeW5jU3RhdHVzKCdyZXNvbHZlZCcpXG4gICAgICAgIHNldEZldGNoRGF0YShkYXRhKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0QXN5bmNTdGF0dXMoJ2Vycm9yJylcbiAgICAgICAgc2V0RmV0Y2hEYXRhKGVycm9yKVxuICAgICAgfVxuICAgIH1cblxuICAgIGJyaW5nUHJvZHVjdCgpXG4gIH0sIFtdKVxuXG4gIHN3aXRjaCAoYXN5bmNTdGF0dXMpIHtcbiAgICBjYXNlICdwZW5kaW5nJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIFxuICAgIGNhc2UgJ3Jlc29sdmVkJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtmZXRjaERhdGEuc2x1Z30gY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0b3MvJHtmZXRjaERhdGEuc2x1Z31gfT48YT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtmZXRjaERhdGEuaW1hZ2VzWzBdLnNyY30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAge2ZldGNoRGF0YS5uYW1lfVxuICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICA8L2E+PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0ZWRQcm9kdWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Molecules/RelatedProduct.jsx\n");

/***/ })

})