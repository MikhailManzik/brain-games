import readlineSync from 'readline-sync';
import {
  greetPlayer,
  getRandomNumber,
  rounds,
  showMessage,
} from '../index.js';

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

const playerName = greetPlayer();
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

export default () => {
  for (let a = 0; a < rounds; a += 1) {
    const randomNumber = getRandomNumber(50);
    console.log(`Question: ${randomNumber}`);
    const correctAnswer = isPrimeNumber(randomNumber);
    const playerAnswer = readlineSync.question('You answer: ');
    showMessage(playerName, playerAnswer, correctAnswer);
  }
  console.log(`Congratulations, ${playerName}`);
};
