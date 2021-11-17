import { refs } from '../refs/refs';
import { onFetchAllMovies } from './fetch-by-keyword';
import { setGenresToLocalStorage } from './genre-local-storage';

const langArrey = {
  'header-logo': {
    uk: 'Фільмотека',
    ru: 'Фильмотека',
    en: 'Filmoteka',
  },

  home: {
    uk: 'головна',
    ru: 'домой',
    en: 'home',
  },

  'my-libruary': {
    uk: 'моя бібліотека',
    ru: 'моя библиотека',
    en: 'my libruary',
  },

  watched: {
    uk: 'ПЕРЕГЛЯНУТІ',
    ru: 'ПРОСМОТРЕННЫЕ',
    en: 'WATCHED',
  },
  queue: {
    uk: 'В ЧЕРЗІ',
    ru: 'В ОЧЕРЕДИ',
    en: 'QUEUE',
  },
  input: {
    uk: 'пошук',
    ru: 'ПРОСМОТРЕННЫЕ',
    en: 'WATCHED',
  },
  // "vote": {
  //     "uk": "Рейтинг/Голоси",
  //     "ru": "Рейтинг/Голоса",
  //     "en": "Vote/Votes",
  // },
  // "add-watched": {
  //     "uk": "Додати переглянуті",
  //     "ru": "Дополнить просмотренные",
  //     "en": "Add-watched",
  // },
  right: {
    uk: '&#169; 2020 | Всі Права Захищені | Зроблено Студентами GоIT',
    ru: '&#169; 2020 | Все Права Защищены | Сделано Студентами GоIT',
    en: "&#169; 2020 | All Rights Reserved | Developed by GoIT Student's",
  },
};

const select = document.querySelector('select');
select.addEventListener('change', changeLanguage);
function changeLanguage() {
  let lang = select.value;

  refs.filmsEl.dataset.lang = select.value;

  for (let key in langArrey) {
    document.querySelector('.lng-' + key).textContent = langArrey[key][lang];
    setGenresToLocalStorage();
    onFetchAllMovies(1);
  
  }
}

// console.dir(document.querySelector('.header__form-input'))
