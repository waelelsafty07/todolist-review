import './style.css';
import iterateTasks from './js/iterateTasks.js';
import { eventComplete } from './js/eventComplete.js';
import draggedItem from './js/draggedItem.js';
import addNewTaskToList from './js/addNewTask.js';
import { buttonAction } from './js/removeTask.js';
import clearAllCompletedTask from './js/clearAllCompletedTask.js';

iterateTasks();

draggedItem();

buttonAction();

addNewTaskToList();
eventComplete();

clearAllCompletedTask();
