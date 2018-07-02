const log = console.log;
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = new Date(dob);
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
  
  calculateAge() {
    const diff = Date.now() - this.birthdate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  static exclaims(msg) {
    return `${msg}!`;
  }
}

/* Looking at the proto, you can see the Person constructor assigned &&
Any method assigned in the class will be on the prototype*/
const mary = new Person('Mary', 'Williams', '1980-02-23');
log(mary);
log(mary.calculateAge());

// Static methods - used without instantiating an object
log(Person.exclaims('the shoe is purple'));

