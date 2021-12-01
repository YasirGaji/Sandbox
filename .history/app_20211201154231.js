// Defined Ui variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Funtion To Load Event Listeners

loadEventListeners(); // declaration

function loadEventListeners() {
  form.addEventListener('submit', addTask); // would pick task event
}

function addTask(e) {
  if(taskInput.value === '') {
    alert('Wagwan')
  }

  const li = document.createEle

  e.preventDefault();
}