import axios from 'axios';
import { onFetchError } from '../components/notifications.js';
import { hideSpiner, showSpiner } from '../components/spiner.js';
// import  { select }  from '../refs/refs'

const select = document.querySelector('select');
select.addEventListener('change', changeLanguages);

function changeLanguages () {
    const leng = select.value;
    console.log(leng)

};
    
const LG = 'uk';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a3ec7c1621ade0b1491e66cd43b88745';
export const getApiData = query => {
showSpiner();
return axios
.get(`${query}&api_key=${API_KEY}&language=${LG}`)
.then(response => {
    hideSpiner()
    return response.data
})    
.catch(onFetchError)
};
