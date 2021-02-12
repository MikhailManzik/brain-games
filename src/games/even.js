import {
  rounds,
  askQuestion,
  checkPlayerAnswer,
} from '../index.js';
import {
  getRandomNumber,
  isEvenNumber,
} from '../utils.js';

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let a = 0; a < rounds; a += 1) {
    const randomNumber = getRandomNumber(0, 100);
    askQuestion(randomNumber);
    const correctAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';
    checkPlayerAnswer(correctAnswer);
  }
};
