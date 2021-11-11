import Notiflix from 'notiflix';

function showWarningNotify(text) {
  Notiflix.Notify.warning(text);
}

function showFailureNotify(text) {
  Notiflix.Notify.failure(text);
}

export function onFetchError(error) {
  console.log('Something went wrong.\r\n(Status code: ' + error.response.status + ')');
  showFailureNotify('Something went wrong.\r\n(Error code: ' + error.response.status + ')');
}

export function alertEnterQuery() {
  showWarningNotify('Please, type your search');
}

export function alertNothingIsFound() {
  showWarningNotify('No movie titles found');
}

// settings
Notiflix.Notify.init({
  width: '240px',
  position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '20px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 3000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: true,
  pauseOnHover: true,

  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  fontFamily: 'Quicksand',
  fontSize: '14px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'from-top', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
  fontAwesomeIconSize: '34px',
  warning: {
    background: '#ff6b08',
    textColor: '#fff',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(255,255,255,0.9)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
  failure: {
    background: '#f00',
    textColor: '#fff',
    childClassName: 'notiflix-notify-failure',
    notiflixIconColor: 'rgba(255,255,255,0.9)',
    fontAwesomeClassName: 'fas fa-times-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(255,85,73,0.2)',
  },
  info: {
    background: '#26c0d3',
    textColor: '#fff',
    childClassName: 'notiflix-notify-info',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-info-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(38,192,211,0.2)',
  },
});
