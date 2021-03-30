const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const PROX_NIVEL = 10
const FIM = 30
const KEY_AUSENTE = 'A'
const KEY_PRESENTE = 'L'
const FRASE_FINAL = 'Parabéns! Você concluiu o teste.\nAgora você pode retornar ao menu principal clicando em home.'

var tempo = []
var escolhas = []
var nivel = 1
var transicionando = false

var body = document.getElementsByTagName('body')[0]
var teste = document.getElementsByClassName('teste')[0]
var alternar = document.getElementsByClassName('alternar')[0]
var lembrar = document.getElementsByClassName('lembrar')[0]
var botoes = document.getElementsByClassName('botoes')[0]

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

    pegaTempo()

    window.addEventListener('keypress', listener)
}

function removeComeco() {
    window.removeEventListener('keyup', comecar)
}

function finalizar() {
    console.log(escolhas)
    console.log(resultado(tempo))
    window.removeEventListener('keypress', listener)

    var div = document.createElement('div')
    var p = document.createElement('p')
    p.innerText = FRASE_FINAL
    div.classList.add('transicao')
    div.appendChild(p)
    body.appendChild(div)

    teste.classList.add('hidden')
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
    nivel = nivel + 1
    transicionando = false
    var trans = document.getElementsByClassName('transicao')[0]
    trans.remove()

    var testes = document.getElementsByClassName('teste')[0]
    testes.classList.remove('hidden')

    proximo_nivel()
    lembrar.classList.remove('hidden')
}

var listener = function sternberg(e) {
    console.log('clicou')
    if (transicionando) {
        removeTransicao()
        console.log('remove transicao')
    } else {
        pegaTempo()
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
            escolhas.push(true)
            lembrar.classList.add('hidden')
        } else {
            escolhas.push(false)
            lembrar.classList.remove('hidden')
        }


        if (escolhas.length % FIM == 0) {
            finalizar()
        } else if (escolhas.length % PROX_NIVEL == 0) {
            transicionando = true
            transicao(`Indo para o nivel ${nivel+1}.\nAperte qualquer tecla para continuar!`)
        }


        alternar.innerHTML = letra_aleatoria()
    }
}

function letra_aleatoria() {
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]
}

function pegaTempo() {
    var d = new Date()
    tempo.push(d)
}

function proximo_nivel() {
    var frase = ''
    for (let i = 0; i < nivel; i++) {
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