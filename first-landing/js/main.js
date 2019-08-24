
let left = 0;
let polosa = document.getElementById('polosa');

document.querySelector('.left').onclick = leftClick;
function leftClick() {

    if (left == 0) {
        polosa.style.left = 0 + 'px';
    } else {
        left = left + 260;
        polosa.style.left = left + 'px';
    } 
};

document.querySelector('.right').onclick = rightClick;
function rightClick() {
    if (left == -780) {
        polosa.style.left = -780 + 'px';
    } else {
        left = left - 260;
        polosa.style.left = left + 'px';
    }
}


let polosaTwo = document.getElementById('polosa_two');; //move second slider
let right = 0;

document.querySelector('.left_2').onclick = leftClickTwo;
function leftClickTwo() {

    if (right == 0) {
        polosaTwo.style.right = 0 + 'px';
    } else {
        right = right - 190;
        polosaTwo.style.right = right + 'px';
    } 
};

document.querySelector('.right_2').onclick = rightClickTwo;
function rightClickTwo() {
    if (right == 570) {
        polosaTwo.style.right = 570 + 'px';
    } else {
        right = right + 190;
        polosaTwo.style.right = right + 'px';
    }
}




function init(){
    let  tabBody = document.querySelectorAll('.tab-body');
    for (i = 1; i< tabBody.length; i++){
        tabBody[i].style.display = 'none';
    }
}

init();


// Function to make IE9+ support forEach:
(function() {
    if (typeof NodeList.prototype.forEach === "function")
        return false;
    else
        NodeList.prototype.forEach = Array.prototype.forEach;
})();

let tab = document.querySelectorAll('.tab'); // active class and show the sections
tab.forEach(function(element){
    element.onclick = showTabs;
});





function showTabs(){
    let data = this.getAttribute('data');
    let  tabBody = document.querySelectorAll('.tab-body');

        for (i = 0; i< tabBody.length; i++){
            tabBody[i].style.display = 'none';
        }

        if (this.classList) {
            for (let j = 0; j < tab.length; j++) {
                tab[j].classList.remove('active');
            }
            this.classList.add('active');
        } else {
            this.active += ' ' + active;
        }

    // document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
    document.querySelector('.tab-body[data="' + data + '"]').style.display = 'block';
} 


// let textForPic = document.querySelectorAll('.after_mouse_enter');
// let block = document.querySelector('.block');

// textForPic.forEach(function(element){ // add invisibility block
//     element.onmouseenter = showText;
// });

// function showText(){
//     if (this.value == 0) {
//         for (let j = 0; j < textForPic.length; j++) {
//             textForPic.innerHTML = "some text";
//         }
        

// }


// preview.forEach(function(element){
//     element.onmouseleave = closeShow;
// });

// function closeShow(){
//     if (this.classList) {
//         for (let j = 0; j < preview.length; j++) {
//             preview[j].classList.remove('block');
//         }
//     }
// }