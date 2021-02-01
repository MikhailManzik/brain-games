// import readlineSync from 'readline-sync';
import {
  rounds,
  askQuestion,
  checkPlayerAnswer,
  showMessageVictory,
} from '../index.js';
import getRandomNumber from '../utils.js';

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
console.log('What is the result of the expression?');

export default () => {
  for (let a = 0; a < rounds; a += 1) {
    const randomSymbol = getRandomOperationSymbol(operationSymbols);
    const firstNumber = getRandomNumber(10);
    const secondNubmer = getRandomNumber(10);
    askQuestion(`${firstNumber} ${randomSymbol} ${secondNubmer}`);
    const correctAnswer = String(calcArithmeticOperation(randomSymbol, firstNumber, secondNubmer));
    checkPlayerAnswer(correctAnswer);
  }
  showMessageVictory();
};
