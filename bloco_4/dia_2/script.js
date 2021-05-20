let tamanho = 25;
let array = [];

for (let index = 1; index < (tamanho + 1); index += 1) {
    array.push(index);
}
let arrayDividido = [];
for (let index = 0; index < array.length; index += 1) {
    arrayDividido.push(array[index]/2);
}
console.log(arrayDividido);
