const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
// console.log(myRemove([1, 2, 3, 4], 3));

// implemente seus testes aqui
const array = [1, 2, 3, 4];
const item = 5
assert.deepStrictEqual( myRemove(array, item), [1, 2, 3, 4]);
// assert.notDeepStrictEqual(myRemove(array, item), [1, 2, 3, 4]);
// console.log(array);