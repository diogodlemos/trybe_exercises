let num = 5;
let saida='';
let posicaoDeEntrada = num;

for (let coluna = 0; coluna < num; coluna += 1){
    for (let linha = 0; linha <= num; linha += 1) {
        if (linha < posicaoDeEntrada) {
            saida += ' ';           
        }
        else {
            saida += '*';
        }
    }
    console.log(saida);
    saida = '';
    posicaoDeEntrada -= 1;
}
