import List from './list.js';

const clearAllCompletedTask = () => {
  const list = new List();
  const btnClear = document.querySelector('.btn-clear');
  btnClear.addEventListener('click', () => {
    const completed = document.querySelectorAll('.completed');
    const data = list.removeAllCompletedTask();
    completed.forEach((item) => {
      const parent = item.parentNode.parentNode;
      parent.remove();
    });
    const btns = document.querySelectorAll('.btn-task');
    btns.forEach((btn, i) => {
      btn.setAttribute('index', data[i].index);
    });
  });
};

export default clearAllCompletedTask;
