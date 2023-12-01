const container = document.querySelector('#grid-container');
const grid = document.querySelectorAll('.grid-item');
const selectButton = document.querySelector('.button');
const gridItems = document.createElement('div');
const clearButton = document.querySelector('.clear');



selectButton.onclick = () => {
    const askGrid = prompt("How big would you like the grid?");
    if (askGrid > 100) {
        alert('Invalid. Please enter a number lower than 100.')
        clearButton.style.display = 'none';
    } else if(askGrid == undefined || isNaN(askGrid)) {
        alert('Invalid. Please enter a number.')
        clearButton.style.display = 'none';
    } else {
        gridSize(askGrid);
        clearButton.style.display = 'block';
        selectButton.style.display = 'none';
    }
}

function gridSize(num){
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
    
    for (let j = 0; j < num; j++) {
        const gridItems = document.createElement('div');
        gridItems.classList.add('grid-item');
        row.appendChild(gridItems);
        gridItems.onmouseover = () => {
            gridItems.style.backgroundColor = 'black'
        }
    }
        container.appendChild(row);
    }
}

function clearGrid(){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.style.backgroundColor = '#ccc';
      });
}

clearButton.addEventListener('click', clearGrid);
