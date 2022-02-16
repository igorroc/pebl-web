var informacao = document.getElementById("informacao")

function traduzInformacao(teste, nivel, valor, lang) {
	// fetch(`../translation/${teste}.json`) fetch não vai ler arquivos locais sem desabilitar algumas permissões de segurança
	fetch(`https://raw.githubusercontent.com/igorroc/pebl-web/main/translation/${teste}.json`)
		.then((Response) => Response.json())
		.then((data) => {
			if (valor) {
				informacao.children[0].innerText = data[nivel][valor][lang]
			} else {
				informacao.children[0].innerText = data[nivel][lang]
			}
		})
}

async function traducaoTeste(array){
	fetch(`../translation/stroop.json`)
		.then((Response) => Response.json())
		.then(async (data) => {
			await array.push(data)
		})
}