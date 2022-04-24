/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/accounting/Datum.js":
/*!************************************!*\
  !*** ./src/js/accounting/Datum.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Datum)\n/* harmony export */ });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError(\"attempted to \" + action + \" private static field before its declaration\"); } }\n\nfunction _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError(\"Private static access of wrong provenance\"); } }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nvar Datum = /*#__PURE__*/function () {\n  function Datum(day, month, year) {\n    _classCallCheck(this, Datum);\n\n    this._day = day;\n    this._month = month;\n    this._year = year;\n  }\n\n  _createClass(Datum, [{\n    key: \"getDay\",\n    value: function getDay() {\n      return this._day;\n    }\n  }, {\n    key: \"setDay\",\n    value: function setDay(day) {\n      this._day = day;\n    }\n  }, {\n    key: \"getMonth\",\n    value: function getMonth() {\n      return this._month;\n    }\n  }, {\n    key: \"setMonth\",\n    value: function setMonth(month) {\n      this._month = month;\n    }\n  }, {\n    key: \"getYear\",\n    value: function getYear() {\n      return this._year;\n    }\n  }, {\n    key: \"setYear\",\n    value: function setYear(year) {\n      this._year = year;\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return \"\".concat(this._day, \"/\").concat(this._month, \"/\").concat(this._year);\n    }\n  }, {\n    key: \"toStringMonth\",\n    value: function toStringMonth() {\n      return \"\".concat(this._day, \"/\").concat(_classStaticPrivateFieldSpecGet(Datum, Datum, _MONTHS)[this._month - 1], \"/\").concat(this._year);\n    }\n  }], [{\n    key: \"make\",\n    value: function make(day, month, year) {\n      return new Datum(day, month, year);\n    }\n  }]);\n\n  return Datum;\n}();\n\nvar _MONTHS = {\n  writable: true,\n  value: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']\n};\n\n\n//# sourceURL=webpack:///./src/js/accounting/Datum.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _accounting_Datum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounting/Datum */ \"./src/js/accounting/Datum.js\");\n\n\n\nwindow.addEventListener('load', function (event) {\n  var date = _accounting_Datum__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(24, 4, 2022);\n  printPreElement(date.toString());\n  date.setMonth(1);\n  printPreElement(date.toStringMonth());\n});\n\nfunction printPreElement(thingToPrint) {\n  var preElement = document.createElement('pre');\n  var textNode = document.createTextNode(thingToPrint + '\\n');\n  preElement.appendChild(textNode);\n  document.getElementById('output').appendChild(preElement);\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;