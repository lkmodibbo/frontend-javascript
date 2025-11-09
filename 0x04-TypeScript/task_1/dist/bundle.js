/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{var teacher1 = {\r\n    firstName: \"Uncle Science\",\r\n    lastName: \"faisal\",\r\n    fullTimeEmployee: true,\r\n    yearsOfEXperience: 5,\r\n    location: \"Maraba\"\r\n};\r\nvar teacher2 = {\r\n    firstName: \"Uncle Simon\",\r\n    lastName: \"Umaru\",\r\n    fullTimeEmployee: false,\r\n    location: \"Maraba\",\r\n    contract: true\r\n};\r\nvar teacher3 = {\r\n    firstName: \"Uncle Bilal\",\r\n    lastName: \"faisal\",\r\n    fullTimeEmployee: false,\r\n    location: \"Maraba\",\r\n    contract: false\r\n};\r\nteacher3.fullTimeEmployee = true;\r\nteacher3.yearsOfEXperience = 2;\r\nteacher3.contract = true;\r\nconsole.log('teacher1', teacher1);\r\nconsole.log('teacher2', teacher2);\r\nconsole.log('teacher3', teacher3);\r\nvar output = document.getElementById('output');\r\nif (output) {\r\n    var pre = document.createElement('pre');\r\n    pre.textContent =\r\n        'teacher1: ' + JSON.stringify(teacher1, null, 2) + '\\n\\n' +\r\n            'teacher2: ' + JSON.stringify(teacher2, null, 2) + '\\n\\n' +\r\n            'teacher3: ' + JSON.stringify(teacher3, null, 2);\r\n    output.appendChild(pre);\r\n}\r\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;