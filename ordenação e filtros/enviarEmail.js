// algoritmo teste de estagio

let computadorLigado = false
let browseAberto = false
let email
let emailEnviado = false

function ligarComputador() {
    if(computadorLigado === false) {
        computadorLigado = true
    }

    return computadorLigado
}

function abrirBrowse() {
    if(browseAberto == false) {
        browseAberto = true
    }

    return browseAberto
}

function clickEscrever(email) {
    let corpoEmail = 'email corporativo para um diretor solicitando uma reunião de apresentação de indicadores.'
    email = corpoEmail

    return email
}

function clickEnviar() {
    if(emailEnviado == false) {
        emailEnviado = true
    }

    return emailEnviado
}

function enviarEmail() {
    ligarComputador()
    abrirBrowse()
    clickEscrever()
    clickEnviar()    

    console.log('E-mail enviado com sucesso')
}

enviarEmail()