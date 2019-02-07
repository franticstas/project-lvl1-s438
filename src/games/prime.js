import startGame from '..';
import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (question, count = 2) => {
  if (count === question) {
    return true;
  }
  return question % count === 0 ? false : isPrime(question, count + 1);
};

const generateQuestionAndAnswer = () => {
  const question = randomNumber(1, 20);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => startGame(gameDescription, generateQuestionAndAnswer);
