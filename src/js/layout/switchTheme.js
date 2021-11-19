import { refs } from '../refs/refs.js';
import { setToLocalStorage, getFromLocalStorage } from './local-storage';

const { clickBox, lightEl, bodySwitch } = refs;

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = theme;

let newTheme = getFromLocalStorage('n-theme');

if (!newTheme) {
  setToLocalStorage('n-theme', LIGHT);
} else {
  bodySwitch.classList.add(newTheme);
}

clickBox.addEventListener('click', changeTheme);
lightEl.addEventListener('click', changeTheme);

function changeTheme(e) {
  bodySwitch.classList.toggle(DARK);
  bodySwitch.classList.toggle(LIGHT);

  setToLocalStorage('n-theme', bodySwitch.classList.contains(DARK) ? DARK : LIGHT);
}
