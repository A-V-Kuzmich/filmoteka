import { getApiData } from '../api/api-service.js';
import makeModalFilm from '../../partial/templates/modal-film.hbs';
// console.log(makeModalFilm);

// --------- func for search by ID -------------
function fetchById(id) {
  let query = `/movie/${id}?`;
  return getApiData(query);
}
// console.log(fetchById(560));
// fetchById(560).then(r => console.log(r));

const filmList = document.querySelector('.films');
// console.log(filmList);

const modal = document.querySelector('.container--main-geometry'); // должна быть модалка
// console.log(modal);

filmList.addEventListener('click', onCardClick);

function onCardClick(e) {
  console.log(e);
  if (e.target.nodeName !== 'UL') {
    //доблжно быть 'LI'
    console.log('exit');

    return;
  }
  console.log('not exit');
  let filmId = e.target.dataset.index; // id атрибут должен быть на li
  console.log(filmId);

  fetchById(filmId).then(res => {
    console.log(res);

    let modalContent = makeModalFilm(res);
    modal.innerHTML = modalContent;
  });
}
