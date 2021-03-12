webpackHotUpdate_N_E("pages/productos/[name]",{

/***/ "./src/pages/productos/[name].jsx":
/*!****************************************!*\
  !*** ./src/pages/productos/[name].jsx ***!
  \****************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Molecules_RelatedProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Molecules/RelatedProduct */ \"./src/components/Molecules/RelatedProduct.jsx\");\n\n\nvar _jsxFileName = \"/Users/irving/Desktop/hebotechno/revit/src/pages/productos/[name].jsx\",\n    _this = undefined;\n\n\n\nvar productsView = function productsView(_ref) {\n  var product = _ref.product;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container-fluid\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"row m-0 p-5 align-items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-6\",\n        children: product.images.map(function (image, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: image.src,\n            alt: product.name\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-6\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: product.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          dangerouslySetInnerHTML: {\n            __html: product.short_description\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this), product.description !== '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row m-0 justify-content-center align-items-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12\",\n          children: \"About this product\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            dangerouslySetInnerHTML: {\n              __html: product.description\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row m-0 align-items-center justify-content-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            children: \"Complete your look\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), product.related_ids.map(function (idProduct) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Molecules_RelatedProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            id: idProduct\n          }, idProduct, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, _this);\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsView);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3Rvcy9bbmFtZV0uanN4PzFlMWUiXSwibmFtZXMiOlsicHJvZHVjdHNWaWV3IiwicHJvZHVjdCIsImltYWdlcyIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJzcmMiLCJuYW1lIiwiX19odG1sIiwic2hvcnRfZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInJlbGF0ZWRfaWRzIiwiaWRQcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDcEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxnQ0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsa0JBRUlBLE9BQU8sQ0FBQ0MsTUFBUixDQUFlQyxHQUFmLENBQW1CLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDhCQUNqQjtBQUFpQixlQUFHLEVBQUVELEtBQUssQ0FBQ0UsR0FBNUI7QUFBaUMsZUFBRyxFQUFHTCxPQUFPLENBQUNNO0FBQS9DLGFBQVVGLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFuQjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVFFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsZ0NBQ0U7QUFBQSxvQkFDR0osT0FBTyxDQUFDTTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFNLGlDQUF1QixFQUFFO0FBQUNDLGtCQUFNLEVBQUVQLE9BQU8sQ0FBQ1E7QUFBakI7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixFQWVJUixPQUFPLENBQUNTLFdBQVIsS0FBd0IsRUFBeEIsZ0JBQ0U7QUFBSyxpQkFBUyxFQUFDLG1EQUFmO0FBQUEsZ0NBQ0Y7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREUsZUFJRjtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNFO0FBQUcsbUNBQXVCLEVBQUU7QUFBQ0Ysb0JBQU0sRUFBRVAsT0FBTyxDQUFDUztBQUFqQjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixHQVFPLEVBdkJYLGVBMkJFO0FBQUssaUJBQVMsRUFBQyxtREFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBT0lULE9BQU8sQ0FBQ1UsV0FBUixDQUFvQlIsR0FBcEIsQ0FBd0IsVUFBQ1MsU0FBRDtBQUFBLDhCQUN0QixxRUFBQyw0RUFBRDtBQUVFLGNBQUUsRUFBRUE7QUFGTixhQUNPQSxTQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHNCO0FBQUEsU0FBeEIsQ0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0RELENBakREOzs7QUFrRmVaLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Byb2R1Y3Rvcy9bbmFtZV0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbGF0ZWRQcm9kdWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01vbGVjdWxlcy9SZWxhdGVkUHJvZHVjdFwiO1xuXG5jb25zdCBwcm9kdWN0c1ZpZXcgPSAoeyBwcm9kdWN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0wIHAtNSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb2R1Y3QuaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxpbWcga2V5PXtpbmRleH0gc3JjPXtpbWFnZS5zcmN9IGFsdD17IHByb2R1Y3QubmFtZX0vPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwcm9kdWN0LnNob3J0X2Rlc2NyaXB0aW9ufX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHByb2R1Y3QuZGVzY3JpcHRpb24gIT09ICcnID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0wIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgIEFib3V0IHRoaXMgcHJvZHVjdFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcHJvZHVjdC5kZXNjcmlwdGlvbn19Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KTogJydcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTAgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICBDb21wbGV0ZSB5b3VyIGxvb2tcbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvZHVjdC5yZWxhdGVkX2lkcy5tYXAoKGlkUHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICA8UmVsYXRlZFByb2R1Y3RcbiAgICAgICAgICAgICAgICBrZXk9e2lkUHJvZHVjdH1cbiAgICAgICAgICAgICAgICBpZD17aWRQcm9kdWN0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjkwMDAvcmV2aXQvJHtwYXJhbXMubmFtZX1gKVxuXG4gIGxldCB7IGRhdGE6IHByb2R1Y3QgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczp7XG4gICAgICBwcm9kdWN0XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGloZWJvLm9ubGluZS9yZXZpdCcpXG4gIGxldCB7IGRhdGE6IHByb2R1Y3RzIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgbGV0IHBhdGhzID0gcHJvZHVjdHMubWFwKCh7c2x1Z30pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG5hbWU6IHNsdWdcbiAgICAgIH1cbiAgICB9XG4gIH0pICBcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiB0cnVlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzVmlldzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/productos/[name].jsx\n");

/***/ })

})