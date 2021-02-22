import runGame from '../index.js';
import {
  getRandomNumber,
  isEvenNumber,
} from '../utils.js';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  runGame(description, getQuestionAndAnswer);
};
