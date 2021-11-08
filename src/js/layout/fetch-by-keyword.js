import { getApiData } from '../api/api-service.js';

// --------- func for search by keyword (title) -------------
function onFetchByKeyword(keyword, page) {
    let query = `/search/movie/?query=${keyword}&page=${page}`;
    getApiData(query)
      .then(result => {
        console.log(result);
        //отрисовали hbs
      });
  }
//onFetchByKeyword('iron', 1);