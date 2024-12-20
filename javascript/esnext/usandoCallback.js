// sem promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

// chamadas encadeadas (aninhadas = callback hell)
let nomes = []
getTurma('A', alunos => {
    //console.log(alunos)
    //console.log(alunos[0].nome)
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    //console.log(nomes)
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        //console.log(nomes)
        getTurma("C", alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})