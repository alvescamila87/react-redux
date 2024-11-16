const alunos = [ 
    { nome: "Zebedeu", nota: 9.9, bolsista: false },
    { nome: "Rute", nota: 10.0, bolsista: true },
    { nome: "Madalena", nota: 8.9, bolsista: false },
    { nome: "Tobias", nota: 7.9, bolsista: true },
]

console.log("Notas do array: ", alunos.map(a => a.nota))

const somaNotas = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log("Resultado soma das notas: ", somaNotas)

// é possível iniciar o acumulador com um valor:
const somaNotas2 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 25) // valor inicial

console.log("Resultado soma das notas: ", somaNotas2)

const produtos = [
    { descricao: "Caneta", preco: 19.90, desconto: true },
    { descricao: "Lápis", preco: 12.90, desconto: false },
    { descricao: "Borracha", preco: 9.90, desconto: true },
    { descricao: "Caderno", preco: 39.90, desconto: false },
    { descricao: "Marca-texto", preco: 15.90, desconto: true },
]

const totalProdutos = produtos.map(produto => produto.preco).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
});

console.log("Valor total dos materiais escolares R$ ", totalProdutos)