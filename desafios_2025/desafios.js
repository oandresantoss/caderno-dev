


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
// Desafio 02
const fraseDoDia = {
    dia: 10,
    mes: 9,
    ano: 2025,
    frase: 'A vingança nunca é plena, mata a alma e a envenena',
    autor: 'Dede Delazueira',
  };
  
  resultado += `
    <h2>Frase do Dia</h2>
    Data: ${fraseDoDia.dia.toString().padStart(2, '0')}/
          ${fraseDoDia.mes.toString().padStart(2, '0')}/
          ${fraseDoDia.ano} <br>
    Frase: ${fraseDoDia.frase}<br>
    <strong>Autor:</strong> ${fraseDoDia.autor}<br>
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



















