
//En este archivo se gestiona la carga y la ordenación de los libros

fetch("datos/resenas.json")
.then(respuesta => respuesta.json())
.then(libros => {
    const lista = document.querySelector(".libros ul");
    const botonTitulo = document.querySelector(".title");
    const botonAutor = document.querySelector(".author");
    const botonReset = document.querySelector(".reset");
    const listaOriginal = [];

    //cargo los libros en la lista
    libros.forEach(libro => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="review.html?id=${libro.id}">${libro.titulo} - <em>${libro.autor_libro}</em></a>`;
        lista.appendChild(li);
    });

    const itemsLista = lista.getElementsByTagName("li");

    //se guarda el orden original ya que al ordenarlos se perderá y así se pueden restaurar más tarde
    for(let i = 0; i < itemsLista.length; i++){
        listaOriginal.push(itemsLista[i]);
    };

    //función para ordenar por título
    function ordenarTitulo(){
        const arrayItems = [];

        for(let i = 0; i < itemsLista.length; i++){
            arrayItems.push(itemsLista[i]);
        }

        arrayItems.sort((a, b) => {
            //obtengo la primera letra de cada título para luego poder comparar y ordenar los títulos
            const primeraLetraA = a.innerText.trim().toLowerCase()[0];
            const primeraLetraB = b.innerText.trim().toLowerCase()[0];

            if(primeraLetraA < primeraLetraB) return -1; //si la letra A está por debajo de B, va primero porque sort ordena de forma ascendente
            if(primeraLetraA > primeraLetraB) return 1; //si la letra A está por encima de B, va después
            return 0;//si son iguales
        });

        for(let j = 0; j < arrayItems.length; j++){
            lista.appendChild(arrayItems[j]);
        }
    }

    //función para ordenar por autor
    //el autor está dentro de una etiqueta em, así que lo usaré para extraerlo
    function ordenarAutor(){
        const arrayItems = [];

        for(let i = 0; i < itemsLista.length; i++){
            arrayItems.push(itemsLista[i]);
        }

        arrayItems.sort((a, b) => {
            const autorA = a.querySelector("a em").innerText.trim().toLowerCase();
            const autorB = b.querySelector("a em").innerText.trim().toLowerCase();

            if(autorA < autorB) return -1;
            if(autorA > autorB) return 1;
            return 0;
        });

        for(let j = 0; j < arrayItems.length; j++){
            lista.appendChild(arrayItems[j]);
        }
    }

    //función para restablecer el orden de lectura
    function restablecer(){
        listaOriginal.forEach(item => {
            lista.appendChild(item);
        });
    }

    //asocio los botones con sus respectivas funciones
    botonTitulo.addEventListener("click", ordenarTitulo);
    botonAutor.addEventListener("click", ordenarAutor);
    botonReset.addEventListener("click", restablecer);
})
.catch(error => console.error("Error cargando los libros:", error));


