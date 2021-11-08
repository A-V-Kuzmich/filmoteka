import { getApiData } from './api-service.js';

// --------- func for search by ID -------------
function onFetchById(id) {
    let query = `/movie/${id}?`;
    getApiData(query)
      .then(result => {
        console.log(result.data);
      });
  }
// onFetchById(560);