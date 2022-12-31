const parrafo = document.querySelectorAll(".parrafo")
const seccion = document.querySelectorAll(".seccion")
const papelera = document.querySelectorAll(".papelera")


console.log(parrafo)

parrafo.forEach(parrafo => {

    parrafo.addEventListener("dragstart", event => {

        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)

    })

    parrafo.addEventListener("dragend", () => {

        parrafo.classList.remove("dragging")
    })
})


seccion.forEach(seccion => {

    seccion.addEventListener("dragover", event => {

        event.preventDefault()

    })

    seccion.addEventListener("drop", event => {

        console.log("Drop")
        const idParrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo)

    })


    papelera.forEach(papelera => {

        papelera.addEventListener("dragover", event => {
            event.preventDefault()
        })

        papelera.addEventListener("drop", event => {

            const id = event.dataTransfer.getData("id")
            const elemento = document.getElementById(id)
            elemento.remove("id")
    
            console.log("El " + id + " ha sido removido.")

        })
    })
})
