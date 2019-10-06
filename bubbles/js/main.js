

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


let canvasTwo = document.getElementById('myCanvasTwo');
let ctxTwo = canvasTwo.getContext('2d');
let radiusTwo = 40;
let xTwo = 30;
let yTwo = 150;
let dxTwo = 5;
let dyTwo = 5;
let colorRGBTwo = "red";

function changeColor(){
    a = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    c = Math.round(Math.random()*255);
    colorRGBTwo = 'rgb(' + a + ',' + b + ',' + c + ')' ;
    return colorRGBTwo;
}

function colorfulArc() {
    ctxTwo.clearRect(0, 0, canvasTwo.width, canvasTwo.height);
    ctxTwo.beginPath();
    ctxTwo.arc(xTwo, yTwo, radiusTwo, 0, Math.PI * 2, false);
    ctxTwo.fillStyle = colorRGBTwo;
    ctxTwo.fill();
    ctxTwo.closePath();

    if (xTwo > canvasTwo.width || xTwo < 0){
        dxTwo = -dxTwo;
        radiusTwo -= 1;
        changeColor();
    }

    if (yTwo > canvasTwo.height || yTwo < 0) {
        dyTwo = -dyTwo;
        radiusTwo -= 1;
        changeColor();
    }

    xTwo += dxTwo;
    yTwo += dyTwo;

    requestAnimationFrame(colorfulArc);
}

colorfulArc();


// ----- third canvas -----


let canvasThree = document.getElementById('myCanvasThree');
let ctxThree = canvasThree.getContext('2d')

function drawObj(){
  a = Math.round(Math.random()*255);
  b = Math.round(Math.random()*255);
  c = Math.round(Math.random()*255);
  colorRGB = 'rgb(' + a + ',' + b + ',' + c + ')' ;
  xRan = Math.random() * canvasThree.width;
  yRan = Math.random() * canvasThree.height;
  ctxThree.beginPath();
  ctxThree.arc(xRan, yRan, 15, 0, Math.PI * 2, false);
  ctxThree.fillStyle = colorRGB;
  ctxThree.fill();
  ctxThree.stroke();
}

  for (let i = 0; i < 2000; i++){
    (function (i) {
      setTimeout(function () {
        drawObj();
        },50 * i + 1);
            }) (i);
  }


// ----- fourth canvas -----

let canvasFour = document.getElementById('myCanvasFourth');
let ctxFour = canvasFour.getContext('2d');

canvasFour.addEventListener('click', createArc);

function createArc(e) {

    x = e.offsetX;
    y = e.offsetY;
    radius = Math.round(Math.random()*60);
    a = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    c = Math.round(Math.random()*255);
    colorRGB = 'rgb(' + a + ',' + b + ',' + c + ')' ;


    // ctxFour.clearRect(0, 0, canvasFour.width, canvasFour.height);
    ctxFour.beginPath();
    ctxFour.arc(x, y, radius, 0, Math.PI * 2, false);
    ctxFour.fillStyle = colorRGB;
    ctxFour.fill();
    ctxFour.closePath();
}
