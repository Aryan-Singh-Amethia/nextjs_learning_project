"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/contact.module.css */ \"./styles/contact.module.css\");\n/* harmony import */ var _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Contact */ \"./components/Contact.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction contact() {\n    _s();\n    let [contactList, setContactList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const contactNameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const onSubmitHandler = (event)=>{\n        event.preventDefault();\n        console.log(\"Newly Entered Contact :: \", contactNameRef.current.value);\n        setContactList([\n            ...contactList,\n            contactNameRef.current.value\n        ]);\n        document.getElementById(\"name\").value = \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().contactRootLayout),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Contact\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().contactFormLayout),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().contactForm),\n                    onSubmit: onSubmitHandler,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"name\",\n                            className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputLabel),\n                            children: \"Enter Contact Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"name\",\n                            ref: contactNameRef\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            contactList.size() > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().addedContactsRoot),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().addedContacts),\n                    children: contactList.map((contactName, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            name: contactName\n                        }, idx, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                            lineNumber: 34,\n                            columnNumber: 46\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                lineNumber: 32,\n                columnNumber: 32\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(contact, \"0u4rKzmaGEuMZ5yAPwIplzKoPH8=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDTjtBQUNRO0FBQ0Q7QUFFakQsU0FBU00sVUFBVTs7SUFFakIsSUFBSSxDQUFDQyxhQUFZQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFOUMsTUFBTU8saUJBQWlCUiw2Q0FBTUE7SUFFN0IsTUFBTVMsa0JBQWtCLENBQUNDLFFBQVM7UUFDL0JBLE1BQU1DLGNBQWM7UUFDcEJDLFFBQVFDLEdBQUcsQ0FBQyw2QkFBNEJMLGVBQWVNLE9BQU8sQ0FBQ0MsS0FBSztRQUNwRVIsZUFBZTtlQUFJRDtZQUFZRSxlQUFlTSxPQUFPLENBQUNDLEtBQUs7U0FBQztRQUM1REMsU0FBU0MsY0FBYyxDQUFDLFFBQVFGLEtBQUssR0FBQztJQUN6QztJQUVBLHFCQUNFLDhEQUFDaEIsdURBQWM7OzBCQUNiLDhEQUFDRywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDaUI7Z0JBQUlDLFdBQVdqQixxRkFBd0I7MEJBQ3hDLDRFQUFDbUI7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUVKLDhEQUFDSDtnQkFBSUMsV0FBV2pCLHFGQUF3QjswQkFDeEMsNEVBQUNxQjtvQkFBS0osV0FBV2pCLCtFQUFrQjtvQkFBRXVCLFVBQVVqQjs7c0NBQzdDLDhEQUFDa0I7NEJBQU1DLFNBQVE7NEJBQU9SLFdBQVdqQiw4RUFBaUI7c0NBQUU7Ozs7OztzQ0FDcEQsOERBQUMyQjs0QkFBTUMsTUFBSzs0QkFBT0MsSUFBRzs0QkFBT0MsS0FBS3pCOzs7Ozs7c0NBQ2xDLDhEQUFDMEI7NEJBQU9ILE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR3ZCekIsWUFBWTZCLElBQUksS0FBRyxtQkFBSyw4REFBQ2hCO2dCQUFJQyxXQUFXakIscUZBQXdCOzBCQUNqRSw0RUFBQ2dCO29CQUFJQyxXQUFXakIsaUZBQW9COzhCQUNoQ0csWUFBWWdDLEdBQUcsQ0FBQyxDQUFDQyxhQUFZQyxvQkFBTSw4REFBQ3BDLDJEQUFZQTs0QkFBQ3FDLE1BQU1GOzJCQUFrQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuRjtHQWpDU25DO0FBbUNSLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRhY3QuanM/NGU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbnRhY3QubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBBZGRlZENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0JztcclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3QoKSB7XHJcblxyXG4gIGxldCBbY29udGFjdExpc3Qsc2V0Q29udGFjdExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBjb250YWN0TmFtZVJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+e1xyXG4gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgY29uc29sZS5sb2coJ05ld2x5IEVudGVyZWQgQ29udGFjdCA6OiAnLGNvbnRhY3ROYW1lUmVmLmN1cnJlbnQudmFsdWUpO1xyXG4gICAgIHNldENvbnRhY3RMaXN0KFsuLi5jb250YWN0TGlzdCxjb250YWN0TmFtZVJlZi5jdXJyZW50LnZhbHVlXSlcclxuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlPScnO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxOYXZiYXIvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RSb290TGF5b3V0fT5cclxuICAgICAgPGgxPkNvbnRhY3Q8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0Rm9ybUxheW91dH0+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RGb3JtfSBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZScgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRMYWJlbH0+RW50ZXIgQ29udGFjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25hbWUnIHJlZj17Y29udGFjdE5hbWVSZWZ9Lz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+QWRkPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjb250YWN0TGlzdC5zaXplKCk+MCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZGVkQ29udGFjdHNSb290fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRlZENvbnRhY3RzfT5cclxuICAgICAgICAge2NvbnRhY3RMaXN0Lm1hcCgoY29udGFjdE5hbWUsaWR4KT0+PEFkZGVkQ29udGFjdCBuYW1lPXtjb250YWN0TmFtZX0ga2V5PXtpZHh9Lz4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjb250YWN0XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTmF2YmFyIiwic3R5bGVzIiwiQWRkZWRDb250YWN0IiwiY29udGFjdCIsImNvbnRhY3RMaXN0Iiwic2V0Q29udGFjdExpc3QiLCJjb250YWN0TmFtZVJlZiIsIm9uU3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInZhbHVlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkZyYWdtZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFjdFJvb3RMYXlvdXQiLCJoMSIsImNvbnRhY3RGb3JtTGF5b3V0IiwiZm9ybSIsImNvbnRhY3RGb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dExhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZWYiLCJidXR0b24iLCJzaXplIiwiYWRkZWRDb250YWN0c1Jvb3QiLCJhZGRlZENvbnRhY3RzIiwibWFwIiwiY29udGFjdE5hbWUiLCJpZHgiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n"));

/***/ })

});