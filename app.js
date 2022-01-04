  // STORAGE CONTROLLER 
const StorageCtrl = (function() {
  return {
    storeItem: function(item) {
      let items;

        // Check if any items in local storage
      if(localStorage.getItem('items') === null) {
        items = [];

        items.push(item);

        localStorage.setItem('items', JSON.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem('items'));

        items.push(item);

        localStorage.setItem('items', JSON.stringify(items));
      }
    },

    getItemsFromStorage: function() {
      let items;

      if(localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'))
      }

      return items;
    },

    updateItemStorage: function(updatedItem) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach(function(item, index) {
        if(updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem);
        }
      });

      localStorage.setItem('items', JSON.stringify(items));
    }
  }
})();



  // ITEM CONTROLLER
const ItemCtrl = (function(){
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

    // DATA STORAGE/STATE
  const data = {
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }

    // PUBLCI METHODS
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

        // PARSE CALORIES TO NUMBER
      calories = parseInt(calories);

        // CREATE NEW ITEM
      newItem = new Item(ID, name, calories);

        // ADD TO ITEMS ARRAY
      data.items.push(newItem);

      return newItem;
    },

    updateItem: function(name, calories) {
      calories = parseInt(calories);

      let found = null;

      data.items.forEach(function(item) {
        if(item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });

      return found;
    },

    deleteItem: function(id) {
        // get ids
      const ids = data.items.map(function(item) {
        return item.id
      });

        // get index
      const index = ids.indexOf(id);

        // remove item 
      data.items.splice(index, 1);
    },

    clearAllItems: function() {
      data.items = [];
    },

    getItemById: function(id) {
      let found = null;

      data.items.forEach(function(item) {
        if(item.id === id) {
          found = item;
        }
      });

      return found;
    },

    setCurrentItem: function(item) {
      data.currentItem = item;
    },

    getCurrentItem: function() {
      return data.currentItem;
    },

    getTotalCalories: function() {
      let total = 0;

      data.items.forEach(function(item){
        total += item.calories;
      });

      data.totalCalories = total;

      return data.totalCalories;
    },

    logData: function() {
      return data;
    }
  }
})(); // The Item Controller



  // UI CONTROLLER 
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    clearBtn: '.clear-btn',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
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
              <i class="uil uil-pen edit-item"></i>
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

    addListItem: function(item) {
      document.querySelector(UISelectors.itemList).style.display = 'block';

      const li = document.createElement('li');

      li.className = 'collection-item';

      li.id = `item-${item.id}`;

      li.innerHTML = `
        <div>
          <strong>Meal: </strong>
          <span class="name">${item.name}</span>
          <strong>Calories: </strong>
          <span class="calories">${item.calories}</span>
          <a href="#" class="secondary-content">
          <i class="uil uil-pen edit-item"></i>
          </a>
        </div>
      `;

      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },

    updateListItem: function(item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      listItems = Array.from(listItems);

      listItems.forEach(function(listItem) {
        const itemID = listItem.getAttribute('id');

        if(itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `
            <div>
              <strong>Meal: </strong>
              <span class="name">${item.name}</span>
              <strong>Calories: </strong>
              <span class="calories">${item.calories}</span>
              <a href="#" class="secondary-content">
              <i class="uil uil-pen edit-item"></i>
              </a>
            </div>
          `;
        }
      })
    },

    deleteListItem: function(id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },

    clearInput: function() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },

    removeItems: function() {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      listItems = Array.from(listItems);

      listItems.forEach(function(item) {
        item.remove();
      });
    },

    hideList: function() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    addItemToForm: function() {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },

    showTotalCalories: function(totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },

    clearEditState: function() {
      UICtrl.clearInput();

      document.querySelector(UISelectors.updateBtn).style.display = 'none';

      document.querySelector(UISelectors.deleteBtn).style.display = 'none';

      document.querySelector(UISelectors.backBtn).style.display = 'none';

      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },

    showEditState: function() {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';

      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';

      document.querySelector(UISelectors.backBtn).style.display = 'inline';

      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },

    getSelectors: function() {
      return UISelectors;
    }
  }
})(); // The UI Controller



  // APP CONTROLLER
