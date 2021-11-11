import { refs } from '../refs/refs'

refs.headerNav.addEventListener('click', changeHeader)
refs.headerBtn.addEventListener('click', changeActiveHeaderBtn)

function changeHeader(e) {
    if (e.srcElement.dataset.action === 'library') {
        toggleClass(refs.header, 'header__main-bckg', 'header__secondary-bckg');
        inputFormIsHidden();
        queueBtnActive()
    } else {
        toggleClass(refs.header, 'header__secondary-bckg', 'header__main-bckg');
        inputFormVisibility()
    }
}

function changeActiveHeaderBtn(e) {
    if (e.srcElement.dataset.action === 'watched') {
        watchedBtnActive()
    } else {
        queueBtnActive()
    }
}

function toggleClass(element, remove, add ) {
    element.classList.remove(remove);
    element.classList.add(add);
}

function inputFormIsHidden() {
    refs.searchFormEl.classList.add('visually-hidden')
    refs.headerBtn.classList.remove('visually-hidden')
    refs.libraryBtn.classList.add('header__nav-item--active')
    refs.homeBtn.classList.remove('header__nav-item--active') 
}

function inputFormVisibility() {
    refs.searchFormEl.classList.remove('visually-hidden')
    refs.headerBtn.classList.add('visually-hidden')
    refs.libraryBtn.classList.remove('header__nav-item--active')
    refs.homeBtn.classList.add('header__nav-item--active') 
}

function watchedBtnActive() {
    refs.queueBtn.classList.remove('header__item-btn--active')
    refs.watchedBtn.classList.add('header__item-btn--active');
}

function queueBtnActive() {
    refs.watchedBtn.classList.remove('header__item-btn--active');
    refs.queueBtn.classList.add('header__item-btn--active');
}