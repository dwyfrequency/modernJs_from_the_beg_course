const log = console.log;

// Object literal - ok for one off objs, but not very reusable
const jack = {
  name: 'Jack',
  age: 30
}

// Person Constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// log(this); // gives us the global object b/c in the global scope

// To instantiate a obj, we use the new keyword
const jackie = new Person('jack', '1994-01-28');


log(jack);
log(jackie);
log(jackie.calculateAge());