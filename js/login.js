var loader = document.getElementById("loader")
var form = document.getElementById('form-sign-in')
var formSignUp = document.getElementById('form-sign-up')

const cookieValue = document.cookie.includes("token");
if(cookieValue) window.location.replace(`./index.html`)

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
		headers:myHeader,
	});
	return Api
}

async function handleLogin() {

	var emailLogin = document.getElementById("emailLogin")
	var passwordLogin = document.getElementById("passwordLogin")

	const Api = axiosConfig()
	let dataPost

	await Api.post("/sessions", {
		email: String(emailLogin.value),
		password: String(passwordLogin.value)
	}).then((res)=>{
		window.location.href = `./user.html`
		dataPost = res.data
	}).catch((err)=>{
		console.log("error", err)
		alert('Dados inválidos')
	})
	//window.location.href = `./user.html`
	console.log("dataPost", dataPost)
}


async function handleSignUp() {

	var emailSignUp = document.getElementById("emailSignUp")
	var password1SignUp = document.getElementById("password1SignUp")

	var nameSignUp = document.getElementById("nameSignUp")
	var password2SignUp = document.getElementById("password2SignUp")

	var ageSignUp = document.getElementById("ageSignUp")

	var workFieldSignUp = document.getElementById("workFieldSignUp")

	var headWorkFieldSignUp = document.getElementById("headWorkFieldSignUp")
	
	var selectGender = document.getElementById("selectGender");
	var selectScholarity= document.getElementById("selectScholarity");
	var selectMaritalStatus = document.getElementById("selectMaritalStatus");

	var selectedGender = selectGender.options[selectGender.selectedIndex].value;
	var selectedScholarity = selectScholarity.options[selectScholarity.selectedIndex].value;
	var selectedMaritalStatus = selectMaritalStatus.options[selectMaritalStatus.selectedIndex].value;

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
			"gender": String(selectedGender),
			"scholarity": String(selectedScholarity),
			"workField": String(workFieldSignUp.value),
			"headWorkField": String(headWorkFieldSignUp.value),
			"name": String(nameSignUp.value),
			"maritalStatus": String(selectedMaritalStatus),
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

//Custom select
var x, i, j, l, ll, selElmnt, a, b, c;

/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
	// scholaritySignUp.hidden = !scholaritySignUp.hidden
	// scholarityLabel.textContent = scholarityLabel.textContent === "" ?  "Escolaridade" : ""
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);