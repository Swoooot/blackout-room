'use strict';

(function() {
    let currentScroll = window.pageYOffset;
    let header = document.querySelector(".intro__header");
    let intro = document.querySelector(".intro");
    

    document.addEventListener('scroll', function(evt) {
        currentScroll = window.pageYOffset;
        if(currentScroll > 300) {
            header.classList.add("intro__header--sticky");
            intro.style.paddingTop = header.offsetHeight + 'px';
        } else {
            header.classList.remove("intro__header--sticky");
            intro.style.paddingTop = '';
        }
    })
})();