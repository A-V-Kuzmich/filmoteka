import { refs } from '../refs/refs.js';

export function openModalWindow() {
  refs.backdrop.classList.remove('visually-hidden');
  window.addEventListener('keydown', onEscKeyPress);
  document.querySelector('[data-modal="close"]').addEventListener('click', closeModalWindow);
  document.querySelector('[data-modal="backdrop"]').addEventListener('click', closeToBackdrop);
  // refs.closeModalBtn.addEventListener('click', closeModalWindow);
  // refs.backdrop.addEventListener('click', closeToBackdrop);
}

function closeToBackdrop(e) {
  if (e.target.className === 'backdrop') {
    closeModalWindow();
  }
}

function closeModalWindow() {
  refs.backdrop.classList.add('visually-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  refs.closeModalBtn.removeEventListener('click', closeToBackdrop);
  refs.backdrop.removeEventListener('click', closeModalWindow);
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModalWindow();
  }
}
