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

function timesumdif(a, initsum) {
	var dif = new Array()
	var sum = initsum
	for (var i = 0; i < a.length - 1; i++) {
		sum += a[i + 1].getTime() - a[i].getTime()
		dif.push(sum)
	}
	return dif
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

function letra_aleatoria() {
	return ALFABETO[Math.floor(Math.random() * ALFABETO.length)]
}
