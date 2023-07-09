const productos = [
    { id: 1, nombre: "Monitor", imagen: "https://http2.mlstatic.com/D_NQ_NP_946652-MLA45732116932_042021-O.webp", precio: 250 },
    { id: 2, nombre: "Mouse", imagen: "https://http2.mlstatic.com/D_NQ_NP_945737-MLA50896130021_072022-V.webp", precio: 15 },
    { id: 3, nombre: "Teclado", imagen: "https://http2.mlstatic.com/D_NQ_NP_673881-MLA45341666013_032021-V.webp", precio: 12 },
    { id: 4, nombre: "Parlantes", imagen: "https://http2.mlstatic.com/D_NQ_NP_964150-MLA47543087029_092021-V.webp", precio: 10 },
    { id: 5, nombre: "Gabinete", imagen: "https://http2.mlstatic.com/D_NQ_NP_925599-MLU53478888593_012023-V.webp", precio: 120 },
    { id: 6, nombre: "Motherboard", imagen: "https://http2.mlstatic.com/D_NQ_NP_801880-MLA47163907374_082021-V.webp", precio: 120 },
    { id: 7, nombre: "Fan RGB", imagen: "https://http2.mlstatic.com/D_NQ_NP_662635-MLU69116237294_042023-V.webp", precio: 120 }
]

function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductos() {
    return JSON.parse(localStorage.getItem("productos"));
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function agregarProducto(id) {
    const carrito = cargarCarrito();
    const producto = buscarProducto(id)
    carrito.push(producto);
    guardarCarrito(carrito);
    numeroBotonCarrito();
}

function buscarProducto(id){
    const productos = cargarProductos();
    return productos.find(item => item.id === id);
}

function verProducto(id) {
    let productos = cargarProductos();
    let producto = productos.find(item => item.id == id);
    localStorage.setItem("producto", JSON.stringify(producto));
    location.href = "detalle-producto.html";
}

function renderProductos() {
    let productos = cargarProductos();
    let textoBusqueda = document.getElementById("busqueda").value;
    let contenido = "";

    productos = textoBusqueda ? productos.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : productos;

    if (productos.length > 0) {
        productos.forEach(producto => {
            contenido += `<div class="col-md-3 mb-5">
            <div class="card text-center border border-0 text-dark card-height">
            <img src = "${producto.imagen}" class="card-img-top" alt = "${producto.nombre}">
                <div class="card-body">
                <p class="card-text text-primary"><b>${producto.precio}</b></p>
                <h4>${producto.nombre}</h4> 
                <p><button class="btn btn-primary" onClick="verProducto(${producto.id});">Ver Producto</button></p>
                </div>
        </div>
    </div>`;
        });
    } else {
        contenido += `<div class="alert alert-danger" role="alert">
        No se encontró el producto
        </div>`
    }
    
    document.getElementById("contenido").innerHTML = contenido;
};


guardarProductos();
renderProductos();
