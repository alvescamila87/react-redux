const notas = [7.7, 8.9, 2.7, 5.4, 10.0, 9.8, 8.9, 9.5, 3.9, 6.8]

//sem callback
let notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

let notasAltas1 = []
for (let i in notas) {
    if(notas[i] >= 7) {
        notasAltas1.push(notas[i])
    }
}

console.log(notasAltas1)

//com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
});

console.log(notasBaixas2)

const notasAltas2 = notas.filter(function (nota) {
    return nota >= 7;
})

console.log(notasAltas2)

// com arrow function
const notasBaixas3 = notas.filter((item) => item < 7)
console.log(notasBaixas3);

const notasAltas3 = notas.filter((item) => item >= 7)
console.log(notasAltas3)

// opção 4
const notasMenorQue7 = (item) => item < 7;
const notasBaixas4 = notas.filter(notasMenorQue7);
console.log(notasBaixas4);

const notasMaiorQue7 = (item) => item >= 7;
const notasAltas4 = notas.filter(notasMaiorQue7)
console.log(notasAltas4);