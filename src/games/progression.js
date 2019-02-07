import startGame from '..';
import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const generateQuestionAndAnswer = () => {
  const hiddenPositionNumber = randomNumber(1, lengthOfProgression);

  const startPosition = randomNumber(1, 100);
  const offset = randomNumber(1, 4);

  const correctAnswer = startPosition + offset * hiddenPositionNumber;

  let question = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === hiddenPositionNumber) {
      question += '.. ';
    } else {
      question += `${startPosition + offset * i} `;
    }
  }

  return cons(question.trim(), correctAnswer.toString());
};

export default () => startGame(gameDescription, generateQuestionAndAnswer);
