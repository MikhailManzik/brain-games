import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const operationSymbols = ['+', '-', '*'];

const getRandomOperationSymbol = (symbols) => {
  const randomNumber = getRandomNumber(0, 2);
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

const randomSymbol = getRandomOperationSymbol(operationSymbols);
const firstNumber = getRandomNumber(0, 10);
const secondNubmer = getRandomNumber(0, 10);

const question = `${firstNumber} ${randomSymbol} ${secondNubmer}`;
const correctAnswer = String(calcArithmeticOperation(randomSymbol, firstNumber, secondNubmer));
const description = 'What is the result of the expression?';

export default () => {
  startGame(question, description, correctAnswer);
};
