import { refs } from '../refs/refs';
import { renderImages } from './render-main-list';
import { getGenresFromLocalStorage } from './genre-local-storage';

const { filtersDropdownEl, valuesInput, valueFormEl, filtersYearInput } = refs;

filtersDropdownEl.addEventListener('click', searhByParameter);

function searhByParameter(evt) {
  const yearItem = evt.target.classList.contains('values__form-input');
  const genreItem = evt.target.classList.contains('values__item--genre');
  const ratingItem = evt.target.classList.contains('values__item--rating');
  switch (true) {
    case genreItem:
      searchByGenre(evt.target.textContent);
      break;
    case yearItem:
      searchByRelease();
      break;
    case ratingItem:
      searchByPopularity(evt.target.textContent);
      break;
  }
}
function searchByGenre(value) {
  const genreId = getGenreIdByName(value);
  const searchQuery = `/discover/movie?with_genres=${genreId}&sort_by=popularity.desc`;
  renderImages(searchQuery);
}

function searchByRelease() {
  let thisYear = new Date().getFullYear();
  valuesInput.setAttribute('max', thisYear);
  valueFormEl.addEventListener('submit', searchByYear);
}
function searchByYear(e) {
  e.preventDefault();
  const year = e.currentTarget.elements.year.value;
  const searchQuery = `/discover/movie?primary_release_year=${year}&sort_by=popularity.desc`;
  renderImages(searchQuery);
}

function searchByPopularity(value) {
  const searchQuery = `/discover/movie?sort_by=popularity.${value}`;
  if (value === 'descending') {
    value = value.slice(0, 4);
  } else {
    value = value.slice(0, 3);
  }
  renderImages(searchQuery);
}
function getGenreIdByName(name) {
  const queryGenre = getGenresFromLocalStorage().find(genre => {
    return genre.name === name;
  });
  return queryGenre.id;
}
filtersYearInput.oninput = function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
};
