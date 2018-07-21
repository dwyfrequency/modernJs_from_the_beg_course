const log = console.log;
/**/

// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

// must include new keyword to bound this to the newly created object
const jack = new Person('jack', 'dwyer');
log(jack.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  // allows us to call another function from somewhere else in the current context
  Person.call(this, firstName, lastName); // passing the parameter this - ex. functionName.call(obj, functArgs)
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
/* now the __proto__ points to Person, but we want it to also return Customer - so we need the line below*/

// Make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;
log(Customer.prototype);

// Create customer
const customer1 = new Customer('tom', 'taybe', '448-200-1321', 'standard');
log(customer1);

// Override the greeting for customer
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}. Welcome to our company!`;
}

Customer.prototype.inquire = function () {
  return `How much does this cost?`;
}

log(customer1.greeting());

// Testing 
function Doctor(firstName, lastName, privatePractice) {
  // allows us to call another function from somewhere else in the current context. Essentially this is calling super()
  Person.call(this, firstName, lastName); // passing the parameter this - ex. functionName.call(obj, functArgs)
  this.privatePractice = privatePractice;
}

// Set prototype for inheritance 
Doctor.prototype = Object.create(Person.prototype);
// Make Doctor.prototype point to Doctor
Doctor.prototype.constructor = Doctor;
const dr = new Doctor('tom', 'santeria', true);
log(dr);