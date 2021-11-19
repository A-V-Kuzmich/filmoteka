import { refs } from '../refs/refs'
import { fetchById } from '../layout/fetch-by-Id'
import { createInnerMarkup } from '../layout/render-by-template';
import { openVideo } from './video-player';
import { addToStorageArray } from '../layout/add-to-storage-array';
import makeModalFilm from '../../partial/templates/modal-film.hbs';

const { backdrop, modal} = refs;

backdrop.addEventListener('click', onModalBtnsClick)

function onModalBtnsClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return
  } let cardsMassive = document.querySelectorAll('.films__item[data-id]')
    let currentFilmId = document.querySelector('.modal__elements[data-id]').dataset.id
    for (let i = 0; i < cardsMassive.length; i += 1) {
      if (currentFilmId === cardsMassive[i].dataset.id) {
        let nextFilmId;
        let previousFilmId;
        
        i < cardsMassive.length - 1 ? (nextFilmId = cardsMassive[i + 1].dataset.id) : (nextFilmId = cardsMassive[i].dataset.id)
        i > 0 ? (previousFilmId = cardsMassive[i - 1].dataset.id) : (previousFilmId = cardsMassive[i].dataset.id)
        
        if (e.target.classList.contains('js-modal-next-btn')) {
          fetchById(nextFilmId).then(result => {
            createInnerMarkup(modal, makeModalFilm(result))
            document.querySelector('[data-modal="modal-video-btn"]').addEventListener('click', () => openVideo(nextFilmId))
            document.querySelector('[data-watched]').addEventListener('click', addToStorageArray('watched', 'watched'));
        })
      } if (e.target.classList.contains('js-modal-prev-btn')) {
          fetchById(previousFilmId).then(result => {
            createInnerMarkup(modal, makeModalFilm(result))
            document.querySelector('[data-modal="modal-video-btn"]').addEventListener('click', () => openVideo(previousFilmId))
            document.querySelector('[data-watched]').addEventListener('click', addToStorageArray('watched', 'watched'));
        })
      }  
    }
  }
}

