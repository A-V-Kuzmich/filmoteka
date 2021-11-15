import { getApiData } from '../api/api-service.js';
import { refs } from '../refs/refs'
import filmsTemplate from '../../partial/templates/film-cards.hbs'
import { createInnerMarkup, cleanInnerMarkup} from './render-by-template'
import { alertEnterQuery } from '../components/notifications'
import { alertNothingIsFound } from '../components/notifications'
import { getGenresFromLocalStorage } from './genre-local-storage'
let searchQuery = '1'
let onClickPage = 1;
let totalPages = 0;
let btnSummary = 2
document.addEventListener('DOMContentLoaded', onFetchAllMovies());
refs.paginationList.addEventListener('click', onPaginationBtnClick)
refs.filtersDropdownEl.addEventListener('click', searhByParameter)
refs.searchFormEl.addEventListener('submit', onSearch)
function searhByParameter(evt) {
  const yearItem = evt.target.classList.contains('values__form-input')
  const genreItem = evt.target.classList.contains('values__item--genre')
  const ratingItem = evt.target.classList.contains('values__item--rating')
  switch (true) {
    case genreItem:
      searchByGenre(evt.target.textContent);
      break
    case yearItem:
      searchByRelease();
      break
    case ratingItem:
      searchByPopularity(evt.target.textContent)
      break
  }
}
function searchByGenre(value) {
    cleanInnerMarkup(refs.paginationBtnList)
    const genreId = getGenreIdByName(value)
    onClickPage = 1
    searchQuery = ''
    searchQuery = `/discover/movie?with_genres=${genreId}&sort_by=popularity.desc`;
    renderImages(searchQuery, refs.filmsEl, filmsTemplate)
}
function searchByYear(e) {
  cleanInnerMarkup(refs.paginationBtnList)
  e.preventDefault();
    const year = e.currentTarget.elements.year.value
  onClickPage = 1
  searchQuery = ''
  searchQuery = `/discover/movie?primary_release_year=${year}&sort_by=popularity.desc`
  renderImages(searchQuery, refs.filmsEl, filmsTemplate)
}
function searchByRelease() {
    cleanInnerMarkup(refs.paginationBtnList)
    onClickPage = 1
    let thisYear = new Date().getFullYear();
    refs.valuesInput.setAttribute("max", thisYear);
    refs.valueFormEl.addEventListener('submit', searchByYear)
}
function searchByPopularity(value) {
    cleanInnerMarkup(refs.paginationBtnList)
    onClickPage = 1
    searchQuery = ''
    searchQuery = `/discover/movie?sort_by=popularity.${value}`;  
    if (value === 'descending') {
        value = value.slice(0,4)
    } else {
        value = value.slice(0,3)
        }
    renderImages(searchQuery, refs.filmsEl, filmsTemplate)
}
function onFetchByKeyword(keyword, page) {
    cleanInnerMarkup(refs.paginationBtnList)
    searchQuery = ''
    searchQuery = `/search/movie/?query=${keyword}&page=${page}`;
    return getApiData(searchQuery).then
        (result => {
            if (result.results.length === 0) {
                alertNothingIsFound()
            }
            console.log(result);
            exchangeObjectData(result)
            setLastPageNumber(result.total_pages)
            createInnerMarkup(refs.filmsEl, filmsTemplate(result.results))
            renderPagesList(result.total_pages)
            currentBtnClass()
        })
}
function onPaginationBtnClick(evt) {
    cleanInnerMarkup(refs.paginationBtnList)
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }
    onClickPage = Number(evt.target.textContent);
    const newPage = `${searchQuery}&page=${onClickPage}`
    renderImages(newPage, refs.filmsEl, filmsTemplate)
}
function getGenreIdByName(name) {
  const queryGenre = getGenresFromLocalStorage().find(genre => {
    return genre.name === name
  })
  return queryGenre.id
}
function getGenreNameById(genreIds) {
  let newArray = []
  genreIds.forEach(genreId => {
    getGenresFromLocalStorage().map(genre =>{
      if (genre.id === genreId) {
        newArray.push(genre.name)
      }
    })
  })
  return newArray
}
function exchangeObjectData(result) {
  result.results.forEach((obj) => {
    if (obj.genre_ids) {
    obj.genre_ids = getGenreNameById(obj.genre_ids)}
    if (obj.release_date) {
    obj.release_date = obj.release_date.slice(0, 4)
    }
  })
}
function renderImages(query, element, template) {
  getApiData(query)
      .then(result => {
        console.log(result);
      exchangeObjectData(result);
      setLastPageNumber(result.total_pages)
      createInnerMarkup(element, template(result.results))
      renderPagesList(result.total_pages)
      currentBtnClass()
    }
  );
}
function onFetchAllMovies(page) {
    cleanInnerMarkup(refs.filmsEl)
    cleanInnerMarkup(refs.paginationBtnList)
    searchQuery = ''
    searchQuery = `/trending/movie/week?`;
    renderImages(searchQuery, refs.filmsEl, filmsTemplate)
}
function onSearch(e) {
    e.preventDefault();
    const keyword = e.currentTarget.elements.query.value
    onClickPage = 1
    cleanInnerMarkup(refs.paginationBtnList)
    if (keyword === '') {
        alertEnterQuery()
        return
    }
    onFetchByKeyword(keyword)
}
function setLastPageNumber(totalPages) {
    refs.lastPaginationBtn.textContent = totalPages
}
function currentBtnClass() {
  let paginationBtns = refs.paginationList.querySelectorAll('button');
  for (let i = 0; i < paginationBtns.length; i += 1) {
    if (Number(paginationBtns[i].textContent) === onClickPage) {
      paginationBtns[i].classList.add('pagination__current-btn');
      } else if (Number(paginationBtns[i].textContent) !== onClickPage) {
      paginationBtns[i].classList.remove('pagination__current-btn')    
    }
  }
}
function renderPagesList(totalPages) {
    const start = onClickPage - btnSummary
    const end = onClickPage + btnSummary;
    for (let i = start; i <= end; i += 1) {
    if (i > 1 && i < totalPages) {
      refs.paginationBtnList.insertAdjacentHTML('beforeend', `<li class="pagination__list-item"><button type="button" class="pagination__list-item">${i}</button></li>`,
      );}
  }
}