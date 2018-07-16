const log = console.log;

// : Destructuring Assignment
let a, b, rest;
[a, b] = [100, 200];
log(a, b); // 100, 200

// : Rest pattern - ... assigns whatever is left over into an array
// : Array
[a, b, ...rest] = [100, 200, 300, 400, 500];
log(a, b, rest); // 100 200 [300, 400, 500]

// : Object - must use () to make it an expression; The parentheses around the expressions are necessary because statements must not begin with curly braces in JavaScript
/* : Because code blocks begin with a curly brace, statements must not begin with one. This is unfortunate when using object destructuring in an assignment so we need () */
({a, b} = {a: "alpha", b: "bravo"});
log(a, b); // alpha bravo

({ a, b, ...rest } = { a: "alpha", b: "bravo", c: "charlie", d: "delta" });
log(a, b, rest); // alpha bravo {c: "charlie", d: "delta"}

// : Array destructuring
// const people = ['jack', 'doodles', 'tommy'];
// const [person1, person2, person3] = people;
// log({ person1, person2, person3 }); // {person1: "jack", person2: "doodles", person3: "tommy"}

function getPeople() {
  return ['jack', 'doodles', 'tommy'];
}

const [person1, person2, person3] = getPeople();
log({ person1, person2, person3 }); // {person1: "jack", person2: "doodles", person3: "tommy"}

// : Object destructuring
const person = {
  age: 32,
  city: 'Miami',
  gender: 'Male',
  name: 'John Doe',
  sayHello: function() {
    log('Hello');
  }
}

const { name, city, sayHello} = person;
log(name, city);
sayHello();
