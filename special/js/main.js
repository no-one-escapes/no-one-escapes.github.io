let select = 0;
let choose = 0;
let selectTwo = 0;
let timeToHatch = 30;
let timeTicks = 0;
let counter = 0;
let timeToGrowToChild = 100;
let hatch = 0;
let ill = 0;






let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.width  = 32 * 6;
canvas.height = 16 * 6;

pic = new Image();
pic.src = "image/spritesBai.png";  
pic.onload = babyAnimation;

// function eggStart() {
//     for (let i = 0; i <= timeToHatch; i++) {
//         (function (i) {
//             setTimeout(function () {
//                 if (choose){
//                 } else if (i == timeToHatch) {
//                     eggHatching();
//                 } else if (i % 2==0) {
//                     ctx.clearRect(0, 0, canvas.width, canvas.height);
//                     ctx.drawImage(pic, 1, 4, 30, 30, 80, 50, 30, 30);
//                     timeTicks +=1;
//                     console.log(timeTicks)
//                 } else {
//                     ctx.clearRect(0, 0, canvas.width, canvas.height);
//                     ctx.drawImage(pic, 36, 1, 30, 33, 80, 47, 30, 33);
//                     timeTicks +=1
//                     console.log(timeTicks);
//                 } 
//             },1000 * i + 1);
//         }) (i);
//     }
// }

// function eggHatching() {
//     for (let i = 0; i < 5; i++) {
//         (function (i) {
//             setTimeout(function () {
//                 if (i == 0 || i == 2) {
//                     ctx.clearRect(0, 0, canvas.width, canvas.height);
//                     ctx.drawImage(pic, 1, 4, 30, 30, 77, 50, 30, 30);
//                 } else if (i == 1 || i == 3) {
//                     ctx.clearRect(0, 0, canvas.width, canvas.height);
//                     ctx.drawImage(pic, 1, 4, 30, 30, 83, 50, 30, 30);
//                 } else if (i == 4) {
//                     ctx.clearRect(0, 0, canvas.width, canvas.height);
//                     ctx.drawImage(pic, 70, 1, 30, 42, 80, 37, 30, 42);
//                 }
//           },1000 * i + 1);
//       }) (i);
//     }
// }

function babyAnimation() {

    let xBig = 83;
    let xSmall = 80;
    let moveX = 15;
    
    
    for (let i = 0; i <= timeToGrowToChild; i++) {
        (function (i) {
            setTimeout(function () {
                if (choose){
                    
                } else if (i == timeToGrowToChild) {
                    eggHatching();
                } else if (i % 2==0) {

                    if (xBig + 25 > canvas.width || xBig - 20 < 0){
                        moveX = -moveX;
                    }
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(pic, 107, 2, 18, 18, xBig, 70, 18, 18);
                    xBig += moveX;
                    // console.log(moveX + ' movex')
                    // console.log(xBig + ' xbig')
                    counter += 1;
                    console.log(counter);
                    
                } else {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(pic, 104, 25, 24, 10, xSmall, 86, 24, 10);
                    xSmall += moveX;
                    // console.log(moveX + ' movex2')
                    // console.log(xSmall + ' xSmall')
                    counter += 1;
                    console.log(counter);
                    console.log(timeToGrowToChild);
                    
                } 
            },1000 * i + 1);
        }) (i);
    }
    hatch += 1;
}

// setTimeout(babyAnimation, (timeToHatch + 5) * 1000);

document.getElementById('a').onclick = selectButton;
document.getElementById('b').onclick = chooseButton;
document.getElementById('c').onclick = cancelButton;

