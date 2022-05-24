import Task from './tasks'

const Project = (name) => {

    let tasks = [];
    let i = 0;

    function createTask(name, priority, description, dueDate){
        let task = Task(name, priority, description, dueDate, i);
        i++;
        tasks.push(task);
    }

    function removeTask(index){
        tasks[index] = null;
    }

    function showProject(container){
        container.textContent = "";
        this.tasks.forEach( task => {
            if (task != null) {
                task.showTask(container);
                const closeB = document.querySelectorAll(".closeButton");
                closeB.forEach((button) => {
                    button.addEventListener("click", ()=>{
                        this.removeTask(button.getAttribute("data-task-index"));
                        
                        this.showProject(container);
                    })
                })
            }
            

        });

    }

    return {
        name, tasks, createTask, removeTask, showProject
    }
}

export default Project;