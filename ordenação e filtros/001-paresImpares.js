// Desafio
// Crie um programa onde você receberá valores inteiros não negativos como entrada.

// Ordene estes valores de acordo com o seguinte critério:

// Primeiro os Pares
// Depois os Ímpares
// Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

// Entrada
// A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

// Saída
// Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.

let totalItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let pares = []
let impares = []

for(let i = 0; i < totalItems.length; i++) {
    // console.log(totalItems[i])

    if(totalItems[i] % 2 == 0) {
        pares.push(totalItems[i])
        
    }
    else {
        impares.push(totalItems[i])
    }

}

// console.log(`Pares: ${pares}, Impares: ${impares}`)

pares.sort()

console.log(pares)