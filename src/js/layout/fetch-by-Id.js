import { getApiData } from '../api/api-service.js';
import { createInnerMarkup } from './render-by-template';

import makeModalFilm from '../../partial/templates/modal-film.hbs';
import { openModalWindow } from '../components/modal.js';

import { refs } from '../refs/refs.js';
import { addToQueue } from './add-to-queue';

// --------- func for search by ID -------------
function fetchById(id) {
  let query = `/movie/${id}?`;
  return getApiData(query);
}

refs.filmsEl.addEventListener('click', onCardClick);

function onCardClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  let filmId = e.target.dataset.index; // id атрибут должен быть на елементе клика
  fetchById(filmId).then(result => {
    const modalContent = makeModalFilm(result);

    createInnerMarkup(refs.modal, modalContent);
    openModalWindow();

    const addBtn = document.querySelector('[data-queue]');
    // console.log(addBtn);

    addBtn.addEventListener('click', addToQueue);
  });
}
