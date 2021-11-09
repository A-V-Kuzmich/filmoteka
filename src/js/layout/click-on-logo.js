import onFetchAllMovies from '../../js/layout/fetch-week-movies.js';
import { refs } from '../refs/refs.js';

refs.logo.addEventListener('click', onClickLogo);

function onClickLogo(evt) {
  evt.preventDefault();

  onFetchAllMovies(2);
}
