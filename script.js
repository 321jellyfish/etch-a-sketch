const divContainer = document.querySelector("#container");
const clearGridButton = document.querySelector("#clear-grid");
const newSizeGridButton = document.querySelector("#new-size-grid")
let listOfDivs;

function createGrid(userSizeChoice){
        for(let i = 0; i < userSizeChoice * userSizeChoice; i++ ){
                const div = document.createElement('div');
                div.style.width = `${400/userSizeChoice}px`;
                div.style.height = `${400/userSizeChoice}px`;
                divContainer.appendChild(div);
                //div.addEventListener("mouseover", () => div.classList.add("coloredDiv") );  
                div.addEventListener("mouseover", () => div.classList.add("coloredDiv"), div.style.opacity = 10);
                listOfDivs = document.querySelectorAll("#container > *");
                
        }
}

function createCustomGrid(){
        while(divContainer.firstChild){
                divContainer.removeChild(divContainer.firstChild);
        }
        let userSizeChoice = prompt("How many squares would you like per side of grid? Input a number up to 100");
                if(userSizeChoice === null){
                        return;
                }
                if((userSizeChoice > 100)||(typeof +userSizeChoice !== "number")){
                        userSizeChoice = prompt("Please input a number between 1 and 100");
                }
                if(userSizeChoice > 100){
                        userSizeChoice = 100;
                        console.log({userSizeChoice});
                }

        createGrid(userSizeChoice);
}

window.addEventListener('load', createGrid(16));

//clearGridButton.addEventListener("click", () =>  => div.classList.remove("coloredDiv")) );

clearGridButton.addEventListener("click", () => listOfDivs.forEach((div) => div.classList.remove("coloredDiv")) );

newSizeGridButton.addEventListener("click", createCustomGrid);

//let allTheDivs = document.querySelectorAll("#container > *");


//Update clear button so it can clear after a new grid size has been chosen

