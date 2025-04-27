

//Vou fzer uma função que recebe uma lista de cadartro simples e altera ela



let cadastro = [
    {
        nome: 'André',
        idade: 37,
    }
]

cadastro.push({nome: 'Mírian', idade:31});

console.log(cadastro); //cadastro antes da alteração

const cadAtualizado = (novosDados) => {
    Object.assign(cadastro[0], novosDados);
};

cadAtualizado({
    nome: 'Felipe',
    idade: 37,
});


console.log(cadastro);

let n1 = 4554
let n2 = 234

const soma = (n1,n2) => n1+n2;

console.log(`O valor da soma dos números é = ${soma(n1,n2)}`);