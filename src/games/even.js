import startGame from '..';
import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;

const generateQuestionAndAnswer = () => {
  const question = randomNumber(1, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => startGame(descriptionGame, generateQuestionAndAnswer);
