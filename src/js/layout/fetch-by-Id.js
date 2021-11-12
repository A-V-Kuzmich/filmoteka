import { getApiData } from '../api/api-service.js';
import { createInnerMarkup } from './render-by-template';

import makeModalFilm from '../../partial/templates/modal-film.hbs';
import { openModalWindow } from '../components/modal.js';

// --------- func for search by ID -------------
function fetchById(id) {
  let query = `/movie/${id}?`;
  return getApiData(query);
}

const filmList = document.querySelector('.films');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');

filmList.addEventListener('click', onCardClick);

function onCardClick(e) {
  console.log(e);
  if (e.target.nodeName !== 'IMG') {
    // console.log('exit');
    return;
  }
  // console.log('not exit');

  let filmId = e.target.dataset.index; // id атрибут должен быть на елементе клика
  console.log('film id', filmId);

  fetchById(filmId).then(result => {
    // console.log('film object', result);

    backdrop.classList.remove('visually-hidden');

    const modalContent = makeModalFilm(result);
    // const targetEl = document.querySelector('body'); // должна быть модалка

    // modal.innerHTML = modalContent; // должна быть замена содержимого модалки при каждом открытии
    // modal.insertAdjacentHTML('afterbegin', modalContent);

    createInnerMarkup(modal, modalContent);
    openModalWindow();
  });
}
