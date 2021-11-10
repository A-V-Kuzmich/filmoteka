export function onFetchError(error) {
  // need some correct Error-mssg
  console.log('WARNING!!! ВНИМАНИЕ!!! УВАГА!!! ACHTUNG!!! Status code:', error.response.status);
}

export function alertEnterQuery() {
  alert ('Веддите что-нибудь в строку поиска')
}

export function alertNothingIsFound() {
  alert ('Ничего не найдено, введите что-то людское =)')
}