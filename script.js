const containerDiv = document.querySelector('#container');
const clearGrid = document.querySelector('#clearGrid');




for(let i = 0; i < 256; i++ ){
        const div = document.createElement('div');
        div.style.backgroundColor = "white";
        //div.textContent = "X";
        //div.classList.add('myDiv');  
        
        containerDiv.appendChild(div);
        div.addEventListener("mouseover", () => div.style.backgroundColor = "teal" );
}


const myDivs = document.querySelectorAll('#container > *');


clearGrid.addEventListener("click", mySexyFunction);

function mySexyFunction(){
    
    myDivs.forEach((div) => {
        
       // WANT TO CHANGE TO TOGGLING CLASS div.classList.add('blankDiv');
       div.style.backgroundColor = "white";
      });
}
