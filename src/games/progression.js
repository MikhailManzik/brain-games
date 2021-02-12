import {
  rounds,
  checkPlayerAnswer,
  askQuestion,
} from '../index.js';
import getRandomNumber from '../utils.js';

const getArithmeticProgression = (number) => {
  const step = getRandomNumber(2, 5);
  let startNumber = number;
  let counter = 10;
  const setNumbers = [];

  while (counter > 0) {
    setNumbers.push(startNumber);
    startNumber += step;
    counter -= 1;
  }
  return setNumbers;
};

export default () => {
  console.log('What number is missing in the progression?');

  for (let a = 0; a < rounds; a += 1) {
    const arithmeticProgressionNumbers = getArithmeticProgression(getRandomNumber(0, 25));
    const randomIndex = getRandomNumber(0, 9);
    const correctAnswer = String(arithmeticProgressionNumbers[randomIndex]);
    arithmeticProgressionNumbers[randomIndex] = '..';
    askQuestion(`${arithmeticProgressionNumbers}`);
    checkPlayerAnswer(correctAnswer);
  }
};
