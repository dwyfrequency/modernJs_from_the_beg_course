const log = console.log;

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

// use extends to inherit from a super class 
// subclass extends super
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }
  beRude() {
    return `I want to speak to the manager`;
  }

  static getMemberShipCost() {
    return 500;
  }
}

// Point will show Person, but if we click on it. We will see our Customer constructor. When we click deeper we will see the actual Person proto methods
const john = new Customer('jon', 'doe', '222-222-2222', 'standard');
log(john);
log(john.greeting());

// Call static method 
log(Customer.getMemberShipCost());