var nomes=['Amarelo','Azul','Verde']
var cores=['#fffc00', '#0000ff', '#00ff00']
var tempo=[]
var escolhas=[]

function pegaTempo(){
  var d = new Date()
  tempo.push(d)
}

var elemento_pai = document.getElementsByClassName('texto')[0];
var comeco = document.getElementsByClassName('start')[0];
var i = 0;

function comecar(){
    comeco.textContent = nomes[i]
    comeco.style.color = cores[i]
    document.body.style.background = "#f3f3f3 url('')"
    

    pegaTempo()

    elemento_pai.removeAttribute("onclick");
}

function clickErrado(){
    console.log("errado")
    pegaTempo()
    escolhas.push("0")
    if (i+1 >= nomes.length){
        finalizar()
    }else{
        comeco.textContent = nomes[++i]
        comeco.style.color = cores[i]
    }
}

function clickCerto(){
    console.log("certo")
    pegaTempo()
    escolhas.push("1")
    if (i+1 >= nomes.length){
        finalizar()
    }else{
        comeco.textContent = nomes[++i]
        comeco.style.color = cores[i]
    }
}

function finalizar(){
    var testes = document.getElementsByClassName('testes')[0]
    var botoes = document.getElementsByClassName('botoes')[0]
    testes.removeChild(botoes)
    comeco.textContent = `Escolhas: ${escolhas.toString()}\nReação: ${resultado(tempo)}`
}

function resultado(a){
    var dif = new Array
    for (var i = 0; i < a.length-1; i++) {
        dif.push(a[i+1]-a[i])
    }
    return dif
}