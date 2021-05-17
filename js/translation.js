var informacao = document.getElementById("informacao")

function pegaTraducao(teste, nivel, valor, lang) {
	fetch(`../translation/${teste}.json`)
		.then((Response) => Response.json())
		.then((data) => {
			if (valor) {
				informacao.children[0].innerHTML = data[nivel][valor][lang]
			} else {
				informacao.children[0].innerHTML = data[nivel][lang]
			}
		})
}
