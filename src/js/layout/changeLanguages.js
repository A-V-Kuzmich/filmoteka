// import { langArrey } from "../components/translate";
const langArrey = {
    "header-logo": {
        "uk": "фільмотека",
        "ru": "фильмотека",
        "en": "filmoteka",
    },

    "home": {
        "uk": "до дому",
        "ru": "домой",
        "en": "home",
    },
    
    "my-libruary": {
        "uk": "моя бібліотека",
        "ru": "моя библиотека",
        "en": "my libruary",
    },    

};

const select = document.querySelector ('select');
select.addEventListener('change', changeLanguage);
function changeLanguage () {
    let hash = select.value;
    for (let key in langArrey) {
    document.querySelector('.lng-' + key).innerHTML = langArrey[key][hash];
}
    }
    

// changeLanguage();