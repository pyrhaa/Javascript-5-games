document.addEventListener('DOMContentLoaded', () => {
  //cards
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
  ];

  // cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  //check matches
  const checkForMatch = () => {
    const cards = document.querySelectorAll('img');

    const optionOne = cardsChosenId[0];
    const optionTwo = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOne].setAttribute('src', 'images/white.png');
      cards[optionTwo].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOne].setAttribute('src', 'images/blank.png');
      cards[optionTwo].setAttribute('src', 'images/blank.png');
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Tanemirt ⵜⴰⵏⵎⵉⵔⵜ !';
    }
  };
  const flipCard = (e) => {
    let cardId = e.target.attributes[1].value;
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    e.target.attributes[0].value = cardArray[cardId].img;
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  };

  //create board
  const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);

      card.addEventListener('click', flipCard);

      grid.appendChild(card);
    }
  };
  createBoard();
});
