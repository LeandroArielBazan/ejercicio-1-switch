const pPrecioTotal = document.querySelector("#precio-total");
const selectCantidad = document.querySelector ("select");
const PRECIO_PRODUCTO_1 = 500;

const olCarrito = document.querySelector ("#carrito")
const NOMBRE_PROD_1 = "Auto" 

let precioTotal = 0;

function agregarProducto(){
    precioTotal = (PRECIO_PRODUCTO_1 * selectCantidad.value) + precioTotal;
    pPrecioTotal.innerHTML = "Total: $" + (precioTotal);
    olCarrito.innerHTML += `<li> ${NOMBRE_PROD_1} (${selectCantidad.value}) </li>`;
}
