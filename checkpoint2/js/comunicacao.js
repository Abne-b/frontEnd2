// O que corrige os dados inseridos para comente numeros 
window.addEventListener('load', pesquisa);

function pesquisa() {

    const options = {
        menubar: 'GET',
        mode: 'cors',
        cache: 'default',
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/`, options)
        .then(response => response.json())
        .then(data => {
            for(let i=0;i<data.length;i++){
                criarCard(data[i].id,data[i].title,data[i].completed);
            }
        })
        // "err.message" - mostrar mensagem de erro no console
        .catch(err => console.log('Deu erro: ' + err.message))
}

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
        titulo.setAttribute('class',"tachado");
        paragrafo.setAttribute('class',"tachado");
    }
    else{
        titulo.setAttribute('class',"negrito");
        paragrafo.setAttribute('class',"negrito");
    }

    // Colocar os dados dentro dos elementos criados
    titulo.textContent = title;
    paragrafo.textContent = "ID: " + id;

    // Colocando os cards na página
    document.querySelector('body').appendChild(box);
    box.appendChild(titulo);
    box.appendChild(paragrafo);
}