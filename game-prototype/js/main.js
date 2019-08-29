let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let canvasTwo = document.getElementById('myCanvasTwo');
let ctxTwo = canvasTwo.getContext('2d');
let canvasThree = document.getElementById('myCanvasThree');
let ctxThree = canvasThree.getContext('2d');
let heroWidth = 30;
let heroHeight = 30;
let heroX = 480;
let heroY = 450;
let rightPressed = false;
let leftPressed = false;
let topPressed = false;
let botPressed = false;
let score = 0;
let wallX = [0, 30, 60, 120, 180, 210, 240, 300, 330, 360, 420];
let wallY = [0, 30, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 420];
let wallWidth = [30, 60, 90, 120, 150, 180];
let wallHeight = [30, 60, 90];
let enemyWidth = 20;
let enemyHeight = 25;
let firstEnemyX = 95;
let firstEnemyY = 30;
let fdx = 1.5;
let fdy = 1.5;
let secondEnemyX = 270;
let secondEnemyY = 62;
let thirdEnemyX = 395;
let thirdEnemyY = 390;
let fourthEnemyX = 90;
let fourthEnemyY = 332;
let lives = 3;


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

function firstEnemy(){
    ctx.beginPath();
    ctx.rect(firstEnemyX, firstEnemyY, enemyWidth, enemyHeight);
    ctx.fillStyle = "#8B008B";
    ctx.fill();
    ctx.closePath();
  
    if (firstEnemyY + fdy > 180 || firstEnemyY + fdy < 30) {
        fdy = -fdy;
    }

    firstEnemyY += fdy;

}

function secondEnemy(){
    ctx.beginPath();
    ctx.rect(secondEnemyX, secondEnemyY, enemyWidth, enemyHeight);
    ctx.fillStyle = "#8B008B";
    ctx.fill();
    ctx.closePath();
  
    if (secondEnemyX + fdx > 450 || secondEnemyX + fdx < 270) {
        fdx = -fdx;
    }

    secondEnemyX += fdx;
}

function thirdEnemy(){
    ctx.beginPath();
    ctx.rect(thirdEnemyX, thirdEnemyY, enemyWidth, enemyHeight);
    ctx.fillStyle = "#8B008B";
    ctx.fill();
    ctx.closePath();
  
    if (thirdEnemyY + fdy > 390 || thirdEnemyY + fdy < 180) {
        fdy = -fdy;
    }

    thirdEnemyY += fdy;

}

function fourthEnemy(){
    ctx.beginPath();
    ctx.rect(fourthEnemyX, fourthEnemyY, enemyWidth, enemyHeight);
    ctx.fillStyle = "#8B008B";
    ctx.fill();
    ctx.closePath();
  
    if (fourthEnemyX + fdx > 240 || fourthEnemyX + fdx < 90) {
        fdx = -fdx;
    }

    fourthEnemyX += fdx;
}

