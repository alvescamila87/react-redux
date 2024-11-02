const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar();
const falar = pessoa.falar
falar() // conflito entre paradigmas: functional e OO

// sempre que chamar a função o bind sabe a referência
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()