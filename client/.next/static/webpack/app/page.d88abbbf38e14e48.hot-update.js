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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InterLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction InterLinks() {\n    _s();\n    // Abrir os links do header\n    const [isLinksOpen, setIsLinksOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleLinkAcess = ()=>{\n        const InterArrow = document.getElementById(\"InterArrow\");\n        const InterLink = document.getElementById(\"InterLink\");\n        setIsLinksOpen(!isLinksOpen);\n        // Transicao da inter arrow\n        InterArrow.style.transition = \"all .2s ease-in-out\";\n        if (isLinksOpen) {\n            document.body.style.overflowY = \"scroll\";\n            InterArrow.style.transform = \"rotate(0deg)\";\n            InterLink.style.color = \"rgb(22, 22, 22)\";\n        } else {\n            document.body.style.overflowY = \"hidden\";\n            InterArrow.style.transform = \"rotate(-180deg)\";\n            InterLink.style.color = \"#ff7a00\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex\",\n                onClick: handleLinkAcess,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-[14px] font-[rgb(22, 22, 22)] font-semibold font-inter\",\n                        id: \"InterLink\",\n                        children: \"O Inter\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" text-[#B6B7BB] ml-[5px]\",\n                        id: \"InterArrow\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            isLinksOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"fixed top-[114px] left-0 w-full calcHeight z-10 bg-white py-4\",\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.2\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[1428px] h-[500px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex items-center justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" font-sora font-semibold text-[20px]  leading-[25px] text-[#161616]\",\n                                            children: \"O Inter\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            className: \" cursor-pointer h-7 w-7 text-[#B6B7BB]\",\n                                            onClick: handleLinkAcess\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex-wrap flex justify-between items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-6 pr-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" flex px-[15px] py-4 flex-col\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \" mb-6 font-sora font-semibold\",\n                                                    children: \"Governan\\xe7a Corporativa\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"\",\n                                                        className: \" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]\",\n                                                        children: \"Saiba mais\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(InterLinks, \"03szHCU15oXULmPXaFASrrYSQn8=\");\n_c = InterLinks;\nvar _c;\n$RefreshReg$(_c, \"InterLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2hlYWRlcnNMaW5rcy9JbnRlckxpbmtzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTztBQUNiO0FBRWpCLFNBQVNJOztJQUV0QiwyQkFBMkI7SUFDM0IsTUFBTSxDQUFFQyxhQUFjQyxlQUFnQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUVsRCxNQUFNSSxrQkFBa0I7UUFDdEIsTUFBTUMsYUFBYUMsU0FBU0MsY0FBYyxDQUFDO1FBQzNDLE1BQU1DLFlBQVlGLFNBQVNDLGNBQWMsQ0FBQztRQUUxQ0osZUFBZSxDQUFDRDtRQUVoQiwyQkFBMkI7UUFDM0JHLFdBQVdJLEtBQUssQ0FBQ0MsVUFBVSxHQUFHO1FBRTlCLElBQUtSLGFBQWM7WUFDakJJLFNBQVNLLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxTQUFTLEdBQUc7WUFDaENQLFdBQVdJLEtBQUssQ0FBQ0ksU0FBUyxHQUFHO1lBQzdCTCxVQUFVQyxLQUFLLENBQUNLLEtBQUssR0FBRztRQUMxQixPQUFPO1lBQ0xSLFNBQVNLLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxTQUFTLEdBQUc7WUFDaENQLFdBQVdJLEtBQUssQ0FBQ0ksU0FBUyxHQUFHO1lBQzdCTCxVQUFVQyxLQUFLLENBQUNLLEtBQUssR0FBRztRQUMxQjtJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBSUMsV0FBVTtnQkFBUUMsU0FBU2I7O2tDQUNoQyw4REFBQ1c7d0JBQUlDLFdBQVU7d0JBQStERSxJQUFHO2tDQUFZOzs7Ozs7a0NBQzdGLDhEQUFDcEIsb0RBQVdBO3dCQUFDa0IsV0FBVTt3QkFBMkJFLElBQUc7Ozs7Ozs7Ozs7OztZQUd0RGhCLDZCQUNDLDhEQUFDTCxpREFBTUEsQ0FBQ2tCLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZHLFNBQVM7b0JBQUVDLFNBQVM7Z0JBQUU7Z0JBQ3RCQyxTQUFTO29CQUFFRCxTQUFTO2dCQUFFO2dCQUN0QlYsWUFBWTtvQkFBRVksVUFBVTtnQkFBSTswQkFFNUIsNEVBQUNQO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNPOzRDQUFFUCxXQUFVO3NEQUFzRTs7Ozs7O3NEQUNuRiw4REFBQ2pCLG9EQUFDQTs0Q0FBQ2lCLFdBQVU7NENBQXlDQyxTQUFTYjs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR25FLDhEQUFDVztnQ0FBSUMsV0FBVTswQ0FHYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNPO29EQUFFUCxXQUFVOzhEQUFnQzs7Ozs7OzhEQUM3Qyw4REFBQ0Q7OERBQ0MsNEVBQUNTO3dEQUFFQyxNQUFLO3dEQUFHVCxXQUFVO2tFQUFzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlakg7R0F0RXdCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVhZGVyc0xpbmtzL0ludGVyTGlua3MudHN4PzJjOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgeyBDaGV2cm9uRG93biwgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlckxpbmtzKCkge1xyXG5cclxuICAvLyBBYnJpciBvcyBsaW5rcyBkbyBoZWFkZXJcclxuICBjb25zdCBbIGlzTGlua3NPcGVuICwgc2V0SXNMaW5rc09wZW4gXSA9IHVzZVN0YXRlKGZhbHNlKSBcclxuXHJcbiAgY29uc3QgaGFuZGxlTGlua0FjZXNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgSW50ZXJBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbnRlckFycm93JykgYXMgSFRNTEltYWdlRWxlbWVudFxyXG4gICAgY29uc3QgSW50ZXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0ludGVyTGluaycpIGFzIEhUTUxMaW5rRWxlbWVudFxyXG5cclxuICAgIHNldElzTGlua3NPcGVuKCFpc0xpbmtzT3BlbilcclxuXHJcbiAgICAvLyBUcmFuc2ljYW8gZGEgaW50ZXIgYXJyb3dcclxuICAgIEludGVyQXJyb3cuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgLjJzIGVhc2UtaW4tb3V0J1xyXG4gICAgXHJcbiAgICBpZiAoIGlzTGlua3NPcGVuICkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICAgIEludGVyQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSdcclxuICAgICAgSW50ZXJMaW5rLnN0eWxlLmNvbG9yID0gJ3JnYigyMiwgMjIsIDIyKSdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcclxuICAgICAgSW50ZXJBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC0xODBkZWcpJ1xyXG4gICAgICBJbnRlckxpbmsuc3R5bGUuY29sb3IgPSAnI2ZmN2EwMCdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiggXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4XCIgb25DbGljaz17aGFuZGxlTGlua0FjZXNzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1bMTRweF0gZm9udC1bcmdiKDIyLCAyMiwgMjIpXSBmb250LXNlbWlib2xkIGZvbnQtaW50ZXJcIiBpZD1cIkludGVyTGlua1wiPk8gSW50ZXI8L2Rpdj5cclxuICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cIiB0ZXh0LVsjQjZCN0JCXSBtbC1bNXB4XVwiIGlkPVwiSW50ZXJBcnJvd1wiLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIHtpc0xpbmtzT3BlbiAmJiAoXHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLVsxMTRweF0gbGVmdC0wIHctZnVsbCBjYWxjSGVpZ2h0IHotMTAgYmctd2hpdGUgcHktNFwiXHJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzE0MjhweF0gaC1bNTAwcHhdXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1iLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBmb250LXNvcmEgZm9udC1zZW1pYm9sZCB0ZXh0LVsyMHB4XSAgbGVhZGluZy1bMjVweF0gdGV4dC1bIzE2MTYxNl1cIj5PIEludGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIGgtNyB3LTcgdGV4dC1bI0I2QjdCQl1cIiBvbkNsaWNrPXtoYW5kbGVMaW5rQWNlc3N9Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgtd3JhcCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIDHCsCBJdGVtIGRvIGxpbmsgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHByLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgcm91bmRlZC1bOHB4XSBoLVsxMzBweF0gdy1bMzMzcHhdIGJvcmRlci15LVsxcHhdIGJvcmRlci14LVsxcHhdIGJvcmRlci1bI2RlZGZlNF1cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBweC1bMTVweF0gcHktNCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBtYi02IGZvbnQtc29yYSBmb250LXNlbWlib2xkXCI+R292ZXJuYW7Dp2EgQ29ycG9yYXRpdmE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCIgZm9udC1pbnRlciB0ZXh0LVsjRkY3QTAwXSBmb250LXNlbWlib2xkIHRleHQtWzE0cHhdIGxlYWRpbmctWzE3cHhdXCI+U2FpYmEgbWFpczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKX1cclxuICAgIDwvPlxyXG4gICAgXHJcblxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJtb3Rpb24iLCJDaGV2cm9uRG93biIsIlgiLCJ1c2VTdGF0ZSIsIkludGVyTGlua3MiLCJpc0xpbmtzT3BlbiIsInNldElzTGlua3NPcGVuIiwiaGFuZGxlTGlua0FjZXNzIiwiSW50ZXJBcnJvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJJbnRlckxpbmsiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJib2R5Iiwib3ZlcmZsb3dZIiwidHJhbnNmb3JtIiwiY29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaWQiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJkdXJhdGlvbiIsInAiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/headersLinks/InterLinks.tsx\n"));

/***/ })

});