var url_string = window.location;
var url = new URL(url_string);
var nome = url.searchParams.get("nome");
var color = url.searchParams.get("color");

var imagem = document.getElementById("imagemApresentacao")
var habilidades = document.getElementById("iconsHabilidade")
var titulo = document.getElementById("titulo")

console.log(nome)
console.log(color)

if(nome){
    titulo.innerHTML = nome
}
if(color){
    imagem.classList.add(`filter-${color}`)
    for (const skill of habilidades.children) {
        skill.classList.add(`filter-${color}`)
    }
}