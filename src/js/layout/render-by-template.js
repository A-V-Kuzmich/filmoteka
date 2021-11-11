export function createImagesMarkup(element, template, data) {
  element.insertAdjacentHTML('beforeend', template(data));
}

export function createInnerMarkup(element, data) {
  element.innerHTML = data;
}

export function crleanInnerMarkup(element) {
  element.innerHTML = '';
}
