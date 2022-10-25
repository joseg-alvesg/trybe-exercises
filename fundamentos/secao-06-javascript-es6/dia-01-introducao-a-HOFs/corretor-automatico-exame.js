const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (right, student) => {
  if (right === student) {
    return 1;
  }
  if (student === 'N.A') {
    return 0;
  }
  return -0.5;
};

const contador = (right, student, comparador) => {
  counter = 0; 
  for (let index = 0; index < right.length; index += 1) {
    const pointsCompare = comparador(right[index], student[index]);
    counter += pointsCompare;
  }
  return `Total de pontos obtidos: ${counter}`
};

console.log(contador(RIGHT_ANSWERS, STUDENT_ANSWERS, compare))