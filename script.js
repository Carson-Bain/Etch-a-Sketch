const container = document.querySelector('#grid-container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

for (let j = 0; j < 16; j++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    row.appendChild(gridItem);
    }
    container.appendChild(row);
}