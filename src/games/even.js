import {
  rounds,
  askQuestion,
  checkPlayerAnswer,
  showMessageVictory,
} from '../index.js';
import getRandomNumber from '../utils.js';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');

export default () => {
  for (let a = 0; a < rounds; a += 1) {
    const randomNumber = getRandomNumber(100);
    askQuestion(randomNumber);
    const correctAnswer = isEvenNumber(randomNumber);
    checkPlayerAnswer(correctAnswer);
  }
  showMessageVictory();
};
