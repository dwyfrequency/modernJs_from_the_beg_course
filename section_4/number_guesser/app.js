const log = console.log;
/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets 2 certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values 
let min = 1, 
    max = 10,
    winningNum = getRandNumBetween(min, max),
    guessesLeft = 3;

// UI Elements
const gameWrapperUI = document.querySelector('#game'),
      minNumUI = document.querySelector('.min-num'),
      maxNumUI = document.querySelector('.max-num'),
      guessBtnUI = document.querySelector('#guess-btn'),
      guessInputUI = document.querySelector('#guess-input'),
      guessMsgUI = document.querySelector('.message');
// log({ gameWrapperUI, minNumUI, maxNumUI, guessBtnUI, guessInputUI, guessMsgUI });

// Assign UI min and max 
minNumUI.textContent = min;
maxNumUI.textContent = max;

// Play again event listener
gameWrapperUI.addEventListener('mousedown', function(e) {
  /* we use a mousedown because of event pagination. 
  the same click triggering the submit will bubble to this one if it's looking for a click */
  if(e.target.className === "play-again") {
    window.location.reload();
  }
});


// Listen for guess
guessBtnUI.addEventListener('click', () => {
  log(guessInputUI.value);
  let guess = parseInt(guessInputUI.value);
  // Validate guess
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, `red`);
  } 

  // Check if you're a winner
  if (guess === winningNum ) {
    // Game over - winner!!!!

    gameOver(true, `${winningNum} is correct`, `green`);
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - lose
      gameOver(false, `Game over, you lost. The correct number was ${winningNum}`, `red`);
    } else {
      // Game continues - answer wrong
      // Clear Input
      guessInputUI.value = '';

      setMessage(`${guess} is not correct. You have ${guessesLeft} remaining.`, `red`);
    }
  }
})

function gameOver(won, msg) {
  const color = won ? `green` : `red`;
  log(color);
  // Disable input 
  guessInputUI.disabled = true;
  // Change border color
  guessInputUI.style.borderColor = color;
  // Set message
  setMessage(`${winningNum} is correct`, `${color}`);

  // Play again? 
  guessBtnUI.value = 'Play Again?';
  guessBtnUI.className += 'play-again';
}

// Set message 
function setMessage(msg, color) {
  guessMsgUI.style.color = color;
  guessMsgUI.textContent = msg;
}

// Get winning number
function getRandNumBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 

}
