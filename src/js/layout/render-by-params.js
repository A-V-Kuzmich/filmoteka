import imagesTpl from '../../partial/templates/film-cards.hbs'
import { refs } from '../refs/refs'
import { getGenresFromLocalStorage } from './genre-local-storage'
import { renderImages } from './render-images-to-main'


export function searhByParameter(evt) {
  const yearItem = evt.target.classList.contains('values__form-input')
  const genreItem = evt.target.classList.contains('values__item--genre')
  const ratingItem = evt.target.classList.contains('values__item--rating')

  switch (true) {
    case genreItem:
      searchByGenre(evt.target.textContent);
      break
    case yearItem:
      searchByRelease();
      break
    case ratingItem:
      searchByPopularity(evt.target.textContent)
      break
  }

}

function getGenreIdByName(name) {
  const queryGenre = getGenresFromLocalStorage().find(genre => {
    return genre.name === name
  })
  return queryGenre.id
}

function searchByGenre(value) {
  const genreId = getGenreIdByName(value)
  let query = `/discover/movie?with_genres=${genreId}&sort_by=popularity.desc`;
  renderImages(query, refs.filmsEl, imagesTpl)

}

function searchByYear(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.year.value
  let query = `/discover/movie?primary_release_year=${searchQuery}&sort_by=popularity.desc`

  renderImages(query, refs.filmsEl, imagesTpl)
}

function searchByRelease() {
    let thisYear = new Date().getFullYear();
    refs.valuesInput.setAttribute("max", thisYear);
    refs.valueFormEl.addEventListener('submit', searchByYear)
}


function searchByPopularity(value) {
  if (value === 'descending') {
    value = value.slice(0,4)
  } else {
    value = value.slice(0,3)
  }
  let query = `/discover/movie?sort_by=popularity.${value}`;
  renderImages(query, refs.filmsEl, imagesTpl)
}

refs.filtersDropdownEl.addEventListener('click', searhByParameter)