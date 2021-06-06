var url = new URL(window.location)
var lang = url.searchParams.get("lang") || "br"
const PROX_NIVEL = 10
const FIM = 30
const KEY_AUSENTE = "A"
const KEY_PRESENTE = "L"
const FRASE_FINAL =
	"Parabéns! Você concluiu o teste.\nAgora você pode retornar ao menu principal clicando em home."

var level = 1
var step = 0
var transicionando = false

var body = document.getElementsByTagName("body")[0]
var teste = document.getElementsByClassName("teste")[0]
var alternar = document.getElementsByClassName("alternar")[0]
var lembrar = document.getElementsByClassName("lembrar")[0]
var botoes = document.getElementsByClassName("botoes")[0]
var informacao = document.getElementById("informacao")

var resultadoFinal = {
	fase1: {
		tempo: [],
		escolhas: [],
	},
	fase2: {
		tempo: [],
		escolhas: [],
	},
	fase3: {
		tempo: [],
		escolhas: [],
	},
}

// INICIO DINAMICO
lembrar.innerHTML = letra_aleatoria() + letra_aleatoria()
traduzInformacao("sternberg", "pretest", "instruction", lang)
document.addEventListener("keydown", inicio)

function inicio() {
	informacao.classList.add("displaynone")

	document.removeEventListener("keydown", inicio)
	document.addEventListener("keydown", comecarComTimer)
}

async function comecarComTimer() {
	document.removeEventListener("keydown", comecarComTimer)
	informacao.classList.add("displaynone")

	await timer(4)

	alternar.innerHTML = letra_aleatoria()

	lembrar.classList.add("hidden")
	alternar.classList.remove("info")

	getTime(resultadoFinal[`fase${level}`].tempo)

	window.addEventListener("keypress", jogo)
}


function finalizar() {
	document.removeEventListener("keydown", jogo)

	traduzInformacao("sternberg", "ending", undefined, lang)

	var graph_container = document.createElement("div")
	graph_container.classList.add("graph-container")
	var canvas = document.createElement("canvas")
	canvas.id = "graficoBarra"
	canvas.classList.add("content")

	graph_container.appendChild(canvas)
	informacao.appendChild(graph_container)
	informacao.classList.remove("displaynone")

	showGraphs()
}

function showGraphs() {
	const labels = []
	const data = [[], [], []]
	const backgroundColor = [[], [], []]
	const borderColor = [[], [], []]
	var i = 1

	for (const key of resultado(resultadoFinal.fase1.tempo)) {
		labels.push(`L${i++}`)
		data[0].push(key)
		backgroundColor[0].push(`rgba(255, ${50 + 4 * i}, ${200 - 4 * i}, 0.2)`)
		borderColor[0].push(`rgb(255, ${50 + 4 * i}, ${200 - 4 * i})`)
	}
	i = 0
	for (const key of resultado(resultadoFinal.fase2.tempo)) {
		i++
		data[1].push(key)
		backgroundColor[1].push(`rgba(150, ${50 + 4 * i}, ${200 - 4 * i}, 0.2)`)
		borderColor[1].push(`rgb(150, ${50 + 4 * i}, ${200 - 4 * i})`)
	}
	i = 0
	for (const key of resultado(resultadoFinal.fase3.tempo)) {
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

function transition() {
	lembrar.classList.remove("hidden")
	traduzInformacao("sternberg", "test", `explain_level${level + 1}`, lang)
	informacao.classList.remove("displaynone")
}

function removeTransition() {
	level++
	i = 0
	transicionando = false

	informacao.classList.add("displaynone")

	proximo_nivel()
	document.removeEventListener("keydown", inicio)
	
	
	window.removeEventListener("keypress", jogo)
	comecarComTimer()
}

var jogo = function sternberg(e) {
	if (transicionando) {
		removeTransition()
	} else {
		var codigo = e.code.slice(3)
		if(codigo != KEY_AUSENTE && codigo != KEY_PRESENTE){
			return
		}
		getTime(resultadoFinal[`fase${level}`].tempo)
		step++
		var acertou = false

		if (codigo == KEY_AUSENTE) {
			// Escolha do usuario
			if (!lembrar.innerHTML.includes(alternar.innerHTML)) {
				acertou = true
			}
		} else if (codigo == KEY_PRESENTE) {
			if (lembrar.innerHTML.includes(alternar.innerHTML)) {
				acertou = true
			}
		}

		if (acertou) {
			//Inserção no vetor de escolhas
			resultadoFinal[`fase${level}`].escolhas.push("acertou")
			lembrar.classList.add("hidden")
		} else {
			resultadoFinal[`fase${level}`].escolhas.push("errou")
			lembrar.classList.remove("hidden")
		}

		if (step % FIM == 0) {
			finalizar()
		} else if (step % PROX_NIVEL == 0) {
			transicionando = true
			transition()
		}

		alternar.innerHTML = letra_aleatoria()
	}
}

function proximo_nivel() {
	var frase = ""
	for (let i = 0; i < level; i++) {
		frase = frase + letra_aleatoria() + letra_aleatoria()
	}
	lembrar.innerHTML = frase
}

async function timer(tempo) {
	for (let i = tempo; i > 0; i--) {
		alternar.innerHTML = i
		await sleep(1000)
	}
}
