const log = console.log;

const user = {email: 'jdow@gmail.com'};

try {
  // Produce a ReferenceError
  // myFunction();

  // Produces a TypeError 
  // null.myFunction(); // cannot call a property of null

  // Produce a SyntaxError
  // log(eval(`Hello world`));

  // Will produce a URIError
  // decodeURIComponent('%');

  // // throws our own custom error to the catch block
  // if (!user.name) {
  //   throw 'User has no name'; // create your own error. It is just throwing a string
  // }

  // throws our own custom error to the catch block
  if (!user.name) {
    throw new SyntaxError('User has no name'); // we can format like a specific error
  }
} catch(e) {

  /* Error handling for myFunction(); */
  // log(e); //gives you name (ReferenceError) and message (myFunction is not defined) 
  // log(e.message); // just gives you the msg
  // log(e.name); // just get the name 
  // log(e instanceof ReferenceError); // returns bool : true
  // log(e instanceof TypeError) // returns bool : false 

  /* Error handling for null.myFunction(); */
  // log(`${e.name}: it's null dawg. Can't do that! `)

  /* Error handling for eval(`Hello world`); */
  // log(e); // SyntaxError: Unexpected identifier

  /* Error handling for decodeURIComponent('%'); */
  // log(e); // URIError: URI malformed

  /* Error handling for our throw statement */
  // log(e); // User has no name

  /* Error handling for throw new*/
  log(e);
  
} finally {
  /* finally block runs no matter what */
  log('Finally block runs regardless of result...') 
}

log('Program continues...');
