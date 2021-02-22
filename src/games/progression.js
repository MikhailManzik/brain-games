import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const getArithmeticProgression = () => {
  let progressionNumber = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 5);
  let progressionLength = 0;
  const progressionNumbers = [];

  while (progressionLength < 10) {
    progressionNumbers.push(progressionNumber);
    progressionNumber += step;
    progressionLength += 1;
  }
  return progressionNumbers;
};

const getQuestionAndAnswer = () => {
  const arithmeticProgressionNumbers = getArithmeticProgression();
  const randomIndex = getRandomNumber(0, 9);

  const correctAnswer = String(arithmeticProgressionNumbers[randomIndex]);
  arithmeticProgressionNumbers[randomIndex] = '..';
  const question = arithmeticProgressionNumbers;

  return [question, correctAnswer];
};

const description = 'What number is missing in the progression?';

export default () => {
  runGame(description, getQuestionAndAnswer);
};
