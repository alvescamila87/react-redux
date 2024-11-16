Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 0; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1 ,2 , 3, 4, 5, 6, 7]
console.log("Soma dos números do array: ", nums.reduce2(soma))