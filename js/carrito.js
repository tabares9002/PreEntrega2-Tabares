function renderProductos() {
    let productos = cargarCarrito();
    let contenido = "";
    
    if (cantidadTotalCarrito() > 0){
        contenido += `<table class="table"`;

        productos.forEach(producto => {
            contenido += `<tr>
            <td><img src="${producto.imagen}" alt "${producto.nombre}" width="48"></td>
            <td>${producto.nombre}</td>
            <td><b>${producto.precio}</b></td>
            <td class="text-end"><img src="./assets/img/trash3.svg" alt="Eliminar" title="Eliminar" width="24" onclick="eliminarProducto(${producto.id});"></td>
            </tr>
            </div>`;
        });
    
        contenido += `<tr>
        <td>&nbsp;</td>
        <td>Saldo Total</td>
        <td><b>$${sumaTotal()}</b></td>
        <td>&nbsp;</td>
        </tr>
        </table>`;
        
    } else {
        contenido += `<div class="alert alert-danger" role="alert">
        No se encontraron productos en el carrito!
        </div>`
    }

    document.getElementById("contenido").innerHTML = contenido;
    };
    

function eliminarProducto(id) {
    const carrito = cargarCarrito();
    const nuevoCarrito = carrito.filter(item => item.id != id)
    guardarCarrito(nuevoCarrito);
    numeroBotonCarrito()
    renderProductos()
}

function vaciarCarrito() {
localStorage.removeItem("carrito");
}

function cantidadTotalCarrito() {
    const carrito = cargarCarrito();

    //return carrito.reduce((acumulador, item) => acumulador += item)
    return carrito.length;
}

function sumaTotal() {
    const carrito = cargarCarrito();
    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0)
}

function numeroBotonCarrito() {
    let botonCarrito = document.getElementById("botonCarrito");
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="./assets/img/cart2.svg" alt="Logo" width="30">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${cantidadTotalCarrito()}
    <span class="visually-hidden">unread messages</span>
    </span>
    </button>`;
    botonCarrito.innerHTML = contenido;
}


renderProductos();
numeroBotonCarrito()