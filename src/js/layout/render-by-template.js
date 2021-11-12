export function createImagesMarkup(element, place, data) {
  element.insertAdjacentHTML(place, data);
}

export function createInnerMarkup(element, data) {
  element.innerHTML = data;
}

export function cleanInnerMarkup(element) {
  element.innerHTML = '';
}
