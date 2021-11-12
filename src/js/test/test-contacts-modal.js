// import { refs } from '../refs/refs';
import contactsArr from '../../contacts.json';
import contactsTmpl from '../../partial/templates/contacts-list.hbs';

const backdrop = document.querySelector('[data-modal]');
const contactsLink = document.querySelector('.js-students-contacts');
contactsLink.addEventListener('click', onContactsClick);

function onContactsClick() {
  backdrop.classList.remove('visually-hidden');
  console.log('click');
  console.log('contactsArr:', contactsArr.students);

  console.log(contactsTmpl(contactsArr.students));
}
