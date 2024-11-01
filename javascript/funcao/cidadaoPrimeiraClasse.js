// Função em JS é first class object (citizens)
// high-order function

// criar de forma literal 
function fun1() {}

// armazenar em uma variável
const fun2 = function () {}

// armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3));

// armazenar em um atributo de objeto
const obj = {}

obj.falar = function () { return "Hey man!"}

console.log(obj.falar())

// passar uma função como param
function run(fun) {
    fun()
}

console.log(function () { console.log('Executando...') })

// uma função pode retornar/conter uma função

function soma(a, b){
    return function(c) {
        console.log(a + b + c)
    }
}

soma(1, 7)(4)