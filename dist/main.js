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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\n    static showHomepage() {}\n\n    createProjectModal(container) {\n        const projectInput = document.createElement('div');\n        const proLabel = document.createElement('label');\n        const inputElem = document.createElement('input');\n        const projectButton = document.createElement('button');\n\n        proLabel.textContent = 'Project name: ';\n        inputElem.setAttribute('type', 'text');\n        projectInput.classList.add('projectForm');\n\n        projectButton.textContent = 'Create';\n        projectButton.addEventListener('click', () => {\n            /* projects.push(Project(inputElem.value, []));\n            window.localStorage.setItem('projects', JSON.stringify(projects));\n            container.removeChild(projectInput);\n            overlay.classList.remove('active');\n            updateLeftPanel(); */\n        });\n\n        projectInput.appendChild(proLabel);\n        projectInput.appendChild(inputElem);\n        projectInput.appendChild(projectButton);\n        projectInput.classList.add('activeModal');\n        container.appendChild(projectInput);\n    }\n\n    createTaskModal(container) {\n        const taskInput = document.createElement('div');\n\n        const taskName = document.createElement('label');\n        taskName.textContent = 'Task name: ';\n        taskName.setAttribute('for', 'nameInput');\n        taskName.setAttribute('for', 'descInput');\n        const inputName = document.createElement('input');\n        inputName.setAttribute('type', 'text');\n        inputName.setAttribute('id', 'nameInput');\n\n        const taskDesc = document.createElement('label');\n        taskDesc.textContent = 'Task description: ';\n        const inputDesc = document.createElement('textarea');\n        inputDesc.setAttribute('id', 'descInput');\n        inputDesc.setAttribute('type', 'text');\n\n        const taskPrioLabel = document.createElement('label');\n        taskPrioLabel.textContent = 'Select the priority: ';\n        taskPrioLabel.setAttribute('for', 'prioInput');\n        const taskPriority = document.createElement('select');\n        taskPriority.setAttribute('id', 'prioInput');\n        const urgent = document.createElement('option');\n        const important = document.createElement('option');\n        const notImportant = document.createElement('option');\n        urgent.textContent = 'Urgent';\n        important.textContent = 'Important';\n        notImportant.textContent = 'Not that important';\n        taskPriority.appendChild(urgent);\n        taskPriority.appendChild(important);\n        taskPriority.appendChild(notImportant);\n\n        const taskDateLabel = document.createElement('label');\n        taskDateLabel.textContent = 'Select the expiring date: ';\n        taskDateLabel.setAttribute('for', 'dateInput');\n        const inputDate = document.createElement('input');\n        inputDate.setAttribute('type', 'date');\n        inputDate.setAttribute('id', 'dateInput');\n\n        const taskButton = document.createElement('button');\n\n        taskInput.classList.add('taskForm');\n        taskButton.textContent = 'Create';\n        taskButton.addEventListener('click', () => {\n            /* actualProject.createTask(\n                inputName.value,\n                taskPriority.value,\n                inputDesc.value,\n                dateInput.value\n            );\n            window.localStorage.setItem('projects', JSON.stringify(projects));\n            tasklist = document.querySelector('.tasklist');\n            actualProject.showProject(tasklist);\n            container.removeChild(taskInput);\n            overlay.classList.remove('active');\n            addRemoveButtonListeners(tasklist); */\n        });\n\n        taskInput.appendChild(taskName);\n        taskInput.appendChild(inputName);\n\n        taskInput.appendChild(taskDesc);\n        taskInput.appendChild(inputDesc);\n\n        taskInput.appendChild(taskDateLabel);\n        taskInput.appendChild(inputDate);\n\n        taskInput.appendChild(taskPriority);\n\n        taskInput.appendChild(taskButton);\n        taskInput.classList.add('activeModal');\n        container.appendChild(taskInput);\n    }\n}\n\n\n//# sourceURL=webpack://todolist/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showHomepage);\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;