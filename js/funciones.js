const titulo = document.querySelector(".titulo");
const info = document.querySelector(".info");
const botonConocer = document.querySelector(".titulo button");
const botonVolver = document.querySelector(".info button");


//Hacer los botones funcionales
botonConocer.addEventListener("click", () => {
    titulo.classList.remove("visible");
    info.classList.add("visible");
});
botonVolver.addEventListener("click", () => {
    info.classList.remove("visible");
    titulo.classList.add("visible");
});