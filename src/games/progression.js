import readlineSync from 'readline-sync';
import {
  greetPlayer,
  getRandomNumber,
  rounds,
  showMessage,
} from '../index.js';

const getArithmeticProgression = (number) => {
  const step = Math.floor(Math.random() * (5 - 1) + 2);
  let startNumber = number;
  let counter = 10;
  const arrayNumbers = [];

  while (counter > 0) {
    arrayNumbers.push(startNumber);
    startNumber += step;
    counter -= 1;
  }
  return arrayNumbers;
};

const playerName = greetPlayer();
console.log('What number is missing in the progression?');

export default () => {
  for (let a = 0; a < rounds; a += 1) {
    const arrayArithmeticProgressionNumbers = getArithmeticProgression(getRandomNumber(50));
    const randomIndex = getRandomNumber(10);
    const correctAnswer = Number(arrayArithmeticProgressionNumbers[randomIndex]);

    arrayArithmeticProgressionNumbers[randomIndex] = '..';
    console.log(`Question: ${arrayArithmeticProgressionNumbers}`);
    const playerAnswer = Number(readlineSync.question('You answer: '));
    showMessage(playerName, playerAnswer, correctAnswer);
  }
  console.log(`Congratulations, ${playerName}`);
};
