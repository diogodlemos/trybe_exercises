const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, currentValue)=>{
    return acc + currentValue.split('').reduce((acc2,currentValue2)=>{
      if(currentValue2 === 'a' || currentValue2 === 'A'){
        return acc2 +1;
      }
      return acc2
    },0)
  },0);
}

assert.deepStrictEqual(containsA(), 20);