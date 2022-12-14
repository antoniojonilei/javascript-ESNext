// for of opera em cima de valores

for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// for in pega o indice
for (let i in assuntosEcma) {
    console.log(i)
}

//for of pega o valor
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let valor of assuntosMap.values()){
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
} 

const percorrerSet = new Set(['a', 'b', 'c'])

for (let letra of percorrerSet){
    console.log(letra)
}