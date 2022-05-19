import expandA from '../src/img/expandArrows.svg';
import compressA from '../src/img/compressArrows.svg';
const Task = (name, priority, description, dueDate, i) => {

    //BUG: need some attributes to identify every task 
    let taskId = i;


    function showTask(div){
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.setAttribute("data-task-index", taskId);
        const taskName = document.createElement("h2");
        taskName.textContent = this.name;
        const taskDate = document.createElement("p");
        taskDate.textContent = this.dueDate;
        let compressed = true;
        
        if(this.priority == "Urgent"){
            taskDiv.classList.add("urgent");
        }else if(this.priority == "Important"){
            taskDiv.classList.add("important");
        }else{
            taskDiv.classList.add("notImportant");
        }
        const expandImage = document.createElement("img");
        expandImage.classList.add("expandIcon");
        expandImage.setAttribute("src", expandA);
        expandImage.setAttribute("alt", "button to expand information about the task");
        expandImage.addEventListener("click", ()=>{
            if (compressed) {
                expandTask(taskDiv);
                expandImage.setAttribute("src", compressA);
                taskDiv.classList.add("large"); 
                compressed = false;
            }else{
                compressTask(taskDiv);
                expandImage.setAttribute("src", expandA);
                taskDiv.classList.remove("large"); 
                compressed = true;
            }
            

        })
        taskDiv.appendChild(taskName);
        taskDiv.appendChild(taskDate);
        taskDiv.appendChild(expandImage)
        div.appendChild(taskDiv);
    }

    function expandTask(task){

        const taskDesc = document.createElement("p");
        taskDesc.textContent = description;
        taskDesc.classList.add("taskDescription"+taskId);
        task.appendChild(taskDesc);

        const taskPrioLabel = document.createElement("label");
        taskPrioLabel.textContent = "Select the priority: ";
        taskPrioLabel.setAttribute("for", "prioInput");
        const taskPrioritySpan = document.createElement("span");
        taskPrioritySpan.setAttribute("id", "prioSpan"+taskId);
        const urgentLabel = document.createElement("label");
        urgentLabel.textContent = "Urgent: ";
        const importantLabel = document.createElement("label");
        importantLabel.textContent = "Important: ";
        const notImportantLabel = document.createElement("label");
        notImportantLabel.textContent = "Not important: ";

        let urgent;
        let important;
        let notImportant;

        function createRadios(){

            urgent = document.createElement("input");
            urgent.setAttribute("type", "radio");
            urgent.setAttribute("name", "prio"+taskId);
            important = document.createElement("input");
            important.setAttribute("type", "radio");
            important.setAttribute("name", "prio"+taskId);
            notImportant = document.createElement("input");
            notImportant.setAttribute("type", "radio");
            notImportant.setAttribute("name", "prio"+taskId);
            if (priority == "Urgent") {
                urgent.checked = true;
            }else if(priority == "Important"){
                important.checked = true;
            }else{
                notImportant.checked = true;
            }
        }
        createRadios()
        taskPrioritySpan.appendChild(urgentLabel);
        taskPrioritySpan.appendChild(urgent);
        taskPrioritySpan.appendChild(importantLabel);
        taskPrioritySpan.appendChild(important);
        taskPrioritySpan.appendChild(notImportantLabel);
        taskPrioritySpan.appendChild(notImportant);
        task.appendChild(taskPrioritySpan);

    }

    function compressTask(task){

        const taskDesc = document.querySelector(".taskDescription"+taskId);
        task.removeChild(taskDesc);
        const taskSpan = document.querySelector("#prioSpan"+taskId);
        task.removeChild(taskSpan);

    }

    return {
        name, priority, description, dueDate, showTask, expandTask
    }
}

export default Task;