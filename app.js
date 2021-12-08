  // INITIALIZING VARIABLES
let min = 0,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

  // INITIALIZING INTERFACE ELEMENTS
const game = document.getElementById('game'),
      minNum = document.querySelector('.min_num'),
      maxNum = document.querySelector('.max_num'),
      guessBtn = document.getElementById('guess_btn'),
      guessInput = document.getElementById('guess_input'),
      message = document.querySelector('.message');

  // ASSIGNING VARIABLES TO INTERFACE ELEMENTS 
minNum.textContent = min;
maxNum.textContent = max;

  // LISTENING FOR EVENTS 
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Do enter a number between ${min} and ${max}`, `red`);
  } // this condition validates the right set of numbers 

  if(guess === winningNum) {
      guessInput.disable = true; // this disables the input

      guessInput.style.borderColor = 'green'; // this changes the input border to green, indicating a win

      setMessage(`Congratulations!!! ${winningNum} is correct, YOU WIN!!`, `green`)
  } else {

  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}; // this sets the right messages 