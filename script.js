const container = document.querySelector('#grid-container');
const grid = document.querySelectorAll('.grid-item');
const selectButton = document.querySelector('.button');
const gridItem = document.createElement('div');
const clearGrid = document.querySelector('.clear');



selectButton.onclick = () => {
    const askGrid = prompt("How big would you like the grid?");
    if (askGrid > 100) {
        alert('Invalid. Please enter a number lower than 100.')
        clearGrid.style.display = 'none';
    } else if(askGrid == undefined || isNaN(askGrid)) {
        alert('Invalid. Please enter a number.')
        clearGrid.style.display = 'none';
    } else {
        gridSize(askGrid);
        clearGrid.style.display = 'block';
        selectButton.style.display = 'none';
    }
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
