# Arrays em JavaScript

## O que é um array?
É uma lista de elementos. Cada item (elemento) tem um índice (posição).

## Sintaxe:
```js

Plano de 7 Dias – Domine Arrays, Objetos e Funções (comecei hoje: 21/04/2025)

let frutas = ['banana', 'maçã', 'uva'];
console.log(frutas[0]); // banana

let esportes =['futebol', 'basquete', 'surf'];
console.log(esportes[2]); //Surf


Métodos que testei:
push(): adiciona item

pop(): remove o último

length: quantos itens tem

Exercício que fiz:
Criei uma lista de nomes dos melhores jogadores do flamengo e imprimi todos com for.

const jogadores = ['Arraxcaeta','Gerson','Pedro','Wesley','BH','Léo Ortis'];

console.log(jogadores)

for(i = 0; i < jogadores.length; i++){
  console.log('Os melhores jogadores do flamengo são: ' + jogadores[i]);
}

/*[ 'Arraxcaeta', 'Gerson', 'Pedro', 'Wesley', 'BH', 'Léo Ortis' ]
Os melhores jogadores do flamengo são: Arraxcaeta
Os melhores jogadores do flamengo são: Gerson
Os melhores jogadores do flamengo são: Pedro
Os melhores jogadores do flamengo são: Wesley
Os melhores jogadores do flamengo são: BH
Os melhores jogadores do flamengo são: Léo Ortis
*/

ao final dos estudos fiz alguns exercicios de Arrays + Lopps (for,while e do while)