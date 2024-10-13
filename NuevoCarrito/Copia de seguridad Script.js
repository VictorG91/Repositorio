document.addEventListener('DOMContentLoaded', function(event) {
    const carrito = new Map();
    const listadoProductos = [{
        nombre: "iPhone 13",
        sku: "0K3QOSOV4V",
        precio: 1399.90,
        cantidad: 0
    },
    {
        nombre: "Cargador",
        sku: "1S7QOSFGE4",
        precio: 29.99,
        cantidad: 0
    },
    {
        nombre: "Funda de piel",
        sku: "7L4HVAZF4B",
        precio: 16.95,
        cantidad: 0
    },
    {
        nombre: "Cargador inalámbrico",
        sku: "0F3NBAJF6C",
        precio: 47.90,
        cantidad: 0
    }];


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
                agregarProducto(producto);
            } 

        });

        btnMas.addEventListener('click', function(){
            if(producto.cantidad < 99){
                producto.cantidad++;
                inputCantidad.value = producto.cantidad;
                cel4.innerText = producto.precio*producto.cantidad;
                agregarProducto(producto);
            }
        });

        inputCantidad.addEventListener('blur', function(event){
            const sku = producto.sku;
            if(inputCantidad.value <= 0 ){
                inputCantidad.value = 0;
                eliminarProducto(sku);
            } 

            if(inputCantidad.value > 99){
                inputCantidad.value = 99;
                producto.cantidad = inputCantidad.value;
                cel4.innerText = inputCantidad.value*producto.precio;
                agregarProducto(producto);
            } else {
                producto.cantidad = inputCantidad.value;
                cel4.innerText = inputCantidad.value*producto.precio;
                agregarProducto(producto);
            } 

        });


    });

   function agregarProducto(producto){
    const sku = producto.sku;
    if (carrito.has(producto)){
            carrito.set(producto);
            actualizarCarrito(producto);
        } else{
            const celda = document.getElementById('cuerpoCarrito');
            const row = document.createElement('tr');
            row.id = `fila-${sku}`;
            const cel1 = document.createElement('td');
            const cel2 = document.createElement('td');

            row.classList.add('fila');
            cel1.classList.add('celda1');
            cel2.classList.add('celda2');
            cel1.innerText = producto.nombre + " x " + producto.cantidad;
            cel2.innerText = producto.cantidad*producto.precio;

            row.appendChild(cel1);
            row.appendChild(cel2);
            celda.append(row);


            alert("Se ha agregado al carrito " + producto.nombre + " cantidad " + producto.cantidad);
            carrito.set(producto);
        }
    };

    function actualizarCarrito(producto){
        const sku = producto.sku;
        const fila = document.getElementById(`fila-${sku}`);
        if (producto.cantidad === 0){
            eliminarProducto(sku); 
        }
        if(fila){
            fila.querySelector('.celda1').innerText = producto.nombre + " x " + producto.cantidad;
            fila.querySelector('.celda2').innerText = producto.cantidad*producto.precio;
            carrito.set(sku, producto);
        }

    };

    function eliminarProducto(sku){
        const fila = document.getElementById(`fila-${sku}`);
        if (fila) {
            fila.remove();
            carrito.delete(sku, producto);
        }

    };

});

fetch("http://jsonblob.com/1294974729289850880")
    .then(response => response.json())
    .then(productos => (
        cargarProductos(productos)
    ))