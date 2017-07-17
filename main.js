document.addEventListener('DOMContentLoaded', function() {

  // Button-click to reset the board:
  var newGame = document.querySelector('.new_game');
  newGame.addEventListener('click', function() {
    console.log('The button was clicked');
    location.reload();
  });

  //  Square IDs:
  //  -------------
  //  | 1 | 4 | 7 |
  //  |---|---|---|
  //  | 2 | 5 | 7 |
  //  |---|---|---|
  //  | 3 | 6 | 9 |
  //  -------------

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

  // 'X' goes first:
  var whoseTurn = 'X';

  // Show whose turn it is:
  var displayPlayer = document.querySelector('.display_player');
  displayPlayer.innerText = whoseTurn;

  // Which squares each player has:
  var squaresX = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  var squaresO = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  // Winning square combinations check:
  function winCheck(squaresArray) {
    if (squaresArray.includes(1) && squaresArray.includes(2) && squaresArray.includes(3)) {
      displayWinner();
    }
    else if (squaresArray.includes(4) && squaresArray.includes(5) && squaresArray.includes(6)) {
      displayWinner();
    }
    else if (squaresArray.includes(7) && squaresArray.includes(8) && squaresArray.includes(9)) {
      displayWinner();
    }
    else if (squaresArray.includes(1) && squaresArray.includes(4) && squaresArray.includes(7)) {
      displayWinner();
    }
    else if (squaresArray.includes(2) && squaresArray.includes(5) && squaresArray.includes(8)) {
      displayWinner();
    }
    else if (squaresArray.includes(3) && squaresArray.includes(6) && squaresArray.includes(9)) {
      displayWinner();
    }
    else if (squaresArray.includes(1) && squaresArray.includes(5) && squaresArray.includes(9)) {
      displayWinner();
    }
    else if (squaresArray.includes(3) && squaresArray.includes(5) && squaresArray.includes(7))
    {
      displayWinner();
    }
  };

  // Game ends on victory:
  var gameOver = false;

  // Display the winner:
  var banner = document.querySelector( 'h1' );
  var congrats = document.querySelector( 'p' );
  function displayWinner() {
    banner.innerText = whoseTurn + ' is the winner!';
    congrats.innerText = 'Nice job, ' + whoseTurn + '!';
    gameOver = true;
  };

  // Tie game:
  function tieGame() {
    banner.innerText = 'Tie game!';
    congrats.innerText = 'Everybody wins!';
    // gameOver();
  };

  // Populate a clicked square:
  function populate(square) {
    if (gameOver === false) {
      square.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      square.style.backgroundColor = 'salmon';
    }
  };

  // Each turn:
  // - Adds clicked square number to player's array
  // - Compares updated array to winning combinations
  // - Announces victory if you won
  // - Changes turns if you didn't win
  function winOrPlay(squareNum) {
    if (whoseTurn === 'X') {
      squaresX.push(squareNum);
      winCheck(squaresX);
      whoseTurn = 'O'
    }
    else if (whoseTurn === 'O') {
      squaresO.push(squareNum);
      winCheck(squaresO);
      whoseTurn = 'X'
    }
    displayPlayer.innerText = whoseTurn;
  };

  // Event listeners for each square:

  var clickOne = squareOne.addEventListener('click', function() {
    if (this.innerText == '') {
      populate(this);
      winOrPlay(1);
    };
  });

  var clickTwo = squareTwo.addEventListener('click', function() {
    if (this.innerText == '') {
      populate(this)
      winOrPlay(2);
    };
  });

  var clickThree = squareThree.addEventListener('click', function() {
    if (this.innerText == '') {
      populate(this)
      winOrPlay(3);
    };
  });

  var clickFour = squareFour.addEventListener('click', function() {
    if (this.innerText == '') {
      populate(this)
      winOrPlay(4);
    };
  });

  var clickFive = squareFive.addEventListener('click', function() {
    if (this.innerText == '') {
      populate(this)
      winOrPlay(5);
    };
  });

  var clickSix = squareSix.addEventListener('click', function() {
    if (this.innerText == '') {
      populate(this)
      winOrPlay(6);
    };
  });

  var clickSeven = squareSeven.addEventListener('click', function() {
    if (this.innerText == '') {
      populate(this)
      winOrPlay(7);
    };
  });

  var clickEight = squareEight.addEventListener('click', function() {
    if (this.innerText == '') {
      populate(this)
      winOrPlay(8);
    };
  });

  var clickNine = squareNine.addEventListener('click', function() {
    if (this.innerText == '') {
      populate(this)
      winOrPlay(9);
    };
  });

  // jQuery alternative to make squares change colour on click:

  // $('.square').click(function(){
  //   console.log('jQuery click alert');
  //   $(this).css({"background-color": "salmon" });
  //   this.innerHTML = '<span class="xo">Hi</span>';
  // })

// end of 'DOMContentLoaded':
});
