"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\n\n// const DUMMY_MEETUPS = [\n//   {\n//     id: \"m1\",\n//     title: \"My First MeetUp\",\n//     image: \"https://dhavalilama.com/wp-content/uploads/2019/02/IMG_0511.jpg\",\n//     address: \"Some address 5, 12345 Some City\",\n//     description: \"This is a first meetup!\",\n//   },\n//   {\n//     id: \"m2\",\n//     title: \"A Second MeetUp\",\n//     image:\n//       \"https://cdn.shopify.com/s/files/1/0343/5246/3917/files/GINAYEOLANDSCAPE-4-768x512.jpg\",\n//     address: \"Some address 5, 12345 Some City\",\n//     description: \"Another meetup!\",\n//   },\n//   {\n//     id: \"m3\",\n//     title: \"My Last MeetUp\",\n//     image:\n//       \"https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg\",\n//     address: \"Some address 5, 12345 Some City\",\n//     description: \"Last meetup!\",\n//   },\n// ];\nfunction HomePage(props) {\n    return;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            meetups: props.meetups\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\aeros.DESKTOP-OTLNJ38\\\\OneDrive\\\\Escritorio\\\\React Course\\\\Udemy\\\\NextJS MeetUps\\\\pages\\\\index.js\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBRTZCO0FBSzFELDBCQUEwQjtBQUMxQixNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLGdDQUFnQztBQUNoQyxnRkFBZ0Y7QUFDaEYsa0RBQWtEO0FBQ2xELDhDQUE4QztBQUM5QyxPQUFPO0FBQ1AsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQixnQ0FBZ0M7QUFDaEMsYUFBYTtBQUNiLGlHQUFpRztBQUNqRyxrREFBa0Q7QUFDbEQsc0NBQXNDO0FBQ3RDLE9BQU87QUFDUCxNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLCtCQUErQjtBQUMvQixhQUFhO0FBQ2IseUhBQXlIO0FBQ3pILGtEQUFrRDtBQUNsRCxtQ0FBbUM7QUFDbkMsT0FBTztBQUNQLEtBQUs7QUFHTCxTQUFTRSxTQUFTQyxLQUFLO0lBQ25CO2tCQUNFO2tCQUVFLDRFQUFDRixzRUFBVUE7WUFBQ0csU0FBU0QsTUFBTUMsT0FBTzs7Ozs7OztBQUUxQztLQU5TRjs7QUE2Q1QsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcblxyXG5jb25zdCBVUkkgPVxyXG4gIFwibW9uZ29kYitzcnY6Ly9hZG1pbjpub21lbGFzZUB0ZXN0Lml2cHZ0bnEubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPVRlc3RcIjtcclxuXHJcbi8vIGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwibTFcIixcclxuLy8gICAgIHRpdGxlOiBcIk15IEZpcnN0IE1lZXRVcFwiLFxyXG4vLyAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9kaGF2YWxpbGFtYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDIvSU1HXzA1MTEuanBnXCIsXHJcbi8vICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCIsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogXCJtMlwiLFxyXG4vLyAgICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldFVwXCIsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDM0My81MjQ2LzM5MTcvZmlsZXMvR0lOQVlFT0xBTkRTQ0FQRS00LTc2OHg1MTIuanBnXCIsXHJcbi8vICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIkFub3RoZXIgbWVldHVwIVwiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwibTNcIixcclxuLy8gICAgIHRpdGxlOiBcIk15IExhc3QgTWVldFVwXCIsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgXCJodHRwczovL3d3dy5hZG9yYW1hLmNvbS9hbGMvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvbGFuZHNjYXBlLXBob3RvZ3JhcGh5LXRpcHMteW9zZW1pdGUtdmFsbGV5LWZlYXR1cmUuanBnXCIsXHJcbi8vICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIkxhc3QgbWVldHVwIVwiLFxyXG4vLyAgIH0sXHJcbi8vIF07XHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICAgIHJldHVybiBcclxuICAgICAgPD5cclxuICAgICAgXHJcbiAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz5cclxuICAgICAgPC8+O1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHJcbi8vICAgICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICAgIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQU1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFVSSSk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcblxyXG4gIGNsaWVudC5jbG9zZSgpXHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKG1lZXR1cCA9PiAoe1xyXG4gICAgICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDFcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwibmFtZXMiOlsiSGVhZCIsIk1lZXR1cExpc3QiLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});