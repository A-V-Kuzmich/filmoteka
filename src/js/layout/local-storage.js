import { getApiData } from '../api/api-service'

function setGenresToLocalStorage() {
  let query = `genre/movie/list?`;
  getApiData(query)
    .then(result => {
      localStorage.setItem('genres', JSON.stringify(result))
    });
}
setGenresToLocalStorage()

export function getGenresFromLocalStorage() {
  const savedData = localStorage.getItem('genres')
  const parsedData = JSON.parse(savedData)
  console.log(parsedData.genres);
  return parsedData.genres
}