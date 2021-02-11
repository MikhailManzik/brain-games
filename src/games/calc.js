// import readlineSync from 'readline-sync';
import {
  rounds,
  askQuestion,
  checkPlayerAnswer,
  showMessageVictory,
} from '../index.js';
import getRandomNumber from '../utils.js';

const operationSymbols = ['+', '-', '*'];

const getRandomOperationSymbol = (symbols) => {
  const randomNumber = getRandomNumber(3);
  const randomSymbol = symbols[randomNumber];
  return randomSymbol;
};

const calcArithmeticOperation = (symbol, firstValue, secondValue) => {
  switch (symbol) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      return '';
  }
};

export default () => {
  console.log('What is the result of the expression?');

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
