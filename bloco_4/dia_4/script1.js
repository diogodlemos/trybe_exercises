function isPalindromo (palavra) {
  let palavraInvertida = [];
  let quantidade = 0;
  palavra = palavra.split('');
  for (let index = palavra.length - 1; index >= 0; index -= 1 ) {
    palavraInvertida.push(palavra[index]);
  }
  for (let index = 0; index < palavra.length; index += 1 ) {
    if (palavra[index]===palavraInvertida[index]) {
        quantidade += 1;
    }
  }
  if (quantidade === palavra.length) {
    return true;
  } else {
    return false;
  } 
 
      
}

let resposta = isPalindromo('desenvolvimento');
console.log(resposta);