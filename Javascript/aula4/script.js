/*
Funções
Bloco de Código que pode ser executada e utilizada.
*/

//1º declarar a função; nome da função; nome da função com parâmetro.
function mensagem(){
    console.log("Primeira vez com função");
}
//Ativar a função
mensagem();

/*------------------------------------------------------------------*/
//Função com parÂmetro
function mostrarNome(nome){
    console.log("Seu nome é:", nome);
}
mostrarNome("David");
mostrarNome("Leonardo");
mostrarNome("Franciane");
mostrarNome("Luan");
mostrarNome("Mariana");

/*------------------------------------------------------------------*/
function soma(numero1, numero2){
    return numero1 + numero2;
}
console.log(soma(13, 20));

/*------------------------------------------------------------------*/

function soma(numero1, numero2){
    const soma = numero1 + numero2;
    return soma;
}
let resultado = soma(13, 20);
console.log(resultado);

resultado = soma(10, 2);
console.log(resultado);
/*------------------------------------------------------------------*/
function double(numero){
    return numero*2;
}
console.log(double(2));
/*------------------------------------------------------------------*/
function areaQuadrada(lado){
    return lado * lado;
}
let totalAreaQuadrado = areaQuadrada(20);
console.log("A sua área total é de: ", totalAreaQuadrado);
/*------------------------------------------------------------------*/
function pi(){
    return 3.14;
}
let valor = 5 * pi();
console.log(valor);