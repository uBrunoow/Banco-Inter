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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PraVoceLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Contents_PraVoceContent_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contents/PraVoceContent.1 */ \"(app-client)/./src/headersLinks/Contents/PraVoceContent.1.tsx\");\n/* harmony import */ var _Contents_PraVoceContent_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contents/PraVoceContent.2 */ \"(app-client)/./src/headersLinks/Contents/PraVoceContent.2.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PraVoceLinks() {\n    _s();\n    //Abrir os links do header\n    const [isPraVoceLinksOpen, setIsPraVoceLinksOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handlePraVoceLinkAcess = ()=>{\n        const PraVoceArrow = document.getElementById(\"PraVoceArrow\");\n        const PraVoceLink = document.getElementById(\"PraVoceLink\");\n        setIsPraVoceLinksOpen(!isPraVoceLinksOpen);\n        //Transicao da inter arrow\n        PraVoceArrow.style.transition = \"all .2s ease-in-out\";\n        if (isPraVoceLinksOpen) {\n            document.body.style.overflowY = \"scroll\";\n            PraVoceArrow.style.transform = \"rotate(0deg)\";\n            PraVoceLink.style.color = \"rgb(22, 22, 22)\";\n        } else {\n            document.body.style.overflowY = \"hidden\";\n            PraVoceArrow.style.transform = \"rotate(-180deg)\";\n            PraVoceLink.style.color = \"#ff7a00\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex py-[5] px-1 ml-[14px]\",\n                onClick: handlePraVoceLinkAcess,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-[14px] font-[rgb(22, 22, 22)] font-semibold font-inter \",\n                        id: \"PraVoceLink\",\n                        children: \"Pra voc\\xea\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \" text-[#B6B7BB] ml-[5px]\",\n                        id: \"PraVoceArrow\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 10\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                lineNumber: 36,\n                columnNumber: 8\n            }, this),\n            isPraVoceLinksOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: \"fixed top-[114px] left-0 w-full calcHeight z-10 bg-white py-4\",\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.2\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[1428px] h-[500px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" flex items-center justify-between mb-[40px]\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \" font-sora font-semibold text-[20px]  leading-[25px] text-[#161616]\",\n                                                children: \"Pra voc\\xea\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 18\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                className: \" cursor-pointer h-7 w-7 text-[#B6B7BB]\",\n                                                onClick: handlePraVoceLinkAcess\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 18\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-sora font-semibold text-[16px]  leading-[25px] text-[#161616]\",\n                                        children: \"Tudo em sua conta\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 16\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 14\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex-wrap flex justify-start items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Contents_PraVoceContent_1__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        title: \"Conta Digital\",\n                                        desc1: \"Conta Digital\",\n                                        desc2: \"Conta Kids\",\n                                        desc3: \"Inter You\",\n                                        desc4: \"Indique e Ganhe\",\n                                        desc5: \"\",\n                                        desc6: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Contents_PraVoceContent_2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        title: \"Empr\\xe9stimos\",\n                                        desc1: \"Com Garantia de Im\\xf3vel\",\n                                        desc2: \"Consignado P\\xfablico\",\n                                        desc3: \"Inter You\",\n                                        desc4: \"Indique e Ganhe\",\n                                        desc5: \"\",\n                                        desc6: \"\",\n                                        desc7: \"\",\n                                        desc8: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 14\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 12\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                lineNumber: 42,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PraVoceLinks, \"yzvLjfxlcszCcjnEktLenMwTQPM=\");\n_c = PraVoceLinks;\nvar _c;\n$RefreshReg$(_c, \"PraVoceLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2hlYWRlcnNMaW5rcy9QcmFWb2NlTGlua3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXNDO0FBQ087QUFDYjtBQUN5QjtBQUNBO0FBRTFDLFNBQVNNOztJQUVwQiwwQkFBMEI7SUFDM0IsTUFBTSxDQUFFQyxvQkFBcUJDLHNCQUF1QixHQUFHTCwrQ0FBUUEsQ0FBQztJQUVoRSxNQUFNTSx5QkFBeUI7UUFDN0IsTUFBTUMsZUFBZUMsU0FBU0MsY0FBYyxDQUFDO1FBQzdDLE1BQU1DLGNBQWNGLFNBQVNDLGNBQWMsQ0FBQztRQUU1Q0osc0JBQXNCLENBQUNEO1FBRXRCLDBCQUEwQjtRQUMzQkcsYUFBYUksS0FBSyxDQUFDQyxVQUFVLEdBQUc7UUFFaEMsSUFBS1Isb0JBQXFCO1lBQ3hCSSxTQUFTSyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csU0FBUyxHQUFHO1lBQ2hDUCxhQUFhSSxLQUFLLENBQUNJLFNBQVMsR0FBRztZQUMvQkwsWUFBWUMsS0FBSyxDQUFDSyxLQUFLLEdBQUc7UUFDNUIsT0FBTztZQUNMUixTQUFTSyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csU0FBUyxHQUFHO1lBQ2hDUCxhQUFhSSxLQUFLLENBQUNJLFNBQVMsR0FBRztZQUMvQkwsWUFBWUMsS0FBSyxDQUFDSyxLQUFLLEdBQUc7UUFDNUI7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUlDLFdBQVU7Z0JBQThCQyxTQUFTYjs7a0NBQ3BELDhEQUFDVzt3QkFBSUMsV0FBVTt3QkFBaUVFLElBQUc7a0NBQWU7Ozs7OztrQ0FDbEcsOERBQUN0QixvREFBV0E7d0JBQUNvQixXQUFVO3dCQUEyQkUsSUFBRzs7Ozs7Ozs7Ozs7O1lBR3REaEIsb0NBQ0QsOERBQUNQLGlEQUFNQSxDQUFDb0IsR0FBRztnQkFDVEMsV0FBVTtnQkFDVkcsU0FBUztvQkFBRUMsU0FBUztnQkFBRTtnQkFDdEJDLFNBQVM7b0JBQUVELFNBQVM7Z0JBQUU7Z0JBQ3RCVixZQUFZO29CQUFFWSxVQUFVO2dCQUFJOzBCQUU1Qiw0RUFBQ1A7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNPO2dEQUFFUCxXQUFVOzBEQUFzRTs7Ozs7OzBEQUNuRiw4REFBQ25CLG9EQUFDQTtnREFBQ21CLFdBQVU7Z0RBQXlDQyxTQUFTYjs7Ozs7Ozs7Ozs7O2tEQUVqRSw4REFBQ1c7d0NBQUlDLFdBQVU7a0RBQXFFOzs7Ozs7Ozs7Ozs7MENBRXRGLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBRWQsOERBQUNqQixrRUFBZUE7d0NBQUN5QixPQUFNO3dDQUFnQkMsT0FBTTt3Q0FBZ0JDLE9BQU07d0NBQWFDLE9BQU07d0NBQVlDLE9BQU07d0NBQWtCQyxPQUFNO3dDQUFHQyxPQUFNOzs7Ozs7a0RBRXpJLDhEQUFDOUIsa0VBQWVBO3dDQUFDd0IsT0FBTTt3Q0FBY0MsT0FBTTt3Q0FBeUJDLE9BQU07d0NBQXFCQyxPQUFNO3dDQUFZQyxPQUFNO3dDQUFrQkMsT0FBTTt3Q0FBR0MsT0FBTTt3Q0FBR0MsT0FBTTt3Q0FBR0MsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3ZMO0dBN0R1Qi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9oZWFkZXJzTGlua3MvUHJhVm9jZUxpbmtzLnRzeD80YThkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgeyBDaGV2cm9uRG93biwgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBQcmFWb2NlQ29udGVudDEgZnJvbSBcIi4vQ29udGVudHMvUHJhVm9jZUNvbnRlbnQuMVwiXHJcbmltcG9ydCBQcmFWb2NlQ29udGVudDIgZnJvbSBcIi4vQ29udGVudHMvUHJhVm9jZUNvbnRlbnQuMlwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmFWb2NlTGlua3MoKSB7XHJcbiAgXHJcbiAgICAvL0FicmlyIG9zIGxpbmtzIGRvIGhlYWRlclxyXG4gICBjb25zdCBbIGlzUHJhVm9jZUxpbmtzT3BlbiAsIHNldElzUHJhVm9jZUxpbmtzT3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpIFxyXG5cclxuICAgY29uc3QgaGFuZGxlUHJhVm9jZUxpbmtBY2VzcyA9ICgpID0+IHtcclxuICAgICBjb25zdCBQcmFWb2NlQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJhVm9jZUFycm93JykgYXMgSFRNTEltYWdlRWxlbWVudFxyXG4gICAgIGNvbnN0IFByYVZvY2VMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1ByYVZvY2VMaW5rJykgYXMgSFRNTERpdkVsZW1lbnRcclxuXHJcbiAgICAgc2V0SXNQcmFWb2NlTGlua3NPcGVuKCFpc1ByYVZvY2VMaW5rc09wZW4pXHJcblxyXG4gICAgICAvL1RyYW5zaWNhbyBkYSBpbnRlciBhcnJvd1xyXG4gICAgIFByYVZvY2VBcnJvdy5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAuMnMgZWFzZS1pbi1vdXQnXHJcbiAgICBcclxuICAgICBpZiAoIGlzUHJhVm9jZUxpbmtzT3BlbiApIHtcclxuICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCdcclxuICAgICAgIFByYVZvY2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJ1xyXG4gICAgICAgUHJhVm9jZUxpbmsuc3R5bGUuY29sb3IgPSAncmdiKDIyLCAyMiwgMjIpJ1xyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXHJcbiAgICAgICBQcmFWb2NlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgtMTgwZGVnKSdcclxuICAgICAgIFByYVZvY2VMaW5rLnN0eWxlLmNvbG9yID0gJyNmZjdhMDAnXHJcbiAgICAgfVxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgIDw+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IHB5LVs1XSBweC0xIG1sLVsxNHB4XVwiIG9uQ2xpY2s9e2hhbmRsZVByYVZvY2VMaW5rQWNlc3N9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LVsxNHB4XSBmb250LVtyZ2IoMjIsIDIyLCAyMildIGZvbnQtc2VtaWJvbGQgZm9udC1pbnRlciBcIiAgaWQ9XCJQcmFWb2NlTGlua1wiID5QcmEgdm9jw6o8L2Rpdj5cclxuICAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cIiB0ZXh0LVsjQjZCN0JCXSBtbC1bNXB4XVwiIGlkPVwiUHJhVm9jZUFycm93XCIvPlxyXG4gICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAge2lzUHJhVm9jZUxpbmtzT3BlbiAmJiAoXHJcbiAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtWzExNHB4XSBsZWZ0LTAgdy1mdWxsIGNhbGNIZWlnaHQgei0xMCBiZy13aGl0ZSBweS00XCJcclxuICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cclxuICAgICAgID5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTQyOHB4XSBoLVs1MDBweF1cIj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHB4LTNcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLVs0MHB4XVwiPlxyXG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBmb250LXNvcmEgZm9udC1zZW1pYm9sZCB0ZXh0LVsyMHB4XSAgbGVhZGluZy1bMjVweF0gdGV4dC1bIzE2MTYxNl1cIj5QcmEgdm9jw6o8L3A+XHJcbiAgICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIGgtNyB3LTcgdGV4dC1bI0I2QjdCQl1cIiBvbkNsaWNrPXtoYW5kbGVQcmFWb2NlTGlua0FjZXNzfS8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc29yYSBmb250LXNlbWlib2xkIHRleHQtWzE2cHhdICBsZWFkaW5nLVsyNXB4XSB0ZXh0LVsjMTYxNjE2XVwiPlR1ZG8gZW0gc3VhIGNvbnRhPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgtd3JhcCBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxQcmFWb2NlQ29udGVudDEgdGl0bGU9XCJDb250YSBEaWdpdGFsXCIgZGVzYzE9XCJDb250YSBEaWdpdGFsXCIgZGVzYzI9XCJDb250YSBLaWRzXCIgZGVzYzM9XCJJbnRlciBZb3VcIiBkZXNjND1cIkluZGlxdWUgZSBHYW5oZVwiIGRlc2M1PVwiXCIgZGVzYzY9XCJcIi8+XHJcblxyXG4gICAgICAgICAgICAgIDxQcmFWb2NlQ29udGVudDIgdGl0bGU9XCJFbXByw6lzdGltb3NcIiBkZXNjMT1cIkNvbSBHYXJhbnRpYSBkZSBJbcOzdmVsXCIgZGVzYzI9XCJDb25zaWduYWRvIFDDumJsaWNvXCIgZGVzYzM9XCJJbnRlciBZb3VcIiBkZXNjND1cIkluZGlxdWUgZSBHYW5oZVwiIGRlc2M1PVwiXCIgZGVzYzY9XCJcIiBkZXNjNz1cIlwiIGRlc2M4PVwiXCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgPC8+XHJcbiAgIClcclxuIH0iXSwibmFtZXMiOlsibW90aW9uIiwiQ2hldnJvbkRvd24iLCJYIiwidXNlU3RhdGUiLCJQcmFWb2NlQ29udGVudDEiLCJQcmFWb2NlQ29udGVudDIiLCJQcmFWb2NlTGlua3MiLCJpc1ByYVZvY2VMaW5rc09wZW4iLCJzZXRJc1ByYVZvY2VMaW5rc09wZW4iLCJoYW5kbGVQcmFWb2NlTGlua0FjZXNzIiwiUHJhVm9jZUFycm93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlByYVZvY2VMaW5rIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiYm9keSIsIm92ZXJmbG93WSIsInRyYW5zZm9ybSIsImNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImlkIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZHVyYXRpb24iLCJwIiwidGl0bGUiLCJkZXNjMSIsImRlc2MyIiwiZGVzYzMiLCJkZXNjNCIsImRlc2M1IiwiZGVzYzYiLCJkZXNjNyIsImRlc2M4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/headersLinks/PraVoceLinks.tsx\n"));

/***/ })

});