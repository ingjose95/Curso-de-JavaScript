function mostrarMensaje() {

    alert("Click en el botón")
}

const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {

    console.log("Hola, estoy utilizando JQuery")
})