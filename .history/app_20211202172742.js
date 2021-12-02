// Defined Ui variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Funtion To Load Event Listeners

loadEventListeners(); // declaration

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks); // to load event from the DOM

  form.addEventListener('submit', addTask); // would pick task event

  taskList.addEventListener('click', removeTask); // would remove task upon click

  clearBtn.addEventListener('click', clearTasks); // would clear task collections 

  filter.addEventListener('keyup', filterTasks);
}

function getTasks() {
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    const li = document.createElement('li'); // createing a li element 

    li.className = 'collection-item'; // assigning a classname to the li 

    li.appendChild(document.createTextNode(task)); // appending the taskInput textnode as a child element to the li

    const link = document.createElement('a'); // creating a link element

    link.className = 'delete-item secondary-content'; // assigning a classname to the link

    link.innerHTML = `<span style="cursor:pointer;">remove</span>` // assigning new icon element to the link

    li.appendChild(link); // appending link to the li element 

    storeTaskInLocalStorage(taskInput.value); //declaration to store task in the local storage

    taskList.appendChild(li); // appending the li element to taskInput

  })
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

  link.innerHTML = `<span style="cursor:pointer;">remove</span>` // assigning new icon element to the link

  li.appendChild(link); // appending link to the li element 

  storeTaskInLocalStorage(taskInput.value); //declaration to store task in the local storage

  taskList.appendChild(li); // appending the li element to taskInput

  taskInput.value = ''; // assigning value to taskInout 

  console.log(li)

  e.preventDefault();
}

function storeTaskInLocalStorage(task) {
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTask(e) {
   if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
} // this function would take out the task

function removeTaskFromLocalStorage(taskItem) {
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks));
} // this would remove task from the local storage

function clearTasks() {
  // taskList.innerHTML = '';

  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  clearTasksFromLocal

} // clear task function 

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
} // this block would filter the tasks 