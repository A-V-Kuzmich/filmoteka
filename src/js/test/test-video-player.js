import { getApiData } from '../api/api-service.js';
import video from '../../partial/templates/video.hbs';
import { createInnerMarkup } from '../layout/render-by-template';

const body = document.querySelector('body');
const container = document.querySelector('.modal-video');
const backdrop = document.querySelector('[data-modal="video"]');
const closeBtn = document.querySelector('[data-modal="close-video"]');

function onFetchById(id) {
    const type = 'images,videos&language=ru-RU'
    const value = '&append_to_response='
    let query = `/movie/${id}?${value}${type}`;
  
    return getApiData(query).then(result => result);
  };
let movieId = 370172;
  
onFetchById(movieId)
  .then(result => {
  console.log(result)
  createInnerMarkup(container, video(result.videos.results[0].key));
  openModalWindow();
  });
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
}
//------------------------------------------------------------------