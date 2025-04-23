


//Desafio 01 (professor Edson Maia)
let cadastro = {
    nome: 'André Santos',
    nacionalidade: 'Brasileiro',
    peso: 95,
    altura: 1.83,
};

let resultado = `
    <h2>Informações</h2> 
    Lutador: ${cadastro.nome}<br>
    nacionalidade: ${cadastro.nacionalidade}<br>
    peso: ${cadastro.peso} Kg<br>
    altura: ${cadastro.altura} m<br>
`;

//Desasfio 02
let frasedoDia = {
    data: '10/09/2021',
    frase: 'A vingança nunca é plena, mata a alma e a envenena',
    autor: 'Dede Delazueira',
};

resultado += `
    <h2>Frase do Dia</h2> 
    ${frasedoDia.data}<br>
    ${frasedoDia.frase}<br>
    <strong> ${frasedoDia.autor}</strong><br>
`;

// Desafio 03
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', '...'];

resultado += `
  <h2>Array de Meses do Ano</h2>
  ${meses.join(', ')}<br>
`;
   
// Desafio 04
let jogoJogo = {
    jogo: 'eFootball 2025',
    dev: 'Konami',
    ano: 2025,
};
 
resultado += `
    <h2>Objeto Jogo</h2>
    jogo: ${jogoJogo.jogo}<br>
    dev: ${jogoJogo.dev}<br>
    ano: ${jogoJogo.ano}<br>
`;

document.body.innerHTML = resultado;



















