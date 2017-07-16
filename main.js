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

  // 'X' goes first:
  var whoseTurn = 'X';

  // Show whose turn it is:
  var displayPlayer = document.querySelector('.display_player');
  displayPlayer.innerText = whoseTurn;

  // How to win:
  var winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  // Which squares each player has:
  var squaresX = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  var squaresO = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  // Did 'X' just win?
  function winCheckX(){
    for(var i=0; i < winningCombos.length; i++){
      var a, b, c;
      a = squaresX[ winningCombos[i][0] ];
      b = squaresX[ winningCombos[i][1] ];
      c = squaresX[ winningCombos[i][2] ];
      if( a == b && a == c ){
        return true;
      }
    }
    return false;
  };

  // Did 'O' just win?
  function winCheckO(){
    for(var i=0; i < winningCombos.length; i++){
      var a, b, c;
      a = squaresO[ winningCombos[i][0] ];
      b = squaresO[ winningCombos[i][1] ];
      c = squaresO[ winningCombos[i][2] ];
      if( a == b && a == c ){
        return true;
      }
    }
    return false;
  };

  // Display the winner:
  var banner = document.querySelector( 'h1' );
  var congrats = document.querySelector( 'p' );
  function displayWinner() {
    banner.innerText = whoseTurn + ' is the winner!';
    congrats.innerText = 'Nice job, ' + whoseTurn + '!';
  };

  // Event listeners for each square:

  var clickOne = squareOne.addEventListener('click', function() {
    if (this.innerText == '') {
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      this.style.backgroundColor = 'salmon';
      if (whoseTurn === 'X') {
        squaresX.push(1);
        winCheckX();
        if (winCheckX() == true) {
          displayWinner();
        } else {
          whoseTurn = 'O'
        };
      } else if (whoseTurn === 'O') {
        squaresO.push(1);
        winCheckO();
        if (winCheckO() == true) {
          displayWinner();
        } else {
          whoseTurn = 'X'
        };
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickTwo = squareTwo.addEventListener('click', function() {
    if (this.innerText == '') {
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      this.style.backgroundColor = 'salmon';
      if (whoseTurn === 'X') {
        squaresX.push(2);
        winCheckX();
        if (winCheckX() == true) {
          displayWinner();
        } else {
          whoseTurn = 'O'
        };
      } else if (whoseTurn === 'O') {
        squaresO.push(2);
        winCheckO();
        if (winCheckO() == true) {
          displayWinner();
        } else {
          whoseTurn = 'X'
        };
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickThree = squareThree.addEventListener('click', function() {
    if (this.innerText == '') {
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      this.style.backgroundColor = 'salmon';
      if (whoseTurn === 'X') {
        squaresX.push(3);
        winCheckX();
        if (winCheckX() == true) {
          displayWinner();
        } else {
          whoseTurn = 'O'
        };
      } else if (whoseTurn === 'O') {
        squaresO.push(3);
        winCheckO();
        if (winCheckO() == true) {
          displayWinner();
        } else {
          whoseTurn = 'X'
        };
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickFour = squareFour.addEventListener('click', function() {
    if (this.innerText == '') {
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      this.style.backgroundColor = 'salmon';
      if (whoseTurn === 'X') {
        squaresX.push(4);
        winCheckX();
        if (winCheckX() == true) {
          displayWinner();
        } else {
          whoseTurn = 'O'
        };
      } else if (whoseTurn === 'O') {
        squaresO.push(4);
        winCheckO();
        if (winCheckO() == true) {
          displayWinner();
        } else {
          whoseTurn = 'X'
        };
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickFive = squareFive.addEventListener('click', function() {
    if (this.innerText == '') {
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      this.style.backgroundColor = 'salmon';
      if (whoseTurn === 'X') {
        squaresX.push(5);
        winCheckX();
        if (winCheckX() == true) {
          displayWinner();
        } else {
          whoseTurn = 'O'
        };
      } else if (whoseTurn === 'O') {
        squaresO.push(5);
        winCheckO();
        if (winCheckO() == true) {
          displayWinner();
        } else {
          whoseTurn = 'X'
        };
      }
      displayPlayer.innerText = whoseTurn;
    };
  });


  var clickSix = squareSix.addEventListener('click', function() {
    if (this.innerText == '') {
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      this.style.backgroundColor = 'salmon';
      if (whoseTurn === 'X') {
        squaresX.push(6);
        winCheckX();
        if (winCheckX() == true) {
          displayWinner();
        } else {
          whoseTurn = 'O'
        };
      } else if (whoseTurn === 'O') {
        squaresO.push(6);
        winCheckO();
        if (winCheckO() == true) {
          displayWinner();
        } else {
          whoseTurn = 'X'
        };
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickSeven = squareSeven.addEventListener('click', function() {
    if (this.innerText == '') {
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      this.style.backgroundColor = 'salmon';
      if (whoseTurn === 'X') {
        squaresX.push(7);
        winCheckX();
        if (winCheckX() == true) {
          displayWinner();
        } else {
          whoseTurn = 'O'
        };
      } else if (whoseTurn === 'O') {
        squaresO.push(7);
        winCheckO();
        if (winCheckO() == true) {
          displayWinner();
        } else {
          whoseTurn = 'X'
        };
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickEight = squareEight.addEventListener('click', function() {
    if (this.innerText == '') {
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      this.style.backgroundColor = 'salmon';
      if (whoseTurn === 'X') {
        squaresX.push(8);
        winCheckX();
        if (winCheckX() == true) {
          displayWinner();
        } else {
          whoseTurn = 'O'
        };
      } else if (whoseTurn === 'O') {
        squaresO.push(8);
        winCheckO();
        if (winCheckO() == true) {
          displayWinner();
        } else {
          whoseTurn = 'X'
        };
      }
      displayPlayer.innerText = whoseTurn;
    };
  });

  var clickNine = squareNine.addEventListener('click', function() {
    if (this.innerText == '') {
      this.innerHTML = '<span class="xo">' + whoseTurn + '</span>';
      this.style.backgroundColor = 'salmon';
      if (whoseTurn === 'X') {
        squaresX.push(9);
        winCheckX();
        if (winCheckX() == true) {
          displayWinner();
        } else {
          whoseTurn = 'O'
        };
      } else if (whoseTurn === 'O') {
        squaresO.push(9);
        winCheckO();
        if (winCheckO() == true) {
          displayWinner();
        } else {
          whoseTurn = 'X'
        };
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
