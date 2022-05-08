

var Home = (function (){

    function createHero(container){

        const heroDiv = document.createElement("div");
        heroDiv.classList.add("heroDiv");

        const title = document.createElement("h1");
        title.textContent = "Todo List";

        const divText = document.createElement("p");
        const authorCredit = document.createElement("label");
        const suggText = document.createElement("p");
        suggText.textContent = "We are here to help you remember.";
        divText.textContent = '"Time moves in one direction, memory in another."';
        authorCredit.textContent = "William Gibson";

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
        createP.classList.add("createProject");
        deleteP.classList.add("deleteProject");
        createP.textContent = "Create project";
        deleteP.textContent = "Delete this project";
        title.textContent = "Your todos";

        //eventlisteners for buttons

        header.appendChild(title);
        header.appendChild(createP);
        header.appendChild(deleteP);
        container.appendChild(header);
    }

    function createMain(container){

        const main = document.createElement("main");
        const leftPanel = document.createElement("div");
        leftPanel.classList.add("leftPanel");
        const mainTaskTitle = document.createElement("h2");
        mainTaskTitle.textContent = "Main tasklist";
        const projectsListTitle = document.createElement("h2");
        projectsListTitle.textContent = "Your projects";

        leftPanel.appendChild(mainTaskTitle);
        leftPanel.appendChild(projectsListTitle);

        const mainPanel = document.createElement("div");
        mainPanel.classList.add("mainPanel");
        const title = document.createElement("h1");
        title.textContent = "Main tasklist";
        const tasklist = document.createElement("div");
        tasklist.classList.add("tasklist");

        //add tasks to tasklist

        mainPanel.appendChild(title);
        mainPanel.appendChild(tasklist);

        main.appendChild(leftPanel);
        main.appendChild(mainPanel);

        container.appendChild(main);


    }

    function showHomepage(container){

        createHero(container);

        const hedMain = document.createElement("div");
        hedMain.classList.add("hedMain");

        createHeader(hedMain);
        createMain(hedMain);
        
        container.appendChild(hedMain);
    }

    return {

        showHomepage

    }

})();


export default Home;