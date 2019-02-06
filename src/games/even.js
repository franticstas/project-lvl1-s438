import startGame from '..';
import { cons } from 'hexlet-pairs';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateQuestionAndAnswer = () => {
  const question = randomNumber(1, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => startGame(descriptionGame, generateQuestionAndAnswer);
