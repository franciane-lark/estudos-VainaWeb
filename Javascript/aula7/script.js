// // Crie um array que receba 5 itens e exiba no console.
let tecnologias = ["javascript", "css", "html", "React", "TypeScript"];
console.log("Os itens são:", tecnologias);


// // Utilize um método para adicionar um nome ao inicio do array.
tecnologias.unshift("NextJS");
console.log("Novo array:", tecnologias);

// // Utilize um método para remover o último nome do array.
tecnologias.pop();
console.log("Array atualizado:", tecnologias);

// // Utilize um método para adicionar dois nomes ao fim do array.
tecnologias.push("SasS", "vuejs");
console.log("Novas tecnologias", tecnologias);

// // Utilize um método para remover o primeiro nome do array.
tecnologias.shift();
console.log(tecnologias);

// // Utilize um método para organizar em ordem crescente o seguinte array:
let numero = [2, 310, 105, 222, 10, 25];
console.log(numero);

numero.sort(function(a, b){
    return a - b;
});
console.log(numero);

// console.log("");
// console.log("=======================================================");
// console.log("");


// // ATIVIDADE 06

// // Crie um objeto que receba ao menos três propriedades sobre você.
let sobreMim = {
    nome: "Luan",
    idade: 22,
    cursandoFaculdade: true
}

// // Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.time = "Flamengo";
console.log(sobreMim);

// // Remova uma propriedade desse objeto.
delete sobreMim.idade;
console.log(sobreMim);

// //Mostre no console todas as propriedades desse objeto.
console.log(sobreMim);

// // Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// //Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// //Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
     {
        nome: "Myllena",
        idade: 19,
        telefone: 222131,
        amigos: ["David", "Luan", "Isabella", "Paula"]
     }, 
     {
         nome: "Rômulo",
         idade: 22,
         telefone: 3123123,
         amigos: ["David", "Luan", "Isabella", "Paula"]
     }, 
    {
         nome: "Igor",
         idade: 18,
         telefone: 4342342,
         amigos: ["David", "Luan", "Isabella", "Paula"]
     }, 
     {
         nome: "Jaianny",
         idade: 20,
         telefone: 3123123,
         amigos: ["David", "Luan", "Isabella", "Paula"]
     }, 
     {
         nome: "Marcos",
         idade: 25,
        telefone: 2312312,
        amigos: ["David", "Luan", "Isabella", "Paula"]
    }
];

/// Mostre no console o nome de um amigo de cada lista.
for(let contador = 0; contador < cadastro.length; contador++ ){
    console.log(cadastro[contador].amigos[contador])
}



// DOM (Document Object Model)

 window.alert("Seja bem-vindo(a)");

 let nome = window.prompt("Qual é o seu nome?");

 window.alert(`Bem vindo(a), ${nome}`);


console.log("Aqui é o window", window);
console.log("Aqui é o document", document);

document.body.style.backgroundColor = "purple";