
// ----- first canvas -----

let canvasOne = document.getElementById('myCanvasOne');
let ctxOne = canvasOne.getContext('2d')
let radius = 40;
let x = 30;
let y = 150;
let dx = 3;

function moveArc() {

    ctxOne.clearRect(0, 0, canvasOne.width, canvasOne.height);
    ctxOne.beginPath();
    ctxOne.arc(x, y, radius, 0, Math.PI * 2, false);
    ctxOne.fillStyle = "blue";
    ctxOne.fill();
    ctxOne.closePath();

    if (x > canvasOne.width || x < 0){
        dx = -dx;
    }

    x += dx;

    requestAnimationFrame(moveArc);
}

moveArc();

// ----- second canvas -----

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d')

function drawObj(){
  a = Math.round(Math.random()*255);
  b = Math.round(Math.random()*255);
  c = Math.round(Math.random()*255);
  colorRGB = 'rgb(' + a + ',' + b + ',' + c + ')' ;
  xRan = Math.random() * canvas.width;
  yRan = Math.random() * canvas.height;
  ctx.beginPath();
  ctx.arc(xRan, yRan, 15, 0, Math.PI * 2, false);
  ctx.fillStyle = colorRGB;
  ctx.fill();
  ctx.stroke();
}

  for (let i = 0; i < 2000; i++){
    (function (i) {
      setTimeout(function () {
        drawObj();
        },100 * i + 1);
            }) (i);
  }
