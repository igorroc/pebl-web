var loader = document.getElementById("loader")

loader.addEventListener("click", () => {
	loader.classList.toggle("pausado")
})

var userTitle = document.getElementById("userTitle")

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