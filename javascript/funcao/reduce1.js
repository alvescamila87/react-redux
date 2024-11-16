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