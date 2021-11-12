import { getApiData } from '../api/api-service.js';
import { refs } from '../refs/refs'
import filmsTemplate from '../../partial/templates/film-cards.hbs'
import { createInnerMarkup } from './render-by-template'
import { alertEnterQuery } from '../components/notifications'
import { alertNothingIsFound } from '../components/notifications'
import { exchangeObjectData } from './render-images-to-main'

refs.searchFormEl.addEventListener('submit', onSearch)
let searchQuery = ''
let onClickPage = 1;
let totalPages;
let btnSummary = 2


export function onFetchByKeyword(keyword, page) {
    let query = `/search/movie/?query=${keyword}&page=${page}`;
    clearMarkup(refs.filmsEl)
    return getApiData(query).then
        (result => {
            return result;
        },
        )
}

function onSearch(e) {
    e.preventDefault();

    searchQuery = e.currentTarget.elements.query.value

    if (searchQuery === '') {
        alertEnterQuery()
        return
    } onFetchByKeyword(searchQuery)
        .then(result => {
            if (result.results.length === 0) {
                alertNothingIsFound()
            } exchangeObjectData(result)
            setLastPageNumber(result.total_pages)
            createInnerMarkup(refs.filmsEl, filmsTemplate(result.results))
            onPaginationBtnClick
            renderPagesList()
            addClassToCurrentBtn()
        })
}


//!!!! pagination !!!

export function setLastPageNumber(totalPages) {
    refs.lastPageBtn.textContent = totalPages
}

refs.paginationList.addEventListener('click', onPaginationBtnClick)

function onPaginationBtnClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'BUTTON') {
        return;
    } onClickPage = Number(evt.target.textContent);
    onFetchByKeyword(searchQuery, onClickPage)
        .then(result => {
            exchangeObjectData(result)
            setLastPageNumber(result.total_pages)
            createInnerMarkup(refs.filmsEl, filmsTemplate(result.results))
            totalPages = result.total_pages
            renderPagesList()
            addClassToCurrentBtn()
        })
}

function renderPagesList() {
    const start = onClickPage - btnSummary
    const end = onClickPage + btnSummary;
    clearMarkup(refs.paginationBtnList)
    for (let i = start; i <= end; i += 1) {
    if (i > 0 && i <= totalPages) {
      refs.paginationBtnList.insertAdjacentHTML('beforeend', `<li class="pages-item"><button type="button" class="pagination-btn">${i}</button></li>`,
      );}
  }
}

function addClassToCurrentBtn() {
  let btnsList = refs.paginationList.querySelectorAll('button');
  for (btn of btnsList) {
    if (Number(btn.textContent) === onClickPage) {
      btn.classList.add('active-btn');
    }
  }
}
