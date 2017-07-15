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

  // Player X goes first!
  var whoseTurn = 'X';

  // Show whose turn it is:
  var displayPlayer = document.querySelector('.display_player');
  displayPlayer.innerText = whoseTurn;

  // Event listeners for each square:

  var clickOne = squareOne.addEventListener('click', function() {
    if (this.innerText == '') {
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      if (whoseTurn === 'X') {
        whoseTurn = 'O'
      } else if (whoseTurn === 'O') {
        whoseTurn = 'X'
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickTwo = squareTwo.addEventListener('click', function() {
    if (this.innerText == '') {
      console.log("yup");
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      if (whoseTurn === 'X') {
        whoseTurn = 'O'
      } else if (whoseTurn === 'O') {
        whoseTurn = 'X'
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickThree = squareThree.addEventListener('click', function() {
    if (this.innerText == '') {
      console.log("yup");
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      if (whoseTurn === 'X') {
        whoseTurn = 'O'
      } else if (whoseTurn === 'O') {
        whoseTurn = 'X'
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickFour = squareFour.addEventListener('click', function() {
    if (this.innerText == '') {
      console.log("yup");
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      if (whoseTurn === 'X') {
        whoseTurn = 'O'
      } else if (whoseTurn === 'O') {
        whoseTurn = 'X'
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickFive = squareFive.addEventListener('click', function() {
    if (this.innerText == '') {
      console.log("yup");
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      if (whoseTurn === 'X') {
        whoseTurn = 'O'
      } else if (whoseTurn === 'O') {
        whoseTurn = 'X'
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickSix = squareSix.addEventListener('click', function() {
    if (this.innerText == '') {
      console.log("yup");
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      if (whoseTurn === 'X') {
        whoseTurn = 'O'
      } else if (whoseTurn === 'O') {
        whoseTurn = 'X'
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickSeven = squareSeven.addEventListener('click', function() {
    if (this.innerText == '') {
      console.log("yup");
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      if (whoseTurn === 'X') {
        whoseTurn = 'O'
      } else if (whoseTurn === 'O') {
        whoseTurn = 'X'
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickEight = squareEight.addEventListener('click', function() {
    if (this.innerText == '') {
      console.log("yup");
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      if (whoseTurn === 'X') {
        whoseTurn = 'O'
      } else if (whoseTurn === 'O') {
        whoseTurn = 'X'
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickNine = squareNine.addEventListener('click', function() {
    if (this.innerText == '') {
      console.log("yup");
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      if (whoseTurn === 'X') {
        whoseTurn = 'O'
      } else if (whoseTurn === 'O') {
        whoseTurn = 'X'
      }
      displayPlayer.innerText = whoseTurn;
    };
  });


  //
  // if (whoseTurn === 'X') {
  //   this.innerHTML = '<span class="xo">X</span>'
  // } else if (whoseTurn === 'O') {
  //   this.innerHTML = '<span class="xo">O</span>'
  // }

  // onClick (square):
  // -- check if square's occupied
  // ----- if so, do nothing
  // ----- if not, put name-of-turn in square

  // ----- check if a 'winning row' has been created
  // -------- if yes, game over
  // -------- if no, switch player, restart 'turn' function


  // A jQuery alternative to make squares change colour on click:

  // $('.square').click(function(){
  //   console.log('jQuery click alert');
  //   $(this).css({"background-color": "salmon" });
  //   this.innerHTML = '<span class="xo">Hi</span>';
  // })

// end of 'DOMContentLoaded'
});
