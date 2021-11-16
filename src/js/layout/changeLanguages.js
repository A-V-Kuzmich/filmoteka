import { getApiData } from '../api/api-service';
import { createInnerMarkup } from './render-by-template';
import { exchangeObjectData } from './render-images-to-main';
import template from '../../partial/templates/film-cards.hbs';
import { refs } from '../refs/refs';

const langArrey = {
  'header-logo': {
    uk: 'Фільмотека',
    ru: 'Фильмотека',
    en: 'Filmoteka',
  },

  home: {
    uk: 'до дому',
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
    uk: 'НА ЧЕРЗІ',
    ru: 'В ОЧЕРЕДИ',
    en: 'QUEUE',
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
  for (let key in langArrey) {
    document.querySelector('.lng-' + key).innerHTML = langArrey[key][lang];
    let LG = lang;
    let query = `/trending/movie/week?page=1`;
    // element = refs.filmsEl

    getApiData(query, LG)
    .then(result => {
      exchangeObjectData(result);
      createInnerMarkup(refs.filmsEl, template(result.results))
    }
  );

  }
}

//Local Storage
// const lang = select.value
// function saveLocalLang(lang) {
//     let langs
//     if (localStorage.getItem(key,'langs') === null) {
//         langs = []
//     } else {
//         langs = JSON.parse(localStorage.getItem(key,'langs'))
//     }
//     langs.push(language)
//     localStorage.setItem('langs', JSON.stringify(langs))
// }

// changeLanguage();
