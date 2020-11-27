import readlineSync from 'readline-sync';

export const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + playerName + '!');
}