import { getApiData } from '../api/api-service'
import { setToLocalStorage, getFromLocalStorage } from './local-storage'


function setGenresToLocalStorage() {
  let query = `genre/movie/list?`;
  getApiData(query)
    .then(result => {
      setToLocalStorage('genres', result)
    });
}
setGenresToLocalStorage()

export function getGenresFromLocalStorage() {
  return getFromLocalStorage('genres').genres
  // const savedData = localStorage.getItem()
  // const parsedData = JSON.parse(savedData)
  // console.log(parsedData.genres);
  // return parsedData.genres
}