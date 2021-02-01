import readlineSync from 'readline-sync';

export const rounds = 3;

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);

const getPlayerAnswer = () => {
  const playerAnswer = readlineSync.question('You answer: ');
  return playerAnswer;
};

export const askQuestion = (playerQuestion) => {
  console.log(`Question: ${playerQuestion}`);
};

export const checkPlayerAnswer = (correctAnswer) => {
  const playerAnswer = getPlayerAnswer();
  if (correctAnswer === playerAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}`);
    process.exit();
  }
};

export const showMessageVictory = () => {
  console.log(`Congratulations, ${playerName}`);
};
