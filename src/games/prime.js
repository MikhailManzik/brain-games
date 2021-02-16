import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const isPrimeNumber = (number) => {
  for (let a = 2; a < number; a += 1) {
    if (number % a === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 50);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const getDescription = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  return description;
};

export default () => {
  startGame(getDescription(), getQuestionAndAnswer);
};
