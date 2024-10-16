import Carrito from './Carrito.js';

document.addEventListener('DOMContentLoaded', function(event) {
    const carrito = new Carrito();
    var listadoProductos = [];
    var moneda;

    const cargarProductos = (productos) => {
        listadoProductos = productos.productos;
        moneda = productos.moneda;
        console.log(listadoProductos);
        console.log(`La moneda es  ${moneda}`)
    

        listadoProductos.forEach(function(producto){
            const celda = document.getElementById('cuerpoTabla');
            const row = document.createElement('tr');
            const cel1 = document.createElement('td');
            const span1 = document.createElement('span');
            const cel2 = document.createElement('td');
            const btnMenos = document.createElement('button');
            const inputCantidad = document.createElement('input');
            inputCantidad.type = 'number'; 
            inputCantidad.min = 0;
            const btnMas = document.createElement('button');
            const cel3 = document.createElement('td');
            const cel4 = document.createElement('td');
            cel1.innerText = producto.nombre;
            inputCantidad.value = 0;
            cel3.innerText = producto.precio + moneda;
            cel4.innerText = (producto.precio*inputCantidad.value).toFixed(2) + " " + moneda;

            span1.innerText = "SKU: "  + producto.sku;
            btnMenos.innerText = "-";
            btnMas.innerText = "+";

            const sku = producto.sku;
        
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

            btnMenos.addEventListener('click', function(){

                if(inputCantidad.value > 0){
                    inputCantidad.value --;
                    cel4.innerText = (producto.precio*inputCantidad.value).toFixed(2) + productos.moneda;
                    actualizarCarrito(sku, inputCantidad.value)
                } 
                if(inputCantidad.value === 0){
                    const fila = document.getElementById(`fila-${sku}`);
                    if (fila) {
                        carrito.eliminarProducto(sku);
                        fila.remove();
                    }
                }
                carrito.obtenerCarrito();
            });

            btnMas.addEventListener('click', function(){
                if(inputCantidad.value < 99){
                    inputCantidad.value++;
                    cel4.innerText = (producto.precio*inputCantidad.value).toFixed(2) + productos.moneda;
                    agregarProducto(producto, inputCantidad.value);
                }
                carrito.obtenerCarrito();                
            });

            inputCantidad.addEventListener('blur', function(event){
                if(inputCantidad.value <= 0 ){
                    inputCantidad.value = 0;
                    const fila = document.getElementById(`fila-${sku}`);
                    if (fila) {
                        carrito.eliminarProducto(sku);
                        fila.remove();
                    }
                } 

                if(inputCantidad.value > 99){
                    inputCantidad.value = 99;
                    cel4.innerText = (producto.precio*inputCantidad.value).toFixed(2) + productos.moneda;
                    agregarProducto(producto, inputCantidad.value);
                    carrito.actualizarCarrito(producto, inputCantidad.value);
                } else {
                    producto.cantidad = inputCantidad.value;
                    cel4.innerText = (producto.precio*inputCantidad.value).toFixed(2) + productos.moneda;
                    carrito.actualizarCarrito(producto, inputCantidad.value);
                } 
                carrito.obtenerCarrito();
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
    
    function agregarProducto(producto, inputCantidad){
        const sku = producto.sku;
        const fila = document.getElementById(`fila-${sku}`);
        if(fila){
            carrito.actualizarCarrito(producto, inputCantidad.value);
            fila.querySelector('.celda1').innerText = carrito.obtenerCarrito(producto.nombre) + " x " + inputCantidad.value;
            fila.querySelector('.celda2').innerText = inputCantidad.value*carrito.obtenerCarrito(producto.precio);
        } else {
            carrito.obtenerInfoProducto(producto, inputCantidad.value);
            const celda = document.getElementById('cuerpoCarrito');
            const row = document.createElement('tr');
            row.id = `fila-${sku}`;
            const cel1 = document.createElement('td');
            const cel2 = document.createElement('td');
            
            row.classList.add('fila');
            cel1.classList.add('celda1');
            cel2.classList.add('celda2');
            cel1.innerText = carrito.obtenerInfoProducto(producto.nombre) + " x " + carrito.obtenerInfoProducto(producto.cantidad);
            cel2.innerText = carrito.obtenerInfoProducto(producto.cantidad) * carrito.obtenerInfoProducto(producto.precio);
            
            row.appendChild(cel1);
            row.appendChild(cel2);
            celda.append(row);
            alert("Se ha agregado al carrito " + producto.nombre + " cantidad " + inputCantidad);
            carrito.obtenerCarrito();
        }
    
    };
});

