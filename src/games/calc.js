import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const operationSymbols = ['+', '-', '*'];

const getRandomOperationSymbol = (symbols) => {
  const randomNumber = getRandomNumber(0, 3);
  const randomSymbol = symbols[randomNumber];
  return randomSymbol;
};

const calcArithmeticOperation = (symbol, firstValue, secondValue) => {
  switch (symbol) {
    case '+': return firstValue + secondValue;
    case '-': return firstValue - secondValue;
    case '*': return firstValue * secondValue;
    default: return null;
  }
};

const getQuestionAndAnswer = () => {
  const randomSymbol = getRandomOperationSymbol(operationSymbols);
  const firstNumber = getRandomNumber(0, 10);
  const secondNubmer = getRandomNumber(0, 10);

  const question = `${firstNumber} ${randomSymbol} ${secondNubmer}`;
  const correctAnswer = String(calcArithmeticOperation(randomSymbol, firstNumber, secondNubmer));

  return [question, correctAnswer];
};

const getDescription = () => {
  const description = 'What is the result of the expression?';
  return description;
};

export default () => {
  startGame(getDescription(), getQuestionAndAnswer);
};
