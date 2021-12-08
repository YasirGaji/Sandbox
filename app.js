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
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play_again') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Do enter a number between ${min} and ${max}`, `red`);
  } // this condition validates the right set of numbers 

  if(guess === winningNum) {
      gameOver(true, `Congratulations!!! ${winningNum} is correct, YOU WIN!!`)  // this condition satisfies the win case
  } else {
    guessesLeft -= 1; // this deducts number of guess chances 

    if(guessesLeft === 0) {
      gameOver(false, `${winningNum} is the correct number, GAME OVER YOU LOSE!`); // this condition exerts the game over state
    } else {
      guessInput.value = '';
      guessInput.style.borderColor = 'red';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
    }
  }
});

function gameOver(win, msg) {
  let color;
  win === true ? color = 'green' : color = 'red';

  guessInput.disable = true; // this disables the input

  guessInput.style.borderColor = color; // this changes the input border to green, indicating a win

  message.style.color = color; // this changes the text color to green, indicating a win

  setMessage(msg); // assigning the msg parameter as an arguement to setMessage()

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play_again';
} // the game over function

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}; // this sets the right messages 