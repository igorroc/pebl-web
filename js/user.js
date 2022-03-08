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

let patients

loader.addEventListener("click", () => {
	loader.classList.toggle("pausado")
})

async function loadPeople(){
	await fetch("http://localhost:3333/patient/all", {
		method: "GET",
		headers: myHeader
	})
		.then((res) => {
			return res.json()
		})
		.then(function (data) {
			patients = data
		})
		.catch((err) => alert(err))

		let list = document.getElementById("wrapperPeople")

		patients.forEach((item)=>{
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

var userTitle = document.getElementById("userTitle")

const cookieValue = document.cookie.split('; ').find(x => x.startsWith('token='));
let token
if (cookieValue) token = cookieValue.split('=')[1]

const userId = JSON.parse(window.atob(token.split(".")[1]))

function axiosConfig(){
	const Api = axios.create({
		baseURL: "http://127.0.0.1:3333",
		credentials: 'include',
		withCredentials:true,
		headers:{"Content-Type": "application/json"},
	});
	return Api
}

async function getUser(){
	const Api = axiosConfig()
	let dataPost

	await Api.get("/users/findById").then((res)=>{
		dataPost = res.data
	})
	
	userTitle.textContent = `Bem vindo ${dataPost.name}`
}


getUser()