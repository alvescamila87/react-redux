const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false },
]

const produtosFiltradosPorPreco = produtos.filter(item => item.preco < 2000);
console.log(produtosFiltradosPorPreco)

const produtosFiltradosPorFragilidade = produtos.filter(item => item.fragil === false)
console.log(produtosFiltradosPorFragilidade)

// usando função callback
console.log(produtos.filter(function(produto) {
    return produto.preco > 2500
}))

console.log(produtos.filter(function(produto) {
    return produto.fragil === true
}))

console.log(produtos.filter(function(produto) {
    return produto.fragil === true && produto.preco < 2000
}))

// Não funciona pois "O erro ocorre porque você tentou passar o resultado de produtos.filter(produtosFrageis).filter(produtosCaros) 
// como uma função de filtro. No entanto, produtosFrageis e produtosCaros são, na verdade, arrays resultantes do filtro, e não funções."
//
// const produtosFrageis = produtos.filter(function(produto) {
//     return produto.fragil === true;
// })

// const produtosCaros = produtos.filter(function(produto) {
//     return produto.preco > 2000
// })

// produtos.filter(produtosFrageis).filter(produtosCaros)
// console.log("Resultado 1: ", produtos.filter(produtosFrageis).filter(produtosCaros))

// resolução do vídeo
const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;
console.log("Resultado 2: ", produtos.filter(caro).filter(fragil))