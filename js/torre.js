let url = new URL(window.location)
let lang = url.searchParams.get("lang") || "br"

let faseAtual = 0
let totalIteracoes = 0
let iteracoesFase = 0
let scoreTotal = 0
let sumAbsTime = 0

let startTime = new Date()
let endTime = new Date()

// 1 = red
// 2 = green
// 3 = blue

let fases = [
	// REFERENCIAS SUPERIORES
	{ first: [], second: ["color3", "color2"], third: ["color1"], clicks: 2, disks: 3 },
	{ first: ["color2"], second: ["color1"], third: ["color3"], clicks: 2, disks: 3 },
	{ first: ["color2", "color3"], second: ["color1"], third: [], clicks: 3, disks: 3 },
	{ first: ["color2"], second: ["color1", "color3"], third: [], clicks: 3, disks: 3 },
	{ first: ["color1", "color2"], second: ["color3"], third: [], clicks: 4, disks: 3 },
	{ first: ["color3"], second: ["color1", "color2"], third: [], clicks: 4, disks: 3 },
	{ first: ["color1", "color3"], second: [], third: ["color2"], clicks: 4, disks: 3 },
	{ first: [], second: ["color1", "color3"], third: ["color2"], clicks: 4, disks: 3 },
	{ first: ["color1", "color2", "color3"], second: [], third: [], clicks: 5, disks: 3 },
	{ first: ["color1", "color3", "color2"], second: [], third: [], clicks: 5, disks: 3 },
	{ first: ["color3", "color2"], second: ["color1"], third: [], clicks: 5, disks: 3 },
	{ first: ["color3"], second: ["color1"], third: ["color2"], clicks: 5, disks: 3 },
]

let slots = [
	document.getElementById("slot1"),
	document.getElementById("slot2"),
	document.getElementById("slot3"),
]

let resultadoFinal = [
	// [ // fase 0
	// 	{ // trial 0
	// 		"current": ["21", "3", ""],
	// 		"end": ["", "32", "1"],
	// 		"score": 0,
	// 		"absTime": 1231312,
	// 		"trialTime": 0,
	// 		"clickTime": 0,
	// 		"done": 0
	// 	},
	// ],
]

let mao = document.getElementById("mao")
let copiar = document.querySelector("#copiar")
let inventario = document.querySelector("#inventario")

let cliques = document.querySelector("#wrapperCliques")

for (const slot of slots) {
	slot.addEventListener("click", async () => {
		if (mao.children.length > 0) {
			insereDisco(slot)
		} else {
			let elementoPego = slot.children[slot.children.length - 1]
			if (elementoPego) {
				limpaMao(elementoPego)
			}
		}
	})
}

traduzInformacao("torre", "pre_test", "instruction", lang)
window.addEventListener("click", inicio)

function inicio() {
	informacao.classList.add("displaynone")

	window.removeEventListener("click", inicio)

	if(!resultadoFinal[faseAtual]) {
		resultadoFinal.push([])
	}
	let current = [[], [], []]
	for(let i = 0; i < 3; i++){
		inventario.querySelectorAll(`#slot${i+1} .disco`).forEach((el) => current[i].push(el.classList.value.split(" ")[1]) )
	}
	startTime = new Date()
	sumAbsTime = startTime - endTime
	resultadoFinal[faseAtual].push({
		"current": current,
		"end": [fases[faseAtual].first, fases[faseAtual].second, fases[faseAtual].third],
		"score": 0,
		"abstime": sumAbsTime,
		"clicktime": 0,
		"done": false
	})
}

function proximaFase() {
	
	if (faseAtual >= fases.length) {
		finalizarTeste()
		return
	}

	informacao.classList.add("displaynone")
	resetCliques()
	alteraReferencia(
		fases[faseAtual].first,
		fases[faseAtual].second,
		fases[faseAtual].third
	)
	resetInventario()

	window.removeEventListener("mousedown", proximaFase)

	if(!resultadoFinal[faseAtual]) {
		resultadoFinal.push([])
	}
	let current = [[], [], []]
	for(let i = 0; i < 3; i++){
		inventario.querySelectorAll(`#slot${i+1} .disco`).forEach((el) => current[i].push(el.classList.value.split(" ")[1]) )
	}
	startTime = new Date()
	sumAbsTime += startTime - endTime
	resultadoFinal[faseAtual].push({
		"current": current,
		"end": [fases[faseAtual].first, fases[faseAtual].second, fases[faseAtual].third],
		"score": scoreTotal,
		"abstime": sumAbsTime,
		"clicktime": 0,
		"done": false
	})
}

// FUNCTIONS
function insereDisco(slot) {
	totalIteracoes++
	if (slot.classList.contains(`max-height-${slot.children.length}`)) {
		console.log("proibido")
		return
	}

	colocaPosicao(mao.children[0], slot)
	slot.append(mao.children[0])

	let userWin = checkWin()
	
	console.log("nova trial", faseAtual)
	if(!resultadoFinal[faseAtual]) {
		resultadoFinal.push([])
	}
	let current = [[], [], []]
	for(let i = 0; i < 3; i++){
		inventario.querySelectorAll(`#slot${i+1} .disco`).forEach((el) => current[i].push(el.classList.value.split(" ")[1]) )
	}
	endTime = new Date()
	sumAbsTime += endTime - startTime
	resultadoFinal[faseAtual].push({
		"current": current,
		"end": [fases[faseAtual].first, fases[faseAtual].second, fases[faseAtual].third],
		"score": scoreTotal,
		"abstime": sumAbsTime,
		"clicktime": endTime - startTime,
		"done": userWin
	})

	if (userWin) {
		scoreTotal += fases[faseAtual++].disks
		
		traduzInformacao("torre", "test", "next_level", lang)
		informacao.classList.remove("displaynone")
		window.addEventListener("mousedown", proximaFase)
	}

	alteraCliques()
}

