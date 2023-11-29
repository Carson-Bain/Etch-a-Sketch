const container = document.querySelector('#grid-container');
const grid = document.querySelectorAll('.grid-item');
const selectButton = document.querySelector('.button');
const gridItem = document.createElement('div');
const clearGrid = document.querySelector('.clear');


selectButton.onclick = () => {
    const askGrid = prompt("How big would you like the grid?");
    gridSize(askGrid);
}

function gridSize(num){
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
    
    for (let j = 0; j < num; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        row.appendChild(gridItem);
        gridItem.onmouseenter = () => {
            gridItem.style.backgroundColor = 'black'
        }
        }
        container.appendChild(row);
    }
}



// gridSize(askGrid);
