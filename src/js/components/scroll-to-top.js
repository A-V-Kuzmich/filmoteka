import { refs } from '../refs/refs.js'

refs.scrollButton.addEventListener("click", scrollToTop);

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
        refs.scrollButton.classList.add("icon-up-arrow--active");
    } else {
        refs.scrollButton.classList.remove("icon-up-arrow--active");
    }
})

function scrollToTop() {
    refs.scrollTarget.scrollIntoView();
}