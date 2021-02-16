import readlineSync from 'readline-sync';

const rounds = 3;

export default (description, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(description);

  for (let a = 0; a < rounds; a += 1) {
    const [question, correctAnswer] = questionAndAnswer();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('You answer: ');

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}`);
};
