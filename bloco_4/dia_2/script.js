let numbers = [5, 9, 3, 190, 70, 8, 100,2, 35, 27];

let maiorValor = 0;
for (index = 0; index < numbers.length; index += 1) {
    if(numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }
}
console.log('O Maior valor do Array é : '+maiorValor);