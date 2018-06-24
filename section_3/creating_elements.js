const log = console.log;

// Create element
const li = document.createElement('li');

// Add class 
li.className = 'collection-item';

// Add id 
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append 
li.appendChild(document.createTextNode('Hello New li'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon HTML
link.innerHTML = `<i class="fa fa-remove"></i>`;

// Append link into li -> gives us the x next to the task
li.appendChild(link);

/* Append li as child to ul -> now it is added to our tasks list
   Until we append it to an element on the page, it is not visible*/
document.querySelector('ul.collection').appendChild(li);

log(li);