import { refs } from '../refs/refs.js';
import { setToLocalStorage, getFromLocalStorage } from './local-storage';

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = theme;

let newTheme = getFromLocalStorage('n-theme');

if (!newTheme) {
  newTheme = theme.LIGHT;
  setToLocalStorage('n-theme', theme.LIGHT);
}

refs.clickBox.addEventListener('click', changeTheme);
refs.lightEl.addEventListener('click', changeTheme);

function changeTheme(e) {
  refs.bodySwitch.classList.toggle(theme.DARK);
  refs.bodySwitch.classList.toggle(theme.LIGHT);

  setToLocalStorage('n-theme', e.target ? theme.DARK : theme.LIGHT);
}
