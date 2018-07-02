const log = console.log;
/* each obj has a prototype - a proto is an obj itself too. All objects inherit their methods and properties from their prototypes 

Object literals inherit from the Object.prototype
When created with a constructor, it will come from <Constructor Name>.prototype ie. Person.prototype

Prototype chain.
The prototype is not something we can loop through with a for in loop. The browser does give us a pointer __proto__ where we can see the object's prototype. Clicking through all of the points, you can see the entire prototype chain */

// Person Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  // this.age = age;
  this.birthday = new Date(dob);
}

/* Calculate age is not going to be unique per person so we should put it in the prototype. 
No need for it to be in the constructor
Now, when we look at the __proto__ drop down in the browser, we can see the function */

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

// Setter for new lastname after getting married
Person.prototype.getsMarried = function name(newLastName) {
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '1990-08-12');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

log(john);
log(mary);
log(mary.calculateAge());
log(mary.getFullName());
mary.getsMarried('SweetFeet');
log(mary.getFullName());

// Object prototype has method hasOwnProperty - Determines whether an object has a property with the specified name.
log(mary.hasOwnProperty('firstName')); // true - b/c it's
log(mary.hasOwnProperty('getFullName')); // false - b/c in the prototype - it is not part of its own property. explained, the prototype is its own object