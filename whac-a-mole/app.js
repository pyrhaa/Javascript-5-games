const randomSquare = (el) => {
  el.forEach((classname) => {
    classname.classList.remove('mole');
  });
  let randomPosition = el[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');

  return (hitPosition = randomPosition.id);
};

const moveMole = () => {
  let moleTimerId = null;
  moleTimerId = setInterval(randomSquare, 1000);
};

const countDown = (time, left) => {
  // currentTime--;
  time--;
  left.textContent = time;
  if (time === 0) {
    clearInterval(timerId);
    alert('GAME OVER, your score is ' + result);
  }
};

const startGame = () => {
  const square = document.querySelectorAll('.square');
  const mole = document.querySelectorAll('.mole');
  const timeLeft = document.querySelector('#time-left');
  let score = document.querySelector('#score');

  let result = 0;
  let currentTime = timeLeft.textContent;
  let hitPosition = randomSquare(square);

  moveMole();

  square.forEach((el) => {
    el.addEventListener('mouseup', () => {
      if (el.id === hitPosition) {
        result = result + 1;
        score.textContent = result;
      }
    });
  });

  let timerId = setInterval(countDown, 1000);
};

startGame();
