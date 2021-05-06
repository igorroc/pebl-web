var url_string = window.location;
var url = new URL(url_string);
var nome = url.searchParams.get("nome");
var color = url.searchParams.get("cor");

var imagem = document.getElementById("imagemApresentacao")
var habilidades = document.getElementById("iconsHabilidade")
var titulo = document.getElementById("titulo")
var link = document.getElementById("link")
var particles = document.getElementById("particles")
var lines_h = document.getElementsByClassName("line-h")
var lines_v = document.getElementsByClassName("line-v")
var botao = document.getElementsByClassName("iniciar")[0]

if(nome){
    titulo.innerHTML = nome
    link.href = `./testes/${nome}`
    document.title = nome.charAt(0).toUpperCase() + nome.substr(1)
}
if(color){
    botao.classList.add(color)
    imagem.classList.add(`filter-${color}`)
    for (const skill of habilidades.children) {
        skill.classList.add(`filter-${color}`)
    }
    for (const particle of particles.children) {
        particle.classList.add(`bg-grad-${color}`)
    }
    for (const line_h of lines_h) {
        line_h.classList.add(`filter-${color}`)
    }
    for (const line_v of lines_v) {
        line_v.classList.add(`filter-${color}`)
    }
}