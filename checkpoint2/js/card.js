// Script para criar os cards

// Função criarCard
// Paramêtros: Id, Title, Completed
// Retorna: Void
// Faz: Cria um card com base nos dados informados
function criarCard(id,title,completed){
    // Criar os elementos para o card
    let box = document.createElement('div');
    let titulo = document.createElement('h1');
    let paragrafo = document.createElement('p');

    // Validação do Completed
    if(completed){
        titulo.setAttribute('class',"negrito");
        paragrafo.setAttribute('class',"negrito");
    }
    else{
        titulo.setAttribute('class',"tachado");
        paragrafo.setAttribute('class',"tachado");
    }

    // Colocar os dados dentro dos elementos criados
    titulo.textContent = title;
    paragrafo.textContent = "ID: " + id;

    // Colocando os cards na página
    document.querySelector('body').appendChild(box);
    box.appendChild(titulo);
    box.appendChild(paragrafo);
}

document.getElementById("submit").addEventListener('click',criarCard);