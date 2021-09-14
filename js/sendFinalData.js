var finalTeste = {
    "deadline": "2020-10-11 10:00:00",
    "subnum": [9,9,9,9],
    "type": ["practice","practice","neutral","neutral"],
    "block": [0,1,0,1],
    "congruency": [1,0,1,0],
    "trial": [1,2,3,4],
    "stim": [1,6,2,3],
    "resp": [-1,1,0,0],
    "corr": [0,1,1,0],
    "rt": [3003,3003,3012,1012],
    "tooslow": [1,0,1,0]
}

var xTeste = {
	nome: "igor"
}

function getUserInfo() {
	let nome = url.searchParams.get("nome")
	let orientando = url.searchParams.get("orientando")
	let idade = url.searchParams.get("idade")
	let email = url.searchParams.get("email")

	informacao.children[0].innerText =
		informacao.children[0].innerText +
		`\nINFO: ${nome} | ${orientando} | ${idade} | ${email}`
}

var myHeader = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "POST",
	"Access-Control-Allow-Headers": "*",
	"Access-Control-Max-Age": 86400,
	"Content-Type": "application/json"
}

async function pushResponse() {
	console.log("antes")
	
	await fetch("http://localhost:3333/test/bst", {
		method: "POST",
		headers: myHeader,
		body: JSON.stringify(resultadoFinal),
	})
		.then((r) => console.log(r))	
		.catch((err) => console.error(err))

	console.log("depois")
}

async function getResponse() {
	console.log("antes")
	
	let res = await fetch("http://localhost:3333/test/list/bst", {
		method: "GET"
	})

	let resClean = await res.body

	console.log(resClean)

	console.log("depois")
}