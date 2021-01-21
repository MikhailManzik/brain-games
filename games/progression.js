import readlineSync from 'readline-sync';

const getRandomNumber = (maxRange) => {
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * maxRange);
  return randomNumber;
};

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('What number is missing in the progression?');

const getArithmeticProgression = (number) => {
  const step = Math.floor(Math.random() * (5 - 1) + 2);
  let startNumber = number;
  let counter = 10;
  const arrayNumbers = [];

  while (counter > 0) {
    arrayNumbers.push(startNumber);
    startNumber += step;
    counter -= 1;
  }

  return arrayNumbers;
};

export default () => {
  for (let a = 0; a < 3; a += 1) {
    const arrayArithmeticProgressionNumbers = getArithmeticProgression(getRandomNumber(100));
    const randomIndex = getRandomNumber(10);
    const correctAnswer = arrayArithmeticProgressionNumbers[randomIndex];

    arrayArithmeticProgressionNumbers[randomIndex] = '..';
    console.log(`Question: ${arrayArithmeticProgressionNumbers}`);
    const playerAnswer = readlineSync.question('You answer: ');

    if (Number(correctAnswer) === Number(playerAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${playerName}`);
};
