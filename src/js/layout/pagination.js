import { getApiData } from '../api/api-service.js';
import { refs } from '../refs/refs';
import filmsTemplate from '../../partial/templates/film-cards.hbs';
import { createInnerMarkup, cleanInnerMarkup } from './render-by-template';
import { alertEnterQuery } from '../components/notifications';
import { alertNothingIsFound } from '../components/notifications';
import { getGenresFromLocalStorage } from './genre-local-storage';

let searchQuery = '';
let onClickPage = 1;
let totalPages = 0;
let btnSummary = 2;
// document.addEventListener('DOMContentLoaded', onFetchAllMovies());
refs.paginationList.addEventListener('click', onPaginationBtnClick);
refs.filtersDropdownEl.addEventListener('click', searhByParameter);
refs.searchFormEl.addEventListener('submit', onSearch);

export function qweryPagination(query) {
  searchQuery = query;
}
//========================ФИЛЬТР===============================================
//! функии для поиска по разным запросам
// функиця поиска фильмов на главную страницу при первом заходе (ОСНОВНАЯ)
// export function onFetchAllMovies() {
//   cleanInnerMarkup(refs.filmsEl);
//   cleanInnerMarkup(refs.paginationBtnList);
//   searchQuery = `/trending/movie/week?`;
//   renderImages(searchQuery, refs.filmsEl, filmsTemplate);
//   qweryPagination(searchQuery);
//   checkBtnOpacity();
// }
// функция поиска по жанрам (ОСНОВНАЯ)
function searchByGenre(value) {
  cleanInnerMarkup(refs.paginationBtnList);
  const genreId = getGenreIdByName(value);
  onClickPage = 1;
  searchQuery = `/discover/movie?with_genres=${genreId}&sort_by=popularity.desc`;
  renderImages(searchQuery, refs.filmsEl, filmsTemplate);
}
// функция поиска по годам (ОСНОВНАЯ)
function searchByYear(e) {
  e.preventDefault();
  cleanInnerMarkup(refs.paginationBtnList);
  const year = e.currentTarget.elements.year.value;
  onClickPage = 1;
  searchQuery = `/discover/movie?primary_release_year=${year}&sort_by=popularity.desc`;
  renderImages(searchQuery, refs.filmsEl, filmsTemplate);
}
// функиця поиска по популрности (ОСНОВНАЯ)
function searchByPopularity(value) {
  cleanInnerMarkup(refs.paginationBtnList);
  onClickPage = 1;
  searchQuery = `/discover/movie?sort_by=popularity.${value}`;
  if (value === 'descending') {
    value = value.slice(0, 4);
  } else {
    value = value.slice(0, 3);
  }
  renderImages(searchQuery, refs.filmsEl, filmsTemplate);
}
// функиця поиска по имени фильма (ОСНОВНАЯ)
function onFetchByKeyword(keyword, page) {
  cleanInnerMarkup(refs.paginationBtnList);
  searchQuery = `/search/movie/?query=${keyword}&page=${page}`;
  return getApiData(searchQuery).then(result => {
    if (result.results.length === 0) {
      alertNothingIsFound();
    }
    exchangeObjectData(result);
    setLastPageNumber(result.total_pages);
    createInnerMarkup(refs.filmsEl, filmsTemplate(result.results));
    renderPagesList(result.total_pages);
    currentBtnClass();
  });
}

// функция которая по поиску Вити (нужна чисто для того, чтобы повесить один слушатель и в ней уже обрабатывать запрос) (вспомогательная)
function searhByParameter(evt) {
  const yearItem = evt.target.classList.contains('values__form-input');
  const genreItem = evt.target.classList.contains('values__item--genre');
  const ratingItem = evt.target.classList.contains('values__item--rating');
  switch (true) {
    case genreItem:
      searchByGenre(evt.target.textContent);
      break;
    case yearItem:
      searchByRelease();
      break;
    case ratingItem:
      searchByPopularity(evt.target.textContent);
      break;
  }
}
// функция переводит имя жанра в айдишник (вспомогательная)
function getGenreIdByName(name) {
  const queryGenre = getGenresFromLocalStorage().find(genre => {
    return genre.name === name;
  });
  return queryGenre.id;
}
// это просто ограничивает количество символов для поиска года (вспомогательная)
refs.filtersYearInput.oninput = function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
};

// функция задает минимальный и максимальный год (вспомогательная)
function searchByRelease() {
  cleanInnerMarkup(refs.paginationBtnList);
  onClickPage = 1;
  let thisYear = new Date().getFullYear();
  refs.valuesInput.setAttribute('max', thisYear);
  refs.valueFormEl.addEventListener('submit', searchByYear);
}

// функиця поиска по имени фильма (вспомогательная)
function onSearch(e) {
  e.preventDefault();
  const keyword = e.currentTarget.elements.query.value;
  onClickPage = 1;
  cleanInnerMarkup(refs.paginationBtnList);
  checkBtnOpacity();
  if (keyword === '') {
    alertEnterQuery();
    return;
  }
  onFetchByKeyword(keyword);
}
// =================================ПАГИНАЦИЯ-БЛЯДЬ!====================================================================================================

//! функции для пагинаци, которые получают запрос, получают цифру при нажатии на страницу и рисуют нужную страницу запроса
// функция получает по клику на цифру саму цифру и записывает ее как номер страницы после чего по уже сформированному запросу - рисует нужную страницу (ОСНОВНАЯ)
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
  renderImages(newPage, refs.filmsEl, filmsTemplate);
  checkBtnOpacity();
  window.scrollTo({
    behavior: 'smooth',
    top: 250,
  });
}
// это какие-то функции Брона для прятания кнопок (вспомогательная)
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
// это какие-то функции Брона для отрисовки страниц (вспомогательная)
function setLastPageNumber(totalPages) {
  refs.lastPaginationBtn.textContent = totalPages;
}
// это какие-то функции Брона для отрисовки страниц (вспомогательная)
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
// это какие-то функции Брона для отрисовки страниц (вспомогательная)
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
//=========================================================================================================

//! ниже функии просто для рендера по полученному запросу
// рендерит по запросу (ОСНОВНАЯ)
export function renderImages(query, element, template) {
  getApiData(query).then(result => {
    exchangeObjectData(result);
    setLastPageNumber(result.total_pages);
    createInnerMarkup(element, template(result.results));
    renderPagesList(result.total_pages);
    currentBtnClass();
    checkBtnOpacity();
  });
}
// меняет айди жанров на имена (вспомогательная)
function getGenreNameById(genreIds) {
  let newArray = [];
  genreIds.forEach(genreId => {
    getGenresFromLocalStorage().map(genre => {
      if (genre.id === genreId) {
        newArray.push(genre.name);
      }
    });
  });
  return newArray;
}
// меняет данные обьекта (id жанров на имена, с полной даты - на год фильма) (вспомогательная)
function exchangeObjectData(result) {
  result.results.forEach(obj => {
    if (obj.genre_ids) {
      obj.genre_ids = getGenreNameById(obj.genre_ids);
    }
    if (obj.release_date) {
      obj.release_date = obj.release_date.slice(0, 4);
    }
  });
}
