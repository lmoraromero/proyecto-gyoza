fetch("datos/resenas.json")
            .then(respuesta => respuesta.json())
            .then(libros => {
                const ul = document.querySelector(".libros ul");
                ul.innerHTML = "";

                libros.forEach(libro => {
                    const li = document.createElement("li");
                    li.innerHTML = `<a href="review.html?id=${libro.id}">${libro.titulo} - <em>${libro.autor_libro}</em></a>`;
                    ul.appendChild(li);
                });
            });