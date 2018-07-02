const log = console.log;

// Object with the prototype methods 
const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getMoney: function(dollaz) {
    this.balance += dollaz;
  }
}

// (1) Alternative way to create objects 
const mary = Object.create(personPrototypes);
mary.fn = 'Mary';
mary.ln = 'Williams';
mary.age = 27;
mary.balance = 0;
mary.getMoney(20);
log(mary);

// (2) Alternative way to create objects
// First param is prototype methods in object, second is an object of our properties
const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Trav'},
  balance: {value: 10000}
})

log(brad);
log(brad.greeting());