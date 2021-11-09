export function createImagesMarkup(element, template, data) {
  // element.insertAdjacentHTML('beforeend', template(data))
  element.innerHTML = template(data);
}
