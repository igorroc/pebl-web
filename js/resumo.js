var url = new URL(window.location)
var id = url.searchParams.get("id")
var nome = url.searchParams.get("nome")
var cor = url.searchParams.get("cor")

var imagem = document.getElementById("imagemApresentacao")
var habilidades = document.getElementById("iconsHabilidade")
var controllers = document.getElementById("iconsControles")
var titulo = document.getElementById("titulo")
var description = document.getElementsByClassName("descricao")[0].children[0]
var link = document.getElementById("link")
var link_us = document.getElementById("link_us")
var particles = document.getElementsByClassName("particles")
var lines_h = document.getElementsByClassName("line-h")
var lines_v = document.getElementsByClassName("line-v")
var botao = document.getElementsByClassName("iniciar")[0]

var form = document.getElementById("formID")
var formClose = document.getElementById("closeForm")
var everything = document.getElementById("everything")

var nome = document.getElementById("name")
var orientando = document.getElementById("prof")
var idade = document.getElementById("idade")
var email = document.getElementById("email")
var gender = document.getElementById("gender")
var scholarity = document.getElementById("scholarity")
var workField = document.getElementById("workField")
var cpf = document.getElementById("cpf")

// DADOS INICIAIS
if (id) {
	fetch("https://igorroc.github.io/pebl-web/testes/info_testes.json")
		.then((Response) => Response.json())
		.then((data) => {
			if (!data[id]) {
				naoTemResumo()
				return
			}

			titulo.innerText = data[id].title
			link.setAttribute("linkDoTeste", data[id].link)
			// link.href = `./testes/${data[id].link}?lang=br`
			imagem.setAttribute(
				"src",
				`https://raw.githubusercontent.com/IgorRoc/pebl-web/main/assets/img/testes/${data[id].img}`
			)
			document.title =
				data[id].title.charAt(0).toUpperCase() +
				data[id].title.substr(1) +
				" - Resumo"
			description.innerText = data[id].description
			for (const hab in data[id].habilities) {
				let obj = data[id].habilities[hab]
				let div = document.createElement("div")
				div.classList.add("icon")
				div.classList.add("tooltip-holder")
				let img = document.createElement("img")
				img.src = `./assets/icons/${obj.title}.svg`
				let span = document.createElement("span")
				span.classList.add("tooltip")
				span.innerText = obj.description
				div.appendChild(span)
				div.appendChild(img)
				habilidades.appendChild(div)
			}
			for (const contr in data[id].controllers) {
				let obj = data[id].controllers[contr]
				let div = document.createElement("div")
				div.classList.add("icon")
				div.classList.add("tooltip-holder")
				let img = document.createElement("img")
				img.src = `./assets/icons/${obj.title}.svg`
				let span = document.createElement("span")
				span.classList.add("tooltip")
				span.innerText = obj.description
				div.appendChild(span)
				div.appendChild(img)
				controllers.appendChild(div)
			}
			addFilter(data[id].color)
		})
		.catch((err) => {
			console.error(err)
			naoTemResumo()
		})
	generateGraphs()
} else {
	naoTemResumo()
}
if (cor) {
	addFilter(cor)
}

// Custom form
link.addEventListener("click", () => {
	form.style.display = "flex"
	everything.classList.add("displaynone")
	document.cookie = "patientId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
})

formClose.addEventListener("click", () => {
	form.style.display = "none"
	everything.classList.remove("displaynone")
	document.cookie = "patientId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	window.location.reload();
})

form.addEventListener("submit", (e) => {
	e.preventDefault()
	var cpfField = document.getElementById("patientcpf").value

	if(cpfField === ""){
		envioFormulario()
	}else{
		updatePatient()
	}

	var linkDoTeste = link.getAttribute("linkDoTeste")

	//var linkFinal = `${linkDoTeste}.html?lang=br&nome=${nome.value}&orientando=${orientando.value}&idade=${idade.value}&email=${email.value}`

	//console.log(linkFinal)
	
	window.location.replace(`./testes/${linkDoTeste}.html`)
})

async function updatePatient(){

	const patient = {
		"name": String(nome.value),
		"age": Number(idade.value),
		"email": String(email.value),
		"gender": String(gender.value),
		"scholarity": String(scholarity.value),
		"workField": String(workField.value),
		"cpf": String(cpf.value)
	}
	
	const cookieValue = document.cookie
	.split('; ')
	.find(row => row.startsWith('patientId='))
	.split('=')[1];

	const Api = axiosConfig()

	await Api.put(`/patient/update/${cookieValue}`, 
		patient
	).then((res) => {
		console.log(res)
	})
	.catch((err) => console.error(err))
}

async function envioFormulario() {

	const patient = {
		name: String(nome.value),
		age: Number(idade.value),
		email: String(email.value),
		gender: String(gender.value),
		scholarity: String(scholarity.value),
		workField: String(workField.value),
		cpf: String(cpf.value)
	}
	const cookieValue = document.cookie.includes("patientId");
// 	const cookieValue = document.cookie
//   .split('; ')
//   .find(row => row.startsWith('patientId='))
//   .split('=')[1];
 

	if(!cookieValue){
		// await fetch("http://localhost:3333/patient/create", {
		// 	method: "POST",
		// 	headers: myHeader,
		// 	body: JSON.stringify(patient),
		// })
		// 	.then((res) => {
		// 		console.log(res)
		// 	})
		// 	.catch((err) => console.error(err))
		const Api = axiosConfig()
		let patientCreated

		await Api.post("/patient/create", 
			patient
		).then((res)=>{
			patientCreated = res.data;
		}).catch((err)=>{
			alert('Erro ao criar paciente')
		})
		
		document.cookie =  `patientId=${patientCreated.id};Path=/;SameSite=None;Secure;`
	}
	
}

