import { getApiData } from '../api/api-service.js';
// import { createImagesMarkup } from './render-by-template';

import makeModalFilm from '../../partial/templates/modal-film.hbs';
import { openModalWindow } from '../components/modal.js';

import { addToQueue } from './add-to-queue';

// --------- func for search by ID -------------
function fetchById(id) {
  let query = `/movie/${id}?`;
  return getApiData(query);
}

const filmList = document.querySelector('.films');
// const modal = document.querySelector('.modal'); // должна быть модалка

filmList.addEventListener('click', onCardClick);

function onCardClick(e) {
  console.log(e);
  if (e.target.nodeName !== 'IMG') {
    // console.log('exit');
    return;
  }
  // console.log('not exit');

  const filmId = e.target.dataset.index; // id атрибут должен быть на елементе клика
  // console.log('film id', filmId);

  fetchById(filmId).then(result => {
    // console.log('film object', result);

    const modalContent = makeModalFilm(result);
    const targetEl = document.querySelector('body'); // должна быть модалка

    // modal.innerHTML = modalContent; // должна быть замена содержимого модалки при каждом открытии
    targetEl.insertAdjacentHTML('afterbegin', modalContent);

    // createImagesMarkup(targetEl, makeModalFilm, result);
    openModalWindow();

    const addBtn = document.querySelector('[data-queue]');
    // console.log(addBtn);

    addBtn.addEventListener('click', addToQueue);
  });
}
