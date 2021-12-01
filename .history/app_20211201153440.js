// Defined Ui variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Funtion To Load Event Listeners

loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask);
}

function addTask(e) {
  
}