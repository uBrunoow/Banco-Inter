"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/headersLinks/InterLinks.tsx":
/*!*****************************************!*\
  !*** ./src/headersLinks/InterLinks.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InterLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/header.css */ \"(app-client)/./src/styles/header.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction InterLinks(param) {\n    let { isInterOpen, setIsInterOpen } = param;\n    _s();\n    // Abrir os links do header\n    const [isInterLinksOpen, setIsInterLinksOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleInterLinkAccess = ()=>{\n        const InterArrow = document.getElementById(\"InterArrow\");\n        const InterLink = document.getElementById(\"InterLink\");\n        setIsInterLinksOpen(!isInterLinksOpen);\n        // Transicao da inter arrow\n        InterArrow.style.transition = \"all .2s ease-in-out\";\n        if (isInterLinksOpen) {\n            document.body.style.overflowY = \"scroll\";\n            InterArrow.style.transform = \"rotate(0deg)\";\n            InterLink.style.color = \"rgb(22, 22, 22)\";\n        } else {\n            document.body.style.overflowY = \"hidden\";\n            InterArrow.style.transform = \"rotate(-180deg)\";\n            InterLink.style.color = \"#ff7a00\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex\",\n                onClick: handleInterLinkAccess,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-[14px] font-[rgb(22, 22, 22)] font-semibold font-inter\",\n                        id: \"InterLink\",\n                        children: \"O Inter\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: \" text-[#B6B7BB] ml-[5px]\",\n                        id: \"InterArrow\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            isInterLinksOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"fixed left-0 w-full calcHeight z-10 bg-white py-4\",\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.2\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[1428px] h-[500px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex items-center justify-between \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" font-sora font-semibold text-[20px]  leading-[25px] text-[#161616]\",\n                                            children: \"O Inter\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \" cursor-pointer h-7 w-7 text-[#B6B7BB]\",\n                                            onClick: handleInterLinkAccess\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex-wrap flex justify-between items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-6 pr-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" flex px-[15px] py-4 flex-col\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \" mb-6 font-sora font-semibold\",\n                                                    children: \"Governan\\xe7a Corporativa\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"\",\n                                                        className: \" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]\",\n                                                        children: \"Saiba mais\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(InterLinks, \"ZGeixstkMvikqtmxYuiU3DqhJts=\");\n_c = InterLinks;\nvar _c;\n$RefreshReg$(_c, \"InterLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2hlYWRlcnNMaW5rcy9JbnRlckxpbmtzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ087QUFDYjtBQUVMO0FBT2IsU0FBU0ksV0FBVyxLQUFpRDtRQUFqRCxFQUFFQyxXQUFXLEVBQUVDLGNBQWMsRUFBb0IsR0FBakQ7O0lBRWpDLDJCQUEyQjtJQUMzQixNQUFNLENBQUVDLGtCQUFtQkMsb0JBQXFCLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTVELE1BQU1NLHdCQUF3QjtRQUM1QixNQUFNQyxhQUFhQyxTQUFTQyxjQUFjLENBQUM7UUFDM0MsTUFBTUMsWUFBWUYsU0FBU0MsY0FBYyxDQUFDO1FBRTFDSixvQkFBb0IsQ0FBQ0Q7UUFFckIsMkJBQTJCO1FBQzNCRyxXQUFXSSxLQUFLLENBQUNDLFVBQVUsR0FBRztRQUU5QixJQUFLUixrQkFBbUI7WUFDdEJJLFNBQVNLLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxTQUFTLEdBQUc7WUFDaENQLFdBQVdJLEtBQUssQ0FBQ0ksU0FBUyxHQUFHO1lBQzdCTCxVQUFVQyxLQUFLLENBQUNLLEtBQUssR0FBRztRQUMxQixPQUFPO1lBQ0xSLFNBQVNLLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxTQUFTLEdBQUc7WUFDaENQLFdBQVdJLEtBQUssQ0FBQ0ksU0FBUyxHQUFHO1lBQzdCTCxVQUFVQyxLQUFLLENBQUNLLEtBQUssR0FBRztRQUMxQjtJQUNGO0lBRUEscUJBRUU7OzBCQUNFLDhEQUFDQztnQkFBSUMsV0FBVTtnQkFBUUMsU0FBU2I7O2tDQUM5Qiw4REFBQ1c7d0JBQUlDLFdBQVU7d0JBQStERSxJQUFHO2tDQUFZOzs7Ozs7a0NBQzdGLDhEQUFDdEIsb0RBQVdBO3dCQUFDb0IsV0FBVTt3QkFBMkJFLElBQUc7Ozs7Ozs7Ozs7OztZQUl0RGhCLGtDQUNDLDhEQUFDUCxpREFBTUEsQ0FBQ29CLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZHLFNBQVM7b0JBQUVDLFNBQVM7Z0JBQUU7Z0JBQ3RCQyxTQUFTO29CQUFFRCxTQUFTO2dCQUFFO2dCQUN0QlYsWUFBWTtvQkFBRVksVUFBVTtnQkFBSTswQkFFNUIsNEVBQUNQO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNPOzRDQUFFUCxXQUFVO3NEQUFzRTs7Ozs7O3NEQUNuRiw4REFBQ25CLG9EQUFDQTs0Q0FBQ21CLFdBQVU7NENBQXlDQyxTQUFTYjs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR25FLDhEQUFDVztnQ0FBSUMsV0FBVTswQ0FHYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNPO29EQUFFUCxXQUFVOzhEQUFnQzs7Ozs7OzhEQUM3Qyw4REFBQ0Q7OERBQ0MsNEVBQUNTO3dEQUFFQyxNQUFLO3dEQUFHVCxXQUFVO2tFQUFzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbkg7R0F0RXdCakI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlYWRlcnNMaW5rcy9JbnRlckxpbmtzLnRzeD8yYzlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IENoZXZyb25Eb3duLCBYIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0ICdAL3N0eWxlcy9oZWFkZXIuY3NzJ1xyXG5cclxuaW50ZXJmYWNlIEhlYWRlckxpbmtzUHJvcHMge1xyXG4gIGlzSW50ZXJPcGVuOiBib29sZWFuO1xyXG4gIHNldElzSW50ZXJPcGVuOiAoaXNPcGVuOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlckxpbmtzKHsgaXNJbnRlck9wZW4sIHNldElzSW50ZXJPcGVuIH06IEhlYWRlckxpbmtzUHJvcHMpIHtcclxuXHJcbiAgLy8gQWJyaXIgb3MgbGlua3MgZG8gaGVhZGVyXHJcbiAgY29uc3QgWyBpc0ludGVyTGlua3NPcGVuICwgc2V0SXNJbnRlckxpbmtzT3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpIFxyXG5cclxuICBjb25zdCBoYW5kbGVJbnRlckxpbmtBY2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBJbnRlckFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0ludGVyQXJyb3cnKSBhcyBIVE1MSW1hZ2VFbGVtZW50XHJcbiAgICBjb25zdCBJbnRlckxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW50ZXJMaW5rJykgYXMgSFRNTExpbmtFbGVtZW50XHJcblxyXG4gICAgc2V0SXNJbnRlckxpbmtzT3BlbighaXNJbnRlckxpbmtzT3BlbilcclxuXHJcbiAgICAvLyBUcmFuc2ljYW8gZGEgaW50ZXIgYXJyb3dcclxuICAgIEludGVyQXJyb3cuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgLjJzIGVhc2UtaW4tb3V0J1xyXG4gICAgXHJcbiAgICBpZiAoIGlzSW50ZXJMaW5rc09wZW4gKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCdcclxuICAgICAgSW50ZXJBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJ1xyXG4gICAgICBJbnRlckxpbmsuc3R5bGUuY29sb3IgPSAncmdiKDIyLCAyMiwgMjIpJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xyXG4gICAgICBJbnRlckFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTE4MGRlZyknXHJcbiAgICAgIEludGVyTGluay5zdHlsZS5jb2xvciA9ICcjZmY3YTAwJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4XCIgb25DbGljaz17aGFuZGxlSW50ZXJMaW5rQWNjZXNzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LVsxNHB4XSBmb250LVtyZ2IoMjIsIDIyLCAyMildIGZvbnQtc2VtaWJvbGQgZm9udC1pbnRlclwiIGlkPVwiSW50ZXJMaW5rXCI+TyBJbnRlcjwvZGl2PlxyXG4gICAgICAgIDxDaGV2cm9uRG93biBjbGFzc05hbWU9XCIgdGV4dC1bI0I2QjdCQl0gbWwtWzVweF1cIiBpZD1cIkludGVyQXJyb3dcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIHtpc0ludGVyTGlua3NPcGVuICYmIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgbGVmdC0wIHctZnVsbCBjYWxjSGVpZ2h0IHotMTAgYmctd2hpdGUgcHktNFwiXHJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzE0MjhweF0gaC1bNTAwcHhdXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgZm9udC1zb3JhIGZvbnQtc2VtaWJvbGQgdGV4dC1bMjBweF0gIGxlYWRpbmctWzI1cHhdIHRleHQtWyMxNjE2MTZdXCI+TyBJbnRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIGgtNyB3LTcgdGV4dC1bI0I2QjdCQl1cIiBvbkNsaWNrPXtoYW5kbGVJbnRlckxpbmtBY2Nlc3N9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgtd3JhcCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogMcKwIEl0ZW0gZG8gbGluayAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBwci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgcm91bmRlZC1bOHB4XSBoLVsxMzBweF0gdy1bMzMzcHhdIGJvcmRlci15LVsxcHhdIGJvcmRlci14LVsxcHhdIGJvcmRlci1bI2RlZGZlNF1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IHB4LVsxNXB4XSBweS00IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgbWItNiBmb250LXNvcmEgZm9udC1zZW1pYm9sZFwiPkdvdmVybmFuw6dhIENvcnBvcmF0aXZhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIiBmb250LWludGVyIHRleHQtWyNGRjdBMDBdIGZvbnQtc2VtaWJvbGQgdGV4dC1bMTRweF0gbGVhZGluZy1bMTdweF1cIj5TYWliYSBtYWlzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcblxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJtb3Rpb24iLCJDaGV2cm9uRG93biIsIlgiLCJ1c2VTdGF0ZSIsIkludGVyTGlua3MiLCJpc0ludGVyT3BlbiIsInNldElzSW50ZXJPcGVuIiwiaXNJbnRlckxpbmtzT3BlbiIsInNldElzSW50ZXJMaW5rc09wZW4iLCJoYW5kbGVJbnRlckxpbmtBY2Nlc3MiLCJJbnRlckFycm93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkludGVyTGluayIsInN0eWxlIiwidHJhbnNpdGlvbiIsImJvZHkiLCJvdmVyZmxvd1kiLCJ0cmFuc2Zvcm0iLCJjb2xvciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpZCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwicCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/headersLinks/InterLinks.tsx\n"));

/***/ })

});