modal = document.querySelector('[data-modal]');
openModalBtn = document.querySelector('[data-modal-open]');
closeModalBtn = document.querySelector('[data-modal-close]');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}
