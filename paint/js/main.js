let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let userColor = "black";
let userWidthBrush = 26;
let painting = false;

document.getElementById('color').onchange = function(e){
    userColor = this.value;
}

document.getElementById('range').onchange = function(e){
    userWidthBrush = this.value;
}

function startDrawing(){
    painting = true;
}

function stopDrawing(){
    painting = false;
    ctx.beginPath();
}

function draw(e){
    if(!painting) return;
    ctx.lineWidth = userWidthBrush;
    ctx.lineCap = "round";

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = userColor;
}

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchstart", startDrawing, false);
canvas.addEventListener("touchend", stopDrawing, false);
canvas.addEventListener("touchcancel", stopDrawing, false);
canvas.addEventListener("touchmove", draw, false);
