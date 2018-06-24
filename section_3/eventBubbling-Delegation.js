const log = console.log;

// EVENT BUBBLING : When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

// document.querySelector('.card-title').addEventListener('click', function() {
//   log('card title');
// })

// document.querySelector('#main').addEventListener('click', function () {
//   log('click bubbling up');
// })

// EVENT DELEGATION

// const del = document.querySelector('.delete-item');
// del.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  
  // if(e.target.className === 'fa fa-remove'){
  //   log('delete item');
  // }
  if (e.target.parentElement.classList.contains('delete-item')) {
    log('delete item');
    e.target.parentElement.parentElement.remove(); // now it will remove the element when we click the X icon
  }
}

