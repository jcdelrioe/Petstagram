/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpetstagram"] = self["webpackChunkpetstagram"] || []).push([["src_pages_User_js"],{

/***/ "./src/components/SubmitButton/index.js":
/*!**********************************************!*\
  !*** ./src/components/SubmitButton/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubmitButton\": () => /* binding */ SubmitButton\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/SubmitButton/styles.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar SubmitButton = function SubmitButton(_ref) {\n  var disabled = _ref.disabled,\n      children = _ref.children,\n      onClick = _ref.onClick;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    disabled: disabled,\n    onClick: onClick\n  }, children);\n};\nSubmitButton.propTypes = {\n  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),\n  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)\n};\n\n//# sourceURL=webpack://petstagram/./src/components/SubmitButton/index.js?");

/***/ }),

/***/ "./src/components/SubmitButton/styles.js":
/*!***********************************************!*\
  !*** ./src/components/SubmitButton/styles.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => /* binding */ Button\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  background: #8d00ff;\\n  border-radius: 3px;\\n  color: #fff;\\n  height: 32px;\\n  display: block;\\n  width: 100%;\\n  text-align: center;\\n  &[disabled] {\\n    opacity: 0.3;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button(_templateObject());\n\n//# sourceURL=webpack://petstagram/./src/components/SubmitButton/styles.js?");

/***/ }),

/***/ "./src/pages/User.js":
/*!***************************!*\
  !*** ./src/pages/User.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ \"./src/Context.js\");\n/* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubmitButton */ \"./src/components/SubmitButton/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_1__.Context),\n      removeAuth = _useContext.removeAuth;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"User\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SubmitButton__WEBPACK_IMPORTED_MODULE_2__.SubmitButton, {\n    onClick: removeAuth\n  }, \"Cerrar Sesion\"));\n});\n\n//# sourceURL=webpack://petstagram/./src/pages/User.js?");

/***/ })

}]);