function getMatrix (columns, rows) {
    const matrix = [];

    let idCounter = 1;

    for (let y = 0; y < rows; y++) {
        const row = [];

        for (let x = 0; x < columns; x++) {
            row.push({
                id: idCounter++,
                left: false,
                right: false,
                show: false,
                flag: false,
                mine: false,
                poten: false,
                found: false,
                notfound: false,
                boom: false,
                number: 0,
                x,
                y,

            });
        }

        matrix.push(row);
    }

    return matrix;
}


function getRandomFreeCell (matrix) {
    const freeCells = [];

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            const cell = matrix[y][x]

            if (!cell.mine) {
                freeCells.push(cell)
            }

        }
    }

    const index = Math.floor(Math.random() * freeCells.length);
    return freeCells[index];
}


function setRandomMine (matrix) {
    const cell = getRandomFreeCell(matrix);
    const cells = getAroundCells(matrix, cell.x, cell.y);
    cell.mine = true;

    

    for (const cell of cells) {
        cell.number += 1;
    }

}


function getCell (matrix, x, y) {
    if (!matrix[y] || !matrix[x]) {
        return false;
    }

    return matrix[y][x];
}


function getAroundCells (matrix, x, y) {
    const cells = [];

    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0 ){
                continue;
            }

            const cell = getCell(matrix, x + dx, y + dy);

            if (cell) {
                cells.push(cell);
            }
        }
    }

    return cells;
}


function matrixToHtml (matrix) {
    const gameElement = document.createElement('div');
    gameElement.classList.add('sapper');

    for (let y = 0; y < matrix.length; y++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');

        for (let x = 0; x < matrix[y].length; x++) {
            const cell = matrix[y][x];
            const imgElement = document.createElement('img');
            imgElement.draggable = false;
            imgElement.oncontextmenu = () => false;
            imgElement.setAttribute('data-cell-id', cell.id);

            rowElement.append(imgElement);

            if (cell.flag) {
                imgElement.src = 'assets/flag.png';
                continue;
            }

            if (cell.poten) {
                imgElement.src = 'assets/potencial.png';
                continue;
            }

            if (!cell.show) {
                imgElement.src = 'assets/field.png';
                continue;
            }

            if (cell.boom) {
                imgElement.src = 'assets/mine.png';
                continue;
            }

            if (cell.mine && cell.found){
                imgElement.src = 'assets/minefound.png';
                continue;
            }

            if (cell.mine && cell.notfound){
                imgElement.src = 'assets/not-found.png';
                continue;
            }

            if (cell.number) {
                imgElement.src = 'assets/number'+cell.number+'.png';
                continue;
            }

            imgElement.src = 'assets/none.png';
            
        }

        gameElement.append(rowElement);
    }


    return gameElement;
}


function getCellById (matrix, id) {
    for (let y = 0; y < matrix.length; y++){
        for (let x = 0; x < matrix[y].length; x++){
            const cell = matrix [y][x];

            if (cell.id === id){
                return cell;
            }
        }
    }

    return false;

}


function forEach (matrix, handler) {
    for (let y = 0; y < matrix.length; y++){
        for (let x = 0; x < matrix[y].length; x++){
            handler(matrix[y][x]);
        }
    }
}

function showSpread(matrix, x, y) {
    const cell = getCell(matrix, x, y)

    if (cell.flag || cell.number || cell.mine) {
        return
    }

    forEach(matrix, x => x._marked = false);

    cell._marked = true;

    let flag = true;

    while (flag) {
        flag = false

        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                const cell = matrix[y][x];

                if (!cell._marked || cell.number){
                    continue;
                }

                const cells = getAroundCells(matrix, x, y);

                for (const cell of cells) {
                    if (cell._marked){
                        continue
                    } 

                    if (!cell.flag && !cell.mine) {
                        cell._marked = true;
                        flag = true;
                    }
                }
            }
        }
    }


    forEach(matrix, x => {
        if (x._marked) {
            x.show = true
        }
        delete x._marked})

}


function isWin (matrix) {
    const flags = [];
    const mines = [];

    forEach(matrix, cell => {
        if (cell.flag) {
            flags.push(cell);
        }

        if (cell.mine) {
            mines.push(cell);
        }
    })

    if (flags.length !== mines.length) {
        return false;
    }

    for (const cell of mines) {
        if (!cell.flag){
            return false;
        }
    }

    for (let y = 0; y < matrix.length; y++){
        for (let x = 0; x < matrix[y].length; x++){
            const cell = matrix[y][x];

            if (!cell.mine && !cell.show){
                return false;
            }
        }
    }

    return true;
}

function isLosing (matrix){
    for (let y = 0; y < matrix.length; y++){
        for (let x = 0; x < matrix[y].length; x++){
            const cell = matrix[y][x];

            if (cell.mine && cell.show){
                return true;
            }
        }
    }

    return false;
}