import { getApiData } from '../api/api-service.js';

// --------- func for Main page and for Pagination -------------
export default function onFetchAllMovies(page) {
  let query = `/trending/movie/week?page=${page}`;

  return getApiData(query).then(result => result);
}
