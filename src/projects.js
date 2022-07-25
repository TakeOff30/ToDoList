import Task from './tasks'
import Home from './ui'
const Project = (name, tasks) => {

    let i = 0;
    
    function createTask(name, priority, description, dueDate){
        let task = Task(name, priority, description, dueDate, i);
        i++;
        tasks.push(task);
    }

    function removeTask(index){
        let toRemove = document.querySelector('[data-task-index="'+index+'"]')
        toRemove.style.display = "none";
        tasks[index] = null;
    }

    function showProject(container){
        container.textContent = "";
        
        this.tasks.forEach( task => {
            
            
            task.showTask(container);
            

        });

        

    }

    return {
        name, tasks, createTask, removeTask, showProject
    }
}

export default Project;