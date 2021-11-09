// import { getApiData } from '../api/api-service.js';
// import refs from '../refs/refs'
// import filmsTemplate from '../../partial/templates/film-cards.hbs'

// refs.searchFormEl.addEventListener('submit', onSearch)

// function onFetchByKeyword(keyword, page) {
//     let query = `/search/movie/?query=${keyword}&page=${page}`;
    
//     return getApiData(query).then
//         (result => {
//                return result;
//             },
//         )
// }

// function onSearch(e) {
//     e.preventDefault();
     
//     clearFilmsMarkup() 
//     const searchQuery = e.currentTarget.elements.query.value

//     if (searchQuery === '') {
//         alert('Веддите что-нибудь в строку поиска')
//         return
//     } onFetchByKeyword(searchQuery)
//         .then(result => {
//             if (result.results.length === 0) {
//                 alert ('Ничего не найдено, введите что-то людское =)')
//             } createFilmsList(result.results)
//         })
//         .catch(error => alert(error))
        
// }

// function clearFilmsMarkup () {
//     refs.galleryEl.innerHTML = ''
// }

// function createFilmsList(films) {
//     refs.galleryEl.insertAdjacentHTML('beforeend', filmsTemplate(films))
// }


