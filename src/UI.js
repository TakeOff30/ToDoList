export default class UI {
    static showHomepage() {}

    createProjectModal(container) {
        const projectInput = document.createElement('div');
        const proLabel = document.createElement('label');
        const inputElem = document.createElement('input');
        const projectButton = document.createElement('button');

        proLabel.textContent = 'Project name: ';
        inputElem.setAttribute('type', 'text');
        projectInput.classList.add('projectForm');

        projectButton.textContent = 'Create';
        projectButton.addEventListener('click', () => {
            /* projects.push(Project(inputElem.value, []));
            window.localStorage.setItem('projects', JSON.stringify(projects));
            container.removeChild(projectInput);
            overlay.classList.remove('active');
            updateLeftPanel(); */
        });

        projectInput.appendChild(proLabel);
        projectInput.appendChild(inputElem);
        projectInput.appendChild(projectButton);
        projectInput.classList.add('activeModal');
        container.appendChild(projectInput);
    }

    createTaskModal(container) {
        const taskInput = document.createElement('div');

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
            /* actualProject.createTask(
                inputName.value,
                taskPriority.value,
                inputDesc.value,
                dateInput.value
            );
            window.localStorage.setItem('projects', JSON.stringify(projects));
            tasklist = document.querySelector('.tasklist');
            actualProject.showProject(tasklist);
            container.removeChild(taskInput);
            overlay.classList.remove('active');
            addRemoveButtonListeners(tasklist); */
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
}
