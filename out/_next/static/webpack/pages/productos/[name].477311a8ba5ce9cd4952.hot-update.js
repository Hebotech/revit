webpackHotUpdate_N_E("pages/productos/[name]",{

/***/ "./src/pages/productos/[name].jsx":
/*!****************************************!*\
  !*** ./src/pages/productos/[name].jsx ***!
  \****************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Molecules_RelatedProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Molecules/RelatedProduct */ \"./src/components/Molecules/RelatedProduct.jsx\");\n\n\nvar _jsxFileName = \"/Users/irving/Desktop/hebotechno/revit/src/pages/productos/[name].jsx\",\n    _this = undefined;\n\n\n\nvar productsView = function productsView(_ref) {\n  var product = _ref.product;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container-fluid text-center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"row m-0 px-5 align-items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-6\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: product.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 12\n        }, _this), product.images.map(function (image, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: image.src,\n            alt: product.name\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 15\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-6\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          dangerouslySetInnerHTML: {\n            __html: product.short_description\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this), product.description !== '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row m-0 justify-content-center align-items-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12\",\n          children: \"About this product\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            dangerouslySetInnerHTML: {\n              __html: product.description\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row m-0 align-items-center justify-content-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            children: \"Complete your look\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this), product.related_ids.map(function (idProduct) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Molecules_RelatedProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            id: idProduct\n          }, idProduct, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, _this);\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsView);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3Rvcy9bbmFtZV0uanN4PzFlMWUiXSwibmFtZXMiOlsicHJvZHVjdHNWaWV3IiwicHJvZHVjdCIsIm5hbWUiLCJpbWFnZXMiLCJtYXAiLCJpbWFnZSIsImluZGV4Iiwic3JjIiwiX19odG1sIiwic2hvcnRfZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInJlbGF0ZWRfaWRzIiwiaWRQcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDcEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxpQ0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsZ0NBQ0c7QUFBQSxvQkFDRUEsT0FBTyxDQUFDQztBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsRUFLSUQsT0FBTyxDQUFDRSxNQUFSLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsOEJBQ2pCO0FBQWlCLGVBQUcsRUFBRUQsS0FBSyxDQUFDRSxHQUE1QjtBQUFpQyxlQUFHLEVBQUdOLE9BQU8sQ0FBQ0M7QUFBL0MsYUFBVUksS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURpQjtBQUFBLFNBQW5CLENBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFXRTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLCtCQUVFO0FBQU0saUNBQXVCLEVBQUU7QUFBQ0Usa0JBQU0sRUFBRVAsT0FBTyxDQUFDUTtBQUFqQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLEVBZ0JJUixPQUFPLENBQUNTLFdBQVIsS0FBd0IsRUFBeEIsZ0JBQ0U7QUFBSyxpQkFBUyxFQUFDLG1EQUFmO0FBQUEsZ0NBQ0Y7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREUsZUFJRjtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNFO0FBQUcsbUNBQXVCLEVBQUU7QUFBQ0Ysb0JBQU0sRUFBRVAsT0FBTyxDQUFDUztBQUFqQjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixHQVFPLEVBeEJYLGVBNEJFO0FBQUssaUJBQVMsRUFBQyxtREFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBT0lULE9BQU8sQ0FBQ1UsV0FBUixDQUFvQlAsR0FBcEIsQ0FBd0IsVUFBQ1EsU0FBRDtBQUFBLDhCQUN0QixxRUFBQyw0RUFBRDtBQUVFLGNBQUUsRUFBRUE7QUFGTixhQUNPQSxTQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHNCO0FBQUEsU0FBeEIsQ0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaURELENBbEREOzs7QUFtRmVaLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Byb2R1Y3Rvcy9bbmFtZV0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbGF0ZWRQcm9kdWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01vbGVjdWxlcy9SZWxhdGVkUHJvZHVjdFwiO1xuXG5jb25zdCBwcm9kdWN0c1ZpZXcgPSAoeyBwcm9kdWN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB0ZXh0LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0wIHB4LTUgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb2R1Y3QuaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxpbWcga2V5PXtpbmRleH0gc3JjPXtpbWFnZS5zcmN9IGFsdD17IHByb2R1Y3QubmFtZX0vPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICBcbiAgICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcHJvZHVjdC5zaG9ydF9kZXNjcmlwdGlvbn19Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9kdWN0LmRlc2NyaXB0aW9uICE9PSAnJyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICBBYm91dCB0aGlzIHByb2R1Y3RcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHByb2R1Y3QuZGVzY3JpcHRpb259fS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pik6ICcnXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0wIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgQ29tcGxldGUgeW91ciBsb29rXG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb2R1Y3QucmVsYXRlZF9pZHMubWFwKChpZFByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgPFJlbGF0ZWRQcm9kdWN0XG4gICAgICAgICAgICAgICAga2V5PXtpZFByb2R1Y3R9XG4gICAgICAgICAgICAgICAgaWQ9e2lkUHJvZHVjdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIFxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3Jldml0LyR7cGFyYW1zLm5hbWV9YClcblxuICBsZXQgeyBkYXRhOiBwcm9kdWN0IH0gPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6e1xuICAgICAgcHJvZHVjdFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpaGViby5vbmxpbmUvcmV2aXQnKVxuICBsZXQgeyBkYXRhOiBwcm9kdWN0cyB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIGxldCBwYXRocyA9IHByb2R1Y3RzLm1hcCgoe3NsdWd9KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBuYW1lOiBzbHVnXG4gICAgICB9XG4gICAgfVxuICB9KSAgXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogdHJ1ZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c1ZpZXc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/productos/[name].jsx\n");

/***/ })

})