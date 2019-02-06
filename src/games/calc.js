import startGame from '..';
import { cons } from 'hexlet-pairs';

const calcMultiplication = (firsNumber, secondNumber) => firsNumber * secondNumber;
const calcAddition = (firsNumber, secondNumber) => firsNumber + secondNumber;
const calcSubtraction = (firsNumber, secondNumber) => firsNumber - secondNumber;

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const descriptionGame = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const randomFirstNumber = randomNumber(1, 10);
  const randomSecondNumber = randomNumber(1, 10);
  const randomSign = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let correctAnswer;
  let question;

  switch (randomSign) {
    case 1:
      correctAnswer = calcAddition(randomFirstNumber, randomSecondNumber);
      question = `${randomFirstNumber} + ${randomSecondNumber}`;
      break;
    case 2:
      correctAnswer = calcSubtraction(randomFirstNumber, randomSecondNumber);
      question = `${randomFirstNumber} - ${randomSecondNumber}`;
      break;
    case 3:
      correctAnswer = calcMultiplication(randomFirstNumber, randomSecondNumber);
      question = `${randomFirstNumber} * ${randomSecondNumber}`;
      break;
    default:
      console.log('The problem of selecting a mathematical operation');
  }

  return cons(question, correctAnswer.toString());
};

export default () => startGame(descriptionGame, generateQuestionAndAnswer);
