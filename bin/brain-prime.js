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
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

const getPrimeNumber = (number) => {
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

for (let a = 0; a < 3; a += 1) {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const correctAnswer = getPrimeNumber(randomNumber);
  const playerAnswer = readlineSync.question('You answer: ');

  if (correctAnswer === playerAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}`);
    process.exit();
  }
}

console.log(`Congratulations, ${playerName}`);
