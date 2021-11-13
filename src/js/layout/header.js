import { refs } from '../refs/refs';

refs.headerNav.addEventListener('click', changeHeader);
refs.headerBtn.addEventListener('click', changeActiveHeaderBtn);

function changeHeader(e) {
  if (e.srcElement.dataset.action === 'library') {
    doLibraryView();
  } else if (e.srcElement.dataset.action === 'home') {
    doMainView();
  }
}

function changeActiveHeaderBtn(e) {
  if (e.srcElement.dataset.action === 'watched') {
    watchedBtnActive();
  } else if (e.srcElement.dataset.action === 'queue') {
    queueBtnActive();
  }
}

function doMainView() {
  toggleClass(refs.header, 'header__secondary-bckg', 'header__main-bckg');
  inputFormToggleClass();
  watchedBtnActive();
}

function inputFormIsHidden() {
    refs.headerSearcherEl.classList.add('visually-hidden')
    refs.headerBtn.classList.remove('visually-hidden')
    refs.libraryBtn.classList.add('header__nav-item--active')
    refs.homeBtn.classList.remove('header__nav-item--active') 
}

function inputFormVisibility() {
    refs.headerSearcherEl.classList.remove('visually-hidden')
    refs.headerBtn.classList.add('visually-hidden')
    refs.libraryBtn.classList.remove('header__nav-item--active')
    refs.homeBtn.classList.add('header__nav-item--active') 
}

function watchedBtnActive() {
  refs.queueBtn.classList.toggle('header__item-btn--active');
  refs.watchedBtn.classList.toggle('header__item-btn--active');
}

function queueBtnActive() {
  refs.watchedBtn.classList.remove('header__item-btn--active');
  refs.queueBtn.classList.add('header__item-btn--active');
}