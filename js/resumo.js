var url_string = window.location;
var url = new URL(url_string);
var nome = url.searchParams.get("nome");
var color = url.searchParams.get("cor");

var imagem = document.getElementById("imagemApresentacao")
var habilidades = document.getElementById("iconsHabilidade")
var titulo = document.getElementById("titulo")
var particles = document.getElementById("particles")


if(nome){
    titulo.innerHTML = nome
}
if(color){
    imagem.classList.add(`filter-${color}`)
    for (const skill of habilidades.children) {
        skill.classList.add(`filter-${color}`)
    }
    for (const particle of particles.children) {
        particle.classList.add(`bg-grad-${color}`)
    }
}