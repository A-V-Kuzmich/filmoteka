// ========= Test API ===============
import onFetchAllMovies from '../layout/fetch-week-movies';
import onFetchById from '../layout/fetch-by-Id';
import onFetchByKeyword from '../layout/fetch-by-keyword';

// ----------------------------------
const callbackTest = res => {
  console.log(res);
  console.log(res.results);
};

// ---------------- EXAMPLES ------------------

let page = 1;
let movieId = 568620;
let keyword = 'кин-дза-дза';

// onFetchAllMovies(page).then(callbackTest);

// onFetchById(movieId).then(callbackTest);

// onFetchByKeyword(keyword, page).then(callbackTest);
