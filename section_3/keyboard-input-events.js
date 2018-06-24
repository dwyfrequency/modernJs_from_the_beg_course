const log = console.log;
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('#task-title')

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent); // Fires off when key is pressed down
// Keyup : similiar just fires when you lift the key up
// taskInput.addEventListener('keyup', runEvent);
// Keypress : anytime you press a key 
// taskInput.addEventListener('keypress', runEvent);

// Focus : when you click into an input
// taskInput.addEventListener('focus', runEvent);
// Blur : when you click out of an input
// taskInput.addEventListener('blur', runEvent);

// Cut : when you cut - works with keyboard shortcuts too  
// taskInput.addEventListener('cut', runEvent);
// Paste : when you paste - works with keyboard shortcuts too 
// taskInput.addEventListener('paste', runEvent);

// Change event -> requires a select list ie drop down


function runEvent(e) {
  log(`EVENT TYPE: ${e.type}`);
  
 
  // log(e.target.value)  // target is the element the event is triggered on 
  // heading.innerText = e.target.value;
  /*
  log(taskInput.value); // Get input value ie Takes the value in the form - the text
  taskInput.value = ''; // if we want to clear the form after the event runs; clear input
  e.preventDefault(); // stops the action
  */

}