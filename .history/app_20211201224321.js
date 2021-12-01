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

  taskList.addEventListener('click', removeTask);
}

function addTask(e) {
  if(taskInput.value === '') {
    alert('Wagwan')
  }

  const li = document.createElement('li'); // createing a li element 

  li.className = 'collection-item'; // assigning a classname to the li 

  li.appendChild(document.createTextNode(taskInput.value)); // appending the taskInput textnode as a child element to the li

  const link = document.createElement('a'); // creating a link element

  link.className = 'delete-item secondary-content'; // assigning a classname to the link

  link.innerHTML = '<i class="fa fa-remove"></i>' // assigning new icon element to the link

  li.appendChild(link); // appending link to the li element 

  taskList.appendChild(li); // appending the li element to taskInput

  taskInput.value = ''; // assigning value to taskInout 


  e.preventDefault();
}