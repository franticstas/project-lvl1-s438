import startGame from '..';
import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  const iter = (count = 2) => {
    if (count <= Math.sqrt(number)) {
      return number % count === 0 ? false : iter(count + 1);
    }
    return true;
  };

  return number < 2 ? false : iter();
};

const generateQuestionAndAnswer = () => {
  const question = randomNumber(-10, 10);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => startGame(gameDescription, generateQuestionAndAnswer);
