import genresTpl from '../../partial/templates/genres-for-search.hbs';
import { getGenresFromLocalStorage } from './genre-local-storage';
import { createInnerMarkup } from './render-by-template';
import { refs } from '../refs/refs';

const { filtersGenreList, filtersGenreBox } = refs;

function renderFiltersGenreList() {
  const genresData = genresTpl(getGenresFromLocalStorage());
  createInnerMarkup(filtersGenreList, genresData);
  filtersGenreList.removeEventListener('mouseenter', renderFiltersGenreList);
}

filtersGenreBox.addEventListener('mouseenter', renderFiltersGenreList);
