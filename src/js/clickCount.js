import editDescription from './editInLocalStorage.js';
import List from './list.js';
import removeTaskFromLocalStorage from './removeTaskFromLocalStorage.js';

const convertTextToInput = (parent, index) => {
  const input = document.createElement('input');
  const list = new List();
  const getData = list.getTaskByIndex(Number(index));
  input.value = getData[0].description;
  input.className = 'edit-todo';
  parent.insertBefore(input, parent.firstChild);
};

const edit = (icon, btn) => {
  const index = btn.getAttribute('index');
  if (icon.classList.contains('fa-ellipsis-vertical')) {
    icon.classList.add('fa-trash-can');
    icon.classList.remove('fa-ellipsis-vertical');
    const parent = icon.parentElement.parentElement;
    if (parent.firstChild) {
      parent.removeChild(parent.firstChild);
      convertTextToInput(parent, index);
      editDescription(index, icon);
    }
  }
};
const deleteItem = (icon, btn) => {
  const index = btn.getAttribute('index');
  const data = removeTaskFromLocalStorage(index);
  const parent = btn.parentElement;
  parent.remove();
  const btns = document.querySelectorAll('.btn-task');
  btns.forEach((btn, i) => {
    btn.setAttribute('index', data[i].index);
  });
};

export { edit, deleteItem };
