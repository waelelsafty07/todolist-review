import createElement from './createElement.js';

const createTask = (task) => {
  const li = createElement('li', task);
  const a = createElement('a', task);
  const i = createElement('i');
  const label = createElement('label');
  const input = createElement('input', task);
  const span = createElement('span', task);
  label.appendChild(input);
  label.appendChild(span);
  li.appendChild(label);
  a.appendChild(i);
  li.appendChild(a);
  return { li, a };
};

export default createTask;
