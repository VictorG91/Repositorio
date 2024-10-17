import Carrito from './Carrito.js';

document.addEventListener('DOMContentLoaded', function(event) {
    const carrito = new Carrito();
    let listadoProductos = [];
    let moneda;

    const cargarProductos = (productos) => {
        listadoProductos = productos.productos;
        moneda = productos.moneda;

        listadoProductos.forEach(function(producto) {
            const celda = document.getElementById('cuerpoTabla');
            const row = document.createElement('tr');
            const cel1 = document.createElement('td');
            const span1 = document.createElement('span');
            const cel2 = document.createElement('td');
            const btnMenos = document.createElement('button');
            const inputCantidad = document.createElement('input');
            inputCantidad.type = 'number';
            inputCantidad.min = 0;
            inputCantidad.value = 0;
            const btnMas = document.createElement('button');
            const cel3 = document.createElement('td');
            const cel4 = document.createElement('td');

            cel1.innerText = producto.nombre;
            cel3.innerText = parseFloat(producto.precio).toFixed(2) + " " + moneda;
            cel4.innerText = (parseFloat(producto.precio) * inputCantidad.value).toFixed(2) + " " + moneda;
            span1.innerText = "SKU: " + producto.sku;
            btnMenos.innerText = "-";
            btnMas.innerText = "+";

            cel1.classList.add('celda');
            cel2.classList.add('cantidades');
            inputCantidad.classList.add('inputCantidad');

            cel1.appendChild(span1);
            cel2.appendChild(btnMenos);
            cel2.appendChild(inputCantidad);
            cel2.appendChild(btnMas);
            row.appendChild(cel1);
            row.appendChild(cel2);
            row.appendChild(cel3);
            row.appendChild(cel4);
            celda.append(row);

 
            btnMenos.addEventListener('click', function() {
                if (inputCantidad.value > 0) {
                    inputCantidad.value--;
                    cel4.innerText = (parseFloat(producto.precio) * inputCantidad.value).toFixed(2) + " " + moneda;
                    actualizarProductoEnCarrito(producto, inputCantidad.value); 
                }
            });

            btnMas.addEventListener('click', function() {
                if (inputCantidad.value < 99) {
                    inputCantidad.value++;
                    cel4.innerText = (parseFloat(producto.precio) * inputCantidad.value).toFixed(2) + " " + moneda;
                    actualizarProductoEnCarrito(producto, inputCantidad.value); 
                }
            });

            inputCantidad.addEventListener('blur', function() {
                if (inputCantidad.value <= 0) {
                    inputCantidad.value = 0;
                    actualizarProductoEnCarrito(producto, 0); 
                } else {
                    actualizarProductoEnCarrito(producto, inputCantidad.value);
                }
            });
        });
    };


    fetch("https://jsonblob.com/api/1294974729289850880")
        .then(response => response.json())
        .then(productos => {
            cargarProductos(productos);
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });


    function actualizarProductoEnCarrito(producto, cantidad) {
        carrito.actualizarCarrito(producto, cantidad); 
        imprimirCarrito();
    }


    function imprimirCarrito() {
        const cuerpoCarrito = document.getElementById('cuerpoCarrito');
        cuerpoCarrito.innerHTML = ''; 
        const carritoProductos = carrito.obtenerCarrito();

        carritoProductos.productos.forEach((prod) => {
            const row = document.createElement('tr');
            const cel1 = document.createElement('td');
            const cel2 = document.createElement('td');


            cel1.innerText = prod.nombre + " x " + prod.cantidad;
            cel2.innerText = (parseFloat(prod.precio) * prod.cantidad).toFixed(2) + " " + carritoProductos.moneda;

            row.appendChild(cel1);
            row.appendChild(cel2);
            cuerpoCarrito.appendChild(row);
        });

        const footerCarrito = document.getElementById('footerCarrito');
        footerCarrito.innerText = "Total: " + carritoProductos.total + carritoProductos.moneda;
    }
});
