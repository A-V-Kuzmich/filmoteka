import { renderImages } from './render-main-list';

document.addEventListener('DOMContentLoaded', onFetchAllMovies());

export function onFetchAllMovies() {
  const searchQuery = `/trending/movie/week?`;
  renderImages(searchQuery);
}
