import readlineSync from 'readline-sync';
import {
  rounds,
  greetPlayer,
  getRandomNumber,
  showMessage,
} from '../index.js';

const operationSymbols = ['+', '-', '*'];

const getRandomOperationSymbol = (arraySymbols) => {
  let randomNumber = 0;
  let randomSymbol = 0;
  randomNumber = Math.floor(Math.random() * 3);
  randomSymbol = arraySymbols[randomNumber];
  return randomSymbol;
};

const calcArithmeticOperation = (symbol, firstValue, secondValue) => {
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

const playerName = greetPlayer();
console.log('What is the result of the expression?');

export default () => {
  for (let a = 0; a < rounds; a += 1) {
    const randomSymbol = getRandomOperationSymbol(operationSymbols);
    const firstNumber = getRandomNumber(10);
    const secondNubmer = getRandomNumber(10);
    console.log(`Question: ${firstNumber} ${randomSymbol} ${secondNubmer}`);
    const correctAnswer = String(calcArithmeticOperation(randomSymbol, firstNumber, secondNubmer));
    const playerAnswer = readlineSync.question('You answer: ');
    showMessage(playerName, playerAnswer, correctAnswer);
  }
  console.log(`Congratulations, ${playerName}`);
};
