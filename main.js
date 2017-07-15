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
    this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
  });

  var clickTwo = squareTwo.addEventListener('click', function() {
    console.log('Square 2 was clicked');
    this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
  });

  var clickThree = squareThree.addEventListener('click', function() {
    console.log('Square 3 was clicked');
    this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
  });

  var clickFour = squareFour.addEventListener('click', function() {
    console.log('Square 4 was clicked');
    this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
  });

  var clickFive = squareFive.addEventListener('click', function() {
    console.log('Square 5 was clicked');
    this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
  });

  var clickSix = squareSix.addEventListener('click', function() {
    console.log('Square 6 was clicked');
    this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
  });

  var clickSeven = squareSeven.addEventListener('click', function() {
    console.log('Square 7 was clicked');
    this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
  });

  var clickEight = squareEight.addEventListener('click', function() {
    console.log('Square 8 was clicked');
    this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
  });

  var clickNine = squareNine.addEventListener('click', function() {
    console.log('Square 9 was clicked');
    this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
  });

  // Determine whose turn it is (X or O)
  var currentPlayer = document.querySelector('.current_player');
  var whoseTurn = 'X'

  if (whoseTurn === 'X') {
    this.innerHTML = '<span class="xo">X</span>'
  } else if (whoseTurn === 'O') {
    this.innerHTML = '<span class="xo">O</span>'
  }
  currentPlayer.innerText = whoseTurn;

  // Display the turn-name (X/O)
  // -- Need a spot in the markup for this
  // onClick (square):
  // -- check if square's occupied
  // ----- if so, do nothing
  // ----- if not, put name-of-turn in square



  // ----- check if a 'winning row' has been created
  // -------- if yes, game over
  // -------- if no, switch player, restart 'turn' function


  // jQuery to make squares change colour on click:
  // $('.square').click(function(){
  //   console.log('jQuery click alert');
  //   $(this).css({"background-color": "salmon" });
  //   this.innerHTML = '<span class="xo">Hi</span>';
  // })


// end of 'DOMContentLoaded'
});
