

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
        divText.textContent = "Time moves in one direction, memory in another.";
        authorCredit.textContent = "William Gibson";

        heroDiv.appendChild(title);
        heroDiv.appendChild(divText);
        heroDiv.appendChild(authorCredit);
        heroDiv.appendChild(suggText);
        container.appendChild(heroDiv);

    }

    function createHeader(){

        const header = document.createElement("header");

    }

    function createMain(){

    }

    function showHomepage(container){

        createHero(container);
        createHeader(container);
        createMain(container);
        
    }

    return {

        showHomepage

    }

})();


export default Home;