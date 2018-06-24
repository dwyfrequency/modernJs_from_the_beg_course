const log = console.log;



// get element by id
const taskTitle = document.getElementById('task-title');

log(taskTitle);

// Get things from the element
log(taskTitle.id);
log(taskTitle.innerText);



// Change styling 
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '40px';

// Make something disappear entirely 
// taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task Lister';
taskTitle.innerText = 'My Tasks';

// Insert html 
taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// document.querySelector()
// For id 
log(document.querySelector('#task-title'));

// For classes 
log(document.querySelector('.card-title'));

// For html element; if more than one, it takes the first 
log(document.querySelector('h5'));

// Nested elements
document.querySelector('ul li').style.color = 'purple';

// css psuedo classes 
document.querySelector('li:last-child').style.color = 'green';
// css psuedo classes => note that nth-child starts at index 1
document.querySelector('li:nth-child(3)').style.color = 'salmon';

// will only change the first b/c querySelector is a single element selector. Will work with querySelectorAll
document.querySelector('li:nth-child(even)').textContent = 'salmon';




