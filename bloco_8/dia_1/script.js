const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'C', 'B'];

const checkAnswers = (answers,correctAnswers) => {
  let points = 0;
  for (let index = 0; index <= answers.length; index += 1){
    if (answers[index] === correctAnswers[index]) {
        points += 1;
    } else if (answers[index] !== correctAnswers[index]) {
        points -= 0.5;
    } else if (answers[index] === 'N.A') {
        points += 0;
    }
  }
  return points;
}

const verifyAnswers = (answers, correctAnswers, checkAnswers) => {
  return checkAnswers(answers,correctAnswers);
}

console.log(verifyAnswers(studentAnswers,rightAnswers,checkAnswers));