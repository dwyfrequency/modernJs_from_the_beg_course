const log = console.log;
/* with local and session storage -> you need to save everything as strings so we use JSON.parse and stringify
local storage: will stay until you clear it out manually or with your program
session storage: will stay until you close the browser */

// ** With chrome dev tools go to the application tab to see it **

// set local storage item : key, value pair
// localStorage.setItem('name', 'John');

// set session storage item : key, value pair
// sessionStorage.setItem('name', 'John');

// remove from storage
// localStorage.removeItem('name');
// sessionStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', 
function(e) {
  const task = document.querySelector('#task').value;
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = []; // if nothing exists inititilize array
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks')); // else parse the array from a string
  }
  tasks.push(task); // add task to the array 
  localStorage.setItem('tasks', JSON.stringify(tasks)); // set the array as a string in local
  log(tasks);
  e.preventDefault(); // stop page from redirecting when submitting form
  
});

// log(name, age)

document.quer



