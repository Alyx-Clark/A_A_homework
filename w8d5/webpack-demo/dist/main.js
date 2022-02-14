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

/***/ "./addnumber.js":
/*!**********************!*\
  !*** ./addnumber.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const readline = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'readline'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction addNumbers(sum, numsLeft, completionCallback){\n    if (numsLeft > 0){\n        // console.log(numsLeft)\n        numsLeft--;\n        rl.question('What number do you want to add to Sum? ', function (number) {\n            let answer = parseInt(number);\n            sum += answer;\n            console.log(sum);\n            \n            addNumbers(sum, numsLeft,completionCallback);\n        });\n    }else{\n        completionCallback(sum)\n        rl.close();\n    }\n}\naddNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));\n// rl.question('What number do you want to add to Sum? ', function (answer) {\n//     const response = answer;\n//     console.log(`Thank you for your input: ${response}`);\n//     rl.close();\n// });\n\n\n\n//# sourceURL=webpack:///./addnumber.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./addnumber.js");
/******/ 	
/******/ })()
;