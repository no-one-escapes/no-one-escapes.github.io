let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
// let shipCanvas = document.getElementById('shipsCanvas');
// let ctxTwo = shipCanvas.getContext('2d');

let canW = canvas.width = 1280;
let canH = canvas.height = 480;
let shipX = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 
    570, 600, 630, 660, 690, 720, 750, 780, 810, 840, 870, 900, 930, 960, 990, 1020, 1050, 1080];
let shipY = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450];
let shipWidth = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600];
let shipHeight = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600];
let box = [];
let selected = false;
let startX;
let startY;
let offsetX = 60;
let offsetY = 60;


function main() {



function drawObjects(){

    box.push({ //1
        x: shipX[4],
        y: shipY[10],
        width: shipWidth[1],
        height: shipHeight[1],
        z : 0,
        fill: "#ff8c00",
        stroke : "black",
        isDragging: false,
    });

    box.push({ //1
        x: shipX[4],
        y: shipY[10],
        width: shipWidth[1],
        height: shipHeight[1],
        z : 0,
        fill: "#ff8c00",
        stroke : "black",
        isDragging: false,
    });

    box.push({ //1
        x: shipX[4],
        y: shipY[10],
        width: shipWidth[1],
        height: shipHeight[1],
        z : 0,
        fill: "#ff8c00",
        stroke : "black",
        isDragging: false,
    });

    box.push({ //1
        x: shipX[4],
        y: shipY[10],
        width: shipWidth[1],
        height: shipHeight[1],
        z : 0,
        fill: "#ff8c00",
        stroke : "black",
        isDragging: false,
    });

    box.push({ //4
        x: shipX[4],
        y: shipY[4],
        width: shipWidth[4],
        height: shipHeight[1],
        z : 1,
        fill: "#ff8c00",
        stroke : "black",
        isDragging: false,
    });
   
    

    box.push({ //3
        x: shipX[4],
        y: shipY[6],
        width: shipWidth[3],
        height: shipHeight[1],
        z : 2,
        fill: "#ff8c00",
        stroke : "black",
        isDragging: false,
    });

    box.push({ //3
        x: shipX[4],
        y: shipY[6],
        width: shipWidth[3],
        height: shipHeight[1],
        z : 2,
        fill: "#ff8c00",
        stroke : "black",
        isDragging: false,
    });

   

    box.push({ //2
        x: shipX[4],
        y: shipY[8],
        width: shipWidth[2],
        height: shipHeight[1],
        z : 3,
        fill: "#ff8c00",
        stroke : "black",
        isDragging: false,
    });
    box.push({ //2
        x: shipX[4],
        y: shipY[8],
        width: shipWidth[2],
        height: shipHeight[1],
        z : 3,
        fill: "#ff8c00",
        stroke : "black",
        isDragging: false,
    });
    box.push({ //2
        x: shipX[4],
        y: shipY[8],
        width: shipWidth[2],
        height: shipHeight[1],
        z : 3,
        fill: "#ff8c00",
        stroke : "black",
        isDragging: false,
    });

    

    

    draw();

    canvas.onmousedown = myDown;
    canvas.onmouseup = myUp;
    canvas.onmousemove = myMove;
    
    
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

    ctx.beginPath(); // first field
    ctx.rect(shipX[12], shipY[3], shipWidth[10], shipHeight[10]);
    ctx.fillStyle = "transparent";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath(); // second field
    ctx.rect(shipX[27], shipY[3], shipWidth[10], shipHeight[10]);
    ctx.fillStyle = "transparent";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.closePath();
    ctx.stroke();

}


function drawBackground(){
    ctx.beginPath(); // first field
    ctx.rect(shipX[12], shipY[3], shipWidth[10], shipHeight[10]);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // second field
    ctx.rect(shipX[27], shipY[3], shipWidth[10], shipHeight[10]);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

    
function myMove(e) {
        if (selected) {
            let mx = parseInt(e.clientX - offsetX);
            let my = parseInt(e.clientY - offsetY);

            let dx = mx - startX;
            let dy = my - startY;

            for (let i = 0; i < box.length; i++) {
                if (box[i].isDragging == true) {
                    box[i].x += dx;
                    box[i].y += dy;
                }
            }
            draw();
            startX = mx;
            startY = my;
        }
    }

    function myUp(e) {
        selected = false;
        for (let i = 0; i < box.length; i++) {
            box[i].isDragging = false;
        }
    }

    function myDown(e) {

        let mx = parseInt(e.clientX - offsetX);
        let my = parseInt(e.clientY - offsetY);

        selected = true;
        let group = [];
        for (let i = 0; i < box.length; i++) {

            if (mx > box[i].x && mx < box[i].x + box[i].width && my > box[i].y && my < box[i].y + box[i].height) {
                group.push(box[i]);
            }
        }
        
        if (group.length === 1)
        {
            group[0].isDragging = true;
        }
        else if (group.length >= 2)
        {
            let maxZ = group[0].z;
            let b = group[0];
            
            for (let i = 1; i < group.length; i++)
            {
                if (maxZ < group[i].z)
                {
                    maxZ = group[i].z;
                    b = group[i];
                }
            }
            b.isDragging = true;
        }

        startX = mx;
        startY = my;
    }

    function rect(r) {
        ctx.fillStyle = r.fill;
        ctx.fillRect(r.x, r.y, r.width, r.height);
        ctx.strokeStyle = r.stroke;
        // ctx.stroke();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < box.length; i++) {
            rect(box[i]);
        }
        


    drawBackground();
    drawContur();

    requestAnimationFrame(draw);

}
drawObjects();


requestAnimationFrame(draw);
}



main();
