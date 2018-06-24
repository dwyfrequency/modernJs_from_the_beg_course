const log = console.log;

let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

log(list);
log(listItem);

/* Get child nodes -> returns NodeList of all lis and text nodes (the text nodes are the line breaks). It will also capture comments...everything in the list below 
We're going to use .children more*/
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType; // Numbers below
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype
// console.log(val);

// Get children element nodes -> returns HTMLCollection of all lis without the text linebreak nodes
val = list.children; 
val = list.children[1];
val = list.children[1].textContent = 'Jack Attack';
// console.log(val);

// Get children of children
val = list.children[3].children[0].classList;

// firstChild will include things like text; better to use firstElementChild
val = list.firstChild;
val = list.firstElementChild;

// Same applies to last
val = list.lastChild;
val = list.lastElementChild;

// Get the count of the total child elements
val = list.childElementCount;

// Get parent node -> most times node and element will return the same thing
val = list.parentNode;
// console.log(val);
val = list.parentElement;
// console.log(val);

// Below, we are traversing up the dom by going to the parent elements
val = list.parentElement.parentElement;
// console.log(val);

// Get next sibling : things that are next to each other
// just like with firstChild and childNodes, this deals with other nodes not just elements
val = listItem.nextSibling;
// if we just want the element use nextElementSibling
val = listItem.nextElementSibling.nextElementSibling;

// Get prev sibling
val = val.previousElementSibling;

console.log(val);

