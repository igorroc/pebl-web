var informacao = document.getElementById("informacao")

function pegaTraducao(nivel, valor){
    fetch(`../translation/stroop.json`)
        .then(Response => Response.json())
        .then(data => {
            if(valor){
                informacao.children[0].innerHTML =  data[nivel][valor][language]
            }else{
                informacao.children[0].innerHTML =  data[nivel][language]
            }
        })
}