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
            inputCantidad.value = producto.cantidad;
            cel3.innerText = producto.precio;
            const precioTotal = producto.precio*producto.cantidad;
            cel4.innerText = precioTotal;
            span1.innerText = "SKU: "  + producto.sku;
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

            
            btnMenos.addEventListener('click', function(){
                        
                if(producto.cantidad > 0){
                    producto.cantidad--;
                    inputCantidad.value = producto.cantidad;
                    cel4.innerText = producto.precio*producto.cantidad;
                    carrito.agregarProducto(producto);
                } 

            });

            btnMas.addEventListener('click', function(){
                if(producto.cantidad < 99){
                    producto.cantidad++;
                    inputCantidad.value = producto.cantidad;
                    cel4.innerText = producto.precio*producto.cantidad;
                    carrito.agregarProducto(producto);
                }
            });

            inputCantidad.addEventListener('blur', function(event){
                const sku = producto.sku;
                if(inputCantidad.value <= 0 ){
                    inputCantidad.value = 0;
                    carrito.eliminarProducto(sku);
                } 

                if(inputCantidad.value > 99){
                    inputCantidad.value = 99;
                    producto.cantidad = inputCantidad.value;
                    cel4.innerText = inputCantidad.value*producto.precio;
                    carrito.agregarProducto(producto);
                } else {
                    producto.cantidad = inputCantidad.value;
                    cel4.innerText = inputCantidad.value*producto.precio;
                    carrito.agregarProducto(producto);
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
    
});

