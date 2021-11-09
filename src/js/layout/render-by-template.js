export function createImagesMarkup(element, template, data) {
  element.insertAdjacentHTML('beforeend', template(data))
}