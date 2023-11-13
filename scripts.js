const formulario = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-form")

envform.addEventListener("click", enviarFormulario)
sumform.addEventListener("click", sumirFormulario)

function enviarFormulario() {
    formulario.style.left = "700px"
    mascara.style.visibility = "visible"
}

function sumirFormulario() {
    formulario.style = "-320px"
    mascara.style.visibility = "hidden"
}
