import createElement from './createElement.js';
import List from './list.js';

const editDescription = (index, icon) => {
  const input = document.querySelector('.edit-todo');
  const list = new List();
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      list.UpdateDescriptionTask(Number(index), input.value);
      const task = list.getTaskByIndex(Number(index));
      const parent = input.parentNode;
      input.remove();
      const label = createElement('label');
      const inputCheck = createElement('input', task);
      const span = createElement('span', task);
      label.appendChild(inputCheck);
      label.appendChild(span);
      parent.insertBefore(label, parent.firstChild);
      icon.classList.add('fa-ellipsis-vertical');
      icon.classList.remove('fa-trash-can');
    }
  });
};
export default editDescription;
