webpackHotUpdate_N_E("pages/productos/[name]",{

/***/ "./src/pages/productos/[name].jsx":
/*!****************************************!*\
  !*** ./src/pages/productos/[name].jsx ***!
  \****************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Molecules_RelatedProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Molecules/RelatedProduct */ \"./src/components/Molecules/RelatedProduct.jsx\");\n\n\nvar _jsxFileName = \"/Users/irving/Desktop/hebotechno/revit/src/pages/productos/[name].jsx\",\n    _this = undefined;\n\n\n\nvar productsView = function productsView(_ref) {\n  var product = _ref.product;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container-fluid\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"row m-0\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-6\",\n        children: product.images.map(function (image, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: image.src,\n            alt: product.name\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-6\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: product.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          dangerouslySetInnerHTML: {\n            __html: product.short_description\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this), product.description !== '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row m-0 justify-content-center align-items-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12\",\n          children: \"About this product\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            dangerouslySetInnerHTML: {\n              __html: product.description\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row m-0 align-items-center justify-content-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            children: \"Complete your look\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), product.related_ids.map(function (idProduct) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Molecules_RelatedProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            id: idProduct\n          }, idProduct, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, _this);\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsView);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3Rvcy9bbmFtZV0uanN4PzFlMWUiXSwibmFtZXMiOlsicHJvZHVjdHNWaWV3IiwicHJvZHVjdCIsImltYWdlcyIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJzcmMiLCJuYW1lIiwiX19odG1sIiwic2hvcnRfZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInJlbGF0ZWRfaWRzIiwiaWRQcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDcEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxrQkFFSUEsT0FBTyxDQUFDQyxNQUFSLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsOEJBQ2pCO0FBQWlCLGVBQUcsRUFBRUQsS0FBSyxDQUFDRSxHQUE1QjtBQUFpQyxlQUFHLEVBQUdMLE9BQU8sQ0FBQ007QUFBL0MsYUFBVUYsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURpQjtBQUFBLFNBQW5CO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUU7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxnQ0FDRTtBQUFBLG9CQUNHSixPQUFPLENBQUNNO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQU0saUNBQXVCLEVBQUU7QUFBQ0Msa0JBQU0sRUFBRVAsT0FBTyxDQUFDUTtBQUFqQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLEVBZUlSLE9BQU8sQ0FBQ1MsV0FBUixLQUF3QixFQUF4QixnQkFDRTtBQUFLLGlCQUFTLEVBQUMsbURBQWY7QUFBQSxnQ0FDRjtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERSxlQUlGO0FBQU0sbUJBQVMsRUFBQyxLQUFoQjtBQUFBLGlDQUNFO0FBQUcsbUNBQXVCLEVBQUU7QUFBQ0Ysb0JBQU0sRUFBRVAsT0FBTyxDQUFDUztBQUFqQjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixHQVFPLEVBdkJYLGVBMkJFO0FBQUssaUJBQVMsRUFBQyxtREFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBT0lULE9BQU8sQ0FBQ1UsV0FBUixDQUFvQlIsR0FBcEIsQ0FBd0IsVUFBQ1MsU0FBRDtBQUFBLDhCQUN0QixxRUFBQyw0RUFBRDtBQUVFLGNBQUUsRUFBRUE7QUFGTixhQUNPQSxTQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHNCO0FBQUEsU0FBeEIsQ0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0RELENBakREOzs7QUFrRmVaLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Byb2R1Y3Rvcy9bbmFtZV0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbGF0ZWRQcm9kdWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01vbGVjdWxlcy9SZWxhdGVkUHJvZHVjdFwiO1xuXG5jb25zdCBwcm9kdWN0c1ZpZXcgPSAoeyBwcm9kdWN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm9kdWN0LmltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8aW1nIGtleT17aW5kZXh9IHNyYz17aW1hZ2Uuc3JjfSBhbHQ9eyBwcm9kdWN0Lm5hbWV9Lz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcHJvZHVjdC5zaG9ydF9kZXNjcmlwdGlvbn19Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9kdWN0LmRlc2NyaXB0aW9uICE9PSAnJyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICBBYm91dCB0aGlzIHByb2R1Y3RcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwcm9kdWN0LmRlc2NyaXB0aW9ufX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pOiAnJ1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgIENvbXBsZXRlIHlvdXIgbG9va1xuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm9kdWN0LnJlbGF0ZWRfaWRzLm1hcCgoaWRQcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICAgIDxSZWxhdGVkUHJvZHVjdFxuICAgICAgICAgICAgICAgIGtleT17aWRQcm9kdWN0fVxuICAgICAgICAgICAgICAgIGlkPXtpZFByb2R1Y3R9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9yZXZpdC8ke3BhcmFtcy5uYW1lfWApXG5cbiAgbGV0IHsgZGF0YTogcHJvZHVjdCB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblxuICByZXR1cm4ge1xuICAgIHByb3BzOntcbiAgICAgIHByb2R1Y3RcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaWhlYm8ub25saW5lL3Jldml0JylcbiAgbGV0IHsgZGF0YTogcHJvZHVjdHMgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICBsZXQgcGF0aHMgPSBwcm9kdWN0cy5tYXAoKHtzbHVnfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbmFtZTogc2x1Z1xuICAgICAgfVxuICAgIH1cbiAgfSkgIFxuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IHRydWVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNWaWV3OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/productos/[name].jsx\n");

/***/ })

})