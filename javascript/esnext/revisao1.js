// let e const
{
    var a = 2;
    let b = 3;
    console.log(b)
}

console.log(a)
//console.log(b) não acessível fora do bloco

// template string
const produto = 'iPhone';
console.log(`${produto} é caro`)

// destructuring
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: "Zebedeu", idade: 30 }
console.log(i, nome)