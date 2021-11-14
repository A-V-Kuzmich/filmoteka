import { setToLocalStorage } from './local-storage';
import { getFromLocalStorage } from './local-storage';

export function addToStorageArray(keyName, property) {
  return function closureFunc(e) {
    if (
      !e.target.dataset.hasOwnProperty(property) ||
      e.target.dataset.hasOwnProperty(property) == undefined
    ) {
      return;
    }
    const id = e.target.dataset.id;
    if (!localStorage.getItem(keyName)) {
      const contentToAdd = [];
      contentToAdd.push(id);
      setToLocalStorage(keyName, contentToAdd);
    } else {
      const storageArray = getFromLocalStorage(keyName);
      switch (storageArray.includes(id)) {
        case true:
          break;
        case false:
          storageArray.push(id);
          setToLocalStorage(`${keyName}`, storageArray);
          break;
      }
    }
  };
}
