let num = 10;

let saida='';
for (let coluna = 0; coluna < num; coluna += 1){
    for (let linha = 1; linha <= num; linha += 1) {
        saida = saida + '*';
        if(linha === num ) {
            saida = saida + '\n';
        }
    }
}
console.log(saida);