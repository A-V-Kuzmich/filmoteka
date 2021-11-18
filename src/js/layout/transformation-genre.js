import { getGenresFromLocalStorage } from './genre-local-storage';

function getGenreNameById(genreIds) {
  let newArray = [];
  genreIds.forEach(genreId => {
    getGenresFromLocalStorage().map(genre => {
      if (genre.id === genreId) {
        newArray.push(genre.name);
      }
    });
  });
  return newArray;
}

export function exchangeObjectData(result) {
  result.results.forEach(obj => {
    if (obj.genre_ids) {
      obj.genre_ids = getGenreNameById(obj.genre_ids);
    }
    if (obj.release_date) {
      obj.release_date = obj.release_date.slice(0, 4);
    }
  });
}
