const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const PROX_NIVEL = 10
const FIM = 30
const KEY_AUSENTE = 'A'
const KEY_PRESENTE = 'L'
const FRASE_FINAL = 'Parabéns! Você concluiu o teste.\nAgora você pode retornar ao menu principal clicando em home.'

var tempo = []
var escolhas = []
var level = 1
var step = 0
var transicionando = false

var body = document.getElementsByTagName('body')[0]
var teste = document.getElementsByClassName('teste')[0]
var alternar = document.getElementsByClassName('alternar')[0]
var lembrar = document.getElementsByClassName('lembrar')[0]
var botoes = document.getElementsByClassName('botoes')[0]

var resultadoFinal = {
    fase1: {
        tempo: [],
        escolhas: []
    },
    fase2: {
        tempo: [],
        escolhas: []
    },
    fase3: {
        tempo: [],
        escolhas: []
    }
}

// INICIO DINAMICO
lembrar.innerHTML = letra_aleatoria() + letra_aleatoria()


async function comecar() {
    botoes.classList.remove('hidden')
    alternar.removeAttribute('onclick')

    alternar.innerHTML = '3'
    await sleep(1000)
    alternar.innerHTML = '2'
    await sleep(1000)
    alternar.innerHTML = '1'
    await sleep(1000)
    alternar.innerHTML = letra_aleatoria()

    console.log('comecou')

    getTime(resultadoFinal[`fase${level}`].tempo)

    window.addEventListener('keypress', listener)
}

function removeComeco() {
    window.removeEventListener('keyup', comecar)
}

function finalizar() {
    window.removeEventListener('keypress', listener)

    var div = document.createElement('div')
    var p = document.createElement('p')
    p.innerText = FRASE_FINAL
    div.classList.add('transicao')
    div.appendChild(p)
    body.appendChild(div)

    teste.classList.add('hidden')
    console.log(resultadoFinal)
}

function transicao(texto) {
    var div = document.createElement('div')
    var p = document.createElement('p')
    p.innerText = texto
    div.classList.add('transicao')
    div.appendChild(p)

    var teste = document.getElementsByClassName('teste')[0]
    teste.classList.add('hidden')

    body.appendChild(div)
}

function removeTransicao() {
    level = level + 1
    transicionando = false
    var trans = document.getElementsByClassName('transicao')[0]
    trans.remove()

    var testes = document.getElementsByClassName('teste')[0]
    testes.classList.remove('hidden')

    proximo_nivel()
    lembrar.classList.remove('hidden')
    getTime(resultadoFinal[`fase${level}`].tempo)
}

var listener = function sternberg(e) {
    if (transicionando) {
        removeTransicao()
    } else {
        getTime(resultadoFinal[`fase${level}`].tempo)
        step++
        var codigo = e.code.slice(3)
        var acertou = false

        if (codigo == KEY_AUSENTE) { // Escolha do usuario
            if (!lembrar.innerHTML.includes(alternar.innerHTML)) {
                acertou = true
            }
        } else if (codigo == KEY_PRESENTE) {
            if (lembrar.innerHTML.includes(alternar.innerHTML)) {
                acertou = true
            }
        }

        if (acertou) { //Inserção no vetor de escolhas
            resultadoFinal[`fase${level}`].escolhas.push('acertou')
            lembrar.classList.add('hidden')
        } else {
            resultadoFinal[`fase${level}`].escolhas.push('errou')
            lembrar.classList.remove('hidden')
        }


        if (step % FIM == 0) {
            finalizar()
        } else if (step % PROX_NIVEL == 0) {
            transicionando = true
            transicao(`Indo para o nivel ${level+1}.\nAperte qualquer tecla para continuar!`)
        }


        alternar.innerHTML = letra_aleatoria()
    }
}

function letra_aleatoria() {
    return ALFABETO[Math.floor(Math.random() * ALFABETO.length)]
}

function getTime(local) {
    var t = new Date()
    local.push(t)
}

function proximo_nivel() {
    var frase = ''
    for (let i = 0; i < level; i++) {
        frase = frase + letra_aleatoria() + letra_aleatoria()
    }
    lembrar.innerHTML = frase
}

function resultado(a) {
    var dif = new Array
    for (var i = 0; i < a.length - 1; i++) {
        dif.push(a[i + 1] - a[i])
    }
    return dif
}

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}