function selectButton() {

    select += 1;

    if (choose > 0) {
        // document.getElementById('a').onclick = selectButtonTwo;
    } else if(select == 1) {
        document.getElementById('food').classList.add('select');
    } else if (select == 2) {
        document.getElementById('food').classList.remove('select');
        document.getElementById('light').classList.add('select');
    } else if (select == 3) {
        document.getElementById('light').classList.remove('select');
        document.getElementById('play').classList.add('select');
    } else if (select == 4) {
        document.getElementById('play').classList.remove('select');
        document.getElementById('treatment').classList.add('select');
    } else if (select == 5) {
        document.getElementById('treatment').classList.remove('select');
        document.getElementById('wash').classList.add('select');
    } else if (select == 6) {
        document.getElementById('wash').classList.remove('select');
        document.getElementById('statistics').classList.add('select');
    } else if (select == 7) {
        document.getElementById('statistics').classList.remove('select');
        document.getElementById('discipline').classList.add('select');
    } else if (select == 8) {
        document.getElementById('discipline').classList.remove('select');
        document.getElementById('warning').classList.add('select');
    } else {
        select = 0;
        document.getElementById('warning').classList.remove('select');
    }

}

// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
// Первый параметр указывает на изображение
// sx, sy, sWidth, sHeight указывают параметры фрагмента на изображение-источнике
// dx, dy, dWidth, dHeight ответственны за координаты отрисовки фрагмента на холсте

// function selectButtonTwo(){

// }

function chooseButton() {

    choose += 1;
    document.getElementById('a').onclick = selectButtonTwo;

    if (hatch == 0) {
        cancelButton();
    } else if (select == 1 && choose == 1) {
        selectTwo = 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(pic, 153, 1, 70, 42, 60, 30, 70, 42);  
        if (selectTwo == 1){
            ctx.drawImage(pic, 132, 1, 18, 21, 35, 30, 18, 21);
        }
    } else if (select == 2 && choose == 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(pic, 256, 56, 45, 42, 60, 30, 45, 42); 
        ctx.drawImage(pic, 132, 1, 18, 21, 35, 30, 18, 21);
    } else if (select == 3 && choose == 1 ) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(40, 40, 6, 6)
    } else if (select == 4 && choose == 1) {
        if (ill == 0){
            notIll();
            setTimeout(cancelButton, 3500);
        }
    } else if (select == 5 && choose == 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "bisque";
        ctx.fillRect(50, 30, 6, 6)
    } else if (select == 6 && choose == 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "blue";
        ctx.fillRect(55, 30, 6, 6)
    } else if (select == 7 && choose == 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "gray";
        ctx.fillRect(60, 30, 6, 6)
    } else if (select == 8 && choose == 1 ) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(65, 30, 6, 6)
    }

}

function cancelButton() {

    if (select || choose) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('a').onclick = selectButton;
        document.getElementById('food').classList.remove('select');
        document.getElementById('light').classList.remove('select');
        document.getElementById('play').classList.remove('select');
        document.getElementById('treatment').classList.remove('select');
        document.getElementById('wash').classList.remove('select');
        document.getElementById('statistics').classList.remove('select');
        document.getElementById('discipline').classList.remove('select');
        document.getElementById('warning').classList.remove('select');
        select = 0;
        choose = 0;
        selectTwo = 0;
    }

    
}

function selectButtonTwo() {

    selectTwo +=1;

    if (select == 1) {
        if (selectTwo % 2 == 1) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(pic, 153, 1, 70, 42, 60, 30, 70, 42); 
            ctx.drawImage(pic, 132, 1, 18, 21, 35, 30, 18, 21);
        } else if (selectTwo % 2 == 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(pic, 153, 1, 70, 42, 60, 30, 70, 42); 
            ctx.drawImage(pic, 132, 1, 18, 21, 35, 52, 18, 21);
        }  
    } else if (select == 2) {
        if (selectTwo % 2 == 1) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(pic, 256, 56, 45, 42, 60, 30, 45, 42); 
            ctx.drawImage(pic, 132, 1, 18, 21, 35, 52, 18, 21);
        } else if (selectTwo % 2 == 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(pic, 256, 56, 45, 42, 60, 30, 45, 42);
            ctx.drawImage(pic, 132, 1, 18, 21, 35, 30, 18, 21);
        }  
    } else if (select == 6){
        if (selectTwo == 1){

        }
    }

}

function notIll(){
    for (let i = 0; i < 3; i++) {
        (function (i) {
            setTimeout(function () {
                if (i % 2==0) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(pic, 153, 47, 18, 18, 83, 70, 18, 18);
                } else {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(pic, 174, 47, 18, 18, 83, 70, 18, 18);
                } 
            },1000 * i + 1);
        }) (i);
    }
}