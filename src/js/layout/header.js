import { refs } from '../refs/refs';

refs.headerNav.addEventListener('click', changeHeader);
refs.headerBtn.addEventListener('click', changeActiveHeaderBtn);

function changeHeader(e) {
  if (e.srcElement.dataset.action === 'library' || e.srcElement.dataset.action === 'home') {
    refs.header.classList.toggle('header__main-bckg');
    refs.header.classList.toggle('header__secondary-bckg');
    changeInputCondition();
  } 
}

function changeActiveHeaderBtn(e) {
  if (e.srcElement.dataset.action === 'watched' || e.srcElement.dataset.action === 'queue') {
    changeActiveBtn();
  } 
}

function changeInputCondition() {
  refs.headerSearcherEl.classList.toggle('visually-hidden')
  refs.headerBtn.classList.toggle('visually-hidden')
  refs.libraryBtn.classList.toggle('header__nav-item--active')
  refs.homeBtn.classList.toggle('header__nav-item--active') 
}
 
function changeActiveBtn() {
  refs.queueBtn.classList.toggle('header__item-btn--active');
  refs.watchedBtn.classList.toggle('header__item-btn--active');
}
