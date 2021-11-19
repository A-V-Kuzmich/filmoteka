import { noScrollBody } from '../components/no-scroll';
import { refs } from '../refs/refs';
import { cleanInnerMarkup } from '../layout/render-by-template';

const {backdrop, closeModalBtn, backdropVideoPlayer, closeBtnVideoPlayer, bodySwitch, containerVideoPlayer} = refs

let flag = false;

export function openModalWindow(e) {
  switch (e) {
    case backdrop:
      openModal(backdrop, closeModalBtn);
      break;
    case backdropVideoPlayer:
      openModal(backdropVideoPlayer, closeBtnVideoPlayer);
      break;
  }
}

function openModal(backdrop, btnClose) {
  backdrop.classList.remove('visually-hidden');
  btnClose.addEventListener('click', closeModalWindow);
  backdrop.addEventListener('click', closeToBackdrop);
   document.querySelector('.modal__btns-list').classList.remove('visually-hidden') 
  scroll();
  if (flag === false) {
    window.addEventListener('keydown', onEscKeyPress);
    flag = true;
  }
}

function closeModalWindow() {
  if (!backdropVideoPlayer.classList.contains('visually-hidden')) {
    backdropVideoPlayer.classList.add('visually-hidden');
    closeBtnVideoPlayer.removeEventListener('click', closeModalWindow);
    backdropVideoPlayer.removeEventListener('click', closeToBackdrop);
    cleanInnerMarkup(containerVideoPlayer);
    keyListner();
    return;
  }
  if (!backdrop.classList.contains('visually-hidden')) {
    backdrop.classList.add('visually-hidden');
    closeModalBtn.removeEventListener('click', closeModalWindow);
    backdrop.removeEventListener('click', closeToBackdrop);
    keyListner();
    return;
  }
}
function keyListner() {
  if (backdrop.classList.contains('visually-hidden')) {
    noScrollBody();
    window.removeEventListener('keydown', onEscKeyPress);
    flag = false;
  }
}
function scroll() {
  if (!bodySwitch.classList.contains('no-scroll')) {
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
