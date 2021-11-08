import { getApiData } from '../api/api-service.js';

// --------- func for search by ID -------------
function onFetchById(id) {
    let query = `/movie/${id}?`;
    getApiData(query)
      .then(result => {
        console.log(result);
      });
  }
//  onFetchById(560);