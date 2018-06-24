const log = console.log;

// function is taking the event object as a parameter 
const onClick = function(e) {
  /*clientX: horizontal coordinate within the application's client area at which the event occurred
  clientY:  vertical coordinate within the application's client area at which the event occurred(as opposed to the coordinates within the page). For example, clicking in the top-left corner of the client area will always result in a mouse event with a clientY value of 0, regardless of whether the page is scrolled vertically
  target: represents the element that the event actually happened on*/
  log(e);

  // Event target element
  let val = e.target; // a tag 
  val = e.target.className;
  val = e.target.classList;
  // e.target.innerText = 'Hello'; // Change text

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY; // number of pixels from the top (verticle axis); varies depending on where you click on the button
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY // provides the offset in the Y coordinate of the mouse pointer between that event and the padding edge of the target node. 
  val = e.offsetX // X coordinate of the mouse pointer between that event and the padding edge of the target node

  log(val);

};


document.querySelector('.clear-tasks').addEventListener('click', onClick);