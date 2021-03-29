const PROX_NIVEL = 10
const FIM = 50

var time = []
var choices = []
var level = 1
var transicionando = false

var body = document.getElementsByTagName('body')[0]
var alternate = document.getElementsByClassName('alternate')[0]
var buttons = document.getElementsByClassName('buttons')[0]
var big = document.getElementsByClassName('changing')[0]

var shape = ["square", "circle"]
var aux = {
    circle:[
        "red",
        "line"
    ],
    square:[
        "blue",
        "line"
    ]
}

getTime()

function choose(choice){
    getTime()
    choices.push(choice)
    if(choice == big.classList[2]){
        console.log('acertou')
    }else{
        console.log('errou')
    }

    if (choices.length%FIM == 0) {
        finalizar()
    }else if (choices.length%PROX_NIVEL == 0) {
        transicionando = true
        transicao(`Indo para o nível ${level+1}.\nClique aqui para continuar`)
    }
    removeClasses(big)
    let forma = random_shape()
    big.classList.add(forma)
    big.classList.add(random_aux(forma))
}

function transicao(texto){
    var div =  document.createElement('div')
    var p = document.createElement('p')
    p.innerText = texto
    div.classList.add('transicao')
    div.appendChild(p)

    div.setAttribute('onclick', 'removeTransicao()')

    var teste = document.getElementsByClassName('test')[0]
    teste.classList.add('hidden')

    body.appendChild(div)
}

function removeTransicao(){
    level = level+1
    transicionando = false

    proximo_nivel()

    removeClasses(big)
    let forma = random_shape()
    big.classList.add(forma)
    big.classList.add(random_aux(forma))
    
    var trans = document.getElementsByClassName('transicao')[0]
    trans.remove()
    var testes = document.getElementsByClassName('test')[0]
    testes.classList.remove('hidden')
}

function finalizar(){
    var buttons = document.getElementsByClassName('buttons')[0]
    buttons.remove()

    var div =  document.createElement('div')
    var p = document.createElement('p')
    p.innerText = 'VOCÊ FINALIZOU'
    div.classList.add('transicao')
    div.appendChild(p)
    body.appendChild(div)
    
    var testes = document.getElementsByClassName('test')[0]
    testes.classList.add('hidden')

    console.log(resultado(time))
}

function proximo_nivel(){
    aux = {}
    if (level == 1) {
        aux = {
            circle:["red","line"],
            square:["blue","line"]}
    }else if (level == 2){
        aux = {
            circle:["line"],
            square:["line"]}
    }else if (level == 3){
        aux = {
            circle:["red"],
            square:["blue"]}
    }else if (level == 4){
        aux = {
            circle:["blue"],
            square:["red"]}
    }else if (level == 5){
        aux = {
            circle:["blue","red","line"],
            square:["blue","red","line"]}
    }
}

// FUNCOES DE AJUDA
function removeClasses(div){
    div.classList.remove('red')
    div.classList.remove('blue')
    div.classList.remove('line')
    div.classList.remove('square')
    div.classList.remove('circle')
}

function random_shape(){
    return shape[Math.floor(Math.random() * shape.length)]
}

function random_aux(forma){
    return aux[forma][Math.floor(Math.random() * aux[forma].length)]
}

function getTime() {
    var t = new Date()
    time.push(t)
}

function resultado(a){
    var dif = new Array
    for (var i = 0; i < a.length-1; i++) {
        dif.push(a[i+1]-a[i])
    }
    return dif
}

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}