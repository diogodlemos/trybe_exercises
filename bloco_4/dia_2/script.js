let numbers = [5, 9, 3, 191, 70, 8, 100,2, 35, 27];

let valoresImpares = 0;
for (index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0) {
        valoresImpares += 1;
    }
}
if(valoresImpares === 0){
    console.log('Nenhum valor impar encontrado');
}

console.log('O numero de valores impares do Array é : '+valoresImpares);