import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const printQuestionList = (generateQuestionAndAnswer, questionNumber = 0) => {
  if (questionNumber === 3) {
    return true;
  }
  const pairQuestionAnswer = generateQuestionAndAnswer();

  const question = car(pairQuestionAnswer);
  const correctAnswer = cdr(pairQuestionAnswer);

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === answer) {
    console.log('Correct!');
    return printQuestionList(generateQuestionAndAnswer, questionNumber + 1);
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};

export default (descriptionGame, generateQuestionAndAnswer) => {
  console.log(`Welcome to the Brain Games!\n${descriptionGame}\n`);

  const playerName = readlineSync.question('May I have your name? ');
  let message = '';
  message = printQuestionList(generateQuestionAndAnswer) ? `Congratulations, ${playerName}` : `Let's try again, ${playerName}`;
  console.log(message);
};
