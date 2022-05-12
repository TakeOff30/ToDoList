import Task from './tasks'

const Project = (name) => {

    const tasks = [];

    function createTask(name, priority, description, dueDate){
        let task = Task(name, priority, description, dueDate);
        tasks.push(task);
    }

    function showProject(container){

        this.tasks.forEach( task => {

            task.showTask(container);

        });

    }

    return {
        name, tasks, createTask, showProject
    }
}

export { Project };