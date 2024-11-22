const _ = require('lodash')

const alunos = [{
    nome: 'Zebedeu',
    nota: 9.5,
},
{
    nome: 'Madalena',
    nota: 9.9,
},
{
    nome: 'Rute',
    nota: 9.0,
},
]


// usando reducer
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual) {
    return acumulador + atual;
})

console.log(resultado);

// usando lodash
const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)
