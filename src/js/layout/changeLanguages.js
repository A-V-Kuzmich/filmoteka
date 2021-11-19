import { refs } from '../refs/refs';
import { onFetchAllMovies } from './week-movies';
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
  footer: {
    uk: '2021 | Всі права захищені | Зроблено з',
    ru: '2021 | Все права защищены | Сделано с',
    en: '2021 | All Rights Reserved | Developed with',
  },
  // 'goit': {
  //   uk: 'Студентами GoIT',
  //   ru: 'Студентами GoIT',
  //   en: 'GoIT Students',
  // },
};

const { select, filmsEl } = refs;
select.addEventListener('change', changeLanguage);

function changeLanguage() {
  let lang = select.value;
  filmsEl.dataset.lang = select.value;
  for (let key in langArrey) {
    document.querySelector('.lng-' + key).textContent = langArrey[key][lang];
  }
  setGenresToLocalStorage();
  onFetchAllMovies(1);
  changePlaceholder();
}

//==================================placeholder=========
function changePlaceholder() {
  const changLangs = {
    uk: 'Пошук фільмів за назвою',
    ru: 'Поиск фильмов за названием',
    en: 'Search movies by name',
  };

  const a = document.querySelector('.lng-input').placeholder;
  if (select.value === 'ru') {
    document.querySelector('.lng-input').placeholder = `${changLangs.ru}`;
  }
  if (select.value === 'uk') {
    document.querySelector('.lng-input').placeholder = `${changLangs.uk}`;
  }
  if (select.value === 'en') {
    document.querySelector('.lng-input').placeholder = `${changLangs.en}`;
  }
}

// function changeBtnModal () {
//   document.getElementById('lng-btn').textContent = langArrey[key][lang];
//   console.log(document.getElementById('lng-btn').textContent);
// };
// changeBtnModal();
