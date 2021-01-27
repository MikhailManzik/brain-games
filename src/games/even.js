import readlineSync from 'readline-sync';
import {
  greetPlayer,
  getRandomNumber,
  rounds,
  showMessage,
} from '../index.js';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const playerName = greetPlayer();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

export default () => {
  for (let a = 0; a < rounds; a += 1) {
    const randomNumber = getRandomNumber(100);
    console.log(`Question: ${randomNumber}`);
    const playerAnswer = readlineSync.question('You answer: ');
    const correctAnswer = isEvenNumber(randomNumber);
    showMessage(playerName, playerAnswer, correctAnswer);
  }
  console.log(`Congratulations, ${playerName}`);
};