// GRAFICOS

function generateGraphs() {
	const min_graph_size = 50
	const max_graph_size = 300
	Chart.defaults.color = "#e3e3e3"

	const dataPie = {
		labels: ["Valor1", "Valor2", "Valor3"],
		datasets: [
			{
				label: "Pontuação Cognitiva",
				data: [
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
				],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(255, 205, 86, 0.2)",
				],
				borderColor: [
					"rgb(255, 99, 132)",
					"rgb(255, 159, 64)",
					"rgb(255, 205, 86)",
				],
				borderWidth: 1,
				hoverOffset: 10,
			},
		],
	}
	const configPie = {
		type: "pie",
		data: dataPie,
	}
	var graficoPizza = new Chart(
		document.getElementById("graficoPizza"),
		configPie
	)

	const dataPolar = {
		labels: ["Valor1", "Valor2", "Valor3", "Valor4", "Valor5"],
		datasets: [
			{
				label: "Sinais e Sintomas",
				data: [
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
				],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(255, 205, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(201, 203, 207, 0.2)",
				],
				borderColor: [
					"rgb(255, 99, 132)",
					"rgb(255, 159, 64)",
					"rgb(255, 205, 86)",
					"rgb(75, 192, 192)",
					"rgb(54, 162, 235)",
					"rgb(153, 102, 255)",
					"rgb(201, 203, 207)",
				],
				borderWidth: 1,
			},
		],
	}
	const configPolar = {
		type: "polarArea",
		data: dataPolar,
	}
	var graficoPolar = new Chart(
		document.getElementById("graficoPolar"),
		configPolar
	)

	const labels = ["Valor1", "Valor2", "Valor3", "Valor4", "Valor5", "Valor6"]
	const dataBarra = {
		labels: labels,
		datasets: [
			{
				label: "Outros",
				data: [
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
					Math.floor(
						Math.random() * (max_graph_size - min_graph_size) +
						min_graph_size
					),
				],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(255, 205, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(201, 203, 207, 0.2)",
				],
				borderColor: [
					"rgb(255, 99, 132)",
					"rgb(255, 159, 64)",
					"rgb(255, 205, 86)",
					"rgb(75, 192, 192)",
					"rgb(54, 162, 235)",
					"rgb(153, 102, 255)",
					"rgb(201, 203, 207)",
				],
				borderWidth: 1,
			},
		],
	}
	const configBarra = {
		type: "bar",
		data: dataBarra,
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	}
	var graficoBarra = new Chart(
		document.getElementById("graficoBarra"),
		configBarra
	)
}

function addFilter(color) {
	botao.classList.add(color)
	imagem.classList.add(`filter-${color}`)
	for (const skill of habilidades.children) {
		skill.classList.add(`filter-${color}`)
	}
	for (const controle of controllers.children) {
		controle.classList.add(`filter-${color}`)
	}
	for (const particle of particles) {
		for (const p of particle.children) {
			p.classList.add(`bg-grad-${color}`)
		}
	}
	for (const line_h of lines_h) {
		line_h.classList.add(`filter-${color}`)
	}
	for (const line_v of lines_v) {
		line_v.classList.add(`filter-${color}`)
	}
}

function naoTemResumo() {
	let graficos = document.getElementById("wrapperGraficos")
	particles[1].remove()
	graficos.remove()
	let apresentacao = document.getElementsByClassName("apresentacao")[0]

	let aviso = document.createElement("div")
	aviso.id = "avisoNaoEncontrou"
	let h3 = document.createElement("h3")
	h3.innerText =
		"Não foi possível encontrar o teste, tente novamente mais tarde"
	aviso.appendChild(h3)

	let a = document.createElement("a")
	a.classList.add("btn-cta")
	a.href = "https://igorroc.github.io/pebl-web/"
	let span = document.createElement("span")
	span.classList.add("btn-content")
	span.innerText = "Voltar para casa"
	let img = document.createElement("img")
	img.classList.add("btn-icon", "cl-invert")
	img.src = "https://igorroc.github.io/pebl-web/assets/icons/botao-home.svg"

	a.appendChild(span)
	a.appendChild(img)

	aviso.appendChild(a)

	apresentacao.parentNode.insertBefore(aviso, apresentacao.nextSibling)
	apresentacao.remove()
}

function continueMobile() {
	let mobile = document.getElementById("mobile")
	let everything = document.getElementById("everything")

	mobile.style.display = "none"
	everything.style.display = "block"
}

async function searchPatientCpf() {
	let patientcpf = document.getElementById("patientcpf")
	let patientData

	const Api = axiosConfig()

	await Api.post("/patient/cpf", {
		cpf: String(patientcpf.value),
	}).then((res)=>{
		patientData = res.data;
	}).catch((err)=>{
		patientcpf.value = "";
		alert('Dados inválidos')
	})

	document.cookie =  `patientId=${patientData.id};Path=/;SameSite=None;Secure;`
	
	var nome = document.getElementById("name")
	var orientando = document.getElementById("prof")
	var idade = document.getElementById("idade")
	var email = document.getElementById("email")
	var gender = document.getElementById("gender")
	var scholarity = document.getElementById("scholarity")
	var workField = document.getElementById("workField")
	var cpf = document.getElementById("cpf")

	if (patientData) {
		nome.value = patientData.name
		idade.value = patientData.age
		email.value = patientData.email
		gender.value = patientData.gender
		scholarity.value = patientData.scholarity
		workField.value = patientData.workField
		cpf.value = patientcpf.value
		orientando.value = "Professor"

		cpf.disabled = true

		cpf.style.backgroundColor = "#4a4a4a"
		

	}

}