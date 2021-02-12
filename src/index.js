import readlineSync from 'readline-sync';

const rounds = 3;

const getPlayerName = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const playerName = getPlayerName();
const askQuestion = (playerQuestion) => {
  console.log(`Question: ${playerQuestion}`);
};

const getPlayerAnswer = () => {
  const playerAnswer = readlineSync.question('You answer: ');
  return playerAnswer;
};

for (let a = 0; a < rounds; a += 1) {
  console.log(desc);
  askQuestion(question);
  const playerAnswer = getPlayerAnswer();
  if (correctAnswer === playerAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}`);
    break;
  }
};

console.log(`Congratulations, ${playerName}`);
