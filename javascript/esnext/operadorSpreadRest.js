// Operador rest (juntar) / spread (espalhar)
// usar rest com parâmetro de função

// usar spread em objeto
const funcionario = { nome: "Madalena", salario: 19999.90}
const clone = { ativo: true, ...funcionario}
//const clone = { ...funcionario, ativo: true }

console.log(clone)

// usar spread com array
const grupoA = ['João', 'Zebedeu', 'Jonas', 'Tobias']
const grupoFinal = ['Rute', ...grupoA, 'Ester']
console.log(grupoFinal)