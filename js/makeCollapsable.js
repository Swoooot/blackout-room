
(function() {

    function hideSection(elem) {
        let sectionHeight = elem.scrollHeight;
        let sectionTransition = elem.style.transition;
        elem.style.transition = '';

        requestAnimationFrame(function() {
            elem.style.height = sectionHeight + 'px';
            elem.style.transition = sectionTransition;

            requestAnimationFrame(function() {
                elem.style.height = '';
            })
        })

        elem.setAttribute('data-collapsed', 'true');    
    };

    function showSection(elem) {
        let sectionHeight = elem.scrollHeight;
        elem.style.height = sectionHeight + 'px';
        elem.setAttribute('data-collapsed', 'false');

        elem.addEventListener("transitionend", function() {
            elem.removeEventListener("transitionend", arguments.callee);
            elem.style.height = "100%";
        })
    }

    function makeCollapsable(toggler ,elem, optionalClass, pageOptionalClass) {
        toggler.addEventListener("click", function(evt) {
            evt.preventDefault();
            if(optionalClass) {
                toggler.classList.toggle(optionalClass);
            }
            if(pageOptionalClass) {
                document.documentElement.classList.toggle(pageOptionalClass);
                document.body.classList.toggle('opened__menu--body');
            }

            let isCollpased = elem.getAttribute('data-collapsed') === 'true';

            if(isCollpased) {
                showSection(elem);
            } else {
                hideSection(elem);
            }
        });
    };
    window.makeCollapsable = makeCollapsable;
})();
