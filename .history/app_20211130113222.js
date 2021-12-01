// let val;

// val = document.scripts; 
// let scriptsArr = Array.from(val)

// scriptsArr.forEach(function(script) {
// console.log(script);
// }); 

// console.log(val);

// console.log(document.getElementById('box'));

// const meals = document.getElementsByClassName('meal-photo');

// console.log(meals);

let meals = document.getElementsByClassName('meals-photo'); 

meals = Array.from(meals);

meals.forEach(function(li){
console.log(li.className)
})

console.log('hello')