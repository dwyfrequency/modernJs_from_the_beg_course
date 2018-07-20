const log = console.log;

// : Storage Controller


// : Item Controller
const ItemCtrl = (function () {

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

  // : Public methods
  return {

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
    addBtn: ".add-btn"
  }; // closure stores querySelector values

  // : Public methods
  return {
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
  // load event listeners
  const loadEventListeners = () => {
    // get ui selectors
    const UISelectors = UICtrl.getSelectors();

    // add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);
  };

  // add item Submit
  const itemAddSubmit = e => {
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    log("Add");
    e.preventDefault();
  };

  // : Public Methods
  return {

    init () {
      log('Initializing App...');
      // get Items from data structure 
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);
    }

  }

})(ItemCtrl, UICtrl);

AppCtrl.init();

// when using iife with es6 place the paranths() outside of the wrapping parens like above
