'use strict';

let menuSwitch = document.querySelector('.intro__switch');
let menu = document.querySelector('.navigation');

makeCollapsable(menuSwitch, menu, null, "opened__menu");

// let questions = document.querySelectorAll('.faq__question');
// let answers = document.querySelectorAll('.faq__answer');

// Array.prototype.forEach.call(questions, function(item, i) {
//     makeCollapsable(item, answers[i], "faq__question--opened");
// });

let mainTitle = document.querySelector(".intro__title");

window.onload = function() {
    mainTitle.classList.add("intro__title--loaded");
};