function drawObjects(){
    ctx.beginPath(); // 1
    ctx.rect(wallX[1], wallY[1], wallWidth[1], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 2
    ctx.rect(wallX[1], wallY[2], wallWidth[1], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 3
    ctx.rect(wallX[3], wallY[1], wallWidth[2], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 4-1
    ctx.rect(wallX[3], wallY[2], wallWidth[0], wallHeight[2]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 4-2
    ctx.rect(wallX[3], wallY[3], wallWidth[1], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 5
    ctx.rect(wallX[3], wallY[6], wallWidth[0], wallHeight[1]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 6-1
    ctx.rect(wallX[1], wallY[10], wallWidth[1], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 6-2
    ctx.rect(wallX[2], wallY[10], wallWidth[0], wallHeight[1]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 7
    ctx.rect(wallX[3], wallY[9], wallWidth[1], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 8-1
    ctx.rect(wallX[3], wallY[11], wallWidth[0], wallHeight[2]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 8-2
    ctx.rect(wallX[1], wallY[12], wallWidth[5], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath(); // 9-1
    ctx.rect(wallX[6], wallY[0], wallWidth[0], wallHeight[1]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 9-2
    ctx.rect(wallX[6], wallY[2], wallWidth[0], wallHeight[1]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 9-3
    ctx.rect(wallX[5], wallY[2], wallWidth[2], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // exit gate
    ctx.rect(wallX[4], wallY[5], wallWidth[4], wallHeight[1]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 9-1 2
    ctx.rect(wallX[6], wallY[8], wallWidth[0], wallHeight[1]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 9-2 2
    ctx.rect(wallX[5], wallY[8], wallWidth[2], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 9-1 3
    ctx.rect(wallX[6], wallY[11], wallWidth[0], wallHeight[2]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 9-2 3
    ctx.rect(wallX[4], wallY[11], wallWidth[4], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // block 1
    ctx.rect(wallX[0], wallY[4], wallWidth[2], wallHeight[1]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // block 2
    ctx.rect(wallX[0], wallY[7], wallWidth[2], wallHeight[1]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 1
    ctx.rect(wallX[10], wallY[1], wallWidth[1], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 2
    ctx.rect(wallX[10], wallY[2], wallWidth[1], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 3
    ctx.rect(wallX[7], wallY[1], wallWidth[2], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 4-1
    ctx.rect(wallX[9], wallY[2], wallWidth[0], wallHeight[2]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 4-2
    ctx.rect(wallX[8], wallY[3], wallWidth[1], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 5
    ctx.rect(wallX[9], wallY[6], wallWidth[0], wallHeight[1]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 6-1
    ctx.rect(wallX[10], wallY[10], wallWidth[1], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 6-2
    ctx.rect(wallX[10], wallY[10], wallWidth[0], wallHeight[1]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 7
    ctx.rect(wallX[8], wallY[9], wallWidth[1], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 8-1
    ctx.rect(wallX[9], wallY[11], wallWidth[0], wallHeight[2]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // 8-2
    ctx.rect(wallX[7], wallY[12], wallWidth[5], wallHeight[0]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // block 1
    ctx.rect(wallX[10], wallY[4], wallWidth[2], wallHeight[1]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // block 2
    ctx.rect(wallX[10], wallY[7], wallWidth[2], wallHeight[1]);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

}

let pieceRowCount = 16; // add pieces 
let pieceColumnCount = 17;
let pieceWidth = 5;
let pieceHeight = 5;
let piecePadding = 25;
let pieceOffsetTop = 15;
let pieceOffsetLeft = 13;


let pieces = []; // pieces  coordinates
for (let c = 0; c < pieceColumnCount; c++) {
    pieces[c] = [];
    for (let r = 0; r < pieceRowCount; r++) {
        pieces[c][r] = { x: 0, y: 0, status: 1 };
    }
}

function drawPieces() {
    for (let c = 0; c < pieceColumnCount; c++) {
        for(let r = 0; r<pieceRowCount; r++) {
            if(pieces[c][r].status == 1) {
                let pieceX = (c*(pieceWidth+piecePadding))+pieceOffsetLeft;
                let pieceY = (r*(pieceHeight+piecePadding))+pieceOffsetTop;
                pieces[c][r].heroX = pieceX;
                pieces[c][r].heroY = pieceY;
                ctx.beginPath();
                ctx.rect(pieceX, pieceY, pieceWidth, pieceHeight);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function collisionDetection() { // collision with pieces and eating them
    for (let c = 0; c < pieceColumnCount; c++) {
        for (let r = 0; r < pieceRowCount; r++) {
            let b = pieces[c][r];
            if (b.status == 1) {
                if (heroX+((heroWidth+heroHeight)/2) > b.heroX && heroX < b.heroX+pieceWidth && heroY+((heroWidth+heroHeight)/2) > b.heroY && heroY < b.heroY+pieceHeight) {
                    b.status = 0;
                    score++;
                    if (score == 169) {
                        document.querySelector('.border-for-canvas-three').style.display = "block";
                        document.querySelector('#myCanvasThree').style.display = "block";
                        setTimeout(function(){location.reload()}, 4000);
                    }
                }
            }
        }
    }
}

function drawWin(){
    ctxThree.font = "19px Courier New";
    ctxThree.fillStyle = "#0095DD";
    ctxThree.fillText("YOU WIN, CONGRATULATIONS!", 10, 41);
}

function drawLose(){
    ctxTwo.font = "40px Courier New";
    ctxTwo.fillStyle = "#0095DD";
    ctxTwo.fillText("GAME OVER", 40, 45);
}

function collisionWithEnemy(){
    if (heroX+((heroWidth+heroHeight)/2) > firstEnemyX && heroX < firstEnemyX+enemyWidth && heroY+((heroWidth+heroHeight)/2) > firstEnemyY && heroY < firstEnemyY + enemyHeight) {
        lives--;
        if(!lives) {
            document.querySelector('.border-for-canvas-two').style.display = "block";
            document.querySelector('#myCanvasTwo').style.display = "block";
            setTimeout(function(){location.reload()}, 4000);
          } else {
            heroX = 480;
            heroY = 450;
        }
    } else if (heroX+((heroWidth+heroHeight)/2) > secondEnemyX && heroX < secondEnemyX+enemyWidth && heroY+((heroWidth+heroHeight)/2) > secondEnemyY && heroY < secondEnemyY + enemyHeight) {
        lives--;
        if(!lives) {
            document.querySelector('.border-for-canvas-two').style.display = "block";
            document.querySelector('#myCanvasTwo').style.display = "block";
            setTimeout(function(){location.reload()}, 4000);
          } else {
            heroX = 480;
            heroY = 450;
        }
    } else if (heroX+((heroWidth+heroHeight)/2) > thirdEnemyX && heroX < thirdEnemyX+enemyWidth && heroY+((heroWidth+heroHeight)/2) > thirdEnemyY && heroY < thirdEnemyY + enemyHeight) {
        lives--;
        if(!lives) {
            document.querySelector('.border-for-canvas-two').style.display = "block";
            document.querySelector('#myCanvasTwo').style.display = "block";
            setTimeout(function(){location.reload()}, 4000);
          } else {
            heroX = 480;
            heroY = 450;
        }
    } else if (heroX+((heroWidth+heroHeight)/2) > fourthEnemyX && heroX < fourthEnemyX+enemyWidth && heroY+((heroWidth+heroHeight)/2) > fourthEnemyY && heroY < fourthEnemyY + enemyHeight) {
        lives--;
        if(!lives) {
            document.querySelector('.border-for-canvas-two').style.display = "block";
            document.querySelector('#myCanvasTwo').style.display = "block";
            setTimeout(function(){location.reload()}, 4000);
          } else {
            heroX = 480;
            heroY = 450;
        }
    }
}




function collisionWithWalls(){ //need better solution
    for (i = 1; i <= 59; i++){
        if (heroX == 0 && heroY == i || heroX == 90 && heroY == i || heroX == 210 && heroY == i || heroX == 270 && heroY == i || heroX == 390 && heroY == i || heroX == 480 && heroY == i) {
        rightPressed = false;
        leftPressed = false;
        } 
    } 
    for (i = 61; i <= 119; i++){
        if (heroX == 0 && heroY == i || heroX == 90 && heroY == i || heroX == 270 && heroY == i || heroX == 390 && heroY == i || heroX == 480 && heroY == i){
            rightPressed = false;
            leftPressed = false;
        } else if (heroX == 150 && heroY == i || heroX == 300 && heroY == i || heroX == 270 && heroY == 0){
            leftPressed = false;
        } else if (heroX == 180 && heroY == i || heroX == 330 && heroY == i || heroX == 210 && heroY == 0){
            rightPressed = false;
        }
    }
    for (i = 91; i <= 149; i++){
        if (heroX == 90 && heroY == i || heroX == 210 && heroY == i || heroX == 300 && heroY == i){
            rightPressed = false;
        } else if (heroX == 180 && heroY == i || heroX == 270 && heroY == i || heroX == 390 && heroY == i){
            leftPressed = false;
        }
    }
    for (i = 121; i <= 179; i++){
        if (heroX == 90 && heroY == i || heroX == 390 && heroY == i){
            rightPressed = false;
            leftPressed = false;
        } else if (heroX == 150 && heroY == i){
            leftPressed = false;
        } else if (heroX == 330 && heroY == i){
            rightPressed = false;
        }
    }
    for (i = 151; i <= 209; i++){
        if (heroX == 90 && heroY == i || heroX == 330 && heroY == i){
            leftPressed = false;
        } else if (heroX == 150 && heroY == i || heroX == 390 && heroY == i){
            rightPressed = false;
        }
    }
    for (i = 181; i <= 239; i++){
        if (heroX == 150 && heroY == i || heroX == 330 && heroY == i){
            rightPressed = false;
            leftPressed = false;
        } else if (heroX == 390 && heroY == i){
            leftPressed = false;
        } else if (heroX == 90 && heroY == i){
            rightPressed = false;
        }
    }
    for (i = 211; i <= 269; i++){
        if (heroX == 90 && heroY == i || heroX == 390 && heroY == i){
            rightPressed = false;
            leftPressed = false;
        } else if (heroX == 150 && heroY == i){
            leftPressed = false;
        } else if (heroX == 330 && heroY == i){
            rightPressed = false;
        }
    }
    for (i = 241; i <= 299; i++){
        if (heroX == 90 && heroY == i || heroX == 300 && heroY == i){
            leftPressed = false;
        } else if (heroX == 180 && heroY == i || heroX == 390 && heroY == i){
            rightPressed = false;
        }
    }
    for (i = 271; i <= 329; i++){
        if (heroX == 180 && heroY == i || heroX == 270 && heroY == i || heroX == 390 && heroY == i){
            leftPressed = false;
        } else if (heroX == 90 && heroY == i || heroX == 210 && heroY == i || heroX == 300 && heroY == i){
            rightPressed = false;
        }
    }
    for (i = 301; i <= 359; i++){
        if (heroX == 90 && heroY == i || heroX == 480 && heroY == i){
            leftPressed = false;
        } else if (heroX == 0 && heroY == i || heroX == 390 && heroY == i){
            rightPressed = false;
        }
    }
    for (i = 331; i <= 389; i++){
        if (heroX == 90 && heroY == i || heroX == 150 && heroY == i || heroX == 330 && heroY == i || heroX == 390 && heroY == i){
            rightPressed = false;
            leftPressed = false;
        } else if (heroX == 450 && heroY == i){
            leftPressed = false;
        } else if (heroX == 30 && heroY == i){
            rightPressed = false;
        }
    }
    for (i = 361; i <= 419; i++){
        if (heroX == 150 && heroY == i || heroX == 270 && heroY == i || heroX == 390 && heroY == i){
            leftPressed = false;
        } else if (heroX == 90 && heroY == i || heroX == 210 && heroY == i || heroX == 330 && heroY == i){
            rightPressed = false;
        }
    }
    for (i = 391; i <= 449; i++){
        if (heroX == 210 && heroY == i || heroX == 270 && heroY == i){
            rightPressed = false;
            leftPressed = false;
        } else if (heroX == 480 && heroY == i){
            leftPressed = false;
        } else if (heroX == 0 && heroY == i){
            rightPressed = false;
        }
    }
    for (i = 1; i <= 59; i++){
        if (heroX == i && heroY == 0 || heroX == i && heroY == 390 || heroX == 0 && heroY == 120 ){
            topPressed = false;
        } else if (heroX == 0 && heroY == 300 || heroX == i && heroY == 360 ){
            botPressed = false;
        } else if (heroX == i && heroY == 60 || heroX == i && heroY == 120 || heroX == i && heroY == 210 || heroX == 0 && heroY == 210 || heroX == i && heroY == 300 || heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 31; i <= 89; i++){
        if (heroX == i && heroY == 0){
            topPressed = false;
        } else if (heroX == i && heroY == 60 || heroX == i && heroY == 120 ||  heroX == i && heroY == 210 || heroX == i && heroY == 300 || heroX == i && heroY == 390 || heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 61; i <= 119; i++){
        if (heroX == i && heroY == 390){
            topPressed = false;
        } else if (heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 91; i <= 149; i++){
        if (heroX == i && heroY == 0 || heroX == i && heroY == 60 || heroX == i && heroY == 180 || heroX == i && heroY == 270 || heroX == i && heroY == 330 || heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 121; i <= 179; i++){
        if ( heroX == i && heroY == 270 || heroX == i && heroY == 390 || heroX == i && heroY == 90){
            topPressed = false;
        } else if (heroX == i && heroY == 150 || heroX == i && heroY == 330 || heroX == i && heroY == 60){
            botPressed = false;
        } else if (heroX == i && heroY == 0 || heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 151; i <= 209; i++){
        if ( heroX == i && heroY == 150 || heroX == i && heroY == 330){
            topPressed = false;
        } else if (heroX == i && heroY == 60 || heroX == i && heroY == 240){
            botPressed = false;
        } else if (heroX == i && heroY == 0 || heroX == i && heroY == 390 || heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 181; i <= 239; i++){
        if ( heroX == i && heroY == 60 || heroX == i && heroY == 150 || heroX == i && heroY == 330){
            topPressed = false;
        } else if (heroX == i && heroY == 120 || heroX == i && heroY == 300 || heroX == i && heroY == 390){
            botPressed = false;
        } else if (heroX == i && heroY == 240){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 211; i <= 269; i++){
        if (heroX == i && heroY == 60 || heroX == i && heroY == 150 || heroX == i && heroY == 240 || heroX == i && heroY == 330 || heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 241; i <= 299; i++){
        if ( heroX == i && heroY == 60 || heroX == i && heroY == 150 || heroX == i && heroY == 330){
            topPressed = false;
        } else if (heroX == i && heroY == 120 || heroX == i && heroY == 300 || heroX == i && heroY == 390){
            botPressed = false;
        } else if (heroX == i && heroY == 240){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 271; i <= 329; i++){
        if ( heroX == i && heroY == 150 || heroX == i && heroY == 330){
            topPressed = false;
        } else if (heroX == i && heroY == 60 || heroX == i && heroY == 240){
            botPressed = false;
        } else if (heroX == i && heroY == 0 || heroX == i && heroY == 390 || heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 301; i <= 359; i++){
        if ( heroX == i && heroY == 270 || heroX == i && heroY == 390 || heroX == i && heroY == 90){
            topPressed = false;
        } else if (heroX == i && heroY == 150 || heroX == i && heroY == 330 || heroX == i && heroY == 60){
            botPressed = false;
        } else if (heroX == i && heroY == 0 || heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 331; i <= 389; i++){
        if (heroX == i && heroY == 0 || heroX == i && heroY == 60 || heroX == i && heroY == 180 || heroX == i && heroY == 270 || heroX == i && heroY == 330 || heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 361; i <= 419; i++){
        if (heroX == i && heroY == 390){
            topPressed = false;
        } else if (heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 391; i <= 449; i++){
        if (heroX == i && heroY == 0){
            topPressed = false;
        } else if (heroX == i && heroY == 60 || heroX == i && heroY == 120 ||  heroX == i && heroY == 210 || heroX == i && heroY == 300 || heroX == i && heroY == 390 || heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }
    for (i = 421; i <= 479; i++){
        if (heroX == i && heroY == 0 || heroX == i && heroY == 390 || heroX == 480 && heroY == 120 ){
            topPressed = false;
        } else if (heroX == 480 && heroY == 300 || heroX == i && heroY == 360 ){
            botPressed = false;
        } else if (heroX == i && heroY == 60 || heroX == i && heroY == 120 || heroX == i && heroY == 210 || heroX == 480 && heroY == 210 || heroX == i && heroY == 300 || heroX == i && heroY == 450){
            botPressed = false;
            topPressed = false;
        }
    }

}
function drawLives(){
    ctx.font = "17px Courier New";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, 527, 60);
}

function drawScore() {
    ctx.font = "17px Courier New";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 527, 30); // add text
}

function drawLine(){
    ctx.beginPath();
    ctx.rect(510, 0, 5, 480);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPieces()
    drawRect();
    drawObjects();
    firstEnemy();
    secondEnemy();
    thirdEnemy();
    fourthEnemy();
    drawLine();
    drawLives();
    drawScore();
    collisionWithEnemy();
    collisionWithWalls(); 
    collisionDetection();
    if (rightPressed && heroX < 480) {
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

function drawTwo(){
    drawLose();
}

function drawThree(){
    drawWin();
}


draw();

drawTwo();

drawThree();


