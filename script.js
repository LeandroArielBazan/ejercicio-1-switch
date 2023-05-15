const pPrecioTotal = document.querySelector("#precio-total");
const selectCantidad = document.querySelector ("select");

const PRECIO_PRODUCTO_1 = 500;
const NOMBRE_PROD_1 = "Auto";

const PRECIO_PRODUCTO_2 = 300;
const NOMBRE_PROD_2 = "Auto 2";

let precioProductoActual = PRECIO_PRODUCTO_1;
let nombreProductoActual = NOMBRE_PROD_1; 


let precioTotal = 0;

const olCarrito = document.querySelector ("#carrito");
const fsContenedorProducto = document.querySelector ("#contenedor-producto");


function agregarProducto(){
    precioTotal = (precioProductoActual * selectCantidad.value) + precioTotal;
    pPrecioTotal.innerHTML = "Total: $" + (precioTotal);
    olCarrito.innerHTML += `<li> ${nombreProductoActual} (${selectCantidad.value}) </li>`;
}

function pasarProducto(){
fsContenedorProducto. innerHTML =`<img src="https://apollo-virginia.akamaized.net/v1/files/ov0b632j9b7x1-AR/image;s=360x0" alt="">
<p>Auto 2</p>
<p>Precio : $300</p>
`;
}

precioProductoActual = PRECIO_PRODUCTO_2;
nombreProductoActual = NOMBRE_PROD_2;


