var body = document.getElementsByTagName('body')[0]
var teste = document.getElementsByClassName('testes')[0]
var filhosBody = body.children
var vez = 1;

const gabarito = ['vermelho', 'azul', 'amarelo', 'verde']

var gab1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
var gab2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
var gab3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
var cores = ['vermelho', 'verde', 'azul', 'amarelo', 'verde', 'azul', 'vermelho', 'amarelo', 'azul', 'vermelho', 'verde', 'amarelo', 'verde', 'vermelho', 'verde', 'azul', 'amarelo', 'verde', 'azul', 'vermelho', 'amarelo', 'azul', 'vermelho', 'verde']

var textos = ['batata', 'quando', 'sobre', 'brocolis', 'quando', 'batata', 'sobre', 'brocolis', 'quando', 'batata', 'sobre', 'brocolis', 'sobre', 'batata', 'quando', 'quando', 'brocolis', 'batata', 'sobre', 'brocolis', 'quando', 'batata', 'sobre', 'quando']
var textos2 = ['vermelho', 'vermelho', 'vermelho', 'verde', 'amarelo', 'azul', 'vermelho', 'verde', 'amarelo', 'azul', 'vermelho', 'verde', 'amarelo', 'azul', 'vermelho', 'verde', 'amarelo', 'azul', 'vermelho', 'verde', 'amarelo', 'azul', 'vermelho', 'verde']
var tempos = [
  [Date.now()],
  [],
  []
]

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


var txt = document.createTextNode('teste')

var circulos = [];
var level = 0;
var trans = 0
var i = 0;
var transicionando = false;
var filhos = teste.children

//FUNCOES

getTime(resultadoFinal[`fase${level+1}`].tempo)
function alteraCorCirculos() {
  for (f of filhos) {
    circulos.push(f.children[0])
  }
  for (c of circulos) {
    c.classList.remove('bg-vermelho')
    c.classList.remove('bg-azul')
    c.classList.remove('bg-amarelo')
    c.classList.remove('bg-verde')
  }
}

function alteratextoCirculos(textos) {
  var p = document.createElement("p") // Create a <h1> element
  for (var j = 0; j < circulos.length; j++) {
    p.innerHTML = textos[j];
    circulos[j].appendChild(p.cloneNode(true))
  }
  for (var [k, c] of circulos.entries()) {
    c.classList.add(`txt-${cores[k]}`)
  }
}

function removetxt() {
  for (v of circulos) {
    v.removeChild(v.childNodes[0])
  }
}

function fase2() {
  filhosBody[1].classList.remove('hidden')
  alteraCorCirculos()
  alteratextoCirculos(textos)
}

function fase3() {
  filhosBody[1].classList.remove('hidden')
  removetxt()
  alteratextoCirculos(textos2)
}

function apagaTestes() {
  filhosBody[1].classList.add('hidden')
}

//transicao-----------------------
function trasition(txt) {
  apagaTestes()
  var div = document.createElement('div')
  var p = document.createElement('p')
  p.innerText = txt
  div.classList.add('transicao')
  div.appendChild(p)

  var childComandos = document.getElementsByClassName('comandos')[0]
  childComandos.classList.add('hidden')
  var testes = document.getElementsByClassName('testes')[0]
  testes.classList.add('hidden')

  body.appendChild(div)
}

function removeTransition() {
  level = level + 1
  i = 0
  transicionando = false
  tempos[level].push(Date.now())

  var transicao = document.getElementsByClassName('transicao')[0]
  transicao.remove()

  var childComandos = document.getElementsByClassName('comandos')[0]
  childComandos.classList.remove('hidden')

  var childTestes = document.getElementsByClassName('testes')[0]
  childTestes.classList.remove('hidden')

  prox_fase()
  getTime(resultadoFinal[`fase${level+1}`].tempo)
}

function prox_fase() {
  if (level == 1) {
    fase2()
  } else if (level == 2) {
    fase3()
  }
}

function finalizar() {
  document.removeEventListener('keyup', key)

  var div = document.createElement('div')
  var p = document.createElement('p')
  p.innerText = 'FIM DO TESTE'
  div.classList.add('transicao')
  div.appendChild(p)
  body.appendChild(div)

  teste.classList.add('hidden')
  var childComandos = document.getElementsByClassName('comandos')[0]
  childComandos.classList.add('hidden')
  
  console.log(resultadoFinal)
}

//--------TERMINA FUNCOES-------------

var key = function (e) {
  let escolha = gabarito[e.key - 1]
  if (transicionando) {
    removeTransition()
  } else {
    if (filhos[i].children[0].classList.contains(`bg-${escolha}`) || filhos[i].children[0].classList.contains(`txt-${escolha}`)) {
      getTime(resultadoFinal[`fase${level+1}`].tempo)
      i = i + 1
      if (i < 24) {
        filhos[i - 1].classList.remove('clique-errado')
        filhos[i - 1].classList.remove('ativo')
        filhos[i].classList.add('ativo')
      }
    } else {
      filhos[i].classList.remove('clique-errado')
      void filhos[i].offsetWidth
      filhos[i].classList.add('clique-errado')
    }


    if (i == 24 && level == 2) return finalizar()

    if (i == 24) {
      filhos[0].classList.add('ativo')
      filhos[23].classList.remove('ativo')
      filhos[23].classList.remove('clique-errado')
      transicionando = true
      trasition(`Indo para fase ${level+2}.\nAperte qualquer tecla.`)
    }
  }
}

document.addEventListener('keyup', key)

function getTime(local) {
  var t = new Date()
  local.push(t)
}

function resultado(a) {
  var dif = new Array
  for (var i = 0; i < a.length - 1; i++) {
      dif.push(a[i + 1] - a[i])
  }
  return dif
}