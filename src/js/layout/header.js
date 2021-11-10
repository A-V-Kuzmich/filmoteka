const homeBtn = document.querySelector(['data-action-home']);
const libraryBtn = document.querySelector(['data-action-library']);
const inputForm = document.querySelector('.header__form');
const headerBtn = document.querySelector('.header__btn');
const header = document.querySelector('.header');
console.log(header)
console.log(libraryBtn)
// libraryBtn.addEventListener('click', changeHeader)

function changeHeader(e) {
    if (e.target.textContent === 'My library') {
        console.log(e.target.textContent)
        header.classList.remove('header__main-bckg');
        header.classList.add('header__secondary-bckg');
    }
}


