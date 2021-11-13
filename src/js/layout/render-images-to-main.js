import { createInnerMarkup } from './render-by-template'
import { getApiData } from '../api/api-service'
import { getGenresFromLocalStorage } from './genre-local-storage'


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

export function exchangeObjectData(result) {
  result.results.forEach((obj) => {
    if (obj.genre_ids) {
    obj.genre_ids = getGenreNameById(obj.genre_ids)}
    if (obj.release_date) {
    obj.release_date = obj.release_date.slice(0, 4)
    }
    
  })
}

// let query = `/trending/movie/week?`; - example!
export function renderImages(query, element, template) {
  getApiData(query)
    .then(result => {
      exchangeObjectData(result);
      createInnerMarkup(element, template(result.results))
    }
  );
}
