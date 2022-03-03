const { json } = require("body-parser")

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

async function pushResponse(testType) {
	console.log("antes")
	console.log(resultadoFinal)
	
	delete resultadoFinal.fase1.tempo

	console.log(resultadoFinal)
	
	switch (testType){
		case "bst":
			address = "http://localhost:3333/test/bst";
			break;
		case "sternberg":
			address = "http://localhost:3333/test/sternberg";
			break;
		case "stroop":
			address = "http://localhost:3333/test/stroop";
			break;
		case "torre":
			address = "http://localhost:3333/test/torre";
			break;
	}

	await fetch(address, {
		method: "POST",
		headers: myHeader,
		body: JSON.stringify(resultadoFinal),
	})
		.then((r) => console.log(r))	
		.catch((err) => console.error(err))

	console.log("depois")
}

async function getResponse(testType) {
	console.log("antes")
	
	switch (testType){
		case "bst":
			address = "http://localhost:3333/test/list/bst";
			break;
		case "sternberg":
			address = "http://localhost:3333/test/list/bst";
			break;
		case "stroop":
			address = "http://localhost:3333/test/list/bst";
			break;
		case "torre":
			address = "http://localhost:3333/test/list/bst";
			break;
	}

	let res = await fetch(address, {
		method: "GET"
	})

	let resClean = await res.body

	console.log(resClean)

	console.log("depois")
}