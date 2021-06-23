const createPerson = (name) => {
  const person = {};
  person.nomeCompleto = name;
  personEmail = name.replace(/\s+/g, '_').toLowerCase();
  person.email = `${personEmail}@trybe.com`;
  return person;
}

const newEmployees = () => {
    const employees = {
      id1: createPerson('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: createPerson('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: createPerson('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees());