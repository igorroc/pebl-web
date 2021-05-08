var informacao = document.getElementById("informacao")
var language = "us"

fetch(`../translation/stroop.json`)
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        console.log(data.pretest.instruction[language])
        console.log(informacao.firstChild)
        informacao.children[0].innerHTML = data.pretest.instruction[language]
        // informacao.classList.remove("displaynone")
    })