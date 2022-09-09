// operador ... rest(juntar) / spread(espalhar)
// usar rest com paramento de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12577 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array 
const grupoA = ['Joao', 'Maria', 'Gloria']
const grupoFinal = ['Pedro', ...grupoA, 'Fernanda']
console.log(grupoFinal)