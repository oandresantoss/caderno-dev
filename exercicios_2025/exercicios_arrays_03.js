


const jogadores = ['Arraxcaeta','Gerson','Pedro','Wesley','BH','Léo Ortis'];

console.log(jogadores)

for (let i = 0; i < jogadores.length; i++){
  console.log(`Os melhores jogadores do Flamengo são:  ${jogadores[i]}`);
}

//jogadores.push("Luiz Araujo","DelaCruz");
//jogadores.unshift("Delacrus","Luiz Araujo");
//let jogadores1 = jogadores.slice(0,3)
let teste = [...jogadores, 'Pulgar','Rossi']

console.log(teste);

let frutas = ["banana","maça","abacate","pera","uva"];
let fruta3 = frutas.slice(0,1);
console.log(`A primeira fruta é: ${fruta3}`);