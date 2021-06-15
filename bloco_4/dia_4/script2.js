function verificaIndiceDoMaior (entrada) {
  let indiceMaiorValor = 0;
  for (let index = 0; index < entrada.length; index += 1){
      if (entrada[index] > indiceMaiorValor ) {
          indiceMaiorValor = index;
      }
  }
  return indiceMaiorValor;
}

let numeros = [2, 3, 6, 7, 10, 1]; 
let indice = verificaIndiceDoMaior(numeros);
console.log(indice);