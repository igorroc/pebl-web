var url = new URL(window.location)
var nome = url.searchParams.get("nome")
var color = url.searchParams.get("cor")

var imagem = document.getElementById("imagemApresentacao")
var habilidades = document.getElementById("iconsHabilidade")
var titulo = document.getElementById("titulo")
var link = document.getElementById("link")
var particles = document.getElementsByClassName("particles")
var lines_h = document.getElementsByClassName("line-h")
var lines_v = document.getElementsByClassName("line-v")
var botao = document.getElementsByClassName("iniciar")[0]

if (nome) {
    titulo.innerHTML = nome
    link.href = `./testes/${nome}`
    document.title = nome.charAt(0).toUpperCase() + nome.substr(1) + " - Resumo"
}
if (color) {
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

// GRAFICOS
const min_size = 50
const max_size = 300
Chart.defaults.color = "#e3e3e3"

const dataPie = {
    labels: [
        'Valor1',
        'Valor2',
        'Valor3'
    ],
    datasets: [{
        label: 'Pontuação Cognitiva',
        data: [Math.floor(Math.random() * ( max_size - min_size ) + min_size ), 
               Math.floor(Math.random() * ( max_size - min_size ) + min_size ), 
               Math.floor(Math.random() * ( max_size - min_size ) + min_size )],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)'
        ],
        borderWidth: 1,
        hoverOffset: 10
    }]
}
const configPie = {
    type: 'pie',
    data: dataPie
}
var graficoPizza = new Chart(
    document.getElementById('graficoPizza'),
    configPie
)

const dataPolar = {
    labels: [
        'Valor1',
        'Valor2',
        'Valor3',
        'Valor4',
        'Valor5'
    ],
    datasets: [{
        label: 'Sinais e Sintomas',
        data: [Math.floor(Math.random() * ( max_size - min_size ) + min_size ), 
               Math.floor(Math.random() * ( max_size - min_size ) + min_size ), 
               Math.floor(Math.random() * ( max_size - min_size ) + min_size ), 
               Math.floor(Math.random() * ( max_size - min_size ) + min_size ),
               Math.floor(Math.random() * ( max_size - min_size ) + min_size )],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
}
const configPolar = {
    type: 'polarArea',
    data: dataPolar
}
var graficoPolar = new Chart(
    document.getElementById('graficoPolar'),
    configPolar
)

const labels = ["Valor1", "Valor2", "Valor3", "Valor4", "Valor5", "Valor6"];
const dataBarra = {
  labels: labels,
  datasets: [{
    label: 'Outros',
    data: [Math.floor(Math.random() * ( max_size - min_size ) + min_size ), 
           Math.floor(Math.random() * ( max_size - min_size ) + min_size ),
           Math.floor(Math.random() * ( max_size - min_size ) + min_size ),
           Math.floor(Math.random() * ( max_size - min_size ) + min_size ),
           Math.floor(Math.random() * ( max_size - min_size ) + min_size ),
           Math.floor(Math.random() * ( max_size - min_size ) + min_size ),
           Math.floor(Math.random() * ( max_size - min_size ) + min_size )],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
}
const configBarra = {
    type: 'bar',
    data: dataBarra,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
}
var graficoBarra = new Chart(
    document.getElementById('graficoBarra'),
    configBarra
)