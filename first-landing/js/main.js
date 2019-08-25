
let left = 0;
let strip = document.getElementById('strip');

document.querySelector('.left').onclick = leftClick;
function leftClick() {

    if (left == 0) {
        strip.style.left = 0 + 'px';
    } else {
        left = left + 260;
        strip.style.left = left + 'px';
    } 
};

document.querySelector('.right').onclick = rightClick;
function rightClick() {
    if (left == -780) {
        strip.style.left = -780 + 'px';
    } else {
        left = left - 260;
        strip.style.left = left + 'px';
    }
}


let stripTwo = document.getElementById('strip_two');; //move second slider
let right = 0;

document.querySelector('.left_2').onclick = leftClickTwo;
function leftClickTwo() {

    if (right == 0) {
        stripTwo.style.right = 0 + 'px';
    } else {
        right = right - 190;
        stripTwo.style.right = right + 'px';
    } 
};

document.querySelector('.right_2').onclick = rightClickTwo;
function rightClickTwo() {
    if (right == 570) {
        stripTwo.style.right = 570 + 'px';
    } else {
        right = right + 190;
        stripTwo.style.right = right + 'px';
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


