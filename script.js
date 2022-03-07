const divContainer = document.querySelector('#container');
const clearGrid = document.querySelector('#clear-grid');

//Create the squares of the etch-a-sketch-canvas
for(let i = 0; i < 256; i++ ){
        const div = document.createElement('div');
        divContainer.appendChild(div);
        div.addEventListener("mouseover", () => div.classList.add("coloredDiv") );
}

const allTheDivs = document.querySelectorAll('#container > *');

clearGrid.addEventListener("click", () => allTheDivs.forEach((div) => div.classList.remove("coloredDiv")) );
