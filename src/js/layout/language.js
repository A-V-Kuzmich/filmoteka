import { refs } from '../refs/refs';
import { setGenresToLocalStorage } from './genre-local-storage';
import { setToLocalStorage} from './local-storage';
import { returnToMain} from '../layout/header'

import headerLng from '../../data/header.json'
import mainLng from '../../data/main.json'

const { select, filmsEl } = refs;

select.addEventListener('change', changeLanguage);

export function changeLanguage() {
  let lang = select.value;
  setToLocalStorage('lang', lang)

  filmsEl.dataset.lang = select.value;
  for (let key in headerLng) {
    document.querySelector('.lng-' + key).textContent = headerLng[key][lang];
  }
  changePlaceholder();
  setGenresToLocalStorage();
  returnToMain()
}

function changePlaceholder() {
  switch (select.value) {
    case "ru":
      document.querySelector('.lng-year').placeholder = `${mainLng.yearInput.ru}`;
      document.querySelector('.lng-input').placeholder = `${mainLng.mainInput.ru}`;
      break
    case "uk":
      document.querySelector('.lng-year').placeholder = `${mainLng.yearInput.uk}`;
      document.querySelector('.lng-input').placeholder = `${mainLng.mainInput.uk}`;
      break;
    case "en":
      document.querySelector('.lng-year').placeholder = `${mainLng.yearInput.en}`;
      document.querySelector('.lng-input').placeholder = `${mainLng.mainInput.en}`;
      break
  }
}

export function changeModalLanguage() {
    const watchedBtn = document.querySelector('.lng-modal-watched')
    const queueBtn = document.querySelector('.lng-modal-queue')
    const popularity = document.querySelector('.lng-modal-popularity')
    const genres = document.querySelector('.lng-modal-genres')
    const votes = document.querySelector('.lng-modal-votes')
    const title = document.querySelector('.lng-modal-title')
    const about = document.querySelector('.lng-modal-about')

  switch (select.value) {
    case "ru":
      watchedBtn.textContent = `${mainLng.modalWatched.ru}`;
      queueBtn.textContent = `${mainLng.modalQueue.ru}`;
      popularity.textContent = `${mainLng.popularity.ru}`;
      genres.textContent = `${mainLng.genres.ru}`;
      votes.textContent = `${mainLng.votes.ru}`;
      title.textContent = `${mainLng.title.ru}`;
      about.textContent = `${mainLng.about.ru}`;
      break;
    case "uk":
      watchedBtn.textContent = `${mainLng.modalWatched.uk}`;
      queueBtn.textContent = `${mainLng.modalQueue.uk}`;
      popularity.textContent = `${mainLng.popularity.uk}`;
      genres.textContent = `${mainLng.genres.uk}`;
      votes.textContent = `${mainLng.votes.uk}`;
      title.textContent = `${mainLng.title.uk}`;
      about.textContent = `${mainLng.about.uk}`;
      break
  }
}
