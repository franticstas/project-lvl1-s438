import startGame from '..';
import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';

const descriptionGame = 'What is the result of the expression?';

const calculatingGCD = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  const remainder = firstNumber % secondNumber;
  return calculatingGCD(secondNumber, remainder);
};


const generateQuestionAndAnswer = () => {
  const randomFirstNumber = randomNumber(1, 20);
  const randomSecondNumber = randomNumber(1, 20);
  const correctAnswer = calculatingGCD(randomFirstNumber, randomSecondNumber);
  const question = `${randomFirstNumber} ${randomSecondNumber}`;

  return cons(question, correctAnswer.toString());
};

export default () => startGame(descriptionGame, generateQuestionAndAnswer);
