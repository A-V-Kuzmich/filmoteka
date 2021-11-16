import { refs } from '../refs/refs.js'

refs.scrollButton.addEventListener("click", scrollToTop);

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1) {
        addClass(refs.scrollButton,"icon-up-arrow--active");
        removeClass(refs.scrollButton,"icon-up-arrow--not-visible");
    } else {
        removeClass(refs.scrollButton,"icon-up-arrow--active");
        addClass(refs.scrollButton,"icon-up-arrow--not-visible");
    }

    if (window.pageYOffset < 20) { 
        removeClass(refs.rocketTail,"rocket-running"); 
        refs.rocketTail.style.opacity = 0;
    }
})

function scrollToTop() {
    
      window.scrollTo({
      top: 0,
      behavior: 'smooth',
      });
    
    addClass(refs.rocketTail,"rocket-running"); 
    refs.rocketTail.style.opacity = 1;
}

//Auxiliary functions
function addClass(element,classToAdd) {
     element.classList.add(classToAdd);
}
function removeClass(element,classToRemove) {
    element.classList.remove(classToRemove);
}