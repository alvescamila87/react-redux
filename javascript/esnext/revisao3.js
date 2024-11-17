// ESB: Object.values e Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log("Keys: ", Object.keys(obj))
console.log("Values: ", Object.values(obj))
console.log("Entries: ", Object.entries(obj))

// Melhorias na notação literal 
const nome = "Zebedeu"
const pessoa = {
    //nome: nome
    nome,
    //ola: function() {}
    ola() { return 'Oi gente'}
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())