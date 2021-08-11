// Questão 1. A secretaria de uma escola contratou a sua empresa para desenvolver sua plataforma de gestão de alunos, sendo uma dessas partes a criação de um sistema que calcule as notas obtidas ao longo do semestre, Você e seu grupo fazem parte da equipe responsável por implementar esta funcionalidade no sistema.
// Crie um script que permita adicionar uma sequência de números (um array de números) consecutivamente para receber as notas dos 4 bimestres. Após isso, crie uma estrutura na qual todos os números do array sejam somados sequencialmente: o primeiro número seja somado ao segundo e o resultado seja impresso no console. Então, temos que pegar esse resultado e adicionar o terceiro número a ele, e assim por diante, até terminarmos de percorrer o array.
// Por fim, a soma desses números deve ser dividida pelo total de bimestres (4) para calcular a média e guardada em uma variável, a qual deve ser exibida no console.

// Questão 2. Terminada esta etapa é hora de preparar o código para ficar mais amigável ao usuário final, com mensagens que informem a nota do aluno e sua condição:
// 1. Utilizando a função console.log informe a nota que o aluno teve em cada um dos bimestres e por fim sua nota final. Por exemplo: “Parabéns pela conclusão do primeiro bimestre. Sua nota foi: 8.”;
// 2. Após mostrar a nota final, crie uma estrutura de decisão que informe se o aluno foi aprovado ou não, sendo a média da escola 7.
// 3. Por fim, comente as etapas do código.

let aluno1 = [6, 8, 9, 10];
let aluno2 = [6, 3, 5, 8];
let aluno3 = [5, 9, 6, 8];

// função que imprime o somatório das notas por bimestre
somaBimestral = (alunoX) => {
    let nota = 0;    
    for(i = 0; i<alunoX.length; i++){
         nota += alunoX[i] 
        console.log(`O somatório da sua nota no ${i+1}º bimestre é: ${nota} \n`);}
};

//imprime a nota do aluno por bimestre
notaBimestral = (alunoX) => {    
    for(i = 0; i<alunoX.length; i++){
        console.log(`Sua nota no ${i+1}º bimestre é: ${alunoX[i]} \n`);}
};

// função que retorna a média da soma de todas as notas
let media = (alunoX) => {
    let med = alunoX.reduce((acc,e)=>acc+e);
    return med/alunoX.length;
}

//imprime o valor da média final do aluno junto de uma mensagem dizendo se ele aprovou ou não
let aprovacao = (media) => {
    if(media >= 7){
        console.log(`Sua média final é ${media} \nVocê foi aprovado!! \n`);
    } else {
        console.log(`Sua média final é ${media} \nVocê foi reprovado, tente de novo! \n`);
    }
}

somaBimestral(aluno1);
notaBimestral(aluno1);
aprovacao(media(aluno1));

somaBimestral(aluno2);
notaBimestral(aluno2);
aprovacao(media(aluno2));

somaBimestral(aluno3);
notaBimestral(aluno3);
aprovacao(media(aluno3));