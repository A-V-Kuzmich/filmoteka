import { getApiData } from '../api/api-service.js';
import { createInnerMarkup } from './render-by-template';
import { changeModalLanguage } from './language.js';
import makeModalFilm from '../../partial/templates/modal-film.hbs';
import { openModalWindow } from '../components/modal.js';
import { refs } from '../refs/refs.js';
import { addToStorageArray } from './add-to-storage-array';
import { openVideo } from '../components/video-player';

const { filmsEl, modal, backdrop } = refs;

// --------- func for search by ID -------------
export function fetchById(id) {
  let query = `/movie/${id}?`;
  return getApiData(query);
}

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
    result.popularity = result.popularity.toFixed(2);
    const modalContent = makeModalFilm(result);

    createInnerMarkup(modal, modalContent);
    openModalWindow(backdrop);

    const addToQueueBtn = document.querySelector('[data-queue]');
    addToQueueBtn.addEventListener('click', addToStorageArray('queue', 'queue'));

    const addToWatchedBtn = document.querySelector('[data-watched]');
    addToWatchedBtn.addEventListener('click', addToStorageArray('watched', 'watched'));

    changeModalLanguage();
  });
}
