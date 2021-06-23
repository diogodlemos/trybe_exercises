const checkDrawPrize = (num1) => {
    const number = Math.ceil(Math.random()*5);
    console.log(`sorteado: ${number}`);
    console.log(`Apostado: ${num1}`);
    if (num1 === number) return `Parabens vc ganhou!`;
    return `Tente novamente!`;
}

const resultDrawPrize = (num, checkDrawPrize) => {
  return checkDrawPrize(num);
}

console.log(resultDrawPrize(5,checkDrawPrize));