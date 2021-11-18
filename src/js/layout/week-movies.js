import { refs } from '../refs/refs';
import { checkBtnOpacity, qweryPagination } from './pagination';
import { cleanInnerMarkup } from './render-by-template';
import { renderImages } from './pagination';
import filmsTemplate from '../../partial/templates/film-cards.hbs';

document.addEventListener('DOMContentLoaded', onFetchAllMovies());

export function onFetchAllMovies() {
  cleanInnerMarkup(refs.filmsEl);
  cleanInnerMarkup(refs.paginationBtnList);
  const searchQuery = `/trending/movie/week?`;
  renderImages(searchQuery, refs.filmsEl, filmsTemplate);
  qweryPagination(searchQuery);
  checkBtnOpacity();
}
