import { refs } from '../refs/refs';

refs.headerNav.addEventListener('click', changeHeader);
refs.headerBtn.addEventListener('click', changeActiveHeaderBtn);

function changeHeader(e) {
  if (e.srcElement.dataset.action === 'library' || 'home') {
    changeInputCondition();
    libraryBtnActive();
  } 
}

function changeActiveHeaderBtn(e) {
  if (e.srcElement.dataset.action === 'watched' ||'queue') {
    changeActiveBtn();
  } 
}

function changeInputCondition() {
  refs.header.classList.toggle('header__main-bckg');
  refs.header.classList.toggle('header__secondary-bckg');
  refs.headerSearcherEl.classList.toggle('visually-hidden')
  refs.headerBtn.classList.toggle('visually-hidden')
  refs.libraryBtn.classList.toggle('header__nav-item--active')
  refs.homeBtn.classList.toggle('header__nav-item--active') 
}
 
function changeActiveBtn() {
  refs.queueBtn.classList.toggle('header__item-btn--active');
  refs.watchedBtn.classList.toggle('header__item-btn--active');
}

function libraryBtnActive() {
  refs.watchedBtn.classList.remove('header__item-btn--active');
  refs.queueBtn.classList.add('header__item-btn--active');
}
