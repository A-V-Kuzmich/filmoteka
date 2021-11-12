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

function doLibraryView() {
  toggleClass(refs.header, 'header__main-bckg', 'header__secondary-bckg');
  inputFormToggleClass();
  queueBtnActive();
}

function inputFormToggleClass() {
  searchFormToggle();
  headerButtonsToggle();
  libraryButtonToggle();
  homeButtonToggle();
}

function toggleClass(element, remove, add) {
  element.classList.remove(remove);
  element.classList.add(add);
}

function searchFormToggle() {
  refs.searchFormEl.classList.toggle('visually-hidden');
}

function headerButtonsToggle() {
  refs.headerBtn.classList.toggle('visually-hidden');
}

function libraryButtonToggle() {
  refs.libraryBtn.classList.toggle('header__nav-item--active');
}

function homeButtonToggle() {
  refs.homeBtn.classList.toggle('header__nav-item--active');
  
}

function watchedBtnActive() {
  refs.queueBtn.classList.toggle('header__item-btn--active');
  refs.watchedBtn.classList.toggle('header__item-btn--active');
}

function queueBtnActive() {
  refs.watchedBtn.classList.remove('header__item-btn--active');
  refs.queueBtn.classList.add('header__item-btn--active');
}