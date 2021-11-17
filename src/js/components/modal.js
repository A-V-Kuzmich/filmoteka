import { noScrollBody } from '../components/no-scroll';
import { refs } from '../refs/refs';
import { cleanInnerMarkup } from '../layout/render-by-template';

let flag = false;

export function openModalWindow(e) {
  switch (e) {
    case refs.backdrop:
      openModal(refs.backdrop, refs.closeModalBtn);
      break;
    case refs.backdropVideoPlayer:
      openModal(refs.backdropVideoPlayer, refs.closeBtnVideoPlayer);
      break;
  }
}

function openModal(backdrop, btnClose) {
  backdrop.classList.remove('visually-hidden');
  btnClose.addEventListener('click', closeModalWindow);
  backdrop.addEventListener('click', closeToBackdrop);
  scroll();
  if (flag === false) {
    window.addEventListener('keydown', onEscKeyPress);
    flag = true;
  }
}

function closeModalWindow() {
  if (!refs.backdropVideoPlayer.classList.contains('visually-hidden')) {
    refs.backdropVideoPlayer.classList.add('visually-hidden');
    refs.closeBtnVideoPlayer.removeEventListener('click', closeModalWindow);
    refs.backdropVideoPlayer.removeEventListener('click', closeToBackdrop);
    cleanInnerMarkup(refs.containerVideoPlayer);
    keyListner();
    return;
  }
  if (!refs.backdrop.classList.contains('visually-hidden')) {
    refs.backdrop.classList.add('visually-hidden');
    refs.closeModalBtn.removeEventListener('click', closeModalWindow);
    refs.backdrop.removeEventListener('click', closeToBackdrop);
    keyListner();
    return;
  }
}
function keyListner() {
  if (refs.backdrop.classList.contains('visually-hidden')) {
    noScrollBody();
    window.removeEventListener('keydown', onEscKeyPress);
    flag = false;
  }
}
function scroll() {
  if (!refs.bodySwitch.classList.contains('no-scroll')) {
    noScrollBody();
  }
}
function closeToBackdrop(e) {
  const name = e.target.className;
  if (name === 'backdrop' || name === 'backdrop-video') {
    closeModalWindow();
  }
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModalWindow();
  }
}