const App = (function(ItemCtrl, StorageCtrl, UICtrl){
    // LOAD EVENT LISTENERS
  const loadEventListeners = function() {
      // GET UI SELECTORS
    const UISelectors = UICtrl.getSelectors();

      // ADD ITEM EVENT
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

      // EDIT ICON EVENT
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

      // UPDATE ITEM EVENT
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

      // DISABLE SUBMIT ON ENTER KEY
    document.addEventListener('keypress', disableEnterKey);

      // BACK BUTTON EVENT
    document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

      // DELETE ITEM EVENT
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

      // CLEAR ITEMS EVENT
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
    
  }

    // ADD ITEM SUBMIT
  const itemAddSubmit = function(e) {
      // GET FORM INPUT FROM UI CONTROLLER
    const input = UICtrl.getItemInput();

      // CHECK FOR INPUT VALUES
    if(input.name !== '' && input.calories !== '') {
        // ADD ITEM
      const newItem = ItemCtrl.addItem(input.name, input.calories);

        // ADD ITEM TO UI
      UICtrl.addListItem(newItem);

        // GET TOTAL CALORIES
      const totalCalories = ItemCtrl.getTotalCalories();

      UICtrl.showTotalCalories(totalCalories);

        // STORE IN LS
      StorageCtrl.storeItem(newItem);

        // CLEAR INPUTS
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

    // EDIT ITEM 
  const itemEditClick = function(e) {
    if(e.target.classList.contains('edit-item')) {
      const listId = e.target.parentNode.parentNode.parentNode.id;

      const listIdArr = listId.split('-');

      const id = parseInt(listIdArr[1]);

      const itemToEdit = ItemCtrl.getItemById(id);

      ItemCtrl.setCurrentItem(itemToEdit);

      UICtrl.addItemToForm();
    }

    e.preventDefault();
  }

    // UPDATE ITEM
  const itemUpdateSubmit = function(e) {
    console.log('update item');

    const input = UICtrl.getItemInput();

    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    UICtrl.updateListItem(updatedItem);

      // GET TOTAL CALORIES
    const totalCalories = ItemCtrl.getTotalCalories();

    UICtrl.showTotalCalories(totalCalories);

      // UPDATE LS
    StorageCtrl.updateItemStorage(updatedItem);

    UICtrl.clearEditState();

    e.preventDefault();
  }
    // DISABLE ENTER KEY
  const disableEnterKey = function(e) {
    if(e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      return false;
    }    
  }

    // DELETE ITEM
  const itemDeleteSubmit = function(e) {
    console.log('delete item');

      // get current item
    const currentItem = ItemCtrl.getCurrentItem();

      // delete from data structure
    ItemCtrl.deleteItem(currentItem.id);

      // delete from UI
    UICtrl.deleteListItem(currentItem.id);

      // GET TOTAL CALORIES
    const totalCalories = ItemCtrl.getTotalCalories();

    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();

    e.preventDefault();
  }

    // CLEAR ALL ITEMS
  const clearAllItemsClick = function() {
    console.log('clear all items');

      // delete all items from data structure
    ItemCtrl.clearAllItems();

      // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    UICtrl.showTotalCalories(totalCalories);

      // delete all items from UI
    UICtrl.removeItems();

    UICtrl.hideList();
  }

    // THE PUBLIC METHODS
  return {
    init: function() {
      UICtrl.clearEditState();

      console.log('Application has started');

      const Items = ItemCtrl.getItems();

      if(Items.length === 0) {
        UICtrl.hideList();
      }else{
        UICtrl.populateItemList(Items);
      }

        // GET TOTAL CALORIES
      const totalCalories = ItemCtrl.getTotalCalories();

      UICtrl.showTotalCalories(totalCalories);

      loadEventListeners();
    }
  }

})(ItemCtrl, StorageCtrl, UICtrl); // The App Controller

App.init();