
const Task = (name, priority, description, dueDate) => {

    function showTask(div){

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        const taskName = document.createElement("h2");
        taskName.textContent = name;
        const taskDate = document.createElement("p");
        taskDate.textContent = dueDate;
        
        if(this.priority == "Urgent"){
            taskDiv.classList.add("urgent");
        }else if(this.priority == "Important"){
            taskDiv.classList.add("important");
        }else{
            taskDiv.classList.add("notImportant");
        }

        div.appendChild(taskDiv);
    }

    function expandTask(){

        const taskDesc = document.createElement("p");
        taskDesc.textContent = this.description;
        this.appendChild(taskDesc);

    }

    return {
        name, priority, description, dueDate, showTask, expandTask
    }
}

export default Task;