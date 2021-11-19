import axios from 'axios';
import { onFetchError } from '../components/notifications.js';
import { hideSpiner, showSpiner } from '../components/spiner.js';
import { getFromLocalStorage } from '../layout/local-storage';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a3ec7c1621ade0b1491e66cd43b88745';
export const getApiData = query => {
  showSpiner();
  let langs = getFromLocalStorage('lang')
  return axios
    .get(`${query}&api_key=${API_KEY}&append_to_response=videos&language=${langs}`)
    .then(response => {
      return response.data;
    })
    .catch(onFetchError)
    .finally(hideSpiner);
};
