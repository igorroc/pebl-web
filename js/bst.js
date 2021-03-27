const FIRST_LEVEL = 6
const NEXT_LEVEL = 20
const FINAL_LEVEL = 30

var time = []
var choices = []
var level = 1

var alternate = document.getElementsByClassName('alternate')[0]
var buttons = document.getElementsByClassName('buttons')[0]
var big = document.getElementsByClassName('changing')[0]

var shape = ["bigsquare", "bigcircle", "bigsquarered", "bigcircleblue", "bigsquareblack", "bigcircleblack"];

function choose(choice){
    getTime()
    console.log('choice')
    choices.push(choice)
    if(choice == big.classList[1]){
        console.log('acertou')
    }
    big.classList.remove("bigcircle")
    big.classList.remove("bigsquare")
    big.classList.remove("bigcircleblue")
    big.classList.remove("bigsquarered")
    big.classList.remove("bigsquareblack")
    big.classList.remove("bigcircleblack")
    big.classList.add(`${random_shape()}`)
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

function random_shape(){
    return shape[Math.floor(Math.random() * 6)]
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
