const PROX_NIVEL = 10
const FIM = 30

var time = []
var choices = []
var level = 0

var alternate = document.getElementsByClassName('alternate')[0]
var buttons = document.getElementsByClassName('buttons')[0]
var big = document.getElementsByClassName('changing')[0]

var shape = ["square", "circle"]
var aux = ["red", "blue", "line"]

function choose(choice){
    getTime()
    choices.push(choice)
    if(choice == big.classList[2]){
        console.log('acertou')
    }

    if (level%PROX_NIVEL == 0) {
        
    }
    removeClasses(big)
    big.classList.add(random_shape())
    big.classList.add(random_aux())
}

function start(){
    buttons.classList.remove('hidden')
    alternate.innerHTML = random_shape()
    
    getTime()
}

function finalizar(){
    console.log(choices)
    console.log(result(time))

    alternate.innerHTML = "FIM!"
    lembrar.innerHTML = ''
    buttons.classList.add('hidden')
}

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

function random_aux(){
    return aux[Math.floor(Math.random() * aux.length)]
}

function getTime() {
    var t = new Date()
    time.push(t)
}

function next_(){
    random_shape()
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