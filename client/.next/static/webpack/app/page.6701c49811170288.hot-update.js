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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PraVoceLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction PraVoceLinks() {\n    _s();\n    //Abrir os links do header\n    const [isPraVoceLinksOpen, setIsPraVoceLinksOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handlePraVoceLinkAcess = ()=>{\n        const PraVoceArrow = document.getElementById(\"PraVoceArrow\");\n        const PraVoceLink = document.getElementById(\"PraVoceLink\");\n        setIsPraVoceLinksOpen(!isPraVoceLinksOpen);\n        //Transicao da inter arrow\n        PraVoceArrow.style.transition = \"all .2s ease-in-out\";\n        if (isPraVoceLinksOpen) {\n            document.body.style.overflowY = \"scroll\";\n            PraVoceArrow.style.transform = \"rotate(0deg)\";\n            PraVoceLink.style.color = \"rgb(22, 22, 22)\";\n        } else {\n            document.body.style.overflowY = \"hidden\";\n            PraVoceArrow.style.transform = \"rotate(-180deg)\";\n            PraVoceLink.style.color = \"#ff7a00\";\n        }\n    };\n    const divStyleWidth = {\n        width: \"16.66666667%\"\n    };\n    const divStyleWidth2 = {\n        width: \"25%\"\n    };\n    const divStyleHeight = {\n        height: \"268px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex py-[5] px-1 ml-[14px]\",\n                onClick: handlePraVoceLinkAcess,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-[14px] font-[rgb(22, 22, 22)] font-semibold font-inter \",\n                        id: \"PraVoceLink\",\n                        children: \"Pra voc\\xea\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" text-[#B6B7BB] ml-[5px]\",\n                        id: \"PraVoceArrow\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 10\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                lineNumber: 46,\n                columnNumber: 8\n            }, this),\n            isPraVoceLinksOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"fixed top-[114px] left-0 w-full calcHeight z-10 bg-white py-4\",\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.2\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[1428px] h-[500px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" flex items-center justify-between mb-[40px]\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \" font-sora font-semibold text-[20px]  leading-[25px] text-[#161616]\",\n                                                children: \"Pra voc\\xea\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 18\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                className: \" cursor-pointer h-7 w-7 text-[#B6B7BB]\",\n                                                onClick: handlePraVoceLinkAcess\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 18\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-sora font-semibold text-[16px]  leading-[25px] text-[#161616]\",\n                                        children: \"Tudo em sua conta\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 16\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 14\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex-wrap flex justify-start items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-6 px-3\",\n                                    style: divStyleWidth2,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" bg-transparent rounded-[8px] border-y-[1px] border-x-[1px] border-[#dedfe4]\",\n                                        style: divStyleHeight,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" flex px-[15px] py-4 flex-col\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \" mb-6 font-sora font-semibold text-[16px] leading-[20px] text-[#161616] \",\n                                                    children: \"Conta Digital\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 22\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex h-full flex-col justify-start cursor-pointer\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"\",\n                                                            className: \"block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px]\",\n                                                            children: \"Conta Digital\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                            lineNumber: 75,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"\",\n                                                            className: \"block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop\",\n                                                            children: \"Conta Kids\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"\",\n                                                            className: \"block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop\",\n                                                            children: \"Inter You\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                            lineNumber: 77,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"\",\n                                                            className: \"block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop\",\n                                                            children: \"Indique e Ganhe\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"\",\n                                                            className: \"block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop\",\n                                                            children: \"Conta Digital\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"\",\n                                                            className: \"block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop\",\n                                                            children: \"Conta Kids\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"\",\n                                                            className: \"block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop\",\n                                                            children: \"Inter You\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"\",\n                                                            className: \"block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop\",\n                                                            children: \"Indique e Ganhe\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 22\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 18\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 16\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 14\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 12\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                lineNumber: 52,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PraVoceLinks, \"yzvLjfxlcszCcjnEktLenMwTQPM=\");\n_c = PraVoceLinks;\nvar _c;\n$RefreshReg$(_c, \"PraVoceLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2hlYWRlcnNMaW5rcy9QcmFWb2NlTGlua3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVzQztBQUNPO0FBQ2I7QUFFakIsU0FBU0k7O0lBRXBCLDBCQUEwQjtJQUMzQixNQUFNLENBQUVDLG9CQUFxQkMsc0JBQXVCLEdBQUdILCtDQUFRQSxDQUFDO0lBRWhFLE1BQU1JLHlCQUF5QjtRQUM3QixNQUFNQyxlQUFlQyxTQUFTQyxjQUFjLENBQUM7UUFDN0MsTUFBTUMsY0FBY0YsU0FBU0MsY0FBYyxDQUFDO1FBRTVDSixzQkFBc0IsQ0FBQ0Q7UUFFdEIsMEJBQTBCO1FBQzNCRyxhQUFhSSxLQUFLLENBQUNDLFVBQVUsR0FBRztRQUVoQyxJQUFLUixvQkFBcUI7WUFDeEJJLFNBQVNLLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxTQUFTLEdBQUc7WUFDaENQLGFBQWFJLEtBQUssQ0FBQ0ksU0FBUyxHQUFHO1lBQy9CTCxZQUFZQyxLQUFLLENBQUNLLEtBQUssR0FBRztRQUM1QixPQUFPO1lBQ0xSLFNBQVNLLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxTQUFTLEdBQUc7WUFDaENQLGFBQWFJLEtBQUssQ0FBQ0ksU0FBUyxHQUFHO1lBQy9CTCxZQUFZQyxLQUFLLENBQUNLLEtBQUssR0FBRztRQUM1QjtJQUNGO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ3BCQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxpQkFBaUI7UUFDdEJELE9BQU87SUFDVDtJQUVDLE1BQU1FLGlCQUFpQjtRQUNyQkMsUUFBUTtJQUNWO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBSUMsV0FBVTtnQkFBOEJDLFNBQVNsQjs7a0NBQ3BELDhEQUFDZ0I7d0JBQUlDLFdBQVU7d0JBQWlFRSxJQUFHO2tDQUFlOzs7Ozs7a0NBQ2xHLDhEQUFDekIsb0RBQVdBO3dCQUFDdUIsV0FBVTt3QkFBMkJFLElBQUc7Ozs7Ozs7Ozs7OztZQUd0RHJCLG9DQUNELDhEQUFDTCxpREFBTUEsQ0FBQ3VCLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZHLFNBQVM7b0JBQUVDLFNBQVM7Z0JBQUU7Z0JBQ3RCQyxTQUFTO29CQUFFRCxTQUFTO2dCQUFFO2dCQUN0QmYsWUFBWTtvQkFBRWlCLFVBQVU7Z0JBQUk7MEJBRTVCLDRFQUFDUDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ087Z0RBQUVQLFdBQVU7MERBQXNFOzs7Ozs7MERBQ25GLDhEQUFDdEIsb0RBQUNBO2dEQUFDc0IsV0FBVTtnREFBeUNDLFNBQVNsQjs7Ozs7Ozs7Ozs7O2tEQUVqRSw4REFBQ2dCO3dDQUFJQyxXQUFVO2tEQUFxRTs7Ozs7Ozs7Ozs7OzBDQUV0Riw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBR2IsNEVBQUNEO29DQUFJQyxXQUFVO29DQUFZWixPQUFPUTs4Q0FDaEMsNEVBQUNHO3dDQUFJQyxXQUFVO3dDQUFnRlosT0FBT1M7a0RBQ25HLDRFQUFDRTs0Q0FBSUMsV0FBVTs7OERBQ2QsOERBQUNPO29EQUFFUCxXQUFVOzhEQUEyRTs7Ozs7OzhEQUN4Riw4REFBQ0Q7b0RBQUlDLFdBQVU7O3NFQUNkLDhEQUFDUTs0REFBRUMsTUFBSzs0REFBR1QsV0FBVTtzRUFBdUU7Ozs7OztzRUFDNUYsOERBQUNROzREQUFFQyxNQUFLOzREQUFHVCxXQUFVO3NFQUFpRjs7Ozs7O3NFQUN0Ryw4REFBQ1E7NERBQUVDLE1BQUs7NERBQUdULFdBQVU7c0VBQWlGOzs7Ozs7c0VBQ3RHLDhEQUFDUTs0REFBRUMsTUFBSzs0REFBR1QsV0FBVTtzRUFBaUY7Ozs7OztzRUFDdEcsOERBQUNROzREQUFFQyxNQUFLOzREQUFHVCxXQUFVO3NFQUFpRjs7Ozs7O3NFQUN0Ryw4REFBQ1E7NERBQUVDLE1BQUs7NERBQUdULFdBQVU7c0VBQWlGOzs7Ozs7c0VBQ3RHLDhEQUFDUTs0REFBRUMsTUFBSzs0REFBR1QsV0FBVTtzRUFBaUY7Ozs7OztzRUFDdEcsOERBQUNROzREQUFFQyxNQUFLOzREQUFHVCxXQUFVO3NFQUFpRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzNIO0dBekZ1QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9oZWFkZXJzTGlua3MvUHJhVm9jZUxpbmtzLnRzeD80YThkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgeyBDaGV2cm9uRG93biwgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmFWb2NlTGlua3MoKSB7XHJcbiAgXHJcbiAgICAvL0FicmlyIG9zIGxpbmtzIGRvIGhlYWRlclxyXG4gICBjb25zdCBbIGlzUHJhVm9jZUxpbmtzT3BlbiAsIHNldElzUHJhVm9jZUxpbmtzT3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpIFxyXG5cclxuICAgY29uc3QgaGFuZGxlUHJhVm9jZUxpbmtBY2VzcyA9ICgpID0+IHtcclxuICAgICBjb25zdCBQcmFWb2NlQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJhVm9jZUFycm93JykgYXMgSFRNTEltYWdlRWxlbWVudFxyXG4gICAgIGNvbnN0IFByYVZvY2VMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1ByYVZvY2VMaW5rJykgYXMgSFRNTERpdkVsZW1lbnRcclxuXHJcbiAgICAgc2V0SXNQcmFWb2NlTGlua3NPcGVuKCFpc1ByYVZvY2VMaW5rc09wZW4pXHJcblxyXG4gICAgICAvL1RyYW5zaWNhbyBkYSBpbnRlciBhcnJvd1xyXG4gICAgIFByYVZvY2VBcnJvdy5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAuMnMgZWFzZS1pbi1vdXQnXHJcbiAgICBcclxuICAgICBpZiAoIGlzUHJhVm9jZUxpbmtzT3BlbiApIHtcclxuICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCdcclxuICAgICAgIFByYVZvY2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJ1xyXG4gICAgICAgUHJhVm9jZUxpbmsuc3R5bGUuY29sb3IgPSAncmdiKDIyLCAyMiwgMjIpJ1xyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXHJcbiAgICAgICBQcmFWb2NlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgtMTgwZGVnKSdcclxuICAgICAgIFByYVZvY2VMaW5rLnN0eWxlLmNvbG9yID0gJyNmZjdhMDAnXHJcbiAgICAgfVxyXG4gICB9XHJcbiAgXHJcbiAgIGNvbnN0IGRpdlN0eWxlV2lkdGggPSB7XHJcbiAgICAgd2lkdGg6ICcxNi42NjY2NjY2NyUnLFxyXG4gICB9XHJcblxyXG4gICBjb25zdCBkaXZTdHlsZVdpZHRoMiA9IHtcclxuICAgIHdpZHRoOiAnMjUlJyxcclxuICB9XHJcblxyXG4gICBjb25zdCBkaXZTdHlsZUhlaWdodCA9IHtcclxuICAgICBoZWlnaHQ6ICcyNjhweCcsXHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPD5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggcHktWzVdIHB4LTEgbWwtWzE0cHhdXCIgb25DbGljaz17aGFuZGxlUHJhVm9jZUxpbmtBY2Vzc30+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtWzE0cHhdIGZvbnQtW3JnYigyMiwgMjIsIDIyKV0gZm9udC1zZW1pYm9sZCBmb250LWludGVyIFwiICBpZD1cIlByYVZvY2VMaW5rXCIgPlByYSB2b2PDqjwvZGl2PlxyXG4gICAgICAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPVwiIHRleHQtWyNCNkI3QkJdIG1sLVs1cHhdXCIgaWQ9XCJQcmFWb2NlQXJyb3dcIi8+XHJcbiAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICB7aXNQcmFWb2NlTGlua3NPcGVuICYmIChcclxuICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC1bMTE0cHhdIGxlZnQtMCB3LWZ1bGwgY2FsY0hlaWdodCB6LTEwIGJnLXdoaXRlIHB5LTRcIlxyXG4gICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxyXG4gICAgICAgPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxNDI4cHhdIGgtWzUwMHB4XVwiPlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcHgtM1wiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItWzQwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGZvbnQtc29yYSBmb250LXNlbWlib2xkIHRleHQtWzIwcHhdICBsZWFkaW5nLVsyNXB4XSB0ZXh0LVsjMTYxNjE2XVwiPlByYSB2b2PDqjwvcD5cclxuICAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgaC03IHctNyB0ZXh0LVsjQjZCN0JCXVwiIG9uQ2xpY2s9e2hhbmRsZVByYVZvY2VMaW5rQWNlc3N9Lz5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zb3JhIGZvbnQtc2VtaWJvbGQgdGV4dC1bMTZweF0gIGxlYWRpbmctWzI1cHhdIHRleHQtWyMxNjE2MTZdXCI+VHVkbyBlbSBzdWEgY29udGE8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleC13cmFwIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgIHsvKiAywrAgSXRlbSBkbyBsaW5rICovfVxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgcHgtM1wiIHN0eWxlPXtkaXZTdHlsZVdpZHRoMn0+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmctdHJhbnNwYXJlbnQgcm91bmRlZC1bOHB4XSBib3JkZXIteS1bMXB4XSBib3JkZXIteC1bMXB4XSBib3JkZXItWyNkZWRmZTRdXCIgIHN0eWxlPXtkaXZTdHlsZUhlaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBweC1bMTVweF0gcHktNCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgbWItNiBmb250LXNvcmEgZm9udC1zZW1pYm9sZCB0ZXh0LVsxNnB4XSBsZWFkaW5nLVsyMHB4XSB0ZXh0LVsjMTYxNjE2XSBcIj5Db250YSBEaWdpdGFsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGZsZXgtY29sIGp1c3RpZnktc3RhcnQgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJibG9jayBmb250LWludGVyIHRleHQtWyNGRjdBMDBdIGZvbnQtYm9sZCB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsxN3B4XVwiPkNvbnRhIERpZ2l0YWw8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1pbnRlciB0ZXh0LVsjRkY3QTAwXSBmb250LWJvbGQgdGV4dC1bMTRweF0gbGVhZGluZy1bMTdweF0gbWFyZ2luVG9wXCI+Q29udGEgS2lkczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJibG9jayBmb250LWludGVyIHRleHQtWyNGRjdBMDBdIGZvbnQtYm9sZCB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsxN3B4XSBtYXJnaW5Ub3BcIj5JbnRlciBZb3U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1pbnRlciB0ZXh0LVsjRkY3QTAwXSBmb250LWJvbGQgdGV4dC1bMTRweF0gbGVhZGluZy1bMTdweF0gbWFyZ2luVG9wXCI+SW5kaXF1ZSBlIEdhbmhlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtaW50ZXIgdGV4dC1bI0ZGN0EwMF0gZm9udC1ib2xkIHRleHQtWzE0cHhdIGxlYWRpbmctWzE3cHhdIG1hcmdpblRvcFwiPkNvbnRhIERpZ2l0YWw8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1pbnRlciB0ZXh0LVsjRkY3QTAwXSBmb250LWJvbGQgdGV4dC1bMTRweF0gbGVhZGluZy1bMTdweF0gbWFyZ2luVG9wXCI+Q29udGEgS2lkczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJibG9jayBmb250LWludGVyIHRleHQtWyNGRjdBMDBdIGZvbnQtYm9sZCB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsxN3B4XSBtYXJnaW5Ub3BcIj5JbnRlciBZb3U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1pbnRlciB0ZXh0LVsjRkY3QTAwXSBmb250LWJvbGQgdGV4dC1bMTRweF0gbGVhZGluZy1bMTdweF0gbWFyZ2luVG9wXCI+SW5kaXF1ZSBlIEdhbmhlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgPC8+XHJcbiAgIClcclxuIH0iXSwibmFtZXMiOlsibW90aW9uIiwiQ2hldnJvbkRvd24iLCJYIiwidXNlU3RhdGUiLCJQcmFWb2NlTGlua3MiLCJpc1ByYVZvY2VMaW5rc09wZW4iLCJzZXRJc1ByYVZvY2VMaW5rc09wZW4iLCJoYW5kbGVQcmFWb2NlTGlua0FjZXNzIiwiUHJhVm9jZUFycm93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlByYVZvY2VMaW5rIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiYm9keSIsIm92ZXJmbG93WSIsInRyYW5zZm9ybSIsImNvbG9yIiwiZGl2U3R5bGVXaWR0aCIsIndpZHRoIiwiZGl2U3R5bGVXaWR0aDIiLCJkaXZTdHlsZUhlaWdodCIsImhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpZCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwicCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/headersLinks/PraVoceLinks.tsx\n"));

/***/ })

});