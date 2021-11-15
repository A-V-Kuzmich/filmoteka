import { refs } from '../refs/refs';
import cardTemplate from '../../partial/templates/film-cards.hbs';
import { getFromLocalStorage } from './local-storage';
import { fetchById } from './fetch-by-Id';
import { createInnerMarkup } from './render-by-template';

refs.queueBtn.addEventListener('click', renderFromStorageArray('queue'));
refs.watchedBtn.addEventListener('click', renderFromStorageArray('watched'));

export function renderFromStorageArray(keyName) {
  return function closureFunc() {
    if (!getFromLocalStorage(keyName)) {
      console.log('no array');
      //нотификация о том, что список ${keyName} пуст
      return;
    }

    const storageArray = getFromLocalStorage(keyName);
    console.log('storageArray', storageArray);

    const filmArray = [];

    storageArray.map(
      film =>
        fetchById(film).then(result => {
          result.release_date = result.release_date.slice(0, 4);
          filmArray.push(result);
          createInnerMarkup(refs.filmsEl, cardTemplate(filmArray));
        }),
      console.log(filmArray),
    );
  };
}
