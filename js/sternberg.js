const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const PROX_NIVEL = 10
const FIM = 30
const KEY_AUSENTE = 'A'
const KEY_PRESENTE = 'L'

var tempo = []
var escolhas = []
var nivel = 1

var alternar = document.getElementsByClassName('alternar')[0]
var lembrar = document.getElementsByClassName('lembrar')[0]
var botoes = document.getElementsByClassName('botoes')[0]

function comecar(){
    botoes.classList.remove('hidden')
    alternar.innerHTML = letra_aleatoria()
    lembrar.innerHTML = letra_aleatoria()+letra_aleatoria()
    alternar.removeAttribute('onclick')
    
    pegaTempo()

    window.addEventListener('keypress', listener)
}

function finalizar(){
    console.log(escolhas)
    console.log(resultado(tempo))
    window.removeEventListener('keypress', listener)

    alternar.innerHTML = "FIM!"
    lembrar.innerHTML = ''
    botoes.classList.add('hidden')
}

var listener = function sternberg (e) {
    pegaTempo()
    var codigo = e.code.slice(3)
    var acertou = false

    if (codigo == KEY_AUSENTE) { // Escolha do usuario
        if (!lembrar.innerHTML.includes(alternar.innerHTML)) {
            acertou = true
        }
    } else if(codigo == KEY_PRESENTE){
        if (lembrar.innerHTML.includes(alternar.innerHTML)) {
            acertou = true
        }
    }

    if (acertou) { //Inserção no vetor de escolhas
        escolhas.push(true)
        lembrar.classList.add('hidden')
    }else{
        escolhas.push(false)
        lembrar.classList.remove('hidden')
    }


    if (escolhas.length%FIM == 0) {
        finalizar()
    }else if (escolhas.length%PROX_NIVEL == 0) {
        nivel = nivel+1
        proximo_nivel()
    }
    

    alternar.innerHTML = letra_aleatoria()
}

function letra_aleatoria(){
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]
}

function pegaTempo() {
    var d = new Date()
    tempo.push(d)
}

function proximo_nivel(){
    var frase = ''
    for (let i = 0; i < nivel; i++) {
        frase = frase+letra_aleatoria()+letra_aleatoria()
    }
    lembrar.innerHTML = frase
}

function resultado(a){
    var dif = new Array
    for (var i = 0; i < a.length-1; i++) {
        dif.push(a[i+1]-a[i])
    }
    return dif
}