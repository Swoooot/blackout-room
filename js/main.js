'use strict';

let mainTitle = document.querySelector(".intro__title");

window.onload = function() {
    setTimeout(function() {
        mainTitle.classList.add("intro__title--loaded")
    }, 100);
};