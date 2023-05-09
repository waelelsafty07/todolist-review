import List from './list.js';

const eventComplete = () => {
  const listItems = document.querySelectorAll('.to-do-list-item');
  listItems.forEach((item) => {
    item.addEventListener('change', () => {
      const list = new List();
      const index = item.querySelector('a').getAttribute('index');
      const span = item.querySelector('span');
      if (span) {
        span.classList.toggle('completed');
        if (span.classList.contains('completed')) {
          list.UpdateCompleteTask(Number(index));
        } else {
          list.UpdateUnCompleteTask(Number(index));
        }
      }
    });
  });
};

const addEventComplete = (item) => {
  item.addEventListener('change', () => {
    const list = new List();
    const index = item.querySelector('a').getAttribute('index');
    const span = item.querySelector('span');
    if (span) {
      span.classList.toggle('completed');
      if (span.classList.contains('completed')) {
        list.UpdateCompleteTask(Number(index));
      } else {
        list.UpdateUnCompleteTask(Number(index));
      }
    }
  });
};
export { eventComplete, addEventComplete };
