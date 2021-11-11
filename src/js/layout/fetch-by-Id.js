import { getApiData } from '../api/api-service.js';
import makeModalFilm from '../../partial/templates/modal-film.hbs';

import openModalWindow from '../components/modal';

// --------- func for search by ID -------------
function fetchById(id) {
  let query = `/movie/${id}?`;
  return getApiData(query);
}

const filmList = document.querySelector('.films');

// const modal = document.querySelector('.modal'); // должна быть модалка
// console.log(modal);

filmList.addEventListener('click', onCardClick);

function onCardClick(e) {
  console.log(e);
  if (e.target.nodeName !== 'IMG') {
    console.log('exit');
    return;
  }
  console.log('not exit');

  let filmId = e.target.dataset.index; // id атрибут должен быть на елементе клика
  console.log('film id', filmId);

  fetchById(filmId).then(result => {
    console.log('film object', result);

    let modalContent = makeModalFilm(result);
    const targetEl = document.querySelector('body'); // должна быть модалка

    // modal.innerHTML = modalContent;
    targetEl.insertAdjacentHTML('afterbegin', modalContent);
    openModalWindow();
  });
}
