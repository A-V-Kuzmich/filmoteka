import { setToLocalStorage } from './local-storage';
import { getFromLocalStorage } from './local-storage';
import { showNotify } from '../components/notifications';

export function addToStorageArray(keyName, property) {
  return function closureFunc(e) {
    if (
      !e.target.dataset.hasOwnProperty(property) ||
      e.target.dataset.hasOwnProperty(property) == undefined
    ) {
      return;
    }
    const id = e.target.dataset.id;

    switch (!localStorage.getItem(keyName)) {
      case true:
        const contentToAdd = [];
        contentToAdd.push(id);
        setToLocalStorage(keyName, contentToAdd);
        showNotify('success', 'Added to List');
        if (keyName === 'watched') {
          clearWactedFromQueue();
        }
        break;
      case false:
        const storageArray = getFromLocalStorage(keyName);
        if (storageArray.includes(id)) {
          showNotify('warning', 'Already added');
          if (keyName === 'watched') {
            clearWactedFromQueue();
          }
        } else {
          clearWactedFromQueue();
          storageArray.push(id);
          setToLocalStorage(`${keyName}`, storageArray);
          showNotify('success', 'Added to List');
        }
    }
  };
}

function clearWactedFromQueue(id) {
  try {
    const parsedArray = JSON.parse(localStorage.getItem('queue'));
    const index = parsedArray.indexOf(id, 0);
    parsedArray.splice(index, 1);
    setToLocalStorage('queue', parsedArray);
  } catch (error) {}
}
