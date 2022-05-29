import Project from './projects';
import Task from './tasks';



var Home = (function (){
    let projects = [];
    let ciao = Project("ciao", []);
    console.log(ciao);
    let storedCiao = JSON.stringify(ciao)
    localStorage.setItem("ciao", storedCiao);
    let retrivedCiao = localStorage.getItem("ciao")
    retrivedCiao = JSON.parse(retrivedCiao)
    let restoreCiao = Project(retrivedCiao.name, retrivedCiao.tasks)
    console.log(restoreCiao)
    if (!localStorage.getItem('projects')) {
        projects = [];
    }else{
        let retrivedProjects = localStorage.getItem('projects');
        retrivedProjects = JSON.parse(retrivedProjects);
        console.log(retrivedProjects)

        retrivedProjects.forEach(retrived =>{
            let retrivedTasks = [];
            console.log(retrived.tasks)
            retrived.tasks.forEach(task =>{
                retrivedTasks.push(Task(task.name, task.priority, task.description, task.dueDate, task.i))
            });
            projects.push(Project(retrived.name, retrivedTasks))
        });
    }

    let mainProject;
    let actualProject;
    if (projects.length == 0) {
        mainProject = Project("main tasklist", []);
        projects.push(mainProject);
        window.localStorage.setItem('projects', JSON.stringify(projects));
        actualProject = mainProject;
    }else{
        mainProject = projects[0];
        actualProject = mainProject;
    }
    
    const hedMain = document.createElement("div");
    hedMain.classList.add("hedMain");
    hedMain.setAttribute("id","main");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    let i = 0;
    const mainPanel = document.createElement("div");
    mainPanel.classList.add("mainPanel");
    const leftPanel = document.createElement("div");
    leftPanel.classList.add("leftPanel");
    let tasklist;

    overlay.addEventListener("click", ()=>{

        const projectInput = document.querySelector(".projectForm");
        const taskInput = document.querySelector(".taskForm");

        if (projectInput == null) {
            hedMain.removeChild(taskInput); 
        }else{
            hedMain.removeChild(projectInput);
        }
        
        
        overlay.classList.remove("active")
    })

    function createHero(container){

        const heroDiv = document.createElement("div");
        heroDiv.classList.add("heroDiv");

        const title = document.createElement("h1");
        const scrollLink = document.createElement("a");
        scrollLink.textContent = "Todo List";
        scrollLink.setAttribute("href","#main");

        const divText = document.createElement("p");
        const authorCredit = document.createElement("label");
        const suggText = document.createElement("p");
        suggText.textContent = "We are here to help you remember.";
        divText.textContent = '"Time moves in one direction, memory in another."';
        authorCredit.textContent = "William Gibson";
        title.appendChild(scrollLink);
        heroDiv.appendChild(title);
        heroDiv.appendChild(divText);
        heroDiv.appendChild(authorCredit);
        heroDiv.appendChild(suggText);
        container.appendChild(heroDiv);

    }

    function createHeader(container){

        const header = document.createElement("header");
        const title = document.createElement("h1");
        const createP = document.createElement("button");
        const deleteP = document.createElement("button");
        const createT = document.createElement("button");
        createP.classList.add("createProject");
        createT.classList.add("createProject");
        deleteP.classList.add("deleteProject");
        deleteP.classList.add("disabledButton");
        createP.textContent = "Create new project";
        deleteP.textContent = "Delete this project";
        createT.textContent = "Add task";
        title.textContent = "Your todos";

        createT.addEventListener("click", ()=>{
            createTaskModal(hedMain);
            overlay.classList.add("active");
        });

        createP.addEventListener("click", ()=>{
            createProjectModal(hedMain);
            overlay.classList.add("active");
            
        });
        
        deleteP.addEventListener("click", ()=>{
            tasklist = document.querySelector(".tasklist")
            
            if (actualProject != mainProject) {
                projects.pop(actualProject);
                window.localStorage.setItem('projects', JSON.stringify(projects));
                updateLeftPanel();
                actualProject = mainProject;
                let title = document.querySelector(".mainPanel h1");
                title.textContent = actualProject.name;
                mainProject.showProject(tasklist);
                deleteP.classList.add("disabledButton");
            }
            
        });
        

        header.appendChild(title);
        header.appendChild(createT);
        header.appendChild(createP);
        header.appendChild(deleteP);
        container.appendChild(header);
    }

    function createMain(container){

        const main = document.createElement("main");
        const projectsListTitle = document.createElement("h2");
        projectsListTitle.textContent = "Your projects";
        leftPanel.appendChild(projectsListTitle);

        updateLeftPanel();
        let title = document.createElement("h1");
        title.textContent = actualProject.name;
        let tasklist = document.createElement("div");
        tasklist.classList.add("tasklist");
        actualProject.showProject(tasklist);
        mainPanel.appendChild(title);
        mainPanel.appendChild(tasklist);

        main.appendChild(leftPanel);
        main.appendChild(mainPanel);

        container.appendChild(main);


    }

    function updateLeftPanel(){
        leftPanel.textContent = "";
        i = 0;
        projects.forEach(project => {
        
            let proTitle = document.createElement("p");
            proTitle.textContent = project.name;
            proTitle.setAttribute("data-index", i);
            i++;
            let title = document.createElement("h1");
            title.textContent = project.name;
            let tasklist = document.createElement("div");
            tasklist.classList.add("tasklist");
            
        
            proTitle.addEventListener("click", () => {

                mainPanel.textContent = "";
                title.textContent = project.name;
                tasklist.textContent = "";
                const deleteP = document.querySelector(".deleteProject");
                mainPanel.appendChild(title);
                let i = proTitle.getAttribute("data-index");
                tasklist.textContent = "";
                actualProject = projects[i];
                actualProject.tasks.forEach( task => {
                    if (task != null) {
                        task.showTask(tasklist);
                        const closeB = document.querySelectorAll(".closeButton");
                        closeB.forEach((button) => {
                            button.addEventListener("click", ()=>{
                                this.removeTask(button.getAttribute("data-task-index"));
                                
                                this.showProject(tasklist);
                            })
                        })
                    }
                    
        
                });
                
                if (actualProject == mainProject) {
                    deleteP.classList.add("disabledButton");
                }else{
                    deleteP.classList.remove("disabledButton");
                }
                mainPanel.appendChild(tasklist);
                
            });

            leftPanel.appendChild(proTitle);


        });
    }

    function createProjectModal(container){

        const projectInput = document.createElement("div");
        const proLabel = document.createElement("label");
        const inputElem = document.createElement("input");
        const projectButton = document.createElement("button");

        proLabel.textContent = "Project name: ";
        inputElem.setAttribute("type", "text");
        projectInput.classList.add("projectForm");

        projectButton.textContent = "Create";
        projectButton.addEventListener("click", ()=>{
            projects.push(Project(inputElem.value, []));
            window.localStorage.setItem('projects', JSON.stringify(projects));
            container.removeChild(projectInput);
            overlay.classList.remove("active");
            updateLeftPanel();
        });

        projectInput.appendChild(proLabel);
        projectInput.appendChild(inputElem);
        projectInput.appendChild(projectButton);
        projectInput.classList.add("activeModal");
        container.appendChild(projectInput);


    }

    function createTaskModal(container){

        const taskInput = document.createElement("div");

        const taskName = document.createElement("label");
        taskName.textContent = "Task name: ";
        taskName.setAttribute("for", "nameInput");
        taskName.setAttribute("for", "descInput");
        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameInput");

        const taskDesc = document.createElement("label")
        taskDesc.textContent = "Task description: ";
        const inputDesc = document.createElement("textarea");
        inputDesc.setAttribute("id", "descInput");
        inputDesc.setAttribute("type", "text");

        const taskPrioLabel = document.createElement("label");
        taskPrioLabel.textContent = "Select the priority: ";
        taskPrioLabel.setAttribute("for", "prioInput");
        const taskPriority = document.createElement("select");
        taskPriority.setAttribute("id", "prioInput");
        const urgent = document.createElement("option");
        const important = document.createElement("option");
        const notImportant = document.createElement("option");
        urgent.textContent = "Urgent";
        important.textContent = "Important";
        notImportant.textContent = "Not that important";
        taskPriority.appendChild(urgent);
        taskPriority.appendChild(important);
        taskPriority.appendChild(notImportant);

        const taskDateLabel = document.createElement("label");
        taskDateLabel.textContent = "Select the expiring date: ";
        taskDateLabel.setAttribute("for", "dateInput");
        const inputDate = document.createElement("input");
        inputDate.setAttribute("type", "date");
        inputDate.setAttribute("id", "dateInput");

        const taskButton = document.createElement("button");
        
        taskInput.classList.add("taskForm");
        taskButton.textContent = "Create";
        taskButton.addEventListener("click", () => {
            actualProject.createTask(inputName.value, taskPriority.value, inputDesc.value, dateInput.value);
            window.localStorage.setItem('projects', JSON.stringify(projects));
            tasklist = document.querySelector(".tasklist");
            actualProject.showProject(tasklist);
            container.removeChild(taskInput);
            overlay.classList.remove("active");
            let deleteT = document.querySelectorAll(".closeButton");
            deleteT.forEach( (button) => {
                button.addEventListener("click", () => {
                    
                    actualProject.removeTask(button.getAttribute("data-task-index"));
                    window.localStorage.setItem('projects', JSON.stringify(projects))
                    actualProject.showProject(tasklist);

                }
                );
            });
        });

        taskInput.appendChild(taskName);
        taskInput.appendChild(inputName);

        taskInput.appendChild(taskDesc);
        taskInput.appendChild(inputDesc);

        taskInput.appendChild(taskDateLabel);
        taskInput.appendChild(inputDate);

        taskInput.appendChild(taskPriority);

        taskInput.appendChild(taskButton);
        taskInput.classList.add("activeModal");
        container.appendChild(taskInput);

    }

    function showHomepage(container){
        createHero(container);
        createHeader(hedMain);
        createMain(hedMain);
        
        container.appendChild(hedMain);
        container.appendChild(overlay);
    }

    return {

        showHomepage

    }

})();


export default Home;