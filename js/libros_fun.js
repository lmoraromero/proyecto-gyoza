let lista = document.querySelector(".libros ul");
let itemsLista = lista.getElementsByTagName("li");
let listaOriginal = []; //creao un array vacío para poder guardar la lista original de libros

const botonTitulo = document.querySelector(".title");
const botonAutor = document.querySelector('.author');
const botonReset = document.querySelector('.reset');

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