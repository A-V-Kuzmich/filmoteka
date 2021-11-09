// ========= Test API ===============
import onFetchAllMovies from '../layout/fetch-week-movies';
import onFetchById from '../layout/fetch-by-Id';
import onFetchByKeyword from '../layout/fetch-by-keyword';

// ----------------------------------
const renderMovieList = res => {
  console.log(`//============= RESULT of fetch ALL on ${page}-th page: =============//`);
  console.log(res);
};

const renderMovieItem = res => {
  console.log(`//============= RESULT of fetch by Keyword: =============//`);
  console.log(res);
};

// ---------------- EXAMPLES ------------------

let page = 1;
let movieId = 568620;
let keyword = 'кин-дза-дза';
// onFetchAllMovies(page).then(renderMovieList);
// onFetchById(movieId).then(renderMovieItem);
// onFetchByKeyword(keyword, page).then(renderMovieList);
