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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InterLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction InterLinks() {\n    _s();\n    // Abrir os links do header\n    const [isInterLinksOpen, setIsInterLinksOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleInterLinkAcess = ()=>{\n        const InterArrow = document.getElementById(\"InterArrow\");\n        const InterLink = document.getElementById(\"InterLink\");\n        setIsInterLinksOpen(!isInterLinksOpen);\n        // Transicao da inter arrow\n        InterArrow.style.transition = \"all .2s ease-in-out\";\n        if (isInterLinksOpen) {\n            document.body.style.overflowY = \"scroll\";\n            InterArrow.style.transform = \"rotate(0deg)\";\n            InterLink.style.color = \"rgb(22, 22, 22)\";\n        } else {\n            document.body.style.overflowY = \"hidden\";\n            InterArrow.style.transform = \"rotate(-180deg)\";\n            InterLink.style.color = \"#ff7a00\";\n        }\n    };\n    const divStyleWidth = {\n        width: \"25%\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex\",\n                onClick: handleInterLinkAcess,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-[14px] font-[rgb(22, 22, 22)] font-semibold font-inter\",\n                        id: \"InterLink\",\n                        children: \"O Inter\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" text-[#B6B7BB] ml-[5px]\",\n                        id: \"InterArrow\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            isInterLinksOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"fixed top-[114px] left-0 w-full calcHeight z-10 bg-white py-4\",\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.2\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[1428px] h-[500px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex items-center justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" font-sora font-semibold text-[20px]  leading-[25px] text-[#161616]\",\n                                            children: \"O Inter\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            className: \" cursor-pointer h-7 w-7 text-[#B6B7BB]\",\n                                            onClick: handleInterLinkAcess\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex-wrap flex justify-start items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-6 px-3\",\n                                    style: divStyleWidth,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" bg-transparent rounded-[8px] border-y-[1px] border-x-[1px] border-[#dedfe4] \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" flex px-[15px] py-4 flex-col h-[115]\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \" mb-6 font-sora font-semibold text-[16px] leading-[20px] text-[#161616] \",\n                                                    children: \"Governan\\xe7a Corporativa\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \" flex h-full flex-col justify-start cursor-pointer\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"\",\n                                                        className: \"block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px]\",\n                                                        children: \"Saiba mais\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\InterLinks.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(InterLinks, \"ZGeixstkMvikqtmxYuiU3DqhJts=\");\n_c = InterLinks;\nvar _c;\n$RefreshReg$(_c, \"InterLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2hlYWRlcnNMaW5rcy9JbnRlckxpbmtzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTztBQUNiO0FBRWpCLFNBQVNJOztJQUV0QiwyQkFBMkI7SUFDM0IsTUFBTSxDQUFFQyxrQkFBbUJDLG9CQUFxQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUU1RCxNQUFNSSx1QkFBdUI7UUFDM0IsTUFBTUMsYUFBYUMsU0FBU0MsY0FBYyxDQUFDO1FBQzNDLE1BQU1DLFlBQVlGLFNBQVNDLGNBQWMsQ0FBQztRQUUxQ0osb0JBQW9CLENBQUNEO1FBRXJCLDJCQUEyQjtRQUMzQkcsV0FBV0ksS0FBSyxDQUFDQyxVQUFVLEdBQUc7UUFFOUIsSUFBS1Isa0JBQW1CO1lBQ3RCSSxTQUFTSyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csU0FBUyxHQUFHO1lBQ2hDUCxXQUFXSSxLQUFLLENBQUNJLFNBQVMsR0FBRztZQUM3QkwsVUFBVUMsS0FBSyxDQUFDSyxLQUFLLEdBQUc7UUFDMUIsT0FBTztZQUNMUixTQUFTSyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csU0FBUyxHQUFHO1lBQ2hDUCxXQUFXSSxLQUFLLENBQUNJLFNBQVMsR0FBRztZQUM3QkwsVUFBVUMsS0FBSyxDQUFDSyxLQUFLLEdBQUc7UUFDMUI7SUFDRjtJQUVBLE1BQU1DLGdCQUFnQjtRQUNwQkMsT0FBTztJQUNUO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBSUMsV0FBVTtnQkFBUUMsU0FBU2Y7O2tDQUNoQyw4REFBQ2E7d0JBQUlDLFdBQVU7d0JBQStERSxJQUFHO2tDQUFZOzs7Ozs7a0NBQzdGLDhEQUFDdEIsb0RBQVdBO3dCQUFDb0IsV0FBVTt3QkFBMkJFLElBQUc7Ozs7Ozs7Ozs7OztZQUd0RGxCLGtDQUNDLDhEQUFDTCxpREFBTUEsQ0FBQ29CLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZHLFNBQVM7b0JBQUVDLFNBQVM7Z0JBQUU7Z0JBQ3RCQyxTQUFTO29CQUFFRCxTQUFTO2dCQUFFO2dCQUN0QlosWUFBWTtvQkFBRWMsVUFBVTtnQkFBSTswQkFFNUIsNEVBQUNQO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNPOzRDQUFFUCxXQUFVO3NEQUFzRTs7Ozs7O3NEQUNuRiw4REFBQ25CLG9EQUFDQTs0Q0FBQ21CLFdBQVU7NENBQXlDQyxTQUFTZjs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR25FLDhEQUFDYTtnQ0FBSUMsV0FBVTswQ0FHYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7b0NBQVlULE9BQU9NOzhDQUNoQyw0RUFBQ0U7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNEOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ087b0RBQUVQLFdBQVU7OERBQTJFOzs7Ozs7OERBQ3hGLDhEQUFDRDtvREFBSUMsV0FBVTs4REFDYiw0RUFBQ1E7d0RBQUVDLE1BQUs7d0RBQUdULFdBQVU7a0VBQXVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVsSDtHQTFFd0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVhZGVyc0xpbmtzL0ludGVyTGlua3MudHN4PzJjOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgeyBDaGV2cm9uRG93biwgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlckxpbmtzKCkge1xyXG5cclxuICAvLyBBYnJpciBvcyBsaW5rcyBkbyBoZWFkZXJcclxuICBjb25zdCBbIGlzSW50ZXJMaW5rc09wZW4gLCBzZXRJc0ludGVyTGlua3NPcGVuIF0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcblxyXG4gIGNvbnN0IGhhbmRsZUludGVyTGlua0FjZXNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgSW50ZXJBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbnRlckFycm93JykgYXMgSFRNTEltYWdlRWxlbWVudFxyXG4gICAgY29uc3QgSW50ZXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0ludGVyTGluaycpIGFzIEhUTUxMaW5rRWxlbWVudFxyXG5cclxuICAgIHNldElzSW50ZXJMaW5rc09wZW4oIWlzSW50ZXJMaW5rc09wZW4pXHJcblxyXG4gICAgLy8gVHJhbnNpY2FvIGRhIGludGVyIGFycm93XHJcbiAgICBJbnRlckFycm93LnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIC4ycyBlYXNlLWluLW91dCdcclxuICAgIFxyXG4gICAgaWYgKCBpc0ludGVyTGlua3NPcGVuICkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICAgIEludGVyQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSdcclxuICAgICAgSW50ZXJMaW5rLnN0eWxlLmNvbG9yID0gJ3JnYigyMiwgMjIsIDIyKSdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcclxuICAgICAgSW50ZXJBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC0xODBkZWcpJ1xyXG4gICAgICBJbnRlckxpbmsuc3R5bGUuY29sb3IgPSAnI2ZmN2EwMCdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGRpdlN0eWxlV2lkdGggPSB7XHJcbiAgICB3aWR0aDogJzI1JSdcclxuICB9XHJcblxyXG4gIHJldHVybiggXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4XCIgb25DbGljaz17aGFuZGxlSW50ZXJMaW5rQWNlc3N9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LVsxNHB4XSBmb250LVtyZ2IoMjIsIDIyLCAyMildIGZvbnQtc2VtaWJvbGQgZm9udC1pbnRlclwiIGlkPVwiSW50ZXJMaW5rXCI+TyBJbnRlcjwvZGl2PlxyXG4gICAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPVwiIHRleHQtWyNCNkI3QkJdIG1sLVs1cHhdXCIgaWQ9XCJJbnRlckFycm93XCIvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAge2lzSW50ZXJMaW5rc09wZW4gJiYgKFxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC1bMTE0cHhdIGxlZnQtMCB3LWZ1bGwgY2FsY0hlaWdodCB6LTEwIGJnLXdoaXRlIHB5LTRcIlxyXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxNDI4cHhdIGgtWzUwMHB4XVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtYi00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgZm9udC1zb3JhIGZvbnQtc2VtaWJvbGQgdGV4dC1bMjBweF0gIGxlYWRpbmctWzI1cHhdIHRleHQtWyMxNjE2MTZdXCI+TyBJbnRlcjwvcD5cclxuICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBoLTcgdy03IHRleHQtWyNCNkI3QkJdXCIgb25DbGljaz17aGFuZGxlSW50ZXJMaW5rQWNlc3N9Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgtd3JhcCBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiAxwrAgSXRlbSBkbyBsaW5rICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBweC0zXCIgc3R5bGU9e2RpdlN0eWxlV2lkdGh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmctdHJhbnNwYXJlbnQgcm91bmRlZC1bOHB4XSBib3JkZXIteS1bMXB4XSBib3JkZXIteC1bMXB4XSBib3JkZXItWyNkZWRmZTRdIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IHB4LVsxNXB4XSBweS00IGZsZXgtY29sIGgtWzExNV1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgbWItNiBmb250LXNvcmEgZm9udC1zZW1pYm9sZCB0ZXh0LVsxNnB4XSBsZWFkaW5nLVsyMHB4XSB0ZXh0LVsjMTYxNjE2XSBcIj5Hb3Zlcm5hbsOnYSBDb3Jwb3JhdGl2YTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGgtZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1pbnRlciB0ZXh0LVsjRkY3QTAwXSBmb250LWJvbGQgdGV4dC1bMTRweF0gbGVhZGluZy1bMTdweF1cIj5TYWliYSBtYWlzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKX1cclxuICAgIDwvPlxyXG4gICAgXHJcblxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJtb3Rpb24iLCJDaGV2cm9uRG93biIsIlgiLCJ1c2VTdGF0ZSIsIkludGVyTGlua3MiLCJpc0ludGVyTGlua3NPcGVuIiwic2V0SXNJbnRlckxpbmtzT3BlbiIsImhhbmRsZUludGVyTGlua0FjZXNzIiwiSW50ZXJBcnJvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJJbnRlckxpbmsiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJib2R5Iiwib3ZlcmZsb3dZIiwidHJhbnNmb3JtIiwiY29sb3IiLCJkaXZTdHlsZVdpZHRoIiwid2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaWQiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJkdXJhdGlvbiIsInAiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/headersLinks/InterLinks.tsx\n"));

/***/ })

});