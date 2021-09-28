// Script para fazer as validações

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

// Função dataConclusaoValidar
// Paramêtros: Nenhum
// Retorna: Boolean
// Faz: Informa caso a data de conclusão seja anterior a data de inicio
function dataConclusaoValidar() {
    const mensagem = "Data de conclusão não pode ser anterior a data de criação!";
    let elemento = document.getElementById("dateEnd");
    let datafim = elemento.value;
    var date = new Date(datafim.split('-').join('-'));
    var dataAtual = new Date();
    if (date < dataAtual) {
        alert(mensagem);
        elemento.style.background = "red";
        return true;
    }
    else {
        elemento.style.background = "white";
        return false;
    }
}

document.getElementById("submit").addEventListener('click', validar);

// Função Validar
// Paramêtros: Nenhum
// Retorna: Void
// Faz: Faz as verificações de validação e se tudo estiver certo irá criar os cards.
function validar() {
    if (campoVazio("title") || campoVazio("dateEnd") || campoVazio("description") || dataConclusaoValidar() || menorTamanhoCampo("description", 10))
        alert("Verificar erro!");
    else
        criarCard();
}

// Script para criar os cards

// Função criarCard
// Paramêtros: Nenhum
// Retorna: Void
// Faz: Cria um card com base nos dados do formulário
function criarCard() {
    // Criar os elementos para o card
    let box = document.getElementById('box');
    let titulo = document.querySelector('h1');
    let paragrafo = document.querySelector('p');
    let checkbox = document.getElementById('checkbox');
    let botao = document.getElementById('cancelar');

    // Pegar dados do formulário
    let tituloFormulario = document.getElementById("title");
    let descricao = document.getElementById("description");

    // Colocar os dados dentro dos elementos criados
    titulo.textContent = tituloFormulario.value;
    paragrafo.textContent = descricao.value;

    // Limpando o formulário
    tituloFormulario.value = "";
    descricao.value = "";
    checkbox.addEventListener('click', tachar);
    botao.addEventListener('click', remover);

    // Exibindo o card
    box.style.display = "block";
}

// Função Tachar
// Paramêtros: Nenhum
// Resulta: Void
// Faz: Deixa o testo tachado indicando que a task foi concluida
function tachar() {
    let h1 = document.querySelector("h1");
    let p = document.querySelector("p");
    if (p.getAttribute('class') == "tachado") {
        p.removeAttribute('class');
        h1.removeAttribute('class');
    }
    else {
        h1.setAttribute('class', "tachado");
        p.setAttribute('class', "tachado");
    }
}

// Funçao Remover
// Paramêtros: Nenhum
// Resulta: Void
// Faz: Remove os elementos do card e oculta o mesmo caso o usuário confime que deseja fazer isso
function remover() {
    let opcao = confirm("Deseja cancelar a task?");

    if (opcao) {
        // Atribuindo as variáveis
        let box = document.getElementById('box');
        let titulo = document.querySelector('h1');
        let paragrafo = document.querySelector('p');

        // Limpando o card
        titulo.textContent = "";
        paragrafo.textContent = "";

        // Ocultar o card
        box.style.display = "none";
    }
}