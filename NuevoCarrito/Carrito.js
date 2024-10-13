export default class Carrito {


    constructor() {
        this.productos = new Map();
    }

    agregarProducto(producto){
        const sku = producto.sku;
        if (this.productos.has(producto)){
            this.productos.set(producto);
            this.actualizarCarrito(producto);
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
            this.productos.set(producto);
        }
    };

    actualizarCarrito(producto){
        const sku = producto.sku;
        const fila = document.getElementById(`fila-${sku}`);
        if (producto.cantidad === 0){
            eliminarProducto(sku); 
        }
        if(fila){
            fila.querySelector('.celda1').innerText = producto.nombre + " x " + producto.cantidad;
            fila.querySelector('.celda2').innerText = producto.cantidad*producto.precio;
            this.productos.set(sku, producto);
        }
    };

    eliminarProducto(sku) {
        const fila = document.getElementById(`fila-${sku}`);
        if (fila) {
            fila.remove();
            this.productos.delete(sku);
        }
    }
    
}