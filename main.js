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
  var clickOne = squareOne.addEventListener('click', function() {
    console.log('Square 1 was clicked');
  });

  var clickTwo = squareTwo.addEventListener('click', function() {
    console.log('Square 2 was clicked');
  });

  var clickThree = squareThree.addEventListener('click', function() {
    console.log('Square 3 was clicked');
  });

  var clickFour = squareFour.addEventListener('click', function() {
    console.log('Square 4 was clicked');
  });

  var clickFive = squareFive.addEventListener('click', function() {
    console.log('Square 5 was clicked');
  });

  var clickSix = squareSix.addEventListener('click', function() {
    console.log('Square 6 was clicked');
  });

  var clickSeven = squareSeven.addEventListener('click', function() {
    console.log('Square 7 was clicked');
  });

  var clickEight = squareEight.addEventListener('click', function() {
    console.log('Square 8 was clicked');
  });

  var clickNine = squareNine.addEventListener('click', function() {
    console.log('Square 9 was clicked');
  });

// end of 'DOMContentLoaded'
});
