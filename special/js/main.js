let select = 0;

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.width  = 32 * 6;
canvas.height = 16 * 6;

ctx.fillStyle = "black";
ctx.fillRect(15, 15, 6, 6)


document.getElementById('a').onclick = selectButton;

function selectButton(){
    select += 1;
    if(select == 1){
        document.getElementById('food').classList.add('select');
    } else if (select == 2) {
        document.getElementById('food').classList.remove('select');
        document.getElementById('light').classList.add('select');
    } else if (select == 3) {
        document.getElementById('light').classList.remove('select');
        document.getElementById('play').classList.add('select');
    } else if (select == 4) {
        document.getElementById('play').classList.remove('select');
        document.getElementById('treatment').classList.add('select');
    } else if (select == 5) {
        document.getElementById('treatment').classList.remove('select');
        document.getElementById('wash').classList.add('select');
    } else if (select == 6) {
        document.getElementById('wash').classList.remove('select');
        document.getElementById('statistics').classList.add('select');
    } else if (select == 7) {
        document.getElementById('statistics').classList.remove('select');
        document.getElementById('discipline').classList.add('select');
    } else if (select == 8) {
        document.getElementById('discipline').classList.remove('select');
        document.getElementById('warning').classList.add('select');
    } else {
        select = 0;
        document.getElementById('warning').classList.remove('select');
    }
}



