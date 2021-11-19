import { refs } from '../refs/refs';

const { pagePreloader } = refs;

function showSpiner() {
  pagePreloader.classList.remove('done');
}
function hideSpiner() {
  pagePreloader.classList.add('done');
}

export { showSpiner, hideSpiner };

window.addEventListener('load', () => {
  setTimeout(() => {
    pagePreloader.classList.add('done');
  }, 1000);
});
