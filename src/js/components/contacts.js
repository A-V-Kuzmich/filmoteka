import { refs } from '../refs/refs.js';
import { openModalWindow } from './modal.js';
import contactsArr from '../../contacts.json';
import contactsTmpl from '../../partial/templates/contacts-list.hbs';
import sprite from '../../images/icon/sprite.svg';

const { contactsLink, modal, backdrop } = refs;

contactsLink.addEventListener('click', onContactsClick);

function onContactsClick() {
  openModalWindow(backdrop);
  document.querySelector('.modal__btns-list').classList.add('visually-hidden') 
  const list = contactsArr.students;
  modal.innerHTML = contactsTmpl({ list, sprite });
}
