import startGame from '..';
import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';

const calcMultiplication = (firsNumber, secondNumber) => firsNumber * secondNumber;
const calcAddition = (firsNumber, secondNumber) => firsNumber + secondNumber;
const calcSubtraction = (firsNumber, secondNumber) => firsNumber - secondNumber;

const gameDescription = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const firstNumber = randomNumber(1, 10);
  const secondNumber = randomNumber(1, 10);
  const sign = randomNumber(1, 3);
  let correctAnswer;
  let question;

  switch (sign) {
    case 1:
      correctAnswer = calcAddition(firstNumber, secondNumber);
      question = `${firstNumber} + ${secondNumber}`;
      break;
    case 2:
      correctAnswer = calcSubtraction(firstNumber, secondNumber);
      question = `${firstNumber} - ${secondNumber}`;
      break;
    default:
      correctAnswer = calcMultiplication(firstNumber, secondNumber);
      question = `${firstNumber} * ${secondNumber}`;
      break;
  }

  return cons(question, correctAnswer.toString());
};

export default () => startGame(gameDescription, generateQuestionAndAnswer);
