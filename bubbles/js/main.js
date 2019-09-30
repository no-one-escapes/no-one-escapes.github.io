
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d')


function drawObj(){
  a = Math.round(Math.random()*255);
  b = Math.round(Math.random()*255);
  c = Math.round(Math.random()*255);
  colorRGB = 'rgb(' + a + ',' + b + ',' + c + ')' ;
  x = Math.random() * canvas.width;
  y = Math.random() * canvas.height;
  ctx.beginPath();
  ctx.arc(x,y,15,0,Math.PI * 2,false);
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
