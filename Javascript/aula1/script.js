//Declaração de variavel: var, let e const

//6 tipos de dados: String, Number, boolean, null, undefined, NaN

let nome = "Welder"; //String
let aluna = 'Eliana'; //String
let aluno = `Cosme`; //String
console.log(nome, aluna, aluno);
console.log(typeof nome,typeof aluna,typeof aluno);


let notaFinal = 8;//Number
console.log(notaFinal);
console.log(typeof notaFinal);

let idade = 32;
idade = 25;
console.log(idade);

const cpf = 222; //const -> só pode receber um único valor. Não muda!
console.log(cpf);

const turmaUnida = true;//booleano
console.log(turmaUnida);
console.log(typeof turmaUnida);

let numero = null;//null
numero = 2;
console.log(numero);

let materia;//undefined
materia = "JS";
console.log(materia);

let aluno1 = "Felipe";// NaN
let aluno2 = "Silva";
console.log(aluno1 - aluno2);

let nota1 = 8;
let nota2 = 10;
let media = (nota1 + nota2) / 2;
console.log(`Sua primeira nota foi ${nota1}, nota 2 foi ${nota2}`);