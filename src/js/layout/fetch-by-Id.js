import { getApiData } from '../api/api-service.js';
import { createInnerMarkup } from './render-by-template';

import makeModalFilm from '../../partial/templates/modal-film.hbs';
import { openModalWindow } from '../components/modal.js';

import { refs } from '../refs/refs.js';
import { addToStorageArray } from './add-to-storage-array';
import { openVideo } from '../components/video-player';

// --------- func for search by ID -------------
export function fetchById(id) {
  let query = `/movie/${id}?`;
  return getApiData(query);
}

const { filmsEl, modal, backdrop } = refs;

filmsEl.addEventListener('click', onCardClick);

//---------click tracking function----------------
function onCardClick(e) {
  switch (e.srcElement.className) {
    case 'film__trailer':
      openVideo(getId(e));
      break;
    case 'film__trailer-img':
      openVideo(getId(e));
      break;
    case 'films':
      break;
    default:
      openModalCard(getId(e));
  }
}
//-----------getting an ID card------------------------
function getId(e) {
  return e.path.find(num => num.className === 'films__item').dataset.id;
}
//---------opening a modal window---------------------
function openModalCard(filmId) {
  fetchById(filmId).then(result => {
    const id = filmId;
    result.popularity = result.popularity.toFixed(2);
    const modalContent = makeModalFilm(result);

    createInnerMarkup(modal, modalContent);
    openModalWindow(backdrop);

    const openVideoBtn = document.querySelector('[data-modal="modal-video-btn"]');
    openVideoBtn.addEventListener('click', () => openVideo(id));

    // const addToQueueBtn = document.querySelector('[data-queue]');
    modal.addEventListener('click', addToStorageArray('queue', 'queue'));

    // const addToWatchedBtn = document.querySelector('[data-watched]');
    modal.addEventListener('click', addToStorageArray('watched', 'watched'));
  });
}
