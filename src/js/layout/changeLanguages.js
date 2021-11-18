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
    changePlaceholder();
  }
}

//==================================placeholder=========
function changePlaceholder() {
  const changLangs = {
    uk: 'Пошук фільмів за назвою',
    ru: 'Поиск фильмов за названием',
    en: 'Search movies by name',
  };
  if (select.value === "ru") {
    document.querySelector('.lng-input').placeholder = `${changLangs.ru}`;
  }
  if (select.value === "uk") {
    document.querySelector('.lng-input').placeholder = `${changLangs.uk}`;
  }
  if (select.value === "en") {
    document.querySelector('.lng-input').placeholder = `${changLangs.en}`;
  }
}