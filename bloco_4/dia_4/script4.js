function maiorNomeDePessoa(nomes) {
  let quantidadeDeletras = 0;
  let saida;
  for (let index = 0; index < nomes.length; index += 1) {
    if (nomes[index].length > quantidadeDeletras) {
        quantidadeDeletras = nomes[index].length;
        saida = nomes[index];
    }
    
  }
  return console.log(saida);
}

let n = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 
let resultado = maiorNomeDePessoa(n);