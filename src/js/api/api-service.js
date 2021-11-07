import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a3ec7c1621ade0b1491e66cd43b88745';

// week trend movies
export const fetchAllMovies = page => {
  return axios
    .get(`/trending/movie/week?api_key=${API_KEY}&page=${page}`)
    .then(response => response.data);
};
