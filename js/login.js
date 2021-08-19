var loader = document.getElementById("loader")

loader.addEventListener("click", () => {
	loader.classList.toggle("pausado")
})

function switchForm() {
	let form = document.querySelector("#wrapper-inner-form")
	form.classList.toggle("show-sign-up")
}
