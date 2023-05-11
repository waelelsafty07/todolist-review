import createTask from './createTask.js';
import { addEventComplete } from './eventComplete.js';
import List from './list.js';
import { addNewActionWhenTaskAdded } from './removeTask.js';

const addNewTaskToList = () => {
  const inputToDO = document.querySelector('.add-todo');
  const unorderdList = document.querySelector('.to-do-list ul');
  inputToDO.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const list = new List();
      const TodoList = {
        description: inputToDO.value,
        completed: false,
      };
      const task = list.addTaskToList(TodoList);
      const { li, a } = createTask(task);
      unorderdList.appendChild(li);
      inputToDO.value = '';
      addEventComplete(li);
      addNewActionWhenTaskAdded(a);
    }
  });
};

export default addNewTaskToList;
