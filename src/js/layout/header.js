import { refs } from '../refs/refs'
refs.headerNav.addEventListener('click', changeHeader)

function changeHeader(e) {
    if (e.srcElement.dataset.action === 'library') {
        toggleClass(refs.header, 'header__main-bckg', 'header__secondary-bckg');
        inputFormIsHidden()
    } else if (e.srcElement.dataset.action === 'home') {
        toggleClass(refs.header, 'header__secondary-bckg', 'header__main-bckg',);
        inputFormVisibility()
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

