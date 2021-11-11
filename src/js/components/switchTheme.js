import { refs } from '../refs/refs.js'

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = theme;

let newTheme = localStorage.getItem('n-theme');
 if (!newTheme) {
    newTheme = LIGHT;
    localStorage.setItem('n-theme', LIGHT);

} else 
    document.querySelector('body').classList.add(newTheme);
 refs.checkBox.checked = newTheme === LIGHT ? false : true;




refs.checkBox.addEventListener('change', changeTheme);
    
function changeTheme(e) {
    document.querySelector('body').classList.toggle(DARK);
  
    document.querySelector('body').classList.toggle(LIGHT);

  localStorage.setItem('n-theme', e.target.checked? DARK :LIGHT);
}
