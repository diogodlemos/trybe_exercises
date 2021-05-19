let nota = 95;

switch (nota){
    case nota >= 80 && nota<=100 :
        console.log("aprovado!");
        break;

    case nota < 80 && nota >= 60 :
        console.log("lista");
        break;
    case nota < 60 :
        console.log("reprovado")
        break;
    default:
        console.log("não se aplica!") 
}