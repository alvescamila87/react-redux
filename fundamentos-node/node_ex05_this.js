console.log(global === this)
console.log(module === this)
console.log(module.exports === this) // objeto que é exposto para outros módulos

this.digaOi = function() {
    console.log('Oi')
}