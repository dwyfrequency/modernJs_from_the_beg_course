const log = console.log;

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click 
// clearBtn.addEventListener('click', runEvent);

// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown : when you click down and hold 
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup : when you release holded click
// clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter : when the mouse enters the element
// card.addEventListener('mouseenter', runEvent);

// Mouseleave : when the mouse leaves the element
// card.addEventListener('mouseleave', runEvent);

// Mouseover : similar to the above; diff is that this will fire also with nested elements
// card.addEventListener('mouseover', runEvent);

// Mouseout : similar to the above; diff is that this will fire also with nested elements
// card.addEventListener('mouseout', runEvent);

// Mousemove : captures any movement inside the element
card.addEventListener('mousemove', runEvent);


// Event Handler
function runEvent(e) {
  log(`EVENT TYPE: ${e.type}`);

  heading.innerHTML = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`; // where are mouse is in relation to the element

  document.body.style.transition = `2s`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}