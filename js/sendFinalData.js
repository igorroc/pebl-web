function getUserInfo() {
	let nome = url.searchParams.get("nome")
	let orientando = url.searchParams.get("orientando")
	let idade = url.searchParams.get("idade")
	let email = url.searchParams.get("email")

	informacao.children[0].innerText =
		informacao.children[0].innerText +
		`\nINFO: ${nome} | ${orientando} | ${idade} | ${email}`
}

async function pushResponse() {
	await fetch("http://localhost:3333/test/bst", {
		method: "POST",
		body: JSON.stringify(resultadoFinal),
	})
}
