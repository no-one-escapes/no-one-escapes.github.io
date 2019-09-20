let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let cellWidth = 125;
let cellHeight = 90;
canvas.width  = 10 * cellWidth; 
canvas.height = 10 * cellHeight; 
let strokeText;

let field = [];
field[0] = {
    x : 0, 
    y : 810, 
    fill: "#7fb5b5",
    strokeText: "1"
}
field[1] = {
    x : 125, 
    y : 810, 
    fill: "#5f9ea0",
    strokeText : "2"
}
field[2] = {
    x : 250, 
    y : 810, 
    fill: "#7fb5b5",
    strokeText : "3"
}
field[3] = {
    x : 375, 
    y : 810, 
    fill: "#5f9ea0",
    strokeText : "4"
}
field[4] = {
    x : 500, 
    y : 810, 
    fill: "#7fb5b5",
    strokeText : "5"
}
field[5] = {
    x : 625, 
    y : 810, 
    fill: "#5f9ea0",
    strokeText : "6"
}
field[6] = {
    x :750, 
    y : 810, 
    fill: "#7fb5b5",
    strokeText : "7"
}
field[7] = {
    x : 875, 
    y : 810, 
    fill: "#5f9ea0",
    strokeText : "8"
}
field[8] = {
    x : 1000, 
    y : 810, 
    fill: "#7fb5b5",
    strokeText : "9"
}
field[9] = {
    x : 1125, 
    y : 810, 
    fill: "#5f9ea0",
    strokeText : "10"
}
field[10] = {
    x : 1125, 
    y : 720, 
    fill: "#7fb5b5",
    strokeText: "11"
}
field[11] = {
    x : 1000, 
    y : 720, 
    fill: "#5f9ea0",
    strokeText : "12"
}
field[12] = {
    x : 875, 
    y : 720, 
    fill: "#7fb5b5",
    strokeText : "13"
}
field[13] = {
    x : 750, 
    y : 720, 
    fill: "#5f9ea0",
    strokeText : "14"
}
field[14] = {
    x : 625, 
    y : 720, 
    fill: "#7fb5b5",
    strokeText : "15"
}
field[15] = {
    x : 500, 
    y : 720, 
    fill: "#5f9ea0",
    strokeText : "16"
}
field[16] = {
    x : 375, 
    y : 720, 
    fill: "#7fb5b5",
    strokeText : "17"
}
field[17] = {
    x : 250, 
    y : 720, 
    fill: "#5f9ea0",
    strokeText : "18"
}
field[18] = {
    x : 125, 
    y : 720, 
    fill: "#7fb5b5",
    strokeText : "19"
}
field[19] = {
    x : 0, 
    y : 720, 
    fill: "#5f9ea0",
    strokeText : "20"
}
field[20] = {
    x : 0, 
    y : 630, 
    fill: "#7fb5b5",
    strokeText: "21"
}
field[21] = {
    x : 125, 
    y : 630, 
    fill: "#5f9ea0",
    strokeText : "22"
}
field[22] = {
    x : 250, 
    y : 630, 
    fill: "#7fb5b5",
    strokeText : "23"
}
field[23] = {
    x : 375, 
    y : 630, 
    fill: "#5f9ea0",
    strokeText : "24"
}
field[24] = {
    x : 500, 
    y : 630, 
    fill: "#7fb5b5",
    strokeText : "25"
}
field[25] = {
    x : 625, 
    y : 630, 
    fill: "#5f9ea0",
    strokeText : "26"
}
field[26] = {
    x :750, 
    y : 630, 
    fill: "#7fb5b5",
    strokeText : "27"
}
field[27] = {
    x : 875, 
    y : 630, 
    fill: "#5f9ea0",
    strokeText : "28"
}
field[28] = {
    x : 1000, 
    y : 630, 
    fill: "#7fb5b5",
    strokeText : "29"
}
field[29] = {
    x : 1125, 
    y : 630, 
    fill: "#5f9ea0",
    strokeText : "30"
}
field[30] = {
    x : 1125, 
    y : 540, 
    fill: "#7fb5b5",
    strokeText: "31"
}
field[31] = {
    x : 1000, 
    y : 540, 
    fill: "#5f9ea0",
    strokeText : "32"
}
field[32] = {
    x : 875, 
    y : 540, 
    fill: "#7fb5b5",
    strokeText : "33"
}
field[33] = {
    x : 750, 
    y : 540, 
    fill: "#5f9ea0",
    strokeText : "34"
}
field[34] = {
    x : 625, 
    y : 540, 
    fill: "#7fb5b5",
    strokeText : "35"
}
field[35] = {
    x : 500, 
    y : 540, 
    fill: "#5f9ea0",
    strokeText : "36"
}
field[36] = {
    x : 375, 
    y : 540, 
    fill: "#7fb5b5",
    strokeText : "37"
}
field[37] = {
    x : 250, 
    y : 540, 
    fill: "#5f9ea0",
    strokeText : "38"
}
field[38] = {
    x : 125, 
    y : 540, 
    fill: "#7fb5b5",
    strokeText : "39"
}
field[39] = {
    x : 0, 
    y : 540, 
    fill: "#5f9ea0",
    strokeText : "40"
}
field[40] = {
    x : 0, 
    y : 450, 
    fill: "#7fb5b5",
    strokeText: "41"
}
field[41] = {
    x : 125, 
    y : 450, 
    fill: "#5f9ea0",
    strokeText : "42"
}
field[42] = {
    x : 250, 
    y : 450, 
    fill: "#7fb5b5",
    strokeText : "43"
}
field[43] = {
    x : 375, 
    y : 450, 
    fill: "#5f9ea0",
    strokeText : "44"
}
field[44] = {
    x : 500, 
    y : 450, 
    fill: "#7fb5b5",
    strokeText : "45"
}
field[45] = {
    x : 625, 
    y : 450, 
    fill: "#5f9ea0",
    strokeText : "46"
}
field[46] = {
    x :750, 
    y : 450, 
    fill: "#7fb5b5",
    strokeText : "47"
}
field[47] = {
    x : 875, 
    y : 450, 
    fill: "#5f9ea0",
    strokeText : "48"
}
field[48] = {
    x : 1000, 
    y : 450, 
    fill: "#7fb5b5",
    strokeText : "49"
}
field[49] = {
    x : 1125, 
    y : 450, 
    fill: "#5f9ea0",
    strokeText : "50"
}
field[50] = {
    x : 1125, 
    y : 360, 
    fill: "#7fb5b5",
    strokeText: "51"
}
field[51] = {
    x : 1000, 
    y : 360, 
    fill: "#5f9ea0",
    strokeText : "52"
}
field[52] = {
    x : 875, 
    y : 360, 
    fill: "#7fb5b5",
    strokeText : "53"
}
field[53] = {
    x : 750, 
    y : 360, 
    fill: "#5f9ea0",
    strokeText : "54"
}
field[54] = {
    x : 625, 
    y : 360, 
    fill: "#7fb5b5",
    strokeText : "55"
}
field[55] = {
    x : 500, 
    y : 360, 
    fill: "#5f9ea0",
    strokeText : "56"
}
field[56] = {
    x : 375, 
    y : 360, 
    fill: "#7fb5b5",
    strokeText : "57"
}
field[57] = {
    x : 250, 
    y : 360, 
    fill: "#5f9ea0",
    strokeText : "58"
}
field[58] = {
    x : 125, 
    y : 360, 
    fill: "#7fb5b5",
    strokeText : "59"
}
field[59] = {
    x : 0, 
    y : 360, 
    fill: "#5f9ea0",
    strokeText : "60"
}
field[60] = {
    x : 0, 
    y : 270, 
    fill: "#7fb5b5",
    strokeText: "61"
}
field[61] = {
    x : 125, 
    y : 270, 
    fill: "#5f9ea0",
    strokeText : "62"
}
field[62] = {
    x : 250, 
    y : 270, 
    fill: "#7fb5b5",
    strokeText : "63"
}
field[63] = {
    x : 375, 
    y : 270, 
    fill: "#5f9ea0",
    strokeText : "64"
}
field[64] = {
    x : 500, 
    y : 270, 
    fill: "#7fb5b5",
    strokeText : "65"
}
field[65] = {
    x : 625, 
    y : 270, 
    fill: "#5f9ea0",
    strokeText : "66"
}
field[66] = {
    x :750, 
    y : 270, 
    fill: "#7fb5b5",
    strokeText : "67"
}
field[67] = {
    x : 875, 
    y : 270, 
    fill: "#5f9ea0",
    strokeText : "68"
}
field[68] = {
    x : 1000, 
    y : 270, 
    fill: "#7fb5b5",
    strokeText : "69"
}
field[69] = {
    x : 1125, 
    y : 270, 
    fill: "#5f9ea0",
    strokeText : "70"
}
field[70] = {
    x : 1125, 
    y : 180, 
    fill: "#7fb5b5",
    strokeText: "71"
}
field[71] = {
    x : 1000, 
    y : 180, 
    fill: "#5f9ea0",
    strokeText : "72"
}
field[72] = {
    x : 875, 
    y : 180, 
    fill: "#7fb5b5",
    strokeText : "73"
}
field[73] = {
    x : 750, 
    y : 180, 
    fill: "#5f9ea0",
    strokeText : "74"
}
field[74] = {
    x : 625, 
    y : 180, 
    fill: "#7fb5b5",
    strokeText : "75"
}
field[75] = {
    x : 500, 
    y : 180, 
    fill: "#5f9ea0",
    strokeText : "76"
}
field[76] = {
    x : 375, 
    y : 180, 
    fill: "#7fb5b5",
    strokeText : "77"
}
field[77] = {
    x : 250, 
    y : 180, 
    fill: "#5f9ea0",
    strokeText : "78"
}
field[78] = {
    x : 125, 
    y : 180, 
    fill: "#7fb5b5",
    strokeText : "79"
}
field[79] = {
    x : 0, 
    y : 180, 
    fill: "#5f9ea0",
    strokeText : "80"
}
field[80] = {
    x : 0, 
    y : 90, 
    fill: "#7fb5b5",
    strokeText: "81"
}
field[81] = {
    x : 125, 
    y : 90, 
    fill: "#5f9ea0",
    strokeText : "82"
}
field[82] = {
    x : 250, 
    y : 90, 
    fill: "#7fb5b5",
    strokeText : "83"
}
field[83] = {
    x : 375, 
    y : 90, 
    fill: "#5f9ea0",
    strokeText : "84"
}
field[84] = {
    x : 500, 
    y : 90, 
    fill: "#7fb5b5",
    strokeText : "85"
}
field[85] = {
    x : 625, 
    y : 90, 
    fill: "#5f9ea0",
    strokeText : "86"
}
field[86] = {
    x :750, 
    y : 90, 
    fill: "#7fb5b5",
    strokeText : "87"
}
field[87] = {
    x : 875, 
    y : 90, 
    fill: "#5f9ea0",
    strokeText : "88"
}
field[88] = {
    x : 1000, 
    y : 90, 
    fill: "#7fb5b5",
    strokeText : "89"
}
field[89] = {
    x : 1125, 
    y : 90, 
    fill: "#5f9ea0",
    strokeText : "90"
}
field[90] = {
    x : 1125, 
    y : 0, 
    fill: "#7fb5b5",
    strokeText: "91"
}
field[91] = {
    x : 1000, 
    y : 0, 
    fill: "#5f9ea0",
    strokeText : "92"
}
field[92] = {
    x : 875, 
    y : 0, 
    fill: "#7fb5b5",
    strokeText : "93"
}
field[93] = {
    x : 750, 
    y : 0, 
    fill: "#5f9ea0",
    strokeText : "94"
}
field[94] = {
    x : 625, 
    y : 0, 
    fill: "#7fb5b5",
    strokeText : "95"
}
field[95] = {
    x : 500, 
    y : 0, 
    fill: "#5f9ea0",
    strokeText : "96"
}
field[96] = {
    x : 375, 
    y : 0, 
    fill: "#7fb5b5",
    strokeText : "97"
}
field[97] = {
    x : 250, 
    y : 0, 
    fill: "#5f9ea0",
    strokeText : "98"
}
field[98] = {
    x : 125, 
    y : 0, 
    fill: "#7fb5b5",
    strokeText : "99"
}
field[99] = {
    x : 0, 
    y : 0, 
    fill: "#5f9ea0",
    strokeText : "100"
}



