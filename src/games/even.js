import readlineSync from 'readline-sync';

const isEven = number => number % 2;
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateQuestions = (questionNumber = 0) => {
  if (questionNumber === 3) {
    return true;
  }

  const question = randomNumber(1, 99);

  const correctAnswer = !isEven(question) ? 'yes' : 'no';

  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === answer) {
    console.log('Correct!');
    return generateQuestions(questionNumber + 1);
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const playerName = readlineSync.question('May I have your name? : ');
  let message = '';
  message = generateQuestions() ? `Congratulations, ${playerName}` : `Let's try again, ${playerName}`;
  console.log(message);
};
