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
    logData: function() {
      return data;
    }
  }
})(); // The Item Controller

const UICtrl = (function(){

})(); // The UI Controller

const App = (function(itemCtrl, UICtrl){

  return {
    init: function() {
      console.log('Application has started');
    }
  }

})(itemCtrl, UICtrl); // The App Controller

App.init();