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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/contact.module.css */ \"./styles/contact.module.css\");\n/* harmony import */ var _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Contact */ \"./components/Contact.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction contact() {\n    _s();\n    let [contactList, setContactList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const contactNameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const onSubmitHandler = (event)=>{\n        event.preventDefault();\n        console.log(\"Newly Entered Contact :: \", contactNameRef.current.value);\n        setContactList([\n            ...contactList,\n            contactNameRef.current.value\n        ]);\n        document.getElementById(\"name\").value = \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().contactRootLayout),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().contactHeader),\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().contactFormLayout),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().contactForm),\n                    onSubmit: onSubmitHandler,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"name\",\n                            className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputLabel),\n                            children: \"Enter Contact Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"name\",\n                            ref: contactNameRef\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            contactList.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().addedContactsRoot),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().addedContacts),\n                    children: contactList.map((contactName, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            name: contactName\n                        }, idx, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                            lineNumber: 36,\n                            columnNumber: 46\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n                lineNumber: 34,\n                columnNumber: 32\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\NEXTjsProjects\\\\nextjs_first_project\\\\first-next-app\\\\pages\\\\contact.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(contact, \"0u4rKzmaGEuMZ5yAPwIplzKoPH8=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDTjtBQUNRO0FBQ0Q7QUFFakQsU0FBU00sVUFBVTs7SUFFakIsSUFBSSxDQUFDQyxhQUFZQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFOUMsTUFBTU8saUJBQWlCUiw2Q0FBTUE7SUFFN0IsTUFBTVMsa0JBQWtCLENBQUNDLFFBQVM7UUFDL0JBLE1BQU1DLGNBQWM7UUFDcEJDLFFBQVFDLEdBQUcsQ0FBQyw2QkFBNEJMLGVBQWVNLE9BQU8sQ0FBQ0MsS0FBSztRQUNwRVIsZUFBZTtlQUFJRDtZQUFZRSxlQUFlTSxPQUFPLENBQUNDLEtBQUs7U0FBQztRQUM1REMsU0FBU0MsY0FBYyxDQUFDLFFBQVFGLEtBQUssR0FBQztJQUN6QztJQUVBLHFCQUNFLDhEQUFDaEIsdURBQWM7OzBCQUNiLDhEQUFDRywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDaUI7Z0JBQUlDLE9BQU87b0JBQUNDLFNBQVE7b0JBQU9DLGdCQUFlO2dCQUFROzBCQUNuRCw0RUFBQ0g7b0JBQUlJLFdBQVdwQixxRkFBd0I7OEJBQ3hDLDRFQUFDc0I7d0JBQUdGLFdBQVdwQixpRkFBb0I7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3JDLDhEQUFDZ0I7Z0JBQUlJLFdBQVdwQixxRkFBd0I7MEJBQ3hDLDRFQUFDeUI7b0JBQUtMLFdBQVdwQiwrRUFBa0I7b0JBQUUyQixVQUFVckI7O3NDQUM3Qyw4REFBQ3NCOzRCQUFNQyxTQUFROzRCQUFPVCxXQUFXcEIsOEVBQWlCO3NDQUFFOzs7Ozs7c0NBQ3BELDhEQUFDK0I7NEJBQU1DLE1BQUs7NEJBQU9DLElBQUc7NEJBQU9DLEtBQUs3Qjs7Ozs7O3NDQUNsQyw4REFBQzhCOzRCQUFPSCxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztZQUd2QjdCLFlBQVlpQyxNQUFNLEdBQUMsbUJBQUssOERBQUNwQjtnQkFBSUksV0FBV3BCLHFGQUF3QjswQkFDakUsNEVBQUNnQjtvQkFBSUksV0FBV3BCLGlGQUFvQjs4QkFDaENHLFlBQVlvQyxHQUFHLENBQUMsQ0FBQ0MsYUFBWUMsb0JBQU0sOERBQUN4QywyREFBWUE7NEJBQUN5QyxNQUFNRjsyQkFBa0JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkY7R0FuQ1N2QztBQXFDUiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250YWN0LmpzPzRlNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb250YWN0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQWRkZWRDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdCc7XHJcblxyXG5mdW5jdGlvbiBjb250YWN0KCkge1xyXG5cclxuICBsZXQgW2NvbnRhY3RMaXN0LHNldENvbnRhY3RMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgY29udGFjdE5hbWVSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PntcclxuICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgIGNvbnNvbGUubG9nKCdOZXdseSBFbnRlcmVkIENvbnRhY3QgOjogJyxjb250YWN0TmFtZVJlZi5jdXJyZW50LnZhbHVlKTtcclxuICAgICBzZXRDb250YWN0TGlzdChbLi4uY29udGFjdExpc3QsY29udGFjdE5hbWVSZWYuY3VycmVudC52YWx1ZV0pXHJcbiAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZT0nJztcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8TmF2YmFyLz5cclxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdFJvb3RMYXlvdXR9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdEhlYWRlcn0+Q29udGFjdDwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0Rm9ybUxheW91dH0+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RGb3JtfSBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZScgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRMYWJlbH0+RW50ZXIgQ29udGFjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25hbWUnIHJlZj17Y29udGFjdE5hbWVSZWZ9Lz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+QWRkPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjb250YWN0TGlzdC5sZW5ndGg+MCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZGVkQ29udGFjdHNSb290fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRlZENvbnRhY3RzfT5cclxuICAgICAgICAge2NvbnRhY3RMaXN0Lm1hcCgoY29udGFjdE5hbWUsaWR4KT0+PEFkZGVkQ29udGFjdCBuYW1lPXtjb250YWN0TmFtZX0ga2V5PXtpZHh9Lz4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjb250YWN0XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTmF2YmFyIiwic3R5bGVzIiwiQWRkZWRDb250YWN0IiwiY29udGFjdCIsImNvbnRhY3RMaXN0Iiwic2V0Q29udGFjdExpc3QiLCJjb250YWN0TmFtZVJlZiIsIm9uU3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInZhbHVlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkZyYWdtZW50IiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjbGFzc05hbWUiLCJjb250YWN0Um9vdExheW91dCIsImgxIiwiY29udGFjdEhlYWRlciIsImNvbnRhY3RGb3JtTGF5b3V0IiwiZm9ybSIsImNvbnRhY3RGb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dExhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZWYiLCJidXR0b24iLCJsZW5ndGgiLCJhZGRlZENvbnRhY3RzUm9vdCIsImFkZGVkQ29udGFjdHMiLCJtYXAiLCJjb250YWN0TmFtZSIsImlkeCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contact.js\n"));

/***/ })

});