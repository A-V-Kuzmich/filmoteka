import { getApiData } from '../api/api-service.js';
import { refs } from '../refs/refs'
import filmsTemplate from '../../partial/templates/film-cards.hbs'
import { createInnerMarkup } from './render-by-template'
import { alertEnterQuery } from '../components/notifications'
import { alertNothingIsFound } from '../components/notifications'

refs.searchFormEl.addEventListener('submit', onSearch)

function onFetchByKeyword(keyword, page) {
    let query = `/search/movie/?query=${keyword}&page=${page}`;
    
    return getApiData(query).then
        (result => {
               return result;
            },
        )
}

function onSearch(e) {
    e.preventDefault();
     
    clearFilmsMarkup() 
    const searchQuery = e.currentTarget.elements.query.value

    if (searchQuery === '') {
        alertEnterQuery()
        return
    } onFetchByKeyword(searchQuery)
        .then(response => {
            if (response.results.length === 0) {
                alertNothingIsFound()
            } createInnerMarkup(refs.filmsEl,  filmsTemplate(response.results))
        }) 
}

function clearFilmsMarkup () {
    refs.filmsEl.innerHTML = ''
}



