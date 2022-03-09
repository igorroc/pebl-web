const cookie= document.cookie.includes("token");
const a = document.querySelector("#cookieData");
if(!cookie) {
    a.textContent="Cadastrar-se"
    a.href = "./login.html";
}else{    
    const token = document.cookie.split('; ').find(x => x.startsWith('token=')).split('=')[1]
	const userData = JSON.parse(window.atob(token.split(".")[1]))
    a.textContent = userData.name
    a.href = "./user.html";
}
