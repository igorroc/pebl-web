var url = new URL(window.location)
var lang = url.searchParams.get("lang") || "br"
var body = document.getElementsByTagName("body")[0]
var teste = document.getElementsByClassName("teste_stroop")[0]
var filhosBody = body.children

const colors = ["red", "blue", "yellow", "green"]

const gabarito =
	lang == "br"
		? ["vermelho", "azul", "amarelo", "verde"]
		: ["red", "blue", "yellow", "green"]

const palavras = ["batata", "quando", "sobre", "brocolis"]

var coresFase = []
coresFase[1] = randomColors()//coresFase1
coresFase[2] = randomColors()//coresFase2
coresFase[3] = randomColors()//coresFase3
//var coresFase1 = randomColors()
//var coresFase2 = randomColors()
//var coresFase3 = randomColors()
var textosFase = []
var aux = []
for (let j = 0; j < 24; j++) {
	aux.push("0")
}
textosFase[1] = aux;
textosFase[2] = randomWords()
textosFase[3] = randomColorNames()
//var textosFase2 = randomWords()
//var textosFase3 = randomColorNames()

// let testeblabla = []
// let blabla
// traducaoTeste(testeblabla)

var resultadoFinal = {
	fase1: {
		timeclick: [],
		timepast: [],
		round: 0,
		block: 0,
		trial: [],
		word: [],
		color: [],
		part: "d",
		xpos: [],
		ypos: [],
		resp: [],
		rname: [],
		correct: [],
		intrusion: [],
		numresponses: [],
		time0: [],
		timea: [],
		timeend: [],
		trialtime: [],
		responsetime: []
	},
	fase2: {
		timeclick: [],
		timepast: [],
		round: 0,
		block: 0,
		trial: [],
		word: [],
		color: [],
		part: "w",
		xpos: [],
		ypos: [],
		resp: [],
		rname: [],
		correct: [],
		intrusion: [],
		numresponses: [],
		time0: [],
		timea: [],
		timeend: [],
		trialtime: [],
		responsetime: []
	},
	fase3: {
		timeclick: [],
		timepast: [],
		round: 0,
		block: 0,
		trial: [],
		word: [],
		color: [],
		part: "c",
		xpos: [],
		ypos: [],
		resp: [],
		rname: [],
		correct: [],
		intrusion: [],
		numresponses: [],
		time0: [],
		timea: [],
		timeend: [],
		trialtime: [],
		responsetime: []
	},
}

var circulos = []
var level = 0
var i = 0
var transicionando = false
var filhos = teste.children
var informacao = document.getElementById("informacao")

// ! INICIO DO TESTE
if (window.innerHeight <= 630) {
	alert("A tela do seu computador é muito pequena para realizar o teste")
}

for (var j = 0; j < 24; j++) {
	filhos[j].children[0].classList.add(`bg-${coresFase[1][j]}`)
}
traduzInformacao("stroop", "pre_test", "instruction", lang)
document.addEventListener("keydown", inicio)
// ! FIM DO INICIO DO TESTE

function inicio() {
	traduzInformacao("stroop", "pre_test", "training", lang)
	let div = document.createElement("div")
	div.classList.add("feedback")
	informacao.appendChild(div)

	let comandos = document.getElementsByClassName("comandos")[0]
	comandos.style.zIndex = 1000
	comandos.style.position = "absolute"
	comandos.style.left = "50%"
	comandos.style.transform = "translateX(-50%)"
	getTime(resultadoFinal.fase1.timepast)
	document.removeEventListener("keydown", inicio)
	document.addEventListener("keydown", treinamento)
}

function treinamento(e) {
	let escolha = colors[e.key - 1]
	let feedback = document.getElementsByClassName("feedback")[0]
	if (escolha) {
		feedback.classList.add(`bg-${escolha}`)
	}
	for (var classe of feedback.classList) {
		if (classe != "feedback" && classe != `bg-${escolha}`) {
			feedback.classList.remove(classe)
		}
	}

	if (e.key == " ") {
		informacao.querySelector(".feedback").remove()
		let comandos = document.getElementsByClassName("comandos")[0]
		comandos.style = ""
		informacao.classList.add("displaynone")
		level = 1
		getTime(resultadoFinal[`fase${level}`].timeclick)
		resultadoFinal[`fase${level}`].round = 1
		resultadoFinal[`fase${level}`].block = level
		document.removeEventListener("keydown", treinamento)
		document.addEventListener("keydown", jogo)
	}
}

//FUNCOES
function alteraCorCirculos() {
	for (f of filhos) {
		circulos.push(f.children[0])
	}
	for (c of circulos) {
		c.classList.remove("bg-red")
		c.classList.remove("bg-blue")
		c.classList.remove("bg-yellow")
		c.classList.remove("bg-green")
	}
}

function alteratextoCirculos(textos, fase) {
	var p = document.createElement("p")
	for (var j = 0; j < circulos.length; j++) {
		p.innerHTML = textos[j]
		circulos[j].appendChild(p.cloneNode(true))
	}
	for (var [k, c] of circulos.entries()) {
		c.classList.add(`cl-${coresFase[fase][k]}`)
	}
}

