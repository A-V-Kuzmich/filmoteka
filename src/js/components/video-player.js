import { getApiData } from '../api/api-service.js';
import videoTp from '../../partial/templates/video.hbs';
import { createInnerMarkup } from '../layout/render-by-template';
import { refs } from '../refs/refs';
import { openModalWindow } from '../components/modal';

const { containerVideoPlayer, backdropVideoPlayer, modal } = refs;

function fetchVideo(id) {
  let query = `/movie/${id}?`;
  return getApiData(query).then(result => result);
}
modal.addEventListener('click', e => {
  if (e.target.dataset.modal === 'modal-video-btn') {
    const id = e.path.find(num => num.className === 'modal__elements').dataset.id;
    openVideo(id);
  }
  return;
});

export function openVideo(id) {
  fetchVideo(id).then(result => {
    const playlist = result.videos.results.map(value => value.key).join(',');
    createInnerMarkup(containerVideoPlayer, videoTp(playlist));
    openModalWindow(backdropVideoPlayer);
  });
}
