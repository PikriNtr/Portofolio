"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"793e8a8a1d49\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MmRmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjc5M2U4YThhMWQ0OVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/HoverShikimori.tsx":
/*!*******************************************!*\
  !*** ./src/components/HoverShikimori.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst HoverImageVideo = ()=>{\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (videoRef.current) {\n            videoRef.current.controls = false;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-lg h-64 relative overflow-hidden\",\n        onMouseEnter: ()=>setIsHovered(true),\n        onMouseLeave: ()=>setIsHovered(false),\n        children: !isHovered ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/shikimori.png\",\n            alt: \"Thumbnail\",\n            className: \"w-full h-full object-cover\"\n        }, void 0, false, {\n            fileName: \"D:\\\\yes\\\\port\\\\src\\\\components\\\\HoverShikimori.tsx\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            src: \"/shikimori.mp4\",\n            autoPlay: true,\n            loop: true,\n            muted: true,\n            className: \"absolute w-full h-full object-bottom bottom-[5.5px] scale-[1.05] object-cover\"\n        }, void 0, false, {\n            fileName: \"D:\\\\yes\\\\port\\\\src\\\\components\\\\HoverShikimori.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\yes\\\\port\\\\src\\\\components\\\\HoverShikimori.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HoverImageVideo, \"kc8+hhKG3+iGUxqsVUryptgPYnY=\");\n_c = HoverImageVideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HoverImageVideo);\nvar _c;\n$RefreshReg$(_c, \"HoverImageVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvdmVyU2hpa2ltb3JpLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUUsa0JBQWtCOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFHM0NDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUksU0FBU0MsT0FBTyxFQUFFO1lBQ3BCRCxTQUFTQyxPQUFPLENBQUNDLFFBQVEsR0FBRztRQUM5QjtJQUNGLEdBQUcsRUFBRTtJQUdMLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFVO1FBQ1ZDLGNBQWMsSUFBTU4sYUFBYTtRQUNqQ08sY0FBYyxJQUFNUCxhQUFhO2tCQUVoQyxDQUFDRCwwQkFDQSw4REFBQ1M7WUFDQ0MsS0FBSTtZQUNKQyxLQUFJO1lBQ0pMLFdBQVU7Ozs7O3NDQUdaLDhEQUFDTTtZQUNDRixLQUFJO1lBQ0pHLFFBQVE7WUFDUkMsSUFBSTtZQUNKQyxLQUFLO1lBQ0xULFdBQVU7Ozs7Ozs7Ozs7O0FBS3BCO0dBbENNUDtLQUFBQTtBQW9DTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib3ZlclNoaWtpbW9yaS50c3g/ZDlhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhvdmVySW1hZ2VWaWRlbyA9ICgpID0+IHtcclxuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIHZpZGVvUmVmLmN1cnJlbnQuY29udHJvbHMgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGcgaC02NCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cclxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICB7IWlzSG92ZXJlZCA/IChcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvc2hpa2ltb3JpLnBuZ1wiIFxyXG4gICAgICAgICAgYWx0PVwiVGh1bWJuYWlsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgc3JjPVwiL3NoaWtpbW9yaS5tcDRcIiBcclxuICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICBsb29wXHJcbiAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBvYmplY3QtYm90dG9tIGJvdHRvbS1bNS41cHhdIHNjYWxlLVsxLjA1XSBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG92ZXJJbWFnZVZpZGVvO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb3ZlckltYWdlVmlkZW8iLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJ2aWRlb1JlZiIsImN1cnJlbnQiLCJjb250cm9scyIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImltZyIsInNyYyIsImFsdCIsInZpZGVvIiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/HoverShikimori.tsx\n"));

/***/ })

});