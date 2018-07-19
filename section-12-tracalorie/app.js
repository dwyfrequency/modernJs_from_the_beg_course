const log = console.log;

// : Storage Controller


// : Item Controller
const ItemCtrl = (function name(params) {

  // : Item Constructor
  const Item = (id, name, calories) => {
    this.id = id;
    this.name = name;
    this.calories = calories;
  } 

  // : Data Structure / State
  const data = {
    items: [
      {id: 0, name: "Salmon Dinner", calories: 850},
      {id: 1, name: "Cookie", calories: 400},
      {id: 1, name: "Eggs", calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

}());


// const itemCtrl = (() => {
//   log("item controller");
// })();

// : UI Controller
const UICtrl = (function () {

}());

// : APP Controller
const AppCtrl = ((ItemCtrl, UICtrl) => {

})(ItemCtrl, UICtrl);



// when using iife with es6 place the paranths() outside of the wrapping parens like above
