// Script para inserir a data atual no devido campo

let dataCriacao = document.getElementById("dateCreate");
let data = new Date();
let dia = String(data.getDate()).padStart(2, '0');
let mes = String(data.getMonth() + 1).padStart(2, '0');
let ano = data.getFullYear();

dataAtual = ano + '-' + mes + '-' + dia;
dataCriacao.value = dataAtual;

document.querySelector("#dateEnd").setAttribute("min",dataAtual);

//Adiciona os eventos
document.getElementById("submit").addEventListener('click', validar);
document.getElementById("fetch").addEventListener('click', pegarAPI);

// Função campoVazio
// Paramêtros: (Campo)[String] para ser validado
// Retorna: Boolean
// Faz: Avisa com alert quando o campo definido se encontram vazios
function campoVazio(campo) {
    let elemento = document.getElementById(campo);
    if (elemento.value.length == 0) {
        alert(`Campo ${campo} vazio!`);
        elemento.style.background = "red";
        return true;
    }
    else {
        elemento.style.background = "white";
        return false;
    }

}

// Função menorTamanhoCampo
// Paramêtros: (Campo)[String] com restrição, (Tamanho)[int] da restrição
// Retorna: Boolean
// Faz: Informa quando o campo se encontra com menos caracteres que o mínimo aceitável
function menorTamanhoCampo(campo, tamanho) {
    let elemento = document.getElementById(campo);
    if (elemento.value.length < tamanho) {
        alert(`Campo ${campo} com menos de ${tamanho} caracteres`);
        elemento.style.background = "red";
        return true;
    }
    else {
        elemento.style.background = "white";
        return false;
    }
}



// Função Validar
// Paramêtros: Nenhum
// Retorna: Void
// Faz: Faz as verificações de validação e se tudo estiver certo irá criar os cards.
function validar() {
    if (campoVazio("title") || campoVazio("dateEnd") || campoVazio("description")  || menorTamanhoCampo("description", 10))
        alert("Verificar erro!");
    else
        criarCard();
}

// Script para criar os cards

// Função criarCard
// Paramêtros: Nenhum
// Retorna: Void
// Faz: Cria um card com base nos dados do formulário
function criarCard(task) {

    // Criar os elementos para o card
    let card = document.createElement('div');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('h3');
    let cardDescription = document.createElement('p');
    let checkbox = document.createElement('input');
    let botao = document.createElement('button');
    let dateContainer = document.createElement('div');
    let cardFooter = document.createElement('div');
    let cardDueDate = document.createElement('div');
    let cardCreationDate = document.createElement('div');

    //Adicionando estilo aos elementos
    botao.classList.add("delete-button");
    dateContainer.classList.add("date-container");
    card.classList.add("card");
    cardBody.classList.add("card-body");
    cardDueDate.classList.add("card-date");
    cardCreationDate.classList.add("card-date");
    cardFooter.classList.add("card-footer");


    //Transformando input em checkbox
    checkbox.type = "checkbox";
    
    //Dando conteúdo ao botão
    botao.textContent = "Apagar";

    // Pegar dados do formulário
    let tituloFormulario = document.getElementById("title");
    let descricao = document.getElementById("description");
    let creationDate = document.getElementById("dateCreate").value;
    let dueDate = task ? "indefinida":document.getElementById("dateEnd").value;

    // Colocar os dados dentro dos elementos criados
    cardTitle.textContent = task ? "" : tituloFormulario.value;
    cardDescription.textContent = task ? task.title : descricao.value;
    cardCreationDate.textContent = `Data de criação:\n${creationDate.split("-").reverse().join("-")}`
    cardDueDate.textContent = `Data de conclusão:\n${dueDate.split("-").reverse().join("-")}`
    // Limpando o formulário
    tituloFormulario.value = "";
    descricao.value = "";

    //Adicionando eventos
    checkbox.addEventListener('click', e=>tachar(card,task));
    botao.addEventListener('click', e=>remover(card));

    //Agrupando elementos no corpo
    cardBody.appendChild(checkbox);
    cardBody.appendChild(cardDescription);

    //Agrupando elementos no footer 
    dateContainer.appendChild(cardCreationDate);
    dateContainer.appendChild(cardDueDate);
    cardFooter.appendChild(botao);
    cardFooter.appendChild(dateContainer);

    // Adicionando os elementos ao card
    cardTitle.textContent ? card.appendChild(cardTitle) : false;
    card.appendChild(cardBody)
    card.appendChild(cardFooter);
    
    // Adicionando card ao container
    document.querySelector("#card-container").appendChild(card);

    //Verifica se task da API está completada e risca
    task ? (task.completed ? checkbox.click():false):false;

}

// Função Tachar
// Paramêtros: Card a ser tachado
// Resulta: Void
// Faz: Deixa o testo tachado indicando que a task foi concluida
function tachar(card,api) {

    let i = 1;
    if(api) i = 0
    card.children[i].children[1].classList.toggle("tachado")

}

// Funçao Remover
// Paramêtros: Card a ser removido
// Retorno: Void
// Faz: Remove os elementos do card e oculta o mesmo caso o usuário confime que deseja fazer isso
function remover(card) {
    
    let opcao = confirm("Deseja cancelar a task?");
    if(opcao)document.querySelector("#card-container").removeChild(card);
    
}

function pegarAPI(){
    
    fetch("https://jsonplaceholder.typicode.com/todos/").then(response=>{
        return response.json();
    }).then(data=>{
        data.forEach(e=>{
            criarCard(e)
        });
    }).catch(error=>{
        console.error(error);
    });
    
}   