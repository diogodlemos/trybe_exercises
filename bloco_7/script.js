const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
let array = [1, 2, 3, 4];
const item = 5;
assert.deepStrictEqual(myRemoveWithoutCopy(array, item), [1,2,3,4]);

// assert.notDeepStrictEqual(myRemoveWithoutCopy(array, item), [1,2,3,4]);

// myRemoveWithoutCopy(array, 3);
// console.log(array); 