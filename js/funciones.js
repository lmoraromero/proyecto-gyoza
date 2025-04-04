const titulo = document.querySelector(".titulo");
const info = document.querySelector(".info");
const botonConocer = document.querySelector(".titulo button");
const botonVolver = document.querySelector(".info button");
const modoOscuro = document.querySelector("img.oscuro");


//Botones cambian a la clase visible, removiendo la clase al anterior
botonConocer.addEventListener("click", () => {
    titulo.classList.remove("visible");
    info.classList.add("visible");
});
botonVolver.addEventListener("click", () => {
    info.classList.remove("visible");
    titulo.classList.add("visible");
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
        document.querySelectorAll('h1, h2').forEach(item => item.classList.add('on'));
        document.querySelectorAll('p').forEach(item => item.classList.add('on'));
        document.querySelectorAll('nav ul li a').forEach(item => item.classList.add('on'));
        document.querySelectorAll('button').forEach(item => item.classList.add('on'));
        document.querySelector('footer').classList.add('on');
    } else {
        //vuelve a la imagen moon
        modoOscuro.src = 'img/moon.png';
        
        //quitar la clase .on para volver al modo claro
        document.querySelector('body').classList.remove('on');
        document.querySelector('.contenedor').classList.remove('on');
        document.querySelector('nav').classList.remove('on');

        //h1, h2, p, nav ul li a, button y footer
        document.querySelectorAll('h1, h2').forEach(item => item.classList.remove('on'));
        document.querySelectorAll('p').forEach(item => item.classList.remove('on'));
        document.querySelectorAll('nav ul li a').forEach(item => item.classList.remove('on'));
        document.querySelectorAll('button').forEach(item => item.classList.remove('on'));
        document.querySelector('footer').classList.remove('on');
    }
});