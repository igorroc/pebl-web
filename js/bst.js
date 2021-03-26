const FIRST_LEVEL = 6
const NEXT_LEVEL = 20
const FINAL_LEVEL = 30

var time = []
var choices = []
var level = 1

var alternate = document.getElementsByClassName('alternate')[0]
var buttons = document.getElementsByClassName('buttons')[0]
var square = document.getElementsByClassName('square')[0]
var circle = document.getElementsByClassName('circle')[0]

var shape = [square, circle];

function click(){
    // getTime()
    console.log('choice')
    // choices.push(choice)
}

// function start(){
//     buttons.classList.remove('hidden')
//     alternate.innerHTML = random_shape()
    
//     getTime()

//     window.addEventListener('click', listener)
// }

// function finalizar(){
//     console.log(choices)
//     console.log(result(time))
//     window.removeEventListener('click', listener)

//     alternate.innerHTML = "FIM!"
//     lembrar.innerHTML = ''
//     buttons.classList.add('hidden')
// }


// var listener = function bts (e) {
//     getTime()
//     var codigo = e.code.slice(3)
//     var acertou = false

//     if (codigo == KEY_AUSENTE) { // Escolha do usuario
//         if (!lembrar.innerHTML.includes(alternar.innerHTML)) {
//             acertou = true
//         }
//     } else if(codigo == KEY_PRESENTE){
//         if (lembrar.innerHTML.includes(alternar.innerHTML)) {
//             acertou = true
//         }
//     }

//     if (acertou) { //Inserção no vetor de escolhas
//         escolhas.push(true)
//     }else{
//         escolhas.push(false)
//     }


//     if (escolhas.length%FIM == 0) {
//         finalizar()
//     }else if (escolhas.length%PROX_NIVEL == 0) {
//         level++
//         next_level()
//     }

//     alternate.innerHTML = random_shape()
// }

// function random_shape(){
//     return shape[Math.floor(Math.random() * 2)]
// }

// function getTime() {
//     var t = new Date()
//     time.push(t)
// }

// function next_(){
//     random_shape()
// }

// function resultado(a){
//     var dif = new Array
//     for (var i = 0; i < a.length-1; i++) {
//         dif.push(a[i+1]-a[i])
//     }
//     return dif
// }