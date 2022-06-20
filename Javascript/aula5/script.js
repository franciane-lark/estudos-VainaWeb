// 1ª Função com For Loop

function incrementar(numero){
     for(let contador = numero; contador <= 10; contador++){
         console.log("O número é:", contador);
     }
}
incrementar(5);


//2ª Função com Condicionais

function media(nota1, nota2){     
    const notaFinal = (nota1 + nota2) / 2;
     if(notaFinal >= 9){
         console.log(`Sua nota foi ${notaFinal} - MB (Muito Bom)`);
     }else if(notaFinal >= 7 && notaFinal < 9 ){
         console.log(`Sua nota foi ${notaFinal} - B (Boa)`);
     }else if(notaFinal >= 6 && notaFinal < 7){
         console.log(`Sua nota foi ${notaFinal} - R (Regular)`);
     }else{
            console.log(`Sua nota foi ${notaFinal} - I (Insuficiente)`);
     }
}

media(7, 9);
media(10, 2);
media(10, 2);
media(10, 10);
media(2, 2);




//SWITCH CASE

//ESTRUTURA BÁSICA DO SWITCH

let dia = 0;

switch(dia){
    case 0:
        console.log("Domingo");
    break;
    case 1:
        console.log("Segunda");
    break;
    case 2:
        console.log("Terça");
    break;
    case 3:
        console.log("Quarta");
    break;
    case 4:
        console.log("Quinta");
    break;
    case 5:
        console.log("Sexta");
    break;
    case 6:
        console.log("Sabádo");
    break;
    default:
        console.log("Nenhum dia");
    break;
}


// SWITCH CASE 2

let corFavorita = "Amarelo";

switch(corFavorita){
    case "Amarelo":
        console.log("Bonito SOL");
    break;
    case "Azul":
        console.log("Lindo MAR");
    break;
    default:
        console.log("Outra cor");
    break;
}