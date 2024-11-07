const fabricantes = ['Mercedes', 'BWM', 'Audi', 'VW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

// EXERCÍCIO

const alunos = ['João', 'Maria', 'Zebedeu']

function listarNomes(nome, index) {
    console.log(`${index} - ${nome}`);
}

alunos.forEach(listarNomes)
alunos.forEach(aluno => console.log(aluno));
