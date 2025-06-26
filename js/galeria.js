
//Objeto elementos  que declaro para mantener la info de cada slide 
const elementos = [
    {
      imagen: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
      fecha: "Enero 1, 2025",
      titulo: "Top 10 Libros del 2024",
      descripcion: "Descubrí cuáles fueron los libros más elegidos y preferidos por los lectores argentinos durante el año 2024.",
      enlace: "#"
    },
    {
      imagen: "https://builder.bootstrapmade.com/static/img/blog/blog-post-3.webp",
      fecha: "Marzo 23, 2025",
      titulo: "Programa de alfabetización temprana",
      descripcion: "La palabra escrita es la puerta al conocimiento.",
      enlace: "#"
    },
    {
      imagen: "https://www.infobae.com/resizer/v2/WDEJLA5YWBATLA3CDS7FA67PCI.jpg?auth=340d7a6e911cb1cdb75d89d98d300ecad46cc52337611fd7a14c9c51c5766421&smart=true&width=992&height=655&quality=85",
      fecha: "Febrero 20, 2025",
      titulo: "49ª Feria Internacional del Libro",
      descripcion: "Se realizará del 24 de abril al 12 de mayo de 2025, en el Predio Ferial La Rural.",
      enlace: "#"
    }
  ];


  const imagenPrincipal = document.getElementById('imagenPrincipal');
  const fechaPrincipal = document.getElementById('fechaPrincipal');
  const tituloPrincipal = document.getElementById('tituloPrincipal');
  const descripcionPrincipal = document.getElementById('descripcionPrincipal');
  const enlacePrincipal = document.getElementById('enlacePrincipal');

  function actualizarPrincipal(indice) {
    const item = elementos[indice];
    imagenPrincipal.src = item.imagen;
    fechaPrincipal.textContent = item.fecha;
    tituloPrincipal.textContent = item.titulo;
    descripcionPrincipal.textContent = item.descripcion;
    enlacePrincipal.href = item.enlace;

    document.querySelectorAll('.miniatura-imagen').forEach((img, i) => {
      img.classList.toggle('activa', i === indice);
    });
  }

  elementos.forEach((item, indice) => {
    const contenedor = document.createElement('div');
    contenedor.className = 'contenedor-miniatura';

    const img = document.createElement('img');
    img.src = item.imagen;
    img.alt = item.titulo;
    img.className = 'miniatura-imagen rounded shadow-sm';
    if (indice === 0) img.classList.add('activa');
    img.addEventListener('click', () => actualizarPrincipal(indice));

    contenedor.appendChild(img);
    contenedorMiniaturas.appendChild(contenedor);
  });

  actualizarPrincipal(0);
