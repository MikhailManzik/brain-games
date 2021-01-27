import readlineSync from 'readline-sync';

export const rounds = 3;

export const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export const getRandomNumber = (maxRange) => {
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * maxRange);
  return randomNumber;
};

export const showMessage = (playerName, playerAnswer, correctAnswer) => {
  if (correctAnswer === playerAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}`);
    process.exit();
  }
};
