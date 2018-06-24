const log = console.log;

// REPLACE ELEMENT

// Create element
const newHeading = document.createElement('h2');

// Add id 
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old Heading
const oldHeading = document.querySelector('#task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace 
cardAction.replaceChild(newHeading, oldHeading);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[2].remove();

// Remove child element
list.removeChild(lis[3]);


// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className; // string of classes
val = link.classList; // dom token list -> looks like a psuedo array
val = link.classList[0];
link.classList.add('test'); // add class from a tag
link.classList.remove('test'); // remove class from a tag
val = link;

// Attributes
val = link.getAttribute('href'); // returns the href
val = link.setAttribute('href', 'http://google.com'); // sets an href
link.setAttribute('title', 'Google');
val = link.hasAttribute('href'); // bool returned where it has the specified attribute
link.removeAttribute('title'); // remove the title
val = link;

log(val);

