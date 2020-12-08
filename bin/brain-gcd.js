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
console.log('Find the greatest common divisor of given numbers');

const getGreatestCommonDivisor = (firstItem, secondItem) => {
  if (firstItem === 0 || secondItem === 0) {
    return firstItem + secondItem;
  } if (firstItem > secondItem) {
    return getGreatestCommonDivisor(firstItem - secondItem, secondItem);
  }
  return getGreatestCommonDivisor(firstItem, secondItem - firstItem);
};

for (let a = 0; a < 3; a += 1) {
  const firstNumber = getRandomNumber();
  const secondNubmer = getRandomNumber();

  getGreatestCommonDivisor(firstNumber, secondNubmer);

  console.log(`Question: ${firstNumber} ${secondNubmer}`);
  const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNubmer);
  const playerAnswer = readlineSync.question('You answer: ');

  if (correctAnswer === Number(playerAnswer)) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}`);
    process.exit();
  }
}

console.log(`Congratulations, ${playerName}`);
