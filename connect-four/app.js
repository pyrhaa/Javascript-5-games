document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const result = document.querySelector('#result');
  const displayCurrentPlayer = document.querySelector('#current-player');
  // const currentPlayer;
  const playerOne = 1;
  const playerTwo = 2;

  const checkBoard = () => {
    for (let i = 0; i < squares.length; i++) {
      squares[i].onClick = () => {
        //if the square below your current square is taken, you can go ontop of it
        if (
          squares[i + 7].classList.contains('taken') &&
          !squares[i].classList.contains('taken')
        ) {
          if (playerOne) {
            squares[i].classList.add('taken');
            squares[i].classList.add('player-one');
            displayCurrentPlayer.innerHTML = playerTwo;
          }
        }
      };
    }
  };
});
