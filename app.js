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

    logData: function() {
      return data;
    }
  }
})(); // The Item Controller



const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
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
    }
  }
})(); // The UI Controller



const App = (function(itemCtrl, UICtrl){

    // THE PUBLIC METHODS
  return {
    init: function() {
      console.log('Application has started');

      const Items = itemCtrl.getItems();

      UICtrl.populateItemList(Items);
    }
  }

})(itemCtrl, UICtrl); // The App Controller

App.init();