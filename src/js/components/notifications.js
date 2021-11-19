import Notiflix from 'notiflix';

export function showNotify(key, text) {
  Notiflix.Notify[key](text);
}

export function onFetchError(error) {
  showNotify('failure', 'Something went wrong.\r\n(Error code: ' + error.response.status + ')');
}

export function alertEnterQuery() {
  showNotify('warning', 'Please, type your search');
}

export function alertNothingIsFound() {
  showNotify('warning', 'No movie titles found');
}

// settings
Notiflix.Notify.init({
  width: '240px',
  position: 'center-top',
  distance: '20px',
  timeout: 3000,
  showOnlyTheLastOne: false,
  clickToClose: true,
  pauseOnHover: true,
  fontSize: '14px',

  warning: {
    background: '#ff6b08',
    notiflixIconColor: 'rgba(255,255,255,0.9)',
  },
  failure: {
    background: '#f00',
    notiflixIconColor: 'rgba(255,255,255,0.9)',
  },
  success: {
    background: '#32c682',
    notiflixIconColor: 'rgba(255,255,255,0.9)',
  },
  info: {
    background: '#26c0d3',
    notiflixIconColor: 'rgba(255,255,255,0.9)',
  },
});
