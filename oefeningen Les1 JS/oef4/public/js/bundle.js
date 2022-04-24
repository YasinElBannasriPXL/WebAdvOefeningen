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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _regenwormen_Dobbelsteen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regenwormen/Dobbelsteen */ \"./src/js/regenwormen/Dobbelsteen.js\");\n/* harmony import */ var _regenwormen_Selectie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regenwormen/Selectie */ \"./src/js/regenwormen/Selectie.js\");\n/* harmony import */ var _regenwormen_Stapel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regenwormen/Stapel */ \"./src/js/regenwormen/Stapel.js\");\n // naam = \n\n\n\n\nwindow.addEventListener('load', function (event) {\n  var dobbelsteen1 = new _regenwormen_Dobbelsteen__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('1');\n  document.write(dobbelsteen1.getZijde()); //'1'\n\n  document.write(dobbelsteen1.getNumeriekeWaarde()); //1\n\n  try {\n    var _dobbelsteen = new _regenwormen_Dobbelsteen__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('S');\n  } catch (error) {\n    document.write(\"error1\"); //error1\n  }\n\n  var selectie1 = new _regenwormen_Selectie__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, dobbelsteen1);\n  document.write(selectie1.getNumeriekeWaarde()); //3\n\n  try {\n    var _selectie = new _regenwormen_Selectie__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, 'mis');\n  } catch (error) {\n    document.write(\"error2\"); //error2\n  }\n\n  var stapel = new _regenwormen_Stapel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  stapel.voegSelectieToe(selectie1);\n  document.write(stapel.getNumeriekeWaarde()); //0\n\n  var dobbelsteen2 = new _regenwormen_Dobbelsteen__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('R');\n  var selectie2 = new _regenwormen_Selectie__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2, dobbelsteen2);\n  stapel.voegSelectieToe(selectie2);\n  document.write(stapel.getNumeriekeWaarde()); //13\n\n  var selectie3 = new _regenwormen_Selectie__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1, new _regenwormen_Dobbelsteen__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('R'));\n\n  try {\n    stapel.voegSelectieToe(selectie3);\n  } catch (error) {\n    document.write(\"error3\"); //error3\n  }\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/regenwormen/Dobbelsteen.js":
/*!*******************************************!*\
  !*** ./src/js/regenwormen/Dobbelsteen.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dobbelsteen)\n/* harmony export */ });\n // naam = Yasin El Bannasri\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Dobbelsteen = /*#__PURE__*/function () {\n  function Dobbelsteen(zijde) {\n    _classCallCheck(this, Dobbelsteen);\n\n    if (zijde === '1' || zijde === '2' || zijde === '3' || zijde === '4' || zijde === '5' || zijde === 'R') {\n      this._zijde = zijde;\n    } else {\n      throw new Error(\"\".concat(zijde, \" is not a valid zijde\"));\n    }\n  }\n\n  _createClass(Dobbelsteen, [{\n    key: \"getZijde\",\n    value: function getZijde() {\n      return this._zijde;\n    }\n  }, {\n    key: \"getNumeriekeWaarde\",\n    value: function getNumeriekeWaarde() {\n      if (this.getZijde === 'R') {\n        return 5;\n      } else if (this.getZijde === '1' || this.getZijde === '2' || this.getZijde === '3' || this.getZijde === '4' || this.getZijde === '5') {\n        return parseInt(this.getZijde);\n      } else throw new Error('kan geen numerieke waarde krijgen van zijde');\n    }\n  }]);\n\n  return Dobbelsteen;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/regenwormen/Dobbelsteen.js?");

/***/ }),

/***/ "./src/js/regenwormen/Selectie.js":
/*!****************************************!*\
  !*** ./src/js/regenwormen/Selectie.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Selectie)\n/* harmony export */ });\n/* harmony import */ var _Dobbelsteen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dobbelsteen */ \"./src/js/regenwormen/Dobbelsteen.js\");\n // naam = Yasin El Bannasri\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Selectie = /*#__PURE__*/function () {\n  function Selectie(aantal, dobbelsteen) {\n    _classCallCheck(this, Selectie);\n\n    if (!(dobbelsteen instanceof _Dobbelsteen__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\n      throw new Error('not an instence of dobbelsteen');\n    } else {\n      this._aantal = aantal;\n      this._dobbelsteen = dobbelsteen;\n    }\n  }\n\n  _createClass(Selectie, [{\n    key: \"getAantal\",\n    value: function getAantal() {\n      return this._aantal;\n    }\n  }, {\n    key: \"getDobbelsteen\",\n    value: function getDobbelsteen() {\n      return this._dobbelsteen;\n    }\n  }, {\n    key: \"getNumeriekeWaarde\",\n    value: function getNumeriekeWaarde() {\n      return this._aantal * this._dobbelsteen.getNumeriekeWaarde();\n    }\n  }]);\n\n  return Selectie;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/regenwormen/Selectie.js?");

/***/ }),

/***/ "./src/js/regenwormen/Stapel.js":
/*!**************************************!*\
  !*** ./src/js/regenwormen/Stapel.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Stapel)\n/* harmony export */ });\n/* harmony import */ var _Dobbelsteen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dobbelsteen */ \"./src/js/regenwormen/Dobbelsteen.js\");\n/* harmony import */ var _Selectie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selectie */ \"./src/js/regenwormen/Selectie.js\");\n // naam =  Yasin El Bannasri\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\nvar Stapel = /*#__PURE__*/function () {\n  function Stapel() {\n    _classCallCheck(this, Stapel);\n\n    this._selecties = [];\n  }\n\n  _createClass(Stapel, [{\n    key: \"voegSelectieToe\",\n    value: function voegSelectieToe(selectie) {\n      if (selectie instanceof _Selectie__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        if (this._selecties.some(function (s) {\n          return selectie.getDobbelsteen().getZijde() === s.getDobbelsteen().getZijde();\n        })) {\n          throw new Error('Dobbelsteen already exists in selecties');\n        } else {\n          this._selecties.push(selectie);\n        }\n      } else {\n        throw new Error(\"\".concat(selectie, \" not an instance of Selectie\"));\n      }\n    }\n  }, {\n    key: \"getNumeriekeWaarde\",\n    value: function getNumeriekeWaarde() {\n      selectiesHasR = false;\n      somSelecties = 0;\n\n      this._selecties.forEach(function (s) {\n        if (s.getDobbelsteen().getZijde() === 'R') {\n          selectiesHasR = true;\n        }\n\n        somSelecties += s.getNumeriekeWaarde();\n      });\n    }\n  }]);\n\n  return Stapel;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/regenwormen/Stapel.js?");

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