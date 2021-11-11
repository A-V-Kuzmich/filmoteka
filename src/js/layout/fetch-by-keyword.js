import { getApiData } from '../api/api-service.js';
import { refs } from '../refs/refs'
import filmsTemplate from '../../partial/templates/film-cards.hbs'
import { createInnerMarkup } from './render-by-template'
import { alertEnterQuery } from '../components/notifications'
import { alertNothingIsFound } from '../components/notifications'
import { exchangeObjectData } from './render-images-to-main'

refs.searchFormEl.addEventListener('submit', onSearch)
const pagination = document.querySelector('#pagination')


function onFetchByKeyword(keyword, page) {
    let query = `/search/movie/?query=${keyword}&page=${page}`;
    clearMarkup(pagination)
    clearMarkup(refs.filmsEl)
    return getApiData(query).then
        (result => {
            return result;
        },
        )
}

function onSearch(e) {
    e.preventDefault();

    const searchQuery = e.currentTarget.elements.query.value

    if (searchQuery === '') {
        alertEnterQuery()
        return
    } onFetchByKeyword(searchQuery)
        .then(response => {
            if (response.results.length === 0) {
                alertNothingIsFound()
            } exchangeObjectData(response)
            createInnerMarkup(refs.filmsEl, filmsTemplate(response.results))
        })
}

function clearMarkup(element) {
   element.innerHTML = ''
}


