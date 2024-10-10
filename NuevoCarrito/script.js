document.addEventListener('DOMContentLoaded', function(event) {

    const listadoProductos = [{
        nombre: "iPhone 13",
        sku: "0K3QOSOV4V",
        precio: 1399.90
    },
    {
        nombre: "Cargador",
        sku: "1S7QOSFGE4",
        precio: 29.99
    },
    {
        nombre: "Funda de piel",
        sku: "7L4HVAZF4B",
        precio: 16.95
    }];

        listadoProductos.forEach(function(producto){
            
        });

        const celda = document.getElementById('cuerpoTabla');
        const row = document.createElement('tr')
        const producto1 = document.createElement('td');
        const span1 = document.createElement('span');
        const producto2 = document.createElement('td');
        const producto3 = document.createElement('td');
        const producto4 = document.createElement('td');
        producto1.innerText = "iPhone 45";
        producto2.innerText = "- +";
        producto3.innerText = "iPhone 45";
        producto4.innerText = "iPhone 45";
        span1.innerText = "Sku: jkshadkjsdhjas"

        producto1.classList.add('celda');
        
        producto1.appendChild(span1);
        row.appendChild(producto1);
        row.appendChild(producto2);
        row.appendChild(producto3);
        row.appendChild(producto4);
        celda.append(row);


    });