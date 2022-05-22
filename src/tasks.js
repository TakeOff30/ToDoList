import expandA from '../src/img/expandArrows.svg';
import compressA from '../src/img/compressArrows.svg';
const Task = (name, priority, description, dueDate, i) => {

    
    let taskId = i;
    let taskDiv;

    function showTask(div){
        taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.setAttribute("data-task-index", taskId);
        const taskName = document.createElement("h2");
        taskName.textContent = this.name;
        const taskDate = document.createElement("p");
        const closeButton = document.createElement("img");
        closeButton.setAttribute("src", "../src/img/close.svg")
        closeButton.setAttribute("alt","close button");
        closeButton.classList.add("closeButton");
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
        taskDiv.appendChild(expandImage);
        taskDiv.appendChild(closeButton);
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
            urgent.classList.add("radioInputs"+taskId);
            urgent.setAttribute("type", "radio");
            urgent.setAttribute("name", "prio"+taskId);
            urgent.setAttribute("value", "urgent");
            important = document.createElement("input");
            important.classList.add("radioInputs"+taskId);
            important.setAttribute("type", "radio");
            important.setAttribute("name", "prio"+taskId);
            important.setAttribute("value", "important");
            notImportant = document.createElement("input");
            notImportant.classList.add("radioInputs"+taskId);
            notImportant.setAttribute("type", "radio");
            notImportant.setAttribute("name", "prio"+taskId);
            notImportant.setAttribute("value", "notImportant");
            if (priority == "Urgent" || priority == "urgent") {
                urgent.checked = true;
            }else if(priority == "Important" || priority == "important"){
                important.checked = true;
            }else{
                notImportant.checked = true;
            }
            taskPrioritySpan.appendChild(urgentLabel);
            taskPrioritySpan.appendChild(urgent);
            taskPrioritySpan.appendChild(importantLabel);
            taskPrioritySpan.appendChild(important);
            taskPrioritySpan.appendChild(notImportantLabel);
            taskPrioritySpan.appendChild(notImportant);
            task.appendChild(taskPrioritySpan);
        }
        createRadios();
        let radios = document.getElementsByClassName('radioInputs'+taskId);
        Array.prototype.forEach.call(radios, radio => {
            radio.addEventListener("click", ()=>{
                const taskDiv = document.querySelector("[data-task-index='"+i+"']")
                if(radio.getAttribute('type')=='radio'){
                    if (taskDiv.classList.contains("urgent")) {
                        taskDiv.classList.replace("urgent", radio.value);
                        priority = radio.value;
                    }else if(taskDiv.classList.contains("important")){
                        taskDiv.classList.replace("important", radio.value);
                        priority = radio.value;
                    }else{
                        taskDiv.classList.replace("notImportant", radio.value);
                        priority = radio.value;
                    }
                }
                

            });
        });
        
        
    }

    function compressTask(task){

        const taskDesc = document.querySelector(".taskDescription"+task.getAttribute("data-task-index"));
        task.removeChild(taskDesc);
        const taskSpan = document.querySelector("#prioSpan"+task.getAttribute("data-task-index"));
        task.removeChild(taskSpan);

    }

    return {
        name, priority, description, dueDate, i, showTask, expandTask
    }
}

export default Task;