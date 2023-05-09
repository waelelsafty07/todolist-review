const createElement = (tag, task = undefined) => {
  const elements = document.createElement(tag);
  if (tag === 'li') {
    elements.className = 'to-do-list-item';
    elements.draggable = true;
    return elements;
  }
  if (tag === 'input') {
    elements.type = 'checkbox';
    elements.value = task.index;
    elements.checked = task.completed;
    // elements.draggable = false;
    // console.log(elements.draggable);
    return elements;
  }
  if (tag === 'span') {
    elements.innerHTML = task.description;
    if (task.completed) elements.classList.add('completed');
    return elements;
  }
  if (tag === 'a') {
    elements.href = '#';
    elements.className = 'btn-task';
    elements.setAttribute('index', task.index);
    return elements;
  }
  if (tag === 'i') {
    elements.className = 'fa-solid fa-ellipsis-vertical';
    return elements;
  }
  return elements;
};

export default createElement;
