/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/skin/skin-2.css */ \"./css/skin/skin-2.css\");\n/* harmony import */ var _css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/switcher.css */ \"./styles/switcher.css\");\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"D:\\\\theme2\\\\samar2\\\\pages\\\\_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n //import Slider from \"react-rangeslider\";\n//import \"react-rangeslider/lib/index.css\";\n\n\n //import {useScrollPosition} from \"@n8tb1t/use-scroll-position\";\n//import \"../css/skin/skin-1.css\";\n//import \"../css/skin/skin-3.css\";\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: toggle1,\n    1: setToggle1\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: body_,\n    1: setbody_\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: layout,\n    1: setLayout\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"wide\");\n  const {\n    0: header,\n    1: setHeader\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"fixed\");\n  const {\n    0: header_,\n    1: setHeader_\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: sliderValu,\n    1: setSliderValu\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setbody_(document.querySelector(\"body\"));\n    setHeader_(document.getElementsByClassName(\"main-bar-wraper\"));\n  }, []); //let scrollPosition = useScrollPosition();\n\n  function toggle() {\n    setToggle1(!toggle1);\n  }\n\n  const backGroundImage = value => {\n    body_.style.backgroundImage = `url(${value})`;\n    body_.style.backgroundSize = \"auto\";\n  };\n\n  const chageHeader = value => {\n    setHeader(value);\n\n    if (value === \"fixed\") {\n      header_[0].classList.add(\"sticky-header\");\n      header_[0].classList.remove(\"sticky-no\");\n    } else {\n      header_[0].classList.add(\"sticky-no\");\n      header_[0].classList.remove(\"sticky-header\");\n      header_[0].classList.remove(\"is-fixed\");\n    }\n  };\n\n  const onChange = value => {\n    setSliderValu(value);\n    body_.style.padding = value + \"px\";\n  };\n  /*  header === \"fixed\" && scrollPosition > 10\r\n     ? header_ && header_[0].classList.add(\"is-fixed\")\r\n     : header_ && header_[0].classList.remove(\"is-fixed\"); */\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Theme2\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        type: \"image/png\",\n        sizes: \"16x16\",\n        href: \"/images/GDH LOGO.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"page-wraper\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyxPQUF4QztBQUFnRCxZQUFJLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURFLGVBS0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVsQixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQSxrQkFERjtBQWNEOztBQUVELGlFQUFlRixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtYXIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3QtcmFuZ2VzbGlkZXJcIjtcclxuLy9pbXBvcnQgXCJyZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuLy9pbXBvcnQge3VzZVNjcm9sbFBvc2l0aW9ufSBmcm9tIFwiQG44dGIxdC91c2Utc2Nyb2xsLXBvc2l0aW9uXCI7XHJcbi8vaW1wb3J0IFwiLi4vY3NzL3NraW4vc2tpbi0xLmNzc1wiO1xyXG4vL2ltcG9ydCBcIi4uL2Nzcy9za2luL3NraW4tMy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc2tpbi9za2luLTIuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3dpdGNoZXIuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbdG9nZ2xlMSwgc2V0VG9nZ2xlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2JvZHlfLCBzZXRib2R5X10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsYXlvdXQsIHNldExheW91dF0gPSB1c2VTdGF0ZShcIndpZGVcIik7XHJcbiAgY29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFwiZml4ZWRcIik7XHJcbiAgY29uc3QgW2hlYWRlcl8sIHNldEhlYWRlcl9dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2xpZGVyVmFsdSwgc2V0U2xpZGVyVmFsdV0gPSB1c2VTdGF0ZSgyMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRib2R5Xyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSk7XHJcbiAgICBzZXRIZWFkZXJfKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWJhci13cmFwZXJcIikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9sZXQgc2Nyb2xsUG9zaXRpb24gPSB1c2VTY3JvbGxQb3NpdGlvbigpO1xyXG4gIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgIHNldFRvZ2dsZTEoIXRvZ2dsZTEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYmFja0dyb3VuZEltYWdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dmFsdWV9KWA7XHJcbiAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiYXV0b1wiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYWdlSGVhZGVyID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRIZWFkZXIodmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlID09PSBcImZpeGVkXCIpIHtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGVhZGVyXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2xpZGVyVmFsdSh2YWx1ZSk7XHJcbiAgICBib2R5Xy5zdHlsZS5wYWRkaW5nID0gdmFsdWUgKyBcInB4XCI7XHJcbiAgfTtcclxuXHJcbiAvKiAgaGVhZGVyID09PSBcImZpeGVkXCIgJiYgc2Nyb2xsUG9zaXRpb24gPiAxMFxyXG4gICAgPyBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcImlzLWZpeGVkXCIpXHJcbiAgICA6IGhlYWRlcl8gJiYgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7ICovXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5UaGVtZTI8L3RpdGxlPlxyXG5cdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2ltYWdlcy9HREggTE9HTy5wbmdcIi8+XHJcbiAgICAgICAgPC9IZWFkPlx0XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwZXJcIj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gIFxyXG4gIFxyXG4gICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0b2dnbGUxIiwic2V0VG9nZ2xlMSIsImJvZHlfIiwic2V0Ym9keV8iLCJsYXlvdXQiLCJzZXRMYXlvdXQiLCJoZWFkZXIiLCJzZXRIZWFkZXIiLCJoZWFkZXJfIiwic2V0SGVhZGVyXyIsInNsaWRlclZhbHUiLCJzZXRTbGlkZXJWYWx1IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRvZ2dsZSIsImJhY2tHcm91bmRJbWFnZSIsInZhbHVlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImNoYWdlSGVhZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25DaGFuZ2UiLCJwYWRkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./css/skin/skin-2.css":
/*!*****************************!*\
  !*** ./css/skin/skin-2.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();