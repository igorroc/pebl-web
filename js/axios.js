var myHeader = {
	"Content-Type": "application/json",
}

function axiosConfig(){
    const Api = axios.create({
        baseURL: "http://127.0.0.1:3333",
        credentials: 'include',
        withCredentials:true,
        headers:myHeader
    });
    return Api
}