import { getApiData } from '../api/api-service.js';
import { createInnerMarkup } from './render-by-template';

import makeModalFilm from '../../partial/templates/modal-film.hbs';
import { openModalWindow } from '../components/modal.js';

import { refs } from '../refs/refs.js';
import { addToStorageArray } from './add-to-storage-array';

// --------- func for search by ID -------------
export function fetchById(id) {
  let query = `/movie/${id}?`;
  return getApiData(query);
}


refs.filmsEl.addEventListener('click', onCardClick);

function onCardClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  let filmId = e.target.dataset.index; // id атрибут должен быть на елементе клика
  fetchById(filmId).then (result => {
        result.popularity = result.popularity.toFixed(2);
        const modalContent = makeModalFilm(result);

        createInnerMarkup(refs.modal, modalContent);
        openModalWindow();

        const addToQueueBtn = document.querySelector('[data-queue]');
        addToQueueBtn.addEventListener('click', addToStorageArray('queue', 'queue'));

        const addToWatchedBtn = document.querySelector('[data-watched]');
        addToWatchedBtn.addEventListener('click', addToStorageArray('watched', 'watched'));
      })
}

refs.modalBtns.addEventListener ('click', onModalBtnsClick)

function onModalBtnsClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return
  } let cardsMassive = document.querySelectorAll('img[data-index]')
    let currentFilmId = document.querySelector('.modal__elements[data-id]').dataset.id
    let nextFilmId;
    let previousFilmId;
    for (let i = 0; i < cardsMassive.length; i += 1) {
      if (currentFilmId === cardsMassive[i].dataset.index) {
        i < cardsMassive.length - 1 ? (nextFilmId = cardsMassive[i + 1].dataset.index) : (nextFilmId = cardsMassive[i].dataset.index)
        i > 0 ? (previousFilmId = cardsMassive[i - 1].dataset.index) : (previousFilmId = cardsMassive[i].dataset.index)
        if (e.target.classList.contains('js-modal-next-btn')) {
          fetchById(nextFilmId).then(result => {
          createInnerMarkup(refs.modal, makeModalFilm(result))
        })
      } if (e.target.classList.contains('js-modal-prev-btn')) {
          fetchById(previousFilmId).then(result => {
          createInnerMarkup(refs.modal, makeModalFilm(result))
        })
      }
    }
  }
}
