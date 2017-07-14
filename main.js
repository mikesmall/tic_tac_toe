document.addEventListener('DOMContentLoaded', function() {

  // Button-click to reset the board:
  var newGame = document.querySelector('.new_game');
  newGame.addEventListener('click', function() {
    console.log('The button was clicked');
    location.reload();
  });

  // Variables to represent each square:
  var squareOne = document.querySelector('.one');
  var squareTwo = document.querySelector('.two');
  var squareThree = document.querySelector('.three');
  var squareFour = document.querySelector('.four');
  var squareFive = document.querySelector('.five');
  var squareSix = document.querySelector('.six');
  var squareSeven = document.querySelector('.seven');
  var squareEight = document.querySelector('.eight');
  var squareNine = document.querySelector('.nine');

  // Event listeners for each square:
  squareOne.addEventListener('click', clickEvent);
  squareTwo.addEventListener('click', clickEvent);
  squareThree.addEventListener('click', clickEvent);
  squareFour.addEventListener('click', clickEvent);
  squareFive.addEventListener('click', clickEvent);
  squareSix.addEventListener('click', clickEvent);
  squareSeven.addEventListener('click', clickEvent);
  squareEight.addEventListener('click', clickEvent);
  squareNine.addEventListener('click', clickEvent);

// end of 'DOMContentLoaded'
});
