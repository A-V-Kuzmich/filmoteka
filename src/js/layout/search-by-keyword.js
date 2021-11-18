import { refs } from '../refs/refs';
import { renderImages } from './render-main-list';
import { alertEnterQuery } from '../components/notifications';

const { searchFormEl } = refs;

searchFormEl.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const keyword = e.currentTarget.elements.query.value;
  if (keyword === '') {
    alertEnterQuery();
    return;
  }
  FetchByKeyword(keyword);
}

function FetchByKeyword(keyword) {
  const searchQuery = `/search/movie/?query=${keyword}&page=1`;
  renderImages(searchQuery);
}
