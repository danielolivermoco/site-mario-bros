const formulario = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-form")

function mostrarForm() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function sumirForm() {
    formulario.style.left = "-330px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}