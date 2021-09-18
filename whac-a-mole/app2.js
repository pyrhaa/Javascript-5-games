const startGame = () => {
  //get the square, mole, time and score from html
  const squares = document.querySelectorAll('.square');
  const mole = document.querySelectorAll('.mole');
  const timeLeft = document.querySelector('#time-left');
  let score = document.querySelector('#score');
  // set result, currentTime and hitposition
  let result = 0;
  let currentTime = 10;
  let hitPosition;
  let moleTimerId = null;
  const square = squares;

  //get each square(argument), random them within add mole and put the id(string) in hitposition.
  const randomSquare = () => {
    square.forEach((classname) => {
      classname.classList.remove('mole');
    });
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
  };

  //After, when click on mole increment result
  const mouseClick = () => {
    square.forEach((el) => {
      el.addEventListener('mouseup', () => {
        if (el.id === hitPosition) {
          result++;
          score.textContent = result;
        }
      });
    });
  };

  //use randomSquare to move mole with repeatedly calls randomSquare
  const moveMole = () => {
    moleTimerId = setInterval(randomSquare, 1000);
  };
  moveMole();
  mouseClick();

  // while (countDown) {
  //   randomSquare(square)
  // }
};

startGame();
