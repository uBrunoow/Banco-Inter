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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PraVoceLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PraVoceLinks() {\n    _s();\n    // Abrir os links do header\n    const [isPraVoceLinksOpen, setIsPraVoceLinksOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handlePraVoceLinkAcess = ()=>{\n        const PraVoceArrow = document.getElementById(\"PraVoceArrow\");\n        const PraVoceLink = document.getElementById(\"PraVoceLink\");\n        setIsPraVoceLinksOpen(!isPraVoceLinksOpen);\n        // Transicao da inter arrow\n        PraVoceArrow.style.transition = \"all .2s ease-in-out\";\n        if (isPraVoceLinksOpen) {\n            document.body.style.overflowY = \"scroll\";\n            PraVoceArrow.style.transform = \"rotate(0deg)\";\n            PraVoceLink.style.color = \"rgb(22, 22, 22)\";\n        } else {\n            document.body.style.overflowY = \"hidden\";\n            PraVoceArrow.style.transform = \"rotate(-180deg)\";\n            PraVoceLink.style.color = \"#ff7a00\";\n        }\n    };\n    const divStyleWidth = {\n        width: \"16.66666667%\"\n    };\n    const divStyleHeight = {\n        height: \"115px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex py-[5] px-1 ml-[14px]\",\n                onClick: handlePraVoceLinkAcess,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-[14px] font-[rgb(22, 22, 22)] font-semibold font-inter \",\n                        id: \"PraVoceLink\",\n                        children: \"Pra voc\\xea\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" text-[#B6B7BB] ml-[5px]\",\n                        id: \"PraVoceArrow\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            isPraVoceLinksOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"fixed top-[114px] left-0 w-full calcHeight z-10 bg-white py-4\",\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.2\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[1428px] h-[500px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" mb-4 px-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex items-center justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" font-sora font-semibold text-[20px]  leading-[25px] text-[#161616]\",\n                                            children: \"O Inter\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            className: \" cursor-pointer h-7 w-7 text-[#B6B7BB]\",\n                                            onClick: handlePraVoceLinkAcess\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex-wrap flex justify-start items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-6 px-3\",\n                                    style: divStyleWidth,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" bg-transparent rounded-[8px] border-y-[1px] border-x-[1px] border-[#dedfe4]\",\n                                        style: divStyleHeight,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" flex px-[15px] py-4 flex-col\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \" mb-6 font-sora font-semibold text-[16px] leading-[20px] text-[#161616] \",\n                                                    children: \"Conhe\\xe7a o Inter\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \" flex h-full flex-col justify-start cursor-pointer\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"\",\n                                                        className: \"block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px]\",\n                                                        children: \"Saiba mais\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PraVoceLinks, \"yzvLjfxlcszCcjnEktLenMwTQPM=\");\n_c = PraVoceLinks;\nvar _c;\n$RefreshReg$(_c, \"PraVoceLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2hlYWRlcnNMaW5rcy9QcmFWb2NlTGlua3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQztBQUNPO0FBQ2I7QUFFakIsU0FBU0k7O0lBRXRCLDJCQUEyQjtJQUMzQixNQUFNLENBQUVDLG9CQUFxQkMsc0JBQXVCLEdBQUdILCtDQUFRQSxDQUFDO0lBRWhFLE1BQU1JLHlCQUF5QjtRQUM3QixNQUFNQyxlQUFlQyxTQUFTQyxjQUFjLENBQUM7UUFDN0MsTUFBTUMsY0FBY0YsU0FBU0MsY0FBYyxDQUFDO1FBRTVDSixzQkFBc0IsQ0FBQ0Q7UUFFdkIsMkJBQTJCO1FBQzNCRyxhQUFhSSxLQUFLLENBQUNDLFVBQVUsR0FBRztRQUVoQyxJQUFLUixvQkFBcUI7WUFDeEJJLFNBQVNLLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxTQUFTLEdBQUc7WUFDaENQLGFBQWFJLEtBQUssQ0FBQ0ksU0FBUyxHQUFHO1lBQy9CTCxZQUFZQyxLQUFLLENBQUNLLEtBQUssR0FBRztRQUM1QixPQUFPO1lBQ0xSLFNBQVNLLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxTQUFTLEdBQUc7WUFDaENQLGFBQWFJLEtBQUssQ0FBQ0ksU0FBUyxHQUFHO1lBQy9CTCxZQUFZQyxLQUFLLENBQUNLLEtBQUssR0FBRztRQUM1QjtJQUNGO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ3BCQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxpQkFBaUI7UUFDckJDLFFBQVE7SUFDVjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUlDLFdBQVU7Z0JBQThCQyxTQUFTakI7O2tDQUNwRCw4REFBQ2U7d0JBQUlDLFdBQVU7d0JBQWlFRSxJQUFHO2tDQUFlOzs7Ozs7a0NBQ2xHLDhEQUFDeEIsb0RBQVdBO3dCQUFDc0IsV0FBVTt3QkFBMkJFLElBQUc7Ozs7Ozs7Ozs7OztZQUd0RHBCLG9DQUNELDhEQUFDTCxpREFBTUEsQ0FBQ3NCLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZHLFNBQVM7b0JBQUVDLFNBQVM7Z0JBQUU7Z0JBQ3RCQyxTQUFTO29CQUFFRCxTQUFTO2dCQUFFO2dCQUN0QmQsWUFBWTtvQkFBRWdCLFVBQVU7Z0JBQUk7MEJBRTVCLDRFQUFDUDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDTzs0Q0FBRVAsV0FBVTtzREFBc0U7Ozs7OztzREFDbkYsOERBQUNyQixvREFBQ0E7NENBQUNxQixXQUFVOzRDQUF5Q0MsU0FBU2pCOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHbkUsOERBQUNlO2dDQUFJQyxXQUFVOzBDQUdiLDRFQUFDRDtvQ0FBSUMsV0FBVTtvQ0FBWVgsT0FBT007OENBQ2hDLDRFQUFDSTt3Q0FBSUMsV0FBVTt3Q0FBZ0ZYLE9BQU9RO2tEQUNwRyw0RUFBQ0U7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDTztvREFBRVAsV0FBVTs4REFBMkU7Ozs7Ozs4REFDeEYsOERBQUNEO29EQUFJQyxXQUFVOzhEQUNiLDRFQUFDUTt3REFBRUMsTUFBSzt3REFBR1QsV0FBVTtrRUFBdUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWxIO0dBNUV3Qm5CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9oZWFkZXJzTGlua3MvUHJhVm9jZUxpbmtzLnRzeD80YThkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IHsgQ2hldnJvbkRvd24sIFggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJhVm9jZUxpbmtzKCkge1xyXG4gIFxyXG4gIC8vIEFicmlyIG9zIGxpbmtzIGRvIGhlYWRlclxyXG4gIGNvbnN0IFsgaXNQcmFWb2NlTGlua3NPcGVuICwgc2V0SXNQcmFWb2NlTGlua3NPcGVuIF0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcblxyXG4gIGNvbnN0IGhhbmRsZVByYVZvY2VMaW5rQWNlc3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBQcmFWb2NlQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJhVm9jZUFycm93JykgYXMgSFRNTEltYWdlRWxlbWVudFxyXG4gICAgY29uc3QgUHJhVm9jZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJhVm9jZUxpbmsnKSBhcyBIVE1MRGl2RWxlbWVudFxyXG5cclxuICAgIHNldElzUHJhVm9jZUxpbmtzT3BlbighaXNQcmFWb2NlTGlua3NPcGVuKVxyXG5cclxuICAgIC8vIFRyYW5zaWNhbyBkYSBpbnRlciBhcnJvd1xyXG4gICAgUHJhVm9jZUFycm93LnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIC4ycyBlYXNlLWluLW91dCdcclxuICAgIFxyXG4gICAgaWYgKCBpc1ByYVZvY2VMaW5rc09wZW4gKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCdcclxuICAgICAgUHJhVm9jZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknXHJcbiAgICAgIFByYVZvY2VMaW5rLnN0eWxlLmNvbG9yID0gJ3JnYigyMiwgMjIsIDIyKSdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcclxuICAgICAgUHJhVm9jZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTE4MGRlZyknXHJcbiAgICAgIFByYVZvY2VMaW5rLnN0eWxlLmNvbG9yID0gJyNmZjdhMDAnXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGRpdlN0eWxlV2lkdGggPSB7XHJcbiAgICB3aWR0aDogJzE2LjY2NjY2NjY3JScsXHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXZTdHlsZUhlaWdodCA9IHtcclxuICAgIGhlaWdodDogJzExNXB4JyxcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IHB5LVs1XSBweC0xIG1sLVsxNHB4XVwiIG9uQ2xpY2s9e2hhbmRsZVByYVZvY2VMaW5rQWNlc3N9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtWzE0cHhdIGZvbnQtW3JnYigyMiwgMjIsIDIyKV0gZm9udC1zZW1pYm9sZCBmb250LWludGVyIFwiICBpZD1cIlByYVZvY2VMaW5rXCIgPlByYSB2b2PDqjwvZGl2PlxyXG4gICAgICAgIDxDaGV2cm9uRG93biBjbGFzc05hbWU9XCIgdGV4dC1bI0I2QjdCQl0gbWwtWzVweF1cIiBpZD1cIlByYVZvY2VBcnJvd1wiLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7aXNQcmFWb2NlTGlua3NPcGVuICYmIChcclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtWzExNHB4XSBsZWZ0LTAgdy1mdWxsIGNhbGNIZWlnaHQgei0xMCBiZy13aGl0ZSBweS00XCJcclxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTQyOHB4XSBoLVs1MDBweF1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWItNCBweC0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgZm9udC1zb3JhIGZvbnQtc2VtaWJvbGQgdGV4dC1bMjBweF0gIGxlYWRpbmctWzI1cHhdIHRleHQtWyMxNjE2MTZdXCI+TyBJbnRlcjwvcD5cclxuICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBoLTcgdy03IHRleHQtWyNCNkI3QkJdXCIgb25DbGljaz17aGFuZGxlUHJhVm9jZUxpbmtBY2Vzc30vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleC13cmFwIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7LyogMcKwIEl0ZW0gZG8gbGluayAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgcHgtM1wiIHN0eWxlPXtkaXZTdHlsZVdpZHRofT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtWzhweF0gYm9yZGVyLXktWzFweF0gYm9yZGVyLXgtWzFweF0gYm9yZGVyLVsjZGVkZmU0XVwiICBzdHlsZT17ZGl2U3R5bGVIZWlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IHB4LVsxNXB4XSBweS00IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIG1iLTYgZm9udC1zb3JhIGZvbnQtc2VtaWJvbGQgdGV4dC1bMTZweF0gbGVhZGluZy1bMjBweF0gdGV4dC1bIzE2MTYxNl0gXCI+Q29uaGXDp2EgbyBJbnRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGgtZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1pbnRlciB0ZXh0LVsjRkY3QTAwXSBmb250LWJvbGQgdGV4dC1bMTRweF0gbGVhZGluZy1bMTdweF1cIj5TYWliYSBtYWlzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApfVxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJtb3Rpb24iLCJDaGV2cm9uRG93biIsIlgiLCJ1c2VTdGF0ZSIsIlByYVZvY2VMaW5rcyIsImlzUHJhVm9jZUxpbmtzT3BlbiIsInNldElzUHJhVm9jZUxpbmtzT3BlbiIsImhhbmRsZVByYVZvY2VMaW5rQWNlc3MiLCJQcmFWb2NlQXJyb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUHJhVm9jZUxpbmsiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJib2R5Iiwib3ZlcmZsb3dZIiwidHJhbnNmb3JtIiwiY29sb3IiLCJkaXZTdHlsZVdpZHRoIiwid2lkdGgiLCJkaXZTdHlsZUhlaWdodCIsImhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpZCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwicCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/headersLinks/PraVoceLinks.tsx\n"));

/***/ })

});