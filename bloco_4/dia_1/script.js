let a1 = 45;
let a2 = 45;
let a3 = 90;
let somaDosAngulos;

somaDosAngulos = a1 + a2 + a3;

if (somaDosAngulos === 180) {
    console.log(true);
}else if(a1 <= 0 || a2 <= 0 || a3 <= 0){
    console.log('Erro!');
}
else {
    console.log(false);
}