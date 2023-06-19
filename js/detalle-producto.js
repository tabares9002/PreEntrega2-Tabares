function renderProducto() {
    let producto = JSON.parse(localStorage.getItem("producto"));
    let contenido = `<div class="col-md-4 offset-md-2">
<img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
</div>
<div class="col-md-4">
<h2>${producto.nombre}</h2> 
    <p class="text-primary"><b>${producto.precio}</b></p>
    <p><button class="btn btn-primary");">Agregar al Carrito</button></p>
</div>`;
    document.getElementById("contenido").innerHTML = contenido;
}

renderProducto()