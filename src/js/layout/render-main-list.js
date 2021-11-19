import { alertNothingIsFound } from '../components/notifications';
import { getApiData } from '../api/api-service.js';
import filmsTemplate from '../../partial/templates/film-cards.hbs';
import { refs } from '../refs/refs';
import { createInnerMarkup } from './render-by-template';
import { pagination } from './pagination';

const { filmsEl } = refs;

export function renderImages(query) {
  getApiData(query).then(result => {
    if (result.results.length === 0) {
      alertNothingIsFound();
    }
    pagination(query, result);
    createInnerMarkup(filmsEl, filmsTemplate(result.results));
  });
}
