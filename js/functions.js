const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function getTime(local) {
	var t = new Date()
	local.push(t)
}

function resultado(a) {
	var dif = new Array()
	for (var i = 0; i < a.length - 1; i++) {
		dif.push(a[i + 1] - a[i])
	}
	return dif
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

function letra_aleatoria() {
	return ALFABETO[Math.floor(Math.random() * ALFABETO.length)]
}
