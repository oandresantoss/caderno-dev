

//Vou fzer uma função que recebe uma lista de cadartro simples e altera ela



let cadastro[
    {
        nome: 'André',
        idade: 37,
    }
]

console.log(cadastro); //cadastro antes da alteração

const CadaAtualizado = (novosDados) => {
    Object.assign(cadastro[0], novosDados);
};

cadAtualizado({
    nome: 'Felipe',
    idade: 37,
});

console.log(cadastro);