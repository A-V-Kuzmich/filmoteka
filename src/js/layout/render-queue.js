import { refs } from '../refs/refs';
import cardTemplate from '../../partial/templates/film-cards.hbs';
import { getFromLocalStorage } from './local-storage';
import { fetchById } from './fetch-by-Id';
import { createInnerMarkup } from './render-by-template';

refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onQueueBtnClick() {
  const queueArray = getFromLocalStorage('queue');
  console.log('queueArray', queueArray);

  let filmArray = [];

  queueArray.map(
    film =>
      fetchById(film).then(result => {
        result.release_date = result.release_date.slice(0, 4);
        filmArray.push(result);
        createInnerMarkup(refs.filmsEl, cardTemplate(filmArray));
      }),
    console.log(filmArray),
  );
}
