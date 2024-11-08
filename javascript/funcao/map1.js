const nums = [1, 2, 3, 4, 5]

// teste camila
const numsDobro = nums.map(item => item * 2)
console.log(numsDobro);

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)

// transformar dados
const soma10 = e => e + 10
const triplo = e => e * 3
const converteParaDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado2 = nums.map(soma10).map(triplo).map(converteParaDinheiro)
console.log(resultado2)
