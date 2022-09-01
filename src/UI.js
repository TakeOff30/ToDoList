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

    function loadProjects() {
        if (localStorage.getItem('todoList')) {
            todoList = Storage.getTodoList();
            console.log(todoList);
            actualProject = todoList.getProject(0);
            updateProjectList(todoList.getProjects());
            updateTasklist(actualProject);
        } else {
            todoList = new TodoList();
            actualProject = todoList.getProject(0);
            console.log(actualProject);
            updateProjectList(todoList.getProjects());
            updateTasklist(actualProject);
            Storage.saveTodoList(todoList);
        }
    }

    function updateProjectList(projects) {
        const leftPanel = document.querySelector('.leftPanel');
        const title = document.createElement('h2');
        title.textContent = 'Your projects';
        leftPanel.textContent = '';
        leftPanel.appendChild(title);
        projectIndex = 0;
        projects.forEach((project) => {
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
            leftPanel.appendChild(proTitle);
        });
    }

    function updateTasklist() {
        const tasklist = document.querySelector('.tasklist');
        tasklist.textContent = '';
        const title = document.createElement('h2');
        title.textContent = actualProject.getName();
        tasklist.appendChild(title);
        actualProject.getTasks().forEach((task) => {
            task.compressed = true;
            const taskDiv = document.createElement('div');
            taskDiv.setAttribute('data-task-index', task.taskId);
            taskDiv.classList.add('task');
            const taskName = document.createElement('h2');
            taskName.textContent = task.name;
            const taskDate = document.createElement('p');
            const closeButton = document.createElement('img');
            closeButton.setAttribute('src', '../dist/img/close.svg');
            closeButton.setAttribute('alt', 'close button');
            closeButton.classList.add('closeButton');

            closeButton.addEventListener('click', () => {
                const dataToRemove = actualProject.getTask(
                    closeButton.getAttribute('data-task-index')
                );
                const contentToRemove = document.querySelector(
                    '[data-task-index = "' +
                        closeButton.getAttribute('data-task-index') +
                        '"]'
                );
                actualProject.deleteTask(dataToRemove);
                todoList.setProject(actualProject);
                Storage.saveTodoList(todoList);
                tasklist.removeChild(contentToRemove);
            });

            closeButton.setAttribute('data-task-index', task.taskId);
            taskDate.textContent = task.dueDate;

            if (task.priority == 'urgent' || task.priority == 'Urgent') {
                taskDiv.classList.add('urgent');
            } else if (
                task.priority == 'important' ||
                task.priority == 'Important'
            ) {
                taskDiv.classList.add('important');
            } else {
                taskDiv.classList.add('notImportant');
            }

            const expandImage = document.createElement('img');
            expandImage.classList.add('expandIcon');
            expandImage.setAttribute('src', '../dist/img/expandArrows.svg');
            expandImage.setAttribute(
                'alt',
                'button to expand information about the task'
            );
            expandImage.addEventListener('click', () => {
                if (task.compressed) {
                    expandTask(task);
                    expandImage.setAttribute(
                        'src',
                        '../dist/img/compressArrows.svg'
                    );
                    taskDiv.classList.add('large');
                    task.compressed = false;
                } else {
                    compressTask(task);
                    expandImage.setAttribute(
                        'src',
                        '../dist/img/expandArrows.svg'
                    );
                    taskDiv.classList.remove('large');
                    task.compressed = true;
                    Storage.saveTodoList(todoList);
                }
                taskId++;
            });

            taskDiv.appendChild(taskName);
            taskDiv.appendChild(taskDate);
            taskDiv.appendChild(expandImage);
            taskDiv.appendChild(closeButton);
            tasklist.appendChild(taskDiv);
        });
    }

    function createProjectModal(container) {
        const projectInput = document.createElement('div');
        const proLabel = document.createElement('label');
        const inputElem = document.createElement('input');
        const projectButton = document.createElement('button');
        const overlay = document.querySelector('.overlay');
        proLabel.textContent = 'Project name: ';
        inputElem.setAttribute('type', 'text');
        projectInput.classList.add('projectForm');

        projectButton.textContent = 'Create';
        projectButton.addEventListener('click', () => {
            const newProject = new Project(inputElem.value);
            todoList.addProject(newProject);
            Storage.saveTodoList(todoList);
            updateProjectList(todoList.getProjects());
            const projectList = document.querySelectorAll('.projectName');
            const lastProject = projectList.length - 1;
            actualProject = todoList.getProject(lastProject);
            projectInput.classList.remove('activeModal');
            overlay.classList.remove('active');
        });

        projectInput.appendChild(proLabel);
        projectInput.appendChild(inputElem);
        projectInput.appendChild(projectButton);
        projectInput.classList.add('activeModal');
        container.appendChild(projectInput);
    }

    function createTaskModal(container) {
        const taskInput = document.createElement('div');
        const overlay = document.querySelector('.overlay');

        const taskName = document.createElement('label');
        taskName.textContent = 'Task name: ';
        taskName.setAttribute('for', 'nameInput');
        taskName.setAttribute('for', 'descInput');
        const inputName = document.createElement('input');
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('id', 'nameInput');

        const taskDesc = document.createElement('label');
        taskDesc.textContent = 'Task description: ';
        const inputDesc = document.createElement('textarea');
        inputDesc.setAttribute('id', 'descInput');
        inputDesc.setAttribute('type', 'text');

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

        const taskDateLabel = document.createElement('label');
        taskDateLabel.textContent = 'Select the expiring date: ';
        taskDateLabel.setAttribute('for', 'dateInput');
        const inputDate = document.createElement('input');
        inputDate.setAttribute('type', 'date');
        inputDate.setAttribute('id', 'dateInput');

        const taskButton = document.createElement('button');

        taskInput.classList.add('taskForm');
        taskButton.textContent = 'Create';
        taskButton.addEventListener('click', () => {
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
            taskInput.classList.remove('activeModal');
            overlay.classList.remove('active');
        });

        taskInput.appendChild(taskName);
        taskInput.appendChild(inputName);

        taskInput.appendChild(taskDesc);
        taskInput.appendChild(inputDesc);

        taskInput.appendChild(taskDateLabel);
        taskInput.appendChild(inputDate);

        taskInput.appendChild(taskPriority);

        taskInput.appendChild(taskButton);
        taskInput.classList.add('activeModal');
        container.appendChild(taskInput);
    }

    function expandTask(task) {
        const taskDesc = document.createElement('p');
        const toExpand = document.querySelector(
            "[data-task-index='" + task.taskId + "']"
        );
        taskDesc.textContent = task.description;
        taskDesc.classList.add('taskDescription' + task.taskId);
        toExpand.appendChild(taskDesc);

        const taskPrioLabel = document.createElement('label');
        taskPrioLabel.textContent = 'Select the priority: ';
        taskPrioLabel.setAttribute('for', 'prioInput');
        const taskPrioritySpan = document.createElement('span');
        taskPrioritySpan.setAttribute('id', 'prioSpan' + task.taskId);
        const urgentLabel = document.createElement('label');
        urgentLabel.textContent = 'Urgent: ';
        const importantLabel = document.createElement('label');
        importantLabel.textContent = 'Important: ';
        const notImportantLabel = document.createElement('label');
        notImportantLabel.textContent = 'Not important: ';

        let urgent;
        let important;
        let notImportant;

        function createRadios(task) {
            urgent = document.createElement('input');
            urgent.classList.add('radioInputs' + task.taskId);
            urgent.setAttribute('type', 'radio');
            urgent.setAttribute('name', 'prio' + task.taskId);
            urgent.setAttribute('value', 'urgent');
            important = document.createElement('input');
            important.classList.add('radioInputs' + task.taskId);
            important.setAttribute('type', 'radio');
            important.setAttribute('name', 'prio' + task.taskId);
            important.setAttribute('value', 'important');
            notImportant = document.createElement('input');
            notImportant.classList.add('radioInputs' + task.taskId);
            notImportant.setAttribute('type', 'radio');
            notImportant.setAttribute('name', 'prio' + task.taskId);
            notImportant.setAttribute('value', 'notImportant');
            if (task.priority == 'Urgent' || task.priority == 'urgent') {
                urgent.checked = true;
            } else if (
                task.priority == 'Important' ||
                task.priority == 'important'
            ) {
                important.checked = true;
            } else {
                notImportant.checked = true;
            }
            taskPrioritySpan.appendChild(urgentLabel);
            taskPrioritySpan.appendChild(urgent);
            taskPrioritySpan.appendChild(importantLabel);
            taskPrioritySpan.appendChild(important);
            taskPrioritySpan.appendChild(notImportantLabel);
            taskPrioritySpan.appendChild(notImportant);
            toExpand.appendChild(taskPrioritySpan);
        }
        createRadios(task);
        let radios = document.getElementsByClassName(
            'radioInputs' + task.taskId
        );
        Array.prototype.forEach.call(radios, (radio) => {
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
        const overlay = document.querySelector('.overlay');

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

        createT.addEventListener('click', () => {
            createTaskModal(hedMain);
            overlay.classList.add('active');
        });

        createP.addEventListener('click', () => {
            createProjectModal(hedMain);
            overlay.classList.add('active');
        });

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

    function showHomepage() {
        loadProjects();
        enableButtons();
    }

    return {
        showHomepage,
        enableButtons,
    };
})();

export default UserInterface;
