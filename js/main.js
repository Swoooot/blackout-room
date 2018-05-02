'use strict';

window.onload = function() {
    document.body.classList.add('loaded');
};

let scrollBtn = document.querySelector('.scroll-home');
let scrollBtnVisible = false;


document.addEventListener('scroll', () => {

    if(document.body.classList.contains('opened__menu--body')) {
        return;
    };

    if(window.pageYOffset <= 100 && scrollBtnVisible) {
        scrollBtn.style.display = '';
        scrollBtnVisible = false;
    } else {
        if(window.pageYOffset >= 100 && !scrollBtnVisible ) {
            scrollBtn.style.display = 'block';
            scrollBtnVisible = true;
        }
    }
})

scrollBtn.addEventListener('click', () => {
    scrollIt(0, 300, 'linear');
})

