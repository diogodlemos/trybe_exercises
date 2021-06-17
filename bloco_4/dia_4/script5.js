function verificaMaisRepetido (array) {
    array = array.sort();
    let item; 
    let minimoRepeticoes = 1;
    let repeticoes = 0;
    for (let index = 0; index < array.length; index += 1) {
        for(let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
            if (array[index + 1] === array[index]) {
                // repetidos.push(array[index]);
                repeticoes += 1;
            }
            if (minimoRepeticoes < repeticoes) {
                repeticoes = minimoRepeticoes;
                item = array[index];
            }
        }
        minimoRepeticoes = 0;

    }
    return console.log(item+ ' Repetido o número : ' );
}

let inteiros = [2, 3, 2, 5, 8, 2, 3]; 
let saida = verificaMaisRepetido(inteiros);