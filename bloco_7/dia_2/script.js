const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function modifySchedule(object, key, value){
  object[key] = value;
}

modifySchedule(lesson2, 'turno', 'manhã');
console.log(lesson2);

function listKey(object) {
  console.log(Object.keys(object));
}

listKey(lesson1);

function showSize(object) {
  return Object.entries(object).length;
}
console.log(showSize(lesson3));

const showValues = object => {return Object.values(object)}
console.log(showValues(lesson2));

const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});
console.log(allLessons);

function numberStudents() {
  console.log(`O numéro total de alunos é: ${allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes}`);
}
numberStudents();

const getValueByNumber = (object, position) => {return Object.values(object)[position]};

console.log(getValueByNumber(lesson2, 2));