import { refs } from '../refs/refs.js';
import { openModalWindow } from './modal.js';
import contactsArr from '../../contacts.json';
import contactsTmpl from '../../partial/templates/contacts-list.hbs';
import sprite from '../../images/icon/sprite.svg';

refs.contactsLink.addEventListener('click', onContactsClick);

// Handlebars.registerPartial('myPartial', '{{sprite}}');

function onContactsClick() {
  openModalWindow();
  // refs.modal.innerHTML = contactsTmpl(contactsArr.students);
  // console.log(contactsTmpl(contactsArr.students));
  console.log('sprite:', sprite);
  const list = contactsArr.students;
  console.log('list:', list);

  const markup = contactsTmpl({ list, sprite });
  refs.modal.innerHTML = '';
  refs.modal.insertAdjacentHTML('beforeend', markup);
}

const footer = document.querySelector('.footer__text');
footer.insertAdjacentHTML(
  'beforeend',
  `<svg class="git-icon" style="fill: black; outline: 2px dotted tomato;" width="32" height="32"><use href="${sprite}#icon-github"></use></svg><img style="outline: 3px dotted silver;"src="./images/icon/github-logo.png" alt="">`,
);
