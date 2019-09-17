let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let userColor = "black";
let userWidthBrush = 10;

document.getElementById('color').onchange = function(e){
    userColor = this.value;
}

document.getElementById('range').onchange = function(e){
    userWidthBrush = this.value;
}


let painting = false;

function startDrawing(){
    painting = true;
}
function finishedDrawing(){
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
canvas.addEventListener("mouseup", finishedDrawing);
canvas.addEventListener("mousemove", draw);