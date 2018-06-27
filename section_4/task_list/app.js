const log = console.log;

// Define UI Vars
const form = document.querySelector('#task-form'); // form for submitting tasks
const taskList = document.querySelector('.collection'); // ul of tasks 
const clearBtn = document.querySelector('.clear-tasks'); // btn to clear tasks 
const filter = document.querySelector('#filter'); // input for filter
const taskInput = document.querySelector('#task'); // input for tasks 
// console.log(form, taskList, clearBtn, filter, taskInput)

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask); // when someone clicks the task, we get the event b/c pagination 
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from Local Storage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    // if there is nothing in local storage for tasks, init empty array
    tasks = [];
  } else {
    // if there is store the contents in our new var tasks 
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(task => {
    // Create li element
    const li = document.createElement(`li`);
    // Add class
    li.className = 'collection-item';
    // Create text for node and append it 
    li.appendChild(document.createTextNode(task));

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
  })
}


// Add Tasks 
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

  // Store in localStorage - takes the text task input
  storeTaskInLocalStorage(taskInput.value);
  
  // clears input value after submission
  taskInput.value = '';
  e.preventDefault(); // Prevents page from redirecting on submit
}

// Store Task in Local Storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    // if there is nothing in local storage for tasks, init empty array
    tasks = [];
  } else {
    // if there is store the contents in our new var tasks 
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task); // add task passed to the array
  localStorage.setItem('tasks', JSON.stringify(tasks));
} 

// Remove task
function removeTask(e) {
  /* when we click the x, we are getting the i tag as the target - but we want to ensure the <a> tag has a class of delete-item*/
  if(e.target.parentElement.classList.contains('delete-item')) {
    // When we click on the icon, we want the entire li to remove ie. the parent of the parent
    if(confirm(`Are you sure?`)){
      e.target.parentElement.parentElement.remove();
      
      // Remove from Local Storage - pass in the li 
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from Local Storage - takes in the li element
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    // if there is nothing in local storage for tasks, init empty array
    tasks = [];
  } else {
    // if there is store the contents in our new var tasks 
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // only put values that do not match in the new array 
  localStorage.setItem('tasks', JSON.stringify(tasks.filter(task => task !== taskItem.textContent)));
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
  clearTasksFromLocalStorage();
} 

// Clear All tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter Tasks 
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  
  // We can use a forEach b/c query selector all returns a nodeList
  document
    .querySelectorAll('.collection-item')
    .forEach(task => {
      const item = task.firstChild.textContent;

      // if the text filter matches an item in the list - show the item 
      if(item.toLowerCase().includes(text)) {
        task.style.display = 'block';
      } else {
        // without a match - hide the item in the list
        task.style.display = 'none';
      }
    });
}

