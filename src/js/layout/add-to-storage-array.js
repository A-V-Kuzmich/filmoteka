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
      clearWactedFromQueue();
      // нотификация о добавлении фильма в список ${keyName}.
      // Это первый фильм, можно в стиле "Ура, вы добавили первый фильм свой список"
    } else {
      const storageArray = getFromLocalStorage(keyName);
      switch (storageArray.includes(id)) {
        case true:
          //нотификация о том, что фильм уже добавлен в список ${keyName}
          break;
        case false:
          (function clearWactedFromQueue() {
            const queueArray = localStorage.getItem('queue');
            if (queueArray.includes(id)) {
              // console.log('it works');
              // console.log('id', id);
              const parsedArray = JSON.parse(queueArray);
              // console.log('before', parsedArray);

              const index = parsedArray.indexOf(id, 0);
              // console.log('index', index);

              parsedArray.splice(index, 1);

              // console.log('after', parsedArray);

              setToLocalStorage('queue', parsedArray);
            }
          })();

          storageArray.push(id);
          setToLocalStorage(`${keyName}`, storageArray);
          // нотификация о добавлении фильма в список ${keyName}
          break;
      }
    }
  };
}
