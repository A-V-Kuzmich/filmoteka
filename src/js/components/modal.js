const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.backdrop'),
};
  


refs.openModalBtn.addEventListener('click', openModalWindow);
refs.closeModalBtn.addEventListener('click', closeModalWindow);
refs.backdrop.addEventListener('click', closeToBackdrop);

function openModalWindow(e) {
  refs.modal.classList.remove('visually-hidden');
  window.addEventListener('keydown', onEscKeyPress);
}

function closeToBackdrop(e) {
  if (e.target.className === 'backdrop') {
    closeModalWindow();
  }
}

function closeModalWindow() {
  refs.modal.classList.add('visually-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModalWindow();
  }
}
