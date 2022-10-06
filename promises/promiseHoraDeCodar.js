// criação de promise
const myPromise = new Promise((resolve, reject) => {
    const nome = 'Jonilei'

    if (nome === 'Jonilei') {
        resolve('Usuário Jonilei encontrado')
    } else {
        reject('Usuário não encontrado!')
    }
})

myPromise.then((dados) => {
    console.log(dados)
})

// encadeamento de then()
const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Jonilei'

    if (nome === 'Jonilei') {
        resolve('Usuário Jonilei encontrado')
    } else {
        reject('Usuário não encontrado!')
    }
})

myPromise2
    .then((dados) => {
        return dados.toUpperCase()
    })
    .then((stringModificada) => {
    console.log(stringModificada)
    })


// Retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'Fernanda'

    if (nome === 'Jonilei') {
        resolve('Usuário Jonilei encontrado')
    } else {
        reject('Usuário não encontrado!')
    }
})

myPromise3
    .then((dados) => {
        console.log(dados)
    }).catch((err) => {
        console.log(`Aconteceu um erro ${err}`)
    })



// Resolver varias promessas  ALL
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 Ok TimeOut')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 Ok')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 Ok')
})

const resolveAll = Promise.all([p1, p2, p3]).then((dados) => {
    console.log(dados)
})


//Resposta imediata
console.log('Depois do all') 


// Varias promessas com race
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 Ok TimeOut')
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 Ok')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 Ok')
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})



// Fetch request na API do GitHub
// Fetch API

const userName = 'antoniojonilei'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((dados) => {
    console.log(dados)
    console.log(`O nome do usuário é ${dados.name}`)
}).catch((err) => {
    console.log('Houve um erro!!! Catch')
})