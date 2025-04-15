const titulo = document.querySelector(".titulo");
const info = document.querySelector(".info");
const botonConocer = document.querySelector(".titulo button");
const botonVolver = document.querySelector(".info button");
const modoOscuro = document.querySelector("img.oscuro");

const contenido = document.querySelector(".contenido");
const imgAna = document.querySelector(".ana img");
const uno = document.querySelector(".uno");
const imgLaura = document.querySelector(".laura img");
const dos = document.querySelector(".dos");
const flechas = document.querySelectorAll(".flecha");

const inputTitulo = document.querySelector('input[type="text"]');
const botonAdd = document.querySelector('.add');
const botonGenerate = document.querySelector('.generate');
const botonLimpiar = document.querySelector('.clear');
const resultado = document.querySelector('.resultado');
const mensaje = document.querySelector('h3');

const botonTitulo = document.querySelector(".title");
const botonAutor = document.querySelector('.author');
const botonReset = document.querySelector('.reset');

//Primero verifico si se encuentran los botones para que se pueda ejecutar el resto del código

if(botonConocer && botonVolver && titulo && info) {
    //Botones cambian a la clase visible, removiendo la clase al anterior
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
    //Ir a la sección de Ana
    imgAna.addEventListener("click", () => {
        contenido.classList.remove("ver");
        uno.classList.add("ver");
    });

    //Ir a la sección de Laura
    imgLaura.addEventListener("click", () => {
        contenido.classList.remove("ver");
        dos.classList.add("ver");
    });

    //Volver hacia atrás
    flechas.forEach(flecha => {
        flecha.addEventListener("click", () => {
            // Eliminar la clase "ver" de las secciones uno y dos
            uno.classList.remove("ver");
            dos.classList.remove("ver");

            // Agregar la clase "ver" a la sección contenido
            contenido.classList.add("ver");
        });
    });
}

if(botonAdd && botonGenerate && botonLimpiar && inputTitulo && mensaje && resultado) {
    //añadir títulos a un array para luego poder generarlos aleatoriamente 
    let titulos = [];

    botonAdd.addEventListener('click', evento => {
        evento.preventDefault();

        const titulo = inputTitulo.value.trim(); 

        if (titulo !== "") {
            //añadir el título al array
            titulos.push(titulo);

            //limpiar el input después de añadir
            inputTitulo.value = "";
            mensaje.innerText = "Se ha añadido: " + titulo;
            mensaje.style.color = "#8f75b1";
        } else {
            mensaje.innerText = "Por favor, escribe un título.";
            mensaje.style.color = "#e4007f";
        }
    });

    // Generar aleatoriamente los títulos del array
    botonGenerate.addEventListener('click', evento => {
        evento.preventDefault(); 
        if (titulos.length > 0) {
            // Seleccionar un índice aleatorio
            const indiceAleatorio = Math.floor(Math.random() * titulos.length);
            const tituloAleatorio = titulos[indiceAleatorio];

            // Mostrar el título generado en el <h2>
            resultado.innerText = `Título seleccionado: ${tituloAleatorio}. ¡Feliz lectura!⭐`;

            // Limpiar el mensaje en <h3>
            mensaje.innerText = "";
        } else {
            resultado.innerText = "Por favor, añade títulos primero.";
        }
    });

    // Limpiar el Array por si se quiere generar nuevos títulos
    botonLimpiar.addEventListener('click', evento => {
        evento.preventDefault(); 
        // Limpiar el array de títulos
        titulos = [];
        // Limpiar el input de texto
        inputTitulo.value = "";
        // Limpiar el mensaje en <h3> y <h2>
        mensaje.innerText = "";
        resultado.innerText = ""; 
    });
}

let lista;
let itemsLista;
let listaOriginal = []; //creao un array vacío para poder guardar la lista original de libros para si se encuentra en la pagina

if (document.querySelector(".libros ul")) {
    lista = document.querySelector(".libros ul");
    itemsLista = lista.getElementsByTagName("li");
}

