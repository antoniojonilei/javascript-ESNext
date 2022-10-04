
// setTimeout(function() {
//     console.log('Executando callback...')
    
//     setTimeout(function() {
//         console.log('executando...')

//         setTimeout(function() {
//             console.log('salve...')

//         }, 2000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando uma Promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)