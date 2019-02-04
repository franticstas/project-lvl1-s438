import readlineSync from 'readline-sync';

const isEven = number => (number % 2 ? 'no' : 'yes');
const randomNumber = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const setQuestions = (count = 0) => {
  if (count === 3) {
    return true;
  }

  const rNum = randomNumber();

  const correctAnswer = isEven(rNum);

  console.log(`Question: ${rNum}`);

  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === answer) {
    console.log('Correct!');
    return setQuestions(count + 1);
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const namePlayer = readlineSync.question('May I have your name? : ');
  let message = '';

  if (setQuestions()) {
    message = `Congratulations, ${namePlayer}`;
  } else {
    message = `Let's try again, ${namePlayer}`;
  }

  console.log(message);
};
