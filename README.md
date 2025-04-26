# Proyecto: El Club de la Gyoza

## Introducción
El club de la gyoza es un proyecto de diseño web creado con el objetivo de organizar las reseñas de los libros leídos en conjunto, de una forma que permita a las componentes del club acceder a las opiniones y puntuaciones de los libros leídos.

Para la creación del proyecto se han utilizado varías tecnologías web: HTML5 para la estructura general de las páginas, CSS3 para darle un estilo y JavaScript para implementar funcionalidades dinámicas. Además, se ha utilizado un archivo JSON para almacenar los datos de los libros de manera organizada.

El desarrollo del proyecto me ha permitido poner en práctica conceptos fundamentales en el desarrollo frontend, como pueden ser la maquetación responsive de una página web, el uso de JavaScript para generar contenido dinámico en la web mediante el uso del DOM y gestión básica de datos a través de archivos JSON.

## Composición del proyecto
El proyecto está organizado en varias carpetas y archivos, siguiendo la estructura:

### Archivos HTML:
- `index.html`: página principal.
- `nosotras.html`: página de presentación de las componentes del club.
- `generador.html`: página con un generador de libros aleatorios.
- `libros.html`: página que recoge la lista de las reseñas realizadas.
- `review.html`: página que muestra la reseña individual por libro.

### Carpeta `css/`:
Contiene los archivos de estilos en CSS. Contiene un archivo de estilo general y otros individuales por página.

### Carpeta `img/`:
Contiene imágenes de los iconos utilizados, los fondos y los retratos de las componentes.

### Carpeta `portadas/`:
Contiene las imágenes de portada de los libros reseñados.

### Carpeta `js/`:
Contiene el archivo `funciones.js`, que gestiona la interacción dinámica de la web como la generación de títulos aleatorios, la ordenación de los libros por orden alfabético o la activación del modo oscuro.

### Carpeta `datos/`:
Contiene el archivo `resenas.json`, que almacena los datos estructurados de los libros reseñados: id, título, autor, género, páginas, fecha de publicación, cuándo se leyó y las reseñas.

## Iconos y paleta de colores

Los iconos utilizados en la web fueron obtenidos de las siguientes plataformas:
- [Iconfinder](https://www.iconfinder.com/) (el icono de la gyoza en el navegador, también el de la luna y la estrella para el modo claro y oscuro).
- [Flaticon](https://www.flaticon.com/) (icono del libro en el modo responsive).

Los fondos y retratos de las componentes del club fueron dibujados personalmente para el proyecto, ya que quería aportar un toque personal a la web.

### Paleta de colores seleccionada:
#### Modo claro:
- **Morado oscuro** (#5b3c6f): Para títulos y encabezados.
- **Morado claro** (#a992ca): Para botones y pie de página.
- **Rosa suave** (#f8a4d9): Para enlaces y elementos interactivos.
- **Gris claro** (rgba(245, 245, 245, 0.8)): Para el fondo principal.

#### Modo oscuro:
- **Violeta oscuro** (#8435c1): Para botones y pie de página.
- **Morado fuerte** (#3e1f6e): Para el fondo del menú de navegación.
- **Rosa claro** (#f0a6ca): Para títulos y textos destacados.
- **Lavanda suave** (#d4c0f3): Para textos generales.

## Next steps y mejoras

Aunque el proyecto cumple la función de compartir las reseñas de los libros leídos dentro del club, hay algunas ideas que me gustaría implementar en el futuro para hacer la página más interactiva y completa:

- **Implementación de usuarios registrados**: permitir que los usuarios se registren y puedan subir a la web sus propias reseñas.
- **Fichas de libro**: permitir que los usuarios puedan añadir nuevos libros a la web.
- **Sistema de valoraciones**: permitir que los usuarios puntuen los libros.
- **Conexión con una API para recomendaciones**: integrar una API para generar recomendaciones de libros basadas en género, autor, etc.
- **Mejoras en la interfaz**: optimizar la web.
