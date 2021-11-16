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
      // нотификация о добавлении фильма в список ${keyName}.
      // Это первый фильм, можно в стиле "Ура, вы добавили первый фильм свой список"
    } else {
      const storageArray = getFromLocalStorage(keyName);
      switch (storageArray.includes(id)) {
        case true:
          //нотификация о том, что фильм уже добавлен в список ${keyName}
          break;
        case false:
          const queueArray = localStorage.getItem('queue');
          if (queueArray.includes(id)) {
            console.log('it works');
            console.log('id', id);
            console.log(queueArray.includes(id));

            console.dir(queueArray);

            const index = queueArray.indexOf(id);
            console.log(index);

            queueArray.splice(id, 1);
            console.log('after', queueArray);
          }
          storageArray.push(id);
          setToLocalStorage(`${keyName}`, storageArray);
          // нотификация о добавлении фильма в список ${keyName}
          break;
      }
    }
  };
}
