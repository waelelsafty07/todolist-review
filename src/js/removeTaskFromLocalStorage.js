import List from './list.js';

const removeTaskFromLocalStorage = (index) => {
  const list = new List();
  const data = list.removeTaskFromList(Number(index));
  return data;
};

export default removeTaskFromLocalStorage;
