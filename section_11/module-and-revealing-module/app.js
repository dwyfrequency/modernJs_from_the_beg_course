const log = console.log;

// : Separate the code in files to export functionalities

// : Basic structure

// (function() {
//   // : Declar private variables and funcs 
//   return {
//     // Declare public variables and functions
//   } 
// })(); // immediately executes the function

// must wrap the immediately executes function in paranthesis 

(() => log("hu"))(); // es6
(function () {

  log("hu2");

}());

// : Standard Module Pattern

const UICtrl = (function() {
  let _text = "Hello world!";
  const changeText = () => {
    const element = document.querySelector('h1');
    element.textContent = _text;
  }

  return {
    callChangeText() {
      changeText()
      log(_text);
    }
  }
}());

const btn = document.querySelector("[type='button']");
btn.addEventListener("click", () => {

  UICtrl.callChangeText();

});

UICtrl.callChangeText();
// log(UICtrl.text); // undefined - ie. b/c private variable
// log(UICtrl.changeText()); // Error - ie. b/c private func 
// all of this works b/c of closures

// : Revealing the module pattern - directly reveals the methods inside the closure
const ItemCtrl = (function() {

  let _data = [];
  function add(item) {_data.push(item)};
  function get(id) {return _data.find(obj => obj.id === id)}

  return {
    add, // uses destructuring for unpacking the methods
    get
  }
    
  }());

// generator for creating ids 
function *generateId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const idGen = generateId();

ItemCtrl.add({ person: "tom", 
               id: idGen.next().value
            });
ItemCtrl.add({ person: "bod", id: idGen.next().value});
ItemCtrl.add({ person: "sally", id: idGen.next().value});
log(ItemCtrl.get(1)); // {person: "tom", id: 1}
log(ItemCtrl.get(2)); // {person: "bod", id: 2}
log(ItemCtrl.get(3).person); // sally

