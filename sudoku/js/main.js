const sudoku = new Sudoku(`
    0 7 0     6 4 8     0 3 2
    8 3 2     9 5 0     4 0 0
    6 0 1     0 0 0     9 5 8

    9 0 0     1 6 0     2 0 5
    1 5 0     0 2 4     0 9 7
    0 2 0     7 9 0     0 8 1

    4 0 0     5 1 9     7 0 0
    0 1 5     4 0 7     0 6 0
    7 9 3     0 0 6     0 1 4
`);

if (document.documentElement.clientWidth < 480) {
    document
    .querySelector('#app1')
    .append(sudoku.getHtml(250));
} else if (document.documentElement.clientWidth < 600) {
    document
    .querySelector('#app1')
    .append(sudoku.getHtml(350));
} else {
    document
    .querySelector('#app1')
    .append(sudoku.getHtml(500));
}





const sudokuNormal = new Sudoku(`
    0 8 0     7 0 3     4 6 0
    4 0 0     2 0 0     8 0 7
    0 7 6     0 8 4     0 0 0

    7 1 0     0 0 0     6 2 4
    8 0 0     0 0 0     0 1 0
    2 0 3     9 4 0     0 8 0

    9 0 0     8 1 5     2 0 0
    0 5 8     0 0 0     1 9 3
    0 2 0     3 6 0     0 0 8
`);

if (document.documentElement.clientWidth < 480) {
    document
    .querySelector('#app2')
    .append(sudokuNormal.getHtml(250));
} else if (document.documentElement.clientWidth < 600) {
    document
    .querySelector('#app2')
    .append(sudokuNormal.getHtml(350));
} else {
    document
    .querySelector('#app2')
    .append(sudokuNormal.getHtml(500));
}

const sudokuHard = new Sudoku(`
    0 0 6     2 0 8     0 0 7
    0 0 0     0 7 0     0 4 0
    0 0 0     0 3 0     0 0 0

    0 0 0     0 8 0     0 0 0
    0 0 0     0 0 0     1 6 9
    0 0 0     0 6 0     0 0 3

    0 1 9     3 0 0     0 7 0
    0 0 8     7 0 4     9 0 0
    0 0 5     8 0 0     2 3 0
`);

if (document.documentElement.clientWidth < 480) {
    document
    .querySelector('#app3')
    .append(sudokuHard.getHtml(250));
} else if (document.documentElement.clientWidth < 600) {
    document
    .querySelector('#app3')
    .append(sudokuHard.getHtml(350));
} else {
    document
    .querySelector('#app3')
    .append(sudokuHard.getHtml(500));
}


document.querySelector('.easy').onclick = showEasy;

function showEasy () {
    document.getElementById('app1').style.display = 'block';
    document.getElementById('app2').style.display = 'none';
    document.getElementById('app3').style.display = 'none';
    document.querySelector('.btns').style.display = 'none';
    document.querySelector('.new-game').style.display = 'inline';
}

document.querySelector('.normal').onclick = showNormal;

function showNormal () {
    document.getElementById('app1').style.display = 'none';
    document.getElementById('app2').style.display = 'block';
    document.getElementById('app3').style.display = 'none';
    document.querySelector('.btns').style.display = 'none';
    document.querySelector('.new-game').style.display = 'inline';
}


document.querySelector('.hard').onclick = showHard;

function showHard () {
    document.getElementById('app1').style.display = 'none';
    document.getElementById('app2').style.display = 'none';
    document.getElementById('app3').style.display = 'block';
    document.querySelector('.btns').style.display = 'none';
    document.querySelector('.new-game').style.display = 'inline';
}


document.querySelector('.new-game').onclick = newTerms;

function newTerms () {
    document.getElementById('app1').style.display = 'none';
    document.getElementById('app2').style.display = 'none';
    document.getElementById('app3').style.display = 'none';
    document.querySelector('.btns').style.display = 'block';
    document.querySelector('.new-game').style.display = 'none';
}
