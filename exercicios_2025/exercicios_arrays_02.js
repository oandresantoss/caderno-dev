


const frutas = ['maça','banana','laranja','pessego','melão'];

//Arrays são zero based
console.log(frutas);
console.log(frutas[1]);

/*i => 0, i=> 1, i=> 2, i=> 3
for(let i = 0; i <= 4; i++){
  console.log("fruta: " + frutas[i]);
}
*/

//lista.lenght => (quantiodade de elementos
// percorre toda quantidade de elementos das listas 
for(let i = 0; i < frutas.length; i++){
  console.log("frutas: " + frutas[i]);
}

