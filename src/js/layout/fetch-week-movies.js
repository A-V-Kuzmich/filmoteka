import { getApiData } from '../api/api-service.js';
import { createImagesMarkup } from './render-by-template'
import imagesTpl from '../../partial/templates/film-cards.hbs'
import { refs } from '../refs/refs'

// --------- func for Main page and for Pagination -------------
export default function onFetchAllMovies(page) {
  let query = `/trending/movie/week?page=${page}`;

  return getApiData(query).then(result => {
    createImagesMarkup(refs.filmsEl, imagesTpl, result.results)
  });
}

onFetchAllMovies(1)