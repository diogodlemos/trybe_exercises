let num = 9;
let saida = '';

let meioDaMatriz = (num + 1) / 2;
let controleDaEsquerda= meioDaMatriz;
let controleDaDireita = meioDaMatriz;

for (let linha = 0; linha <= meioDaMatriz; linha += 1) {
  for (let coluna = 0; coluna <= num; coluna += 1) {
    if (coluna > controleDaEsquerda && coluna < controleDaDireita) {
      
       saida += '*';

    } else {
        saida += ' ';
    }
  }

  console.log(saida);
  saida = '';
  controleDaDireita += 1;
  controleDaEsquerda-= 1;
}
