const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var tempo = []
var escolhas = []
var nivel = 1

var alternar = document.getElementsByClassName('alternar')[0]
var lembrar = document.getElementsByClassName('lembrar')[0]

var aleatorio = alfabeto[Math.floor(Math.random() * alfabeto.length)]
alternar.innerHTML = aleatorio

function pegaTempo() {
    var d = new Date()
    tempo.push(d)
}

window.addEventListener('keypress', function (e) {
    var codigo = e.code.slice(3)
    if (codigo == 'A') {
        if (lembrar.innerHTML.search(codigo) != -1) {
            
        }
    } else if(codigo == 'L'){
        
    }else{

    }
});
