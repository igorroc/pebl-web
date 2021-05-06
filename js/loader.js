var loader_wrapper = document.getElementById("loader-wrapper")
var body = document.body
var everything = document.getElementById("everything")


window.addEventListener("load", () => {
    everything.classList.remove("displaynone")
    loader_wrapper.classList.add("sumir")
    loader_wrapper.children[0].classList.add("pausado")
    body.classList.remove("stop-scrolling")
})