if (itemsLista && itemsLista.length > 0 && listaOriginal && lista && botonTitulo && botonAutor && botonReset) {

    //se guarda el orden original ya que al ordenarlos se perderá y así se pueden restaurar más tarde
    for(let i = 0; i < itemsLista.length; i++){
        listaOriginal.push(itemsLista[i]);
    };

    //función para ordenar por título
    function ordenarTitulo(){
        let arrayItems = [];

        for(let i = 0; i < itemsLista.length; i++){
            arrayItems.push(itemsLista[i]);
        }

        arrayItems.sort((a, b) => {
            //obtendo la primera letra de cada título para luego poder comparar y ordenador los títulos
            let primeraLetraA = a.innerText.trim().toLowerCase()[0];
            let primeraLetraB = b.innerText.trim().toLowerCase()[0];

            if(primeraLetraA < primeraLetraB) return -1; //si la letra A está por debajo de B, va primero por que por defecto sort ordena de forma ascendente
            if(primeraLetraA > primeraLetraB) return 1; //si la letra A está por debajo de B, va después
            return 0; //si son iguales
        });

        for(let j = 0; j < arrayItems.length; j++){
            lista.appendChild(arrayItems[j]);
        }
    };

    //función para ordenador por autor
    //el autor está dentro de una etique em, así que lo usaré para extraerlo
    function ordenarAutor(){
        let arrayItems = [];

        for(let i = 0; i < itemsLista.length; i++){
            arrayItems.push(itemsLista[i]);
        }

        arrayItems.sort((a, b) => {
            let autorA = a.querySelector("a em").innerText.trim().toLowerCase();
            let autorB = b.querySelector("a em").innerText.trim().toLowerCase();

            if (autorA < autorB) return -1;  
            if (autorA > autorB) return 1;  
            return 0; 
        });

        for(let j = 0; j < arrayItems.length; j++) {
            lista.appendChild(arrayItems[j]);
        }
    }

    //función para restablecer el orden de lectura
    function restablecer(){
        listaOriginal.forEach(item => {
            lista.appendChild(item);
        })
    }

    botonTitulo.addEventListener("click", ordenarTitulo);
    botonAutor.addEventListener("click", ordenarAutor);
    botonReset.addEventListener('click', restablecer);
}

//Cambiar al modo oscuro
modoOscuro.addEventListener("click", () => {
    //compruebo si el icono de la luna se muestra
    if (modoOscuro.src.includes('img/moon.png')) {
        //se cambia la imagen
        modoOscuro.src = 'img/star.png';
        //añadir la clase .on a todos los elementos
        document.querySelector('body').classList.add('on');
        document.querySelector('.contenedor').classList.add('on');
        document.querySelector('nav').classList.add('on');
        
        //h1, h2, p, nav ul li a, button y footer
        document.querySelectorAll('h1, h2', 'h3').forEach(item => item.classList.add('on'));
        document.querySelectorAll('p').forEach(item => item.classList.add('on'));
        document.querySelectorAll('nav ul li a').forEach(item => item.classList.add('on'));
        document.querySelectorAll('button').forEach(item => item.classList.add('on'));
        document.querySelectorAll('.enlaces li a').forEach(item => item.classList.add('on'));
        document.querySelector('footer').classList.add('on');
    } else {
        //vuelve a la imagen moon
        modoOscuro.src = 'img/moon.png';
        
        //quitar la clase .on para volver al modo claro
        document.querySelector('body').classList.remove('on');
        document.querySelector('.contenedor').classList.remove('on');
        document.querySelector('nav').classList.remove('on');

        //h1, h2, p, nav ul li a, button y footer
        document.querySelectorAll('h1, h2', 'h3').forEach(item => item.classList.remove('on'));
        document.querySelectorAll('p').forEach(item => item.classList.remove('on'));
        document.querySelectorAll('nav ul li a').forEach(item => item.classList.remove('on'));
        document.querySelectorAll('button').forEach(item => item.classList.remove('on'));
        document.querySelectorAll('.enlaces li a').forEach(item => item.classList.remove('on'));
        document.querySelector('footer').classList.remove('on');
    }
});