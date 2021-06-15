function verificaIndiceDomenor (entrada) {
    let indiceDoMenorValor = 90;
    for (let index = 0; index < entrada.length; index += 1){
        if (entrada[index] < indiceDoMenorValor) {
            indiceDoMenorValor = entrada[index];
        } 
    }
    return indiceDoMenorValor;
  }
  
  let numeros = [2, -400, 60, 7, -10, 0, 3]; 
  let indice = verificaIndiceDomenor(numeros);
  console.log(indice);