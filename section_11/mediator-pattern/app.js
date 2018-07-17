const log = console.log;

/* : Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently. */

const User = function (name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send(message, to) {
    this.chatroom.send(message, this, to); // this is pertaining to the user
  },
  recieve(message, from) {
    log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function (params) {
  const users = {}; // list of users 

  return {
    register(user) {
      users[user.name] = user;
      user.chatroom = this; // refers to the current chatroom 
    },
    send(message, from, to) {
      if(to) {
        // : Single user message
        to.recieve(message, from);
      } else {
        // : Mass message
        for(let key in users) {
          if(users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    }
  }
}

const brad = new User('Brad');
const sarah = new User('Sarah');
const jeff = new User('Jeff');

const chatroom = new Chatroom();
chatroom.register(brad);
chatroom.register(sarah);
chatroom.register(jeff);

brad.send("hello jeff", jeff);
sarah.send("you rock!", brad);
jeff.send("hello everyone!");

