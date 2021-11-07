import './sass/main.scss';

//=========layout=================
import './js/refs/refs.js';

//header
import './js/layout/input.js';

//main

//footer

//=========components===============
import './js/components/backdrop.js';
import './js/components/modal.js';

//=============api==================
import { fetchAllMovies } from './js/api/api-service.js';

function onFetchError(error) {
  // need some correct Error-mssg
  console.log(error);
}

// func for Main page and for Pagination
function onFetchAllMovies(page) {
  fetchAllMovies(page)
    .then(result => {
      console.log(`RESULT of fetch ${page}-th page:`);
      console.log(result.results);
    })
    .catch(onFetchError);
}

//=============test==================
onFetchAllMovies(1);
