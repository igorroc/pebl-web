const PROX_NIVEL = 10
const FIM = 50
var url = new URL(window.location)
var lang = url.searchParams.get("lang") || "br"

var resultadoFinal = {
	fase1: {
		type: "practice",
		block: 0,
		tempo: [],
		corr: [],
		trial: [],
		stim: [],
		resp: [],
		congruency: [],
		rt: [],
		tooslow: [],
	},
	fase2: {
		type: "neutral",
		block: 1,
		tempo: [],
		corr: [],
		trial: [],
		stim: [],
		resp: [],
		congruency: [],
		rt: [],
		tooslow: [],
	},
	fase3: {
		type: "congruent",
		block: 2,
		tempo: [],
		corr: [],
		trial: [],
		stim: [],
		resp: [],
		congruency: [],
		rt: [],
		tooslow: [],
	},
	fase4: {
		type: "incongruent",
		block: 3,
		tempo: [],
		corr: [],
		trial: [],
		stim: [],
		resp: [],
		congruency: [],
		rt: [],
		tooslow: [],
	},
	fase5: {
		type: "mixed",
		block: 4,
		tempo: [],
		corr: [],
		trial: [],
		stim: [],
		resp: [],
		congruency: [],
		rt: [],
		tooslow: [],
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

// ! INICIO DO TESTE
traduzInformacao("bst", "pre_test", "instruction", lang)
document.addEventListener("keydown", inicio)

// ! FIM DO INICIO DO TESTE

function inicio() {
	traduzInformacao("bst", "pre_test", "instruction_2", lang)

	document.removeEventListener("keydown", inicio)
	document.addEventListener("keydown", treinamento)
}

function treinamento() {
	informacao.classList.add("displaynone")
	document.removeEventListener("keydown", treinamento)
	getTime(resultadoFinal[`fase${level}`].tempo)
}

function jogo(choice) {
	if (transicionando) return
	getTime(resultadoFinal[`fase${level}`].tempo)
	step++

	if (choice == shape[1]){
		resultadoFinal[`fase${level}`].resp.push(`lshift`)//circle
	} else {
		resultadoFinal[`fase${level}`].resp.push(`rshift`)//square
	}

	let trial
	step % PROX_NIVEL == 0 ? trial = PROX_NIVEL : trial = step % PROX_NIVEL
	resultadoFinal[`fase${level}`].trial.push(trial)

	let stim = mapstim(big.classList[2],big.classList[3])
	resultadoFinal[`fase${level}`].stim.push(stim)
	resultadoFinal[`fase${level}`].congruency.push(mapcongruency(stim))
	
	let lengthTime = resultadoFinal[`fase${level}`].tempo.length
	let diffTime = resultadoFinal[`fase${level}`].tempo[lengthTime-1].getTime()-resultadoFinal[`fase${level}`].tempo[lengthTime-2].getTime()
	resultadoFinal[`fase${level}`].rt.push(diffTime)

	let tooslow
	diffTime > 3000 ? tooslow = 1 : tooslow = 0
	resultadoFinal[`fase${level}`].tooslow.push(tooslow)

	if (choice == big.classList[2]) {
		resultadoFinal[`fase${level}`].corr.push(1)
		// Caso a escolha esteja correta, insere 1
	} else {
		resultadoFinal[`fase${level}`].corr.push(0)
		// Caso a escolha esteja errada, insere 0
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
	setInterval(() => {
		showOptions()
	}, 100)
}

function transition(txt) {
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

	// verifyWhatShape(big)

	window.removeEventListener("keydown", removeTransition)

	informacao.classList.add("displaynone")

	getTime(resultadoFinal[`fase${level}`].tempo)
}

async function finalizar() {
	document.removeEventListener("keydown", jogo)

	traduzInformacao("bst", "ending", undefined, lang)

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

	for (let i = 1; i < 6; i++) {
		delete resultadoFinal[`fase${i}`].tempo
	}
	
	pushResponse("bst")
	// showGraphs()
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
	let chosen_shape = shape[Math.floor(Math.random() * shape.length)]
	console.log(chosen_shape)
	return chosen_shape
}

function random_aux(forma) {
	let chosen_color = aux[forma][Math.floor(Math.random() * aux[forma].length)]
	console.log(chosen_color)
	return chosen_color
}

function mapstim(form,color) {
	let stim

	switch (color){
		case "red":
			form == "circle" ? stim = 1 : stim = 2
			break;
		case "blue":
			form == "square" ? stim = 3 : stim = 4
			break;
		case "line":
			form == "circle" ? stim = 5 : stim = 6
			break;
	}

	return stim
}

function mapcongruency(stim) {
	let congruency

	switch (stim){
		case 1:
		case 3:
			congruency = 1
			break;
		case 2:
		case 4:
			congruency = -1
			break;
		case 5:
		case 6:
			congruency = 0
			break;
	}

	return congruency
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
		}
		colorChange += colorVariation
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
