import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const isPrimeNumber = (number) => {
  if (number % number === 0 && number % 1 === 0) {
    return true;
  }
  return false;
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
