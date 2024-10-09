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

    const section = document.getElementById('principal');
    const producto1 = document.createElement('p');
    producto1.innerText = "iPhone 13";

    section.append(producto1);
});

    
