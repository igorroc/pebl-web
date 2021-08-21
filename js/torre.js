let url = new URL(window.location)
let lang = url.searchParams.get("lang") || "br"

let faseAtual = 0
let totalIteracoes = 0
let iteracoesFase = 0

let fases = [
	// REFERENCIAS SUPERIORES
	{ first: [], second: ["blue", "green"], third: ["red"], clicks: 2 },
	{ first: ["green"], second: ["red"], third: ["blue"], clicks: 2 },
	{ first: ["green", "blue"], second: ["red"], third: [], clicks: 3 },
	{ first: ["green"], second: ["red", "blue"], third: [], clicks: 3 },
	{ first: ["red", "green"], second: ["blue"], third: [], clicks: 4 },
	{ first: ["blue"], second: ["red", "green"], third: [], clicks: 4 },
	{ first: ["red", "blue"], second: [], third: ["green"], clicks: 4 },
	{ first: [], second: ["red", "blue"], third: ["green"], clicks: 4 },
	{ first: ["red", "green", "blue"], second: [], third: [], clicks: 5 },
	{ first: ["red", "blue", "green"], second: [], third: [], clicks: 5 },
	{ first: ["blue", "green"], second: ["red"], third: [], clicks: 5 },
	{ first: ["blue"], second: ["red"], third: ["green"], clicks: 5 },
]

let slots = [
	document.getElementById("slot1"),
	document.getElementById("slot2"),
	document.getElementById("slot3"),
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

traduzInformacao("torre", "pretest", "instruction", lang)
window.addEventListener("click", inicio)

function inicio() {
	console.log("inicio")

	informacao.classList.add("displaynone")

	window.removeEventListener("click", inicio)
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

	if (checkWin()) {
		faseAtual++

		traduzInformacao("torre", "test", "nextLevel", lang)
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
		green: document.querySelector("#copiar .disco.verde"),
		blue: document.querySelector("#copiar .disco.azul"),
		red: document.querySelector("#copiar .disco.vermelho"),
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
		green: document.querySelector("#inventario .disco.verde"),
		blue: document.querySelector("#inventario .disco.azul"),
		red: document.querySelector("#inventario .disco.vermelho"),
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
	traduzInformacao("torre", "test", "loseByClick", lang)

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

async function finalizarTeste() {
	traduzInformacao("torre", "ending", "end", lang)
	window.removeEventListener("mousedown", proximaFase)

	await sleep(300)

	informacao.children[0].innerText =
		informacao.children[0].innerText +
		`\nMovimentos totais: ${totalIteracoes}`

	getUserInfo()
}