function removetxt() {
	for (v of circulos) {
		v.removeChild(v.childNodes[0])
	}
}

function fase2() {
	alteraCorCirculos()
	alteratextoCirculos(textosFase[2],2)
}

function fase3() {
	removetxt()
	alteratextoCirculos(textosFase[3],3)
}

function calctimes() {
	let len = 0
	let sumtimea = 0
	let sumtimeend = 0
	for (let i = 1; i < 4; i++) {
		resultadoFinal[`fase${i}`].timea = timesumdif(resultadoFinal[`fase${i}`].timeclick, sumtimea)
		resultadoFinal[`fase${i}`].timeend = timesumdif(resultadoFinal[`fase${i}`].timepast, sumtimeend)

		sumtimea = resultadoFinal[`fase${i}`].timea[resultadoFinal[`fase${i}`].timea.length - 1]
		sumtimeend = resultadoFinal[`fase${i}`].timeend[resultadoFinal[`fase${i}`].timeend.length - 1]

		len = resultadoFinal[`fase${i}`].timea.length
		for (let j = 0; j < len - 1; j++) {
			//resultadoFinal[`fase${i}`].time0[j] = 0
			if (j==0 || resultadoFinal[`fase${i}`].correct[j-1] == 1){
				//resultadoFinal[`fase${i}`].time0.push(resultadoFinal[`fase${i}`].timea[j])
				resultadoFinal[`fase${i}`].time0[j] = resultadoFinal[`fase${i}`].timea[j]
			} else {
				//resultadoFinal[`fase${i}`].time0.push(resultadoFinal[`fase${i}`].time0[j-1])
				resultadoFinal[`fase${i}`].time0[j] = resultadoFinal[`fase${i}`].time0[j-1]
			}
			//console.log("i: "+i,"j: "+j,"time0: " + resultadoFinal[`fase${i}`].time0[j])
			//console.log("i: "+i,"j: "+j,"timea: " + resultadoFinal[`fase${i}`].timea[j])
			//console.log("i: "+i,"j: "+j,"timeend: " + resultadoFinal[`fase${i}`].timeend[j])
			resultadoFinal[`fase${i}`].trialtime[j] = resultadoFinal[`fase${i}`].timeend[j] - resultadoFinal[`fase${i}`].time0[j]
			resultadoFinal[`fase${i}`].responsetime[j] = resultadoFinal[`fase${i}`].timeend[j] - resultadoFinal[`fase${i}`].timea[j]
			//resultadoFinal[`fase${i}`].trialtime.push(resultadoFinal[`fase${i}`].timend[j] - resultadoFinal[`fase${i}`].time0[j])
			//resultadoFinal[`fase${i}`].responsetime.push(resultadoFinal[`fase${i}`].timend[j] - resultadoFinal[`fase${i}`].timea[j])
		}
		delete resultadoFinal[`fase${i}`].timeclick
		delete resultadoFinal[`fase${i}`].timepast
	}
}
//transicao-----------------------
function transition() {
	traduzInformacao("stroop", "test", `explain_level${level + 1}`, lang)
	informacao.classList.remove("displaynone")
}

function removeTransition() {
	level++
	i = 0
	transicionando = false

	informacao.classList.add("displaynone")

	prox_fase()
	document.removeEventListener("keydown", inicio)
	getTime(resultadoFinal[`fase${level}`].timeclick)
	getTime(resultadoFinal[`fase${level}`].timepast)
	resultadoFinal[`fase${level}`].round = 1
	resultadoFinal[`fase${level}`].block = level
}

function prox_fase() {
	if (level == 2) {
		fase2()
	} else if (level == 3) {
		fase3()
	}
}

async function finalizar() {
	document.removeEventListener("keydown", jogo)

	traduzInformacao("stroop", "ending", undefined, lang)

	await sleep(300)
	getUserInfo()

	// var graph_container = document.createElement("div")
	// graph_container.classList.add("graph-container")
	// var canvas = document.createElement("canvas")
	// canvas.id = "graficoBarra"
	// canvas.classList.add("content")

	// graph_container.appendChild(canvas)
	// informacao.appendChild(graph_container)
	informacao.classList.remove("displaynone")
	calctimes()

	await pushResponse("stroop")
	// showGraphs()
}

