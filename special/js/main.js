let select = 0;
let choose = 0;

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.width  = 32 * 6;
canvas.height = 16 * 6;

// ctx.fillStyle = "black";
// ctx.fillRect(15, 15, 6, 6)


pic = new Image();              // "Создаём" изображение
pic.src = "image/spritestwo.png";  // Источник изображения, позаимствовано на хабре
pic.onload = eggAnimation;
    function eggAnimation() {    // Событие onLoad, ждём момента пока загрузится изображение
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(pic, 10, 20, 30, 30, 80, 40, 30, 30);  // Рисуем изображение от точки с координатами 0, 0

}

function eggAnimationTwo(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(pic, 35, 17, 30, 30, 80, 40, 30, 30);
    }

for (let i = 0; i < 2000; i++){
    (function (i) {
      setTimeout(function () {
        eggAnimation();
        },50 * i + 1);
            }) (i);
  }







// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
// Первый параметр указывает на изображение
// sx, sy, sWidth, sHeight указывают параметры фрагмента на изображение-источнике
// dx, dy, dWidth, dHeight ответственны за координаты отрисовки фрагмента на холсте

document.getElementById('a').onclick = selectButton;
document.getElementById('b').onclick = chooseButton;
document.getElementById('c').onclick = cancelButton;

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

function chooseButton(){

    choose += 1;

    if(select == 1){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(30, 30, 6, 6)
    } else if (select == 2) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "yellow";
        ctx.fillRect(35, 35, 6, 6)
    } else if (select == 3) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(40, 40, 6, 6)
    } else if (select == 4) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillRect(45, 30, 6, 6)
    } else if (select == 5) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "bisque";
        ctx.fillRect(50, 30, 6, 6)
    } else if (select == 6) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "blue";
        ctx.fillRect(55, 30, 6, 6)
    } else if (select == 7) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "gray";
        ctx.fillRect(60, 30, 6, 6)
    } else if (select == 8) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(65, 30, 6, 6)
    }
}

function cancelButton(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(select == 1){
        document.getElementById('food').classList.remove('select');
    } else if (select == 2) {
        document.getElementById('light').classList.remove('select');
    } else if (select == 3) {
        document.getElementById('play').classList.remove('select');
    } else if (select == 4) {
        document.getElementById('treatment').classList.remove('select');
    } else if (select == 5) {
        document.getElementById('wash').classList.remove('select');
    } else if (select == 6) {
        document.getElementById('statistics').classList.remove('select');
    } else if (select == 7) {
        document.getElementById('discipline').classList.remove('select');
    } else if (select == 8) {
        document.getElementById('warning').classList.remove('select');
    } 

    select = 0;
    eggAnimation();
}