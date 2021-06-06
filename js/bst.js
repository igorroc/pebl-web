const PROX_NIVEL = 10
const FIM = 50
var url = new URL(window.location)
var lang = url.searchParams.get("lang") || "br"

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
	fase4: {
		tempo: [],
		escolhas: [],
	},
	fase5: {
		tempo: [],
		escolhas: [],
	},
}

var level = 1
var step = 0
var transicionando = false

var body = document.getElementsByTagName("body")[0]
var big = document.getElementsByClassName("changing")[0]

var shape = ["square", "circle"]
var aux = {
	circle: ["red", "line"],
	square: ["blue", "line"],
}

// ! Inicio do teste

traduzInformacao("bst", "pretest", "instruction", lang)
document.addEventListener("keydown", inicio)

function inicio() {
	informacao.children[0].innerHTML = ""
	traduzInformacao("bst", "pretest", "instruction_2", lang)

	document.removeEventListener("keydown", inicio)
	document.addEventListener("keydown", treinamento)
}

function treinamento() {
	informacao.children[0].innerHTML = ""
	informacao.classList.add("displaynone")
	document.removeEventListener("keydown", treinamento)
	getTime(resultadoFinal[`fase${level}`].tempo)
}

function jogo(choice) {
	if (transicionando) return
	getTime(resultadoFinal[`fase${level}`].tempo)
	step++
	if (choice == big.classList[2]) {
		resultadoFinal[`fase${level}`].escolhas.push("acertou")
	} else {
		resultadoFinal[`fase${level}`].escolhas.push("errou")
	}

	if (step % FIM == 0) {
		finalizar()
	} else if (step % PROX_NIVEL == 0) {
		transicionando = true
		transition()
	}

	removeOptions()
	removeClasses(big)
	let forma = random_shape()
	big.classList.add(forma)
	big.classList.add(random_aux(forma))
	set(() => {
		showOptions()
	}, 100)
}

function transition(txt) {
	informacao.children[0].innerHTML = ""
	traduzInformacao("bst", "test", `explain_level${level}`, lang)
	informacao.classList.remove("displaynone")

	window.addEventListener("keydown", removeTransition)
}

function removeTransition() {
	level++
	transicionando = false

	proximo_nivel()

	removeClasses(big)
	let forma = random_shape()
	big.classList.add(forma)
	big.classList.add(random_aux(forma))

	window.removeEventListener("keydown", removeTransition)

	informacao.children[0].innerHTML = ""
	informacao.classList.add("displaynone")

	getTime(resultadoFinal[`fase${level}`].tempo)
}

function finalizar() {
	document.removeEventListener("keydown", jogo)

	traduzInformacao("bst", "ending", undefined, lang)

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

function proximo_nivel() {
	aux = {}
	if (level == 1) {
		aux = {
			circle: ["red", "line"],
			square: ["blue", "line"],
		}
	} else if (level == 2) {
		aux = {
			circle: ["line"],
			square: ["line"],
		}
	} else if (level == 3) {
		aux = {
			circle: ["red"],
			square: ["blue"],
		}
	} else if (level == 4) {
		aux = {
			circle: ["blue"],
			square: ["red"],
		}
	} else if (level == 5) {
		aux = {
			circle: ["blue", "red", "line"],
			square: ["blue", "red", "line"],
		}
	}
}

// FUNCOES DE AJUDA
function removeOptions() {
	big.style.opacity = 0
	transicionando = true
}

function showOptions() {
	big.style.opacity = 1
	transicionando = false
}

function removeClasses(div) {
	div.classList.remove("red")
	div.classList.remove("blue")
	div.classList.remove("line")
	div.classList.remove("square")
	div.classList.remove("circle")
}

function random_shape() {
	return shape[Math.floor(Math.random() * shape.length)]
}

function random_aux(forma) {
	return aux[forma][Math.floor(Math.random() * aux[forma].length)]
}

// GRAFICOS
function showGraphs() {
	const labels = []
	const data = []
	const dataSet = []
	const backgroundColor = []
	const borderColor = []
	let i = 1

	for (const k of resultado(resultadoFinal.fase1.tempo)) {
		labels.push(`L${i++}`)
	}

	let colorVariation = 255 / (FIM / PROX_NIVEL)
	let colorChange = 0

	i = 0
	for (const item of Object.entries(resultadoFinal)) {
		let j = 0
		let fase = item[1]
		data.push([])
		backgroundColor.push([])
		borderColor.push([])
		for (const key of resultado(fase.tempo)) {
			j++
			data[i].push(key)
			backgroundColor[i].push(
				`rgba(${255 - colorChange}, ${50 + 4 * j}, ${200 - 4 * j}, 0.2)`
			)
			borderColor[i].push(
				`rgb(${255 - colorChange}, ${50 + 4 * j}, ${200 - 4 * j})`
			)
			// console.log(`🚀 | ${colorChange} | ${j} | ${borderColor[i]}`)
		}
		colorChange += colorVariation
		// console.log("🚀 | file: bst.js | line 133 | showGraphs | data", data)
		dataSet.push({
			label: item[0],
			data: data[i],
			backgroundColor: backgroundColor[i],
			borderColor: borderColor[i],
			borderWidth: 1,
		})
		i++
	}

	const dataBarra = {
		labels: labels,
		datasets: dataSet,
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
