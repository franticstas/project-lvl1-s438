import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfQuestionsAsked = 3;

const runGame = (generateQuestionAndAnswer, questionNumber = 0) => {
  if (questionNumber === numberOfQuestionsAsked) {
    return true;
  }
  const pairQuestionAnswer = generateQuestionAndAnswer();

  const question = car(pairQuestionAnswer);
  const correctAnswer = cdr(pairQuestionAnswer);

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === answer) {
    console.log('Correct!');
    return runGame(generateQuestionAndAnswer, questionNumber + 1);
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};

export default (descriptionGame, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descriptionGame}\n`);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}\n`);
  const message = runGame(generateQuestionAndAnswer) ? `Congratulations, ${playerName}` : `Let's try again, ${playerName}`;
  console.log(message);
};
