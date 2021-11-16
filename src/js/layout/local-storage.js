export function setToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key) {
  const savedData = localStorage.getItem(key);
  const parsedData = JSON.parse(savedData);
  return parsedData;
}
