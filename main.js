document.addEventListener('DOMContentLoaded', function() {

  var newGame = document.querySelector('.new_game');
  newGame.addEventListener('click', function() {
    console.log('The button was clicked');
    location.reload();
  });

// end of 'DOMContentLoaded'
});
