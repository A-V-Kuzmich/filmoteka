import { refs } from '../refs/refs';
import onFetchAllMovies from './fetch-week-movies';

refs.homeBtn.addEventListener('click', doMainView);
refs.libraryBtn.addEventListener('click', doLibraryView);
refs.watchedBtn.addEventListener('click', watchedBtnActive);
refs.queueBtn.addEventListener('click', queueBtnActive);
refs.logo.addEventListener('click', onClickLogo);

function doMainView() {
  toggleClass(refs.header, 'header__secondary-bckg', 'header__main-bckg');
  clearInputField();
  inputFormVisibility();
  onFetchAllMovies(1);
}

function doLibraryView() {
  toggleClass(refs.header, 'header__main-bckg', 'header__secondary-bckg');
  inputFormIsHidden();
  clearInputField();
  queueBtnActive();
}

function toggleClass(element, remove, add) {
  element.classList.remove(remove);
  element.classList.add(add);
}

function inputFormIsHidden() {
  refs.searchFormEl.classList.add('visually-hidden');
  refs.headerBtn.classList.remove('visually-hidden');
  refs.libraryBtn.classList.add('header__nav-item--active');
  refs.homeBtn.classList.remove('header__nav-item--active');
}

function inputFormVisibility() {
  refs.searchFormEl.classList.remove('visually-hidden');
  refs.headerBtn.classList.add('visually-hidden');
  refs.libraryBtn.classList.remove('header__nav-item--active');
  refs.homeBtn.classList.add('header__nav-item--active');
}

function watchedBtnActive() {
  refs.queueBtn.classList.remove('header__item-btn--active');
  refs.watchedBtn.classList.add('header__item-btn--active');
}

function queueBtnActive() {
  refs.watchedBtn.classList.remove('header__item-btn--active');
  refs.queueBtn.classList.add('header__item-btn--active');
}

function onClickLogo(evt) {
  evt.preventDefault();
  doMainView();
}

function clearInputField() {
  refs.headerInputField.value = '';
}
