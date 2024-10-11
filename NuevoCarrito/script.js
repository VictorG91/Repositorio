document.addEventListener('DOMContentLoaded', function(event) {

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
        const row = document.createElement('tr')
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
        cel4.innerText = producto.precio*producto.cantidad;
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
                if(inputCantidad.value === 0){
                    btnMenos.disabled;
                }

                producto.cantidad--;
                inputCantidad.value--;

        });
    
        btnMas.addEventListener('click', function(){
            producto.cantidad++;
            inputCantidad.value++;
        })
    });


});
