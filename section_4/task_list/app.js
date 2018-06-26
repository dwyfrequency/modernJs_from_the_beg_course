const log = console.log;

// Define UI Vars
const form = document.querySelector('#task-form'); // form for submitting tasks
const taskList = document.querySelector('.collection'); // ul of tasks 
const clearBtn = document.querySelector('.clear-tasks'); // btn to clear tasks 
const filter = document.querySelector('#filter'); // input for filter
const taskInput = document.querySelector('#task'); // input for tasks 
console.log(form, taskList, clearBtn, filter, taskInput)

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Add task 
function addTask(e) {
  if(taskInput.value === '') {
    return alert('add a task'); // if we submit blank task, alert user
  }

  // Create li element
  const li = document.createElement(`li`);
  // Add class
  li.className = 'collection-item';
  // Create text for node and append it 
  li.appendChild(document.createTextNode(taskInput.value));
  
  // Create new link element
  const link = document.createElement('a'); 
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  
  // Append li to ul 
  taskList.appendChild(li);
  e.preventDefault(); // Prevents page from redirecting on submit
}