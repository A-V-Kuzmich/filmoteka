import { getApiData } from '../api/api-service.js';
import modalTmpl from '../../partial/templates/modal-film.hbs';
import { openModalWindow } from '../components/modal.js';
import { createInnerMarkup } from '../layout/render-by-template.js';

let movieId = 56896;

const testField = document.querySelector('.modal');
const headerField = document.querySelector('.header');
headerField.insertAdjacentHTML(
  'afterbegin',
  '<button class="btn-test">!!!!!!!BUTTON ON MODAL Size Chose !!!!!!</button>',
);
const backdropTest = document.querySelector('.backdrop');
const btnRef = document.querySelector('.btn-test');
btnRef.addEventListener('click', () => {
  onFetchById(movieId).then(renderCard);
});

function onFetchById(id) {
  let query = `/movie/${id}?`;
  return getApiData(query).then(result => result);
}

function renderCard(card) {
  backdropTest.classList.remove('visually-hidden');
  let markup = modalTmpl(card);
  createInnerMarkup(testField, markup);
  openModalWindow();
}
