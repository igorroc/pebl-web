var loader = document.getElementById("loader")
var myHeader = {
	"Content-Type": "application/json"
}

const patient = {
	"name": String,
	"age": Number,
	"email": String,
	"gender": String,
	"scholarity": String,
	"workField": String,
	"cpf": String
}

function axiosConfig() {
	const Api = axios.create({
		baseURL: "http://127.0.0.1:3333",
		credentials: 'include',
		withCredentials: true,
		headers: myHeader
	});
	return Api
}

let patients

loader.addEventListener("click", () => {
	loader.classList.toggle("pausado")
})

async function loadPeople() {
	const Api = axiosConfig()

	await Api.get("/patient/all").then((res) => {
		patients = res.data
	}).catch((err) => alert(err))

	let list = document.getElementById("wrapperPeople")

	patients.forEach((item) => {
		let divPerson = document.createElement("div");
		divPerson.className = "person";

		let divPersonPic = document.createElement("div");
		divPersonPic.className = "personPic";

		let imgPerson = document.createElement("img");
		imgPerson.src = "./assets/icons/user.svg"

		let divPersonName = document.createElement("div");
		divPersonName.className = "personName";
		divPersonName.innerText = item.name;

		let spanElement = document.createElement("span");

		let imgArrow = document.createElement("img");
		imgArrow.src = "./assets/icons/arrow-right-solid.svg"

		divPersonPic.appendChild(imgPerson)
		spanElement.appendChild(imgArrow)
		divPerson.appendChild(divPersonPic)
		divPerson.appendChild(divPersonName)
		divPerson.appendChild(spanElement)

		list.appendChild(divPerson);

	})
}

const logout = document.getElementById("logout")

logout.addEventListener("click", () => {
	document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	window.location.replace('./login.html')
})

getUser().then((data) => {
	window.top.document.title = String(data.name)
})