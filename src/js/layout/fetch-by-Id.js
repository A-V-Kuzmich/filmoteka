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
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  let filmId = e.target.dataset.index; // id атрибут должен быть на елементе клика
  fetchById(filmId).then(result => {
    backdrop.classList.remove('visually-hidden');
    const modalContent = makeModalFilm(result);

    createInnerMarkup(modal, modalContent);
    openModalWindow();
  });
}
