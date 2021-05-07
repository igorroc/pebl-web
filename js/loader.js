var loader_wrapper = document.getElementById("loader-wrapper")
var body = document.body
var everything = document.getElementById("everything")


window.addEventListener("load", () => {
    try{
        everything.classList.remove("displaynone")
    }catch{ console.log('Não encontrou') }

    try{
        loader_wrapper.classList.add("sumir")
    }catch{ console.log('Não encontrou') }
    
    try{
        loader_wrapper.children[0].classList.add("pausado")
    }catch{ console.log('Não encontrou') }
    
    try{
        body.classList.remove("stop-scrolling")
    }catch{ console.log('Não encontrou') }
})