import { refs } from '../refs/refs';
import cardTemplate from '../../partial/templates/film-cards.hbs';
import { getFromLocalStorage } from './local-storage';
import { fetchById } from './fetch-by-Id';
import { createInnerMarkup } from './render-by-template';

const { queueBtn, watchedBtn, filmsEl, emptyListImg } = refs;

queueBtn.addEventListener('click', renderFromStorageArray('queue'));
watchedBtn.addEventListener('click', renderFromStorageArray('watched'));

export function renderFromStorageArray(keyName) {
  return function closureFunc() {
    if (!getFromLocalStorage(keyName) || getFromLocalStorage(keyName).length === 0) {
      emptyListImg.classList.remove('visually-hidden');
      filmsEl.innerHTML = '';
      return;
    }

    const storageArray = getFromLocalStorage(keyName);
    emptyListImg.classList.add('visually-hidden');

    const filmArray = [];

    storageArray.map(film =>
      fetchById(film).then(result => {
        result.release_date = result.release_date.slice(0, 4);
        filmArray.push(result);
        createInnerMarkup(filmsEl, cardTemplate(filmArray));
      }),
    );
  };
}
