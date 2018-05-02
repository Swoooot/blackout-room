'use strict';

window.onload = function() {
    document.body.classList.add('loaded');
};

let scrollBtn = document.querySelector('.scroll-home');
let scrollBtnVisible = false;

document.addEventListener('scroll', () => {
    console.log("!!!");
    if(window.pageYOffset === 0 && scrollBtnVisible) {
        scrollBtn.style.display = '';
        scrollBtnVisible = false;
    } else {
        if(window.pageYOffset > 0 && !scrollBtnVisible ) {
            scrollBtn.style.display = 'block';
            scrollBtnVisible = true;
        }
    }
})

scrollBtn.addEventListener('click', () => {
    scrollIt(0, 300, 'linear');
})

