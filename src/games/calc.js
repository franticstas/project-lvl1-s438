import readlineSync from 'readline-sync';

const calcMultiplication = (firsNumber, secondNumber) => firsNumber * secondNumber;
const calcAddition = (firsNumber, secondNumber) => firsNumber + secondNumber;
const calcSubtraction = (firsNumber, secondNumber) => firsNumber - secondNumber;

const randomNumber = () => {
  const min = 1;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const setQuestions = (count = 0) => {
  if (count === 3) {
    return true;
  }

  const randomFirstNumber = randomNumber();
  const randomSecondNumber = randomNumber();
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

  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === +answer) {
    console.log('Correct!');
    return setQuestions(count + 1);
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const namePlayer = readlineSync.question('May I have your name? : ');
  let message = '';

  if (setQuestions()) {
    message = `Congratulations, ${namePlayer}`;
  } else {
    message = `Let's try again, ${namePlayer}`;
  }

  console.log(message);
};
