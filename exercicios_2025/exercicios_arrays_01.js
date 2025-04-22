

let frutas = ['banana', 'maçã', 'uva'];
console.log(frutas[0]); // banana


let esportes =['futebol', 'basquete', 'surf'];
console.log(esportes[2]);

let nomes = ['Ana', 'João', 'Carlos'];
for (let lista = 0; lista < nomes.length; lista++) {
  console.log(nomes[lista]);
}

//nomes.unshift("Mírian","André")
let nomesNovos = [...nomes, 'André','Mírian']
console.log(nomesNovos);
