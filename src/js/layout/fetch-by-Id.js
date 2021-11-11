import { getApiData } from '../api/api-service.js';
import makeModalFilm from '../../partial/templates/modal-film.hbs';

// import addToQueue from './add-to-queue.js';
// console.log(addToQueue);
import openModalWindow from '../components/modal';
// console.log(makeModalFilm);

// --------- func for search by ID -------------
function fetchById(id) {
  let query = `/movie/${id}?`;
  return getApiData(query);
}
// console.log(fetchById(560));
// fetchById(560).then(r => console.log(r));

const filmList = document.querySelector('.films');
// console.log(filmList);

// const modal = document.querySelector('.modal'); // должна быть модалка
// console.log(modal);

filmList.addEventListener('click', onCardClick);

function onCardClick(e) {
  console.log(e);
  if (e.target.nodeName !== 'IMG') {
    //доблжно быть 'LI'
    console.log('exit');

    return;
  }
  console.log('not exit');

  let filmId = e.target.dataset.index; // id атрибут должен быть на li
  console.log(filmId);

  fetchById(filmId).then(res => {
    console.log(res);

    let modalContent = makeModalFilm(res);

    const modal = document.querySelector('body'); // должна быть модалка

    // modal.innerHTML = modalContent;
    modal.insertAdjacentHTML('afterbegin', modalContent);
    openModalWindow();

    const addBtn = document.querySelector('[data-add]');
    console.log(addBtn);

    addBtn.addEventListener('click', addToQueue);
  });
}

// function addToQueue(e) {
//   console.log(e);

//   localStorage.setItem(key, JSON.stringify(data));
// }
