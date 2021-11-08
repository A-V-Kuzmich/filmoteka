import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a3ec7c1621ade0b1491e66cd43b88745';

export const fetch = query => {
  return axios.get(`${query}&api_key=${API_KEY}`).then(response => response.data);
};
