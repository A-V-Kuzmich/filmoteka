import { getApiData } from '../api/api-service.js';
import { refs } from '../refs/refs'
import filmsTemplate from '../../partial/templates/film-cards.hbs'
import { createInnerMarkup } from './render-by-template'
import { cleanInnerMarkup } from './render-by-template'
import { alertEnterQuery } from '../components/notifications'
import { alertNothingIsFound } from '../components/notifications'
import { exchangeObjectData } from './render-images-to-main'

refs.searchFormEl.addEventListener('submit', onSearch)
let searchQuery = ''
let onClickPage = 1;
let totalPages = 0;
let btnSummary = 2

function onFetchAllMovies(page) {
    let query = `/trending/movie/week?page=${page}`;
    cleanInnerMarkup(refs.filmsEl)
    return getApiData(query)
        .then(result => {
            exchangeObjectData(result)
            setLastPageNumber(result.total_pages)
            createInnerMarkup(refs.filmsEl, filmsTemplate(result.results))
            renderPagesList(result.total_pages)
            currentBtnClass()
      })
}

function renderGall(page) {
    onFetchAllMovies(page)
}

renderGall(1)

function onFetchByKeyword(keyword, page) {
    let query = `/search/movie/?query=${keyword}&page=${page}`;

    cleanInnerMarkup(refs.filmsEl)

    return getApiData(query).then
        (result => {
            if (result.results.length === 0) {
                alertNothingIsFound()
            }
            exchangeObjectData(result)
            setLastPageNumber(result.total_pages)
            createInnerMarkup(refs.filmsEl, filmsTemplate(result.results))
            renderPagesList(result.total_pages)
            currentBtnClass()
        })
}

function onSearch(e) {
    e.preventDefault();

    searchQuery = e.currentTarget.elements.query.value
     cleanInnerMarkup(refs.paginationBtnList)
    
    if (searchQuery === '') {
        alertEnterQuery()
        return
    } onFetchByKeyword(searchQuery)           
}


// !!!! pagination !!!

function setLastPageNumber(totalPages) {
    refs.lastPaginationBtn.textContent = totalPages
}

refs.paginationList.addEventListener('click', onPaginationBtnClick)


function renderPagesList(totalPages) {
    const start = onClickPage - btnSummary
    const end = onClickPage + btnSummary;

    cleanInnerMarkup(refs.paginationBtnList)
    
    for (let i = start; i <= end; i += 1) {
    if (i > 1 && i < totalPages) {
      refs.paginationBtnList.insertAdjacentHTML('beforeend', `<li class="pagination__list-item"><button type="button" class="pagination__list-item">${i}</button></li>`,
      );}
  }
}

function onPaginationBtnClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    } onClickPage = Number(evt.target.textContent);
    if (searchQuery === '') {
        onFetchAllMovies(onClickPage)
        return
    } else { onFetchByKeyword(searchQuery, onClickPage)
        }
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

