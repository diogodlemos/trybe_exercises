let num = 15;

let saida='';
for (let coluna = 0; coluna < num; coluna += 1){
    for (let linha = 0; linha < num; linha += 1) {
        saida = saida + '*';
        if(linha === coluna) {
            saida = saida + '\n';
            linha = num;
        }
    }
}
console.log(saida);