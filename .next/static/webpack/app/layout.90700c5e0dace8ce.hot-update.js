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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"73f9179ab089\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MmRmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjczZjkxNzlhYjA4OVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/HoverShikimori.tsx":
/*!*******************************************!*\
  !*** ./src/components/HoverShikimori.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst HoverImageVideo = ()=>{\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        window.location.href = \"https://www.instagram.com/p/C0OTPihLtxl\";\n    };\n    const handleVideoLoad = ()=>{\n        if (videoRef.current) {\n            videoRef.current.volume = 0.5; // Set volume to 50%\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-lg h-64 relative overflow-hidden\",\n        onMouseEnter: ()=>setIsHovered(true),\n        onMouseLeave: ()=>setIsHovered(false),\n        onClick: handleClick,\n        children: !isHovered ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/shikimori.png\",\n            alt: \"Thumbnail\",\n            className: \"w-full h-full object-cover\"\n        }, void 0, false, {\n            fileName: \"D:\\\\yes\\\\port\\\\src\\\\components\\\\HoverShikimori.tsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            src: \"/shikimori.mp4\",\n            autoPlay: true,\n            loop: true,\n            className: \"absolute w-full h-full object-bottom bottom-[44px] scale-[1.05] object-cover\"\n        }, void 0, false, {\n            fileName: \"D:\\\\yes\\\\port\\\\src\\\\components\\\\HoverShikimori.tsx\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\yes\\\\port\\\\src\\\\components\\\\HoverShikimori.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HoverImageVideo, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n_c = HoverImageVideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HoverImageVideo);\nvar _c;\n$RefreshReg$(_c, \"HoverImageVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvdmVyU2hpa2ltb3JpLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFekMsTUFBTUMsa0JBQWtCOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTUksY0FBYztRQUNsQkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7SUFDekI7SUFFQSxNQUFNQyxrQkFBa0I7UUFDdEIsSUFBSUMsU0FBU0MsT0FBTyxFQUFFO1lBQ3BCRCxTQUFTQyxPQUFPLENBQUNDLE1BQU0sR0FBRyxLQUFNLG9CQUFvQjtRQUN0RDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsY0FBYyxJQUFNWCxhQUFhO1FBQ2pDWSxjQUFjLElBQU1aLGFBQWE7UUFDakNhLFNBQVNaO2tCQUVSLENBQUNGLDBCQUNBLDhEQUFDZTtZQUNDQyxLQUFJO1lBQ0pDLEtBQUk7WUFDSk4sV0FBVTs7Ozs7c0NBR1osOERBQUNPO1lBQ0NGLEtBQUk7WUFDSkcsUUFBUTtZQUNSQyxJQUFJO1lBQ0pULFdBQVU7Ozs7Ozs7Ozs7O0FBS3BCO0dBbkNNWjtLQUFBQTtBQXFDTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib3ZlclNoaWtpbW9yaS50c3g/ZDlhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIb3ZlckltYWdlVmlkZW8gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3AvQzBPVFBpaEx0eGxcIjtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVZpZGVvTG9hZCA9ICgpID0+IHtcclxuICAgIGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIHZpZGVvUmVmLmN1cnJlbnQudm9sdW1lID0gMC41OyAgLy8gU2V0IHZvbHVtZSB0byA1MCVcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGcgaC02NCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cclxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgID5cclxuICAgICAgeyFpc0hvdmVyZWQgPyAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiL3NoaWtpbW9yaS5wbmdcIiBcclxuICAgICAgICAgIGFsdD1cIlRodW1ibmFpbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8dmlkZW9cclxuICAgICAgICAgIHNyYz1cIi9zaGlraW1vcmkubXA0XCIgXHJcbiAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBvYmplY3QtYm90dG9tIGJvdHRvbS1bNDRweF0gc2NhbGUtWzEuMDVdIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3ZlckltYWdlVmlkZW87Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG92ZXJJbWFnZVZpZGVvIiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwiaGFuZGxlQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJoYW5kbGVWaWRlb0xvYWQiLCJ2aWRlb1JlZiIsImN1cnJlbnQiLCJ2b2x1bWUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwidmlkZW8iLCJhdXRvUGxheSIsImxvb3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/HoverShikimori.tsx\n"));

/***/ })

});