const log = console.log;

// : Storage Controller


// : Item Controller
const ItemCtrl = (function () {

  // : Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

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

  // : Public methods
  return {

    addItem ({name, calories}) {

      log(name, calories);
      let ID;
      // create id
      if (data.items.length) {
        ID = data.items[data.items.length - 1].id++;
      } else {
        ID = 1;
      }

      // create new item - must convert calories to int val
      const newItem = new Item(ID, name, parseInt(calories));

      // add to items array
      data.items.push(newItem);
      this.logData();
    },
    getItems () {

      return data.items;

    },
    logData () {

      return data;

    }
  }

}());


// const itemCtrl = (() => {
//   log("item controller");
// })();

// : UI Controller
const UICtrl = (function () {

  const UISelectors = {
    itemList: "#item-list",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    backBtn: ".back-btn"
  }; // closure stores querySelector values

  // : Public methods
  return {
    getItemInput () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },
    getSelectors () {
      return UISelectors;
    },
    populateItemList (items) {
      // create html from list of items
      const html = items.reduce((accum, item) => {

        return `${accum}
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
        </li>`;

      }, "");

      document
        .querySelector(UISelectors.itemList) // grab from closure
        .innerHTML = html;
    }
  }

}());

// : APP Controller
const AppCtrl = ((ItemCtrl, UICtrl) => {

  // load event listeners - all initial events will go in here
  const loadEventListeners = () => {
  // get ui selectors
  const UISelectors = UICtrl.getSelectors();

    // add item Submit
    const itemAddSubmit = e => {
      // Get form input from UI Controller
      const input = UICtrl.getItemInput();

      /* check for name and calories input - if either are blank it will be falsy 
      - note calories is expecting number input will be blank with string 
      - note this number check is only enforced by the html, our js still gets string val for calories*/
      if (input.name && input.calories) {
        // add item
        const newItem = ItemCtrl.addItem(input);
      }
      e.preventDefault();
    };

    // add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);

  };

  // : Public Methods
  return {

    init () {
      log('Initializing App...');
      // get Items from data structure 
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);

      // : Load event listeners 
      loadEventListeners();
    }

  }

})(ItemCtrl, UICtrl);

AppCtrl.init();

// when using iife with es6 place the paranths() outside of the wrapping parens like above
