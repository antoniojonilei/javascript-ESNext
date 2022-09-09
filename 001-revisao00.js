// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// template string
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructuring array
const [ l, e, ...tras ] = 'Cod3r'
console.log(l, e, tras)

// Destructuring Object
const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(nome, i)