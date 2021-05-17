var slots = [
	document.getElementById("slot1"),
	document.getElementById("slot2"),
	document.getElementById("slot3"),
]

var mao = document.getElementById("mao")

for (const slot of slots) {
	slot.addEventListener("click", async () => {
		if (mao.children.length > 0) {
			// await animacaoIn(mao.children[0], 300)
			colocaPosicao(mao.children[0], slot)
			slot.append(mao.children[0])
			// await animacaoOut(slot.children[0], 300)
		} else {
			// await animacaoIn(slot.children[slot.children.length-1], 300)
			mao.append(slot.children[slot.children.length - 1])
			limpaPosicao(mao.children[0])
			// await animacaoOut(mao.children[0], 300)
		}
	})
}

var i = 0
for (const slot of slots) {
	for (const disco of slot.getElementsByClassName("disco")) {
		disco.innerHTML = i++
	}
}

// FUNCTIONS

function limpaPosicao(el) {
	el.classList.remove("row-1")
	el.classList.remove("row-2")
	el.classList.remove("row-3")
}

function colocaPosicao(el, slot) {
	el.classList.add(`row-${3 - slot.children.length}`)
}

async function animacaoIn(el, time) {
	console.log(el)
	el.classList.add("diminuir")
	await sleep(time)
	el.classList.add("espera")
	el.classList.remove("diminuir")
}

async function animacaoOut(el, time) {
	console.log(el)
	el.classList.add("aumentar")
	el.classList.remove("espera")
	await sleep(time)
	el.classList.remove("aumentar")
}
