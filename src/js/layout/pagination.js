import { refs } from '../refs/refs';
import { cleanInnerMarkup } from './render-by-template';
import { exchangeObjectData } from './transformation-genre';
import { renderImages } from './render-main-list';

const { paginationList } = refs;

paginationList.addEventListener('click', onPaginationBtnClick);

let searchQuery = '';
let onClickPage = 1;
let totalPages = 0;
let btnSummary = 2;

export function pagination(query, result) {
  searchQuery = query;
  onClickPage = result.page;
  cleanInnerMarkup(refs.paginationBtnList);
  exchangeObjectData(result);
  setLastPageNumber(result.total_pages);
  renderPagesList(result.total_pages);
  currentBtnClass();
  checkBtnOpacity();
}
function onPaginationBtnClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  } else if (evt.target.classList.contains('pagination__list-item')) {
    onClickPage = Number(evt.target.textContent);
  } else if (evt.target.classList.contains('js-previous')) {
    onClickPage -= 1;
  } else if (evt.target.classList.contains('js-next')) {
    onClickPage += 1;
  }
  cleanInnerMarkup(refs.paginationBtnList);
  const newPage = `${searchQuery}&page=${onClickPage}`;
  renderImages(newPage, refs.filmsEl);
  checkBtnOpacity();
  window.scrollTo({
    behavior: 'smooth',
    top: 250,
  });
}
export function checkBtnOpacity() {
  onClickPage === 1
    ? refs.previousArrow.classList.add('visually-hidden')
    : refs.previousArrow.classList.remove('visually-hidden');
  onClickPage === Number(refs.lastPaginationBtn.textContent)
    ? refs.nextArrow.classList.add('visually-hidden')
    : refs.nextArrow.classList.remove('visually-hidden');
  if (document.body.clientWidth <= 320) {
    refs.paginationLeftDots.classList.add('visually-hidden');
    refs.paginationRightDots.classList.add('visually-hidden');
    onClickPage > 3
      ? refs.firstPaginationBtn.classList.add('visually-hidden')
      : refs.firstPaginationBtn.classList.remove('visually-hidden');
    onClickPage < Number(refs.lastPaginationBtn.textContent) - 2
      ? refs.lastPaginationBtn.classList.add('visually-hidden')
      : refs.lastPaginationBtn.classList.remove('visually-hidden');
  } else {
    onClickPage < 5
      ? refs.paginationLeftDots.classList.add('visually-hidden')
      : refs.paginationLeftDots.classList.remove('visually-hidden');
    onClickPage > Number(refs.lastPaginationBtn.textContent) - 4
      ? refs.paginationRightDots.classList.add('visually-hidden')
      : refs.paginationRightDots.classList.remove('visually-hidden');
  }
}
function setLastPageNumber(totalPages) {
  refs.lastPaginationBtn.textContent = totalPages;
}
function currentBtnClass() {
  let paginationBtns = refs.paginationList.querySelectorAll('button');
  for (let i = 0; i < paginationBtns.length; i += 1) {
    if (Number(paginationBtns[i].textContent) === onClickPage) {
      paginationBtns[i].classList.add('pagination__current-btn');
    } else if (Number(paginationBtns[i].textContent) !== onClickPage) {
      paginationBtns[i].classList.remove('pagination__current-btn');
    }
  }
}
function renderPagesList(totalPages) {
  const start = onClickPage - btnSummary;
  const end = onClickPage + btnSummary;
  for (let i = start; i <= end; i += 1) {
    if (i > 1 && i < totalPages) {
      refs.paginationBtnList.insertAdjacentHTML(
        'beforeend',
        `<li class=""><button type="button" class="pagination__list-item">${i}</button></li>`,
      );
    }
  }
}
