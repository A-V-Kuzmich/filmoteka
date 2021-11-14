import { refs } from '../refs/refs.js'

 refs.scrollButton.addEventListener("click", scrollToTop);

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        addClass("icon-up-arrow--active");
        removeClass("icon-up-arrow--not-visible");
        
    } else {
        removeClass("icon-up-arrow--active");
        addClass("icon-up-arrow--not-visible");
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