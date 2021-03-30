var body=document.getElementsByTagName('body')[0]
var teste=document.getElementsByClassName('testes')[0]
var filhosBody=body.children
var vez=1;
var gab1=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
var gab2=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
var gab3=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
var cores=['red','green','blue','yellow','green','blue','red','yellow','blue','red','green','yellow','green','red','green','blue','yellow','green','blue','red','yellow','blue','red','green']

var textos=['batata','quando','sobre','brocolis','quando','batata','sobre','brocolis','quando','batata','sobre','brocolis','sobre','batata','quando','quando','brocolis','batata','sobre','brocolis','quando','batata','sobre','quando']
var textos2=['vermelho','vermelho','vermelho','verde','amarelo','azul','vermelho','verde','amarelo','azul','vermelho','verde','amarelo','azul','vermelho','verde','amarelo','azul','vermelho','verde','amarelo','azul','vermelho','verde']
var tempos=[[Date.now()],[],[]]

var txt=document.createTextNode('teste')

var circulos=[];
var fase=0;
var trans=0
var i=0;
var transicionando = false;
var filhos=teste.children

//FUNCOES
function pegaTempo(tempos){
  for (var j = 0; j < 24; j++) {
   console.log(tempos[j+1]-tempos[j]);
    }
}

function alteraCorCirculos(){
 for (f of filhos){
      circulos.push(f.children[0])
 }
 for (c of circulos){
   c.style.backgroundColor='gray'
 }
}
function alteratextoCirculos(textos){
  var p = document.createElement("p")                // Create a <h1> element
  for (var j = 0; j<circulos.length ; j++){
  p.innerHTML = textos[j];
  circulos[j].appendChild(p.cloneNode(true))
  }
  for (var [k,c ] of circulos.entries()){
    c.style.color=cores[k]
  }
}
function removetxt(){
  for ( v of circulos){
    v.removeChild(v.childNodes[0])
  }
}
function fase2(){
  filhosBody[1].classList.remove('hidden')
  alteraCorCirculos()
  alteratextoCirculos(textos)
}
function fase3(){
  filhosBody[1].classList.remove('hidden')
  removetxt()
  alteratextoCirculos(textos2)
}
function apagaTestes(){
  filhosBody[1].classList.add('hidden')
  console.log('fomos executados')
}

//transicao-----------------------
function trasition(txt){
  apagaTestes()
  var div =  document.createElement('div')
  var p = document.createElement('p')
  p.innerText = txt
  div.classList.add('transicao')
  div.appendChild(p)

  var childComandos = document.getElementsByClassName('comandos')[0]
  childComandos.classList.add('hidden')

  body.appendChild(div)
}

function removeTransition (){
  fase=fase+1
  i=0
  transicionando=false
  tempos[fase].push(Date.now())

  var transicao = document.getElementsByClassName('transicao')[0]
  transicao.remove()
  
  var childComandos = document.getElementsByClassName('comandos')[0]
  childComandos.classList.remove('hidden')

  var childTestes = document.getElementsByClassName('testes')[0]
  childTestes.classList.remove('hidden')
  
  prox_fase()
}

function prox_fase(){
  if(fase == 1){
    fase2()
  }else if(fase == 2){
    fase3()
  }
}

function finalizar(){
  document.removeEventListener('keyup', key)

  var div =  document.createElement('div')
  var p = document.createElement('p')
  p.innerText = 'FIM DO TESTE'
  div.classList.add('transicao')
  div.appendChild(p)
  body.appendChild(div)
  
  teste.classList.add('hidden')
  var childComandos = document.getElementsByClassName('comandos')[0]
  childComandos.classList.add('hidden')
  pegaTempo(tempos[fase])  
}

//--------TERMINA FUNCOES-------------

var key=function(e){
  if (transicionando) {
    removeTransition()
    console.log('remove transicao')
  }else{
      if (e.key==gab1[i]){
          tempos[fase].push(Date.now())
          i=i+1
          if (i < 24){
            filhos[i-1].style.border = "none"
            filhos[i].style.border = "thick solid #000000"
          }
      }
      else{
        console.log('errou')
      }


      if (i==24 && fase == 2){
        finalizar()
      }else if(i==24){
        console.log('paratudo')
        //pegaTempo(tempos)
        filhos[0].style.border = "thick solid #000000"
        filhos[23].style.border = "none"
        transicionando=true
        trasition(`Indo para fase ${fase+2}.`)
      }
    } 
}

document.addEventListener('keyup',key)