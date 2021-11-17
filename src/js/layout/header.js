import { refs } from '../refs/refs';
import { renderFromStorageArray } from './render-storage-array';
import { onFetchAllMovies } from './fetch-by-keyword';

refs.headerNav.addEventListener('click', changeHeader);
refs.headerBtn.addEventListener('click', changeActiveHeaderBtn);
refs.libraryBtn.addEventListener('click', renderFromStorageArray('queue'));

function changeHeader(e) {
  switch (e.srcElement.dataset.action) {
    case 'library':
      selectLibraryBtn();
      queueBtnActive();
      // renderFromStorageArray('queue');
      break;
    case 'home':
      selectHomeBtn();
      onFetchAllMovies(1);
      break;
  }
}

function changeActiveHeaderBtn(e) {
  switch (e.srcElement.dataset.action) {
    case 'watched':
      watchedBtnActive();
      break;
    case 'queue':
      queueBtnActive();
      break;
  }
}

function watchedBtnActive() {
  refs.queueBtn.classList.remove('header__item-btn--active');
  refs.watchedBtn.classList.add('header__item-btn--active');
}

function queueBtnActive() {
  refs.watchedBtn.classList.remove('header__item-btn--active');
  refs.queueBtn.classList.add('header__item-btn--active');
}

function selectLibraryBtn() {
  refs.header.classList.replace('header__main-bckg', 'header__secondary-bckg');
  refs.headerSearcherEl.classList.add('visually-hidden');
  refs.headerBtn.classList.remove('visually-hidden');
  refs.libraryBtn.classList.add('header__nav-item--active');
  refs.homeBtn.classList.remove('header__nav-item--active');
}

function selectHomeBtn() {
  refs.header.classList.replace('header__secondary-bckg', 'header__main-bckg');
  refs.headerSearcherEl.classList.remove('visually-hidden');
  refs.headerBtn.classList.add('visually-hidden');
  refs.libraryBtn.classList.remove('header__nav-item--active');
  refs.homeBtn.classList.add('header__nav-item--active');
}
