import { getApiData } from './api-service.js';
// --------- func for Main page and for Pagination -------------
function onFetchAllMovies(page) {
    let query = `/trending/movie/week?page=${page}`;
  
    getApiData(query)
      .then(result => {
        console.log(result);
      })
  }
  // onFetchAllMovies(2);