/*Esto hace que cuando se cargue el documento se ejecute la funcion "traerProductos"*/
document.addEventListener('DOMContentLoaded', traerProductos);
const contenedor = document.querySelector('#contenedor');

/*A través del método GET traigo los datos de los productos de la fakestore API */
function traerProductos() {
  const url = 'https://fakestoreapi.com/products';

  fetch(url)
    .then(resultado => resultado.json())
    .then(respuesta => {
      pintarProductos(respuesta);
    })
    .catch(error => {
      console.log(error);
    });
}

/*Funcion que lleva los datos traidos de la API al HTML a través de DOM */
function pintarProductos(productos) {
  contenedor.innerHTML = '';

/**El "forEach" se encarga de que esto se repite para cada objeto obtenido de la API */
  productos.forEach(prod => {
    const { id, title, price, category, description, image } = prod;
    contenedor.innerHTML += `
      <div class="tarjeta">
        <div class="titulo">
          ${title}
        </div>
        <div class="cuerpo">
          <img src="${image}" alt="muestra">
          <p>Descripción: ${description}</p>
          <p>Categoría: ${category}</p>
          <p>$${price}</p>
        </div>
        <div class="pie">
          <a href="#" onclick=verProducto(${id})>Ver producto</a>
        </div>
      </div>
    `;
  });
}


/*Aca busca uno por uno los textos en los campos del formulario*/
    function agregarProducto(event) {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const price = parseFloat(document.getElementById('price').value);
      const description = document.getElementById('description').value;
      const image = document.getElementById('image').value;
      const category = document.getElementById('category').value;

/*Esta sección convierte las variables en un objeto de javascript, mas tarde lo transformaremos en json*/
      const datosProducto = {
        title: title,
        price: price,
        description: description,
        image: image,
        category: category
      };

/*Utilizo un metodo post a traves de un fetch para enviar una solicitud a la url*/

      fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        /*Convierto el objeto javascript en json*/
        body: JSON.stringify(datosProducto),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .then(json => {
          console.log(json);
          traerProductos(); // Actualizar la lista de productos después de agregar uno nuevo
        })
        .catch(err => console.error(err));
    }

    const form = document.getElementById('productForm');
    form.addEventListener('submit', agregarProducto);

/*La función agregarProducto() estaba pensada que para cuando se enviara el 
fomrularioel nuevo producto tambien se recargara en la pagina como una nueva 
tarjeta. Pero la documentación de la api menciona que no se puede*/
