import { getApiData } from '../api/api-service.js';

// --------- func for search by ID -------------
export default function onFetchById(id) {
  let query = `/movie/${id}?`;

  return getApiData(query).then(result => result);
}
