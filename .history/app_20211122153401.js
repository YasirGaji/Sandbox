let val;

val = document.scripts; 
let scriptsArr = Array.from(val)

scriptsArr.forEach(function(script) {
console.log(script);
}); 

console.log(val);