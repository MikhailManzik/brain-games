import {
  rounds,
  askQuestion,
  checkPlayerAnswer,
  showMessageVictory,
} from '../index.js';
import getRandomNumber from '../utils.js';

const isPrimeNumber = (number) => {
  if (number < 2) {
    return 'no';
  }

  for (let a = 2; a < number; a += 1) {
    if (number % a === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  for (let a = 0; a < rounds; a += 1) {
    const randomNumber = getRandomNumber(50);
    askQuestion(randomNumber);
    const correctAnswer = isPrimeNumber(randomNumber);
    checkPlayerAnswer(correctAnswer);
  }
  showMessageVictory();
};
