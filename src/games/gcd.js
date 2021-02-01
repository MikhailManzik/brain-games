import {
  rounds,
  askQuestion,
  checkPlayerAnswer,
  showMessageVictory,
} from '../index.js';
import getRandomNumber from '../utils.js';

const getGreatestCommonDivisor = (firstItem, secondItem) => {
  if (firstItem === 0 || secondItem === 0) {
    return firstItem + secondItem;
  } if (firstItem > secondItem) {
    return getGreatestCommonDivisor(firstItem - secondItem, secondItem);
  }
  return getGreatestCommonDivisor(firstItem, secondItem - firstItem);
};

console.log('Find the greatest common divisor of given numbers');

export default () => {
  for (let a = 0; a < rounds; a += 1) {
    const firstNumber = getRandomNumber(50);
    const secondNubmer = getRandomNumber(50);

    getGreatestCommonDivisor(firstNumber, secondNubmer);
    const question = `${firstNumber} ${secondNubmer}`;
    askQuestion(question);
    const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNubmer));
    checkPlayerAnswer(correctAnswer);
  }
  showMessageVictory();
};
