import List from './list.js';

const draggedItem = () => {
  const list = document.getElementById('todo-list');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  let draggedItem = null;
  list.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    e.dataTransfer.setData('text/plain', e.target.innerHTML);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.dropEffect = 'move';
  });
  list.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  list.addEventListener('drop', (e) => {
    const dropTarget = e.target.closest('li');
    const index = dropTarget.querySelector('a').getAttribute('index');
    const index2 = draggedItem.querySelector('a').getAttribute('index');
    const list = new List();
    if (dropTarget && draggedItem !== dropTarget) {
      list.UpdatedIndexWhenDragItem(index, index2);
      dropTarget.querySelector('a').setAttribute('index', index2);
      draggedItem.querySelector('a').setAttribute('index', index);
      const temp = document.createElement('div');
      dropTarget.before(temp);
      draggedItem.before(dropTarget);
      temp.replaceWith(draggedItem);
    }
  });
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('dragstart', (event) => {
      event.preventDefault();
    });
  });
};
export default draggedItem;
