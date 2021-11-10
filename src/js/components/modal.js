import refs from "../refs/refs"

// const { openModalBtn } = refs
  
// openModalBtn.addEventListener('click', openModalWindow);

export function openModalWindow() {
const {closeModalBtn, backdrop} = refs
  // modal.classList.remove('visually-hidden');
  window.addEventListener('keydown', onEscKeyPress);
  closeModalBtn.addEventListener('click', closeModalWindow);
backdrop.addEventListener('click', closeToBackdrop);
}

function closeToBackdrop(e) {
  if (e.target.className === 'backdrop') {
    closeModalWindow();
  }
}

function closeModalWindow() {
  modal.classList.add('visually-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModalWindow();
  }
}
