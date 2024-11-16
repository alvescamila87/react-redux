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

