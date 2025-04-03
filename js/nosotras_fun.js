const contenido = document.querySelector(".contenido");
const imgAna = document.querySelector(".ana img");
const uno = document.querySelector(".uno");
const imgLaura = document.querySelector(".laura img");
const dos = document.querySelector(".dos");
const flechas = document.querySelectorAll(".flecha");
const modoOscuro = document.querySelector("img.oscuro");

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
        document.querySelectorAll('p').forEach(item => item.classList.add('on'));
        document.querySelectorAll('nav ul li a').forEach(item => item.classList.add('on'));
        document.querySelector('footer').classList.add('on');
    } else {
        //vuelve a la imagen moon
        modoOscuro.src = 'img/moon.png';
        
        //quitar la clase .on para volver al modo claro
        document.querySelector('body').classList.remove('on');
        document.querySelector('.contenedor').classList.remove('on');
        document.querySelector('nav').classList.remove('on');

        //h1, h2, p, nav ul li a, button y footer
        document.querySelectorAll('p').forEach(item => item.classList.remove('on'));
        document.querySelectorAll('nav ul li a').forEach(item => item.classList.remove('on'));
        document.querySelector('footer').classList.remove('on');
    }
});