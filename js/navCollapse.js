'use strict';
 
(function() {
    let menuSwitch = document.querySelector('.intro__switch');
    let menu = document.querySelector('.navigation');

    menuSwitch.addEventListener('click', () => {
        document.documentElement.classList.toggle('opened__menu');
        document.body.classList.toggle('opened__menu--body');
    })
})();
