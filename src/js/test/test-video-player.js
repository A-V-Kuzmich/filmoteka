import { getApiData } from '../api/api-service.js';
import video from '../../partial/templates/video.hbs';
import { createInnerMarkup,cleanInnerMarkup } from '../layout/render-by-template';

const body = document.querySelector('body');
const container = document.querySelector('.modal-video');
const backdrop = document.querySelector('[data-modal="video"]');
const closeBtn = document.querySelector('[data-modal="close-video"]');
// const btnWatchUl = document.querySelector('');

function FetchVideo(id) {
   // const type = '&language=ru-RU'
   // let query = `/movie/${id}?${type}`;
    let query = `/movie/${id}?`;
    return getApiData(query).then(result => result);
  };

export function openVideo(id) {
  FetchVideo(id)
    .then(result => {
      const playlist = result.videos.results.map(value => value.key).join(',');
      createInnerMarkup(container, video(playlist));
      openModalWindow();
    });
};
//-----------no-scroll------------------------------------
function noScrollBody() {
  body.classList.toggle('no-scroll'); 
}
//-----------close------------------------------------
function openModalWindow() {
  backdrop.classList.remove('visually-hidden');
  window.addEventListener('keydown', onEscKeyPress);
  closeBtn.addEventListener('click', closeModalWindow);
  backdrop.addEventListener('click', closeToBackdrop);
  noScrollBody();
}
function closeToBackdrop(e) {
  if (e.target.className === 'backdrop') {
    closeModalWindow();
  }
}
function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModalWindow();
  }
}
function closeModalWindow() {
  backdrop.classList.add('visually-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  closeBtn.removeEventListener('click', closeToBackdrop);
  backdrop.removeEventListener('click', closeModalWindow);
  noScrollBody();
  cleanInnerMarkup(container);
}
//------------------------------------------------------------------