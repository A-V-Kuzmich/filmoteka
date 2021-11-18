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


refs.filmsEl.addEventListener('click', onCardClick);

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

    createInnerMarkup(refs.modal, modalContent);
    openModalWindow(refs.backdrop);

    const openVideoBtn = document.querySelector('[data-modal="modal-video-btn"]');
    openVideoBtn.addEventListener('click', () => openVideo(id));

    const addToWatchedBtn = document.querySelector('[data-watched]');
    addToWatchedBtn.addEventListener('click', addToStorageArray('watched', 'watched'));
      })
}

refs.modalBtns.addEventListener ('click', onModalBtnsClick)

function onModalBtnsClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return
  } let cardsMassive = document.querySelectorAll('.films__item[data-id]')
    let currentFilmId = document.querySelector('.modal__elements[data-id]').dataset.id
    let nextFilmId;
    let previousFilmId;
    for (let i = 0; i < cardsMassive.length; i += 1) {
      if (currentFilmId === cardsMassive[i].dataset.id) {

        i < cardsMassive.length - 1 ? (nextFilmId = cardsMassive[i + 1].dataset.id) : (nextFilmId = cardsMassive[i].dataset.id)
        i > 0 ? (previousFilmId = cardsMassive[i - 1].dataset.id) : (previousFilmId = cardsMassive[i].dataset.id)
        
        if (e.target.classList.contains('js-modal-next-btn')) {
          fetchById(nextFilmId).then(result => {
            createInnerMarkup(refs.modal, makeModalFilm(result))
            document.querySelector('[data-modal="modal-video-btn"]').addEventListener('click', () => openVideo(nextFilmId))
            document.querySelector('[data-watched]').addEventListener('click', addToStorageArray('watched', 'watched'));
        })
      } if (e.target.classList.contains('js-modal-prev-btn')) {
          fetchById(previousFilmId).then(result => {
            createInnerMarkup(refs.modal, makeModalFilm(result))
            document.querySelector('[data-modal="modal-video-btn"]').addEventListener('click', () => openVideo(previousFilmId))
            document.querySelector('[data-watched]').addEventListener('click', addToStorageArray('watched', 'watched'));
        })
      }  
    }
  }
}


