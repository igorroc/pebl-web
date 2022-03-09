var loader = document.getElementById("loader")

loader.addEventListener("click", () => {
	loader.classList.toggle("pausado")
})

const cookieExists= document.cookie.includes("token");
const hoverLink1 = document.querySelector("#hoverLink1")
const hoverLink2 = document.querySelector("#hoverLink2")
const hoverLink3 = document.querySelector("#hoverLink3")
const hoverLink4 = document.querySelector("#hoverLink4")

// if(!cookieExists) {
// 	hoverLink1.href = './login.html'
// 	hoverLink2.href = './login.html'
// 	hoverLink3.href = './login.html'
// 	hoverLink4.href = './login.html'
// }

console.log("cookie contact",document.cookie)