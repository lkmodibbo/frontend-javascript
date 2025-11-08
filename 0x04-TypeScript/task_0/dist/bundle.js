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

eval("{var student1 = {\r\n    firstName: \"Lukman\",\r\n    middleName: \"Modibbo\",\r\n    lastName: \"Said\",\r\n    age: 26,\r\n    location: \"Abuja\",\r\n};\r\nvar student2 = {\r\n    firstName: \"Khadeejat\",\r\n    middleName: \"Modibbo\",\r\n    lastName: \"Bashir\",\r\n    age: 18,\r\n    location: \"Abuja\",\r\n};\r\nvar studentList = [student1, student2];\r\n// Create table and header\r\nvar studentTable = document.createElement(\"table\");\r\nvar headerRow = document.createElement(\"tr\");\r\n// Define table headers\r\nvar headers = [\"First Name\", \"Middle Name\", \"Last Name\", \"Location\"];\r\n// Create header cells\r\nheaders.forEach(function (text) {\r\n    var th = document.createElement(\"th\");\r\n    th.textContent = text;\r\n    headerRow.appendChild(th);\r\n});\r\nstudentTable.appendChild(headerRow);\r\n// Populate table rows\r\nstudentList.forEach(function (student) {\r\n    var row = document.createElement(\"tr\");\r\n    var firstNameCell = document.createElement(\"td\");\r\n    firstNameCell.textContent = student.firstName;\r\n    var middleNameCell = document.createElement(\"td\");\r\n    middleNameCell.textContent = student.middleName;\r\n    var lastNameCell = document.createElement(\"td\");\r\n    lastNameCell.textContent = student.lastName;\r\n    var locationCell = document.createElement(\"td\");\r\n    locationCell.textContent = student.location;\r\n    row.appendChild(firstNameCell);\r\n    row.appendChild(middleNameCell);\r\n    row.appendChild(lastNameCell);\r\n    row.appendChild(locationCell);\r\n    studentTable.appendChild(row);\r\n});\r\n// Add the table to the page\r\ndocument.body.appendChild(studentTable);\r\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/main.ts?\n}");

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