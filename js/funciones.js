const titulo = document.querySelector(".titulo");
const info = document.querySelector(".info");
const botonConocer = document.querySelector(".titulo button");
const botonVolver = document.querySelector(".info button");
const modoOscuro = document.querySelector("img.oscuro");
const menuIcon = document.querySelector(".menu");
const menu = document.querySelector("nav ul");

const contenido = document.querySelector(".contenido");
const imgAna = document.querySelector(".ana img");
const uno = document.querySelector(".uno");
const imgLaura = document.querySelector(".laura img");
const dos = document.querySelector(".dos");
const flechas = document.querySelectorAll(".flecha");

const inputTitulo = document.querySelector('input[type="text"]');
const botonAdd = document.querySelector(".add");
const botonGenerate = document.querySelector(".generate");
const botonLimpiar = document.querySelector(".clear");
const resultado = document.querySelector(".resultado");
const mensaje = document.querySelector("h3");


//Primero verifico si se encuentran los botones para que se pueda ejecutar el resto del código:

if(botonConocer && botonVolver && titulo && info) {
    //botones cambian a la clase visible, removiendo la clase anterior
    botonConocer.addEventListener("click", () => {
        titulo.classList.remove("visible");
        info.classList.add("visible");
    });

    botonVolver.addEventListener("click", () => {
        info.classList.remove("visible");
        titulo.classList.add("visible");
    });
}

if(imgAna && imgLaura && contenido && uno && dos && flechas) {
    //ir a la sección de Ana
    imgAna.addEventListener("click", () => {
        contenido.classList.remove("ver");
        uno.classList.add("ver");
    });

    //ir a la sección de Laura
    imgLaura.addEventListener("click", () => {
        contenido.classList.remove("ver");
        dos.classList.add("ver");
    });

    //volver hacia atrás
    flechas.forEach(flecha => {
        flecha.addEventListener("click", () => {
            //eliminar la clase ver de las secciones uno y dos
            uno.classList.remove("ver");
            dos.classList.remove("ver");

            //agregar la clase ver a la sección contenido
            contenido.classList.add("ver");
        });
    });
}

if(botonAdd && botonGenerate && botonLimpiar && inputTitulo && mensaje && resultado) {
    //añadir títulos a un array para luego poder generarlos aleatoriamente 
    let titulos = [];

    botonAdd.addEventListener("click", evento => {
        evento.preventDefault();

        const titulo = inputTitulo.value.trim(); 

        if (titulo !== "") {
            //añadir el título al array
            titulos.push(titulo);

            //limpiar el input después de añadir
            inputTitulo.value = "";
            mensaje.innerText = "Se ha añadido: " + titulo.toUpperCase();
            mensaje.style.color = "#8f75b1";
        } else {
            mensaje.innerText = "Por favor, escribe un título.";
            mensaje.style.color = "#e4007f";
        }
    });

    //generar aleatoriamente los títulos del array
    botonGenerate.addEventListener("click", evento => {
        evento.preventDefault(); 
        if (titulos.length > 0) {
            //seleccionar un índice aleatorio
            const indiceAleatorio = Math.floor(Math.random() * titulos.length);
            const tituloAleatorio = titulos[indiceAleatorio];

            //mostrar el título generado en el h2
            resultado.innerText = `Título seleccionado: ${tituloAleatorio.toUpperCase()}. ¡Feliz lectura!⭐`;

            //limpiar el mensaje en h3
            mensaje.innerText = "";
        } else {
            resultado.innerText = "Por favor, añade títulos primero.";
        }
    });

    //limpiar el array por si se quiere generar nuevos títulos
    botonLimpiar.addEventListener('click', evento => {
        evento.preventDefault(); 
        //limpiar el array de títulos
        titulos = [];
        //limpiar el input de texto
        inputTitulo.value = "";
        //limpiar el mensaje en h3 y h2
        mensaje.innerText = "";
        resultado.innerText = ""; 
    });
}

//añadir evento al ícono del menú para mostrar u ocultar el menú
if (menuIcon && menu) {
    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("activo"); //alterna la clase activo para mostrar/ocultar el menú
    });
}

//cambiar al modo oscuro
//al cargar la página, aplica el modo oscuro si ya estaba activado usando localStorage
if (localStorage.getItem("modo") === "oscuro") {
    //cambia imagen
    modoOscuro.src = "img/star.png";

    //se añade clase on a los elementos
    document.querySelector("body").classList.add("on");
    document.querySelector(".contenedor").classList.add("on");
    document.querySelector("nav").classList.add("on");

    document.querySelectorAll("h1", "h2", "h3").forEach(item => item.classList.add("on"));
    document.querySelectorAll("p").forEach(item => item.classList.add("on"));
    document.querySelectorAll("nav ul li a").forEach(item => item.classList.add("on"));
    document.querySelectorAll("button").forEach(item => item.classList.add("on"));
    document.querySelectorAll(".enlaces li a").forEach(item => item.classList.add("on"));
    document.querySelector("footer").classList.add("on");
}

//cambiar entre modo claro/oscuro con el botón
modoOscuro.addEventListener("click", () => {
    if (modoOscuro.src.includes("img/moon.png")) { //está en modo claro para cambiar 
        //se cambia la imagen
        modoOscuro.src = "img/star.png";
        localStorage.setItem("modo", "oscuro"); //se guarda en localStorage que se cambia a modo oscuro

        //añadir la clase .on a todos los elementos
        document.querySelector("body").classList.add("on");
        document.querySelector(".contenedor").classList.add("on");
        document.querySelector("nav").classList.add("on");

        document.querySelectorAll("h1", "h2", "h3").forEach(item => item.classList.add("on"));
        document.querySelectorAll("p").forEach(item => item.classList.add("on"));
        document.querySelectorAll("nav ul li a").forEach(item => item.classList.add("on"));
        document.querySelectorAll("button").forEach(item => item.classList.add("on"));
        document.querySelectorAll(".enlaces li a").forEach(item => item.classList.add("on"));
        document.querySelector("footer").classList.add("on");
    } else {
        //vuelve a la imagen moon
        modoOscuro.src = "img/moon.png";
        localStorage.setItem("modo", "claro"); //se guarda en localStorage que se cambia a modo oscuro

        //quitar la clase .on para volver al modo claro
        document.querySelector("body").classList.remove("on");
        document.querySelector(".contenedor").classList.remove("on");
        document.querySelector("nav").classList.remove("on");

        document.querySelectorAll("h1", "h2", "h3").forEach(item => item.classList.remove("on"));
        document.querySelectorAll("p").forEach(item => item.classList.remove("on"));
        document.querySelectorAll("nav ul li a").forEach(item => item.classList.remove("on"));
        document.querySelectorAll("button").forEach(item => item.classList.remove("on"));
        document.querySelectorAll(".enlaces li a").forEach(item => item.classList.remove("on"));
        document.querySelector("footer").classList.remove("on");
    }
});
