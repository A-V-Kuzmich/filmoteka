// ========= Test ===============
import { fetch } from '../api/api-service.js';
import { onFetchError } from '../components/notifications.js';

// --------- func for Main page and for Pagination -------------
function onFetchAllMovies(page) {
  let query = `/trending/movie/week?page=${page}`;

  fetch(query)
    .then(result => {
      console.log(`//============= RESULT of fetch ALL on ${page}-th page: =============//`);
      console.log(result);
      console.log(result.results);

      // console.log(result.results[7].original_title);
    })
    .catch(onFetchError);
}

// onFetchAllMovies(2);

//----------------------------------------------------------------------------------

// --------- func for search by ID -------------
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
function onFetchById(movie_id) {
  let query = `/movie/${movie_id}?language=en-US`;

  fetch(query)
    .then(result => {
      console.log(`//============= RESULT of fetch 1 movie by ID: "${movie_id}" =============//`);
      console.log(result);
      // console.log(result.results);
    })
    .catch(onFetchError);
}
// onFetchById(568620); //title: "Snake Eyes: G.I. Joe Origins"

//-----------------------------------------------------------------------------------

// --------- func for search by keyword (title) -------------
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
function onFetchByKeyword(keyword, page) {
  let query = `/search/movie/?language=en-US&include_adult=false&query=${keyword}&page=${page}`;

  fetch(query)
    .then(result => {
      console.log(
        `//============= RESULT of fetch movies by keyword (title) "${keyword}": =============//`,
      );
      console.log(result);
      console.log(result.results);
    })
    .catch(onFetchError);
}

onFetchByKeyword('кин-дза-дза', 1);
