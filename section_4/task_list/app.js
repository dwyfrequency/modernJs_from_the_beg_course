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
  // Remove task event
  taskList.addEventListener('click', removeTask); // when someone clicks the task, we get the event b/c pagination 
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
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

// Remove task
function removeTask(e) {
  /* when we click the x, we are getting the i tag as the target - but we want to ensure the a tag has a class of delete-item*/
  if(e.target.parentElement.classList.contains('delete-item')) {
    // When we click on the icon, we want the entire li to remove ie. the parent of the parent
    if(confirm(`Are you sure?`)){
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear all tasks
function clearTasks() {
  // Method 1 - slower
  // taskList.innerHTML = ``;

  // Method 2 - faster
  
  while(taskList.firstChild) {
    // while there is still a firstChild ie. something in the list
    taskList.removeChild(taskList.firstChild);
  }
} 