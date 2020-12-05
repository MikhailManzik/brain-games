#!/usr/bin/env node
import readlineSync from 'readline-sync';

const OPERATION_SYMBOLS = ['+', '-', '*'];

const getRandomNumber = () => {
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
};

const getRandomOperationSymbol = (arraySymbols) => {
  let randomNumber = 0;
  let randomSymbol = 0;
  randomNumber = Math.floor(Math.random() * 3);
  randomSymbol = arraySymbols[randomNumber];
  return randomSymbol;
};

const performArithmeticOperation = (symbol, firstValue, secondValue) => {
  let result = 0;
  switch (symbol) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default:
      break;
  }
  return result;
};

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('What is the result of the expression?');

for (let a = 0; a < 3; a += 1) {
  const randomSymbol = getRandomOperationSymbol(OPERATION_SYMBOLS);
  const firstNumber = getRandomNumber();
  const secondNubmer = getRandomNumber();

  console.log(`Question: ${firstNumber} ${randomSymbol} ${secondNubmer}`);
  const correctAnswer = performArithmeticOperation(randomSymbol, firstNumber, secondNubmer);
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
