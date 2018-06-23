const log = console.log;
let val; 

// gives us the entire doc, from doc type to the ending tag 
val = document;
log(val);

// gives us an html collection of the entire document 
val = document.all;
log(val);

// can access items in the array with indexes
val = document.all[5];
log(val);

// gives us the head 
val = document.head; 
log(val);

// gives us the body 
val = document.body;
log(val);

// char set
val = document.characterSet;
log(val);

// domain
val = document.domain;
log(val);

// url 
val = document.url;
log(val);

// forms 
val = document.forms;
log(val);

val = document.forms[0];
log(val);

// retrieve the method of the form ie. get/put/post
val = document.forms[0].method;
log(val);

// retrieve all links 
val = document.links;
log(val);

// retrieve the class names for the indiv links
val = document.links[0].className;
log(val);

// retrieve dom token list of the classes
val = document.links[0].classList;
log(val);

// retrieve all the images 
val = document.images;
log(val);

// retrieve all the scripts 
let scripts = document.scripts;
log(scripts);

// turn html collection into an Array so we can use array methods 
let scriptsArr = Array.from(scripts);

// retrieve all sources for the scripts 
scriptsArr.forEach(script => console.log(script.getAttribute('src')));




