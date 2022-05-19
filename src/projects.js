import Task from './tasks'

const Project = (name) => {

    const tasks = [];
    let i = 0;

    function createTask(name, priority, description, dueDate){
        let task = Task(name, priority, description, dueDate, i);
        i++;
        tasks.push(task);
    }

    function showProject(container){
        container.textContent = "";
        this.tasks.forEach( task => {

            task.showTask(container);

        });

    }

    return {
        name, tasks, createTask, showProject
    }
}

export { Project };