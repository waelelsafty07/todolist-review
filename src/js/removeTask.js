import { edit, deleteItem } from './clickCount.js';

const buttonAction = () => {
  const buttonTasks = document.querySelectorAll('.btn-task');

  buttonTasks.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const icon = btn.querySelector('i');
      if (icon.classList.contains('fa-trash-can')) {
        deleteItem(icon, btn);
      }
      if (icon.classList.contains('fa-ellipsis-vertical')) {
        edit(icon, btn);
      }
    });
  });
};
const addNewActionWhenTaskAdded = (btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const icon = btn.querySelector('i');
    if (icon.classList.contains('fa-trash-can')) {
      deleteItem(icon, btn);
    }
    if (icon.classList.contains('fa-ellipsis-vertical')) {
      edit(icon, btn);
    }
  });
};

export { buttonAction, addNewActionWhenTaskAdded };
