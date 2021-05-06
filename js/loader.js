var loader_wrapper = document.getElementById("loader-wrapper")
var body = document.body


window.addEventListener("load", () => {
    loader_wrapper.classList.add("sumir")
    loader_wrapper.children[0].classList.add("pausado")
    body.classList.remove("stop-scrolling")
})