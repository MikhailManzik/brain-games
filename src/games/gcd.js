import readlineSync from 'readline-sync';
import {
  greetPlayer,
  getRandomNumber,
  rounds,
  showMessage,
} from '../index.js';

const getGreatestCommonDivisor = (firstItem, secondItem) => {
  if (firstItem === 0 || secondItem === 0) {
    return firstItem + secondItem;
  } if (firstItem > secondItem) {
    return getGreatestCommonDivisor(firstItem - secondItem, secondItem);
  }
  return getGreatestCommonDivisor(firstItem, secondItem - firstItem);
};

const playerName = greetPlayer();
console.log('Find the greatest common divisor of given numbers');

export default () => {
  for (let a = 0; a < rounds; a += 1) {
    const firstNumber = getRandomNumber(50);
    const secondNubmer = getRandomNumber(50);

    getGreatestCommonDivisor(firstNumber, secondNubmer);

    console.log(`Question: ${firstNumber} ${secondNubmer}`);
    const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNubmer));
    const playerAnswer = readlineSync.question('You answer: ');
    showMessage(playerName, playerAnswer, correctAnswer);
  }
  console.log(`Congratulations, ${playerName}`);
};
