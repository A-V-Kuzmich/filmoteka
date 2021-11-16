import genresTpl from '../../partial/templates/genres-for-search.hbs'
import { getGenresFromLocalStorage } from './genre-local-storage'
import { createInnerMarkup } from './render-by-template'
import { refs } from '../refs/refs'
 
function renderFiltersGenreList() {
  const genresData = genresTpl(getGenresFromLocalStorage());
  createInnerMarkup(refs.filtersGenreList, genresData)
  refs.filtersGenreList.removeEventListener('mouseenter', renderFiltersGenreList )
}

refs.filtersGenreBox.addEventListener('mouseenter', renderFiltersGenreList)