var loader = document.getElementById("loader")

loader.addEventListener("click", () => {
	loader.classList.toggle("pausado")
})

var userTitle = document.getElementById("userTitle")

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
    return dataPost
}

getUser()