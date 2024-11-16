const alunos = [ 
    { nome: "Zebedeu", nota: 9.9, bolsista: false },
    { nome: "Rute", nota: 10.0, bolsista: true },
    { nome: "Madalena", nota: 8.9, bolsista: false },
    { nome: "Tobias", nota: 7.9, bolsista: true },
]


// Desafio 1 - Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const desafio1 = alunos.map(a => a.bolsista).reduce(todosBolsistas)
console.log(desafio1)

// Desafio 2 - Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
const desafio2 = alunos.map(a => a.bolsista).reduce(algumBolsista)
console.log(desafio2)

const produtos = [
    { descricao: "Caneta", preco: 19.90, desconto: true },
    { descricao: "Lápis", preco: 12.90, desconto: false },
    { descricao: "Borracha", preco: 9.90, desconto: true },
    { descricao: "Caderno", preco: 39.90, desconto: false },
    { descricao: "Marca-texto", preco: 15.90, desconto: true },
]

const todosDescontos = (resultado, desconto) => resultado && desconto
const desafio1produtos = produtos.map(produto => produto.desconto).reduce(todosDescontos)
console.log("Todos os produtos tem desconto? ", desafio1produtos)

const algumDesconto = (resultado, desconto) => resultado || desconto
const desafio2produtos = produtos.map(produto => produto.desconto).reduce(algumDesconto)
console.log("Algum produto tem desconto? ", desafio2produtos)