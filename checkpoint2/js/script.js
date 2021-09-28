// Script para fazer as validações

// Validação de campos não vazios
function camposValidados(){
    let title = document.getElementById("title");
    let dateEnd = document.getElementById("dateEnd");
    let description = document.getElementById("description");
    if(title.textContent.length == 0){
        alert("Campo Título vazio!");
    }
    if(dateEnd.textContent.length == 0){
        alert("Campo Data de Conclusão vazio!");
        alert(dateEnd.value);
    }
    if(description.textContent.length <= 10){
        alert("Campo Descrição precisa ter mais de 10 caracteres!");
    }
    else{
        // return true;
        document.getElementById("formularioTarefa").submit;
    }
}

// Funcionalidades

// document.getElementById("submit").addEventListener('click',camposValidados);


// const camposValidados = () => { 
//     let title = document.getElementById("title"); 
//     let dateEnd = document.getElementById("dateEnd"); 
//     let description = document.getElementById("description"); 
    
//     switch (preventDefault()) {
//         case title:
//             title.textContent.length == 0;
//             alert("Campo Título vazio!");
//             break;
//         case textContent:
//             dateEnd.textContent.length == 0;
//             alert("Campo Data de Conclusão vazio!");
//             break;
//         case title:
//             description.textContent.length <= 10;
//             alert("Campo Descrição precisa ter mais de 10 caracteres!");
//             break;
//         default:
//             false
//             break;
//     }
// }

function submit_form() {
    if (camposValidados) {
        document.getElementById("formularioTarefa").submit;
    }
    else {
        alert("Verifique e corrija o preenchimento da tarefa!");
    }
}
