// arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// parâmtro default
function log(texto = "Node") {
    console.log(texto)
}

log()
log(undefined)
log(null)
log("Sou mais forte")

// operador REST (spread: espalhar, rest de agrupar)
// se array e objeto => spread
// se function rest
function total(...numeros) {
    let total = 0 
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5)) // passa os valores espalhados e a função agrupa