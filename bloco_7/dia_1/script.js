function fatorial(number) {
    let fatorial = number;
    let resposta;
    for(let index = number -1; index > 0; index -=1 ){
      fatorial *= index;
      resposta = fatorial;
    }
    return resposta;
}
console.log(fatorial(4));
