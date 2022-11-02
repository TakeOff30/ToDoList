import Storage from './Storage';
import Project from './Project';
import Task from './Task';
import TodoList from './TodoList';

const UserInterface = (function () {
    let todoList;
    let actualProject;
    const hedMain = document.querySelector('.hedMain');
    let projectIndex = 0;
    let taskId = 0;

    function UIProjectSetup() {
        if (localStorage.getItem('todoList')) {
            todoList = Storage.getTodoList();
            UIInfoSetup();
        } else {
            todoList = new TodoList();
            UIInfoSetup();
            Storage.saveTodoList(todoList);
        }
    }

    function UIInfoSetup() {
        actualProject = todoList.getProject(0);
        updateProjectList(todoList.getProjects());
        updateTasklist(actualProject);
    }

    function updateProjectList(projects) {
        const leftPanel = document.querySelector('.leftPanel');
        const title = document.createElement('h2');
        title.textContent = 'Your projects';
        leftPanel.textContent = '';
        leftPanel.appendChild(title);
        projectIndex = 0;
        projects.forEach((project) => {
            displayProject(project, leftPanel);
        });
    }

    function displayProject(project, container) {
        let proTitle = document.createElement('p');
        proTitle.textContent = project.getName();
        proTitle.setAttribute('data-index', projectIndex);
        proTitle.classList.add('projectName');
        projectIndex++;
        proTitle.addEventListener('click', () => {
            actualProject = todoList.getProject(
                proTitle.getAttribute('data-index')
            );
            updateTasklist();
        });
        container.appendChild(proTitle);
    }

    function updateTasklist() {
        const tasklist = document.querySelector('.tasklist');
        tasklist.textContent = '';
        const title = document.createElement('h2');
        title.textContent = actualProject.getName();
        tasklist.appendChild(title);
        actualProject.getTasks().forEach((task) => {
            createTask(task, tasklist);
            taskId++;
        });
    }

    function createTask(task, container) {
        task.compressed = true;
        const taskDiv = document.createElement('div');
        taskDiv.setAttribute('data-task-index', task.taskId);
        taskDiv.classList.add('task');
        const taskName = document.createElement('h2');
        taskName.textContent = task.name;
        const taskDate = document.createElement('p');
        taskDate.textContent = task.dueDate;

        createCloseButton(taskDiv, task);
        setTaskPriority(task, taskDiv);
        createToggleIconButton(taskDiv, task);

        taskDiv.appendChild(taskName);
        taskDiv.appendChild(taskDate);
        container.appendChild(taskDiv);
    }

    function createCloseButton(taskContainer, task) {
        const closeButton = document.createElement('img');
        closeButton.setAttribute('src', '../dist/img/close.svg');
        closeButton.setAttribute('alt', 'close button');
        closeButton.classList.add('closeButton');
        setCloseButtonListener(closeButton);
        closeButton.setAttribute('data-task-index', task.taskId);
        taskContainer.appendChild(closeButton);
    }

    function setCloseButtonListener(button) {
        button.addEventListener('click', () => {
            const tasklist = document.querySelector('.tasklist');
            const dataToRemove = actualProject.getTask(
                button.getAttribute('data-task-index')
            );
            const contentToRemove = document.querySelector(
                '[data-task-index = "' +
                    button.getAttribute('data-task-index') +
                    '"]'
            );
            actualProject.deleteTask(dataToRemove);
            todoList.setProject(actualProject);
            Storage.saveTodoList(todoList);
            tasklist.removeChild(contentToRemove);
        });
    }

    function setTaskPriority(task, taskContainer) {
        if (task.priority == 'urgent' || task.priority == 'Urgent') {
            taskContainer.classList.add('urgent');
        } else if (
            task.priority == 'important' ||
            task.priority == 'Important'
        ) {
            taskContainer.classList.add('important');
        } else {
            taskContainer.classList.add('notImportant');
        }
    }

    function createToggleIconButton(taskContainer, task) {
        const expandImage = document.createElement('img');
        expandImage.classList.add('expandIcon');
        expandImage.setAttribute('src', '../dist/img/expandArrows.svg');
        expandImage.setAttribute(
            'alt',
            'button to expand information about the task'
        );
        toggleIconButtonListener(taskContainer, expandImage, task);
        taskContainer.appendChild(expandImage);
    }

    function toggleIconButtonListener(taskContainer, icon, task) {
        icon.addEventListener('click', () => {
            if (task.compressed) {
                expandTask(task);
                icon.setAttribute('src', '../dist/img/compressArrows.svg');
                taskContainer.classList.add('large');
                task.compressed = false;
            } else {
                compressTask(task);
                icon.setAttribute('src', '../dist/img/expandArrows.svg');
                taskContainer.classList.remove('large');
                task.compressed = true;
                Storage.saveTodoList(todoList);
            }
        });
    }

    function createProjectModal(container) {
        const projectForm = document.createElement('div');
        projectForm.classList.add('projectForm');
        const proLabel = document.createElement('label');
        proLabel.textContent = 'Project name: ';
        const inputElem = document.createElement('input');
        inputElem.setAttribute('type', 'text');
        const projectButton = document.createElement('button');
        projectButton.textContent = 'Create';

        projectButtonListener(projectButton, projectForm);

        projectForm.appendChild(proLabel);
        projectForm.appendChild(inputElem);
        projectForm.appendChild(projectButton);
        projectForm.classList.add('activeModal');
        container.appendChild(projectForm);
    }

    function projectButtonListener(button, form) {
        button.addEventListener('click', () => {
            const inputElem = document.querySelector('input');
            const overlay = document.querySelector('.overlay');
            const newProject = new Project(inputElem.value);
            todoList.addProject(newProject);
            Storage.saveTodoList(todoList);
            updateProjectList(todoList.getProjects());
            const projectList = document.querySelectorAll('.projectName');
            const lastProject = projectList.length - 1;
            actualProject = todoList.getProject(lastProject);
            form.classList.remove('activeModal');
            overlay.classList.remove('active');
        });
    }

    function createTaskModal(container) {
        const taskForm = document.createElement('div');
        taskForm.classList.add('taskForm');
        const taskButton = document.createElement('button');
        taskButton.textContent = 'Create';
        createTaskNameInput(taskForm);
        createTaskDescInput(taskForm);
        createTaskPriorityInput(taskForm);
        createTaskDateInput(taskForm);
        createTaskButtonListener(taskButton, taskForm);
        taskForm.classList.add('activeModal');
        container.appendChild(taskForm);
    }

    function createTaskNameInput(container) {
        const taskName = document.createElement('label');
        taskName.textContent = 'Task name: ';
        taskName.setAttribute('for', 'nameInput');
        const inputName = document.createElement('input');
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('id', 'nameInput');
        container.appendChild(taskName);
        container.appendChild(inputName);
    }

    function createTaskDescInput(container) {
        const taskDesc = document.createElement('label');
        taskDesc.textContent = 'Task description: ';
        const inputDesc = document.createElement('textarea');
        inputDesc.setAttribute('id', 'descInput');
        taskDesc.setAttribute('for', 'descInput');
        inputDesc.setAttribute('type', 'text');
        container.appendChild(taskDesc);
        container.appendChild(inputDesc);
    }

    function createTaskPriorityInput(container) {
        const taskPrioLabel = document.createElement('label');
        taskPrioLabel.textContent = 'Select the priority: ';
        taskPrioLabel.setAttribute('for', 'prioInput');
        const taskPriority = document.createElement('select');
        taskPriority.setAttribute('id', 'prioInput');
        const urgent = document.createElement('option');
        const important = document.createElement('option');
        const notImportant = document.createElement('option');
        urgent.textContent = 'Urgent';
        important.textContent = 'Important';
        notImportant.textContent = 'Not that important';
        taskPriority.appendChild(urgent);
        taskPriority.appendChild(important);
        taskPriority.appendChild(notImportant);
        container.appendChild(taskPriority);
    }

    function createTaskDateInput(container) {
        const taskDateLabel = document.createElement('label');
        taskDateLabel.textContent = 'Select the expiring date: ';
        taskDateLabel.setAttribute('for', 'dateInput');
        const inputDate = document.createElement('input');
        inputDate.setAttribute('type', 'date');
        inputDate.setAttribute('id', 'dateInput');
        container.appendChild(taskDateLabel);
        container.appendChild(inputDate);
    }

    function createTaskButtonListener(button, container) {
        button.addEventListener('click', () => {
            const overlay = document.querySelector('.overlay');
            const inputName = document.querySelector('#nameInput');
            const inputDate = document.querySelector('#dateInput');
            const inputDesc = document.querySelector('#descInput');
            const taskPriority = document.querySelector('#prioInput');
            const newTask = new Task(
                inputName.value,
                inputDate.value,
                taskPriority.value,
                inputDesc.value,
                taskId
            );
            taskId++;
            actualProject.addTask(newTask);
            Storage.saveTodoList(todoList);
            updateTasklist(actualProject);
            container.classList.remove('activeModal');
            overlay.classList.remove('active');
        });
        container.appendChild(button);
    }

    function expandTask(task) {
        const toExpand = document.querySelector(
            "[data-task-index='" + task.taskId + "']"
        );

        addDescField(task, toExpand);
        addPriorityRadios(task, toExpand);

        let radios = document.getElementsByClassName(
            'radioInputs' + task.taskId
        );
        Array.prototype.forEach.call(radios, (radio) => {
            radioButtonListener(radio, task);
        });
    }

    function addDescField(task, container) {
        const taskDesc = document.createElement('p');
        taskDesc.textContent = task.description;
        taskDesc.classList.add('taskDescription' + task.taskId);
        container.appendChild(taskDesc);
    }

    function addPriorityRadios(task, container) {
        const taskPrioLabel = document.createElement('label');
        taskPrioLabel.textContent = 'Select the priority: ';
        taskPrioLabel.setAttribute('for', 'prioInput');
        const taskPrioritySpan = document.createElement('span');
        taskPrioritySpan.setAttribute('id', 'prioSpan' + task.taskId);

        createUrgentRadio(task, taskPrioritySpan);
        createImportantRadio(task, taskPrioritySpan);
        createNotImportantRadio(task, taskPrioritySpan);

        container.appendChild(taskPrioritySpan);
    }

    function createUrgentRadio(task, container) {
        const urgentLabel = document.createElement('label');
        urgentLabel.textContent = 'Urgent: ';
        const urgent = document.createElement('input');
        urgent.classList.add('radioInputs' + task.taskId);
        urgent.setAttribute('type', 'radio');
        urgent.setAttribute('name', 'prio' + task.taskId);
        urgent.setAttribute('value', 'urgent');
        container.appendChild(urgentLabel);
        container.appendChild(urgent);
        if (task.priority == 'Urgent' || task.priority == 'urgent') {
            urgent.checked = true;
        }
    }
    function createImportantRadio(task, container) {
        const importantLabel = document.createElement('label');
        importantLabel.textContent = 'Important: ';
        const important = document.createElement('input');
        important.classList.add('radioInputs' + task.taskId);
        important.setAttribute('type', 'radio');
        important.setAttribute('name', 'prio' + task.taskId);
        important.setAttribute('value', 'important');
        container.appendChild(importantLabel);
        container.appendChild(important);
        if (task.priority == 'Important' || task.priority == 'important') {
            important.checked = true;
        }
    }
    function createNotImportantRadio(task, container) {
        const notImportantLabel = document.createElement('label');
        notImportantLabel.textContent = 'Not important: ';
        const notImportant = document.createElement('input');
        notImportant.classList.add('radioInputs' + task.taskId);
        notImportant.setAttribute('type', 'radio');
        notImportant.setAttribute('name', 'prio' + task.taskId);
        notImportant.setAttribute('value', 'notImportant');
        container.appendChild(notImportantLabel);
        container.appendChild(notImportant);
        if (
            task.priority == 'NotImportant' ||
            task.priority == 'notImportant'
        ) {
            notImportant.checked = true;
        }
    }

    function radioButtonListener(radio, task) {
        radio.addEventListener('click', () => {
            const taskDiv = document.querySelector(
                "[data-task-index='" + task.taskId + "']"
            );

            if (radio.getAttribute('type') == 'radio') {
                if (taskDiv.classList.contains('urgent')) {
                    taskDiv.classList.replace('urgent', radio.value);
                    task.setPriority(radio.value);
                    Storage.saveTodoList(todoList);
                } else if (taskDiv.classList.contains('important')) {
                    taskDiv.classList.replace('important', radio.value);
                    task.setPriority(radio.value);
                    Storage.saveTodoList(todoList);
                } else {
                    taskDiv.classList.replace('notImportant', radio.value);
                    task.setPriority(radio.value);
                    Storage.saveTodoList(todoList);
                }
            }
        });
    }

    function compressTask(task) {
        const toCompress = document.querySelector(
            "[data-task-index='" + task.taskId + "']"
        );
        const taskDesc = document.querySelector(
            '.taskDescription' + task.taskId
        );
        toCompress.removeChild(taskDesc);
        const taskSpan = document.querySelector('#prioSpan' + task.taskId);
        toCompress.removeChild(taskSpan);
    }

    function enableButtons() {
        const deleteT = document.querySelectorAll('.closeButton');
        const createP = document.querySelector('.createProject');
        const createT = document.querySelector('.createTask');
        const deleteP = document.querySelector('.deleteProject');

        deleteT.forEach((button) => {
            button.addEventListener('click', () => {
                actualProject.deleteTask(
                    actualProject.getTasks[
                        button.getAttribute('data-task-index')
                    ]
                );
                Storage.saveTodoList(todoList);
            });
        });

        overlayClickListener();
        createProjectButtonListener(createP);
        createTaskButtonListener(createT);

        deleteP.addEventListener('click', () => {
            const tasklist = document.querySelector('.tasklist');
            const projectsNames = document.querySelectorAll('.projectName');
            tasklist.textContent = '';
            projectsNames.forEach((project) => {
                if (
                    project.getAttribute('data-index') ==
                    todoList.getProjects().indexOf(actualProject)
                ) {
                    project.remove();
                }
            });
            todoList.deleteProject(actualProject.getName());
            Storage.saveTodoList(todoList);
        });
    }

    function overlayClickListener() {
        const overlay = document.querySelector('.overlay');
        overlay.addEventListener('click', () => {
            const projectInput = document.querySelector('.projectForm');
            const taskInput = document.querySelector('.taskForm');

            if (projectInput == null) {
                hedMain.removeChild(taskInput);
            } else {
                hedMain.removeChild(projectInput);
            }

            overlay.classList.remove('active');
        });
    }

    function createProjectButtonListener(button) {
        const overlay = document.querySelector('.overlay');
        button.addEventListener('click', () => {
            createProjectModal(hedMain);
            overlay.classList.add('active');
        });
    }

    function createTaskButtonListener(button) {
        const overlay = document.querySelector('.overlay');
        button.addEventListener('click', () => {
            createTaskModal(hedMain);
            overlay.classList.add('active');
        });
    }

    function showHomepage() {
        UIProjectSetup();
        enableButtons();
    }

    return {
        showHomepage,
        enableButtons,
    };
})();

export default UserInterface;