function showGraphs() {
	const labels = []
	const data = [[], [], []]
	const backgroundColor = [[], [], []]
	const borderColor = [[], [], []]
	var i = 1

	for (const key of resultado(resultadoFinal.fase1.tempoclick)) {
		labels.push(`L${i++}`)
		data[0].push(key)
		backgroundColor[0].push(`rgba(255, ${50 + 4 * i}, ${200 - 4 * i}, 0.2)`)
		borderColor[0].push(`rgb(255, ${50 + 4 * i}, ${200 - 4 * i})`)
	}
	i = 0
	for (const key of resultado(resultadoFinal.fase2.tempoclick)) {
		i++
		data[1].push(key)
		backgroundColor[1].push(`rgba(150, ${50 + 4 * i}, ${200 - 4 * i}, 0.2)`)
		borderColor[1].push(`rgb(150, ${50 + 4 * i}, ${200 - 4 * i})`)
	}
	i = 0
	for (const key of resultado(resultadoFinal.fase3.tempoclick)) {
		i++
		data[2].push(key)
		backgroundColor[2].push(`rgba(75, ${50 + 4 * i}, ${200 - 4 * i}, 0.2)`)
		borderColor[2].push(`rgb(75, ${50 + 4 * i}, ${200 - 4 * i})`)
	}

	const dataBarra = {
		labels: labels,
		datasets: [
			{
				label: "Fase 1",
				data: data[0],
				backgroundColor: backgroundColor[0],
				borderColor: borderColor[0],
				borderWidth: 1,
			},
			{
				label: "Fase 2",
				data: data[1],
				backgroundColor: backgroundColor[1],
				borderColor: borderColor[1],
				borderWidth: 1,
			},
			{
				label: "Fase 3",
				data: data[2],
				backgroundColor: backgroundColor[2],
				borderColor: borderColor[2],
				borderWidth: 1,
			},
		],
	}
	const configBarra = {
		type: "bar",
		data: dataBarra,
		options: {
			scales: {
				y: {
					beginAtZero: true,
					suggestedMin: 50,
					suggestedMax: 400,
				},
			},
		},
	}

	var graficoBarra = new Chart(
		document.getElementById("graficoBarra"),
		configBarra
	)
}

function randomColors() {
	let regra = [true, true, true, true]
	let array = []
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 4; j++) {
			let random = Math.floor(Math.random() * 4)
			while (!regra[random]) {
				random = Math.floor(Math.random() * 4)
			}
			regra[random] = false
			array.push(colors[random])
		}
		regra[0] = regra[1] = regra[2] = regra[3] = true
	}
	return array
}

function randomWords() {
	let regra = [true, true, true, true]
	let array = []
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 4; j++) {
			let random = Math.floor(Math.random() * 4)
			while (!regra[random]) {
				random = Math.floor(Math.random() * 4)
			}
			regra[random] = false
			array.push(palavras[random])
		}
		regra[0] = regra[1] = regra[2] = regra[3] = true
	}
	return array
}

function randomColorNames() {
	let regra = [true, true, true, true]
	let array = []
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 4; j++) {
			let random = Math.floor(Math.random() * 4)
			while (!regra[random]) {
				random = Math.floor(Math.random() * 4)
			}
			regra[random] = false
			array.push(gabarito[random])
		}
		regra[0] = regra[1] = regra[2] = regra[3] = true
	}
	return array
}
//--------TERMINA FUNCOES-------------

var jogo = function (e) {
	let escolha = colors[e.key - 1]
	
	if (transicionando) {
		removeTransition()
	} else {
		
		resultadoFinal[`fase${level}`].trial.push(i+1)
		resultadoFinal[`fase${level}`].word.push(textosFase[level][i])
		resultadoFinal[`fase${level}`].color.push(coresFase[level][i])

		let pos = filhos[i].getBoundingClientRect()
		//console.log(pos)
		resultadoFinal[`fase${level}`].xpos.push(pos.x + (pos.width/2))
		resultadoFinal[`fase${level}`].ypos.push(pos.y + (pos.height/2))

		resultadoFinal[`fase${level}`].resp.push(e.key)
		resultadoFinal[`fase${level}`].rname.push(escolha)
		
		resultadoFinal[`fase${level}`].numresponses.push(resultadoFinal[`fase${level}`].numresponses.length + 1)

		getTime(resultadoFinal[`fase${level}`].timeclick)//timea
		getTime(resultadoFinal[`fase${level}`].timepast)//timeend

		if (
			filhos[i].children[0].classList.contains(`bg-${escolha}`) ||
			filhos[i].children[0].classList.contains(`cl-${escolha}`)
		) {
			resultadoFinal[`fase${level}`].correct.push(1)//acertou
			resultadoFinal[`fase${level}`].intrusion.push(0)
			i = i + 1
			if (i < 24) {
				filhos[i - 1].classList.remove("clique-errado")
				filhos[i - 1].classList.remove("ativo")
				filhos[i].classList.add("ativo")
			}
		} else {
			resultadoFinal[`fase${level}`].correct.push(0)//errou
			
			resultadoFinal[`fase${level}`].intrusion.push(e.key - 1 == gabarito.indexOf(textosFase[level][i]) ? 1 : 0)

			filhos[i].classList.remove("clique-errado")
			void filhos[i].offsetWidth
			filhos[i].classList.add("clique-errado")
		}

		if (i == 24 && level == 3) return finalizar()

		if (i == 24) {
			filhos[0].classList.add("ativo")
			filhos[23].classList.remove("ativo")
			filhos[23].classList.remove("clique-errado")
			transicionando = true
			transition()
		}
	}
}
