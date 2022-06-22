//ARRAY -> Serve para armazenar diferentes valores na variavel
//MÉTODOS e PROPRIEDADES

 let nome = ["Paula", "Rômulo", "David", 10];

 for(let itens = 0; itens < nome.length; itens++){
     console.log(`Elemento de index ${itens} tem o nome de ${nome[itens]}`);
 }

console.log(nome);
 //Para pegar um elemento especifico
 console.log(nome[1]);  

//===============================================================

//MÉTODOS DE UM ARRAY

let alunos = ["Rômulo", "David", "Paula", "Gustavo", "Luciano"];
console.log(alunos);

//SORT() -> Ordenar [arrumar os elementos de um array em ordem alfabética 
//ou numérica]
 console.log("Colocando em Ordem alfabética:", alunos.sort());

 let numeros = [2, 1, 5, 3, 6, 0];
 console.log("Números simples:", numeros);
  console.log("Números em ordem numérica:", numeros.sort());

 let number = [12, 23, 42, 338, 10, 35];
 console.log("Número antes:", number);

 let resultado = number.sort(function(a, b){
     return a - b;
 });
 console.log("A ordem correta é:", resultado);
//=============================================================

// UNSHIFT() -> Adiciona no começo da lista
const novoAluno = alunos.unshift("Luan", "Alessandra");
console.log(alunos);


// SHIFT() -> Remove o primeiro da lista
const remover = alunos.shift();
console.log(alunos);


// PUSH() -> Adiciona no final da lista
const adicionar = alunos.push("Ana Carolina", "Luan");
console.log(alunos);


// POP() -> Remove o último da lista
const retirar = alunos.pop();
console.log(alunos);

//====================================================

// SPLICE() -> Remove, adiciona ou substitui

// (de onde começa, quantos eu quero)
const removeSplice = alunos.splice(1, 2);
console.log("Quem removi:", removeSplice);
console.log("Remover com Splice:", alunos);


const adicionarSplice = alunos.splice(0, 0, "Franciane");
console.log("Adicionar com Splice:", alunos);


const substituirSplice = alunos.splice(1, 3, "Teste");
console.log("Substituir com Splice:", alunos);

//===================================================================

// OBJETO -> conjunto de variaveis e funções que são chamadas de 
// propreidades e métodos
console.log("");

// ESTRUTURA DO OBJETO
// const objetoTeste = {
//     chave: valor
// };

console.log("AQUI COMEÇA O OBJETO");    

const pessoa = {
    nome: "Luan",
    idade: 22,
    profissao: "Professor"
}
console.log("O primeiro objeto:", pessoa);

pessoa.time = "Flamengo";

pessoa.telefone = 2222222;

// Para deletar
delete pessoa.telefone;

console.log("O segundo objeto:", pessoa);
console.log(pessoa.nome);

//=================================================================
// ARRAY COM OBJETOS

const geral = [
    {
        nome: "Luan",
        idade: 22,
        tecnologias: ["React JS", "Next", "JavaScript"]
    },
    {
        nome: "Mariana",
        idade: 18,
        tecnologias: ["React JS", "CSS3", "JavaScript"]
    }
]

console.log(geral[0]);
console.log(geral[1].tecnologias);