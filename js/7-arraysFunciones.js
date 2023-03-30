let productos = [
    "Hidratante facial",
    "Tonico exfoliante",
    "Protector solar factor 50",
    "Protector solar toque seco factor 50",
    "Protector solar con color factor 50",
    "Gel de limpieza facial",
    "Tonico hidratante",
    "Sérum hidratante",
    "Exfoliante de azúcar cherry",
    "Pads de hidrogel para contorno de ojos",
    "Mascarilla facial",
    "Sérum facial con PHA",
    "Agua micellar",
    "Mascara de hidratación y reparación",
    "Protector solar en barra",
    "Crema contorno de ojos",
    "Bálsamo labial",
  ];

  //mostrar la lista de productos
  const mostrarProductos = (titulo = 'No hay un titulo disponible', arreglo) => {
    document.write(`<h2>${titulo}</h2>`);
    document.write("<ul>");
    // for (let indice = 0; indice < peliculas.length; indice++) {
    //   document.write(`<li>${peliculas[indice]} </li>`);
    // }
    // arreglo.forEach((producto) => { document.write(`<li>${producto} </li>`); })
    //map
      arreglo.map(producto => document.write(`<li>${producto} </li>`) )    
    // forEach, for in, for of
    document.write("</ul>");
  };

  mostrarProductos('Lista de productos', productos);

  //filtrar los protectores solares
 let listaProtectoresSolares = productos.filter(producto => producto.includes('Protector'))
 console.log(listaProtectoresSolares)

 mostrarProductos('Protectores solares', listaProtectoresSolares);
  
 //buscar un serum find
 let serum = productos.find(producto => producto.includes('Sérum'));
 let otroProducto = productos.find(producto => producto.includes('shampoo') === true );

 document.write(`<p>Producto buscado: ${serum}</p>`)
 document.write(`<p>Producto buscado: ${ otroProducto === undefined ? 'no encontramos el producto solicitado' : otroProducto }</p>`)

