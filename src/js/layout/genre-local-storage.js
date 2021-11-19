import { getApiData } from '../api/api-service'
import { setToLocalStorage, getFromLocalStorage } from './local-storage'


export function setGenresToLocalStorage() {
  let query = `genre/movie/list?`;
  getApiData(query)
    .then(result => {
      setToLocalStorage('genres', result)
    });
}
setGenresToLocalStorage()

export function getGenresFromLocalStorage() {
  return getFromLocalStorage('genres').genres
}