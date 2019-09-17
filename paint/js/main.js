let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

canvas.onmousedown = function(event){
    canvas.onmousemove = draw;
    
    function draw(event){
    let x = event.offsetX;
    let y = event.offsetY;
    

    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    // ctx.beginPath();
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.moveTo(x, y);
    // ctx.closePath();

    // requestAnimationFrame(draw);
    }
    canvas.onmouseup = function (event){
        canvas.onmousemove = null;
    }

}