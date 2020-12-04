#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = () => {
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
};

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let a = 0; a < 3; a += 1) {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('You answer: ');

  if (randomNumber % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
      console.log(`Let's try again, ${playerName}`);
      process.exit();
    }
  } else if (randomNumber % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
      console.log(`Let's try again, ${playerName}`);
      process.exit();
    }
  }
}

console.log(`Congratulations, ${playerName}`);
