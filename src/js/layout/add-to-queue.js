import { setToLocalStorage } from './local-storage';
import { getFromLocalStorage } from './local-storage';

export function addToQueue(e) {
  if (!e.target.dataset.hasOwnProperty('queue')) {
    console.log('it is not add-button', false);
    return;
  }
  console.log('it is add-button', true);

  const id = e.target.dataset.id;
  console.log('id', id);

  if (!localStorage.getItem('queue')) {
    console.log('no queue at localStorage');

    const queueContent = [];
    queueContent.push(id);
    console.log('queueContent', queueContent);

    setToLocalStorage('queue', queueContent);
  } else {
    console.log('there is queue at localStorage');

    const storageQueue = getFromLocalStorage('queue');
    console.log('array from local', storageQueue);

    if (storageQueue.includes(id)) {
      console.log('film is already added');
      console.log('array from local', getFromLocalStorage('queue'));
      return;
    }
    storageQueue.push(id);
    console.log('item arter push', storageQueue);

    setToLocalStorage('queue', storageQueue);
  }
}
