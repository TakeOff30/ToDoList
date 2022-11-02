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

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        (this.name = name), (this.tasks = []);\n    }\n\n    setName(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    setTasks(tasks) {\n        this.tasks = tasks;\n    }\n\n    getTasks() {\n        return this.tasks;\n    }\n\n    getTask(taskId) {\n        return this.tasks.find((task) => task.taskId == taskId);\n    }\n\n    addTask(toAdd) {\n        this.tasks.push(toAdd);\n    }\n\n    deleteTask(toDelete) {\n        this.tasks = this.tasks.filter((task) => task !== toDelete);\n    }\n}\n\n\n//# sourceURL=webpack://todolist/./src/Project.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ \"./src/TodoList.js\");\n\n\n\n\nclass Storage {\n    static saveTodoList(data) {\n        localStorage.setItem('todoList', JSON.stringify(data));\n    }\n\n    static getTodoList() {\n        const todoList = Object.assign(\n            new _TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n            JSON.parse(localStorage.getItem('todoList'))\n        );\n\n        todoList.setProjects(\n            todoList\n                .getProjects()\n                .map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), project))\n        );\n\n        todoList\n            .getProjects()\n            .forEach((project) =>\n                project.setTasks(\n                    project\n                        .getTasks()\n                        .map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), task))\n                )\n            );\n\n        return todoList;\n    }\n}\n\n\n//# sourceURL=webpack://todolist/./src/Storage.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, dueDate, priority, notes, taskId) {\n        (this.name = name),\n            (this.dueDate = dueDate),\n            (this.priority = priority),\n            (this.notes = notes),\n            (this.compressed = true),\n            (this.taskId = taskId);\n    }\n\n    setName(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    setPriority(priority) {\n        this.priority = priority;\n    }\n\n    getPriority() {\n        return this.priority;\n    }\n\n    setNotes(notes) {\n        this.notes = notes;\n    }\n\n    getNotes() {\n        return this.notes;\n    }\n}\n\n\n//# sourceURL=webpack://todolist/./src/Task.js?");

