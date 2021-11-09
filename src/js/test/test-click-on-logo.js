const logo = document.querySelector('.js-logo');
const movieGallery = document.querySelector('.films');

import filmCardTmpl from '../../partial/templates/film-cards.hbs';
import onFetchAllMovies from '../../js/layout/fetch-week-movies.js';

logo.addEventListener('click', onClickLogo);

function onClickLogo(evt) {
  evt.preventDefault();

  onFetchAllMovies(1);
  //   // console.log('click on Logo');
  //   onFetchAllMovies(3)
  //     .then(res => console.log(res))
  //     .then(makeGalleryMarkup);
}

// function makeGalleryMarkup(movies) {
//   movieGallery.innerHTML = filmCardTmpl(movies);
// }
