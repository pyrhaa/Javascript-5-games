//get the square, mole, time and score from html
const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
// set result, currentTime and hitposition
let result = 0;
let currentTime = 10;
let hitPosition;
let moleTimerId = null;
let countDownTimerId = null;

//get each square(argument), random them within add mole and put the id(string) in hitposition.
const randomSquare = () => {
  square.forEach((classname) => {
    classname.classList.remove('mole');
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');
  hitPosition = randomPosition.id;
};

//When click on mole increment result
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

//a countdown when 0 it's clear the board
const countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime.toString();

  if (currentTime === 0) {
    clearInterval(moleTimerId);
    clearInterval(countDownTimerId);
    if (confirm('Do you want to retry ?')) {
      currentTime = 10;
      timeLeft.textContent = currentTime.toString();
      result = 0;
      score.textContent = result;
      startGame();
    }
  }
};

const startGame = () => {
  randomSquare();
  mouseClick();
  moveMole();
  countDown();
  countDownTimerId = setInterval(countDown, 1000);
};

startGame();
