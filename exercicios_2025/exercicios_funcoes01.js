

//Vou fzer uma função que recebe uma lista de cadartro simples e altera ela



let cadastro = [
    {
        nome: 'André',
        idade: 37,
    }
]

console.log(cadastro); //cadastro antes da alteração
// cria uma cópia origi8nal do objeto antes de modificá-lo
const cadAtualizado = (novosDados) => {
    Object.assign(cadastro[0], novosDados);
};
// dados novos 
cadAtualizado({
    nome: 'Felipe',
    idade: 37,
});


console.log(cadastro);