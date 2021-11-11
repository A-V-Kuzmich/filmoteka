const scrollButton = document.querySelector(".scroll-js");
const scrollTarget = document.querySelector(".header");
/* scrollButton.addEventListener('click', scrollToTop); */

scrollButton.addEventListener("click", scrollToTop);

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
        scrollButton.classList.add("icon-up-arrow--active");
    } else {
        scrollButton.classList.remove("icon-up-arrow--active");
    }
})



function scrollToTop() {
    scrollTarget.scrollIntoView();
}