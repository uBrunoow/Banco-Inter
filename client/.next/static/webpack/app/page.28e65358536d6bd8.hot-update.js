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

/***/ "(app-client)/./src/headersLinks/PraVoceLinks.tsx":
/*!*******************************************!*\
  !*** ./src/headersLinks/PraVoceLinks.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PraVoceLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PraVoceLinks() {\n    _s();\n    // Abrir os links do header\n    const [isPraVoceLinksOpen, setIsPraVoceLinksOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handlePraVoceLinkAcess = ()=>{\n        const PraVoceArrow = document.getElementById(\"PraVoceArrow\");\n        const PraVoceLink = document.getElementById(\"PraVoceLink\");\n        setIsPraVoceLinksOpen(!isPraVoceLinksOpen);\n        // Transicao da inter arrow\n        PraVoceArrow.style.transition = \"all .2s ease-in-out\";\n        if (isPraVoceLinksOpen) {\n            document.body.style.overflowY = \"scroll\";\n            PraVoceArrow.style.transform = \"rotate(0deg)\";\n            PraVoceLink.style.color = \"rgb(22, 22, 22)\";\n        } else {\n            document.body.style.overflowY = \"hidden\";\n            PraVoceArrow.style.transform = \"rotate(-180deg)\";\n            PraVoceLink.style.color = \"#ff7a00\";\n        }\n    };\n    const divStyleWidth = {\n        width: \"16.66666667%\"\n    };\n    const divStyleHeight = {\n        height: \"268px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex py-[5] px-1 ml-[14px]\",\n                onClick: handlePraVoceLinkAcess,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-[14px] font-[rgb(22, 22, 22)] font-semibold font-inter \",\n                        id: \"PraVoceLink\",\n                        children: \"Pra voc\\xea\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" text-[#B6B7BB] ml-[5px]\",\n                        id: \"PraVoceArrow\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            isPraVoceLinksOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"fixed top-[114px] left-0 w-full calcHeight z-10 bg-white py-4\",\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.2\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[1428px] h-[500px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" mb-4 px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" flex items-center justify-between\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \" font-sora font-semibold text-[20px]  leading-[25px] text-[#161616]\",\n                                                children: \"O Inter\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                className: \" cursor-pointer h-7 w-7 text-[#B6B7BB]\",\n                                                onClick: handlePraVoceLinkAcess\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"Tudo em sua conta\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex-wrap flex justify-start items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-6 px-3\",\n                                    style: divStyleWidth,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" bg-transparent rounded-[8px] border-y-[1px] border-x-[1px] border-[#dedfe4]\",\n                                        style: divStyleHeight,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" flex px-[15px] py-4 flex-col\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \" mb-6 font-sora font-semibold text-[16px] leading-[20px] text-[#161616] \",\n                                                    children: \"Conhe\\xe7a o Inter\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \" flex h-full flex-col justify-start cursor-pointer\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"\",\n                                                        className: \"block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px]\",\n                                                        children: \"Saiba mais\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PraVoceLinks, \"yzvLjfxlcszCcjnEktLenMwTQPM=\");\n_c = PraVoceLinks;\nvar _c;\n$RefreshReg$(_c, \"PraVoceLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2hlYWRlcnNMaW5rcy9QcmFWb2NlTGlua3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQztBQUNPO0FBQ2I7QUFFakIsU0FBU0k7O0lBRXRCLDJCQUEyQjtJQUMzQixNQUFNLENBQUVDLG9CQUFxQkMsc0JBQXVCLEdBQUdILCtDQUFRQSxDQUFDO0lBRWhFLE1BQU1JLHlCQUF5QjtRQUM3QixNQUFNQyxlQUFlQyxTQUFTQyxjQUFjLENBQUM7UUFDN0MsTUFBTUMsY0FBY0YsU0FBU0MsY0FBYyxDQUFDO1FBRTVDSixzQkFBc0IsQ0FBQ0Q7UUFFdkIsMkJBQTJCO1FBQzNCRyxhQUFhSSxLQUFLLENBQUNDLFVBQVUsR0FBRztRQUVoQyxJQUFLUixvQkFBcUI7WUFDeEJJLFNBQVNLLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxTQUFTLEdBQUc7WUFDaENQLGFBQWFJLEtBQUssQ0FBQ0ksU0FBUyxHQUFHO1lBQy9CTCxZQUFZQyxLQUFLLENBQUNLLEtBQUssR0FBRztRQUM1QixPQUFPO1lBQ0xSLFNBQVNLLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxTQUFTLEdBQUc7WUFDaENQLGFBQWFJLEtBQUssQ0FBQ0ksU0FBUyxHQUFHO1lBQy9CTCxZQUFZQyxLQUFLLENBQUNLLEtBQUssR0FBRztRQUM1QjtJQUNGO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ3BCQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxpQkFBaUI7UUFDckJDLFFBQVE7SUFDVjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUlDLFdBQVU7Z0JBQThCQyxTQUFTakI7O2tDQUNwRCw4REFBQ2U7d0JBQUlDLFdBQVU7d0JBQWlFRSxJQUFHO2tDQUFlOzs7Ozs7a0NBQ2xHLDhEQUFDeEIsb0RBQVdBO3dCQUFDc0IsV0FBVTt3QkFBMkJFLElBQUc7Ozs7Ozs7Ozs7OztZQUd0RHBCLG9DQUNELDhEQUFDTCxpREFBTUEsQ0FBQ3NCLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZHLFNBQVM7b0JBQUVDLFNBQVM7Z0JBQUU7Z0JBQ3RCQyxTQUFTO29CQUFFRCxTQUFTO2dCQUFFO2dCQUN0QmQsWUFBWTtvQkFBRWdCLFVBQVU7Z0JBQUk7MEJBRTVCLDRFQUFDUDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ087Z0RBQUVQLFdBQVU7MERBQXNFOzs7Ozs7MERBQ25GLDhEQUFDckIsb0RBQUNBO2dEQUFDcUIsV0FBVTtnREFBeUNDLFNBQVNqQjs7Ozs7Ozs7Ozs7O2tEQUVqRSw4REFBQ2U7a0RBQUk7Ozs7Ozs7Ozs7OzswQ0FFUCw4REFBQ0E7Z0NBQUlDLFdBQVU7MENBR2IsNEVBQUNEO29DQUFJQyxXQUFVO29DQUFZWCxPQUFPTTs4Q0FDaEMsNEVBQUNJO3dDQUFJQyxXQUFVO3dDQUFnRlgsT0FBT1E7a0RBQ3BHLDRFQUFDRTs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNPO29EQUFFUCxXQUFVOzhEQUEyRTs7Ozs7OzhEQUN4Riw4REFBQ0Q7b0RBQUlDLFdBQVU7OERBQ2IsNEVBQUNRO3dEQUFFQyxNQUFLO3dEQUFHVCxXQUFVO2tFQUF1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbEg7R0E3RXdCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlYWRlcnNMaW5rcy9QcmFWb2NlTGlua3MudHN4PzRhOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgeyBDaGV2cm9uRG93biwgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmFWb2NlTGlua3MoKSB7XHJcbiAgXHJcbiAgLy8gQWJyaXIgb3MgbGlua3MgZG8gaGVhZGVyXHJcbiAgY29uc3QgWyBpc1ByYVZvY2VMaW5rc09wZW4gLCBzZXRJc1ByYVZvY2VMaW5rc09wZW4gXSA9IHVzZVN0YXRlKGZhbHNlKSBcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJhVm9jZUxpbmtBY2VzcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFByYVZvY2VBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQcmFWb2NlQXJyb3cnKSBhcyBIVE1MSW1hZ2VFbGVtZW50XHJcbiAgICBjb25zdCBQcmFWb2NlTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQcmFWb2NlTGluaycpIGFzIEhUTUxEaXZFbGVtZW50XHJcblxyXG4gICAgc2V0SXNQcmFWb2NlTGlua3NPcGVuKCFpc1ByYVZvY2VMaW5rc09wZW4pXHJcblxyXG4gICAgLy8gVHJhbnNpY2FvIGRhIGludGVyIGFycm93XHJcbiAgICBQcmFWb2NlQXJyb3cuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgLjJzIGVhc2UtaW4tb3V0J1xyXG4gICAgXHJcbiAgICBpZiAoIGlzUHJhVm9jZUxpbmtzT3BlbiApIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJ1xyXG4gICAgICBQcmFWb2NlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSdcclxuICAgICAgUHJhVm9jZUxpbmsuc3R5bGUuY29sb3IgPSAncmdiKDIyLCAyMiwgMjIpJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xyXG4gICAgICBQcmFWb2NlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgtMTgwZGVnKSdcclxuICAgICAgUHJhVm9jZUxpbmsuc3R5bGUuY29sb3IgPSAnI2ZmN2EwMCdcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY29uc3QgZGl2U3R5bGVXaWR0aCA9IHtcclxuICAgIHdpZHRoOiAnMTYuNjY2NjY2NjclJyxcclxuICB9XHJcblxyXG4gIGNvbnN0IGRpdlN0eWxlSGVpZ2h0ID0ge1xyXG4gICAgaGVpZ2h0OiAnMjY4cHgnLFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggcHktWzVdIHB4LTEgbWwtWzE0cHhdXCIgb25DbGljaz17aGFuZGxlUHJhVm9jZUxpbmtBY2Vzc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1bMTRweF0gZm9udC1bcmdiKDIyLCAyMiwgMjIpXSBmb250LXNlbWlib2xkIGZvbnQtaW50ZXIgXCIgIGlkPVwiUHJhVm9jZUxpbmtcIiA+UHJhIHZvY8OqPC9kaXY+XHJcbiAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cIiB0ZXh0LVsjQjZCN0JCXSBtbC1bNXB4XVwiIGlkPVwiUHJhVm9jZUFycm93XCIvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtpc1ByYVZvY2VMaW5rc09wZW4gJiYgKFxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC1bMTE0cHhdIGxlZnQtMCB3LWZ1bGwgY2FsY0hlaWdodCB6LTEwIGJnLXdoaXRlIHB5LTRcIlxyXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxNDI4cHhdIGgtWzUwMHB4XVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtYi00IHB4LTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBmb250LXNvcmEgZm9udC1zZW1pYm9sZCB0ZXh0LVsyMHB4XSAgbGVhZGluZy1bMjVweF0gdGV4dC1bIzE2MTYxNl1cIj5PIEludGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIGgtNyB3LTcgdGV4dC1bI0I2QjdCQl1cIiBvbkNsaWNrPXtoYW5kbGVQcmFWb2NlTGlua0FjZXNzfS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5UdWRvIGVtIHN1YSBjb250YTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleC13cmFwIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7LyogMcKwIEl0ZW0gZG8gbGluayAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgcHgtM1wiIHN0eWxlPXtkaXZTdHlsZVdpZHRofT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtWzhweF0gYm9yZGVyLXktWzFweF0gYm9yZGVyLXgtWzFweF0gYm9yZGVyLVsjZGVkZmU0XVwiICBzdHlsZT17ZGl2U3R5bGVIZWlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IHB4LVsxNXB4XSBweS00IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIG1iLTYgZm9udC1zb3JhIGZvbnQtc2VtaWJvbGQgdGV4dC1bMTZweF0gbGVhZGluZy1bMjBweF0gdGV4dC1bIzE2MTYxNl0gXCI+Q29uaGXDp2EgbyBJbnRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGgtZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1pbnRlciB0ZXh0LVsjRkY3QTAwXSBmb250LWJvbGQgdGV4dC1bMTRweF0gbGVhZGluZy1bMTdweF1cIj5TYWliYSBtYWlzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApfVxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJtb3Rpb24iLCJDaGV2cm9uRG93biIsIlgiLCJ1c2VTdGF0ZSIsIlByYVZvY2VMaW5rcyIsImlzUHJhVm9jZUxpbmtzT3BlbiIsInNldElzUHJhVm9jZUxpbmtzT3BlbiIsImhhbmRsZVByYVZvY2VMaW5rQWNlc3MiLCJQcmFWb2NlQXJyb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUHJhVm9jZUxpbmsiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJib2R5Iiwib3ZlcmZsb3dZIiwidHJhbnNmb3JtIiwiY29sb3IiLCJkaXZTdHlsZVdpZHRoIiwid2lkdGgiLCJkaXZTdHlsZUhlaWdodCIsImhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpZCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwicCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/headersLinks/PraVoceLinks.tsx\n"));

/***/ })

});