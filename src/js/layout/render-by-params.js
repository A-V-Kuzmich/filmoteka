import imagesTpl from '../../partial/templates/film-cards.hbs'
// import { createImagesMarkup } from './render-by-template'
import { refs } from '../refs/refs'
// import { getApiData } from '../api/api-service'
import { getGenresFromLocalStorage } from './genre-local-storage'
import { renderImages } from './render-images-to-main'

function getGenreIdByName(name) {
  const queryGenre = getGenresFromLocalStorage().find(genre => {
    return genre.name === name[0].toUpperCase() + name.slice(1).toLowerCase()
  })
  return queryGenre.id
}

function sortByGenre(value) {
  const genreId = getGenreIdByName(value)
  let query = `/discover/movie?with_genres=${genreId}`;
  renderImages(query, refs.filmsEl, imagesTpl)

}
  
// function sortByParameter(parameter) {
//   let query = `/discover/movie?${parameter}`;
//   getApiData(query)
//     .then(result => {
//       refs.filmsEl.innerHTML = ''
//       createImagesMarkup(refs.filmsEl, imagesTpl, result.results)
//     });
// }

refs.filersDropdownEl.addEventListener('click', (evt) => {
  const isItem = evt.target.classList.contains('values__item')
  if (!isItem) {
    return
  }
  const textValue = evt.target.textContent
  sortByGenre(textValue)
})
  



// sortByGenre('War');
// sortByGenre('Action');
// sortByGenre('Comedy');
// sortByGenre('War');

// sortByParameter('sort_by=vote_average.desc')
// sortByParameter('sort_by=vote_average.asc')
// sortByParameter('sort_by=primary_release_data.desc')
// sortByParameter('sort_by=primary_release_data.asc')
// sortByParameter('primary_release_year=2010&sort_by=popularity.desc')
