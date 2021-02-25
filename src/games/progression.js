import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const getArithmeticProgression = () => {
  let progressionNumber = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 5);
  let progressionLength = 0;
  const progression = [];

  while (progressionLength < 10) {
    progression.push(progressionNumber);
    progressionNumber += step;
    progressionLength += 1;
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = getArithmeticProgression();
  const randomIndex = getRandomNumber(0, 9);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression;

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
