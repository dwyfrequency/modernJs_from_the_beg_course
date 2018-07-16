const log = console.log;

/* : Factory Pattern - is any function which is not a class or constructor that returns a (presumably new) object. In JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function. 
https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1 */

function MemberFactory() {
  log(`this - outer: ${this.toString()}`);
  this.createMember = function(name, type) {
    log(`this - inner: ${this.toString()}`);
    let member;
    if(type === "simple") {
      member = new SimpleMemberShip(name);
    } else if(type === "standard") {
      member = new StandardMemberShip(name);
    } else if (type === "standard") {
      member = new SuperMemberShip(name);
    }

    member.type = type;

    member.define = function() {log(`${this.name} ${this.type} : ${this.cost}`)};

    return member;
  }
}

const SimpleMemberShip = function(name) {
  this.name = name;
  this.cost = '$5';
};

const StandardMemberShip = function(name) {
  this.name = name;
  this.cost = '$15';
}; 

const SuperMemberShip = function(name) {
  this.name = name;
  this.cost = '$25';
}; 

const members = [];
const factory = new MemberFactory();
members.push(factory.createMember("sarah", "simple"));// create and add new members
log(members);

members.forEach(member => {
  member.define();
});
