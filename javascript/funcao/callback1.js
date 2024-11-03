const fabricantes = ['Mercedes', 'BWM', 'Audi', 'VW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)