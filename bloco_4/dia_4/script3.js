function verificaIndiceDomenor (entrada) {
    let menorValor = null;
    for (let index = 0; index < entrada.length; index += 1){
        if (menorValor === null) {
            menorValor = entrada[index];
        } else if (entrada[index] < menorValor) {
            menorValor = entrada[index];
        } 
    }
    return menorValor;
  }
  
  let numeros = [2, 4, -6, 7, -10, 0, 3]; 
  let indice = verificaIndiceDomenor(numeros);
  console.log(indice);