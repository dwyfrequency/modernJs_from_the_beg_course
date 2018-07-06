const log = console.log;

/* Convert to ES6 
const sayHello = function() {
  return `hello`;
}
*/

// When on one line, the arrow funct does not need a return statement 
// const sayHello = () => `Hello`;
// log(sayHello());

// Return object: If you want to return an object literal, you need to wrap it in parenthesis 
// const sayHello = () => ({ msg: 'Hello' });
// log(sayHello());

// Single parameters - we dont need parens 
// const sayHello = name => `Hello ${name}`;
// log(sayHello('Jack'));

// Multiple params - need parens
// const sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`;
// log(sayHello('Jack', 'Dwyer'));

const users = ['Nathan', 'John', 'William'];

// Without arrow functions
// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter with arrow functions
// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shortest version with arrow functions
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
