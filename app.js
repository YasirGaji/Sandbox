const itemCtrl = (function(){
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  const data = {
    items: [
      {
        id: 0,
        name: 'Toast',
        calories: 10
      },

      {
        id: 1,
        name: 'Amala',
        calories: 100
      },

      {
        id: 2,
        name: 'Yam and Egg',
        calories: 1300
      }
    ],
    currentItem: null,
    totalCalories: 0
  }

  return {
    getItems: function() {
      return data.items;
    },

    addItem: function(name, calories) {
      let ID;
        // CREATE ID
      if(data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

        // CREATE CALORIES TO NUMBER
      calories = parseInt(calories);

        // CREATE NEW ITEM
      newItem = new Item(ID, name, calories);

        // ADD TO ITEMS ARRAY
      data.items.push(newItem);

      return newItem;
    },

    logData: function() {
      return data;
    }
  }
})(); // The Item Controller



const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
  }

    // PUBLIC METHODS
  return {
    populateItemList: function(items) {
      let html = '';

      items.forEach(function(item){
        html += `
          <li class="collection-item" id="item-${item.id}">
            <div>
              <strong>Meal: </strong>
              <span class="name">${item.name}</span>
              <strong>Calories: </strong>
              <span class="calories">${item.calories}</span>
              <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
              </a>
            </div>
          </li>
        `;
      });

        // INSERT LIST ITEMS
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    getSelectors: function() {
      return UISelectors;
    }
  }
})(); // The UI Controller



const App = (function(itemCtrl, UICtrl){
    // LOAD EVENT LISTENERS
  const loadEventListeners = function() {
      // GET UI SELECTORS
    const UISelectors = UICtrl.getSelectors();

      // ADD ITEM EVENT
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    //   // EDIT ITEM EVENT
    // document.querySelector(UISelectors.updateBtn).addEventListener('click', itemEditClick);

    //   // DELETE ITEM EVENT
    // document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

     
  }

    // ADD ITEM SUBMIT
  const itemAddSubmit = function(e) {
      // GET FORM INPUT FROM UI CONTROLLER
    const input = UICtrl.getItemInput();

      // CHECK FOR INPUT VALUES
    if(input.name !== '' && input.calories !== '') {
        // ADD ITEM
      const newItem = itemCtrl.addItem(input.name, input.calories);

        // ADD ITEM TO UI
      UICtrl.populateItemList(itemCtrl.getItems());

        // CLEAR INPUTS
      UICtrl.clearInput();
    }

    e.preventDefault();
  }


    // THE PUBLIC METHODS
  return {
    init: function() {
      console.log('Application has started');

      const Items = itemCtrl.getItems();

      UICtrl.populateItemList(Items);

      loadEventListeners();
    }
  }

})(itemCtrl, UICtrl); // The App Controller

App.init();