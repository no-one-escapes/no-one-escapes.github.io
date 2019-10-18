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
    strokeText: "START"
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
    strokeText : "FINISH"
}



function main(){

    let numArray = 0; //index array
    let move = 0; // steps for player 1

    let arcCoorX = field[numArray+move].x+60;
    let arcCoorY = field[numArray+move].y+45;
    
    
    function rect(r) { // settings for cells
        ctx.beginPath();
        ctx.fillStyle = r.fill;
        ctx.fillRect(r.x, r.y, cellWidth, cellHeight)
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1;
        ctx.textAlign = 'start';
        ctx.textBaseline = 'top';
        // ctx.strokeText(r.strokeText, r.x+100, r.y+20);
        ctx.strokeText(r.strokeText, r.x+12, r.y+10);
        ctx.closePath();
    }

    

    function draw() { // draw field
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < field.length; i++) {
            rect(field[i]);
        }
    
        function onePlayer(){
            ctx.beginPath();
            ctx.arc(arcCoorX, arcCoorY, 15, 0, 2*Math.PI);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = "black"
            // ctx.strokeText("1", 5, 5);
            ctx.stroke();
            // // ctx.strokeStyle = 'black';
            // // ctx.font = 'bold 130pt Calibri';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black';
            ctx.fillText('1', arcCoorX, arcCoorY);
            // ctx.stroke();
            // ctx.closePath();
            console.log(arcCoorX);
            console.log(move);
            
        }

        document.querySelector('.one_player').onclick = onePlayer;
        // document.querySelector('.two_players').onclick = twoPlayers;
        // document.querySelector('.three_players').onclick = threePlayers;
        // document.querySelector('.four_players').onclick = fourPlayers;
        
        document.querySelector('.dices').onclick = dices;


        let dicesSum;
        let count = 0;

        function dices(){

            let diceOne, diceTwo;

            diceOne = Math.ceil(Math.random()*6);
            diceTwo = Math.ceil(Math.random()*6);

            document.getElementById('diceOne').innerHTML = diceOne;
            document.getElementById('diceTwo').innerHTML = diceTwo;

            dicesSum = diceOne+diceTwo;
            count += 1;
            if (count == 5){
                count = 0;
            }
            
            stepForward();

            return count;

        }


        function stepForward(){

            if(count == 1){

            let attempt;
            attempt = 0;

            for (let i = 0; i < dicesSum; i++){
                (function (i) {
                    setTimeout(function () {
                    move += 1;
                    attempt +=1;
                    arcCoorX = field[numArray+move].x+60;
                    arcCoorY = field[numArray+move].y+45;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    draw();
                    onePlayer();

                    if (move == 2 && attempt == dicesSum){ // condition for steps forward
                        move = 2 + 18;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                            
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                            
                        return move;
                    }

                    if (move == 7 && attempt == dicesSum){ // condition for steps forward
                        move = 7 + 22;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                            
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                            
                        return move;
                    }

                    if (move == 16 && attempt == dicesSum){ // condition for steps back
                        move = 16 - 4;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                        
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                        
                        return move;
                    }

                    if (move == 27 && attempt == dicesSum){ // condition for steps forward
                        move = 27 + 56;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                            
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                            
                        return move;
                    }
                    
                    if (move == 56 && attempt == dicesSum){ // condition for steps back
                        move = 56 - 19;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                            
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                            
                        return move;
                    }

                    if (move == 57 && attempt == dicesSum){ // condition for steps forward
                        move = 57 + 19;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                            
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                            
                        return move;
                    }

                    if (move == 61 && attempt == dicesSum){ // condition for steps back
                        move = 61 - 40;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                            
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                            
                        return move;
                    }

                    if (move == 68 && attempt == dicesSum){ // condition for steps back
                        move = 68 - 40;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                            
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                            
                        return move;
                    }

                    if (move == 74 && attempt == dicesSum){ // condition for steps forward
                        move = 74 + 11;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                                
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                                
                        return move;
                    }

                    if (move == 79 && attempt == dicesSum){ // condition for steps forward
                        move = 79 + 20;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                            
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                            
                        return move;
                    }

                    if (move == 87 && attempt == dicesSum){ // condition for steps back
                        move = 87 - 64;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                            
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                            
                        return move;
                    }

                    if (move == 89 && attempt == dicesSum){ // condition for steps forward
                        move = 89 + 1;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                            
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                            
                        return move;
                    }

                    if (move == 92 && attempt == dicesSum){ // condition for steps back
                        move = 92 - 22;
                        arcCoorX = field[numArray+move].x+60;
                        arcCoorY = field[numArray+move].y+45;
                        
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        draw();
                        onePlayer();
                        
                        return move;
                    }
                
                    if (move == 97 && attempt == dicesSum){ // condition for steps back
                            move = 97 - 19;
                            arcCoorX = field[numArray+move].x+60;
                            arcCoorY = field[numArray+move].y+45;
                            
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            draw();
                            onePlayer();
                            
                            return move;
                        }

                    if (move == 99 || move == 99 && attempt == dicesSum){ // condition for steps back
                            gratz();
                        }
                },700 * i + 1);
            }) (i);
        } 
    }

    if(count == 2){
        console.log('work');
    }

        return move;

        }


        function gratz(){
            ctx.beginPath();
            ctx.arc(300, 300, 50, 0, 2*Math.PI);
            ctx.fillStyle = "red";
            ctx.fill();

        }

    
       

        function snakes(){
            
            // ----- snake 62-22 -----

            let colorSnake = '#A62A87'

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'black';
            ctx.moveTo(190, 315); // first point
            ctx.lineTo(190, 275); // second point
            ctx.lineTo(150, 315); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'white';
            ctx.moveTo(190, 315); // first point
            ctx.lineTo(230, 315); // second point
            ctx.lineTo(190, 275); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'black';
            ctx.moveTo(190, 315); // first point
            ctx.lineTo(190, 355); // second point
            ctx.lineTo(230, 315); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'white';
            ctx.moveTo(190, 355); // first point
            ctx.lineTo(190, 315); // second point
            ctx.lineTo(150, 355); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'black';
            ctx.moveTo(190, 355); // first point
            ctx.lineTo(190, 395); // second point
            ctx.lineTo(150, 355); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'white';
            ctx.moveTo(190, 395); // first point
            ctx.lineTo(230, 395); // second point
            ctx.lineTo(190, 355); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'black';
            ctx.moveTo(190, 395); // first point
            ctx.lineTo(190, 435); // second point
            ctx.lineTo(230, 395); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'white';
            ctx.moveTo(190, 435); // first point
            ctx.lineTo(150, 435); // second point
            ctx.lineTo(190, 395); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'black';
            ctx.moveTo(190, 435); // first point
            ctx.lineTo(190, 475); // second point
            ctx.lineTo(150, 435); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'white';
            ctx.moveTo(190, 475); // first point
            ctx.lineTo(230, 475); // second point
            ctx.lineTo(190, 435); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'black';
            ctx.moveTo(190, 475); // first point
            ctx.lineTo(190, 515); // second point
            ctx.lineTo(230, 475); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'white';
            ctx.moveTo(190, 515); // first point
            ctx.lineTo(150, 515); // second point
            ctx.lineTo(190, 475); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'black';
            ctx.moveTo(190, 515); // first point
            ctx.lineTo(190, 555); // second point
            ctx.lineTo(150, 515); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'white';
            ctx.moveTo(190, 555); // first point
            ctx.lineTo(230, 555); // second point
            ctx.lineTo(190, 515); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'black';
            ctx.moveTo(190, 555); // first point
            ctx.lineTo(190, 595); // second point
            ctx.lineTo(230, 555); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'white';
            ctx.moveTo(190, 595); // first point
            ctx.lineTo(150, 595); // second point
            ctx.lineTo(190, 555); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'black';
            ctx.moveTo(190, 595); // first point
            ctx.lineTo(190, 635); // second point
            ctx.lineTo(150, 595); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'white';
            ctx.moveTo(190, 635); // first point
            ctx.lineTo(230, 635); // second point
            ctx.lineTo(190, 595); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'black';
            ctx.moveTo(190, 635); // first point
            ctx.lineTo(190, 675); // second point
            ctx.lineTo(230, 635); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'white';
            ctx.moveTo(190, 675); // first point
            ctx.lineTo(150, 675); // second point
            ctx.lineTo(190, 635); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'black';
            ctx.moveTo(190, 675); // first point
            ctx.lineTo(190, 715); // second point
            ctx.lineTo(150, 675); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = colorSnake;
            // ctx.fillStyle = 'white';
            ctx.moveTo(190, 675); // first point
            ctx.lineTo(230, 675); // second point
            ctx.lineTo(190, 715); // third point
            ctx.fill();


            // ----- snake 98-79 -----


            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(320, 35); // first point
            ctx.lineTo(300, 55); // second point
            ctx.lineTo(340, 55); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(300, 55); // first point
            ctx.lineTo(280, 35); // second point
            ctx.lineTo(320, 35); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(300, 55); // first point
            ctx.lineTo(280, 35); // second point
            ctx.lineTo(280, 75); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(280, 75); // first point
            ctx.lineTo(300, 55); // second point
            ctx.lineTo(300, 95); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(280, 75); // first point
            ctx.lineTo(300, 95); // second point
            ctx.lineTo(260, 95); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(260, 95); // first point
            ctx.lineTo(240, 75); // second point
            ctx.lineTo(280, 75); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(260, 95); // first point
            ctx.lineTo(240, 115); // second point
            ctx.lineTo(240, 75); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(240, 115); // first point
            ctx.lineTo(260, 135); // second point
            ctx.lineTo(260, 95); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(240, 115); // first point
            ctx.lineTo(220, 135); // second point
            ctx.lineTo(260, 135); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(220, 135); // first point
            ctx.lineTo(200, 115); // second point
            ctx.lineTo(240, 115); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(220, 135); // first point
            ctx.lineTo(200, 155); // second point
            ctx.lineTo(200, 115); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(200, 155); // first point
            ctx.lineTo(220, 135); // second point
            ctx.lineTo(220, 175); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(200, 155); // first point
            ctx.lineTo(180, 175); // second point
            ctx.lineTo(220, 175); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(180, 175); // first point
            ctx.lineTo(160, 155); // second point
            ctx.lineTo(200, 155); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(180, 175); // first point
            ctx.lineTo(160, 155); // second point
            ctx.lineTo(160, 195); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(160, 195); // first point
            ctx.lineTo(180, 215); // second point
            ctx.lineTo(180, 175); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(160, 195); // first point
            ctx.lineTo(140, 215); // second point
            ctx.lineTo(180, 215); // third point
            ctx.fill();

            // ----- snake 17-13 -----

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(490, 740); // first point
            ctx.lineTo(460, 770); // second point
            ctx.lineTo(520, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(520, 800); // first point
            ctx.lineTo(490, 770); // second point
            ctx.lineTo(550, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(550, 740); // first point
            ctx.lineTo(580, 770); // second point
            ctx.lineTo(520, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(580, 800); // first point
            ctx.lineTo(550, 770); // second point
            ctx.lineTo(610, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(610, 740); // first point
            ctx.lineTo(640, 770); // second point
            ctx.lineTo(580, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(640, 800); // first point
            ctx.lineTo(610, 770); // second point
            ctx.lineTo(670, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(670, 740); // first point
            ctx.lineTo(700, 770); // second point
            ctx.lineTo(640, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(700, 800); // first point
            ctx.lineTo(730, 770); // second point
            ctx.lineTo(670, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(730, 740); // first point
            ctx.lineTo(700, 770); // second point
            ctx.lineTo(760, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(760, 800); // first point
            ctx.lineTo(730, 770); // second point
            ctx.lineTo(790, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(790, 740); // first point
            ctx.lineTo(820, 770); // second point
            ctx.lineTo(760, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(820, 800); // first point
            ctx.lineTo(850, 770); // second point
            ctx.lineTo(790, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(850, 740); // first point
            ctx.lineTo(820, 770); // second point
            ctx.lineTo(880, 770); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(880, 800); // first point
            ctx.lineTo(850, 770); // second point
            ctx.lineTo(910, 770); // third point
            ctx.fill();

            // ----- snake 52-29 -----

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1063, 330); // first point
            ctx.lineTo(1063, 300); // second point
            ctx.lineTo(1033, 330); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 330); // first point
            ctx.lineTo(1093, 330); // second point
            ctx.lineTo(1063, 300); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 330); // first point
            ctx.lineTo(1093, 330); // second point
            ctx.lineTo(1063, 360); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 360); // first point
            ctx.lineTo(1033, 360); // second point
            ctx.lineTo(1063, 330); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 360); // first point
            ctx.lineTo(1033, 360); // second point
            ctx.lineTo(1063, 390); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 390); // first point
            ctx.lineTo(1093, 390); // second point
            ctx.lineTo(1063, 360); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 390); // first point
            ctx.lineTo(1093, 390); // second point
            ctx.lineTo(1063, 420); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 420); // first point
            ctx.lineTo(1033, 420); // second point
            ctx.lineTo(1063, 390); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 420); // first point
            ctx.lineTo(1033, 420); // second point
            ctx.lineTo(1063, 450); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 450); // first point
            ctx.lineTo(1093, 450); // second point
            ctx.lineTo(1063, 420); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 450); // first point
            ctx.lineTo(1093, 450); // second point
            ctx.lineTo(1063, 480); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 480); // first point
            ctx.lineTo(1033, 480); // second point
            ctx.lineTo(1063, 450); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 480); // first point
            ctx.lineTo(1033, 480); // second point
            ctx.lineTo(1063, 510); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 510); // first point
            ctx.lineTo(1093, 510); // second point
            ctx.lineTo(1063, 480); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 510); // first point
            ctx.lineTo(1093, 510); // second point
            ctx.lineTo(1063, 540); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 540); // first point
            ctx.lineTo(1033, 540); // second point
            ctx.lineTo(1063, 510); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 540); // first point
            ctx.lineTo(1033, 540); // second point
            ctx.lineTo(1063, 570); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 570); // first point
            ctx.lineTo(1093, 570); // second point
            ctx.lineTo(1063, 540); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 570); // first point
            ctx.lineTo(1093, 570); // second point
            ctx.lineTo(1063, 600); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 600); // first point
            ctx.lineTo(1033, 600); // second point
            ctx.lineTo(1063, 570); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 600); // first point
            ctx.lineTo(1033, 600); // second point
            ctx.lineTo(1063, 630); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 630); // first point
            ctx.lineTo(1093, 630); // second point
            ctx.lineTo(1063, 600); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 630); // first point
            ctx.lineTo(1093, 630); // second point
            ctx.lineTo(1063, 660); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 660); // first point
            ctx.lineTo(1033, 660); // second point
            ctx.lineTo(1063, 630); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 660); // first point
            ctx.lineTo(1033, 660); // second point
            ctx.lineTo(1063, 690); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(1063, 660); // first point
            ctx.lineTo(1093, 660); // second point
            ctx.lineTo(1063, 690); // third point
            ctx.fill();


            // ----- snake 38-57 -----

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(440, 395); // first point
            ctx.lineTo(420, 415); // second point
            ctx.lineTo(460, 415); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(420, 415); // first point
            ctx.lineTo(400, 395); // second point
            ctx.lineTo(440, 395); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(420, 415); // first point
            ctx.lineTo(400, 395); // second point
            ctx.lineTo(400, 435); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(400, 435); // first point
            ctx.lineTo(420, 415); // second point
            ctx.lineTo(420, 455); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(400, 435); // first point
            ctx.lineTo(420, 455); // second point
            ctx.lineTo(380, 455); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(380, 455); // first point
            ctx.lineTo(360, 435); // second point
            ctx.lineTo(400, 435); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(380, 455); // first point
            ctx.lineTo(360, 475); // second point
            ctx.lineTo(360, 435); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(360, 475); // first point
            ctx.lineTo(380, 495); // second point
            ctx.lineTo(380, 455); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(360, 475); // first point
            ctx.lineTo(340, 495); // second point
            ctx.lineTo(380, 495); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(340, 495); // first point
            ctx.lineTo(320, 475); // second point
            ctx.lineTo(360, 475); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(340, 495); // first point
            ctx.lineTo(320, 515); // second point
            ctx.lineTo(320, 475); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(320, 515); // first point
            ctx.lineTo(340, 495); // second point
            ctx.lineTo(340, 535); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(320, 515); // first point
            ctx.lineTo(300, 535); // second point
            ctx.lineTo(340, 535); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(300, 535); // first point
            ctx.lineTo(280, 515); // second point
            ctx.lineTo(320, 515); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(300, 535); // first point
            ctx.lineTo(280, 515); // second point
            ctx.lineTo(280, 555); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(280, 555); // first point
            ctx.lineTo(300, 575); // second point
            ctx.lineTo(300, 535); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(280, 555); // first point
            ctx.lineTo(260, 575); // second point
            ctx.lineTo(300, 575); // third point
            ctx.fill();


            // ----- snake 24-88 -----


            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(460, 635); // first point
            ctx.lineTo(430, 605); // second point
            ctx.lineTo(430, 665); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(430, 605); // first point
            ctx.lineTo(460, 575); // second point
            ctx.lineTo(460, 635); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(460, 575); // first point
            ctx.lineTo(430, 545); // second point
            ctx.lineTo(430, 605); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(460, 575); // first point
            ctx.lineTo(430, 545); // second point
            ctx.lineTo(480, 545); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(480, 545); // first point
            ctx.lineTo(460, 575); // second point
            ctx.lineTo(510, 575); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(480, 545); // first point
            ctx.lineTo(510, 515); // second point
            ctx.lineTo(510, 575); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(510, 515); // first point
            ctx.lineTo(480, 485); // second point
            ctx.lineTo(480, 545); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(510, 515); // first point
            ctx.lineTo(480, 485); // second point
            ctx.lineTo(540, 485); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(540, 485); // first point
            ctx.lineTo(510, 515); // second point
            ctx.lineTo(570, 515); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(540, 485); // first point
            ctx.lineTo(570, 455); // second point
            ctx.lineTo(570, 515); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(570, 455); // first point
            ctx.lineTo(540, 425); // second point
            ctx.lineTo(540, 485); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(570, 455); // first point
            ctx.lineTo(540, 425); // second point
            ctx.lineTo(600, 425); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(600, 425); // first point
            ctx.lineTo(570, 455); // second point
            ctx.lineTo(630, 455); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(600, 425); // first point
            ctx.lineTo(630, 395); // second point
            ctx.lineTo(630, 455); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(630, 395); // first point
            ctx.lineTo(600, 425); // second point
            ctx.lineTo(600, 365); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(630, 395); // first point
            ctx.lineTo(660, 365); // second point
            ctx.lineTo(600, 365); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(660, 365); // first point
            ctx.lineTo(690, 395); // second point
            ctx.lineTo(630, 395); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(660, 365); // first point
            ctx.lineTo(690, 395); // second point
            ctx.lineTo(690, 335); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(690, 335); // first point
            ctx.lineTo(660, 365); // second point
            ctx.lineTo(660, 305); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(690, 335); // first point
            ctx.lineTo(660, 305); // second point
            ctx.lineTo(720, 305); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(720, 305); // first point
            ctx.lineTo(690, 335); // second point
            ctx.lineTo(750, 335); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(720, 305); // first point
            ctx.lineTo(750, 335); // second point
            ctx.lineTo(750, 275); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(750, 275); // first point
            ctx.lineTo(720, 305); // second point
            ctx.lineTo(720, 245); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(750, 275); // first point
            ctx.lineTo(780, 245); // second point
            ctx.lineTo(720, 245); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(780, 245); // first point
            ctx.lineTo(750, 275); // second point
            ctx.lineTo(810, 275); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(780, 245); // first point
            ctx.lineTo(810, 275); // second point
            ctx.lineTo(810, 215); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(810, 215); // first point
            ctx.lineTo(780, 245); // second point
            ctx.lineTo(780, 185); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(810, 215); // first point
            ctx.lineTo(840, 185); // second point
            ctx.lineTo(780, 185); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(840, 185); // first point
            ctx.lineTo(810, 215); // second point
            ctx.lineTo(870, 215); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(840, 185); // first point
            ctx.lineTo(870, 215); // second point
            ctx.lineTo(870, 155); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(870, 155); // first point
            ctx.lineTo(840, 125); // second point
            ctx.lineTo(840, 185); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(870, 155); // first point
            ctx.lineTo(840, 125); // second point
            ctx.lineTo(900, 125); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'white';
            ctx.moveTo(900, 125); // first point
            ctx.lineTo(870, 155); // second point
            ctx.lineTo(930, 155); // third point
            ctx.fill();


            // ----- snake 93-71 -----


            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(925, 38); // first point
            ctx.lineTo(905, 58); // second point
            ctx.lineTo(945, 58); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(945, 58); // first point
            ctx.lineTo(925, 38); // second point
            ctx.lineTo(965, 38); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(945, 58); // first point
            ctx.lineTo(965, 78); // second point
            ctx.lineTo(965, 38); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(965, 78); // first point
            ctx.lineTo(945, 98); // second point
            ctx.lineTo(945, 58); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(965, 78); // first point
            ctx.lineTo(945, 98); // second point
            ctx.lineTo(985, 98); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(985, 98); // first point
            ctx.lineTo(1005, 78); // second point
            ctx.lineTo(965, 78); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(985, 98); // first point
            ctx.lineTo(1005, 78); // second point
            ctx.lineTo(1005, 118); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1005, 118); // first point
            ctx.lineTo(985, 98); // second point
            ctx.lineTo(985, 138); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1005, 118); // first point
            ctx.lineTo(1025, 138); // second point
            ctx.lineTo(985, 138); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1025, 138); // first point
            ctx.lineTo(1045, 118); // second point
            ctx.lineTo(1005, 118); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1025, 138); // first point
            ctx.lineTo(1045, 158); // second point
            ctx.lineTo(1045, 118); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1045, 158); // first point
            ctx.lineTo(1025, 138); // second point
            ctx.lineTo(1025, 178); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1045, 158); // first point
            ctx.lineTo(1025, 178); // second point
            ctx.lineTo(1065, 178); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1065, 178); // first point
            ctx.lineTo(1045, 158); // second point
            ctx.lineTo(1085, 158); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1065, 178); // first point
            ctx.lineTo(1085, 158); // second point
            ctx.lineTo(1085, 198); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1085, 198); // first point
            ctx.lineTo(1065, 218); // second point
            ctx.lineTo(1065, 178); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1085, 198); // first point
            ctx.lineTo(1065, 218); // second point
            ctx.lineTo(1105, 218); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1105, 218); // first point
            ctx.lineTo(1085, 198); // second point
            ctx.lineTo(1125, 198); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1105, 218); // first point
            ctx.lineTo(1125, 198); // second point
            ctx.lineTo(1125, 238); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1125, 238); // first point
            ctx.lineTo(1105, 218); // second point
            ctx.lineTo(1105, 258); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1125, 238); // first point
            ctx.lineTo(1105, 258); // second point
            ctx.lineTo(1145, 258); // third point
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            ctx.moveTo(1145, 258); // first point
            ctx.lineTo(1105, 238); // second point
            ctx.lineTo(1165, 238); // third point
            ctx.fill();



            
        }
        snakes();


        function ladders(){

            // ----- 80-finish -----

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(100, 50); // first point
            ctx.lineTo(85, 215); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(55, 48); // first point
            ctx.lineTo(40, 213); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(55, 70); // first point
            ctx.lineTo(100, 73); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(55, 100); // first point
            ctx.lineTo(100, 103); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(52, 130); // first point
            ctx.lineTo(98, 133); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(50, 160); // first point
            ctx.lineTo(95, 163); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(48, 190); // first point
            ctx.lineTo(93, 193); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            // ----- 75-86 -----

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(735, 104); // first point
            ctx.lineTo(720, 265); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(675, 100); // first point
            ctx.lineTo(660, 261); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(675, 120); // first point
            ctx.lineTo(735, 125); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(675, 150); // first point
            ctx.lineTo(735, 155); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(665, 180); // first point
            ctx.lineTo(725, 185); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(660, 210); // first point
            ctx.lineTo(720, 215); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(655, 240); // first point
            ctx.lineTo(715, 245); // second point
            ctx.fill();
            ctx.lineWidth = 15;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            // ----- 58-77 -----

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(435, 244); // first point
            ctx.lineTo(340, 425); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(385, 220); // first point
            ctx.lineTo(290, 401); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(370, 250); // first point
            ctx.lineTo(420, 275); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(345, 290); // first point
            ctx.lineTo(395, 315); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(330, 333); // first point
            ctx.lineTo(380, 358); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(310, 371); // first point
            ctx.lineTo(360, 396); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            // ----- 8-30 -----

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1240, 710); // first point
            ctx.lineTo(965, 880); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1200, 650); // first point
            ctx.lineTo(925, 821); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1175, 660); // first point
            ctx.lineTo(1215, 720); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1135, 690); // first point
            ctx.lineTo(1175, 750); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1093, 720); // first point
            ctx.lineTo(1133, 780); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1045, 745); // first point
            ctx.lineTo(1085, 805); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1000, 770); // first point
            ctx.lineTo(1040, 830); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(955, 800); // first point
            ctx.lineTo(995, 860); // second point
            ctx.fill();
            ctx.lineWidth = 13;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            // ----- 3-21 -----

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(90, 640); // first point
            ctx.lineTo(320, 835); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(45, 690); // first point
            ctx.lineTo(275, 890); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(63, 710); // first point
            ctx.lineTo(113, 655); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(100, 742); // first point
            ctx.lineTo(150, 687); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(140, 775); // first point
            ctx.lineTo(190, 720); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(178, 808); // first point
            ctx.lineTo(228, 753); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(213, 842); // first point
            ctx.lineTo(263, 787); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(253, 873); // first point
            ctx.lineTo(303, 818); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            // ----- 90-91 -----

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1225, 20); // first point
            ctx.lineTo(1230, 162); // second point
            ctx.fill();
            ctx.lineWidth = 14;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1165, 20); // first point
            ctx.lineTo(1170, 162); // second point
            ctx.fill();
            ctx.lineWidth = 14;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1165, 45); // first point
            ctx.lineTo(1220, 44); // second point
            ctx.fill();
            ctx.lineWidth = 14;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1165, 75); // first point
            ctx.lineTo(1220, 74); // second point
            ctx.fill();
            ctx.lineWidth = 14;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1170, 105); // first point
            ctx.lineTo(1225, 104); // second point
            ctx.fill();
            ctx.lineWidth = 14;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(1170, 135); // first point
            ctx.lineTo(1225, 134); // second point
            ctx.fill();
            ctx.lineWidth = 14;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            // ----- 28-84 -----

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(452, 107); // first point
            ctx.lineTo(973, 658); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(405, 145); // first point
            ctx.lineTo(925, 700); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(430, 175); // first point
            ctx.lineTo(475, 137); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(460, 205); // first point
            ctx.lineTo(505, 167); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(493, 238); // first point
            ctx.lineTo(538, 200); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(525, 270); // first point
            ctx.lineTo(570, 232); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(558, 303); // first point
            ctx.lineTo(603, 265); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(588, 338); // first point
            ctx.lineTo(635, 298); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(621, 371); // first point
            ctx.lineTo(669, 331); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(651, 405); // first point
            ctx.lineTo(700, 365); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(684, 438); // first point
            ctx.lineTo(733, 398); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(714, 472); // first point
            ctx.lineTo(763, 431); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(745, 505); // first point
            ctx.lineTo(795, 464); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(775, 540); // first point
            ctx.lineTo(825, 499); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(805, 575); // first point
            ctx.lineTo(855, 532); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(835, 610); // first point
            ctx.lineTo(885, 568); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(865, 643); // first point
            ctx.lineTo(915, 601); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#A62A87';
            // ctx.fillStyle = 'black';
            ctx.moveTo(895, 673); // first point
            ctx.lineTo(945, 632); // second point
            ctx.fill();
            ctx.lineWidth = 10;
            // ctx.strokeStyle = '#00BF32';
            ctx.stroke();


        }
        ladders();

        
        
    }

    
    draw();
    console.log(move);
    

}

main();
