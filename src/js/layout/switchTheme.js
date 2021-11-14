import { refs } from '../refs/refs.js';
import { setToLocalStorage, getFromLocalStorage } from './local-storage';

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = theme;

let newTheme = getFromLocalStorage('n-theme');

if (!newTheme) {
  newTheme = LIGHT;
  setToLocalStorage('n-theme', LIGHT);
} else document.querySelector('body').classList.add(newTheme);
// refs.clickBox.click = newTheme === LIGHT ? false : true;

// refs.clickBox.addEventListener('click', function () {
//   document.body.classList.toggle(DARK);
// });

refs.clickBox.addEventListener('click', changeTheme);

function changeTheme(e) {
  document.querySelector('body').classList.toggle(DARK);

  document.querySelector('body').classList.toggle(LIGHT);

  setToLocalStorage('n-theme', e.target.click ? DARK : LIGHT);
}
