import { getApiData } from '../api/api-service.js';

// --------- func for search by keyword (title) -------------
export default function onFetchByKeyword(keyword, page) {
  let query = `/search/movie/?query=${keyword}&page=${page}`;

  return getApiData(query).then(result => result);
}
