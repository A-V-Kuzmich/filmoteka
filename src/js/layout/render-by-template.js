export function createImagesMarkup(element, template, data) {
  element.insertAdjacentHTML('beforeend', template(data))
}

export function clearImagesMarkup(element) {
  element.innerHTML = ''
}