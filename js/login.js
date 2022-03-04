var loader = document.getElementById("loader")
var form = document.getElementById('form-sign-in')
var formSignUp = document.getElementById('form-sign-up')

loader.addEventListener("click", () => {
	loader.classList.toggle("pausado")
})

function switchForm() {
	let form = document.querySelector("#wrapper-inner-form")
	form.classList.toggle("show-sign-up")
}

form.addEventListener("submit", (e) => {
	e.preventDefault()
	handleLogin()
})

formSignUp.addEventListener("submit", (e) => {
	e.preventDefault()
	handleSignUp()
})

var myHeader = {
	"Content-Type": "application/json",
}

//axios.defaults.withCredentials = true
function axiosConfig(){
	const Api = axios.create({
		baseURL: "http://127.0.0.1:3333",
		credentials: 'include',
		withCredentials:true,
		headers:myHeader
	});
	return Api
}

async function handleLogin() {

	var emailLogin = document.getElementById("emailLogin")
	var passwordLogin = document.getElementById("passwordLogin")

	const Api = axiosConfig()

	console.log(await Api.get("/users/list"))

	const dataPost = await Api.post("/sessions", {
		email: String(emailLogin.value),
		password: String(passwordLogin.value)
	}).then(()=>{
		window.location.href = `./user.html`
	}).catch((err)=>{
		console.log("error", err)
		alert('Dados inválidos')
	})
	
	console.log("dataPost", dataPost)
}


async function handleSignUp() {

	var emailSignUp = document.getElementById("emailSignUp")
	var password1SignUp = document.getElementById("password1SignUp")

	var nameSignUp = document.getElementById("nameSignUp")
	var password2SignUp = document.getElementById("password2SignUp")

	var ageSignUp = document.getElementById("ageSignUp")
	var genderSignUp = document.getElementById("genderSignUp")

	var workFieldSignUp = document.getElementById("workFieldSignUp")
	var scholaritySignUp = document.getElementById("scholaritySignUp")


	var headWorkFieldSignUp = document.getElementById("headWorkFieldSignUp")
	var maritalStatusSignUp = document.getElementById("maritalStatusSignUp")


	if (password1SignUp.value != password2SignUp.value) {
		alert("senhas diferentes")
		throw new Error("Senhas diferentes")
	}
	console.log("password1SignUp", password1SignUp.value)
	console.log("password2SignUp", password2SignUp.value)

	await fetch(`http://localhost:3333/users/create`, {
		method: "POST",
		headers: myHeader,
		body: JSON.stringify({
			"email": String(emailSignUp.value),
			"password": String(password1SignUp.value),
			"age": String(ageSignUp.value),
			"gender": String(genderSignUp.value),
			"scholarity": String(scholaritySignUp.value),
			"workField": String(workFieldSignUp.value),
			"headWorkField": String(headWorkFieldSignUp.value),
			"name": String(nameSignUp.value),
			"maritalStatus": String(maritalStatusSignUp.value),
		}),
	})
		.then((res) => {
			//patient = res.data
			console.log("res", res)
			return res.json()

		})
		.then(function (data) {
			console.log("data", data)
			alert(`Usuário ${String(nameSignUp.value)} cadastrado com sucesso!\nFaça login para continuar!`)
			window.location.href = `./login.html`
			//window.location.replace(`./user.html`)
		})
		.catch((err) => {
			alert(`Não foi possível cadastrar o usuário`)
			console.error(err)
		})
}

