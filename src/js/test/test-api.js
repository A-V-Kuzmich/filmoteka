// ========= Test API response===============
import { getApiData } from '../api/api-service.js';

// --------- func for search by ID -------------
function onFetchById(id) {
  let query = `/movie/${id}?`;

  return getApiData(query).then(result => result);
}
// --------- func for search by keyword (title) -------------
function onFetchByKeyword(keyword, page) {
  let query = `/search/movie/?query=${keyword}&page=${page}`;

  return getApiData(query).then(result => result);
}
// --------- func for Main page and for Pagination -------------
function onFetchAllMovies(page) {
  let query = `/trending/movie/week?page=${page}`;

  return getApiData(query).then(result => result);
}

// ---------------- EXAMPLES ------------------
let page = 1;
let movieId = 568620;
let keyword = 'кин-дза-дза';
