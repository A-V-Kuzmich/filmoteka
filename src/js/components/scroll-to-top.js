import { refs } from '../refs/refs.js'

refs.scrollButton.addEventListener("click", scrollToTop);

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
        addClass("icon-up-arrow--active");
    } else {
        removeClass("icon-up-arrow--active");
    }

    if (window.pageYOffset < 20) { 
        removeClass("scroll-running");
    }
})

function scrollToTop() {
    addClass("scroll-running");
    refs.scrollTarget.scrollIntoView();
   
}

//Auxiliary functions
function addClass(classToAdd) {
     refs.scrollButton.classList.add(classToAdd);
}
function removeClass(classToRemove) {
    refs.scrollButton.classList.remove(classToRemove);
}