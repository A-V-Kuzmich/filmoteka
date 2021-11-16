import { getApiData } from '../api/api-service.js';
import { createInnerMarkup } from './render-by-template';

import makeModalFilm from '../../partial/templates/modal-film.hbs';
import { openModalWindow } from '../components/modal.js';

import { refs } from '../refs/refs.js';
import { addToStorageArray } from './add-to-storage-array';
import { openVideo } from '../test/test-video-player.js';

// --------- func for search by ID -------------
export function fetchById(id) {
  let query = `/movie/${id}?`;
  return getApiData(query);
}

refs.filmsEl.addEventListener('click', onCardClick);

function onCardClick(e) {
  if (e.srcElement.className === 'film__trailer') {
    const id = e.path.find(num => num.className === 'films__item').dataset.id;
    openVideo(id);
  }
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  let filmId = e.target.dataset.index; // id атрибут должен быть на елементе клика
  fetchById(filmId).then(result => {
    result.popularity = result.popularity.toFixed(2);
    const modalContent = makeModalFilm(result);

    createInnerMarkup(refs.modal, modalContent);
    openModalWindow();

    const addToQueueBtn = document.querySelector('[data-queue]');
    addToQueueBtn.addEventListener('click', addToStorageArray('queue', 'queue'));

    const addToWatchedBtn = document.querySelector('[data-watched]');
    addToWatchedBtn.addEventListener('click', addToStorageArray('watched', 'watched'));
  });
}