function limpaMao(elemento) {
	mao.append(elemento)
	limpaPosicao(mao.children[0])
}

function limpaPosicao(el) {
	el.classList.remove("row-1")
	el.classList.remove("row-2")
	el.classList.remove("row-3")
}

function colocaPosicao(el, slot) {
	el.classList.add(`row-${3 - slot.children.length}`)
}

function checkWin() {
	let win = 0
	let elementos = 0

	let i = 0,
		j = 0
	for (const copia of copiar.children) {
		for (const disc of copia.children) {
			let discoCorrespondente = inventario.children[i].children[j]

			j++
			elementos++

			if (!discoCorrespondente) {
				continue
			}

			if (disc.classList[1] === discoCorrespondente.classList[1]) {
				win++
			}
		}
		i++
		j = 0
	}
	if (win == elementos) {
		return true
	} else {
		return false
	}
}

function alteraReferencia(firstBox, secondBox, thirdBox) {
	let discos = {
		color1: document.querySelector("#copiar .disco.color1"),
		color2: document.querySelector("#copiar .disco.color2"),
		color3: document.querySelector("#copiar .disco.color3"),
	}
	firstBox.forEach((el) => {
		copiar.children[0].append(discos[el])
	})

	secondBox.forEach((el) => {
		copiar.children[1].append(discos[el])
	})

	thirdBox.forEach((el) => {
		copiar.children[2].append(discos[el])
	})
}

function resetInventario() {
	let discos = {
		red: document.querySelector("#inventario .disco.color1"),
		green: document.querySelector("#inventario .disco.color2"),
		blue: document.querySelector("#inventario .disco.color3"),
	}

	inventario.children[0].append(discos.green)
	inventario.children[0].append(discos.red)

	inventario.children[1].append(discos.blue)
}

function alteraCliques() {
	let possiveis = cliques.querySelectorAll(".cliquePossivel")

	if (possiveis.length <= 0) {
		perdeuPorClique()
		return
	}
	if (possiveis.length <= 1) {
		if (!checkWin()) {
			perdeuPorClique()
			return
		}
	}

	possiveis[possiveis.length - 1].classList.remove("cliquePossivel")
}

function perdeuPorClique() {
	faseAtual++
	traduzInformacao("torre", "test", "lose_by_click", lang)

	informacao.classList.remove("displaynone")

	window.addEventListener("mousedown", proximaFase)
}

function resetCliques() {
	cliques.querySelectorAll("span").forEach((e) => e.remove())

	for (let i = 0; i < fases[faseAtual].clicks; i++) {
		let span = document.createElement("span")
		span.classList.add("cliquePossivel")
		cliques.appendChild(span)
	}
}

function processResult() {
	let finalResult = {
		trial: [],
		size: 3,
		current: [],
		end: [],
		step: [],
		reset: [],
		tries: [],
		score: [],
		abstime: [],
		trialtime: [],
		clicktime: [],
		done: []
	}
	let numFase = 1
	let numStep = 0
	let sumTimeStep = 0

	//console.log("resultadoFinal",resultadoFinal)
	resultadoFinal.forEach(fase => {
		//console.log("fase "+numFase, fase[0].end)
		numStep = 0
		sumTimeStep = 0
		fase.forEach(step => {
			//console.log("step "+numStep, step)
			sumTimeStep += step.clicktime
			/* finalResult.push({
				"trial": numFase,
				"size": 3,
				"current": arrayToString(step.current),
				"end": arrayToString(step.end),
				"step": numStep,
				"reset": 0,
				"tries": 1,
				"score": step.score,
				"absTime": step.absTime,
				"trialtime": sumTimeStep,
				"clickTime": step.clickTime,
				"done": step.done
			}) */
			finalResult.trial.push(numFase)
			finalResult.current.push(arrayToString(step.current))
			finalResult.end.push(arrayToString(step.end))
			finalResult.step.push(numStep)
			finalResult.reset.push(0)
			finalResult.tries.push(1)
			finalResult.score.push(step.score)
			finalResult.abstime.push(step.abstime)
			finalResult.trialtime.push(sumTimeStep)
			finalResult.clicktime.push(step.clicktime)
			finalResult.done.push(step.done ? 1 : 0)
			numStep += 1
		})
		numFase += 1
		
	});
	//console.log(finalResult)
	resultadoFinal = finalResult
}

function arrayToString (a) {
	let result = "|"
	//console.log("arrayToString - array",a)

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < a[i].length; j++) {
			result += colorToNum(a[i][j])
		}
		result += "|"
	}
	//console.log("arrayToString - string", result)
	return result
}

function colorToNum (color) {
	let num

	switch (color) {
		case "color1":
			num = "1"
			break;
		case "color2":
			num = "2"
			break;
		case "color3":
			num = "3"
			break;
		default:
			break;
	}

	return num
}

async function finalizarTeste() {
	traduzInformacao("torre", "ending", "end", lang)
	window.removeEventListener("mousedown", proximaFase)

	await sleep(300)

	informacao.children[0].innerText =
		informacao.children[0].innerText +
		`\nMovimentos totais: ${totalIteracoes}`

	getUserInfo()

	processResult()

	await pushResponse("tol")
}
