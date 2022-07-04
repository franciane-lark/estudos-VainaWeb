const [input1, input2] = document.querySelectorAll("input");
const imagem = document.querySelector(".img-patrick");
const botao = document.querySelector("button");


function mudanca(){

    if(input1.value && input2.value.length >= 8){

        // REMOVE UM ATRIBUTO
        botao.removeAttribute("disabled");

        // ADICIONAR UMA CLASS NOVA
        imagem.classList.add("ativo");

    }else{
        // Cria um novo atributo(nome, valor)
        botao.setAttribute("disabled", "disabled");
        imagem.classList.remove("ativo");
    }

}

// MÉTODO -> Adicionamos um EVENTO
input1.addEventListener("input", mudanca);
input2.addEventListener("input", mudanca);



// BÔNUS
function corDeFundo(event){
    if(event.key === "v" || event.key === "V"){
        document.body.classList.toggle("fundo");
    }else if(event.key === "a" || event.key === "A"){
        document.body.classList.toggle("azul");
    }
}

window.addEventListener("keydown", corDeFundo);