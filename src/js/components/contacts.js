import { refs } from '../refs/refs.js';
import { openModalWindow } from './modal.js';
import contactsArr from '../../contacts.json';
import contactsTmpl from '../../partial/templates/contacts-list.hbs';
import sprite from '../../images/icon/sprite.svg';

refs.contactsLink.addEventListener('click', onContactsClick);

function onContactsClick() {
  openModalWindow();
  const list = contactsArr.students;
  refs.modal.innerHTML = contactsTmpl({ list, sprite });
}
