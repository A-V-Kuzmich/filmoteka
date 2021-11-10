import imagesTpl from '../../partial/templates/film-cards.hbs'
import { createImagesMarkup } from './render-by-template'
import { refs } from '../refs/refs'
import { getApiData } from '../api/api-service'
import { getGenresFromLocalStorage } from './genre-local-storage'


function getGenreNameById(genreIds) {
  let newArray = []
  genreIds.forEach(genreId => {
    const array = getGenresFromLocalStorage().map(genre =>{
      if (genre.id === genreId) {
        newArray.push(genre.name)
      }
    })
  })
  return newArray
}

// let query = `/trending/movie/week?`; - example!
export function renderImagesToMain(query) {
  getApiData(query)
    .then(result => {
      result.results.forEach((obj) => {
        obj.genre_ids = getGenreNameById(obj.genre_ids)
        obj.release_date = obj.release_date.slice(0,4)
      })
      refs.filmsEl.innerHTML = ''
      createImagesMarkup(refs.filmsEl, imagesTpl, result.results)
    });
}