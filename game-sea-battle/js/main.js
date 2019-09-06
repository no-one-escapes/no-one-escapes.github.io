let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let canW = canvas.width = 1280;
let canH = canvas.height = 480;
let heroWidth = 30;
let heroHeight = 30;
let heroX = 480;
let heroY = 450;
let rightPressed = false;
let leftPressed = false;
let topPressed = false;
let botPressed = false;
let wallX = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 
    570, 600, 630, 660, 690, 720, 750, 780, 810, 840, 870, 900, 930, 960, 990, 1020, 1050, 1080];
let wallY = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450];
let wallWidth = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600];
let wallHeight = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600];

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 68) {
        rightPressed = true;
    } else if (e.keyCode == 65) {
        leftPressed = true;
    } else if (e.keyCode == 83) {
        topPressed = true;
    } else if (e.keyCode == 87) {
        botPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 68) {
        rightPressed = false;
    } else if (e.keyCode == 65) {
        leftPressed = false;
    } else if (e.keyCode == 83) {
        topPressed = false;
    } else if (e.keyCode == 87) {
        botPressed = false;
    }
}

function drawRect() {
    ctx.beginPath();
    ctx.rect(heroX, heroY, heroWidth, heroHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}



function drawOne(){
    ctx.beginPath(); // 1
    ctx.rect(wallX[4], wallY[10], wallWidth[1], wallHeight[1]);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.closePath();
    ctx.stroke();
}

function drawObjects(){
   
    ctx.beginPath(); // 4
    ctx.rect(wallX[4], wallY[4], wallWidth[4], wallHeight[1]);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath(); // 3
    ctx.rect(wallX[4], wallY[6], wallWidth[3], wallHeight[1]);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath(); // 2
    ctx.rect(wallX[4], wallY[8], wallWidth[2], wallHeight[1]);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath(); // first field
    ctx.rect(wallX[12], wallY[3], wallWidth[10], wallHeight[10]);
    ctx.fillStyle = "transparent";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath(); // second field
    ctx.rect(wallX[27], wallY[3], wallWidth[10], wallHeight[10]);
    ctx.fillStyle = "transparent";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.closePath();
    ctx.stroke();
}

function drawContur(){
    for (let x = 810; x < 1140; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 91);
        ctx.lineTo(x, 389);
        ctx.strokeStyle = "#eee";
        ctx.closePath();
        ctx.stroke(); 
    }

    for (let x = 360; x < 660; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 91);
        ctx.lineTo(x, 389);
        ctx.strokeStyle = "#eee";
        ctx.closePath();
        ctx.stroke(); 
    }
    
    for (let y = 90; y < 420; y += 30) {
        ctx.beginPath();
        ctx.moveTo(811, y);
        ctx.lineTo(1109, y);
        ctx.strokeStyle = "#eee";
        ctx.closePath();
        ctx.stroke();
    }

    for (let y = 90; y < 420; y += 30) {
        ctx.beginPath();
        ctx.moveTo(361, y);
        ctx.lineTo(659, y);
        ctx.strokeStyle = "#eee";
        ctx.closePath();
        ctx.stroke(); 
    }


}


function drawBackground(){
    ctx.beginPath(); // first field
    ctx.rect(wallX[12], wallY[3], wallWidth[10], wallHeight[10]);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // second field
    ctx.rect(wallX[27], wallY[3], wallWidth[10], wallHeight[10]);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}


function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    drawRect();
    drawBackground()
    drawContur();
    drawObjects();
    drawOne()

    
    
    
    if (rightPressed && heroX < 1250) {
        heroX += 2;
    } else if (leftPressed && heroX > 0) {
        heroX -= 2;
    } else if (topPressed && heroY < 450) {
        heroY += 2;
    } else if (botPressed && heroY > 0) {
        heroY -= 2;
    }

    

    requestAnimationFrame(draw);
}

draw();