import imagesTpl from '../../partial/templates/film-cards.hbs'
import { createImagesMarkup } from './render-by-template'
import { refs } from '../refs/refs'
import { getApiData } from '../api/api-service'
import { getGenresFromLocalStorage } from './local-storage'

function getGenreIdByName(name) {
  const queryGenre = getGenresFromLocalStorage().find(genre => genre.name === name)
  return queryGenre.id
}
// getGenreIdByName('Crime')

function getGenreNameById(id) {
  const queryGenre = getGenresFromLocalStorage().find(genre => genre.id === id)
  return queryGenre.name
}

// getGenreNameById(12)

function sortByGenre(value) {
  const genreId = getGenreIdByName(value)
    let query = `/discover/movie?with_genres=${genreId}`;
    getApiData(query)
      .then(result => {
        console.log(result);
        createImagesMarkup(refs.filmsEl, imagesTpl, result.results)
      });
  }
  
function sortByParameter(parameter) {
    let query = `/discover/movie?${parameter}`;
    getApiData(query)
      .then(result => {
        console.log(result);
        createImagesMarkup(refs.filmsEl, imagesTpl, result.results)
      });
  }

  



// sortByGenre('War');
// sortByGenre('Action');
// sortByGenre('Comedy');
// sortByGenre('War');

// sortByParameter('sort_by=vote_average.desc')
// sortByParameter('sort_by=vote_average.asc')
// sortByParameter('sort_by=primary_release_data.desc')
// sortByParameter('sort_by=primary_release_data.asc')
// sortByParameter('primary_release_year=2010&sort_by=popularity.desc')





  