/***/ }),

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\n\nclass TodoList {\n    constructor() {\n        this.projects = [];\n        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Main'));\n    }\n\n    setProjects(projects) {\n        this.projects = projects;\n    }\n\n    getProjects() {\n        return this.projects;\n    }\n\n    getProject(index) {\n        return this.projects[index];\n    }\n\n    setProject(toSet) {\n        this.projects.find((project) => {\n            if (project.getName() == toSet.getName()) {\n                project = toSet;\n            }\n        });\n    }\n\n    addProject(newProject) {\n        this.projects.push(newProject);\n    }\n\n    deleteProject(projectName) {\n        const projectToDelete = this.projects.find(\n            (project) => project.getName() === projectName\n        );\n        this.projects.splice(this.projects.indexOf(projectToDelete), 1);\n    }\n}\n\n\n//# sourceURL=webpack://todolist/./src/TodoList.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoList */ \"./src/TodoList.js\");\n\n\n\n\n\nconst UserInterface = (function () {\n    let todoList;\n    let actualProject;\n    const hedMain = document.querySelector('.hedMain');\n    let projectIndex = 0;\n    let taskId = 0;\n\n    function UIProjectSetup() {\n        if (localStorage.getItem('todoList')) {\n            todoList = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList();\n            UIInfoSetup();\n        } else {\n            todoList = new _TodoList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n            UIInfoSetup();\n            _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodoList(todoList);\n        }\n    }\n\n    function UIInfoSetup() {\n        actualProject = todoList.getProject(0);\n        updateProjectList(todoList.getProjects());\n        updateTasklist(actualProject);\n    }\n\n    function updateProjectList(projects) {\n        const leftPanel = document.querySelector('.leftPanel');\n        const title = document.createElement('h2');\n        title.textContent = 'Your projects';\n        leftPanel.textContent = '';\n        leftPanel.appendChild(title);\n        projectIndex = 0;\n        projects.forEach((project) => {\n            displayProject(project, leftPanel);\n        });\n    }\n\n    function displayProject(project, container) {\n        let proTitle = document.createElement('p');\n        proTitle.textContent = project.getName();\n        proTitle.setAttribute('data-index', projectIndex);\n        proTitle.classList.add('projectName');\n        projectIndex++;\n        proTitle.addEventListener('click', () => {\n            actualProject = todoList.getProject(\n                proTitle.getAttribute('data-index')\n            );\n            updateTasklist();\n        });\n        container.appendChild(proTitle);\n    }\n\n    function updateTasklist() {\n        const tasklist = document.querySelector('.tasklist');\n        tasklist.textContent = '';\n        const title = document.createElement('h2');\n        title.textContent = actualProject.getName();\n        tasklist.appendChild(title);\n        actualProject.getTasks().forEach((task) => {\n            createTask(task, tasklist);\n            taskId++;\n        });\n    }\n\n    function createTask(task, container) {\n        task.compressed = true;\n        const taskDiv = document.createElement('div');\n        taskDiv.setAttribute('data-task-index', task.taskId);\n        taskDiv.classList.add('task');\n        const taskName = document.createElement('h2');\n        taskName.textContent = task.name;\n        const taskDate = document.createElement('p');\n        taskDate.textContent = task.dueDate;\n\n        createCloseButton(taskDiv, task);\n        setTaskPriority(task, taskDiv);\n        createToggleIconButton(taskDiv, task);\n\n        taskDiv.appendChild(taskName);\n        taskDiv.appendChild(taskDate);\n        container.appendChild(taskDiv);\n    }\n\n    function createCloseButton(taskContainer, task) {\n        const closeButton = document.createElement('img');\n        closeButton.setAttribute('src', '../dist/img/close.svg');\n        closeButton.setAttribute('alt', 'close button');\n        closeButton.classList.add('closeButton');\n        setCloseButtonListener(closeButton);\n        closeButton.setAttribute('data-task-index', task.taskId);\n        taskContainer.appendChild(closeButton);\n    }\n\n    function setCloseButtonListener(button) {\n        button.addEventListener('click', () => {\n            const tasklist = document.querySelector('.tasklist');\n            const dataToRemove = actualProject.getTask(\n                button.getAttribute('data-task-index')\n            );\n            const contentToRemove = document.querySelector(\n                '[data-task-index = \"' +\n                    button.getAttribute('data-task-index') +\n                    '\"]'\n            );\n            actualProject.deleteTask(dataToRemove);\n            todoList.setProject(actualProject);\n            _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodoList(todoList);\n            tasklist.removeChild(contentToRemove);\n        });\n    }\n\n    function setTaskPriority(task, taskContainer) {\n        if (task.priority == 'urgent' || task.priority == 'Urgent') {\n            taskContainer.classList.add('urgent');\n        } else if (\n            task.priority == 'important' ||\n            task.priority == 'Important'\n        ) {\n            taskContainer.classList.add('important');\n        } else {\n            taskContainer.classList.add('notImportant');\n        }\n    }\n\n    function createToggleIconButton(taskContainer, task) {\n        const expandImage = document.createElement('img');\n        expandImage.classList.add('expandIcon');\n        expandImage.setAttribute('src', '../dist/img/expandArrows.svg');\n        expandImage.setAttribute(\n            'alt',\n            'button to expand information about the task'\n        );\n        toggleIconButtonListener(taskContainer, expandImage, task);\n        taskContainer.appendChild(expandImage);\n    }\n\n    function toggleIconButtonListener(taskContainer, icon, task) {\n        icon.addEventListener('click', () => {\n            if (task.compressed) {\n                expandTask(task);\n                icon.setAttribute('src', '../dist/img/compressArrows.svg');\n                taskContainer.classList.add('large');\n                task.compressed = false;\n            } else {\n                compressTask(task);\n                icon.setAttribute('src', '../dist/img/expandArrows.svg');\n                taskContainer.classList.remove('large');\n                task.compressed = true;\n                _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodoList(todoList);\n            }\n        });\n    }\n\n    function createProjectModal(container) {\n        const projectForm = document.createElement('div');\n        projectForm.classList.add('projectForm');\n        const proLabel = document.createElement('label');\n        proLabel.textContent = 'Project name: ';\n        const inputElem = document.createElement('input');\n        inputElem.setAttribute('type', 'text');\n        const projectButton = document.createElement('button');\n        projectButton.textContent = 'Create';\n\n        projectButtonListener(projectButton, projectForm);\n\n        projectForm.appendChild(proLabel);\n        projectForm.appendChild(inputElem);\n        projectForm.appendChild(projectButton);\n        projectForm.classList.add('activeModal');\n        container.appendChild(projectForm);\n    }\n\n    function projectButtonListener(button, form) {\n        button.addEventListener('click', () => {\n            const inputElem = document.querySelector('input');\n            const overlay = document.querySelector('.overlay');\n            const newProject = new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputElem.value);\n            todoList.addProject(newProject);\n            _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodoList(todoList);\n            updateProjectList(todoList.getProjects());\n            const projectList = document.querySelectorAll('.projectName');\n            const lastProject = projectList.length - 1;\n            actualProject = todoList.getProject(lastProject);\n            form.classList.remove('activeModal');\n            overlay.classList.remove('active');\n        });\n    }\n\n    function createTaskModal(container) {\n        const taskForm = document.createElement('div');\n        taskForm.classList.add('taskForm');\n        const taskButton = document.createElement('button');\n        taskButton.textContent = 'Create';\n        createTaskNameInput(taskForm);\n        createTaskDescInput(taskForm);\n        createTaskPriorityInput(taskForm);\n        createTaskDateInput(taskForm);\n        createTaskButtonListener(taskButton, taskForm);\n        taskForm.classList.add('activeModal');\n        container.appendChild(taskForm);\n    }\n\n    function createTaskNameInput(container) {\n        const taskName = document.createElement('label');\n        taskName.textContent = 'Task name: ';\n        taskName.setAttribute('for', 'nameInput');\n        const inputName = document.createElement('input');\n        inputName.setAttribute('type', 'text');\n        inputName.setAttribute('id', 'nameInput');\n        container.appendChild(taskName);\n        container.appendChild(inputName);\n    }\n\n    function createTaskDescInput(container) {\n        const taskDesc = document.createElement('label');\n        taskDesc.textContent = 'Task description: ';\n        const inputDesc = document.createElement('textarea');\n        inputDesc.setAttribute('id', 'descInput');\n        taskDesc.setAttribute('for', 'descInput');\n        inputDesc.setAttribute('type', 'text');\n        container.appendChild(taskDesc);\n        container.appendChild(inputDesc);\n    }\n\n    function createTaskPriorityInput(container) {\n        const taskPrioLabel = document.createElement('label');\n        taskPrioLabel.textContent = 'Select the priority: ';\n        taskPrioLabel.setAttribute('for', 'prioInput');\n        const taskPriority = document.createElement('select');\n        taskPriority.setAttribute('id', 'prioInput');\n        const urgent = document.createElement('option');\n        const important = document.createElement('option');\n        const notImportant = document.createElement('option');\n        urgent.textContent = 'Urgent';\n        important.textContent = 'Important';\n        notImportant.textContent = 'Not that important';\n        taskPriority.appendChild(urgent);\n        taskPriority.appendChild(important);\n        taskPriority.appendChild(notImportant);\n        container.appendChild(taskPriority);\n    }\n\n    function createTaskDateInput(container) {\n        const taskDateLabel = document.createElement('label');\n        taskDateLabel.textContent = 'Select the expiring date: ';\n        taskDateLabel.setAttribute('for', 'dateInput');\n        const inputDate = document.createElement('input');\n        inputDate.setAttribute('type', 'date');\n        inputDate.setAttribute('id', 'dateInput');\n        container.appendChild(taskDateLabel);\n        container.appendChild(inputDate);\n    }\n\n    function createTaskButtonListener(button, container) {\n        button.addEventListener('click', () => {\n            const overlay = document.querySelector('.overlay');\n            const inputName = document.querySelector('#nameInput');\n            const inputDate = document.querySelector('#dateInput');\n            const inputDesc = document.querySelector('#descInput');\n            const taskPriority = document.querySelector('#prioInput');\n            const newTask = new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n                inputName.value,\n                inputDate.value,\n                taskPriority.value,\n                inputDesc.value,\n                taskId\n            );\n            taskId++;\n            actualProject.addTask(newTask);\n            _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodoList(todoList);\n            updateTasklist(actualProject);\n            container.classList.remove('activeModal');\n            overlay.classList.remove('active');\n        });\n        container.appendChild(button);\n    }\n\n    function expandTask(task) {\n        const toExpand = document.querySelector(\n            \"[data-task-index='\" + task.taskId + \"']\"\n        );\n\n        addDescField(task, toExpand);\n        addPriorityRadios(task, toExpand);\n\n        let radios = document.getElementsByClassName(\n            'radioInputs' + task.taskId\n        );\n        Array.prototype.forEach.call(radios, (radio) => {\n            radioButtonListener(radio, task);\n        });\n    }\n\n    function addDescField(task, container) {\n        const taskDesc = document.createElement('p');\n        taskDesc.textContent = task.description;\n        taskDesc.classList.add('taskDescription' + task.taskId);\n        container.appendChild(taskDesc);\n    }\n\n    function addPriorityRadios(task, container) {\n        const taskPrioLabel = document.createElement('label');\n        taskPrioLabel.textContent = 'Select the priority: ';\n        taskPrioLabel.setAttribute('for', 'prioInput');\n        const taskPrioritySpan = document.createElement('span');\n        taskPrioritySpan.setAttribute('id', 'prioSpan' + task.taskId);\n\n        createUrgentRadio(task, taskPrioritySpan);\n        createImportantRadio(task, taskPrioritySpan);\n        createNotImportantRadio(task, taskPrioritySpan);\n\n        container.appendChild(taskPrioritySpan);\n    }\n\n    function createUrgentRadio(task, container) {\n        const urgentLabel = document.createElement('label');\n        urgentLabel.textContent = 'Urgent: ';\n        const urgent = document.createElement('input');\n        urgent.classList.add('radioInputs' + task.taskId);\n        urgent.setAttribute('type', 'radio');\n        urgent.setAttribute('name', 'prio' + task.taskId);\n        urgent.setAttribute('value', 'urgent');\n        container.appendChild(urgentLabel);\n        container.appendChild(urgent);\n        if (task.priority == 'Urgent' || task.priority == 'urgent') {\n            urgent.checked = true;\n        }\n    }\n    function createImportantRadio(task, container) {\n        const importantLabel = document.createElement('label');\n        importantLabel.textContent = 'Important: ';\n        const important = document.createElement('input');\n        important.classList.add('radioInputs' + task.taskId);\n        important.setAttribute('type', 'radio');\n        important.setAttribute('name', 'prio' + task.taskId);\n        important.setAttribute('value', 'important');\n        container.appendChild(importantLabel);\n        container.appendChild(important);\n        if (task.priority == 'Important' || task.priority == 'important') {\n            important.checked = true;\n        }\n    }\n    function createNotImportantRadio(task, container) {\n        const notImportantLabel = document.createElement('label');\n        notImportantLabel.textContent = 'Not important: ';\n        const notImportant = document.createElement('input');\n        notImportant.classList.add('radioInputs' + task.taskId);\n        notImportant.setAttribute('type', 'radio');\n        notImportant.setAttribute('name', 'prio' + task.taskId);\n        notImportant.setAttribute('value', 'notImportant');\n        container.appendChild(notImportantLabel);\n        container.appendChild(notImportant);\n        if (\n            task.priority == 'NotImportant' ||\n            task.priority == 'notImportant'\n        ) {\n            notImportant.checked = true;\n        }\n    }\n\n    function radioButtonListener(radio, task) {\n        radio.addEventListener('click', () => {\n            const taskDiv = document.querySelector(\n                \"[data-task-index='\" + task.taskId + \"']\"\n            );\n\n            if (radio.getAttribute('type') == 'radio') {\n                if (taskDiv.classList.contains('urgent')) {\n                    taskDiv.classList.replace('urgent', radio.value);\n                    task.setPriority(radio.value);\n                    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodoList(todoList);\n                } else if (taskDiv.classList.contains('important')) {\n                    taskDiv.classList.replace('important', radio.value);\n                    task.setPriority(radio.value);\n                    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodoList(todoList);\n                } else {\n                    taskDiv.classList.replace('notImportant', radio.value);\n                    task.setPriority(radio.value);\n                    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodoList(todoList);\n                }\n            }\n        });\n    }\n\n    function compressTask(task) {\n        const toCompress = document.querySelector(\n            \"[data-task-index='\" + task.taskId + \"']\"\n        );\n        const taskDesc = document.querySelector(\n            '.taskDescription' + task.taskId\n        );\n        toCompress.removeChild(taskDesc);\n        const taskSpan = document.querySelector('#prioSpan' + task.taskId);\n        toCompress.removeChild(taskSpan);\n    }\n\n    function enableButtons() {\n        const deleteT = document.querySelectorAll('.closeButton');\n        const createP = document.querySelector('.createProject');\n        const createT = document.querySelector('.createTask');\n        const deleteP = document.querySelector('.deleteProject');\n\n        deleteT.forEach((button) => {\n            button.addEventListener('click', () => {\n                actualProject.deleteTask(\n                    actualProject.getTasks[\n                        button.getAttribute('data-task-index')\n                    ]\n                );\n                _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodoList(todoList);\n            });\n        });\n\n        overlayClickListener();\n        createProjectButtonListener(createP);\n        createTaskButtonListener(createT);\n\n        deleteP.addEventListener('click', () => {\n            const tasklist = document.querySelector('.tasklist');\n            const projectsNames = document.querySelectorAll('.projectName');\n            tasklist.textContent = '';\n            projectsNames.forEach((project) => {\n                if (\n                    project.getAttribute('data-index') ==\n                    todoList.getProjects().indexOf(actualProject)\n                ) {\n                    project.remove();\n                }\n            });\n            todoList.deleteProject(actualProject.getName());\n            _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodoList(todoList);\n        });\n    }\n\n    function overlayClickListener() {\n        const overlay = document.querySelector('.overlay');\n        overlay.addEventListener('click', () => {\n            const projectInput = document.querySelector('.projectForm');\n            const taskInput = document.querySelector('.taskForm');\n\n            if (projectInput == null) {\n                hedMain.removeChild(taskInput);\n            } else {\n                hedMain.removeChild(projectInput);\n            }\n\n            overlay.classList.remove('active');\n        });\n    }\n\n    function createProjectButtonListener(button) {\n        const overlay = document.querySelector('.overlay');\n        button.addEventListener('click', () => {\n            createProjectModal(hedMain);\n            overlay.classList.add('active');\n        });\n    }\n\n    function createTaskButtonListener(button) {\n        const overlay = document.querySelector('.overlay');\n        button.addEventListener('click', () => {\n            createTaskModal(hedMain);\n            overlay.classList.add('active');\n        });\n    }\n\n    function showHomepage() {\n        UIProjectSetup();\n        enableButtons();\n    }\n\n    return {\n        showHomepage,\n        enableButtons,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInterface);\n\n\n//# sourceURL=webpack://todolist/./src/UI.js?");

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