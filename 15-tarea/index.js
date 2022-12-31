const nombre = "Jose"

const apellido = "Melendez"

const persona = { nombre, apellido }

// SessionStorage

// sessionStorage.setItem("persona", JSON.stringify(persona))

// LocalStorage

// localStorage.setItem("persona", JSON.stringify(persona))

// Cookies

var dosMinutos = new Date(new Date().getTime() + 2*60*1000)

// document.cookie = "joseCookie=" + JSON.stringify(persona) + "expires=" + dosMinutos.toUTCString() + ";path=/";