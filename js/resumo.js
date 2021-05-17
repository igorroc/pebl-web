var url = new URL(window.location)
var id = url.searchParams.get("id")
var nome = url.searchParams.get("nome")
var cor = url.searchParams.get("cor")

var imagem = document.getElementById("imagemApresentacao")
var habilidades = document.getElementById("iconsHabilidade")
var titulo = document.getElementById("titulo")
var description = document.getElementsByClassName("descricao")[0].children[0]
var link = document.getElementById("link")
var link_us = document.getElementById("link_us")
var particles = document.getElementsByClassName("particles")
var lines_h = document.getElementsByClassName("line-h")
var lines_v = document.getElementsByClassName("line-v")
var botao = document.getElementsByClassName("iniciar")[0]

if (id) {
	fetch("../info_testes.json")
		.then((Response) => Response.json())
		.then((data) => {
			if (data[id]) {
				titulo.innerText = data[id].title
				link.href = `./testes/${data[id].link}?lang=br`
				link_us.href = `./testes/${data[id].link}?lang=us`
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
				addFilter(data[id].color)
			}
		})
}
if (cor) {
	addFilter(cor)
}

// GRAFICOS
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
var graficoPizza = new Chart(document.getElementById("graficoPizza"), configPie)

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

function addFilter(color) {
	botao.classList.add(color)
	imagem.classList.add(`filter-${color}`)
	for (const skill of habilidades.children) {
		skill.classList.add(`filter-${color}`)
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