function main(){

    let numArray = 0;
    let move = 0;
    let arcCoorX = field[numArray+move].x+60;
    let arcCoorY = field[numArray+move].y+45;
    
    function rect(r) { // settings for cells
        ctx.fillStyle = r.fill;
        ctx.fillRect(r.x, r.y, cellWidth, cellHeight)
        ctx.strokeStyle = "#fff";
        ctx.strokeText(r.strokeText, r.x+100, r.y+20);
    }

    function draw() { // draw field
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < field.length; i++) {
            rect(field[i]);
        }
    
        function player(){
            ctx.beginPath();
            ctx.arc(arcCoorX, arcCoorY, 15, 0, 2*Math.PI);
            ctx.stroke();
            console.log(arcCoorX);
            console.log(move);
            
        }

        document.querySelector('.player').onclick = player;
        document.querySelector('.forward').onclick = forwardMove;
        document.querySelector('.back').onclick = backMove;
        document.querySelector('.numOneValue').onclick = stepForward;
        let userNum;



        function stepForward(){ // move with input's value
            userNum = document.querySelector('.numOne').value;
            console.log(userNum);
            
            for(let i = 0; i < userNum; i++){
                (function (i) {
                    setTimeout(function () {
                    move += 1;
                    arcCoorX = field[numArray+move].x+60;
                    arcCoorY = field[numArray+move].y+45;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    draw();
                    player();
                },700 * i + 1);
            }) (i);
        }
        
        return move;

        }


    
        function forwardMove(){
            move += 1;
            arcCoorX = field[numArray+move].x+60;
            arcCoorY = field[numArray+move].y+45;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw();
            player();
            console.log(arcCoorX);
            console.log(move);
            return move;

        }
    
        function backMove(){
            move -= 1;
            arcCoorX = field[numArray+move].x+60;
            arcCoorY = field[numArray+move].y+45;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw();
            player();
            console.log(arcCoorX);
            console.log(move);
            return move;
            
        }

        // if(move == 57){ // condition for steps back
        //     move = 57 - 15;
        //     arcCoorX = field[numArray+move].x+60;
        //     arcCoorY = field[numArray+move].y+45;
            
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     draw();
        //     player();
            
        //     return move;

        // }
        
    }

    draw();
    console.log(move);
    

}

main();