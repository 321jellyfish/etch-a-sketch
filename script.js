const divContainer = document.querySelector("#container");
const clearGrid = document.querySelector("#clear-grid");
const newSizeGrid = document.querySelector("#new-size-grid")


function createGrid(userSizeChoice){
        for(let i = 0; i < userSizeChoice * userSizeChoice; i++ ){
                const div = document.createElement('div');
                div.style.width = `${400/userSizeChoice}px`;
                div.style.height = `${400/userSizeChoice}px`;
                divContainer.appendChild(div);
                div.addEventListener("mouseover", () => div.classList.add("coloredDiv") );  
        }
}

window.addEventListener('load', createGrid(16));

let allTheDivs = document.querySelectorAll("#container > *");

clearGrid.addEventListener("click", () => allTheDivs.forEach((div) => div.classList.remove("coloredDiv")) );

newSizeGrid.addEventListener("click", emptyGrid);


function emptyGrid(){
        while(divContainer.firstChild){
                divContainer.removeChild(divContainer.firstChild);
        }
        let userSizeChoice = prompt("How many squares would you like per side of grid? Input a number up to 100");
        console.log({userSizeChoice});  
        
        for(let i = 0; i < userSizeChoice * userSizeChoice; i++ ){
                const div = document.createElement('div');
                div.style.width = `${400/userSizeChoice}px`;
                div.style.height = `${400/userSizeChoice}px`;
                divContainer.appendChild(div);
                div.addEventListener("mouseover", () => div.classList.add("coloredDiv") );
        }
}


//Limit the number of squares the users can ask for per side
//Update clear button so it can clear after a new grid size has been chosen
//Style buttons more nicely
//Refactor code so that it is more functional
