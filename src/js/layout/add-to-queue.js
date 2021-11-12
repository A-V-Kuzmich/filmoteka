// const addBtn = document.querySelector('[data-add]');
import { setToLocalStorage } from './local-storage';
import { getFromLocalStorage } from './local-storage';

export function addToQueue(e) {
  console.dir(e.target.dataset.hasOwnProperty('queue'));

  if (!e.target.dataset.hasOwnProperty('queue')) {
    console.log('not add-button', false);
    return;
  }
  console.log('it is add-button', true);

  const id = e.target.dataset.id;
  console.log('id', id);
  // console.log(localStorage.getItem(key));

  if (!localStorage.getItem('queue')) {
    console.log('no queue at localStorage');
    const queue = {
      list: [],
    };
    queue.list.push(id);
    console.log('queueArray', queue);
    setToLocalStorage('queue', queue);
  } else {
    const storageQueue = getFromLocalStorage('queue');
    console.log('item from local', storageQueue);

    console.log(storageQueue);
    const newStorageQueue = storageQueue.list.push(id);
    // console.log(newStorageQueue);

    setToLocalStorage('queue', newStorageQueue);
  }
}

// console.log(localStorage);
// setToLocalStorage();
